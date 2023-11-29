import GamePanel from '../../../game/scripts/UI/panel/GamePanel';
import TeacherPanel from '../../../game/scripts/UI/panel/TeacherPanel';
import { FrameMsgType } from '../Data/FrameMsgType';
import { ListenerManager } from '../Manager/ListenerManager';
import { EPANEL_ZORDER, UIManager } from '../Manager/UIManager';
import { AffirmTips } from '../UI/Panel/AffirmTips';
import ErrorPanel from '../UI/Panel/ErrorPanel';
import { OverTips } from '../UI/Panel/OverTips';
import StarCount from '../UI/Panel/StarCount';
import SubmissionPanel from '../UI/Panel/SubmissionPanel';
import { TipUI } from '../UI/Panel/TipUI';
import UploadAndReturnPanel from '../UI/Panel/UploadAndReturnPanel';

class UIHelpClass {
    private static _instance: UIHelpClass = null;

    public static getInstance(): UIHelpClass {
        if (!this._instance) {
            this._instance = new UIHelpClass();
        }
        return this._instance;
    }

    /**
     *
     * @param message tips文字内容
     */
    public showTip(message: string) {
        let tipUI = UIManager.getUI(TipUI);
        if (!tipUI) {
            UIManager.openUI(TipUI, null, EPANEL_ZORDER.TIPS, () => {
                this.showTip(message);
            });
        } else {
            tipUI.showTip(message);
        }
    }

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
    public showOverTips(
        type: number,
        str: string = '',
        callback: Function = null,
        endTitle?: string,
        isShowReplay?: boolean,
        isShowClose: boolean = false,
        autoOff: boolean = true,
    ) {
        let overTips = UIManager.getUI(OverTips);
        if (!overTips) {
            UIManager.openUI(OverTips, null, EPANEL_ZORDER.POPUP, () => {
                this.showOverTips(type, str, callback, endTitle, isShowReplay, autoOff);
            });
        } else {
            overTips.init(type, str, callback, endTitle, isShowReplay, isShowClose, autoOff);
        }
    }

    public closeOverTips() {
        UIManager.closeUI(OverTips);
    }

    /**
     * 星级评测页面(学生自己可GameData StudentData数据自动刷新，同步则需要传参)
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    public showStarCount(isShowReplay?: boolean, starNum?: number): void {
        let starCount = UIManager.getUI(StarCount);
        if (!starCount) {
            UIManager.openUI(StarCount, null, EPANEL_ZORDER.POPUP, () => {
                this.showStarCount(isShowReplay, starNum);
            });
        } else {
            starCount.showStars(isShowReplay, starNum);
        }
    }

    public closeStarCount() {
        UIManager.closeUI(StarCount);
    }

    /**
     * 二次确认框
     * @param type tips类型  0:内容tips   1:系统tips
     * @param des tips文字内容
     * @param callback 按钮回调
     * @param btnCloselDes 关闭按钮文字描述
     * @param btnOkDes OK按钮文字描述
     */
    public showAffirmTip(
        type: number,
        des: string,
        callback: (type: number) => void,
        btnCloselDes?: string,
        btnOkDes?: string,
    ) {
        let overTips = UIManager.getUI(AffirmTips);
        if (!overTips) {
            UIManager.openUI(AffirmTips, null, EPANEL_ZORDER.POPUP, () => {
                this.showAffirmTip(type, des, callback, btnCloselDes, btnOkDes);
            });
        } else {
            overTips.init(type, des, callback, btnCloselDes, btnOkDes);
        }
    }

    public closeAffirmTip() {
        UIManager.closeUI(AffirmTips);
    }

    /**
     * 错误弹窗
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    public showErrorPanel(
        shuoMing: string,
        biaoTi?: string,
        tiShi?: string,
        btnLab?: string,
        callBack?: Function,
        isClose: boolean = false,
    ) {
        let errorPanel = UIManager.getUI(ErrorPanel);
        if (!errorPanel) {
            UIManager.openUI(ErrorPanel, null, EPANEL_ZORDER.ERROR, () => {
                this.showErrorPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
            });
        } else {
            errorPanel.setPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
        }
    }

    public closeErrorPanel() {
        UIManager.closeUI(ErrorPanel);
    }

    /**
     * 提交、返回
     */
    public showUploadAndReturnPanel() {
        UIManager.showUI(UploadAndReturnPanel, null, EPANEL_ZORDER.SUBMISSION);
    }

    public closeUploadAndReturnPanel() {
        UIManager.closeUI(UploadAndReturnPanel);
    }

    public showSubmissionPanel() {
        UIManager.showUI(SubmissionPanel, null, EPANEL_ZORDER.SUBMISSION);
    }

    public closeSubmissionPanel() {
        UIManager.closeUI(SubmissionPanel);
    }

    public showGamePanel(callback?: Function) {
        UIManager.openUI(GamePanel, null, EPANEL_ZORDER.NORMAL, callback);
    }

    public closeGamePanel() {
        UIManager.closeUI(GamePanel);
    }

    public showTeacherPanel(callback?: Function) {
        UIManager.openUI(TeacherPanel, null, EPANEL_ZORDER.NORMAL, callback);
    }

    public closeTeacherPanel() {
        UIManager.closeUI(TeacherPanel);
    }

    /**
     * 显示遮罩
     * @param isShowLoading 是否显示Loading
     */
    public showMask(isShowLoading: boolean = false) {
        ListenerManager.dispatch(FrameMsgType.ON_MASK, true, isShowLoading);
    }

    /**
     * 隐藏遮罩
     */
    public closeMask() {
        ListenerManager.dispatch(FrameMsgType.ON_MASK, false);
    }

    /**
     * 显示数据恢复遮罩
     */
    public showRecoverMask() {
        ListenerManager.dispatch(FrameMsgType.MASK_RECOVER, true);
    }

    /**
     * 隐藏数据恢复遮罩
     */
    public closeRecoverMask() {
        ListenerManager.dispatch(FrameMsgType.MASK_RECOVER, false);
    }
}
export const UIHelp = UIHelpClass.getInstance();
