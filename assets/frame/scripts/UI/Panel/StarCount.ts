import { SoundManager } from './../../Manager/SoundManager';
import { Tools } from '../../Utils/Tools';
import BaseFrameUI from '../BaseFrameUI';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';
import { ReportManager } from '../../Manager/ReportManager';
import { UIHelp } from '../../Utils/UIHelp';
import { ConstValue } from '../../../../game/scripts/Data/ConstValue';

const { ccclass, property } = cc._decorator;

@ccclass
export default class StarCount extends BaseFrameUI {
    public static className = 'StarCount';

    private _btn_replay: cc.Node = null;
    private _sp_like_youxiao: cc.Node = null;
    private _sp_like_xiaodi: cc.Node = null;
    private _sp_yuwen: cc.Node = null;
    private _sp_yingyu: cc.Node = null;

    private audioList: string[] = ['', 'star_good', 'star_great', 'star_perfect'];

    onLoad() {
        if (this._sp_like_youxiao) {
            this._sp_like_youxiao.active = false;
        }
        if (this._sp_like_xiaodi) {
            this._sp_like_xiaodi.active = false;
        }
        if (this._sp_yuwen) {
            this._sp_yuwen.active = false;
        }
        if (this._sp_yingyu) {
            this._sp_yingyu.active = false;
        }
    }

    /**
     *
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    showStars(isShowReplay?: boolean, starNum?: number): void {
        let star = 0;
        if (void 0 === starNum || null === starNum) {
            star = ReportManager.getStarCount();
        } else {
            star = starNum;
        }

        SoundManager.playEffect(this.audioList[star], false);
        UIHelp.closeMask();

        if (this._btn_replay) {
            this._btn_replay.active = isShowReplay;
        }

        const subject: number = ConstValue.Subject || 1;
        let spine: sp.Skeleton = null;
        switch (subject) {
            case 1:
                {
                    const level = EditorManager.getCoursewareLevel();
                    if (level < 0 || level > 2) {
                        UIHelp.closeStarCount();
                        UIHelp.showErrorPanel('coursewareLevel错误，请在EditorManager中设置！');
                        return;
                    }

                    if (0 === level) {
                        spine = this._sp_like_youxiao && this._sp_like_youxiao.getComponent(sp.Skeleton);
                    } else if (1 === level || 2 === level) {
                        spine = this._sp_like_xiaodi && this._sp_like_xiaodi.getComponent(sp.Skeleton);
                    }
                }
                break;
            case 2:
                {
                    spine = this._sp_yuwen && this._sp_yuwen.getComponent(sp.Skeleton);
                }
                break;
            case 3:
                {
                    spine = this._sp_yingyu && this._sp_yingyu.getComponent(sp.Skeleton);
                }
                break;
        }
        if (spine) {
            spine.node.active = true;
            Tools.playSpine(spine, `in_0${star}`, false, () => {
                Tools.playSpine(spine, `idle_0${star}`, true);
            });
        }
    }
}
