
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQWZmaXJtVGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELHFDQUFvQztBQUNwQyw2Q0FBNEM7QUFDNUMsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFXO0lBQTNDO1FBQUEscUVBK0ZDO1FBM0ZXLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRS9CLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFFBQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFZLElBQUksQ0FBQyxDQUFDLE1BQU07UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQyxDQUFDLE1BQU07UUFFNUIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUF3RXhCLGlCQUFpQjtJQUNyQixDQUFDO0lBdkVHLDBCQUFLLEdBQUw7UUFDSSxTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIseUJBQUksR0FBSixVQUFLLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYSxFQUFF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LEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUEzRmEsb0JBQVMsR0FBRyxZQUFZLENBQUM7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVztJQXBCcEIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQStGdEI7SUFBRCxpQkFBQztDQS9GRCxBQStGQyxDQS9GK0IscUJBQVcsR0ErRjFDO0FBL0ZZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQWZmaXJtVGlwcyBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdBZmZpcm1UaXBzJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgTm9kZURlczogY2MuTm9kZSA9IG51bGw7IC8v5o+P6L+w6IqC54K5XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBkZXM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIG9rOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGJ0bkNsb3NlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBidG5Pa0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB3aW46IGNjLk5vZGUgPSBudWxsOyAvL+aPj+i/sOiKgueCuVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZmFpbDogY2MuTm9kZSA9IG51bGw7IC8v5o+P6L+w6IqC54K5XG5cbiAgICBwcml2YXRlIGNhbGxiYWNrID0gbnVsbDtcbiAgICBwcml2YXRlIHR5cGU6IG51bWJlcjtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEZyYW1lTXNnVHlwZS5BRkZJUk1USVBTX1NVUkUsIHRoaXMuZGlzcG9zZU9rLmJpbmQodGhpcykpO1xuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfQ0FOQ0VMLCB0aGlzLmRpc3Bvc2VDYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy90eXBlIOaIkOWKnyAxIOWksei0pSAyXG4gICAgaW5pdCh0eXBlOiBudW1iZXIsIGRlczogc3RyaW5nLCBjYWxsYmFjazogYW55LCBidG5DbG9zZWxEZXM/OiBzdHJpbmcsIGJ0bk9rRGVzPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbi5hY3RpdmUgPSB0eXBlID09IDE7XG4gICAgICAgIHRoaXMuZmFpbC5hY3RpdmUgPSB0eXBlID09IDI7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIsOS6huWIneWni+WMllwiKTtcbiAgICAgICAgLy9Ub29scy5wbGF5U3BpbmUodGhpcy5zcF9CZ0FuaW1hdG9yLCBcImZhdWx0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZXMuc3RyaW5nID0gZGVzO1xuICAgICAgICBpZiAoYnRuQ2xvc2VsRGVzKSB7XG4gICAgICAgICAgICBidG5DbG9zZWxEZXMgPT0gJycgPyAn5Y+W5raIJyA6IGJ0bkNsb3NlbERlcztcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2VMYWJlbC5zdHJpbmcgPSBidG5DbG9zZWxEZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bk9rRGVzKSB7XG4gICAgICAgICAgICBidG5Pa0RlcyA9PSAnJyA/ICfnoa7lrponIDogYnRuT2tEZXM7XG4gICAgICAgICAgICB0aGlzLmJ0bk9rTGFiZWwuc3RyaW5nID0gYnRuT2tEZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPbmx5T25lQnRuVHlwZShidG5Pa0Rlcz86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsb3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2subm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9rLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCB0aGlzLm9rLm5vZGUucG9zaXRpb24ueSwgMCk7XG4gICAgICAgIGlmIChidG5Pa0Rlcykge1xuICAgICAgICAgICAgYnRuT2tEZXMgPT0gJycgPyAn56Gu5a6aJyA6IGJ0bk9rRGVzO1xuICAgICAgICAgICAgdGhpcy5idG5Pa0xhYmVsLnN0cmluZyA9IGJ0bk9rRGVzO1xuICAgICAgICAgICAgaWYgKGJ0bk9rRGVzLmxlbmd0aCA+IDQpIHRoaXMuYnRuT2tMYWJlbC5mb250U2l6ZSA9IDQwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT25DbGlja0Nsb3NlKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YWz6ZetXCIpO1xuICAgIH1cblxuICAgIC8v6YCa55So5Yqo55S7XG4gICAgVGlwc0FuaW1hdG9yU2NhbGUobm9kZU9iajogY2MuTm9kZSkge1xuICAgICAgICBub2RlT2JqLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLnNjYWxlVG8oMC4yLCAxLCAxKSk7XG4gICAgICAgIG5vZGVPYmoucnVuQWN0aW9uKHNlcSk7XG4gICAgICAgIC8vIG5vZGVPYmoucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLCAxLCAxKSk7XG4gICAgfVxuXG4gICAgLy9vayAxIOehruiupCAwIOWPlua2iFxuICAgIE9uQ2xpY2tPaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+ehruiupCcpO1xuICAgICAgICBUMk0uZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfU1VSRSwgbnVsbCk7XG4gICAgfVxuXG4gICAgT25DbGlja0NhbmNlbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iCcpO1xuICAgICAgICBUMk0uZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfQ0FOQ0VMLCBudWxsKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlT2soKSB7XG4gICAgICAgIFVJSGVscC5jbG9zZUFmZmlybVRpcCgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soMSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZUNhbmNlbCgpIHtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygwKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19