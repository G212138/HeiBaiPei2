import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { SyncData, SyncDataManager } from '../../../../frame/scripts/Manager/SyncDataManager';
import BaseGamePanel from '../../../../frame/scripts/UI/Panel/BaseGamePanel';
import { EventType } from '../../Data/EventType';

const { ccclass, property } = cc._decorator;

@ccclass
export default class GamePanel extends BaseGamePanel {
    public static className = 'GamePanel';

    start() {
        super.start();
        ListenerManager.on(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.on(EventType.SUBMIT, this.submit, this);
    }

    onDestroy() {
        super.onDestroy();
        ListenerManager.off(EventType.GAME_OVER, this.gameOver, this);
        ListenerManager.off(EventType.SUBMIT, this.submit, this);
    }

    private submit(isRight) {
        if (isRight) {
            this.answerRight(true);
        } else {
            this.answerWrong();
        }
    }

    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    protected setPanel() {
        super.setPanel();
        // TODO 业务逻辑
        ListenerManager.dispatch(EventType.ENTER_GAME);
    }

    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    protected onRecoveryData(recovery: SyncData): void {
        super.onRecoveryData(recovery);
        ListenerManager.dispatch(EventType.GAME_RECONNECT);
    }

    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerRight(isCurLevelFinish: boolean) {
        super.answerRight(isCurLevelFinish);
    }

    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    protected answerWrong(isCurLevelFinish: boolean = false) {
        super.answerWrong(isCurLevelFinish);
    }

    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    protected gameOver() {
        super.gameOver();
    }

    /**
     * 重玩
     */
    protected onReplay() {
        super.onReplay();
        SyncDataManager.getSyncData().customSyncData.shiguan_1 = 1;
        SyncDataManager.getSyncData().customSyncData.shiguan_2 = 1;
        SyncDataManager.getSyncData().customSyncData.shiguan_3 = 6;
        SyncDataManager.getSyncData().customSyncData.trueArr = [];
        SyncDataManager.getSyncData().customSyncData.shotEnable = true;
        ListenerManager.dispatch(EventType.GAME_REPLAY);
    }

    update(dt) {
        super.update(dt);
    }
}
