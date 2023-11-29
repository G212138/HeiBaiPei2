
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/EditorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64363RgvXdCJJdpexRQv89P', 'EditorManager');
// game/scripts/Manager/EditorManager.ts

"use strict";
/**编辑器数据类 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorManager = void 0;
/**
 * 编辑器数据，根据游戏自定义内部数据
 */
var EditorData = /** @class */ (function () {
    function EditorData() {
        // 是否开启星级评
        this.isStarCount = true;
        // 是否开启再玩一次
        this.isReplay = true;
        // 是否自动播放题干语音
        this.isPlayTitle = true;
        // 可重玩次数
        this.replayCount = 1;
        // 关卡总数
        this.levelCount = 1;
        // 总步数
        this.stepCount = 0;
        // 课件等级 0：幼小  1：小低  2：小高
        this.coursewareLevel = 2;
        // TODO 自定义数据
        this.needEnd = true;
        this.geziSize = 0;
        this.tigan = '';
        this.iconType = 0;
        this.geziIconArr = [];
        this.answerArr = [];
    }
    return EditorData;
}());
var EditorManagerClass = /** @class */ (function () {
    function EditorManagerClass() {
        /** 编辑器数据 */
        this.editorData = new EditorData();
    }
    EditorManagerClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    };
    /**
     * 是否支持题目编辑
     */
    EditorManagerClass.prototype.isSupportEdit = function () {
        var keys = Object.getOwnPropertyNames(this.editorData);
        return keys.length > 7;
    };
    /**
     * 获取关卡总数
     */
    EditorManagerClass.prototype.getLevelCount = function () {
        return this.editorData.levelCount;
    };
    /**
     * 设置关卡总数
     */
    EditorManagerClass.prototype.setLevelCount = function (num) {
        this.editorData.levelCount = num;
    };
    /**
     * 获取总步数
     */
    EditorManagerClass.prototype.getStepCount = function () {
        return this.editorData.stepCount || this.getLevelCount();
    };
    /**
     * 设置总步数
     */
    EditorManagerClass.prototype.setStepCount = function (num) {
        this.editorData.stepCount = num;
    };
    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    EditorManagerClass.prototype.getCoursewareLevel = function () {
        return this.editorData.coursewareLevel;
    };
    /**
     * 获取编辑器数据
     */
    EditorManagerClass.prototype.getData = function () {
        return this.editorData;
    };
    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    EditorManagerClass.prototype.setData = function (data) {
        this.editorData = data;
    };
    return EditorManagerClass;
}());
exports.EditorManager = EditorManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLGFBQWE7UUFDTixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQ3JCLGdCQUFXLEdBQWEsRUFBRSxDQUFDO1FBQzNCLGNBQVMsR0FBZSxFQUFFLENBQUM7SUFDdEMsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0F0QkEsQUFzQkMsSUFBQTtBQUVEO0lBYUk7UUFIQSxZQUFZO1FBQ0wsZUFBVSxHQUFlLElBQUksVUFBVSxFQUFFLENBQUM7SUFFbEMsQ0FBQztJQVZULDhCQUFXLEdBQWxCO1FBQ0ksSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN4QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksa0JBQWtCLEVBQUUsQ0FBQztTQUM3QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBT0Q7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQjtRQUNJLElBQUksSUFBSSxHQUFHLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdkQsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQ0FBYSxHQUFwQjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEIsVUFBcUIsR0FBVztRQUM1QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUM7SUFDckMsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx5Q0FBWSxHQUFuQixVQUFvQixHQUFXO1FBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLCtDQUFrQixHQUF6QjtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUM7SUFDM0MsQ0FBQztJQUVEOztPQUVHO0lBQ0ksb0NBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksb0NBQU8sR0FBZCxVQUFlLElBQWdCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFDTCx5QkFBQztBQUFELENBM0VBLEFBMkVDLElBQUE7QUFFWSxRQUFBLGFBQWEsR0FBRyxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKue8lui+keWZqOaVsOaNruexuyAqL1xuXG4vKipcbiAqIOe8lui+keWZqOaVsOaNru+8jOagueaNrua4uOaIj+iHquWumuS5ieWGhemDqOaVsOaNrlxuICovXG5jbGFzcyBFZGl0b3JEYXRhIHtcbiAgICAvLyDmmK/lkKblvIDlkK/mmJ/nuqfor4RcbiAgICBwdWJsaWMgaXNTdGFyQ291bnQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOaYr+WQpuW8gOWQr+WGjeeOqeS4gOasoVxuICAgIHB1YmxpYyBpc1JlcGxheTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5piv5ZCm6Ieq5Yqo5pKt5pS+6aKY5bmy6K+t6Z+zXG4gICAgcHVibGljIGlzUGxheVRpdGxlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDlj6/ph43njqnmrKHmlbBcbiAgICBwdWJsaWMgcmVwbGF5Q291bnQ6IG51bWJlciA9IDE7XG4gICAgLy8g5YWz5Y2h5oC75pWwXG4gICAgcHVibGljIGxldmVsQ291bnQ6IG51bWJlciA9IDE7XG4gICAgLy8g5oC75q2l5pWwXG4gICAgcHVibGljIHN0ZXBDb3VudDogbnVtYmVyID0gMDtcbiAgICAvLyDor77ku7bnrYnnuqcgMO+8muW5vOWwjyAgMe+8muWwj+S9jiAgMu+8muWwj+mrmFxuICAgIHB1YmxpYyBjb3Vyc2V3YXJlTGV2ZWw6IG51bWJlciA9IDI7XG4gICAgLy8gVE9ETyDoh6rlrprkuYnmlbDmja5cbiAgICBwdWJsaWMgbmVlZEVuZDogYm9vbGVhbiA9IHRydWU7XG4gICAgcHVibGljIGdlemlTaXplOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyB0aWdhbjogc3RyaW5nID0gJyc7XG4gICAgcHVibGljIGljb25UeXBlOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBnZXppSWNvbkFycjogbnVtYmVyW10gPSBbXTtcbiAgICBwdWJsaWMgYW5zd2VyQXJyOiBudW1iZXJbXVtdID0gW107XG59XG5cbmNsYXNzIEVkaXRvck1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBFZGl0b3JNYW5hZ2VyQ2xhc3M7XG5cbiAgICBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBFZGl0b3JNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgLyoqIOe8lui+keWZqOaVsOaNriAqL1xuICAgIHB1YmxpYyBlZGl0b3JEYXRhOiBFZGl0b3JEYXRhID0gbmV3IEVkaXRvckRhdGEoKTtcblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICAqIOaYr+WQpuaUr+aMgemimOebrue8lui+kVxuICAgICAqL1xuICAgIHB1YmxpYyBpc1N1cHBvcnRFZGl0KCk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQga2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRoaXMuZWRpdG9yRGF0YSk7XG5cbiAgICAgICAgcmV0dXJuIGtleXMubGVuZ3RoID4gNztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHmgLvmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0TGV2ZWxDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YS5sZXZlbENvdW50O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaAu+aVsFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRMZXZlbENvdW50KG51bTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuZWRpdG9yRGF0YS5sZXZlbENvdW50ID0gbnVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaAu+atpeaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRTdGVwQ291bnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEuc3RlcENvdW50IHx8IHRoaXMuZ2V0TGV2ZWxDb3VudCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaAu+atpeaVsFxuICAgICAqL1xuICAgIHB1YmxpYyBzZXRTdGVwQ291bnQobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhLnN0ZXBDb3VudCA9IG51bTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bor77ku7bnrYnnuqdcbiAgICAgKiDpnIDopoHlkITkuKrmuLjmiI/moLnmja7lrp7pmYXmg4XlhrXorr7nva7mraPnoa7nmoTmlbDlgLxcbiAgICAgKiDor77ku7bnrYnnuqcgMO+8muW5vOWwjyAgMe+8muWwj+S9jiAgMu+8muWwj+mrmFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRDb3Vyc2V3YXJlTGV2ZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGEuY291cnNld2FyZUxldmVsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPlue8lui+keWZqOaVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyBnZXREYXRhKCk6IEVkaXRvckRhdGEge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagueaNrue9kee7nOivt+axgue7k+aenOiuvue9rue8lui+keWZqOaVsOaNrlxuICAgICAqIEBwYXJhbSB7RWRpdG9yRGF0YX0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzZXREYXRhKGRhdGE6IEVkaXRvckRhdGEpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhID0gZGF0YTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBFZGl0b3JNYW5hZ2VyID0gRWRpdG9yTWFuYWdlckNsYXNzLmdldEluc3RhbmNlKCk7XG4iXX0=