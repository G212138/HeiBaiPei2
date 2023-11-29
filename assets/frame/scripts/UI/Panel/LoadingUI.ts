import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import GamePanel from '../../../../game/scripts/UI/panel/GamePanel';
import TeacherPanel from '../../../../game/scripts/UI/panel/TeacherPanel';
import { NetWork } from '../../Http/NetWork';
import { SoundManager } from '../../Manager/SoundManager';
import { UIManager } from '../../Manager/UIManager';
import GameMsg from '../../SDK/GameMsg';
import BaseFrameUI from '../BaseFrameUI';
import { BaseUI, UIClass } from '../BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export class LoadingUI extends BaseFrameUI {
    public static className = 'LoadingUI';

    private _nd_like: cc.Node = null;
    private _pb_loading_like: cc.Node = null;
    private _lb_percent_like: cc.Node = null;

    private _nd_yuwen: cc.Node = null;
    private _pb_loading_yuwen: cc.Node = null;
    private _lb_percent_yuwen: cc.Node = null;

    private _nd_yingyu: cc.Node = null;
    private _pb_loading_yingyu: cc.Node = null;
    private _lb_percent_yingyu: cc.Node = null;
    private _sp_progressTag_yingyu: cc.Node = null;

    private isLoadStart = false;
    private readonly _resProgress: number = 20;
    private readonly _audioProgress: number = 10;

    onLoad() {
        NetWork.GetRequest();

        this.initPanelBySubject();
        this.init();
    }

    async init() {
        await this.loadPreloadDir();
        this.setLoadingProgressUI(this._resProgress);
        this.loadAudio();
    }

    // 根据学科设置界面
    initPanelBySubject() {
        const subject: number = ConstValue.Subject || 1;
        this._nd_like.active = 1 === subject;
        this._nd_yuwen.active = 2 === subject;
        this._nd_yingyu.active = 3 === subject;
        this._sp_progressTag_yingyu.getComponent(sp.Skeleton).setAnimation(0, 'loading', true);
    }

    // 预加载音频
    async loadAudio() {
        SoundManager.preLoadAllAudioClips(() => {
            this.setLoadingProgressUI(this._resProgress + this._audioProgress);
            this.openPanel();
        });
    }

    // 预加载 'resources/preload' 目录下的资源
    async loadPreloadDir() {
        return new Promise<void>((resolve, reject) => {
            cc.resources.loadDir('preload', cc.Asset, (error: Error, assets: cc.Asset[]) => {
                resolve();
            });
        });
    }

    // 打开界面
    openPanel() {
        let onProgress = (completedCount: number, totalCount: number, item: any) => {
            if (!this.isLoadStart) {
                this.isLoadStart = true;

                //新课堂上报
                GameMsg.resLoadStart();
            }
            const finishProgress = this._resProgress + this._audioProgress;
            let value = finishProgress + Math.round((completedCount / totalCount) * (100 - finishProgress));
            this.setLoadingProgressUI(value);
        };

        let openPanel: UIClass<BaseUI> = ConstValue.IS_TEACHER ? TeacherPanel : GamePanel;

        UIManager.openUI(
            openPanel,
            this,
            0,
            () => {
                //新课堂上报
                GameMsg.resLoadEnd();
            },
            onProgress,
        );
    }

    setLoadingProgressUI(value: number) {
        //新课堂上报
        GameMsg.resLoading(value);

        this._pb_loading_like.getComponent(cc.ProgressBar).progress = value / 100;
        this._pb_loading_yuwen.getComponent(cc.ProgressBar).progress = value / 100;
        this._pb_loading_yingyu.getComponent(cc.ProgressBar).progress = value / 100;
        this._lb_percent_like.getComponent(cc.Label).string = value.toString() + '%';
        this._lb_percent_yuwen.getComponent(cc.Label).string = value.toString() + '%';
        this._lb_percent_yingyu.getComponent(cc.Label).string = value.toString() + '%';

        // @ts-ignore
        if (3 === ConstValue.Subject && value >= 80) {
            let spComp = this._sp_progressTag_yingyu.getComponent(sp.Skeleton);
            const finishAnim = 'finish';
            if (finishAnim !== spComp.animation) {
                spComp.setAnimation(0, finishAnim, false);
            }
        }
    }
}
