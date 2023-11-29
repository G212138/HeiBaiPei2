
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNYXNrR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxpRUFBZ0U7QUFDaEUscURBQXdEO0FBQ3hELDZDQUE0QztBQUM1Qyx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVE7SUFBaEQ7UUFBQSxxRUFxQ0M7UUFwQ1UsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFrQzFDLENBQUM7SUFoQ0csMkJBQU0sR0FBTjtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBYSxDQUFDLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJOzs7V0FHRztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLGlDQUFlLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsYUFBOEI7UUFBOUIsOEJBQUEsRUFBQSxxQkFBOEI7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUNELGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxhQUFzQjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQXBDZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFDOUI7SUFBRCxpQkFBQztDQXJDRCxBQXFDQyxDQXJDdUMsa0JBQVEsR0FxQy9DO2tCQXJDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IEVQQU5FTF9aT1JERVIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IEJpbmROb2RlIGZyb20gJy4uL0JpbmROb2RlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tHbG9iYWwgZXh0ZW5kcyBCaW5kTm9kZSB7XG4gICAgcHVibGljIF9uZF9tYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwdWJsaWMgX25kX2xvYWRpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v6K6+572u5pyA5bGC57qnXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBFUEFORUxfWk9SREVSLk1BU0s7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpgILnlKjmlrnms5VcbiAgICAgICAgICogTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLHRydWUsdHJ1ZSk7XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9uZF9tYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uX3RvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRoaXMub25NYXNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmRfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1hc2soaXNTdGF0ZTogYm9vbGVhbiwgaXNTaG93TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX25kX21hc2suYWN0aXZlID0gaXNTdGF0ZTtcbiAgICAgICAgdGhpcy5pc1Nob3dMb2FkaW5nID0gaXNTaG93TG9hZGluZztcbiAgICAgICAgdGhpcy5TZXRMb2FkaW5nKHRoaXMuaXNTaG93TG9hZGluZyk7XG4gICAgfVxuXG4gICAgb25fdG91Y2hTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFVJSGVscC5zaG93VGlwKCfor7fnqI3lkI7lho3mk43kvZwnKTtcbiAgICB9XG5cbiAgICBTZXRMb2FkaW5nKGlzU2hvd0xvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBpc1Nob3dMb2FkaW5nO1xuICAgIH1cbn1cbiJdfQ==