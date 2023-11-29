import { UIHelp } from '../../Utils/UIHelp';
import { SoundManager } from './../../Manager/SoundManager';
import GameMsg from './../../SDK/GameMsg';
import BaseFrameUI from './../BaseFrameUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class ErrorPanel extends BaseFrameUI {
    public static className = 'ErrorPanel';
    @property(cc.Label)
    biaoTi: cc.Label = null;
    @property(cc.Label)
    shuoMing: cc.Label = null;
    @property(cc.Label)
    tiShi: cc.Label = null;
    @property(cc.Label)
    btnLab: cc.Label = null;
    @property(cc.Button)
    btn: cc.Button = null;

    isClose: boolean = false;
    callback: Function;
    start() {
        // cc.director.pause();
    }

    onLoad() {}
    /**
     * 设置错误弹窗数据
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    setPanel(
        shuoMing: string,
        biaoTi?: string,
        tiShi?: string,
        btnLab?: string,
        callBack?: Function,
        isClose: boolean = false,
    ) {
        let data = {
            shuoMing: shuoMing,
            biaoTi: biaoTi,
            tiShi: tiShi,
        };

        GameMsg.warn('ErrorPanelLog', data);
        SoundManager.playEffect('sfx_error', false);
        this.shuoMing.string = shuoMing;
        this.isClose = isClose;
        this.callback = callBack;
        this.biaoTi.string = biaoTi ? biaoTi : this.biaoTi.string;
        this.tiShi.string = tiShi ? tiShi : this.tiShi.string;
        this.btnLab.string = btnLab ? btnLab : this.btnLab.string;
        this.btn.interactable = this.isClose;
    }

    onBtnClick() {
        SoundManager.playEffect('sfx_buttn', false);
        if (this.callback) {
            this.callback();
        }
        if (this.isClose) {
            UIHelp.closeErrorPanel();
        }
    }
}
