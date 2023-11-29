
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd28fa0BmSFGwY3HLHVIrT8f', 'BoundingBoxHelp');
// frame/scripts/Utils/BoundingBoxHelp.ts

"use strict";
/**
 * Author: kouyaqi
 * Email: kouyaqi@100tal.com
 */
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
 * 处理sp.Skeleton的边界框的方法；
 * 将此脚本挂载到含有spine资源的节点；
 * 资源顶点越多，贴合越好，性能越低。
 * */
var BoundingBoxHelp = /** @class */ (function (_super) {
    __extends(BoundingBoxHelp, _super);
    function BoundingBoxHelp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeleton = null;
        /**插槽的顶点数据 */
        _this.vertices = [];
        /**转换得到的坐标 */
        _this.positions = [];
        return _this;
    }
    BoundingBoxHelp.prototype.getSkeleton = function () {
        if (this.skeleton == null) {
            this.skeleton = this.node.getComponent(sp.Skeleton);
        }
        return this.skeleton;
    };
    /**
     * 获取插槽所绑定的边界框的世界坐标
     * @param slotName 插槽名称
     */
    BoundingBoxHelp.prototype.getBoundingBoxWorldPositions = function (slotName) {
        var skeleton = this.getSkeleton();
        if (skeleton == null) {
            console.warn('没有Spine资源！');
            return this.positions;
        }
        var boundingBoxSlot = skeleton.findSlot(slotName);
        if (!boundingBoxSlot) {
            console.warn("\u6CA1\u6709\u627E\u5230\u63D2\u69FD\uFF1A " + slotName);
            return this.positions;
        }
        var attachment = boundingBoxSlot.attachment;
        /** http://zh.esotericsoftware.com/spine-api-reference#BoundingBoxAttachment
         * Transforms the attachment's local vertices to world coordinates. If the slot has attachmentVertices, they are used to deform the vertices.
         *   See World transforms in the Spine Runtimes Guide.
         */
        attachment.computeWorldVertices(boundingBoxSlot, 0, attachment.worldVerticesLength, this.vertices, 0, 2);
        for (var i = 0; i < this.vertices.length; i += 2) {
            if (!this.positions[i / 2]) {
                this.positions[i / 2] = cc.Vec2.ZERO;
            }
            this.positions[i / 2].x = this.vertices[i];
            this.positions[i / 2].y = this.vertices[i + 1];
        }
        //此时的世界坐标是Spine内部的世界坐标，需要转换为Cocos里的世界坐标
        for (var i = 0; i < this.positions.length; i++) {
            this.positions[i] = this.node.convertToWorldSpaceAR(this.positions[i]);
        }
        return this.positions;
    };
    /**
     * 获取插槽所绑定的边界框相对于节点的坐标
     * @param slotName 插槽名称
     * @param node 相对节点
     */
    BoundingBoxHelp.prototype.getBoundingBoxRelativePositions = function (slotName, node) {
        var positions = this.getBoundingBoxWorldPositions(slotName);
        for (var i = 0; i < positions.length; i++) {
            positions[i] = node.convertToNodeSpaceAR(positions[i]);
        }
        return positions;
    };
    BoundingBoxHelp = __decorate([
        ccclass
    ], BoundingBoxHelp);
    return BoundingBoxHelp;
}(cc.Component));
exports.default = BoundingBoxHelp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxCb3VuZGluZ0JveEhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7S0FJSztBQUVMO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0VDO1FBbkVXLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRXJDLGFBQWE7UUFDTCxjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRWhDLGFBQWE7UUFDTCxlQUFTLEdBQWMsRUFBRSxDQUFDOztJQTZEdEMsQ0FBQztJQTNEVyxxQ0FBVyxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNEQUE0QixHQUFuQyxVQUFvQyxRQUFnQjtRQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQVcsUUFBVSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM1Qzs7O1dBR0c7UUFDSCxVQUFVLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELHVDQUF1QztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlEQUErQixHQUF0QyxVQUF1QyxRQUFnQixFQUFFLElBQWE7UUFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBbkVnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBb0VuQztJQUFELHNCQUFDO0NBcEVELEFBb0VDLENBcEU0QyxFQUFFLENBQUMsU0FBUyxHQW9FeEQ7a0JBcEVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXRob3I6IGtvdXlhcWlcbiAqIEVtYWlsOiBrb3V5YXFpQDEwMHRhbC5jb21cbiAqL1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOWkhOeQhnNwLlNrZWxldG9u55qE6L6555WM5qGG55qE5pa55rOV77ybXG4gKiDlsIbmraTohJrmnKzmjILovb3liLDlkKvmnIlzcGluZei1hOa6kOeahOiKgueCue+8m1xuICog6LWE5rqQ6aG254K56LaK5aSa77yM6LS05ZCI6LaK5aW977yM5oCn6IO96LaK5L2O44CCXG4gKiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94SGVscCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBza2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgLyoq5o+S5qe955qE6aG254K55pWw5o2uICovXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcblxuICAgIC8qKui9rOaNouW+l+WIsOeahOWdkOaghyAqL1xuICAgIHByaXZhdGUgcG9zaXRpb25zOiBjYy5WZWMyW10gPSBbXTtcblxuICAgIHByaXZhdGUgZ2V0U2tlbGV0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNrZWxldG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5za2VsZXRvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmj5Lmp73miYDnu5HlrprnmoTovrnnlYzmoYbnmoTkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gc2xvdE5hbWUg5o+S5qe95ZCN56ewXG4gICAgICovXG4gICAgcHVibGljIGdldEJvdW5kaW5nQm94V29ybGRQb3NpdGlvbnMoc2xvdE5hbWU6IHN0cmluZyk6IGNjLlZlYzJbXSB7XG4gICAgICAgIGxldCBza2VsZXRvbiA9IHRoaXMuZ2V0U2tlbGV0b24oKTtcbiAgICAgICAgaWYgKHNrZWxldG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5rKh5pyJU3BpbmXotYTmupDvvIEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib3VuZGluZ0JveFNsb3QgPSBza2VsZXRvbi5maW5kU2xvdChzbG90TmFtZSk7XG4gICAgICAgIGlmICghYm91bmRpbmdCb3hTbG90KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOayoeacieaJvuWIsOaPkuanve+8miAke3Nsb3ROYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBib3VuZGluZ0JveFNsb3QuYXR0YWNobWVudDtcbiAgICAgICAgLyoqIGh0dHA6Ly96aC5lc290ZXJpY3NvZnR3YXJlLmNvbS9zcGluZS1hcGktcmVmZXJlbmNlI0JvdW5kaW5nQm94QXR0YWNobWVudFxuICAgICAgICAgKiBUcmFuc2Zvcm1zIHRoZSBhdHRhY2htZW50J3MgbG9jYWwgdmVydGljZXMgdG8gd29ybGQgY29vcmRpbmF0ZXMuIElmIHRoZSBzbG90IGhhcyBhdHRhY2htZW50VmVydGljZXMsIHRoZXkgYXJlIHVzZWQgdG8gZGVmb3JtIHRoZSB2ZXJ0aWNlcy5cbiAgICAgICAgICogICBTZWUgV29ybGQgdHJhbnNmb3JtcyBpbiB0aGUgU3BpbmUgUnVudGltZXMgR3VpZGUuXG4gICAgICAgICAqL1xuICAgICAgICBhdHRhY2htZW50LmNvbXB1dGVXb3JsZFZlcnRpY2VzKGJvdW5kaW5nQm94U2xvdCwgMCwgYXR0YWNobWVudC53b3JsZFZlcnRpY2VzTGVuZ3RoLCB0aGlzLnZlcnRpY2VzLCAwLCAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3NpdGlvbnNbaSAvIDJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdLnggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdLnkgPSB0aGlzLnZlcnRpY2VzW2kgKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q2k5pe255qE5LiW55WM5Z2Q5qCH5pivU3BpbmXlhoXpg6jnmoTkuJbnlYzlnZDmoIfvvIzpnIDopoHovazmjaLkuLpDb2Nvc+mHjOeahOS4lueVjOWdkOagh1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpXSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wb3NpdGlvbnNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaPkuanveaJgOe7keWumueahOi+ueeVjOahhuebuOWvueS6juiKgueCueeahOWdkOagh1xuICAgICAqIEBwYXJhbSBzbG90TmFtZSDmj5Lmp73lkI3np7BcbiAgICAgKiBAcGFyYW0gbm9kZSDnm7jlr7noioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3hSZWxhdGl2ZVBvc2l0aW9ucyhzbG90TmFtZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuZ2V0Qm91bmRpbmdCb3hXb3JsZFBvc2l0aW9ucyhzbG90TmFtZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbnNbaV0gPSBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgICB9XG59XG4iXX0=