
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75b2dk5WVVO7LtxMPb6Uw7K', 'TeacherPanelLoading');
// frame/scripts/UI/Item/TeacherPanelLoading.ts

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
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanelLoading = /** @class */ (function (_super) {
    __extends(TeacherPanelLoading, _super);
    function TeacherPanelLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TeacherPanelLoading.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, this.onEnableEvent, this);
    };
    TeacherPanelLoading.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    TeacherPanelLoading.prototype.onEnableEvent = function (isShow) {
        this._nd_panel.active = isShow;
    };
    TeacherPanelLoading = __decorate([
        ccclass
    ], TeacherPanelLoading);
    return TeacherPanelLoading;
}(BindNode_1.default));
exports.default = TeacherPanelLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUZWFjaGVyUGFuZWxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxpRUFBZ0U7QUFDaEUsd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFRO0lBQXpEO1FBQUEscUVBb0JDO1FBbkJXLGVBQVMsR0FBWSxJQUFJLENBQUM7O1FBa0JsQyxpQkFBaUI7SUFDckIsQ0FBQztJQWpCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1DQUFLLEdBQUw7UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELHVDQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLE1BQWU7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFqQmdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBb0J2QztJQUFELDBCQUFDO0NBcEJELEFBb0JDLENBcEJnRCxrQkFBUSxHQW9CeEQ7a0JBcEJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmluZE5vZGUgZnJvbSAnLi4vQmluZE5vZGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclBhbmVsTG9hZGluZyBleHRlbmRzIEJpbmROb2RlIHtcbiAgICBwcml2YXRlIF9uZF9wYW5lbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihGcmFtZU1zZ1R5cGUuVEVBQ0hFUl9QQU5FTF9MT0FESU5HLCB0aGlzLm9uRW5hYmxlRXZlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLnJlbW92ZUFsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZUV2ZW50KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9uZF9wYW5lbC5hY3RpdmUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==