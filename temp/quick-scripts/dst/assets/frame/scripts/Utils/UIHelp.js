
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c44e6cLg85JzaIFNvBdsH7x', 'UIHelp');
// frame/scripts/Utils/UIHelp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIHelp = void 0;
var GamePanel_1 = require("../../../game/scripts/UI/panel/GamePanel");
var TeacherPanel_1 = require("../../../game/scripts/UI/panel/TeacherPanel");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var ListenerManager_1 = require("../Manager/ListenerManager");
var UIManager_1 = require("../Manager/UIManager");
var AffirmTips_1 = require("../UI/Panel/AffirmTips");
var ErrorPanel_1 = require("../UI/Panel/ErrorPanel");
var OverTips_1 = require("../UI/Panel/OverTips");
var StarCount_1 = require("../UI/Panel/StarCount");
var SubmissionPanel_1 = require("../UI/Panel/SubmissionPanel");
var TipUI_1 = require("../UI/Panel/TipUI");
var UploadAndReturnPanel_1 = require("../UI/Panel/UploadAndReturnPanel");
var UIHelpClass = /** @class */ (function () {
    function UIHelpClass() {
    }
    UIHelpClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new UIHelpClass();
        }
        return this._instance;
    };
    /**
     *
     * @param message tips文字内容
     */
    UIHelpClass.prototype.showTip = function (message) {
        var _this = this;
        var tipUI = UIManager_1.UIManager.getUI(TipUI_1.TipUI);
        if (!tipUI) {
            UIManager_1.UIManager.openUI(TipUI_1.TipUI, null, UIManager_1.EPANEL_ZORDER.TIPS, function () {
                _this.showTip(message);
            });
        }
        else {
            tipUI.showTip(message);
        }
    };
    /**
     * 结束tip
     * @param type tips类型   0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     * @param {string} str           提示内容
     * @param {Function} callback    回调函数
     * @param {string} endTitle      end动效提示文字
     * @param {boolean} isShowReplay     是否显示重玩按钮
     * @param {boolean} isShowClose     是否显示关闭按钮
     * @param {boolean} autoOff     是否自动关闭
     */
    UIHelpClass.prototype.showOverTips = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (callback === void 0) { callback = null; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        var overTips = UIManager_1.UIManager.getUI(OverTips_1.OverTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(OverTips_1.OverTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showOverTips(type, str, callback, endTitle, isShowReplay, autoOff);
            });
        }
        else {
            overTips.init(type, str, callback, endTitle, isShowReplay, isShowClose, autoOff);
        }
    };
    UIHelpClass.prototype.closeOverTips = function () {
        UIManager_1.UIManager.closeUI(OverTips_1.OverTips);
    };
    /**
     * 星级评测页面(学生自己可GameData StudentData数据自动刷新，同步则需要传参)
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    UIHelpClass.prototype.showStarCount = function (isShowReplay, starNum) {
        var _this = this;
        var starCount = UIManager_1.UIManager.getUI(StarCount_1.default);
        if (!starCount) {
            UIManager_1.UIManager.openUI(StarCount_1.default, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showStarCount(isShowReplay, starNum);
            });
        }
        else {
            starCount.showStars(isShowReplay, starNum);
        }
    };
    UIHelpClass.prototype.closeStarCount = function () {
        UIManager_1.UIManager.closeUI(StarCount_1.default);
    };
    /**
     * 二次确认框
     * @param type tips类型  0:内容tips   1:系统tips
     * @param des tips文字内容
     * @param callback 按钮回调
     * @param btnCloselDes 关闭按钮文字描述
     * @param btnOkDes OK按钮文字描述
     */
    UIHelpClass.prototype.showAffirmTip = function (type, des, callback, btnCloselDes, btnOkDes) {
        var _this = this;
        var overTips = UIManager_1.UIManager.getUI(AffirmTips_1.AffirmTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(AffirmTips_1.AffirmTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showAffirmTip(type, des, callback, btnCloselDes, btnOkDes);
            });
        }
        else {
            overTips.init(type, des, callback, btnCloselDes, btnOkDes);
        }
    };
    UIHelpClass.prototype.closeAffirmTip = function () {
        UIManager_1.UIManager.closeUI(AffirmTips_1.AffirmTips);
    };
    /**
     * 错误弹窗
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    UIHelpClass.prototype.showErrorPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        var _this = this;
        if (isClose === void 0) { isClose = false; }
        var errorPanel = UIManager_1.UIManager.getUI(ErrorPanel_1.default);
        if (!errorPanel) {
            UIManager_1.UIManager.openUI(ErrorPanel_1.default, null, UIManager_1.EPANEL_ZORDER.ERROR, function () {
                _this.showErrorPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
            });
        }
        else {
            errorPanel.setPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
        }
    };
    UIHelpClass.prototype.closeErrorPanel = function () {
        UIManager_1.UIManager.closeUI(ErrorPanel_1.default);
    };
    /**
     * 提交、返回
     */
    UIHelpClass.prototype.showUploadAndReturnPanel = function () {
        UIManager_1.UIManager.showUI(UploadAndReturnPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeUploadAndReturnPanel = function () {
        UIManager_1.UIManager.closeUI(UploadAndReturnPanel_1.default);
    };
    UIHelpClass.prototype.showSubmissionPanel = function () {
        UIManager_1.UIManager.showUI(SubmissionPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeSubmissionPanel = function () {
        UIManager_1.UIManager.closeUI(SubmissionPanel_1.default);
    };
    UIHelpClass.prototype.showGamePanel = function (callback) {
        UIManager_1.UIManager.openUI(GamePanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeGamePanel = function () {
        UIManager_1.UIManager.closeUI(GamePanel_1.default);
    };
    UIHelpClass.prototype.showTeacherPanel = function (callback) {
        UIManager_1.UIManager.openUI(TeacherPanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeTeacherPanel = function () {
        UIManager_1.UIManager.closeUI(TeacherPanel_1.default);
    };
    /**
     * 显示遮罩
     * @param isShowLoading 是否显示Loading
     */
    UIHelpClass.prototype.showMask = function (isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, true, isShowLoading);
    };
    /**
     * 隐藏遮罩
     */
    UIHelpClass.prototype.closeMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, false);
    };
    /**
     * 显示数据恢复遮罩
     */
    UIHelpClass.prototype.showRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, true);
    };
    /**
     * 隐藏数据恢复遮罩
     */
    UIHelpClass.prototype.closeRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, false);
    };
    UIHelpClass._instance = null;
    return UIHelpClass;
}());
exports.UIHelp = UIHelpClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxVSUhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSxxREFBb0Q7QUFDcEQsOERBQTZEO0FBQzdELGtEQUFnRTtBQUNoRSxxREFBb0Q7QUFDcEQscURBQWdEO0FBQ2hELGlEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsK0RBQTBEO0FBQzFELDJDQUEwQztBQUMxQyx5RUFBb0U7QUFFcEU7SUFBQTtJQXlNQSxDQUFDO0lBdE1pQix1QkFBVyxHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQU8sR0FBZCxVQUFlLE9BQWU7UUFBOUIsaUJBU0M7UUFSRyxJQUFJLEtBQUssR0FBRyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IscUJBQVMsQ0FBQyxNQUFNLENBQUMsYUFBSyxFQUFFLElBQUksRUFBRSx5QkFBYSxDQUFDLElBQUksRUFBRTtnQkFDOUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLGtDQUFZLEdBQW5CLFVBQ0ksSUFBWSxFQUNaLEdBQWdCLEVBQ2hCLFFBQXlCLEVBQ3pCLFFBQWlCLEVBQ2pCLFlBQXNCLEVBQ3RCLFdBQTRCLEVBQzVCLE9BQXVCO1FBUDNCLGlCQWlCQztRQWZHLG9CQUFB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QUMsc0JBQVksRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLHVDQUFpQixHQUF4QjtRQUNJLHFCQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksOEJBQVEsR0FBZixVQUFnQixhQUE4QjtRQUE5Qiw4QkFBQSxFQUFBLHFCQUE4QjtRQUMxQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQVMsR0FBaEI7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBZSxHQUF0QjtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNJLHNDQUFnQixHQUF2QjtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUF2TWMscUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBd01qRCxrQkFBQztDQXpNRCxBQXlNQyxJQUFBO0FBQ1ksUUFBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvR2FtZVBhbmVsJztcclxuaW1wb3J0IFRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvVGVhY2hlclBhbmVsJztcclxuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XHJcbmltcG9ydCB7IEVQQU5FTF9aT1JERVIsIFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcclxuaW1wb3J0IHsgQWZmaXJtVGlwcyB9IGZyb20gJy4uL1VJL1BhbmVsL0FmZmlybVRpcHMnO1xyXG5pbXBvcnQgRXJyb3JQYW5lbCBmcm9tICcuLi9VSS9QYW5lbC9FcnJvclBhbmVsJztcclxuaW1wb3J0IHsgT3ZlclRpcHMgfSBmcm9tICcuLi9VSS9QYW5lbC9PdmVyVGlwcyc7XHJcbmltcG9ydCBTdGFyQ291bnQgZnJvbSAnLi4vVUkvUGFuZWwvU3RhckNvdW50JztcclxuaW1wb3J0IFN1Ym1pc3Npb25QYW5lbCBmcm9tICcuLi9VSS9QYW5lbC9TdWJtaXNzaW9uUGFuZWwnO1xyXG5pbXBvcnQgeyBUaXBVSSB9IGZyb20gJy4uL1VJL1BhbmVsL1RpcFVJJztcclxuaW1wb3J0IFVwbG9hZEFuZFJldHVyblBhbmVsIGZyb20gJy4uL1VJL1BhbmVsL1VwbG9hZEFuZFJldHVyblBhbmVsJztcclxuXHJcbmNsYXNzIFVJSGVscENsYXNzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVUlIZWxwQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVUlIZWxwQ2xhc3Mge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVUlIZWxwQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRpcHPmloflrZflhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dUaXAobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHRpcFVJID0gVUlNYW5hZ2VyLmdldFVJKFRpcFVJKTtcclxuICAgICAgICBpZiAoIXRpcFVJKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoVGlwVUksIG51bGwsIEVQQU5FTF9aT1JERVIuVElQUywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXBVSS5zaG93VGlwKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn3RpcFxyXG4gICAgICogQHBhcmFtIHR5cGUgdGlwc+exu+WeiyAgIDA6IOmUmeivryAgMe+8muetlOWvueS6hiAgMu+8mumXr+WFs+aIkOWKnyjkuIDnm7TmmL7npLrkuI3kvJrlhbPpl60pXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyICAgICAgICAgICDmj5DnpLrlhoXlrrlcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICAgIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuZFRpdGxlICAgICAgZW5k5Yqo5pWI5o+Q56S65paH5a2XXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd1JlcGxheSAgICAg5piv5ZCm5pi+56S66YeN546p5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd0Nsb3NlICAgICDmmK/lkKbmmL7npLrlhbPpl63mjInpkq5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b09mZiAgICAg5piv5ZCm6Ieq5Yqo5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93T3ZlclRpcHMoXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIHN0cjogc3RyaW5nID0gJycsXHJcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCxcclxuICAgICAgICBlbmRUaXRsZT86IHN0cmluZyxcclxuICAgICAgICBpc1Nob3dSZXBsYXk/OiBib29sZWFuLFxyXG4gICAgICAgIGlzU2hvd0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYXV0b09mZjogYm9vbGVhbiA9IHRydWUsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgb3ZlclRpcHMgPSBVSU1hbmFnZXIuZ2V0VUkoT3ZlclRpcHMpO1xyXG4gICAgICAgIGlmICghb3ZlclRpcHMpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShPdmVyVGlwcywgbnVsbCwgRVBBTkVMX1pPUkRFUi5QT1BVUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3ZlclRpcHModHlwZSwgc3RyLCBjYWxsYmFjaywgZW5kVGl0bGUsIGlzU2hvd1JlcGxheSwgYXV0b09mZik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG92ZXJUaXBzLmluaXQodHlwZSwgc3RyLCBjYWxsYmFjaywgZW5kVGl0bGUsIGlzU2hvd1JlcGxheSwgaXNTaG93Q2xvc2UsIGF1dG9PZmYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VPdmVyVGlwcygpIHtcclxuICAgICAgICBVSU1hbmFnZXIuY2xvc2VVSShPdmVyVGlwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmJ/nuqfor4TmtYvpobXpnaIo5a2m55Sf6Ieq5bex5Y+vR2FtZURhdGEgU3R1ZGVudERhdGHmlbDmja7oh6rliqjliLfmlrDvvIzlkIzmraXliJnpnIDopoHkvKDlj4IpXHJcbiAgICAgKiBAcGFyYW0gaXNTaG93UmVwbGF5IOaYr+WQpuaYvuekuumHjeeOqeaMiemSrlxyXG4gICAgICogQHBhcmFtIHN0YXJOdW0g5pif5pWwICjkuI3kvKDlj4LmlbDliJnku45SZXBvcnRNYW5hZ2Vy6YeM5Y+W5YC8KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1N0YXJDb3VudChpc1Nob3dSZXBsYXk/OiBib29sZWFuLCBzdGFyTnVtPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXJDb3VudCA9IFVJTWFuYWdlci5nZXRVSShTdGFyQ291bnQpO1xyXG4gICAgICAgIGlmICghc3RhckNvdW50KSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoU3RhckNvdW50LCBudWxsLCBFUEFORUxfWk9SREVSLlBPUFVQLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFyQ291bnQoaXNTaG93UmVwbGF5LCBzdGFyTnVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhckNvdW50LnNob3dTdGFycyhpc1Nob3dSZXBsYXksIHN0YXJOdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdGFyQ291bnQoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3RhckNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6jOasoeehruiupOahhlxyXG4gICAgICogQHBhcmFtIHR5cGUgdGlwc+exu+WeiyAgMDrlhoXlrrl0aXBzICAgMTrns7vnu590aXBzXHJcbiAgICAgKiBAcGFyYW0gZGVzIHRpcHPmloflrZflhoXlrrlcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDmjInpkq7lm57osINcclxuICAgICAqIEBwYXJhbSBidG5DbG9zZWxEZXMg5YWz6Zet5oyJ6ZKu5paH5a2X5o+P6L+wXHJcbiAgICAgKiBAcGFyYW0gYnRuT2tEZXMgT0vmjInpkq7mloflrZfmj4/ov7BcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dBZmZpcm1UaXAoXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIGRlczogc3RyaW5nLFxyXG4gICAgICAgIGNhbGxiYWNrOiAodHlwZTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIGJ0bkNsb3NlbERlcz86IHN0cmluZyxcclxuICAgICAgICBidG5Pa0Rlcz86IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvdmVyVGlwcyA9IFVJTWFuYWdlci5nZXRVSShBZmZpcm1UaXBzKTtcclxuICAgICAgICBpZiAoIW92ZXJUaXBzKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoQWZmaXJtVGlwcywgbnVsbCwgRVBBTkVMX1pPUkRFUi5QT1BVUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWZmaXJtVGlwKHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdmVyVGlwcy5pbml0KHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBZmZpcm1UaXAoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoQWZmaXJtVGlwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/lvLnnqpdcclxuICAgICAqIEBwYXJhbSBzaHVvTWluZyDplJnor6/or7TmmI5cclxuICAgICAqIEBwYXJhbSBiaWFvVGkg5qCH6aKY5paH5a2XXHJcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXHJcbiAgICAgKiBAcGFyYW0gYnRuTGFiIOaMiemSruaWh+Wtl1xyXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93RXJyb3JQYW5lbChcclxuICAgICAgICBzaHVvTWluZzogc3RyaW5nLFxyXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcclxuICAgICAgICB0aVNoaT86IHN0cmluZyxcclxuICAgICAgICBidG5MYWI/OiBzdHJpbmcsXHJcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcclxuICAgICAgICBpc0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZXJyb3JQYW5lbCA9IFVJTWFuYWdlci5nZXRVSShFcnJvclBhbmVsKTtcclxuICAgICAgICBpZiAoIWVycm9yUGFuZWwpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShFcnJvclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLkVSUk9SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvclBhbmVsKHNodW9NaW5nLCBiaWFvVGksIHRpU2hpLCBidG5MYWIsIGNhbGxCYWNrLCBpc0Nsb3NlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JQYW5lbC5zZXRQYW5lbChzaHVvTWluZywgYmlhb1RpLCB0aVNoaSwgYnRuTGFiLCBjYWxsQmFjaywgaXNDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUVycm9yUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoRXJyb3JQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DkuqTjgIHov5Tlm55cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFVwbG9hZEFuZFJldHVyblBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLlNVQk1JU1NJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVVwbG9hZEFuZFJldHVyblBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKFVwbG9hZEFuZFJldHVyblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1N1Ym1pc3Npb25QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFN1Ym1pc3Npb25QYW5lbCwgbnVsbCwgRVBBTkVMX1pPUkRFUi5TVUJNSVNTSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdWJtaXNzaW9uUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3VibWlzc2lvblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0dhbWVQYW5lbChjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShHYW1lUGFuZWwsIG51bGwsIEVQQU5FTF9aT1JERVIuTk9STUFMLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlR2FtZVBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKEdhbWVQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUZWFjaGVyUGFuZWwoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIFVJTWFuYWdlci5vcGVuVUkoVGVhY2hlclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLk5PUk1BTCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVRlYWNoZXJQYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuY2xvc2VVSShUZWFjaGVyUGFuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S66YGu572pXHJcbiAgICAgKiBAcGFyYW0gaXNTaG93TG9hZGluZyDmmK/lkKbmmL7npLpMb2FkaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TWFzayhpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRydWUsIGlzU2hvd0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP6YGu572pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dSZWNvdmVyTWFzaygpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk1BU0tfUkVDT1ZFUiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/mlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlUmVjb3Zlck1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVUlIZWxwID0gVUlIZWxwQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19