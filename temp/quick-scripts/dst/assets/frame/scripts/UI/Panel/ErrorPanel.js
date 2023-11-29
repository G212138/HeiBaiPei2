
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcRXJyb3JQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsNkRBQTREO0FBQzVELCtDQUEwQztBQUMxQyxnREFBMkM7QUFFckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVc7SUFBbkQ7UUFBQSxxRUErREM7UUE1REcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBa0Q3QixDQUFDO0lBaERHLDBCQUFLLEdBQUw7UUFDSSx1QkFBdUI7SUFDM0IsQ0FBQztJQUVELDJCQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1g7Ozs7Ozs7O09BUUc7SUFDSCw2QkFBUSxHQUFSLFVBQ0ksUUFBZ0IsRUFDaEIsTUFBZSxFQUNmLEtBQWMsRUFDZCxNQUFlLEVBQ2YsUUFBbUIsRUFDbkIsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUV4QixJQUFJLElBQUksR0FBRztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBRUYsaUJBQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLDJCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLDJCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxlQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBN0RhLG9CQUFTLEdBQUcsWUFBWSxDQUFDO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQVhMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRDlCO0lBQUQsaUJBQUM7Q0EvREQsQUErREMsQ0EvRHVDLHFCQUFXLEdBK0RsRDtrQkEvRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLy4uLy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCBCYXNlRnJhbWVVSSBmcm9tICcuLy4uL0Jhc2VGcmFtZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnRXJyb3JQYW5lbCc7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGJpYW9UaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzaHVvTWluZzogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aVNoaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBidG5MYWI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIGlzQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge31cbiAgICAvKipcbiAgICAgKiDorr7nva7plJnor6/lvLnnqpfmlbDmja5cbiAgICAgKiBAcGFyYW0gc2h1b01pbmcg6ZSZ6K+v6K+05piOXG4gICAgICogQHBhcmFtIGJpYW9UaSDmoIfpopjmloflrZdcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXG4gICAgICogQHBhcmFtIGJ0bkxhYiDmjInpkq7mloflrZdcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXG4gICAgICovXG4gICAgc2V0UGFuZWwoXG4gICAgICAgIHNodW9NaW5nOiBzdHJpbmcsXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcbiAgICAgICAgdGlTaGk/OiBzdHJpbmcsXG4gICAgICAgIGJ0bkxhYj86IHN0cmluZyxcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcbiAgICAgICAgaXNDbG9zZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgICkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHNodW9NaW5nOiBzaHVvTWluZyxcbiAgICAgICAgICAgIGJpYW9UaTogYmlhb1RpLFxuICAgICAgICAgICAgdGlTaGk6IHRpU2hpLFxuICAgICAgICB9O1xuXG4gICAgICAgIEdhbWVNc2cud2FybignRXJyb3JQYW5lbExvZycsIGRhdGEpO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgnc2Z4X2Vycm9yJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNodW9NaW5nLnN0cmluZyA9IHNodW9NaW5nO1xuICAgICAgICB0aGlzLmlzQ2xvc2UgPSBpc0Nsb3NlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbEJhY2s7XG4gICAgICAgIHRoaXMuYmlhb1RpLnN0cmluZyA9IGJpYW9UaSA/IGJpYW9UaSA6IHRoaXMuYmlhb1RpLnN0cmluZztcbiAgICAgICAgdGhpcy50aVNoaS5zdHJpbmcgPSB0aVNoaSA/IHRpU2hpIDogdGhpcy50aVNoaS5zdHJpbmc7XG4gICAgICAgIHRoaXMuYnRuTGFiLnN0cmluZyA9IGJ0bkxhYiA/IGJ0bkxhYiA6IHRoaXMuYnRuTGFiLnN0cmluZztcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gdGhpcy5pc0Nsb3NlO1xuICAgIH1cblxuICAgIG9uQnRuQ2xpY2soKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfYnV0dG4nLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zZSkge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlRXJyb3JQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19