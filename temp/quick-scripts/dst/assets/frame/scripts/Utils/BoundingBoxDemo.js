
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5f9dT/06tF45iF1u1hFPMw', 'BoundingBoxDemo');
// frame/scripts/Utils/BoundingBoxDemo.ts

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
var BoundingBoxHelp_1 = require("./BoundingBoxHelp");
/**
 * Author: kouyaqi
 * Email: kouyaqi@100tal.com
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * BoundingBoxHelp 的使用例子
 */
var BoundingboxDemo = /** @class */ (function (_super) {
    __extends(BoundingboxDemo, _super);
    function BoundingboxDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bbh = null;
        _this.grs = null;
        return _this;
    }
    BoundingboxDemo.prototype.update = function (dt) {
        this.grs.clear();
        //把边界框绘制出来
        var postions = this.bbh.getBoundingBoxWorldPositions('boundingBox');
        this.polygon(this.grs, postions);
        this.grs.stroke();
    };
    /**
     * 绘制多边形路径，至少3条边
     * @param poss
     */
    BoundingboxDemo.prototype.polygon = function (graphics, poss) {
        if (poss.length < 3)
            return;
        graphics.moveTo(poss[0].x, poss[0].y);
        for (var i = 1; i < poss.length; i++) {
            graphics.lineTo(poss[i].x, poss[i].y);
        }
        graphics.lineTo(poss[0].x, poss[0].y);
    };
    __decorate([
        property(BoundingBoxHelp_1.default)
    ], BoundingboxDemo.prototype, "bbh", void 0);
    __decorate([
        property(cc.Graphics)
    ], BoundingboxDemo.prototype, "grs", void 0);
    BoundingboxDemo = __decorate([
        ccclass
    ], BoundingboxDemo);
    return BoundingboxDemo;
}(cc.Component));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxCb3VuZGluZ0JveERlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBRWhEOzs7R0FHRztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOztHQUVHO0FBRUg7SUFBOEIsbUNBQVk7SUFBMUM7UUFBQSxxRUE0QkM7UUExQlcsU0FBRyxHQUFvQixJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFnQixJQUFJLENBQUM7O0lBdUJwQyxDQUFDO0lBckJHLGdDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQixVQUFVO1FBQ1YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaUNBQU8sR0FBZixVQUFnQixRQUFxQixFQUFFLElBQWU7UUFDbEQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO2dEQUNVO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1U7SUFMOUIsZUFBZTtRQURwQixPQUFPO09BQ0YsZUFBZSxDQTRCcEI7SUFBRCxzQkFBQztDQTVCRCxBQTRCQyxDQTVCNkIsRUFBRSxDQUFDLFNBQVMsR0E0QnpDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvdW5kaW5nQm94SGVscCBmcm9tICcuL0JvdW5kaW5nQm94SGVscCc7XG5cbi8qKlxuICogQXV0aG9yOiBrb3V5YXFpXG4gKiBFbWFpbDoga291eWFxaUAxMDB0YWwuY29tXG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiBCb3VuZGluZ0JveEhlbHAg55qE5L2/55So5L6L5a2QXG4gKi9cbkBjY2NsYXNzXG5jbGFzcyBCb3VuZGluZ2JveERlbW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShCb3VuZGluZ0JveEhlbHApXG4gICAgcHJpdmF0ZSBiYmg6IEJvdW5kaW5nQm94SGVscCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgcHJpdmF0ZSBncnM6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmdycy5jbGVhcigpO1xuXG4gICAgICAgIC8v5oqK6L6555WM5qGG57uY5Yi25Ye65p2lXG4gICAgICAgIGxldCBwb3N0aW9ucyA9IHRoaXMuYmJoLmdldEJvdW5kaW5nQm94V29ybGRQb3NpdGlvbnMoJ2JvdW5kaW5nQm94Jyk7XG4gICAgICAgIHRoaXMucG9seWdvbih0aGlzLmdycywgcG9zdGlvbnMpO1xuICAgICAgICB0aGlzLmdycy5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5jliLblpJrovrnlvaLot6/lvoTvvIzoh7PlsJEz5p2h6L65XG4gICAgICogQHBhcmFtIHBvc3NcbiAgICAgKi9cbiAgICBwcml2YXRlIHBvbHlnb24oZ3JhcGhpY3M6IGNjLkdyYXBoaWNzLCBwb3NzOiBjYy5WZWMyW10pIHtcbiAgICAgICAgaWYgKHBvc3MubGVuZ3RoIDwgMykgcmV0dXJuO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9zc1swXS54LCBwb3NzWzBdLnkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb3NzW2ldLngsIHBvc3NbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHBvc3NbMF0ueCwgcG9zc1swXS55KTtcbiAgICB9XG59XG4iXX0=