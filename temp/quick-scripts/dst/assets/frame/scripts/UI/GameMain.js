
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/GameMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxHYW1lTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRFO0FBQzVFLHFEQUFvRDtBQUNwRCwyQ0FBMEM7QUFDMUMsOERBQTZEO0FBQzdELDBEQUF5RDtBQUN6RCx3REFBdUQ7QUFDdkQsOERBQXVFO0FBQ3ZFLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsa0NBQW1EO0FBQ25ELDBDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxRQUFRO0FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFFdkM7SUFBOEIsNEJBQVk7SUFBMUM7O0lBcUhBLENBQUM7SUFwSEcseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDbEM7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUVwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixpQkFBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLGlCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxpQkFBTyxDQUFDLDRCQUE0QixDQUFDLGlCQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5C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YW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCB7IEFjdGlvbiwgU2VuZERhdGEsIFQyTSB9IGZyb20gJy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vVXRpbHMvVUlIZWxwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8g5byA5ZCv5oqX6ZSv6b2/XG5jYy5tYWNyby5FTkFCTEVfV0VCR0xfQU5USUFMSUFTID0gdHJ1ZTtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR2FtZU1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1mdWxsJyk7XG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hZGRTREtFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIEdhbWVNc2cuZ2V0X2lzX3ByZWxvYWQoTmV0V29yay5zZXRJc1ByZWxvYWQpO1xuICAgICAgICBHYW1lTXNnLmdldF9pc19zeW5jKE5ldFdvcmsuc2V0SXNTeW5jKTtcbiAgICAgICAgR2FtZU1zZy5nZXRfcm9sZShOZXRXb3JrLnNldElzVGVhY2hlcik7XG4gICAgICAgIEdhbWVNc2cuZ2V0X2lzX3N1cHBvcnRLZWVwQW5kUmVzdGFydChOZXRXb3JrLnNldElzU3VwcG9ydEtlZXBQbGF5KTtcbiAgICB9XG5cbiAgICBhZGRTREtFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBHYW1lTXNnLnJlY3Zfc2hvd19nYW1lUGFuZWwodGhpcy5vblJlY2VpdmVHYW1lU2hvdy5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2hpZGVfZ2FtZVBhbmVsKHRoaXMub25SZWNlaXZlR2FtZUhpZGUuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cucmVjdl9rZWVwX3BsYXlpbmcodGhpcy5vblJlY2VpdmVLZWVwUGxheWluZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2NhbmNlbF9rZWVwX3BsYXlpbmcodGhpcy5vblJlY2VpdmVDYW5jZWxsS2VlcFBsYXlpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cucmVjdl9yZXN0YXJ0KHRoaXMub25SZWNlaXZlUmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2lzX21hc3Rlcih0aGlzLm9uUmVjZWl2ZUlzTWFzdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAvL+WPkemAgeWHhuWkh+Wwsee7qu+8jOWPr+S7peaOpeaUtua2iOaBr+S6hlxuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfZXZlbnRfcmVhZHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmjqXnnYDnjqlcbiAgICAgKi9cbiAgICBvblJlY2VpdmVLZWVwUGxheWluZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uUmVjZWl2ZUtlZXBQbGF5aW5nJyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICAvL+WPkemAgeaOpeedgOeOqeaVsOaNrlxuICAgICAgICBsZXQgc3luY0FjdGlvbiA9IG5ldyBBY3Rpb24oKTtcbiAgICAgICAgc3luY0FjdGlvbi50eXBlID0gRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLO1xuICAgICAgICAvLyBzeW5jQWN0aW9uLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSAtMTtcbiAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKHRydWUsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9rZWVwX3BsYXlpbmcoc2VuZERhdGEpO1xuICAgICAgICAvLyBVSUhlbHAuc2hvd1JlY292ZXJNYXNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5Y+W5raI5o6l552A546pXG4gICAgICovXG4gICAgb25SZWNlaXZlQ2FuY2VsbEtlZXBQbGF5aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25SZWNlaXZlQ2FuY2VsbEtlZXBQbGF5aW5nJyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICBUMk0uc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOmHjeaWsOeOqVxuICAgICAqL1xuICAgIG9uUmVjZWl2ZVJlc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlY2VpdmVSZXN0YXJ0Jyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICAvL+WPkemAgemHjeaWsOeOqeaIkOWKn+Wbnuiwg1xuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfcmVzdGFydF9vdmVyKCk7XG4gICAgICAgIFVJTWFuYWdlci5jbG9zZUFsbFVJKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5pbml0UmVwb3J0RGF0YShFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dHYW1lUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs56qX5Y+j5omT5byAXG4gICAgICovXG4gICAgb25SZWNlaXZlR2FtZVNob3coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlY2VpdmVHYW1lU2hvdycpO1xuICAgICAgICBpZiAoVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICBVSU1hbmFnZXIuaXNHYW1lU2hvd2luZyA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuUFJFTE9BRF9HQU1FX1NIT1cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOeql+WPo+WFs+mXrVxuICAgICAqL1xuICAgIG9uUmVjZWl2ZUdhbWVIaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25SZWNlaXZlR2FtZUhpZGUnKTtcbiAgICAgICAgaWYgKCFVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykgcmV0dXJuO1xuXG4gICAgICAgIFVJTWFuYWdlci5pc0dhbWVTaG93aW5nID0gZmFsc2U7XG4gICAgICAgIFVJTWFuYWdlci5jbG9zZUFsbFVJKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5pbml0UmVwb3J0RGF0YShFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSk7XG4gICAgICAgIFQyTS5pc1JlY292ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dHYW1lUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5piv5ZCm5Li65Li75Yqo5Y+R6YCB5b+D6Lez55qE5LiA56uvXG4gICAgICovXG4gICAgb25SZWNlaXZlSXNNYXN0ZXIoZGF0YTogYW55KSB7XG4gICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBkYXRhLmRhdGE7XG4gICAgICAgIGlmICghTmV0V29yay5pc01hc3Rlcikge1xuICAgICAgICAgICAgVDJNLmlzUmVjb3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dSZWNvdmVyTWFzaygpO1xuICAgICAgICAgICAgaWYgKDAgIT09IFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmFjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSAtOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBvblJlY2VpdmVJc01hc3RlciBpc01hc3RlcjogJHtOZXRXb3JrLmlzTWFzdGVyfWApO1xuICAgIH1cbn1cbiJdfQ==