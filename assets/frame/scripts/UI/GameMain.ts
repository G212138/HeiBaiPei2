import { EditorManager } from '../../../game/scripts/Manager/EditorManager';
import { FrameMsgType } from '../Data/FrameMsgType';
import { NetWork } from '../Http/NetWork';
import { ListenerManager } from '../Manager/ListenerManager';
import { ReportManager } from '../Manager/ReportManager';
import { SoundManager } from '../Manager/SoundManager';
import { SyncData, SyncDataManager } from '../Manager/SyncDataManager';
import { UIManager } from '../Manager/UIManager';
import GameMsg from '../SDK/GameMsg';
import { Action, SendData, T2M } from '../SDK/T2M';
import { UIHelp } from '../Utils/UIHelp';

const { ccclass, property } = cc._decorator;

// 开启抗锯齿
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
@ccclass
export class GameMain extends cc.Component {
    onLoad() {
        let loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;

        this.addSDKEventListener();
        GameMsg.get_is_preload(NetWork.setIsPreload);
        GameMsg.get_is_sync(NetWork.setIsSync);
        GameMsg.get_role(NetWork.setIsTeacher);
        GameMsg.get_is_supportKeepAndRestart(NetWork.setIsSupportKeepPlay);
    }

    addSDKEventListener() {
        GameMsg.recv_show_gamePanel(this.onReceiveGameShow.bind(this));
        GameMsg.recv_hide_gamePanel(this.onReceiveGameHide.bind(this));
        GameMsg.recv_keep_playing(this.onReceiveKeepPlaying.bind(this));
        GameMsg.recv_cancel_keep_playing(this.onReceiveCancellKeepPlaying.bind(this));
        GameMsg.recv_restart(this.onReceiveRestart.bind(this));
        GameMsg.recv_is_master(this.onReceiveIsMaster.bind(this));
        //发送准备就绪，可以接收消息了
        GameMsg.request_event_ready();
    }

    /**
     * 监听接着玩
     */
    onReceiveKeepPlaying() {
        console.log('onReceiveKeepPlaying');
        if (!UIManager.isGameShowing) return;

        //发送接着玩数据
        let syncAction = new Action();
        syncAction.type = FrameMsgType.ON_HEART_BREAK;
        // syncAction.syncData.frameSyncData.actionId = -1;
        let sendData = new SendData(true, [syncAction]);
        GameMsg.request_keep_playing(sendData);
        // UIHelp.showRecoverMask();
    }

    /**
     * 监听取消接着玩
     */
    onReceiveCancellKeepPlaying() {
        console.log('onReceiveCancellKeepPlaying');
        if (!UIManager.isGameShowing) return;

        T2M.setFastHeartBreakState();
    }

    /**
     * 监听重新玩
     */
    onReceiveRestart() {
        console.log('onReceiveRestart');
        if (!UIManager.isGameShowing) return;

        //发送重新玩成功回调
        GameMsg.request_restart_over();
        UIManager.closeAllUI();
        SoundManager.stopAll();
        SyncDataManager.initSyncData();
        ReportManager.initReportData(EditorManager.getLevelCount());

        this.scheduleOnce(() => {
            UIHelp.showGamePanel();
        });
    }

    /**
     * 监听窗口打开
     */
    onReceiveGameShow() {
        console.log('onReceiveGameShow');
        if (UIManager.isGameShowing) return;

        UIManager.isGameShowing = true;
        ListenerManager.dispatch(FrameMsgType.PRELOAD_GAME_SHOW);
    }

    /**
     * 监听窗口关闭
     */
    onReceiveGameHide() {
        console.log('onReceiveGameHide');
        if (!UIManager.isGameShowing) return;

        UIManager.isGameShowing = false;
        UIManager.closeAllUI();
        SoundManager.stopAll();
        SyncDataManager.initSyncData();
        ReportManager.initReportData(EditorManager.getLevelCount());
        T2M.isRecover = false;
        this.scheduleOnce(() => {
            UIHelp.showGamePanel();
        });
    }

    /**
     * 监听是否为主动发送心跳的一端
     */
    onReceiveIsMaster(data: any) {
        NetWork.isMaster = data.data;
        if (!NetWork.isMaster) {
            T2M.isRecover = false;
            UIHelp.showRecoverMask();
            if (0 !== SyncDataManager.syncData.frameSyncData.actionId) {
                SyncDataManager.syncData.frameSyncData.actionId = -999;
            }
        } else {
            UIHelp.closeRecoverMask();
        }

        console.log(`onReceiveIsMaster isMaster: ${NetWork.isMaster}`);
    }
}
