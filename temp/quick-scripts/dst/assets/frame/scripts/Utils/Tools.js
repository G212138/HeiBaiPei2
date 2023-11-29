
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c9926FhnVH2Z4Gs2ZXOlDV', 'Tools');
// frame/scripts/Utils/Tools.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tools = exports.ArtMoveParam = void 0;
/**美术提供的位移动画参数 */
var ArtMoveParam = /** @class */ (function () {
    /**
     * @param t 时刻，ms
     * @param p 位置
     */
    function ArtMoveParam(t, p) {
        /**时刻，ms */
        this.time = 0;
        /**位置 */
        this.pos = cc.Vec3.ZERO;
        this.time = t;
        this.pos = p;
    }
    return ArtMoveParam;
}());
exports.ArtMoveParam = ArtMoveParam;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tools = /** @class */ (function () {
    function Tools() {
    }
    /**
     * 播放spine动画
     * @param {*} sp_Skeleton 动画文件
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    Tools.playSpine = function (sp_Skeleton, animName, loop, callback) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果
        if (callback === void 0) { callback = null; }
        // let spine = this.node.getComponent(sp.Skeleton);
        var track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener(function (trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback) {
                    callback(); // 动画结束后执行自己的逻辑
                }
            });
        }
    };
    //参数获取
    Tools.getQueryVariable = function (variable) {
        var query = window.location.href;
        var vars = query.split('?');
        if (vars.length < 2)
            return false;
        var vars = vars[1].split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    };
    /**
     * 使节点直接运行美术提供的位移动画参数，
     * (节点当前位置对应美术参数列表最后一个参数位置，
     * 函数内部会做相对位置的处理)
     * @param node
     * @param params
     * @param endCbk
     */
    Tools.runArtMoveSequence = function (node, params, endCbk) {
        if (endCbk === void 0) { endCbk = null; }
        var nodeOriPos = node.position;
        //节点实际坐标与美术参数坐标的差
        var gapPos = nodeOriPos.sub(params[params.length - 1].pos);
        function transArtPosToNodePos(artPos) {
            return artPos.add(gapPos);
        }
        node.setPosition(transArtPosToNodePos(params[0].pos));
        if (params.length <= 1) {
            if (endCbk)
                endCbk();
            return;
        }
        var actArray = [];
        for (var i = 1; i < params.length - 1; i++) {
            var duration = (params[i].time - params[i - 1].time) * 0.001;
            var p = transArtPosToNodePos(params[i].pos);
            actArray.push(cc.moveTo(duration, cc.v2(p.x, p.y)));
        }
        if (endCbk) {
            actArray.push(cc.callFunc(endCbk));
        }
        node.runAction(cc.sequence(actArray));
    };
    /**获取当前时间戳，毫秒 */
    Tools.getNowTimeMS = function () {
        return new Date().getTime();
    };
    /**获取当前时间戳，秒 */
    Tools.getNowTimeS = function () {
        return Math.floor(new Date().getTime() * 0.001);
    };
    /**
     * 格式化时间， eg: 100 ->  '01:40'
     * @param time 时长，秒
     */
    Tools.getFormatTime = function (time) {
        var min = Math.floor(time / 60);
        if (min < 10) {
            min = '0' + min;
        }
        var sec = time % 60;
        if (sec < 10) {
            sec = '0' + sec;
        }
        return min + ':' + sec;
    };
    Tools = __decorate([
        ccclass
    ], Tools);
    return Tools;
}());
exports.Tools = Tools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7OztBQUVuRyxpQkFBaUI7QUFDakI7SUFNSTs7O09BR0c7SUFDSCxzQkFBWSxDQUFTLEVBQUUsQ0FBVTtRQVRqQyxXQUFXO1FBQ1gsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFRO1FBQ1IsUUFBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBT3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxvQ0FBWTtBQWdCbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQW9HQSxDQUFDO0lBbkdHOzs7Ozs7T0FNRztJQUNXLGVBQVMsR0FBdkIsVUFBd0IsV0FBd0IsRUFBRSxRQUFnQixFQUFFLElBQWEsRUFBRSxRQUF5QjtRQUN4RyxxRUFBcUU7UUFEVSx5QkFBQSxFQUFBLGVBQXlCO1FBR3hHLG1EQUFtRDtRQUNuRCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQUMsVUFBVSxFQUFFLFNBQVM7Z0JBQ2xELElBQUksSUFBSSxHQUFHLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7Z0JBQ2pFLElBQUksSUFBSSxLQUFLLFFBQVEsSUFBSSxRQUFRLEVBQUU7b0JBQy9CLFFBQVEsRUFBRSxDQUFDLENBQUMsZUFBZTtpQkFDOUI7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELE1BQU07SUFDUSxzQkFBZ0IsR0FBOUIsVUFBK0IsUUFBZ0I7UUFDM0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDakMsSUFBSSxJQUFJLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQ2xDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFOUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3JCLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2xCO1NBQ0o7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQ7Ozs7Ozs7T0FPRztJQUNXLHdCQUFrQixHQUFoQyxVQUFpQyxJQUFhLEVBQUUsTUFBMkIsRUFBRSxNQUF1QjtRQUF2Qix1QkFBQSxFQUFBLGFBQXVCO1FBQ2hHLElBQUksVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDL0IsaUJBQWlCO1FBQ2pCLElBQUksTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0QsU0FBUyxvQkFBb0IsQ0FBQyxNQUFlO1lBQ3pDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUV0RCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksTUFBTTtnQkFBRSxNQUFNLEVBQUUsQ0FBQztZQUNyQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLFFBQVEsR0FBK0IsRUFBRSxDQUFDO1FBQzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxJQUFJLFFBQVEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUM7WUFDN0QsSUFBSSxDQUFDLEdBQUcsb0JBQW9CLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkQ7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNSLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGdCQUFnQjtJQUNGLGtCQUFZLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO0lBQ0QsaUJBQVcsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ1csbUJBQWEsR0FBM0IsVUFBNEIsSUFBWTtRQUNwQyxJQUFJLEdBQUcsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUU7WUFDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUNELElBQUksR0FBRyxHQUFRLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO1lBQ1YsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbkI7UUFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFuR1EsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQW9HakI7SUFBRCxZQUFDO0NBcEdELEFBb0dDLElBQUE7QUFwR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG4vKirnvo7mnK/mj5DkvpvnmoTkvY3np7vliqjnlLvlj4LmlbAgKi9cbmV4cG9ydCBjbGFzcyBBcnRNb3ZlUGFyYW0ge1xuICAgIC8qKuaXtuWIu++8jG1zICovXG4gICAgdGltZTogbnVtYmVyID0gMDtcbiAgICAvKirkvY3nva4gKi9cbiAgICBwb3M6IGNjLlZlYzMgPSBjYy5WZWMzLlpFUk87XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdCDml7bliLvvvIxtc1xuICAgICAqIEBwYXJhbSBwIOS9jee9rlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHQ6IG51bWJlciwgcDogY2MuVmVjMykge1xuICAgICAgICB0aGlzLnRpbWUgPSB0O1xuICAgICAgICB0aGlzLnBvcyA9IHA7XG4gICAgfVxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFRvb2xzIHtcbiAgICAvKipcbiAgICAgKiDmkq3mlL5zcGluZeWKqOeUu1xuICAgICAqIEBwYXJhbSB7Kn0gc3BfU2tlbGV0b24g5Yqo55S75paH5Lu2XG4gICAgICogQHBhcmFtIHsqfSBhbmltTmFtZSDliqjkvZzlkI3np7BcbiAgICAgKiBAcGFyYW0geyp9IGxvb3Ag5piv5ZCm5b6q546vXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFjayDmkq3mlL7lrozmr5Xlm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBsYXlTcGluZShzcF9Ta2VsZXRvbjogc3AuU2tlbGV0b24sIGFuaW1OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4sIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgLy8gc3BfU2tlbGV0b24ucHJlbXVsdGlwbGllZEFscGhhPWZhbHNlOy8v6L+Z5qC36K6+572u5ZyoY29jb3MgY3JlYXRvcuS4reaJjeiDveacieWNiumAj+aYjuaViOaenFxuXG4gICAgICAgIC8vIGxldCBzcGluZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBsZXQgdHJhY2sgPSBzcF9Ta2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYW5pbU5hbWUsIGxvb3ApO1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgIC8vIOazqOWGjOWKqOeUu+eahOe7k+adn+Wbnuiwg1xuICAgICAgICAgICAgc3BfU2tlbGV0b24uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gYW5pbU5hbWUgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTsgLy8g5Yqo55S757uT5p2f5ZCO5omn6KGM6Ieq5bex55qE6YC76L6RXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WPguaVsOiOt+WPllxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KCc/Jyk7XG4gICAgICAgIGlmICh2YXJzLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHZhcnMgPSB2YXJzWzFdLnNwbGl0KCcmJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9v+iKgueCueebtOaOpei/kOihjOe+juacr+aPkOS+m+eahOS9jeenu+WKqOeUu+WPguaVsO+8jFxuICAgICAqICjoioLngrnlvZPliY3kvY3nva7lr7nlupTnvo7mnK/lj4LmlbDliJfooajmnIDlkI7kuIDkuKrlj4LmlbDkvY3nva7vvIxcbiAgICAgKiDlh73mlbDlhoXpg6jkvJrlgZrnm7jlr7nkvY3nva7nmoTlpITnkIYpXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIGVuZENia1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuQXJ0TW92ZVNlcXVlbmNlKG5vZGU6IGNjLk5vZGUsIHBhcmFtczogQXJyYXk8QXJ0TW92ZVBhcmFtPiwgZW5kQ2JrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgbGV0IG5vZGVPcmlQb3MgPSBub2RlLnBvc2l0aW9uO1xuICAgICAgICAvL+iKgueCueWunumZheWdkOagh+S4jue+juacr+WPguaVsOWdkOagh+eahOW3rlxuICAgICAgICBsZXQgZ2FwUG9zID0gbm9kZU9yaVBvcy5zdWIocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXS5wb3MpO1xuICAgICAgICBmdW5jdGlvbiB0cmFuc0FydFBvc1RvTm9kZVBvcyhhcnRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnRQb3MuYWRkKGdhcFBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0cmFuc0FydFBvc1RvTm9kZVBvcyhwYXJhbXNbMF0ucG9zKSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgaWYgKGVuZENiaykgZW5kQ2JrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWN0QXJyYXk6IEFycmF5PGNjLkZpbml0ZVRpbWVBY3Rpb24+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFyYW1zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gKHBhcmFtc1tpXS50aW1lIC0gcGFyYW1zW2kgLSAxXS50aW1lKSAqIDAuMDAxO1xuICAgICAgICAgICAgbGV0IHAgPSB0cmFuc0FydFBvc1RvTm9kZVBvcyhwYXJhbXNbaV0ucG9zKTtcbiAgICAgICAgICAgIGFjdEFycmF5LnB1c2goY2MubW92ZVRvKGR1cmF0aW9uLCBjYy52MihwLngsIHAueSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kQ2JrKSB7XG4gICAgICAgICAgICBhY3RBcnJheS5wdXNoKGNjLmNhbGxGdW5jKGVuZENiaykpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0QXJyYXkpKTtcbiAgICB9XG5cbiAgICAvKirojrflj5blvZPliY3ml7bpl7TmiLPvvIzmr6vnp5IgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldE5vd1RpbWVNUygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluW9k+WJjeaXtumXtOaIs++8jOenkiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Tm93VGltZVMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpICogMC4wMDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluaXtumXtO+8jCBlZzogMTAwIC0+ICAnMDE6NDAnXG4gICAgICogQHBhcmFtIHRpbWUg5pe26ZW/77yM56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgbWluOiBhbnkgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgICAgIGlmIChtaW4gPCAxMCkge1xuICAgICAgICAgICAgbWluID0gJzAnICsgbWluO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWM6IGFueSA9IHRpbWUgJSA2MDtcbiAgICAgICAgaWYgKHNlYyA8IDEwKSB7XG4gICAgICAgICAgICBzZWMgPSAnMCcgKyBzZWM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiArICc6JyArIHNlYztcbiAgICB9XG59XG4iXX0=