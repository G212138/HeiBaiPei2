import { ListenerManager } from './../../Manager/ListenerManager';
import BaseFrameUI from '../BaseFrameUI';
import { FrameMsgType } from '../../Data/FrameMsgType';
import { UIHelp } from '../../Utils/UIHelp';
import { ReportManager } from '../../Manager/ReportManager';
import { SoundManager } from '../../Manager/SoundManager';
import { T2M } from '../../SDK/T2M';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class UploadAndReturnPanel extends BaseFrameUI {
    public static className = 'UploadAndReturnPanel';

    onLoad() {
        this.node.on(cc.Node.EventType.POSITION_CHANGED, () => {
            this.adjustWidget();
        });
    }

    start() {
        ListenerManager.dispatch(FrameMsgType.ON_EDIT_STATE_SWITCHING, 1);
    }

    onFanHui() {
        ListenerManager.dispatch(FrameMsgType.ON_EDIT_STATE_SWITCHING, 0);
        UIHelp.closeStarCount();
        UIHelp.closeGamePanel();
        UIHelp.closeUploadAndReturnPanel();
        UIHelp.closeSubmissionPanel();
        UIHelp.closeOverTips();
        UIHelp.closeAffirmTip();
        ReportManager.reportGameOver();
        SoundManager.stopAll();
        T2M.onReturnToTeacherPanel();
    }

    onTiJiao() {
        const isEdit = EditorManager.isSupportEdit();
        if (!isEdit || ReportManager.isAllOver) {
            UIHelp.showSubmissionPanel();
        } else {
            UIHelp.showTip('请先完成一遍题目');
        }
    }

    adjustWidget() {
        let scenceHeight = cc.winSize.height;
        let widget = this.getComponent(cc.Widget);
        if (widget) {
            if (scenceHeight > this.node.height) {
                widget.bottom = (scenceHeight - this.node.height) / 2;
            } else {
                widget.bottom = 0;
            }
            widget.updateAlignment();
        }
    }
}
