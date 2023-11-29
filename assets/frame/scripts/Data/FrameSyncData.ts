/**
 * 框架中需要同步的数据
 * 对应 SyncDataManager.syncData.frameSyncData
 * @class FrameSyncData
 */
export class FrameSyncData {
    public actionId: number = 0; // 操作指令id
    public isDispose: boolean = true; // 是否处理全量数据
    public hasReplayCount: number = 0; // 已重玩的次数
    public isGameOver: boolean = false; // 游戏是否结束
}
