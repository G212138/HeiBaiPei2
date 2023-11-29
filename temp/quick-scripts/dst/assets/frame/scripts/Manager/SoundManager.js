
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFNvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQscURBQW9EO0FBQ3BELDJDQUEwQztBQUMxQywwQ0FBcUM7QUFDckMscURBQW9EO0FBQ3BELHlDQUF3QztBQUV4QyxnQkFBZ0I7QUFDaEIsSUFBWSxTQVNYO0FBVEQsV0FBWSxTQUFTO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBdUIsQ0FBQTtJQUN2QixXQUFXO0lBQ1gsd0NBQTJCLENBQUE7SUFDM0IsU0FBUztJQUNULHdDQUEyQixDQUFBO0lBQzNCLFNBQVM7SUFDVCxzQ0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBVFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFTcEI7QUFFRDtJQUFBO1FBRVksa0JBQWEsR0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzdDLFdBQVc7UUFDSCxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPO1FBQ0MsZUFBVSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BELE9BQU87UUFDQyxnQkFBVyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JELFlBQVk7UUFDSixtQkFBYyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hELE9BQU87UUFDQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ2hDLGtCQUFrQjtRQUNYLGtCQUFhLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFckQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztJQTJhdkMsQ0FBQztJQXphRyxpQ0FBSyxHQUFMO1FBQ0ksaUJBQU8sQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMs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LElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBM2JjLDJCQUFTLEdBQXNCLElBQUksQ0FBQztJQTRidkQsd0JBQUM7Q0E3YkQsQUE2YkMsSUFBQTtBQUVZLFFBQUEsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVDb25zdFZhbHVlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZUNvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uL0h0dHAvTmV0V29yayc7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi9TREsvR2FtZU1zZyc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuL1VJTWFuYWdlcic7XG5cbi8qKiDpn7PkuZDnmoTotYTmupDlkI3np7DmnprkuL4gKi9cbmV4cG9ydCBlbnVtIE11c2ljVHlwZSB7XG4gICAgLyoqIOiDjOaZr+mfs+S5kCAqL1xuICAgIEJHTV9NVVNJQyA9ICdCR01fTVVTSUMnLFxuICAgIC8qKiDpopjlubLor63pn7MgKi9cbiAgICBUSVRMRV9BVURJTyA9ICdUSVRMRV9BVURJTycsXG4gICAgLyoqIOmfs+aViCAqL1xuICAgIEdBTUVfRUZGRUNUID0gJ0dBTUVfRUZGRUNUJyxcbiAgICAvKiog6K+t6Z+zICovXG4gICAgR0FNRV9BVURJTyA9ICdHQU1FX0FVRElPJyxcbn1cblxuY2xhc3MgU291bmRNYW5hZ2VyQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU291bmRNYW5hZ2VyQ2xhc3MgPSBudWxsO1xuICAgIHByaXZhdGUgcGxheWluZ19zb3VuZDogT2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIC8vIOe8k+WtmOiDjOaZr+mfs+S5kOWQjeWtl1xuICAgIHByaXZhdGUgYmdtOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGJnbUluZGV4OiBudW1iZXIgPSAtMTtcbiAgICAvLyDor63pn7PliJfooahcbiAgICBwcml2YXRlIF9hdWRpb0xpc3Q6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgLy8g6Z+z5pWI5YiX6KGoXG4gICAgcHJpdmF0ZSBfZWZmZWN0TGlzdDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgICAvLyDpn7PmlYjnu5/kuIDnmoTlvJXnlKjorqHmlbBcbiAgICBwcml2YXRlIF9yZWZlcmVuY2VMaXN0OiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIC8vIOmimOW5suivremfs1xuICAgIHByaXZhdGUgX3RpdGxlSUQ6IG51bWJlciA9IG51bGw7XG4gICAgLyoqIOWtmOaUvumfs+mikei1hOa6kOeahCBNYXAgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQ2xpcE1hcDogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcblxuICAgIHB1YmxpYyBNVVNJQ19CR00gPSAnYmdtJztcbiAgICBwdWJsaWMgQVVESU9fVElUTEUgPSAnYXVkaW9fc291bmQnO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlBMQVlCR00sIHRoaXMucGxheUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuUkVTVU1FQkdNLCB0aGlzLnJlc3VtZUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEJHTSwgdGhpcy5zdG9wQkdNLmJpbmQodGhpcykpO1xuICAgICAgICBHYW1lTXNnLmFkZEV2ZW50KEZyYW1lTXNnVHlwZS5QTEFZQVVESU9USVRMRSwgdGhpcy5wbGF5QXVkaW9UaXRsZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEFVRElPVElUTEUsIHRoaXMuc3RvcEF1ZGlvVGl0bGUuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1BBTExBVURJTywgdGhpcy5zdG9wQWxsQXVkaW8uYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1BBTExFRkZFQ1QsIHRoaXMuc3RvcEFsbEVmZmVjdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEFMTCwgdGhpcy5zdG9wQWxsLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNYW5hZ2VyQ2xhc3Mge1xuICAgICAgICBpZiAobnVsbCA9PT0gdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNvdW5kTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPlumfs+mikei1hOa6kFxuICAgIHB1YmxpYyBnZXRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9DbGlwTWFwLmhhcyhjbGlwTmFtZSkpIHtcbiAgICAgICAgICAgIGNjLmxvZyhg5pyq57yT5a2Y55qE6Z+z6aKR6LWE5rqQOiAke2NsaXBOYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliqDovb1yZXNvdXJjZemHjOeahOmfs+aViOi1hOa6kFxuICAgIHB1YmxpYyBwcmVMb2FkUmVzQXVkaW8oY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5HQU1FX0FVRElPX0RJUjtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyb3IsIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICAvLyDplJnor6/lpITnkIZcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6I635Y+W5a6M5q+V5ZCO6KOF5YWlIE1hcFxuICAgICAgICAgICAgYXVkaW9DbGlwcy5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+e8k+WtmOWujOavlSEgZWxlLm5hbWUgPT0gJyArIGVsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGVsZS5uYW1lLCBlbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGVsZS5uYW1lLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5omn6KGM5Zue6LCD6L+U5Zue6L+b5bqmXG4gICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5Yqg6L29ZnJhbWVSZXPph4znmoTpn7PmlYjotYTmupBcbiAgICBwdWJsaWMgcHJlTG9hZEZyYW1lQXVkaW8oY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5GUkFNRV9BVURJT19ESVI7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdmcmFtZVJlcycsIChlcnI6IEVycm9yLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidW5kbGUubG9hZERpcihwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvcjogRXJyb3IsIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1ZGlvQ2xpcHMuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygn57yT5a2Y5a6M5q+VISBlbGUubmFtZSA9PSAnICsgZWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGVsZS5uYW1lLCBlbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VMaXN0LnNldChlbGUubmFtZSwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g57yT5a2Y5omA5pyJ6Z+z6aKR6LWE5rqQXG4gICAgcHVibGljIHByZUxvYWRBbGxBdWRpb0NsaXBzKGNhbGxiYWNrOiAoaXNDb21wbGV0ZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgLyoqIOWKoOi9veS7o+egge+8jOWPguaVsOS4uiB1cmzvvIzotYTmupDnsbvlnovvvIzov5vluqblm57osIPvvIzlrozmiJDlm57osIMgKi9cbiAgICAgICAgbGV0IGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJlTG9hZFJlc0F1ZGlvKChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKCfnvJPlrZjlrozmr5UhIHByZUxvYWRSZXNBdWRpbyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyAmJiBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlTG9hZEZyYW1lQXVkaW8oKGlzQ29tcGxldGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+e8k+WtmOWujOavlSEgcHJlTG9hZEZyYW1lQXVkaW8gJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyAmJiBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOWNleeLrOe8k+WtmOafkOS4gOS4qumfs+mikVxuICAgIHB1YmxpYyBwcmVsb2FkQXVkaW9DbGlwTmFtZShjbGlwTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5HQU1FX0FVRElPX0RJUiArIGNsaXBOYW1lO1xuICAgICAgICBjYy5sb2coJ3ByZWxvYWRBdWRpb0NsaXBOYW1lIHBhdGggPT0gJyArIHBhdGgpO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvciwgYXNzZXQ6IGNjLkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNsaXAgPSBhc3NldCBhcyBjYy5BdWRpb0NsaXA7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGNsaXBOYW1lLCBjbGlwKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGNsaXBOYW1lLCAwKTtcbiAgICAgICAgICAgIGNjLmxvZygn57yT5a2Y5a6M5q+VIScpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgICogQHBhcmFtIHNvdW5kTmFtZSDog4zmma/pn7PkuZDmlofku7blkI1cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheUJHTShzb3VuZE5hbWU6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOS4jeimgeWcqEdhbWVQYW5lbOeahG9uTG9hZOWSjHN0YXJ06YeM5pKt5pS+6Z+z6aKR77yBYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmV0V29yay5jaGFubmVsID09ICdibGFja2JvYXJkJyB8fCBCb29sZWFuKE5ldFdvcmsuaXNTeW5jKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VuZE5hbWUgPT0gJycpIHtcbiAgICAgICAgICAgIHNvdW5kTmFtZSA9IHRoaXMuTVVTSUNfQkdNO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iZ20gPSBzb3VuZE5hbWU7XG4gICAgICAgIHRoaXMuYmdtSW5kZXggPSAtMTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGxldCBwYXRoID0gRnJhbWVDb25zdFZhbHVlLkdBTUVfQVVESU9fRElSICsgc291bmROYW1lO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY2xpcCA9IGFzc2V0IGFzIGNjLkF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIHRoaXMuYmdtSW5kZXggPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8v6YeN5paw5byA5aeL5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgcHVibGljIHJlc3VtZUJHTSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGxldCBwYXRoID0gRnJhbWVDb25zdFZhbHVlLkdBTUVfQVVESU9fRElSICsgdGhpcy5iZ207XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXNzZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjbGlwID0gYXNzZXQgYXMgY2MuQXVkaW9DbGlwO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDph43mlrDlvIDlp4vmkq3mlL7og4zmma/pn7PkuZBcbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgdGhpcy5iZ20gPSAnJztcbiAgICAgICAgdGhpcy5iZ21JbmRleCA9IC0xO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvLyDorr7nva7og4zmma/pn7Ppn7Pph49cbiAgICBwdWJsaWMgc2V0TXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIsIHR3ZWVuRHVyID0gMCkge1xuICAgICAgICBpZiAodGhpcy5iZ21JbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdm9sdW1lID0gY2MubWlzYy5jbGFtcDAxKHZvbHVtZSk7XG4gICAgICAgICAgICBpZiAodHdlZW5EdXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUluZGV4LCB2b2x1bWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0geyB2OiBjYy5hdWRpb0VuZ2luZS5nZXRWb2x1bWUodGhpcy5iZ21JbmRleCkgfTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAgICAgICAgIC50byhcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuRHVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2OiB2b2x1bWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUluZGV4LCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvumimOW5suivremfs1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaXBOYW1lIOivremfs2NsaXDmlofku7ZcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJMb29wIOaYr+WQpuW+queOr1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JJbnRlcnVwdD10cnVlXSDmmK/lkKbmiZPmlq3lhbbku5bor63pn7Ms6buY6K6kdHJ1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JNdXRleD1mYWxzZV0g5piv5ZCm5LqS5pal77yI5oyH6Z+z5pWI5ZKM6K+t6Z+z77yJLOm7mOiupGZhbHNlXG4gICAgICogQG1lbWJlcm9mIFNvdW5kTWFuYWdlckNsYXNzXG4gICAgICovXG4gICAgcHVibGljIHBsYXlBdWRpb1RpdGxlKFxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxuICAgICAgICBiTG9vcDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBiSW50ZXJ1cHQ6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICBiTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgZW5kQ2I6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICApIHtcbiAgICAgICAgLy8gaWYgKGNsaXBOYW1lID09ICcnKSB7XG4gICAgICAgIC8vICAgICBjbGlwTmFtZSA9IHRoaXMuQVVESU9fVElUTEU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wbGF5QXVkaW8oY2xpcE5hbWUsIGJMb29wLCBiSW50ZXJ1cHQsIGJNdXRleCwgZW5kQ2IsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIHRpbmcgemhpXG4gICAgcHVibGljIHN0b3BBdWRpb1RpdGxlKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwidGhpcy5fYXVkaW9MaXN0IHZhbHVlID09IFwiK3ZhbHVlKVxuICAgICAgICAgICAgLy8gY2MubG9nKFwidGhpcy5fYXVkaW9MaXN0IGtleSA9PSBcIitrZXkpXG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLl90aXRsZUlEICYmIHRoaXMuX3RpdGxlSUQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9MaXN0LmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdGl0bGVJRCA9IG51bGw7XG4gICAgICAgIC8vIOmimOW5suivremfs+aSreaUvuWujOWbnuiwg1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkNPTVBMRVRFX1RSVU1QRVQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmkq3mlL7or63pn7NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGlwTmFtZSDor63pn7NjbGlw5paH5Lu2XG4gICAgICogQHBhcmFtIHtib29sZWFufSBiTG9vcCDmmK/lkKblvqrnjq9cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiSW50ZXJ1cHQ9dHJ1ZV0g5piv5ZCm5omT5pat5YW25LuW6K+t6Z+zLOm7mOiupHRydWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiTXV0ZXg9ZmFsc2VdIOaYr+WQpuS6kuaWpe+8iOaMh+mfs+aViOWSjOivremfs++8iSzpu5jorqRmYWxzZVxuICAgICAqIEBtZW1iZXJvZiBTb3VuZE1hbmFnZXJDbGFzc1xuICAgICAqL1xuXG4gICAgcHVibGljIHBsYXlBdWRpbyhcbiAgICAgICAgY2xpcE5hbWU6IHN0cmluZyB8IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgYkxvb3A6IGJvb2xlYW4sXG4gICAgICAgIGJJbnRlcnVwdDogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgIGJNdXRleDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBvbkZpbmlzaGVkOiBGdW5jdGlvbiA9IG51bGwsXG4gICAgICAgIGlzVGl0bGVBdWRpbzogYm9vbGVhbiA9IGZhbHNlLFxuICAgICkge1xuICAgICAgICBpZiAoIVVJTWFuYWdlci5pc0dhbWVTaG93aW5nKSB7XG4gICAgICAgICAgICBjYy53YXJuKGDkuI3opoHlnKhHYW1lUGFuZWznmoRvbkxvYWTlkoxzdGFydOmHjOaSreaUvumfs+mike+8gWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbGlwTmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGJJbnRlcnVwdCAmJiB0aGlzLnN0b3BBbGxBdWRpbygpO1xuICAgICAgICBiTXV0ZXggJiYgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG5cbiAgICAgICAgbGV0IGNsaXAgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2xpcE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjbGlwID0gdGhpcy5nZXRBdWRpb0NsaXAoY2xpcE5hbWUpO1xuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wcmVsb2FkQXVkaW9DbGlwTmFtZShcbiAgICAgICAgICAgICAgICAgICAgY2xpcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAgPSB0aGlzLl9hdWRpb0NsaXBNYXAuZ2V0KGNsaXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF1ZGlvKGNsaXAsIGJMb29wLCBiSW50ZXJ1cHQsIGJNdXRleCwgb25GaW5pc2hlZCwgaXNUaXRsZUF1ZGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBiTG9vcCk7XG4gICAgICAgIC8vIOi1i+WAvHRpdGxlSWRcbiAgICAgICAgaWYgKGlzVGl0bGVBdWRpbykge1xuICAgICAgICAgICAgdGhpcy5fdGl0bGVJRCA9IGlkO1xuICAgICAgICAgICAgY2MubG9nKCd0aGlzLl90aXRsZUlEID09ICcgKyB0aGlzLl90aXRsZUlEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdWRpb0xpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xuICAgICAgICAvL+aSreaUvuW8leeUqOiuoeaVsOWKoDFcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCsrKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCAmJiBvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pKt5pS+6Z+z5pWIXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpcE5hbWUg6Z+z5pWIY2xpcOaWh+S7tlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYkxvb3Ag5piv5ZCm5b6q546vXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYkludGVydXB0PXRydWVdIOaYr+WQpuaJk+aWreWFtuS7lumfs+aViCzpu5jorqR0cnVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYk11dGV4PWZhbHNlXSDmmK/lkKbkupLmlqXvvIjmjIfpn7PmlYjlkozor63pn7PvvIks6buY6K6kZmFsc2VcbiAgICAgKiBAbWVtYmVyb2YgU291bmRNYW5hZ2VyQ2xhc3NcbiAgICAgKi9cblxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KFxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxuICAgICAgICBiTG9vcDogYm9vbGVhbixcbiAgICAgICAgYkludGVydXB0OiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgYk11dGV4OiBib29sZWFuID0gZmFsc2UsXG4gICAgICAgIG9uRmluaXNoZWQ6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICApIHtcbiAgICAgICAgaWYgKCFVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykge1xuICAgICAgICAgICAgY2Mud2Fybihg5LiN6KaB5ZyoR2FtZVBhbmVs55qEb25Mb2Fk5ZKMc3RhcnTph4zmkq3mlL7pn7PpopHvvIFgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2xpcE5hbWUpIHJldHVybjtcblxuICAgICAgICBiSW50ZXJ1cHQgJiYgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICAgIGJNdXRleCAmJiB0aGlzLnN0b3BBbGxBdWRpbygpO1xuXG4gICAgICAgIGxldCBjbGlwID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIGNsaXBOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcbiAgICAgICAgICAgIGlmIChjbGlwID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucHJlbG9hZEF1ZGlvQ2xpcE5hbWUoXG4gICAgICAgICAgICAgICAgICAgIGNsaXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5fYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFZmZlY3QoY2xpcCwgYkxvb3AsIGJJbnRlcnVwdCwgYk11dGV4LCBvbkZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBiTG9vcCk7XG4gICAgICAgIHRoaXMuX2VmZmVjdExpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xuICAgICAgICAvL+aSreaUvuW8leeUqOiuoeaVsOWKoDFcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCsrKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCAmJiBvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDorr7nva7pn7PmlYjlpKflsI9cbiAgICBwdWJsaWMgc2V0RWZmZWN0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHZvbHVtZSA9IGNjLm1pc2MuY2xhbXAwMSh2b2x1bWUpO1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHZhbHVlLCB2b2x1bWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDlgZzmraLor63pn7NcbiAgICBwdWJsaWMgc3RvcEFsbEF1ZGlvKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fdGl0bGVJRCAmJiB0aGlzLl90aXRsZUlEID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOmimOW5suivremfs+aSreaUvuWujOWbnuiwg1xuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuQ09NUExFVEVfVFJVTVBFVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VMaXN0LnNldChrZXksIDApO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlSUQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIOWBnOatoumfs+aViFxuICAgIHB1YmxpYyBzdG9wQWxsRWZmZWN0KCkge1xuICAgICAgICB0aGlzLl9lZmZlY3RMaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGtleSwgMCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VmZmVjdExpc3QgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgLy8g5YGc5q2i5pKt5pS+5oyH5a6a55qE6Z+z6aKR6YCa6L+H5ZCN5a2XXG4gICAgcHVibGljIHN0b3BTb3VuZEJ5TmFtZShjbGlwTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGNsaXBOYW1lLCAwKTtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkICE9IC0xKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvTGlzdC5kZWxldGUoY2xpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gdGhpcy5fZWZmZWN0TGlzdC5nZXQoY2xpcE5hbWUpO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCAmJiBpZCAhPSAtMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RMaXN0LmRlbGV0ZShjbGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlgZzmraLmraPlnKjmkq3mlL7nmoTmiYDmnInpn7PpopFcbiAgICBwdWJsaWMgc3RvcEFsbCgpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsQXVkaW8oKTtcbiAgICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICAvLyDmn5DkuKrpn7PmlYjmmK/lkKbmraPlnKjmkq3mlL5cbiAgICBwdWJsaWMgaXNQbGF5aW5nKGNsaXBOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZCA9IHRoaXMuX2VmZmVjdExpc3QuZ2V0KGNsaXBOYW1lKTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTb3VuZE1hbmFnZXIgPSBTb3VuZE1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19