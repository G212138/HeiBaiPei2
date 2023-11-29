
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/HitTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc84066lYNFeaHvvm4jg8ve', 'HitTest');
// frame/scripts/Utils/HitTest.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTest = void 0;
var HitTest = /** @class */ (function () {
    function HitTest() {
    }
    /**
     * 点是否在图形内
     * @param pos 世界坐标
     * @param rect 碰撞节点
     */
    HitTest.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var lb = cc.v2(p.x - rect.width / 2, p.y - rect.height / 2);
        var rt = cc.v2(p.x + rect.width / 2, p.y + rect.height / 2);
        var b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    };
    /**
     * 图形点击检测, 锚点必须为左上角，或者中心。
     * 所检测的图片不可打包图集
     * @param posw 点击的世界坐标
     * @param sprite 点击的图片
     * @param accurate 是否开始像素精确判定
     */
    HitTest.imgHitTest = function (posw, sprite, accurate) {
        if (accurate === void 0) { accurate = false; }
        if (accurate) {
            var spf = sprite.spriteFrame;
            var pos = sprite.node.convertToNodeSpaceAR(posw);
            if (sprite.node.anchorX == 0 && sprite.node.anchorY == 1) {
                pos.y = -pos.y;
            }
            else if (sprite.node.anchorX == 0.5 && sprite.node.anchorY == 0.5) {
                var w = sprite.node.width;
                var h = sprite.node.height;
                pos.x = w / 2 + pos.x;
                if (pos.y > 0) {
                    pos.y = h / 2 - pos.y;
                }
                else {
                    pos.y = h / 2 + Math.abs(pos.y);
                }
            }
            var tex = spf.getTexture();
            var cvs = document.createElement('canvas');
            var ctx = cvs.getContext('2d');
            cvs.width = tex.width;
            cvs.height = tex.height;
            ctx.drawImage(tex.getHtmlElementObj(), 0, 0, tex.width, tex.height, 0, 0, tex.width / 1, tex.height / 1);
            var ctx = cvs.getContext('2d');
            var data = ctx.getImageData(pos.x, pos.y, 1, 1).data;
            console.log(data);
            return data[3] != 0;
        }
        else {
            this.posInRect(posw, sprite.node);
        }
    };
    /**
     * 点是否在多边形内
     */
    HitTest.polygonInside = function (point, polygon) {
        var b = false;
        var cn = 0;
        for (var i = 0, l = polygon.length - 1; i < l; i++) {
            var p1 = polygon[i];
            var p2 = polygon[i + 1];
            if ((p1.y < point.y && p2.y > point.y) || (p1.y > point.y && p2.y < point.y)) {
                var vt = (point.y - p1.y) / (p2.y - p1.y);
                if (point.x < p1.x + vt * (p2.x - p1.x)) {
                    ++cn;
                }
            }
        }
        // 判断交点个数是奇数还是偶数，奇数在图内，偶数在图外，如果有特殊图形，则需要特殊判断
        b = cn % 2 == 1;
        return b;
    };
    return HitTest;
}());
exports.HitTest = HitTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxIaXRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF5RUEsQ0FBQztJQXhFRzs7OztPQUlHO0lBQ1csaUJBQVMsR0FBdkIsVUFBd0IsR0FBWSxFQUFFLElBQWE7UUFDL0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxrQkFBVSxHQUF4QixVQUF5QixJQUFhLEVBQUUsTUFBaUIsRUFBRSxRQUF5QjtRQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtRQUNoRixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7WUFDN0IsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUU7Z0JBQ3RELEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO2lCQUFNLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEdBQUcsRUFBRTtnQkFDakUsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO2dCQUMzQixHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDWCxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDekI7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuQzthQUNKO1lBQ0QsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQzNCLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDM0MsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUM7WUFDdEIsR0FBRyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDO1lBQ3hCLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3pHLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDL0IsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNyRCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRWxCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN2QjthQUFNO1lBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ1cscUJBQWEsR0FBM0IsVUFBNEIsS0FBYyxFQUFFLE9BQWtCO1FBQzFELElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNkLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNYLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hELElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JDLEVBQUUsRUFBRSxDQUFDO2lCQUNSO2FBQ0o7U0FDSjtRQUNELDRDQUE0QztRQUM1QyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsY0FBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGl0VGVzdCB7XG4gICAgLyoqXG4gICAgICog54K55piv5ZCm5Zyo5Zu+5b2i5YaFXG4gICAgICogQHBhcmFtIHBvcyDkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gcmVjdCDnorDmkp7oioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBvc0luUmVjdChwb3M6IGNjLlZlYzIsIHJlY3Q6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHAgPSByZWN0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocmVjdC5wb3NpdGlvbik7XG4gICAgICAgIGxldCBsYiA9IGNjLnYyKHAueCAtIHJlY3Qud2lkdGggLyAyLCBwLnkgLSByZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBsZXQgcnQgPSBjYy52MihwLnggKyByZWN0LndpZHRoIC8gMiwgcC55ICsgcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IGIgPSBwb3MueCA+PSBsYi54ICYmIHBvcy55ID49IGxiLnkgJiYgcG9zLnggPD0gcnQueCAmJiBwb3MueSA8PSBydC55O1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlm77lvaLngrnlh7vmo4DmtYssIOmUmueCueW/hemhu+S4uuW3puS4iuinku+8jOaIluiAheS4reW/g+OAglxuICAgICAqIOaJgOajgOa1i+eahOWbvueJh+S4jeWPr+aJk+WMheWbvumbhlxuICAgICAqIEBwYXJhbSBwb3N3IOeCueWHu+eahOS4lueVjOWdkOagh1xuICAgICAqIEBwYXJhbSBzcHJpdGUg54K55Ye755qE5Zu+54mHXG4gICAgICogQHBhcmFtIGFjY3VyYXRlIOaYr+WQpuW8gOWni+WDj+e0oOeyvuehruWIpOWumlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW1nSGl0VGVzdChwb3N3OiBjYy5WZWMyLCBzcHJpdGU6IGNjLlNwcml0ZSwgYWNjdXJhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoYWNjdXJhdGUpIHtcbiAgICAgICAgICAgIGxldCBzcGYgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICBsZXQgcG9zID0gc3ByaXRlLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zdyk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlLm5vZGUuYW5jaG9yWCA9PSAwICYmIHNwcml0ZS5ub2RlLmFuY2hvclkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHBvcy55ID0gLXBvcy55O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcHJpdGUubm9kZS5hbmNob3JYID09IDAuNSAmJiBzcHJpdGUubm9kZS5hbmNob3JZID09IDAuNSkge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gc3ByaXRlLm5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGggPSBzcHJpdGUubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB3IC8gMiArIHBvcy54O1xuICAgICAgICAgICAgICAgIGlmIChwb3MueSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSBoIC8gMiAtIHBvcy55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ID0gaCAvIDIgKyBNYXRoLmFicyhwb3MueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRleCA9IHNwZi5nZXRUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdnMud2lkdGggPSB0ZXgud2lkdGg7XG4gICAgICAgICAgICBjdnMuaGVpZ2h0ID0gdGV4LmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGV4LmdldEh0bWxFbGVtZW50T2JqKCksIDAsIDAsIHRleC53aWR0aCwgdGV4LmhlaWdodCwgMCwgMCwgdGV4LndpZHRoIC8gMSwgdGV4LmhlaWdodCAvIDEpO1xuICAgICAgICAgICAgdmFyIGN0eCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKHBvcy54LCBwb3MueSwgMSwgMSkuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YVszXSAhPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NJblJlY3QocG9zdywgc3ByaXRlLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog54K55piv5ZCm5Zyo5aSa6L655b2i5YaFXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwb2x5Z29uSW5zaWRlKHBvaW50OiBjYy5WZWMyLCBwb2x5Z29uOiBjYy5WZWMyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwMSA9IHBvbHlnb25baV07XG4gICAgICAgICAgICBsZXQgcDIgPSBwb2x5Z29uW2kgKyAxXTtcbiAgICAgICAgICAgIGlmICgocDEueSA8IHBvaW50LnkgJiYgcDIueSA+IHBvaW50LnkpIHx8IChwMS55ID4gcG9pbnQueSAmJiBwMi55IDwgcG9pbnQueSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdnQgPSAocG9pbnQueSAtIHAxLnkpIC8gKHAyLnkgLSBwMS55KTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQueCA8IHAxLnggKyB2dCAqIChwMi54IC0gcDEueCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytjbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5Lqk54K55Liq5pWw5piv5aWH5pWw6L+Y5piv5YG25pWw77yM5aWH5pWw5Zyo5Zu+5YaF77yM5YG25pWw5Zyo5Zu+5aSW77yM5aaC5p6c5pyJ54m55q6K5Zu+5b2i77yM5YiZ6ZyA6KaB54m55q6K5Yik5patXG4gICAgICAgIGIgPSBjbiAlIDIgPT0gMTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxufVxuIl19