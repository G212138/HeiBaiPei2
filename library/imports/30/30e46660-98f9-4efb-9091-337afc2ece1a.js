"use strict";
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