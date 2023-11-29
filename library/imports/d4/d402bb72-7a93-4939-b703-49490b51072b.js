"use strict";
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