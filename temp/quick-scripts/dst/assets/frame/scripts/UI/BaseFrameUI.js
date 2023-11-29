
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6fa1aRp8dNq6gX3GwD9kTX', 'BaseFrameUI');
// frame/scripts/UI/BaseFrameUI.ts

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
var FrameConstValue_1 = require("../Data/FrameConstValue");
var BaseUI_1 = require("./BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseFrameUI = /** @class */ (function (_super) {
    __extends(BaseFrameUI, _super);
    function BaseFrameUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseFrameUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.FRAME_PREFAB_PANEL_DIR + this.className;
    };
    BaseFrameUI.isFramePanel = true;
    BaseFrameUI = __decorate([
        ccclass
    ], BaseFrameUI);
    return BaseFrameUI;
}(BaseUI_1.BaseUI));
exports.default = BaseFrameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCYXNlRnJhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsbUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DOztJQU9BLENBQUM7SUFKaUIsa0JBQU0sR0FBcEI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLGlDQUFlLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBTGEsd0JBQVksR0FBWSxJQUFJLENBQUM7SUFEMUIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQU8vQjtJQUFELGtCQUFDO0NBUEQsQUFPQyxDQVB3QyxlQUFNLEdBTzlDO2tCQVBvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVDb25zdFZhbHVlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZUNvbnN0VmFsdWUnO1xuaW1wb3J0IHsgQmFzZVVJIH0gZnJvbSAnLi9CYXNlVUknO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZyYW1lVUkgZXh0ZW5kcyBCYXNlVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNGcmFtZVBhbmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGNjLmxvZyh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBGcmFtZUNvbnN0VmFsdWUuRlJBTUVfUFJFRkFCX1BBTkVMX0RJUiArIHRoaXMuY2xhc3NOYW1lO1xuICAgIH1cbn1cbiJdfQ==