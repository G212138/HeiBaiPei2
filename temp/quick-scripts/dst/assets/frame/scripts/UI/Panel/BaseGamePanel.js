
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1694s8BidGvaCpzhIeiAbf', 'BaseGamePanel');
// frame/scripts/UI/Panel/BaseGamePanel.ts

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
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var NetWork_1 = require("../../Http/NetWork");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var SyncDataManager_1 = require("../../Manager/SyncDataManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseGamePanel = /** @class */ (function (_super) {
    __extends(BaseGamePanel, _super);
    function BaseGamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPanelReady = false;
        _this.isRresult = true;
        return _this;
    }
    // onLoad () {}
    BaseGamePanel.prototype.start = function () {
        if (this.data && this.data.node && this.data.node.parent) {
            this.data.node.removeFromParent();
        }
        // 发送GameStart
        GameMsg_1.default.gameStart(this.isRresult);
        this.addSDKEventListener();
        if (NetWork_1.NetWork.isSync && !NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.showRecoverMask();
        }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, false);
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            this.panelReady();
            UIHelp_1.UIHelp.showUploadAndReturnPanel();
        }
        else {
            this.getNet();
        }
    };
    BaseGamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        UIHelp_1.UIHelp.closeMask();
    };
    BaseGamePanel.prototype.panelReady = function () {
        this._isPanelReady = true;
        if (UIManager_1.UIManager.isGameShowing) {
            this.setPanel();
        }
        else {
            cc.game.pause();
        }
    };
    BaseGamePanel.prototype.setPanel = function () {
        T2M_1.T2M.init();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        if (!NetWork_1.NetWork.isSync || NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            cc.resources.load('prefab/ui/panel/OverTips');
        }
        else {
            cc.resources.load('prefab/ui/panel/StarCount');
        }
    };
    BaseGamePanel.prototype.onRecoveryData = function (recovery) {
        SyncDataManager_1.SyncDataManager.setSyncData(recovery);
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver) {
            this.showGameOverPanel();
        }
        else {
            UIHelp_1.UIHelp.closeOverTips();
            UIHelp_1.UIHelp.closeStarCount();
        }
    };
    BaseGamePanel.prototype.answerRight = function (isCurLevelFinish) {
        ReportManager_1.ReportManager.reportLevelResult(true, isCurLevelFinish);
    };
    BaseGamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        ReportManager_1.ReportManager.reportLevelResult(false, isCurLevelFinish);
    };
    BaseGamePanel.prototype.gameOver = function () {
        SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver = true;
        this.showGameOverPanel();
    };
    BaseGamePanel.prototype.showGameOverPanel = function () {
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.stopAll();
        var isShowReplay = EditorManager_1.EditorManager.editorData.isReplay &&
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount < EditorManager_1.EditorManager.editorData.replayCount;
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            UIHelp_1.UIHelp.showStarCount(isShowReplay);
        }
        else {
            var str = 1 === EditorManager_1.EditorManager.getLevelCount() ? '挑战成功' : '闯关成功';
            UIHelp_1.UIHelp.showOverTips(2, '', null, str, isShowReplay);
        }
    };
    BaseGamePanel.prototype.onGameShow = function () {
        if (this._isPanelReady) {
            cc.game.resume();
            this.setPanel();
        }
    };
    BaseGamePanel.prototype.onReplay = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
        SyncDataManager_1.SyncDataManager.replay();
        ReportManager_1.ReportManager.replayGame();
    };
    BaseGamePanel.prototype.addSDKEventListener = function () {
        // 小组课
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOP, this.onSDKMsgStopReceived.bind(this));
        // 小班课
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, this.onRecoveryData, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.REPLAY_START, this.onReplay.bind(this));
        // 预加载：监听窗口打开
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW, this.onGameShow.bind(this), this);
    };
    BaseGamePanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_QUESTION + '?courseware_id=' + NetWork_1.NetWork.coursewareId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                var response_data = response;
                if (Array.isArray(response_data.data)) {
                    return;
                }
                var content = JSON.parse(response_data.data.courseware_content);
                if (content != null) {
                    if (content.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.panelReady();
                    }
                    else {
                        // coursewareKey错误
                        GameMsg_1.default.differntKey('CoursewareKey错误！');
                        UIHelp_1.UIHelp.showErrorPanel('CoursewareKey错误,请联系客服！', '', '', '确定');
                        return;
                    }
                }
            }
            else {
            }
        }, null);
    };
    // 游戏结束消息监听
    BaseGamePanel.prototype.onSDKMsgStopReceived = function () {
        //各游戏独立处理  先上报当前作答数据  后发送finish消息
        GameMsg_1.default.gameStop();
        //新课堂上报
        ReportManager_1.ReportManager.reportGameOver();
        GameMsg_1.default.finished();
    };
    BaseGamePanel.prototype.update = function (dt) {
        T2M_1.T2M.update();
    };
    BaseGamePanel.className = 'BaseGamePanel';
    __decorate([
        property
    ], BaseGamePanel.prototype, "isRresult", void 0);
    BaseGamePanel = __decorate([
        ccclass
    ], BaseGamePanel);
    return BaseGamePanel;
}(BaseUI_1.BaseUI));
exports.default = BaseGamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZUdhbWVQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLHdEQUF1RDtBQUN2RCw4Q0FBNkM7QUFDN0MsaUVBQWdFO0FBQ2hFLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQsaUVBQTBFO0FBQzFFLHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMscUNBQW9DO0FBQ3BDLDZDQUE0QztBQUM1QyxvQ0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFxS0M7UUFuS1csbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHaEMsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFnS3JDLENBQUM7SUE5SkcsZUFBZTtJQUVmLDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDckM7UUFFRCxjQUFjO1FBQ2QsaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksaUJBQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQyxlQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7UUFDRCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFF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RyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuS2EsdUJBQVMsR0FBRyxlQUFlLENBQUM7SUFJMUM7UUFEQyxRQUFRO29EQUN3QjtJQUxoQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUtqQztJQUFELG9CQUFDO0NBcktELEFBcUtDLENBckswQyxlQUFNLEdBcUtoRDtrQkFyS29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uLy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCB7IEJhc2VVSSB9IGZyb20gJy4uL0Jhc2VVSSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlR2FtZVBhbmVsIGV4dGVuZHMgQmFzZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdCYXNlR2FtZVBhbmVsJztcbiAgICBwcml2YXRlIF9pc1BhbmVsUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyBpc1JyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubm9kZSAmJiB0aGlzLmRhdGEubm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWPkemAgUdhbWVTdGFydFxuICAgICAgICBHYW1lTXNnLmdhbWVTdGFydCh0aGlzLmlzUnJlc3VsdCk7XG4gICAgICAgIHRoaXMuYWRkU0RLRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBpZiAoTmV0V29yay5pc1N5bmMgJiYgIU5ldFdvcmsuaXNNYXN0ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93UmVjb3Zlck1hc2soKTtcbiAgICAgICAgfVxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLlRFQUNIRVJfUEFORUxfTE9BRElORywgZmFsc2UpO1xuXG4gICAgICAgIGlmIChDb25zdFZhbHVlLklTX1RFQUNIRVIpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxSZWFkeSgpO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhbmVsUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuX2lzUGFuZWxSZWFkeSA9IHRydWU7XG4gICAgICAgIGlmIChVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykge1xuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZ2FtZS5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFBhbmVsKCkge1xuICAgICAgICBUMk0uaW5pdCgpO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuaW5pdFN5bmNEYXRhKCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIuaW5pdFJlcG9ydERhdGEoRWRpdG9yTWFuYWdlci5nZXRMZXZlbENvdW50KCkpO1xuICAgICAgICBpZiAoIU5ldFdvcmsuaXNTeW5jIHx8IE5ldFdvcmsuaXNNYXN0ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZVJlY292ZXJNYXNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50KSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgncHJlZmFiL3VpL3BhbmVsL092ZXJUaXBzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgncHJlZmFiL3VpL3BhbmVsL1N0YXJDb3VudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5OiBTeW5jRGF0YSkge1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc2V0U3luY0RhdGEocmVjb3ZlcnkpO1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5zaG93R2FtZU92ZXJQYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5yZXBvcnRMZXZlbFJlc3VsdCh0cnVlLCBpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYW5zd2VyV3JvbmcoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0TGV2ZWxSZXN1bHQoZmFsc2UsIGlzQ3VyTGV2ZWxGaW5pc2gpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0dhbWVPdmVyUGFuZWwoKSB7XG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcEFsbCgpO1xuICAgICAgICBsZXQgaXNTaG93UmVwbGF5OiBib29sZWFuID1cbiAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSAmJlxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnQgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEucmVwbGF5Q291bnQ7XG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3RhckNvdW50KGlzU2hvd1JlcGxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RyID0gMSA9PT0gRWRpdG9yTWFuYWdlci5nZXRMZXZlbENvdW50KCkgPyAn5oyR5oiY5oiQ5YqfJyA6ICfpl6/lhbPmiJDlip8nO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dPdmVyVGlwcygyLCAnJywgbnVsbCwgc3RyLCBpc1Nob3dSZXBsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVTaG93KCkge1xuICAgICAgICBpZiAodGhpcy5faXNQYW5lbFJlYWR5KSB7XG4gICAgICAgICAgICBjYy5nYW1lLnJlc3VtZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUmVwbGF5KCkge1xuICAgICAgICBVSUhlbHAuY2xvc2VPdmVyVGlwcygpO1xuICAgICAgICBVSUhlbHAuY2xvc2VTdGFyQ291bnQoKTtcblxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIucmVwbGF5KCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwbGF5R2FtZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU0RLRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8g5bCP57uE6K++XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1AsIHRoaXMub25TREtNc2dTdG9wUmVjZWl2ZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIOWwj+ePreivvlxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX1JFQ09WRVJZX0RBVEEsIHRoaXMub25SZWNvdmVyeURhdGEsIHRoaXMpO1xuXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihGcmFtZU1zZ1R5cGUuUkVQTEFZX1NUQVJULCB0aGlzLm9uUmVwbGF5LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIOmihOWKoOi9ve+8muebkeWQrOeql+WPo+aJk+W8gFxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLlBSRUxPQURfR0FNRV9TSE9XLCB0aGlzLm9uR2FtZVNob3cuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXROZXQoKSB7XG4gICAgICAgIE5ldFdvcmsuaHR0cFJlcXVlc3QoXG4gICAgICAgICAgICBOZXRXb3JrLkdFVF9RVUVTVElPTiArICc/Y291cnNld2FyZV9pZD0nICsgTmV0V29yay5jb3Vyc2V3YXJlSWQsXG4gICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VfZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZV9kYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3BvbnNlX2RhdGEuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5Db3Vyc2V3YXJlS2V5ID09IENvbnN0VmFsdWUuQ291cnNld2FyZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuc2V0RGF0YShjb250ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxSZWFkeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3Vyc2V3YXJlS2V56ZSZ6K+vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZU1zZy5kaWZmZXJudEtleSgnQ291cnNld2FyZUtleemUmeivr++8gScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbCgnQ291cnNld2FyZUtleemUmeivryzor7fogZTns7vlrqLmnI3vvIEnLCAnJywgJycsICfnoa7lrponKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIOa4uOaIj+e7k+adn+a2iOaBr+ebkeWQrFxuICAgIHByaXZhdGUgb25TREtNc2dTdG9wUmVjZWl2ZWQoKSB7XG4gICAgICAgIC8v5ZCE5ri45oiP54us56uL5aSE55CGICDlhYjkuIrmiqXlvZPliY3kvZznrZTmlbDmja4gIOWQjuWPkemAgWZpbmlzaOa2iOaBr1xuICAgICAgICBHYW1lTXNnLmdhbWVTdG9wKCk7XG4gICAgICAgIC8v5paw6K++5aCC5LiK5oqlXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgR2FtZU1zZy5maW5pc2hlZCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBUMk0udXBkYXRlKCk7XG4gICAgfVxufVxuIl19