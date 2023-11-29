import { FrameMsgType } from '../../Data/FrameMsgType';
import { ListenerManager } from '../../Manager/ListenerManager';
import BindNode from '../BindNode';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TeacherPanelLoading extends BindNode {
    private _nd_panel: cc.Node = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        ListenerManager.on(FrameMsgType.TEACHER_PANEL_LOADING, this.onEnableEvent, this);
    }

    onDestroy() {
        ListenerManager.removeAll(this);
    }

    onEnableEvent(isShow: boolean) {
        this._nd_panel.active = isShow;
    }

    // update (dt) {}
}
