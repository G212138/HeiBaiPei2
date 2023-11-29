import { SoundManager } from './../../Manager/SoundManager';
import { Tools } from '../../Utils/Tools';
import BaseFrameUI from '../BaseFrameUI';
import { UIHelp } from '../../Utils/UIHelp';
import { UIManager } from '../../Manager/UIManager';
import { T2M } from '../../SDK/T2M';
import { FrameMsgType } from '../../Data/FrameMsgType';
import { ConstValue } from '../../../../game/scripts/Data/ConstValue';

export enum Type_Tile {
    ZuoDaJieShu,
    ChuangGuanChengGong,
    TiaoZhanJieShu,
    TiaoZhanChengGong,
    ChuangGuanJieShu,
}

export const DefalutTitle = ['作答结束', '闯关成功', '挑战结束', '挑战成功', '闯关结束'];

let FontMap = {
    作: 'img_zuo',
    答: 'img_da',
    结: 'img_jie',
    束: 'img_shu',
    成: 'img_cheng',
    功: 'img_gong',
    挑: 'img_tiao',
    战: 'img_zhan',
    闯: 'img_chuang',
    关: 'img_guan',
};

const { ccclass, property } = cc._decorator;
@ccclass
export class OverTips extends BaseFrameUI {
    public static className = 'OverTips';

    private _lb_tips: cc.Node = null;
    private _sp_false: cc.Node = null;
    private _sp_true: cc.Node = null;
    private _sp_complete: cc.Node = null;
    private _btn_close: cc.Node = null;
    private _btn_replay: cc.Node = null;
    private _nd_yanhua: cc.Node = null;

    private callback = null;
    private endInAnimation: boolean = false;
    private img_titles: cc.Node[] = [];
    private bones: any[] = [];
    private _endTitle: string = '';

    constructor() {
        super();
    }

    onLoad() {
        UIManager.getBundleRes('frameRes', 'images/OverTips/word', cc.SpriteAtlas, (asset: cc.SpriteAtlas) => {});
    }

    start() {
        this._btn_close.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);

        T2M.addSyncEventListener(FrameMsgType.OVERTIPS_CLOSE, this.doClickClose.bind(this));
    }

    onDisable() {
        this._btn_close.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
    }

    /**
     设置显示内容
     @param {number} type          0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     @param {string} str           提示内容
     @param {Function} callback    回调函数
     @param {string} endTitle      end动效提示文字
     @param {boolean} isShowReplay     是否显示重玩按钮
     @param {boolean} isShowClose     是否显示关闭按钮
     @param {boolean} autoOff     是否自动关闭
     */
    init(
        type: number,
        str: string = '',
        callback: Function,
        endTitle?: string,
        isShowReplay?: boolean,
        isShowClose: boolean = false,
        autoOff: boolean = true,
    ): void {
        this.callback = callback;
        this._sp_false.active = type == 0;
        this._sp_true.active = type == 1;
        this._sp_complete.active = type == 2;
        this._lb_tips.active = type != 2;
        this._lb_tips.getComponent(cc.Label).string = str;
        this._btn_close.active = isShowClose && (0 === type || 1 === type);
        if (this._btn_replay) {
            this._btn_replay.active = isShowReplay;
        }

        if (!endTitle || 4 !== endTitle.length) {
            this._endTitle = DefalutTitle[0];
        } else {
            this._endTitle = endTitle;
        }

        switch (type) {
            case 0:
                Tools.playSpine(this._sp_false.getComponent(sp.Skeleton), 'false', false, () => {
                    if (autoOff) {
                        this.delayClose();
                    }
                });
                SoundManager.playEffect('sfx_genneg', false, false, false);
                break;
            case 1:
                this._sp_true.getComponent(sp.Skeleton).clearTracks();
                Tools.playSpine(this._sp_true.getComponent(sp.Skeleton), 'true', false, () => {
                    if (autoOff) {
                        this.delayClose();
                    }
                });
                SoundManager.playEffect('sfx_genpos', false, false, false);
                break;
            case 2:
                this.playCompleteBySubject();

                break;
        }

        this.playTipsAction();
        UIHelp.closeMask();
    }

    playCompleteBySubject() {
        const subject: number = ConstValue.Subject || 1;
        switch (subject) {
            case 1:
                {
                    this._sp_complete.active = false;
                    let spComp = this._sp_complete.getComponent(sp.Skeleton);
                    this.bones = [];
                    this.bones.push(spComp.findBone('paipai'));
                    this.bones.push(spComp.findBone('xiaoU'));
                    this.bones.push(spComp.findBone('mimiya'));
                    this.bones.push(spComp.findBone('doudou'));
                    this.createTitleImage();
                }
                break;
            case 2:
                {
                    this.endInAnimation = false;
                    this._sp_complete.active = true;
                    let spComp = this._sp_complete.getComponent(sp.Skeleton);
                    Tools.playSpine(spComp, 'ni zhenbang', false, () => {
                        Tools.playSpine(spComp, 'xunhuan', true);
                    });
                    SoundManager.playEffect('over_yuwen', false);
                }
                break;
            case 3:
                {
                    this.endInAnimation = false;
                    this._nd_yanhua.active = true;
                    this._sp_complete.active = true;
                    let spComp = this._sp_complete.getComponent(sp.Skeleton);
                    Tools.playSpine(spComp, 'animation', false, () => {
                        spComp.animation = null;
                    });
                    SoundManager.playEffect('over_yingyu', false);
                }
                break;
        }
    }

    delayClose(): void {
        this.scheduleOnce(() => {
            this.doClickClose();
        }, 0);
    }

    playTipsAction() {
        if (this._lb_tips.active) {
            let endPos = cc.v2(this._lb_tips.position.x, this._lb_tips.position.y);
            let framePos_1 = cc.v2(endPos.x, endPos.y - 72.8);
            let framePos_2 = cc.v2(endPos.x, endPos.y + 12);
            let framePos_3 = cc.v2(endPos.x, endPos.y - 8);
            let framePos_4 = cc.v2(endPos.x, endPos.y + 7.3);
            this._lb_tips.position = cc.v3(framePos_1.x, framePos_1.y);
            cc.tween(this._lb_tips)
                .to(0.08, { x: framePos_2.x, y: framePos_2.y })
                .to(0.08, { x: framePos_3.x, y: framePos_3.y })
                .to(0.08, { x: framePos_4.x, y: framePos_4.y })
                .to(0.06, { x: endPos.x, y: endPos.y })
                .start();
        }
    }

    onClickClose(event?, customEventData?): void {
        T2M.dispatch(FrameMsgType.OVERTIPS_CLOSE, null);
    }

    doClickClose() {
        if (this.callback) this.callback();
        UIHelp.closeOverTips();
    }

    createTitleImage() {
        UIManager.getBundleRes('frameRes', 'images/OverTips/word', cc.SpriteAtlas, (atlas: cc.SpriteAtlas) => {
            this.img_titles.forEach((node) => {
                node.removeFromParent(true);
            });
            this.img_titles = [];

            for (let i = 0; i < this._endTitle.length; ++i) {
                const str = this._endTitle[i];
                let spriteFrame = atlas.getSpriteFrame(FontMap[str]);
                let imageNode = new cc.Node();
                let image = imageNode.addComponent(cc.Sprite);
                image.spriteFrame = spriteFrame;
                imageNode.parent = this.node;
                imageNode.active = false;
                this.img_titles.push(imageNode);
            }

            this.endInAnimation = true;
            this._sp_complete.active = true;
            let spComp = this._sp_complete.getComponent(sp.Skeleton);
            Tools.playSpine(spComp, 'in', false, () => {
                Tools.playSpine(spComp, 'stand', true);
                this.endInAnimation = false;
            });
            SoundManager.playEffect('sfx_geupgrd', false);
        });
    }

    update() {
        if (!this.endInAnimation) return;
        for (let index = 0; index < this.img_titles.length; index++) {
            this.img_titles[index].active = true;
            this.img_titles[index].position = cc.v3(this.bones[index].worldX - 139, this.bones[index].worldY - 135);
        }
    }
}
