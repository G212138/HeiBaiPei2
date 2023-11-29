"use strict";
cc._RF.push(module, '98b4e33oG1P47hj2twQ6/jN', 'FrameSyncData');
// frame/scripts/Data/FrameSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameSyncData = void 0;
/**
 * 框架中需要同步的数据
 * 对应 SyncDataManager.syncData.frameSyncData
 * @class FrameSyncData
 */
var FrameSyncData = /** @class */ (function () {
    function FrameSyncData() {
        this.actionId = 0; // 操作指令id
        this.isDispose = true; // 是否处理全量数据
        this.hasReplayCount = 0; // 已重玩的次数
        this.isGameOver = false; // 游戏是否结束
    }
    return FrameSyncData;
}());
exports.FrameSyncData = FrameSyncData;

cc._RF.pop();