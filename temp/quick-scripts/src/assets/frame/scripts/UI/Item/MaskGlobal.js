"use strict";
cc._RF.push(module, '858970ZsXNOcpzdwRAxST5n', 'MaskGlobal');
// frame/scripts/UI/Item/MaskGlobal.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var UIManager_1 = require("../../Manager/UIManager");
var UIHelp_1 = require("../../Utils/UIHelp");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskGlobal = /** @class */ (function (_super) {
    __extends(MaskGlobal, _super);
    function MaskGlobal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_mask = null;
        _this._nd_loading = null;
        _this.isShowLoading = false;
        return _this;
    }
    MaskGlobal.prototype.onLoad = function () {
        //设置最层级
        this.node.zIndex = UIManager_1.EPANEL_ZORDER.MASK;
    };
    MaskGlobal.prototype.start = function () {
        /**
         * 适用方法
         * ListenerManager.dispatch(FrameMsgType.ON_MASK,true,true);
         */
        this._nd_mask.on(cc.Node.EventType.TOUCH_START, this.on_touchStart, this);
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_MASK, this.onMask, this);
        this._nd_loading.active = false;
        this._nd_mask.active = false;
    };
    MaskGlobal.prototype.onMask = function (isState, isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        this._nd_mask.active = isState;
        this.isShowLoading = isShowLoading;
        this.SetLoading(this.isShowLoading);
    };
    MaskGlobal.prototype.on_touchStart = function () {
        if (this.isShowLoading) {
            return;
        }
        UIHelp_1.UIHelp.showTip('请稍后再操作');
    };
    MaskGlobal.prototype.SetLoading = function (isShowLoading) {
        this._nd_loading.active = isShowLoading;
    };
    MaskGlobal = __decorate([
        ccclass
    ], MaskGlobal);
    return MaskGlobal;
}(BindNode_1.default));
exports.default = MaskGlobal;

cc._RF.pop();