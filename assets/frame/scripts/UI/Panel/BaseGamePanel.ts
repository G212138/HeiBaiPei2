import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';
import { FrameMsgType } from '../../Data/FrameMsgType';
import { NetWork } from '../../Http/NetWork';
import { ListenerManager } from '../../Manager/ListenerManager';
import { ReportManager } from '../../Manager/ReportManager';
import { SoundManager } from '../../Manager/SoundManager';
import { SyncData, SyncDataManager } from '../../Manager/SyncDataManager';
import { UIManager } from '../../Manager/UIManager';
import GameMsg from '../../SDK/GameMsg';
import { T2M } from '../../SDK/T2M';
import { UIHelp } from '../../Utils/UIHelp';
import { BaseUI } from '../BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseGamePanel extends BaseUI {
    public static className = 'BaseGamePanel';
    private _isPanelReady: boolean = false;

    @property
    public isRresult: boolean = true;

    // onLoad () {}

    start() {
        if (this.data && this.data.node && this.data.node.parent) {
            this.data.node.removeFromParent();
        }

        // 发送GameStart
        GameMsg.gameStart(this.isRresult);
        this.addSDKEventListener();
        if (NetWork.isSync && !NetWork.isMaster) {
            UIHelp.showRecoverMask();
        }
        ListenerManager.dispatch(FrameMsgType.TEACHER_PANEL_LOADING, false);

        if (ConstValue.IS_TEACHER) {
            this.panelReady();
            UIHelp.showUploadAndReturnPanel();
        } else {
            this.getNet();
        }
    }

    onDestroy() {
        super.onDestroy();
        UIHelp.closeMask();
    }

    private panelReady() {
        this._isPanelReady = true;
        if (UIManager.isGameShowing) {
            this.setPanel();
        } else {
            cc.game.pause();
        }
    }

    protected setPanel() {
        T2M.init();
        SyncDataManager.initSyncData();
        ReportManager.initReportData(EditorManager.getLevelCount());
        if (!NetWork.isSync || NetWork.isMaster) {
            UIHelp.closeRecoverMask();
        }

        if (EditorManager.editorData.isStarCount) {
            cc.resources.load('prefab/ui/panel/OverTips');
        } else {
            cc.resources.load('prefab/ui/panel/StarCount');
        }
    }

    protected onRecoveryData(recovery: SyncData) {
        SyncDataManager.setSyncData(recovery);
        if (SyncDataManager.syncData.frameSyncData.isGameOver) {
            this.showGameOverPanel();
        } else {
            UIHelp.closeOverTips();
            UIHelp.closeStarCount();
        }
    }

    protected answerRight(isCurLevelFinish: boolean) {
        ReportManager.reportLevelResult(true, isCurLevelFinish);
    }

    protected answerWrong(isCurLevelFinish: boolean = false) {
        ReportManager.reportLevelResult(false, isCurLevelFinish);
    }

    protected gameOver() {
        SyncDataManager.syncData.frameSyncData.isGameOver = true;
        this.showGameOverPanel();
    }

    protected showGameOverPanel() {
        UIHelp.showMask();
        SoundManager.stopAll();
        let isShowReplay: boolean =
            EditorManager.editorData.isReplay &&
            SyncDataManager.syncData.frameSyncData.hasReplayCount < EditorManager.editorData.replayCount;
        if (EditorManager.editorData.isStarCount) {
            UIHelp.showStarCount(isShowReplay);
        } else {
            let str = 1 === EditorManager.getLevelCount() ? '挑战成功' : '闯关成功';
            UIHelp.showOverTips(2, '', null, str, isShowReplay);
        }
    }

    private onGameShow() {
        if (this._isPanelReady) {
            cc.game.resume();
            this.setPanel();
        }
    }

    protected onReplay() {
        UIHelp.closeOverTips();
        UIHelp.closeStarCount();

        SyncDataManager.replay();
        ReportManager.replayGame();
    }

    private addSDKEventListener() {
        // 小组课
        GameMsg.addEvent(FrameMsgType.STOP, this.onSDKMsgStopReceived.bind(this));
        // 小班课
        ListenerManager.on(FrameMsgType.ON_RECOVERY_DATA, this.onRecoveryData, this);

        T2M.addSyncEventListener(FrameMsgType.REPLAY_START, this.onReplay.bind(this));

        // 预加载：监听窗口打开
        ListenerManager.on(FrameMsgType.PRELOAD_GAME_SHOW, this.onGameShow.bind(this), this);
    }

    private getNet() {
        NetWork.httpRequest(
            NetWork.GET_QUESTION + '?courseware_id=' + NetWork.coursewareId,
            'GET',
            'application/json;charset=utf-8',
            (err, response) => {
                if (!err) {
                    let response_data = response;
                    if (Array.isArray(response_data.data)) {
                        return;
                    }
                    let content = JSON.parse(response_data.data.courseware_content);
                    if (content != null) {
                        if (content.CoursewareKey == ConstValue.CoursewareKey) {
                            EditorManager.setData(content.data);
                            this.panelReady();
                        } else {
                            // coursewareKey错误
                            GameMsg.differntKey('CoursewareKey错误！');
                            UIHelp.showErrorPanel('CoursewareKey错误,请联系客服！', '', '', '确定');
                            return;
                        }
                    }
                } else {
                }
            },
            null,
        );
    }

    // 游戏结束消息监听
    private onSDKMsgStopReceived() {
        //各游戏独立处理  先上报当前作答数据  后发送finish消息
        GameMsg.gameStop();
        //新课堂上报
        ReportManager.reportGameOver();
        GameMsg.finished();
    }

    update(dt) {
        T2M.update();
    }
}
