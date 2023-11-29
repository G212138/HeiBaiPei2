"use strict";
cc._RF.push(module, '78373xfPadEJ5IFn4sizh3z', 'ErrorPanel');
// frame/scripts/UI/Panel/ErrorPanel.ts

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
var UIHelp_1 = require("../../Utils/UIHelp");
var SoundManager_1 = require("./../../Manager/SoundManager");
var GameMsg_1 = require("./../../SDK/GameMsg");
var BaseFrameUI_1 = require("./../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ErrorPanel = /** @class */ (function (_super) {
    __extends(ErrorPanel, _super);
    function ErrorPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.biaoTi = null;
        _this.shuoMing = null;
        _this.tiShi = null;
        _this.btnLab = null;
        _this.btn = null;
        _this.isClose = false;
        return _this;
    }
    ErrorPanel.prototype.start = function () {
        // cc.director.pause();
    };
    ErrorPanel.prototype.onLoad = function () { };
    /**
     * 设置错误弹窗数据
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    ErrorPanel.prototype.setPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        if (isClose === void 0) { isClose = false; }
        var data = {
            shuoMing: shuoMing,
            biaoTi: biaoTi,
            tiShi: tiShi,
        };
        GameMsg_1.default.warn('ErrorPanelLog', data);
        SoundManager_1.SoundManager.playEffect('sfx_error', false);
        this.shuoMing.string = shuoMing;
        this.isClose = isClose;
        this.callback = callBack;
        this.biaoTi.string = biaoTi ? biaoTi : this.biaoTi.string;
        this.tiShi.string = tiShi ? tiShi : this.tiShi.string;
        this.btnLab.string = btnLab ? btnLab : this.btnLab.string;
        this.btn.interactable = this.isClose;
    };
    ErrorPanel.prototype.onBtnClick = function () {
        SoundManager_1.SoundManager.playEffect('sfx_buttn', false);
        if (this.callback) {
            this.callback();
        }
        if (this.isClose) {
            UIHelp_1.UIHelp.closeErrorPanel();
        }
    };
    ErrorPanel.className = 'ErrorPanel';
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "biaoTi", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "shuoMing", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "tiShi", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "btnLab", void 0);
    __decorate([
        property(cc.Button)
    ], ErrorPanel.prototype, "btn", void 0);
    ErrorPanel = __decorate([
        ccclass
    ], ErrorPanel);
    return ErrorPanel;
}(BaseFrameUI_1.default));
exports.default = ErrorPanel;

cc._RF.pop();