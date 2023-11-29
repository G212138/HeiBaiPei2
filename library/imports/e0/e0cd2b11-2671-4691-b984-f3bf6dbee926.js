"use strict";
cc._RF.push(module, 'e0cd2sRJnFGkbmE879tvukm', 'SoundManager');
// frame/scripts/Manager/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = exports.MusicType = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var GameMsg_1 = require("../SDK/GameMsg");
var ListenerManager_1 = require("./ListenerManager");
var UIManager_1 = require("./UIManager");
/** 音乐的资源名称枚举 */
var MusicType;
(function (MusicType) {
    /** 背景音乐 */
    MusicType["BGM_MUSIC"] = "BGM_MUSIC";
    /** 题干语音 */
    MusicType["TITLE_AUDIO"] = "TITLE_AUDIO";
    /** 音效 */
    MusicType["GAME_EFFECT"] = "GAME_EFFECT";
    /** 语音 */
    MusicType["GAME_AUDIO"] = "GAME_AUDIO";
})(MusicType = exports.MusicType || (exports.MusicType = {}));
var SoundManagerClass = /** @class */ (function () {
    function SoundManagerClass() {
        this.playing_sound = new Object();
        // 缓存背景音乐名字
        this.bgm = '';
        this.bgmIndex = -1;
        // 语音列表
        this._audioList = new Map();
        // 音效列表
        this._effectList = new Map();
        // 音效统一的引用计数
        this._referenceList = new Map();
        // 题干语音
        this._titleID = null;
        /** 存放音频资源的 Map */
        this._audioClipMap = new Map();
        this.MUSIC_BGM = 'bgm';
        this.AUDIO_TITLE = 'audio_sound';
    }
    SoundManagerClass.prototype.start = function () {
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.PLAYBGM, this.playBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.RESUMEBGM, this.resumeBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPBGM, this.stopBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.PLAYAUDIOTITLE, this.playAudioTitle.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPAUDIOTITLE, this.stopAudioTitle.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALLAUDIO, this.stopAllAudio.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALLEFFECT, this.stopAllEffect.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALL, this.stopAll.bind(this));
    };
    SoundManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new SoundManagerClass();
        }
        return this._instance;
    };
    // 获取音频资源
    SoundManagerClass.prototype.getAudioClip = function (clipName) {
        if (!this._audioClipMap.has(clipName)) {
            cc.log("\u672A\u7F13\u5B58\u7684\u97F3\u9891\u8D44\u6E90: " + clipName);
            return null;
        }
        else {
            return this._audioClipMap.get(clipName);
        }
    };
    // 加载resource里的音效资源
    SoundManagerClass.prototype.preLoadResAudio = function (callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR;
        cc.resources.loadDir(path, cc.AudioClip, function (error, audioClips) {
            // 错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach(function (ele) {
                // cc.log('缓存完毕! ele.name == ' + ele.name);
                _this._audioClipMap.set(ele.name, ele);
                _this._referenceList.set(ele.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    };
    // 加载frameRes里的音效资源
    SoundManagerClass.prototype.preLoadFrameAudio = function (callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.FRAME_AUDIO_DIR;
        cc.assetManager.loadBundle('frameRes', function (err, bundle) {
            if (err) {
                cc.error(err);
                callback(false);
                return;
            }
            bundle.loadDir(path, cc.AudioClip, function (error, audioClips) {
                if (error) {
                    cc.error(error);
                    callback(false);
                    return;
                }
                audioClips.forEach(function (ele) {
                    // cc.log('缓存完毕! ele.name == ' + ele.name);
                    _this._audioClipMap.set(ele.name, ele);
                    _this._referenceList.set(ele.name, 0);
                });
                callback(true);
            });
        });
    };
    // 缓存所有音频资源
    SoundManagerClass.prototype.preLoadAllAudioClips = function (callback) {
        /** 加载代码，参数为 url，资源类型，进度回调，完成回调 */
        var isCompletedLoadResAudio = false;
        var isCompletedLoadFrameAudio = false;
        this.preLoadResAudio(function (isCompleted) {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadResAudio ');
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
        this.preLoadFrameAudio(function (isCompleted) {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadFrameAudio ');
            }
            isCompletedLoadFrameAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
    };
    // 单独缓存某一个音频
    SoundManagerClass.prototype.preloadAudioClipName = function (clipName, callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + clipName;
        cc.log('preloadAudioClipName path == ' + path);
        cc.resources.load(path, cc.AudioClip, function (error, asset) {
            if (error) {
                cc.error(error);
                return;
            }
            var clip = asset;
            _this._audioClipMap.set(clipName, clip);
            _this._referenceList.set(clipName, 0);
            cc.log('缓存完毕!');
            callback();
        });
    };
    /**
     * 播放背景音乐
     * @param soundName 背景音乐文件名
     */
    SoundManagerClass.prototype.playBGM = function (soundName) {
        var _this = this;
        if (soundName === void 0) { soundName = ''; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (NetWork_1.NetWork.channel == 'blackboard' || Boolean(NetWork_1.NetWork.isSync)) {
            return;
        }
        if (soundName == '') {
            soundName = this.MUSIC_BGM;
        }
        this.bgm = soundName;
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + soundName;
        cc.resources.load(path, cc.AudioClip, function (err, asset) {
            if (err) {
                cc.error(err);
                return;
            }
            var clip = asset;
            _this.bgmIndex = cc.audioEngine.playMusic(clip, true);
        });
    };
    //重新开始播放背景音乐
    SoundManagerClass.prototype.resumeBGM = function () {
        cc.audioEngine.stopMusic();
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + this.bgm;
        cc.resources.load(path, cc.AudioClip, function (err, asset) {
            if (err) {
                cc.error(err);
                return;
            }
            var clip = asset;
            cc.audioEngine.playMusic(clip, true);
        });
    };
    // 重新开始播放背景音乐
    SoundManagerClass.prototype.stopBGM = function () {
        this.bgm = '';
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
    };
    // 设置背景音音量
    SoundManagerClass.prototype.setMusicVolume = function (volume, tweenDur) {
        var _this = this;
        if (tweenDur === void 0) { tweenDur = 0; }
        if (this.bgmIndex != -1) {
            volume = cc.misc.clamp01(volume);
            if (tweenDur == 0) {
                cc.audioEngine.setVolume(this.bgmIndex, volume);
            }
            else {
                var obj = { v: cc.audioEngine.getVolume(this.bgmIndex) };
                cc.tween(obj)
                    .to(tweenDur, { v: volume }, {
                    progress: function (start, end, current, ratio) {
                        var v = start + (end - start) * ratio;
                        cc.audioEngine.setVolume(_this.bgmIndex, v);
                    },
                })
                    .start();
            }
        }
    };
    /**
     * 播放题干语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playAudioTitle = function (clipName, bLoop, bInterupt, bMutex, endCb) {
        if (bLoop === void 0) { bLoop = false; }
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (endCb === void 0) { endCb = null; }
        // if (clipName == '') {
        //     clipName = this.AUDIO_TITLE;
        // }
        this.playAudio(clipName, bLoop, bInterupt, bMutex, endCb, true);
    };
    // ting zhi
    SoundManagerClass.prototype.stopAudioTitle = function () {
        var _this = this;
        this._audioList.forEach(function (value, key) {
            // cc.log("this._audioList value == "+value)
            // cc.log("this._audioList key == "+key)
            if (null != _this._titleID && _this._titleID === value) {
                _this._audioList.delete(key);
                cc.audioEngine.stopEffect(value);
            }
        });
        this._titleID = null;
        // 题干语音播放完回调
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.COMPLETE_TRUMPET);
    };
    /**
     * 播放语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playAudio = function (clipName, bLoop, bInterupt, bMutex, onFinished, isTitleAudio) {
        var _this = this;
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (onFinished === void 0) { onFinished = null; }
        if (isTitleAudio === void 0) { isTitleAudio = false; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (!clipName)
            return;
        bInterupt && this.stopAllAudio();
        bMutex && this.stopAllEffect();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                exports.SoundManager.preloadAudioClipName(clipName, function () {
                    clip = this._audioClipMap.get(clipName);
                    this.playAudio(clip, bLoop, bInterupt, bMutex, onFinished, isTitleAudio);
                }.bind(this));
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, bLoop);
        // 赋值titleId
        if (isTitleAudio) {
            this._titleID = id;
            cc.log('this._titleID == ' + this._titleID);
        }
        this._audioList.set(clip.name, id);
        //播放引用计数加1
        var referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                _this.stopSoundByName(clip.name);
            }
            _this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinished && onFinished();
            }, 100);
        });
    };
    /**
     * 播放音效
     *
     * @param {string} clipName 音效clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他音效,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playEffect = function (clipName, bLoop, bInterupt, bMutex, onFinished) {
        var _this = this;
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (onFinished === void 0) { onFinished = null; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (!clipName)
            return;
        bInterupt && this.stopAllEffect();
        bMutex && this.stopAllAudio();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                exports.SoundManager.preloadAudioClipName(clipName, function () {
                    clip = this._audioClipMap.get(clipName);
                    this.playEffect(clip, bLoop, bInterupt, bMutex, onFinished);
                }.bind(this));
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, bLoop);
        this._effectList.set(clip.name, id);
        //播放引用计数加1
        var referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                _this.stopSoundByName(clip.name);
            }
            _this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinished && onFinished();
            }, 100);
        });
    };
    // 设置音效大小
    SoundManagerClass.prototype.setEffectVolume = function (volume) {
        volume = cc.misc.clamp01(volume);
        this._audioList.forEach(function (value, key) {
            cc.audioEngine.setVolume(value, volume);
        });
    };
    // 停止语音
    SoundManagerClass.prototype.stopAllAudio = function () {
        var _this = this;
        this._audioList.forEach(function (value, key) {
            if (null != _this._titleID && _this._titleID === value) {
                // 题干语音播放完回调
                ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.COMPLETE_TRUMPET);
            }
            _this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._audioList = new Map();
        this._titleID = null;
    };
    // 停止音效
    SoundManagerClass.prototype.stopAllEffect = function () {
        var _this = this;
        this._effectList.forEach(function (value, key) {
            _this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._effectList = new Map();
    };
    // 停止播放指定的音频通过名字
    SoundManagerClass.prototype.stopSoundByName = function (clipName) {
        this._referenceList.set(clipName, 0);
        var id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._audioList.delete(clipName);
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._effectList.delete(clipName);
        }
    };
    // 停止正在播放的所有音频
    SoundManagerClass.prototype.stopAll = function () {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    };
    // 某个音效是否正在播放
    SoundManagerClass.prototype.isPlaying = function (clipName) {
        var id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    };
    SoundManagerClass._instance = null;
    return SoundManagerClass;
}());
exports.SoundManager = SoundManagerClass.getInstance();

cc._RF.pop();