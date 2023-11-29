
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd402btyepNJObcDSUkLUQcr', 'OverTips');
// frame/scripts/UI/Panel/OverTips.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OverTips = exports.DefalutTitle = exports.Type_Tile = void 0;
var SoundManager_1 = require("./../../Manager/SoundManager");
var Tools_1 = require("../../Utils/Tools");
var BaseFrameUI_1 = require("../BaseFrameUI");
var UIHelp_1 = require("../../Utils/UIHelp");
var UIManager_1 = require("../../Manager/UIManager");
var T2M_1 = require("../../SDK/T2M");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var Type_Tile;
(function (Type_Tile) {
    Type_Tile[Type_Tile["ZuoDaJieShu"] = 0] = "ZuoDaJieShu";
    Type_Tile[Type_Tile["ChuangGuanChengGong"] = 1] = "ChuangGuanChengGong";
    Type_Tile[Type_Tile["TiaoZhanJieShu"] = 2] = "TiaoZhanJieShu";
    Type_Tile[Type_Tile["TiaoZhanChengGong"] = 3] = "TiaoZhanChengGong";
    Type_Tile[Type_Tile["ChuangGuanJieShu"] = 4] = "ChuangGuanJieShu";
})(Type_Tile = exports.Type_Tile || (exports.Type_Tile = {}));
exports.DefalutTitle = ['作答结束', '闯关成功', '挑战结束', '挑战成功', '闯关结束'];
var FontMap = {
    作: 'img_zuo',
    答: 'img_da',
    结: 'img_jie',
    束: 'img_shu',
    成: 'img_cheng',
    功: 'img_gong',
    挑: 'img_tiao',
    战: 'img_zhan',
    闯: 'img_chuang',
    关: 'img_guan',
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverTips = /** @class */ (function (_super) {
    __extends(OverTips, _super);
    function OverTips() {
        var _this = _super.call(this) || this;
        _this._lb_tips = null;
        _this._sp_false = null;
        _this._sp_true = null;
        _this._sp_complete = null;
        _this._btn_close = null;
        _this._btn_replay = null;
        _this._nd_yanhua = null;
        _this.callback = null;
        _this.endInAnimation = false;
        _this.img_titles = [];
        _this.bones = [];
        _this._endTitle = '';
        return _this;
    }
    OverTips.prototype.onLoad = function () {
        UIManager_1.UIManager.getBundleRes('frameRes', 'images/OverTips/word', cc.SpriteAtlas, function (asset) { });
    };
    OverTips.prototype.start = function () {
        this._btn_close.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, this.doClickClose.bind(this));
    };
    OverTips.prototype.onDisable = function () {
        this._btn_close.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
    };
    /**
     设置显示内容
     @param {number} type          0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     @param {string} str           提示内容
     @param {Function} callback    回调函数
     @param {string} endTitle      end动效提示文字
     @param {boolean} isShowReplay     是否显示重玩按钮
     @param {boolean} isShowClose     是否显示关闭按钮
     @param {boolean} autoOff     是否自动关闭
     */
    OverTips.prototype.init = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        this.callback = callback;
        this._sp_false.active = type == 0;
        this._sp_true.active = type == 1;
        this._sp_complete.active = type == 2;
        this._lb_tips.active = type != 2;
        this._lb_tips.getComponent(cc.Label).string = str;
        this._btn_close.active = isShowClose && (0 === type || 1 === type);
        if (this._btn_replay) {
            this._btn_replay.active = isShowReplay;
        }
        if (!endTitle || 4 !== endTitle.length) {
            this._endTitle = exports.DefalutTitle[0];
        }
        else {
            this._endTitle = endTitle;
        }
        switch (type) {
            case 0:
                Tools_1.Tools.playSpine(this._sp_false.getComponent(sp.Skeleton), 'false', false, function () {
                    if (autoOff) {
                        _this.delayClose();
                    }
                });
                SoundManager_1.SoundManager.playEffect('sfx_genneg', false, false, false);
                break;
            case 1:
                this._sp_true.getComponent(sp.Skeleton).clearTracks();
                Tools_1.Tools.playSpine(this._sp_true.getComponent(sp.Skeleton), 'true', false, function () {
                    if (autoOff) {
                        _this.delayClose();
                    }
                });
                SoundManager_1.SoundManager.playEffect('sfx_genpos', false, false, false);
                break;
            case 2:
                this.playCompleteBySubject();
                break;
        }
        this.playTipsAction();
        UIHelp_1.UIHelp.closeMask();
    };
    OverTips.prototype.playCompleteBySubject = function () {
        var subject = ConstValue_1.ConstValue.Subject || 1;
        switch (subject) {
            case 1:
                {
                    this._sp_complete.active = false;
                    var spComp = this._sp_complete.getComponent(sp.Skeleton);
                    this.bones = [];
                    this.bones.push(spComp.findBone('paipai'));
                    this.bones.push(spComp.findBone('xiaoU'));
                    this.bones.push(spComp.findBone('mimiya'));
                    this.bones.push(spComp.findBone('doudou'));
                    this.createTitleImage();
                }
                break;
            case 2:
                {
                    this.endInAnimation = false;
                    this._sp_complete.active = true;
                    var spComp_1 = this._sp_complete.getComponent(sp.Skeleton);
                    Tools_1.Tools.playSpine(spComp_1, 'ni zhenbang', false, function () {
                        Tools_1.Tools.playSpine(spComp_1, 'xunhuan', true);
                    });
                    SoundManager_1.SoundManager.playEffect('over_yuwen', false);
                }
                break;
            case 3:
                {
                    this.endInAnimation = false;
                    this._nd_yanhua.active = true;
                    this._sp_complete.active = true;
                    var spComp_2 = this._sp_complete.getComponent(sp.Skeleton);
                    Tools_1.Tools.playSpine(spComp_2, 'animation', false, function () {
                        spComp_2.animation = null;
                    });
                    SoundManager_1.SoundManager.playEffect('over_yingyu', false);
                }
                break;
        }
    };
    OverTips.prototype.delayClose = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.doClickClose();
        }, 0);
    };
    OverTips.prototype.playTipsAction = function () {
        if (this._lb_tips.active) {
            var endPos = cc.v2(this._lb_tips.position.x, this._lb_tips.position.y);
            var framePos_1 = cc.v2(endPos.x, endPos.y - 72.8);
            var framePos_2 = cc.v2(endPos.x, endPos.y + 12);
            var framePos_3 = cc.v2(endPos.x, endPos.y - 8);
            var framePos_4 = cc.v2(endPos.x, endPos.y + 7.3);
            this._lb_tips.position = cc.v3(framePos_1.x, framePos_1.y);
            cc.tween(this._lb_tips)
                .to(0.08, { x: framePos_2.x, y: framePos_2.y })
                .to(0.08, { x: framePos_3.x, y: framePos_3.y })
                .to(0.08, { x: framePos_4.x, y: framePos_4.y })
                .to(0.06, { x: endPos.x, y: endPos.y })
                .start();
        }
    };
    OverTips.prototype.onClickClose = function (event, customEventData) {
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, null);
    };
    OverTips.prototype.doClickClose = function () {
        if (this.callback)
            this.callback();
        UIHelp_1.UIHelp.closeOverTips();
    };
    OverTips.prototype.createTitleImage = function () {
        var _this = this;
        UIManager_1.UIManager.getBundleRes('frameRes', 'images/OverTips/word', cc.SpriteAtlas, function (atlas) {
            _this.img_titles.forEach(function (node) {
                node.removeFromParent(true);
            });
            _this.img_titles = [];
            for (var i = 0; i < _this._endTitle.length; ++i) {
                var str = _this._endTitle[i];
                var spriteFrame = atlas.getSpriteFrame(FontMap[str]);
                var imageNode = new cc.Node();
                var image = imageNode.addComponent(cc.Sprite);
                image.spriteFrame = spriteFrame;
                imageNode.parent = _this.node;
                imageNode.active = false;
                _this.img_titles.push(imageNode);
            }
            _this.endInAnimation = true;
            _this._sp_complete.active = true;
            var spComp = _this._sp_complete.getComponent(sp.Skeleton);
            Tools_1.Tools.playSpine(spComp, 'in', false, function () {
                Tools_1.Tools.playSpine(spComp, 'stand', true);
                _this.endInAnimation = false;
            });
            SoundManager_1.SoundManager.playEffect('sfx_geupgrd', false);
        });
    };
    OverTips.prototype.update = function () {
        if (!this.endInAnimation)
            return;
        for (var index = 0; index < this.img_titles.length; index++) {
            this.img_titles[index].active = true;
            this.img_titles[index].position = cc.v3(this.bones[index].worldX - 139, this.bones[index].worldY - 135);
        }
    };
    OverTips.className = 'OverTips';
    OverTips = __decorate([
        ccclass
    ], OverTips);
    return OverTips;
}(BaseFrameUI_1.default));
exports.OverTips = OverTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcT3ZlclRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCwyQ0FBMEM7QUFDMUMsOENBQXlDO0FBQ3pDLDZDQUE0QztBQUM1QyxxREFBb0Q7QUFDcEQscUNBQW9DO0FBQ3BDLHdEQUF1RDtBQUN2RCx1RUFBc0U7QUFFdEUsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHVEQUFXLENBQUE7SUFDWCx1RUFBbUIsQ0FBQTtJQUNuQiw2REFBYyxDQUFBO0lBQ2QsbUVBQWlCLENBQUE7SUFDakIsaUVBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRVksUUFBQSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFckUsSUFBSSxPQUFPLEdBQUc7SUFDVixDQUFDLEVBQUUsU0FBUztJQUNaLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFNBQVM7SUFDWixDQUFDLEVBQUUsU0FBUztJQUNaLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFVBQVU7SUFDYixDQUFDLEVBQUUsVUFBVTtJQUNiLENBQUMsRUFBRSxVQUFVO0lBQ2IsQ0FBQyxFQUFFLFlBQVk7SUFDZixDQUFDLEVBQUUsVUFBVTtDQUNoQixDQUFDO0FBRUksSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEIsNEJBQVc7SUFpQnJDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBaEJPLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVksSUFB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QUN6RCxhQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUNqQyxhQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsMkJBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBQ2pDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDM0c7SUFDTCxDQUFDO0lBOU1hLGtCQUFTLEdBQUcsVUFBVSxDQUFDO0lBRDVCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0FnTnBCO0lBQUQsZUFBQztDQWhORCxBQWdOQyxDQWhONkIscUJBQVcsR0FnTnhDO0FBaE5ZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gJy4uLy4uL1V0aWxzL1Rvb2xzJztcbmltcG9ydCBCYXNlRnJhbWVVSSBmcm9tICcuLi9CYXNlRnJhbWVVSSc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5cbmV4cG9ydCBlbnVtIFR5cGVfVGlsZSB7XG4gICAgWnVvRGFKaWVTaHUsXG4gICAgQ2h1YW5nR3VhbkNoZW5nR29uZyxcbiAgICBUaWFvWmhhbkppZVNodSxcbiAgICBUaWFvWmhhbkNoZW5nR29uZyxcbiAgICBDaHVhbmdHdWFuSmllU2h1LFxufVxuXG5leHBvcnQgY29uc3QgRGVmYWx1dFRpdGxlID0gWyfkvZznrZTnu5PmnZ8nLCAn6Zev5YWz5oiQ5YqfJywgJ+aMkeaImOe7k+adnycsICfmjJHmiJjmiJDlip8nLCAn6Zev5YWz57uT5p2fJ107XG5cbmxldCBGb250TWFwID0ge1xuICAgIOS9nDogJ2ltZ196dW8nLFxuICAgIOetlDogJ2ltZ19kYScsXG4gICAg57uTOiAnaW1nX2ppZScsXG4gICAg5p2fOiAnaW1nX3NodScsXG4gICAg5oiQOiAnaW1nX2NoZW5nJyxcbiAgICDlip86ICdpbWdfZ29uZycsXG4gICAg5oyROiAnaW1nX3RpYW8nLFxuICAgIOaImDogJ2ltZ196aGFuJyxcbiAgICDpl686ICdpbWdfY2h1YW5nJyxcbiAgICDlhbM6ICdpbWdfZ3VhbicsXG59O1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBPdmVyVGlwcyBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdPdmVyVGlwcyc7XG5cbiAgICBwcml2YXRlIF9sYl90aXBzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcF9mYWxzZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BfdHJ1ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BfY29tcGxldGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2J0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3JlcGxheTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbmRfeWFuaHVhOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgY2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgZW5kSW5BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGltZ190aXRsZXM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgYm9uZXM6IGFueVtdID0gW107XG4gICAgcHJpdmF0ZSBfZW5kVGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBVSU1hbmFnZXIuZ2V0QnVuZGxlUmVzKCdmcmFtZVJlcycsICdpbWFnZXMvT3ZlclRpcHMvd29yZCcsIGNjLlNwcml0ZUF0bGFzLCAoYXNzZXQ6IGNjLlNwcml0ZUF0bGFzKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX2J0bl9jbG9zZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja0Nsb3NlLCB0aGlzKTtcblxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLk9WRVJUSVBTX0NMT1NFLCB0aGlzLmRvQ2xpY2tDbG9zZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2J0bl9jbG9zZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tDbG9zZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiuvue9ruaYvuekuuWGheWuuVxuICAgICBAcGFyYW0ge251bWJlcn0gdHlwZSAgICAgICAgICAwOiDplJnor68gIDHvvJrnrZTlr7nkuoYgIDLvvJrpl6/lhbPmiJDlip8o5LiA55u05pi+56S65LiN5Lya5YWz6ZetKVxuICAgICBAcGFyYW0ge3N0cmluZ30gc3RyICAgICAgICAgICDmj5DnpLrlhoXlrrlcbiAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAg5Zue6LCD5Ye95pWwXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBlbmRUaXRsZSAgICAgIGVuZOWKqOaViOaPkOekuuaWh+Wtl1xuICAgICBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd1JlcGxheSAgICAg5piv5ZCm5pi+56S66YeN546p5oyJ6ZKuXG4gICAgIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93Q2xvc2UgICAgIOaYr+WQpuaYvuekuuWFs+mXreaMiemSrlxuICAgICBAcGFyYW0ge2Jvb2xlYW59IGF1dG9PZmYgICAgIOaYr+WQpuiHquWKqOWFs+mXrVxuICAgICAqL1xuICAgIGluaXQoXG4gICAgICAgIHR5cGU6IG51bWJlcixcbiAgICAgICAgc3RyOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICAgICAgICBlbmRUaXRsZT86IHN0cmluZyxcbiAgICAgICAgaXNTaG93UmVwbGF5PzogYm9vbGVhbixcbiAgICAgICAgaXNTaG93Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgYXV0b09mZjogYm9vbGVhbiA9IHRydWUsXG4gICAgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5fc3BfZmFsc2UuYWN0aXZlID0gdHlwZSA9PSAwO1xuICAgICAgICB0aGlzLl9zcF90cnVlLmFjdGl2ZSA9IHR5cGUgPT0gMTtcbiAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gdHlwZSA9PSAyO1xuICAgICAgICB0aGlzLl9sYl90aXBzLmFjdGl2ZSA9IHR5cGUgIT0gMjtcbiAgICAgICAgdGhpcy5fbGJfdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0cjtcbiAgICAgICAgdGhpcy5fYnRuX2Nsb3NlLmFjdGl2ZSA9IGlzU2hvd0Nsb3NlICYmICgwID09PSB0eXBlIHx8IDEgPT09IHR5cGUpO1xuICAgICAgICBpZiAodGhpcy5fYnRuX3JlcGxheSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3JlcGxheS5hY3RpdmUgPSBpc1Nob3dSZXBsYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuZFRpdGxlIHx8IDQgIT09IGVuZFRpdGxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZW5kVGl0bGUgPSBEZWZhbHV0VGl0bGVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbmRUaXRsZSA9IGVuZFRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuX3NwX2ZhbHNlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksICdmYWxzZScsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvT2ZmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5Q2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfZ2VubmVnJywgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BfdHJ1ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmNsZWFyVHJhY2tzKCk7XG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuX3NwX3RydWUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgJ3RydWUnLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b09mZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgnc2Z4X2dlbnBvcycsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNvbXBsZXRlQnlTdWJqZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheVRpcHNBY3Rpb24oKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xuICAgIH1cblxuICAgIHBsYXlDb21wbGV0ZUJ5U3ViamVjdCgpIHtcbiAgICAgICAgY29uc3Qgc3ViamVjdDogbnVtYmVyID0gQ29uc3RWYWx1ZS5TdWJqZWN0IHx8IDE7XG4gICAgICAgIHN3aXRjaCAoc3ViamVjdCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvbmVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9uZXMucHVzaChzcENvbXAuZmluZEJvbmUoJ3BhaXBhaScpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib25lcy5wdXNoKHNwQ29tcC5maW5kQm9uZSgneGlhb1UnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9uZXMucHVzaChzcENvbXAuZmluZEJvbmUoJ21pbWl5YScpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib25lcy5wdXNoKHNwQ29tcC5maW5kQm9uZSgnZG91ZG91JykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRpdGxlSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwX2NvbXBsZXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoc3BDb21wLCAnbmkgemhlbmJhbmcnLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwQ29tcCwgJ3h1bmh1YW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdvdmVyX3l1d2VuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW5BbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmRfeWFuaHVhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwX2NvbXBsZXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoc3BDb21wLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwQ29tcC5hbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoJ292ZXJfeWluZ3l1JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGF5Q2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9DbGlja0Nsb3NlKCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHBsYXlUaXBzQWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fbGJfdGlwcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mih0aGlzLl9sYl90aXBzLnBvc2l0aW9uLngsIHRoaXMuX2xiX3RpcHMucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMSA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSAtIDcyLjgpO1xuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzIgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyAxMik7XG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMyA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSAtIDgpO1xuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzQgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyA3LjMpO1xuICAgICAgICAgICAgdGhpcy5fbGJfdGlwcy5wb3NpdGlvbiA9IGNjLnYzKGZyYW1lUG9zXzEueCwgZnJhbWVQb3NfMS55KTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuX2xiX3RpcHMpXG4gICAgICAgICAgICAgICAgLnRvKDAuMDgsIHsgeDogZnJhbWVQb3NfMi54LCB5OiBmcmFtZVBvc18yLnkgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4wOCwgeyB4OiBmcmFtZVBvc18zLngsIHk6IGZyYW1lUG9zXzMueSB9KVxuICAgICAgICAgICAgICAgIC50bygwLjA4LCB7IHg6IGZyYW1lUG9zXzQueCwgeTogZnJhbWVQb3NfNC55IH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMDYsIHsgeDogZW5kUG9zLngsIHk6IGVuZFBvcy55IH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrQ2xvc2UoZXZlbnQ/LCBjdXN0b21FdmVudERhdGE/KTogdm9pZCB7XG4gICAgICAgIFQyTS5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT1ZFUlRJUFNfQ0xPU0UsIG51bGwpO1xuICAgIH1cblxuICAgIGRvQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVUaXRsZUltYWdlKCkge1xuICAgICAgICBVSU1hbmFnZXIuZ2V0QnVuZGxlUmVzKCdmcmFtZVJlcycsICdpbWFnZXMvT3ZlclRpcHMvd29yZCcsIGNjLlNwcml0ZUF0bGFzLCAoYXRsYXM6IGNjLlNwcml0ZUF0bGFzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltZ190aXRsZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbWdfdGl0bGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZW5kVGl0bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLl9lbmRUaXRsZVtpXTtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShGb250TWFwW3N0cl0pO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGltYWdlTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGltYWdlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICAgICAgaW1hZ2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nX3RpdGxlcy5wdXNoKGltYWdlTm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZW5kSW5BbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwQ29tcCwgJ2luJywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoc3BDb21wLCAnc3RhbmQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfZ2V1cGdyZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5kSW5BbmltYXRpb24pIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW1nX3RpdGxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaW1nX3RpdGxlc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW1nX3RpdGxlc1tpbmRleF0ucG9zaXRpb24gPSBjYy52Myh0aGlzLmJvbmVzW2luZGV4XS53b3JsZFggLSAxMzksIHRoaXMuYm9uZXNbaW5kZXhdLndvcmxkWSAtIDEzNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=