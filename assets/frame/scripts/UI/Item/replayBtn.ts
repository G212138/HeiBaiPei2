import { FrameMsgType } from '../../Data/FrameMsgType';
import { T2M } from '../../SDK/T2M';

const { ccclass, property } = cc._decorator;
@ccclass
export default class replayBtn extends cc.Component {
    private _touchEnable: boolean = true;
    start() {
        this.node.on(
            cc.Node.EventType.TOUCH_START,
            () => {
                if (!this._touchEnable) return;
                this.node.scale = 1.1;
            },
            this,
        );

        this.node.on(
            cc.Node.EventType.TOUCH_END,
            () => {
                if (!this._touchEnable) return;
                this._touchEnable = false;
                this.node.scale = 1;
                T2M.dispatch(FrameMsgType.REPLAY_START, null);
            },
            this,
        );

        this.node.on(
            cc.Node.EventType.TOUCH_CANCEL,
            () => {
                this.node.scale = 1;
            },
            this,
        );
    }

    onEnable() {
        this._touchEnable = true;
    }
}
