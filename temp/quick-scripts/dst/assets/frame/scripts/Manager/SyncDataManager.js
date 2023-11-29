
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30e46ZgmPlO+5CRM3r8Ls4a', 'SyncDataManager');
// frame/scripts/Manager/SyncDataManager.ts

"use strict";
/**
 * 同步数据
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncDataManager = exports.SyncData = void 0;
var FrameSyncData_1 = require("../../../frame/scripts/Data/FrameSyncData");
var ReportManager_1 = require("../../../frame/scripts/Manager/ReportManager");
var CustomSyncData_1 = require("../../../game/scripts/Data/CustomSyncData");
/**
 * 需要同步的数据
 * 自定义数据不要在这里实现，请在 CustomSyncData 中实现
 */
var SyncData = /** @class */ (function () {
    function SyncData() {
        this.reportData = null; // 上报数据
        this.customSyncData = new CustomSyncData_1.CustomSyncData(); // 自定义同步数据
        this.frameSyncData = new FrameSyncData_1.FrameSyncData(); // 框架中的同步数据
    }
    return SyncData;
}());
exports.SyncData = SyncData;
var SyncDataManagerClass = /** @class */ (function () {
    function SyncDataManagerClass() {
        /** 同步数据 */
        this._syncData = new SyncData();
    }
    SyncDataManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new SyncDataManagerClass();
        }
        return this._instance;
    };
    Object.defineProperty(SyncDataManagerClass.prototype, "syncData", {
        get: function () {
            return this.getSyncData();
        },
        set: function (data) {
            this.setSyncData(data);
        },
        enumerable: false,
        configurable: true
    });
    SyncDataManagerClass.prototype.initSyncData = function () {
        this._syncData = new SyncData();
    };
    SyncDataManagerClass.prototype.getSyncData = function () {
        this._syncData.reportData = ReportManager_1.ReportManager.getSyncData();
        return this._syncData;
    };
    SyncDataManagerClass.prototype.setSyncData = function (data) {
        this._syncData = data;
        ReportManager_1.ReportManager.setSyncData(data.reportData);
    };
    /**
     * 重玩
     */
    SyncDataManagerClass.prototype.replay = function () {
        var actionId = this._syncData.frameSyncData.actionId;
        var replayCount = this._syncData.frameSyncData.hasReplayCount + 1;
        this._syncData = new SyncData();
        this._syncData.frameSyncData.actionId = actionId;
        this._syncData.frameSyncData.hasReplayCount = replayCount;
    };
    SyncDataManagerClass._instance = null;
    return SyncDataManagerClass;
}());
exports.SyncDataManager = SyncDataManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFN5bmNEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7OztBQUVILDJFQUEwRTtBQUMxRSw4RUFBNkU7QUFDN0UsNEVBQTJFO0FBRTNFOzs7R0FHRztBQUNIO0lBQUE7UUFDVyxlQUFVLEdBQVEsSUFBSSxDQUFDLENBQUMsT0FBTztRQUMvQixtQkFBYyxHQUFtQixJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDLFVBQVU7UUFDakUsa0JBQWEsR0FBa0IsSUFBSSw2QkFBYSxFQUFFLENBQUMsQ0FBQyxXQUFXO0lBQzFFLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw0QkFBUTtBQUtyQjtJQUFBO1FBVUksV0FBVztRQUNILGNBQVMsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBZ0NqRCxDQUFDO0lBeENpQixnQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUlELHNCQUFXLDBDQUFRO2FBR25CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQzthQUxELFVBQW9CLElBQWM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUtNLDJDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixJQUFjO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBTSxHQUFiO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztJQUM5RCxDQUFDO0lBekNjLDhCQUFTLEdBQXlCLElBQUksQ0FBQztJQTBDMUQsMkJBQUM7Q0EzQ0QsQUEyQ0MsSUFBQTtBQUVZLFFBQUEsZUFBZSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlkIzmraXmlbDmja5cbiAqL1xuXG5pbXBvcnQgeyBGcmFtZVN5bmNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9EYXRhL0ZyYW1lU3luY0RhdGEnO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IEN1c3RvbVN5bmNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ3VzdG9tU3luY0RhdGEnO1xuXG4vKipcbiAqIOmcgOimgeWQjOatpeeahOaVsOaNrlxuICog6Ieq5a6a5LmJ5pWw5o2u5LiN6KaB5Zyo6L+Z6YeM5a6e546w77yM6K+35ZyoIEN1c3RvbVN5bmNEYXRhIOS4reWunueOsFxuICovXG5leHBvcnQgY2xhc3MgU3luY0RhdGEge1xuICAgIHB1YmxpYyByZXBvcnREYXRhOiBhbnkgPSBudWxsOyAvLyDkuIrmiqXmlbDmja5cbiAgICBwdWJsaWMgY3VzdG9tU3luY0RhdGE6IEN1c3RvbVN5bmNEYXRhID0gbmV3IEN1c3RvbVN5bmNEYXRhKCk7IC8vIOiHquWumuS5ieWQjOatpeaVsOaNrlxuICAgIHB1YmxpYyBmcmFtZVN5bmNEYXRhOiBGcmFtZVN5bmNEYXRhID0gbmV3IEZyYW1lU3luY0RhdGEoKTsgLy8g5qGG5p625Lit55qE5ZCM5q2l5pWw5o2uXG59XG5jbGFzcyBTeW5jRGF0YU1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTeW5jRGF0YU1hbmFnZXJDbGFzcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFN5bmNEYXRhTWFuYWdlckNsYXNzIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTeW5jRGF0YU1hbmFnZXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiog5ZCM5q2l5pWw5o2uICovXG4gICAgcHJpdmF0ZSBfc3luY0RhdGE6IFN5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgcHVibGljIHNldCBzeW5jRGF0YShkYXRhOiBTeW5jRGF0YSkge1xuICAgICAgICB0aGlzLnNldFN5bmNEYXRhKGRhdGEpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN5bmNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTeW5jRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0U3luY0RhdGEoKSB7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN5bmNEYXRhKCk6IFN5bmNEYXRhIHtcbiAgICAgICAgdGhpcy5fc3luY0RhdGEucmVwb3J0RGF0YSA9IFJlcG9ydE1hbmFnZXIuZ2V0U3luY0RhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5bmNEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTeW5jRGF0YShkYXRhOiBTeW5jRGF0YSkge1xuICAgICAgICB0aGlzLl9zeW5jRGF0YSA9IGRhdGE7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIuc2V0U3luY0RhdGEoZGF0YS5yZXBvcnREYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43njqlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGF5KCkge1xuICAgICAgICBjb25zdCBhY3Rpb25JZCA9IHRoaXMuX3N5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQ7XG4gICAgICAgIGNvbnN0IHJlcGxheUNvdW50ID0gdGhpcy5fc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5oYXNSZXBsYXlDb3VudCArIDE7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSBhY3Rpb25JZDtcbiAgICAgICAgdGhpcy5fc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5oYXNSZXBsYXlDb3VudCA9IHJlcGxheUNvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFN5bmNEYXRhTWFuYWdlciA9IFN5bmNEYXRhTWFuYWdlckNsYXNzLmdldEluc3RhbmNlKCk7XG4iXX0=