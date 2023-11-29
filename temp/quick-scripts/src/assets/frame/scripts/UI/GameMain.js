"use strict";
cc._RF.push(module, 'df13ad6CdtFhp9uucAXsIC/', 'GameMain');
// frame/scripts/UI/GameMain.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameMain = void 0;
var EditorManager_1 = require("../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var ListenerManager_1 = require("../Manager/ListenerManager");
var ReportManager_1 = require("../Manager/ReportManager");
var SoundManager_1 = require("../Manager/SoundManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIManager_1 = require("../Manager/UIManager");
var GameMsg_1 = require("../SDK/GameMsg");
var T2M_1 = require("../SDK/T2M");
var UIHelp_1 = require("../Utils/UIHelp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 开启抗锯齿
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
var GameMain = /** @class */ (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMain.prototype.onLoad = function () {
        var loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;
        this.addSDKEventListener();
        GameMsg_1.default.get_is_preload(NetWork_1.NetWork.setIsPreload);
        GameMsg_1.default.get_is_sync(NetWork_1.NetWork.setIsSync);
        GameMsg_1.default.get_role(NetWork_1.NetWork.setIsTeacher);
        GameMsg_1.default.get_is_supportKeepAndRestart(NetWork_1.NetWork.setIsSupportKeepPlay);
    };
    GameMain.prototype.addSDKEventListener = function () {
        GameMsg_1.default.recv_show_gamePanel(this.onReceiveGameShow.bind(this));
        GameMsg_1.default.recv_hide_gamePanel(this.onReceiveGameHide.bind(this));
        GameMsg_1.default.recv_keep_playing(this.onReceiveKeepPlaying.bind(this));
        GameMsg_1.default.recv_cancel_keep_playing(this.onReceiveCancellKeepPlaying.bind(this));
        GameMsg_1.default.recv_restart(this.onReceiveRestart.bind(this));
        GameMsg_1.default.recv_is_master(this.onReceiveIsMaster.bind(this));
        //发送准备就绪，可以接收消息了
        GameMsg_1.default.request_event_ready();
    };
    /**
     * 监听接着玩
     */
    GameMain.prototype.onReceiveKeepPlaying = function () {
        console.log('onReceiveKeepPlaying');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        //发送接着玩数据
        var syncAction = new T2M_1.Action();
        syncAction.type = FrameMsgType_1.FrameMsgType.ON_HEART_BREAK;
        // syncAction.syncData.frameSyncData.actionId = -1;
        var sendData = new T2M_1.SendData(true, [syncAction]);
        GameMsg_1.default.request_keep_playing(sendData);
        // UIHelp.showRecoverMask();
    };
    /**
     * 监听取消接着玩
     */
    GameMain.prototype.onReceiveCancellKeepPlaying = function () {
        console.log('onReceiveCancellKeepPlaying');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        T2M_1.T2M.setFastHeartBreakState();
    };
    /**
     * 监听重新玩
     */
    GameMain.prototype.onReceiveRestart = function () {
        console.log('onReceiveRestart');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        //发送重新玩成功回调
        GameMsg_1.default.request_restart_over();
        UIManager_1.UIManager.closeAllUI();
        SoundManager_1.SoundManager.stopAll();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.showGamePanel();
        });
    };
    /**
     * 监听窗口打开
     */
    GameMain.prototype.onReceiveGameShow = function () {
        console.log('onReceiveGameShow');
        if (UIManager_1.UIManager.isGameShowing)
            return;
        UIManager_1.UIManager.isGameShowing = true;
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW);
    };
    /**
     * 监听窗口关闭
     */
    GameMain.prototype.onReceiveGameHide = function () {
        console.log('onReceiveGameHide');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        UIManager_1.UIManager.isGameShowing = false;
        UIManager_1.UIManager.closeAllUI();
        SoundManager_1.SoundManager.stopAll();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        T2M_1.T2M.isRecover = false;
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.showGamePanel();
        });
    };
    /**
     * 监听是否为主动发送心跳的一端
     */
    GameMain.prototype.onReceiveIsMaster = function (data) {
        NetWork_1.NetWork.isMaster = data.data;
        if (!NetWork_1.NetWork.isMaster) {
            T2M_1.T2M.isRecover = false;
            UIHelp_1.UIHelp.showRecoverMask();
            if (0 !== SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId) {
                SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId = -999;
            }
        }
        else {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        console.log("onReceiveIsMaster isMaster: " + NetWork_1.NetWork.isMaster);
    };
    GameMain = __decorate([
        ccclass
    ], GameMain);
    return GameMain;
}(cc.Component));
exports.GameMain = GameMain;

cc._RF.pop();