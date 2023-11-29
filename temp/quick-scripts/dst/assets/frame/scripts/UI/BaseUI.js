
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6da4j3MGhPfIxwls9tY6iS', 'BaseUI');
// frame/scripts/UI/BaseUI.ts

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
exports.BaseUI = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var ListenerManager_1 = require("../Manager/ListenerManager");
var BindNode_1 = require("./BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseUI.prototype, "data", {
        get: function () {
            return this.mData;
        },
        set: function (value) {
            this.mData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseUI.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    BaseUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.PREFAB_PANEL_DIR + this.className;
    };
    BaseUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    BaseUI.prototype.onShow = function () {
        cc.log('BaseUI onShow');
    };
    BaseUI.className = 'BaseUI';
    BaseUI.isFramePanel = false;
    BaseUI = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(BindNode_1.default));
exports.BaseUI = BaseUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCYXNlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCw4REFBNkQ7QUFDN0QsdUNBQWtDO0FBUzVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDBCQUFRO0lBQTdDOztJQStCQSxDQUFDO0lBM0JHLHNCQUFXLHdCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWdCLEtBQVU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx1QkFBRzthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFlLEtBQVU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFLYSxhQUFNLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxpQ0FBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQTdCYSxnQkFBUyxHQUFHLFFBQVEsQ0FBQztJQUNyQixtQkFBWSxHQUFZLEtBQUssQ0FBQztJQUYxQixNQUFNO1FBRDNCLE9BQU87T0FDYyxNQUFNLENBK0IzQjtJQUFELGFBQUM7Q0EvQkQsQUErQkMsQ0EvQm9DLGtCQUFRLEdBK0I1QztBQS9CcUIsd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZUNvbnN0VmFsdWUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmluZE5vZGUgZnJvbSAnLi9CaW5kTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDbGFzczxUIGV4dGVuZHMgQmFzZVVJPiB7XG4gICAgbmV3ICgpOiBUO1xuICAgIGdldFVybCgpOiBzdHJpbmc7XG4gICAgaXNGcmFtZVBhbmVsOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUkgZXh0ZW5kcyBCaW5kTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnQmFzZVVJJztcbiAgICBwdWJsaWMgc3RhdGljIGlzRnJhbWVQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBtRGF0YTogYW55O1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5tRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1EYXRhID0gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtVGFnOiBhbnk7XG4gICAgcHVibGljIGdldCB0YWcoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubVRhZztcbiAgICB9XG4gICAgcHVibGljIHNldCB0YWcodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1UYWcgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFVybCgpOiBzdHJpbmcge1xuICAgICAgICBjYy5sb2codGhpcy5jbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gRnJhbWVDb25zdFZhbHVlLlBSRUZBQl9QQU5FTF9ESVIgKyB0aGlzLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5yZW1vdmVBbGwodGhpcyk7XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBjYy5sb2coJ0Jhc2VVSSBvblNob3cnKTtcbiAgICB9XG59XG4iXX0=