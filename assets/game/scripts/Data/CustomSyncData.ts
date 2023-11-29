/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
export class CustomSyncData {
    public curLevel: number = 0; // 当前关卡(第一关为0)
    // TODO 自定义

    public shiguan_1: number = 1;
    public shiguan_2: number = 1;
    public shiguan_3: number = 6;
    public trueArr: number[][] = [];
    public shotEnable: boolean = true;
}
