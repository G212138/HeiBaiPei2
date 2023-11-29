"use strict";
cc._RF.push(module, '67e25WAGoRADq1zkpxqqwdF', 'AffirmTips');
// frame/scripts/UI/Panel/AffirmTips.ts

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
exports.AffirmTips = void 0;
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseFrameUI_1 = require("../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AffirmTips = /** @class */ (function (_super) {
    __extends(AffirmTips, _super);
    function AffirmTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeDes = null; //描述节点
        _this.title = null;
        _this.des = null;
        _this.close = null;
        _this.ok = null;
        _this.btnCloseLabel = null;
        _this.btnOkLabel = null;
        _this.win = null; //描述节点
        _this.fail = null; //描述节点
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    AffirmTips.prototype.start = function () {
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_SURE, this.disposeOk.bind(this));
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_CANCEL, this.disposeCancel.bind(this));
    };
    //type 成功 1 失败 2
    AffirmTips.prototype.init = function (type, des, callback, btnCloselDes, btnOkDes) {
        this.title.node.active = false;
        this.des.node.active = true;
        this.win.active = type == 1;
        this.fail.active = type == 2;
        this.type = type;
        this.callback = callback;
        //console.log("到了初始化");
        //Tools.playSpine(this.sp_BgAnimator, "fault", false);
        this.des.string = des;
        if (btnCloselDes) {
            btnCloselDes == '' ? '取消' : btnCloselDes;
            this.btnCloseLabel.string = btnCloselDes;
        }
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
        }
    };
    AffirmTips.prototype.setOnlyOneBtnType = function (btnOkDes) {
        this.close.node.active = false;
        this.ok.node.active = true;
        this.ok.node.position = cc.v3(0, this.ok.node.position.y, 0);
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
            if (btnOkDes.length > 4)
                this.btnOkLabel.fontSize = 40;
        }
    };
    AffirmTips.prototype.OnClickClose = function () {
        //console.log("关闭");
    };
    //通用动画
    AffirmTips.prototype.TipsAnimatorScale = function (nodeObj) {
        nodeObj.stopAllActions();
        var seq = cc.sequence(cc.delayTime(1), cc.scaleTo(0.2, 1, 1));
        nodeObj.runAction(seq);
        // nodeObj.runAction(cc.scaleTo(0.2, 1, 1));
    };
    //ok 1 确认 0 取消
    AffirmTips.prototype.OnClickOk = function () {
        console.log('确认');
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_SURE, null);
    };
    AffirmTips.prototype.OnClickCancel = function () {
        console.log('取消');
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_CANCEL, null);
    };
    AffirmTips.prototype.disposeOk = function () {
        UIHelp_1.UIHelp.closeAffirmTip();
        this.callback && this.callback(1);
    };
    AffirmTips.prototype.disposeCancel = function () {
        UIHelp_1.UIHelp.closeAffirmTip();
        this.callback && this.callback(0);
    };
    AffirmTips.className = 'AffirmTips';
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "NodeDes", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "des", void 0);
    __decorate([
        property(cc.Button)
    ], AffirmTips.prototype, "close", void 0);
    __decorate([
        property(cc.Button)
    ], AffirmTips.prototype, "ok", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "btnCloseLabel", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "btnOkLabel", void 0);
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "win", void 0);
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "fail", void 0);
    AffirmTips = __decorate([
        ccclass
    ], AffirmTips);
    return AffirmTips;
}(BaseFrameUI_1.default));
exports.AffirmTips = AffirmTips;

cc._RF.pop();