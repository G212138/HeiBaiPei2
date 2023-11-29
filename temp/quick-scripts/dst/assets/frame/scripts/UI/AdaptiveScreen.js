
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba00bud/zlDiY6tClWPdHIa', 'AdaptiveScreen');
// frame/scripts/UI/AdaptiveScreen.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自适应代码
 */
var AdaptiveScreen = /** @class */ (function (_super) {
    __extends(AdaptiveScreen, _super);
    function AdaptiveScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 全屏背景图片，用于自适应
         */
        _this.bgNode = null;
        /**舞台设计宽度 */
        _this.viewWidth = 640;
        /**舞台设计高度 */
        _this.viewHeight = 1136;
        return _this;
        // update (dt) {}
    }
    AdaptiveScreen.prototype.onLoad = function () {
        this.screenAdapter();
    };
    AdaptiveScreen.prototype.start = function () {
        this.viewUp();
    };
    /**
     * 自适应
     */
    AdaptiveScreen.prototype.screenAdapter = function () {
        if (cc.Canvas.instance) {
            this.stage = cc.Canvas.instance.node;
            var canvas = cc.Canvas.instance;
            var winSize = cc.view.getFrameSize();
            // console.log(cc.winSize);
            // console.log(cc.view.getCanvasSize());
            // console.log(cc.view.getFrameSize());
            // console.log(cc.view.getVisibleSize());
            if (winSize.width / winSize.height < canvas.designResolution.width / canvas.designResolution.height) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
            }
            else {
                canvas.fitHeight = true;
                canvas.fitWidth = false;
            }
        }
    };
    AdaptiveScreen.prototype.viewUp = function () {
        var winSize = cc.winSize;
        var scaleX = winSize.width / this.viewWidth;
        var scaleY = winSize.height / this.viewHeight;
        this.bgNode.scale = 1 * Math.max(scaleX, scaleY);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: '全屏背景图片，用于自适应',
        })
    ], AdaptiveScreen.prototype, "bgNode", void 0);
    __decorate([
        property
    ], AdaptiveScreen.prototype, "viewWidth", void 0);
    __decorate([
        property
    ], AdaptiveScreen.prototype, "viewHeight", void 0);
    AdaptiveScreen = __decorate([
        ccclass
    ], AdaptiveScreen);
    return AdaptiveScreen;
}(cc.Component));
exports.default = AdaptiveScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxBZGFwdGl2ZVNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7R0FFRztBQUVIO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcURDO1FBcERHOztXQUVHO1FBS0gsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFZO1FBRUwsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUMvQixZQUFZO1FBRUwsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O1FBc0NqQyxpQkFBaUI7SUFDckIsQ0FBQztJQW5DRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRDs7T0FFRztJQUNJLHNDQUFhLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlDLDJCQUEyQjtZQUMzQix3Q0FBd0M7WUFDeEMsdUNBQXVDO1lBQ3ZDLHlDQUF5QztZQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBM0NEO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsT0FBTyxFQUFFLGNBQWM7U0FDMUIsQ0FBQztrREFDcUI7SUFHdkI7UUFEQyxRQUFRO3FEQUNzQjtJQUcvQjtRQURDLFFBQVE7c0RBQ3dCO0lBZGhCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FxRGxDO0lBQUQscUJBQUM7Q0FyREQsQUFxREMsQ0FyRDJDLEVBQUUsQ0FBQyxTQUFTLEdBcUR2RDtrQkFyRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiDoh6rpgILlupTku6PnoIFcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiDlhajlsY/og4zmma/lm77niYfvvIznlKjkuo7oh6rpgILlupRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB0b29sdGlwOiAn5YWo5bGP6IOM5pmv5Zu+54mH77yM55So5LqO6Ieq6YCC5bqUJyxcbiAgICB9KVxuICAgIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLyoq6Iie5Y+w6K6+6K6h5a695bqmICovXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIHZpZXdXaWR0aDogbnVtYmVyID0gNjQwO1xuICAgIC8qKuiInuWPsOiuvuiuoemrmOW6piAqL1xuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyB2aWV3SGVpZ2h0OiBudW1iZXIgPSAxMTM2O1xuXG4gICAgLyoq5b2T5YmN5Zy65pmvIOiInuWPsCAqL1xuICAgIHB1YmxpYyBzdGFnZTogY2MuTm9kZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuQWRhcHRlcigpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy52aWV3VXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Ieq6YCC5bqUXG4gICAgICovXG4gICAgcHVibGljIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGlmIChjYy5DYW52YXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBjYy5DYW52YXMuaW5zdGFuY2U7XG4gICAgICAgICAgICBsZXQgd2luU2l6ZTogY2MuU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy53aW5TaXplKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpKTtcbiAgICAgICAgICAgIGlmICh3aW5TaXplLndpZHRoIC8gd2luU2l6ZS5oZWlnaHQgPCBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIGNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3VXAoKSB7XG4gICAgICAgIGxldCB3aW5TaXplOiBjYy5TaXplID0gY2Mud2luU2l6ZTtcbiAgICAgICAgbGV0IHNjYWxlWCA9IHdpblNpemUud2lkdGggLyB0aGlzLnZpZXdXaWR0aDtcbiAgICAgICAgbGV0IHNjYWxlWSA9IHdpblNpemUuaGVpZ2h0IC8gdGhpcy52aWV3SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYmdOb2RlLnNjYWxlID0gMSAqIE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==