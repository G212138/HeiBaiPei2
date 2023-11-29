
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/ListenerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05dc2tRAiFMobMbxaPK4NIf', 'ListenerManager');
// frame/scripts/Manager/ListenerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = void 0;
var ListenerManagerClass = /** @class */ (function () {
    function ListenerManagerClass() {
        this.handle = {};
    }
    ListenerManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new ListenerManagerClass();
        }
        return this._instance;
    };
    ListenerManagerClass.prototype.on = function (eventName, cb, target) {
        if (this.hasEvent(eventName, cb, target)) {
            return;
        }
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }
        var data = { func: cb, target: target };
        this.handle[eventName].push(data);
    };
    ListenerManagerClass.prototype.off = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                list.splice(i, 1);
                break;
            }
        }
    };
    ListenerManagerClass.prototype.dispatch = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
        }
    };
    ListenerManagerClass.prototype.removeAll = function (target) {
        if (target) {
            for (var key in this.handle) {
                var list = this.handle[key];
                for (var i = 0, l = list.length; i < l; i++) {
                    var event = list[i];
                    if (event.target == target) {
                        list.splice(i, 1);
                        if (l > 0) {
                            l--;
                        }
                        i--;
                    }
                }
            }
        }
        else {
            for (var key in this.handle) {
                var list = this.handle[key];
                while (list.length > 0) {
                    list.pop();
                }
            }
        }
    };
    ListenerManagerClass.prototype.hasEvent = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return false;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                return true;
            }
        }
        return false;
    };
    ListenerManagerClass._instance = null;
    return ListenerManagerClass;
}());
exports.ListenerManager = ListenerManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXExpc3RlbmVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtJQUFBO1FBRVksV0FBTSxHQUFXLEVBQUUsQ0FBQztJQW9GaEMsQ0FBQztJQWxGaUIsZ0NBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxpQ0FBRSxHQUFULFVBQVUsU0FBaUIsRUFBRSxFQUFZLEVBQUUsTUFBVztRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQU0sSUFBSSxHQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxrQ0FBRyxHQUFWLFVBQVcsU0FBaUIsRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUNwRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0IsT0FBTztTQUNWO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxD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QUFNLENBQUMsRUFBRTtnQkFDekQsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQXBGYyw4QkFBUyxHQUF5QixJQUFJLENBQUM7SUFxRjFELDJCQUFDO0NBdEZELEFBc0ZDLElBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRXZlbnREYXRhIHtcbiAgICBmdW5jOiBGdW5jdGlvbjtcbiAgICB0YXJnZXQ6IGFueTtcbn1cblxuaW50ZXJmYWNlIElFdmVudCB7XG4gICAgW2V2ZW50TmFtZTogc3RyaW5nXTogSUV2ZW50RGF0YVtdO1xufVxuXG5jbGFzcyBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBoYW5kbGU6IElFdmVudCA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTGlzdGVuZXJNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0V2ZW50KGV2ZW50TmFtZSwgY2IsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmhhbmRsZVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgaWYgKGNiID09IGV2ZW50LmZ1bmMgJiYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09IGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmhhbmRsZVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgZXZlbnQuZnVuYy5hcHBseShldmVudC50YXJnZXQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUFsbCh0YXJnZXQ/OiBhbnkpIHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmhhbmRsZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2tleV07XG4gICAgICAgICAgICAgICAgd2hpbGUgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFdmVudChldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XG4gICAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XG4gICAgICAgICAgICBpZiAoY2IgPT0gZXZlbnQuZnVuYyAmJiAoIXRhcmdldCB8fCB0YXJnZXQgPT0gZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBMaXN0ZW5lck1hbmFnZXIgPSBMaXN0ZW5lck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19