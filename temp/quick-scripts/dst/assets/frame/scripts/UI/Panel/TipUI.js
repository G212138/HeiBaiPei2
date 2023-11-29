
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04f62OpblhMYb6+AOI+oOHr', 'TipUI');
// frame/scripts/UI/Panel/TipUI.ts

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
exports.TipUI = void 0;
var BaseFrameUI_1 = require("../BaseFrameUI");
var Tip_1 = require("../Item/Tip");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipUI = /** @class */ (function (_super) {
    __extends(TipUI, _super);
    function TipUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipPrefab = null;
        _this.tipPool = [];
        return _this;
    }
    TipUI.prototype.showTip = function (message) {
        for (var j = 0; j < this.tipPool.length; j++) {
            if (!this.tipPool[j].isReady()) {
                this.tipPool[j].reset();
                this.tipPool[j].playTip(message);
                return;
            }
        }
        for (var i = 0; i < this.tipPool.length; ++i) {
            if (this.tipPool[i] != null && this.tipPool[i].isReady()) {
                this.tipPool[i].node.setSiblingIndex(200);
                this.tipPool[i].playTip(message);
                return;
            }
        }
        // cc.log("create tip");
        var TipNode = cc.instantiate(this.tipPrefab);
        TipNode.parent = this.node;
        var tip = TipNode.getComponent(Tip_1.Tip);
        this.tipPool.push(tip);
        tip.playTip(message);
    };
    TipUI.className = 'TipUI';
    __decorate([
        property(cc.Prefab)
    ], TipUI.prototype, "tipPrefab", void 0);
    TipUI = __decorate([
        ccclass
    ], TipUI);
    return TipUI;
}(BaseFrameUI_1.default));
exports.TipUI = TipUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVGlwVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QyxtQ0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVc7SUFBdEM7UUFBQSxxRUE2QkM7UUF6QlcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQVUsRUFBRSxDQUFDOztJQXdCaEMsQ0FBQztJQXRCRyx1QkFBTyxHQUFQLFVBQVEsT0FBZTtRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxPQUFPO2FBQ1Y7U0FDSjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU87YUFDVjtTQUNKO1FBQ0Qsd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTNCYSxlQUFTLEdBQUcsT0FBTyxDQUFDO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ2dCO0lBSjNCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0E2QmpCO0lBQUQsWUFBQztDQTdCRCxBQTZCQyxDQTdCMEIscUJBQVcsR0E2QnJDO0FBN0JZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IFRpcCB9IGZyb20gJy4uL0l0ZW0vVGlwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBUaXBVSSBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUaXBVSSc7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgdGlwUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByaXZhdGUgdGlwUG9vbDogVGlwW10gPSBbXTtcblxuICAgIHNob3dUaXAobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50aXBQb29sLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGlwUG9vbFtqXS5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFBvb2xbal0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFBvb2xbal0ucGxheVRpcChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpcFBvb2wubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpcFBvb2xbaV0gIT0gbnVsbCAmJiB0aGlzLnRpcFBvb2xbaV0uaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBQb29sW2ldLm5vZGUuc2V0U2libGluZ0luZGV4KDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBQb29sW2ldLnBsYXlUaXAobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNjLmxvZyhcImNyZWF0ZSB0aXBcIik7XG4gICAgICAgIGxldCBUaXBOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBQcmVmYWIpO1xuICAgICAgICBUaXBOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgbGV0IHRpcCA9IFRpcE5vZGUuZ2V0Q29tcG9uZW50KFRpcCk7XG4gICAgICAgIHRoaXMudGlwUG9vbC5wdXNoKHRpcCk7XG4gICAgICAgIHRpcC5wbGF5VGlwKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==