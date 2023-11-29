import { FrameConstValue } from '../Data/FrameConstValue';
import { BaseUI } from './BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseFrameUI extends BaseUI {
    public static isFramePanel: boolean = true;

    public static getUrl(): string {
        cc.log(this.className);
        return FrameConstValue.FRAME_PREFAB_PANEL_DIR + this.className;
    }
}
