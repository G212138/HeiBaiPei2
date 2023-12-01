import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { CustomSyncData } from "../../Data/CustomSyncData";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import Role from "./Role";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {
    @property(cc.Node)
    private geziType: cc.Node[] = [];
    @property(cc.Label)
    private tigan: cc.Label = null;
    @property(cc.Node)
    private btn_node: cc.Node = null;
    @property(cc.Prefab)
    private role_prefab: cc.Prefab = null;
    @property(cc.Node)
    private btn_submit_disabled: cc.Node = null;
    @property(cc.VideoPlayer)
    private videoPlayer: cc.VideoPlayer = null;

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager.on(EventType.CLICK_ROLE, this.handleClickRole, this);

        //监听视频是否播放完毕
        this.videoPlayer.node.on('completed', this.onVideoPlayerCompleted, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager.off(EventType.CLICK_ROLE, this.handleClickRole, this);
    }

    private handleEnterGame() {
        if (!EditorManager.editorData.needEnd) {
            this.node.getChildByName("bg").active = false;
        }
        this.videoPlayer.node.active = true;
        this.videoPlayer.play();
        // this.initUI();
    }

    private onVideoPlayerCompleted() {
        console.log("视频播放完毕");

        // cc.tween(this.videoPlayer.node).to(0.5, {opacity: 0}).call(() => {
        //     this.videoPlayer.node.active = false;
        // }).start();
        this.captureNode.spriteFrame = this.CapturePicture();
        this.captureNode.node.active = true;
        this.scheduleOnce(() => {
            this.videoPlayer.node.active = false;
            cc.tween(this.captureNode.node).to(0.5, { opacity: 0 }).call(() => {
                this.captureNode.node.active = false;
            }).start();
        }, 0.5);
        this.initUI();
    }

    private initUI() {
        this.geziType.forEach((item, index) => {
            item.active = false;
        });
        this.geziType[EditorManager.editorData.geziSize].active = true;
        this.showRole();
        this.drawLine();
    }

    private showRole() {
        let roleParent = this.geziType[EditorManager.editorData.geziSize].getChildByName("role_node");
        let rowCount = EditorManager.editorData.geziSize === 0 ? 5 : 6;
        for (let i = 0; i < rowCount; i++) {
            for (let j = 0; j < rowCount; j++) {
                if (EditorManager.editorData.geziIconArr[i][j] != 0) {
                    let roleNode = cc.instantiate(this.role_prefab);
                    roleNode.parent = roleParent;
                    let childrenIndex = i * rowCount + j;
                    roleNode.name = "role_" + childrenIndex;
                    let pos = this.geziType[EditorManager.editorData.geziSize].getChildByName("gezi").children[childrenIndex].position;
                    roleNode.position = pos;
                    let role = roleNode.getComponent(Role);
                    role.type = EditorManager.editorData.geziIconArr[i][j];
                    role.geziIndex = childrenIndex;
                    role.showInit();
                }
            }
        }
        this.scheduleOnce(() => {
            this.showTigan();
        }, 0.5);
    }

    private handleClickRole(data: any) {
        if (SyncDataManager.getSyncData().customSyncData.curChooseRole == null) {
            SyncDataManager.getSyncData().customSyncData.curChooseRole = data;
        } else {
            if (SyncDataManager.getSyncData().customSyncData.curChooseRole == data) {
                SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
            } else {
                this.UpdateLine(data);
            }
        }
        for (let i = 0; i < this.geziType[EditorManager.editorData.geziSize].getChildByName("role_node").childrenCount; i++) {
            this.geziType[EditorManager.editorData.geziSize].getChildByName("role_node").children[i].getComponent(Role).initRole();
        }
        if (SyncDataManager.getSyncData().customSyncData.curChooseRole != null) {
            let roleNode = this.geziType[EditorManager.editorData.geziSize].getChildByName("role_node").getChildByName("role_" + SyncDataManager.getSyncData().customSyncData.curChooseRole);
            roleNode.getComponent(Role).showClick();
        }
    }

    private UpdateLine(data: any) {
        let selfAnswer = [SyncDataManager.getSyncData().customSyncData.curChooseRole, data];
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            let answer = SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            if (answer[0] == selfAnswer[0] && answer[1] == selfAnswer[1]) {
                SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
                SoundManager.playEffect("连线消失的音效", false);
                this.drawLine();
                return;
            } else if (answer[0] == selfAnswer[1] && answer[1] == selfAnswer[0]) {
                SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
                SoundManager.playEffect("连线消失的音效", false);
                this.drawLine();
                return;
            }
        }
        SyncDataManager.getSyncData().customSyncData.selfAnswerArr.push(selfAnswer);
        SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
        SoundManager.playEffect("出现连线的音效", false);
        this.drawLine();
    }

    private drawLine() {
        this.btn_submit_disabled.active = SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length == 0;

        let geziNode = this.geziType[EditorManager.editorData.geziSize]
        let draw_node = geziNode.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            let answer = SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            let startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            let endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            let startPos = startNode.position;
            let endPos = endNode.position;
            let lineNode = new cc.Node();
            lineNode.parent = draw_node;
            let graphics = lineNode.addComponent(cc.Graphics);
            graphics.lineWidth = 20;
            graphics.strokeColor = cc.Color.WHITE;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
        }
    }

    private showTigan() {
        this.tigan.string = EditorManager.editorData.tigan;
        this.tigan.node.parent.active = EditorManager.editorData.tigan.length > 0;
        this.scheduleOnce(() => {
            this.showBtn();
        }, 0.5);
    }

    private showBtn() {
        this.btn_node.active = true;
    }

    private onClickReset() {
        SyncDataManager.getSyncData().customSyncData.selfAnswerArr = [];
        this.drawLine();
    }


    private onClickSubmit() {
        UIHelp.showMask();
        let selfAnswerArr = SyncDataManager.getSyncData().customSyncData.selfAnswerArr;
        let answerArr = EditorManager.editorData.answerArr;
        if (selfAnswerArr.length == answerArr.length) {
            let isAllRight = true;
            for (let i = 0; i < selfAnswerArr.length; i++) {
                let answer = selfAnswerArr[i];
                if (!this.isInArray(answerArr, answer)) {
                    isAllRight = false;
                    this.drawRedLine(selfAnswerArr[i]);
                }
            }
            if (isAllRight) {
                ListenerManager.dispatch(EventType.SUBMIT, true);
                SoundManager.playEffect("正确音效", false);
                this.onTrueEffect();
            } else {
                ListenerManager.dispatch(EventType.SUBMIT, false);
                SoundManager.playEffect("错误音效", false);
            }
        } else {
            ListenerManager.dispatch(EventType.SUBMIT, false);
            SoundManager.playEffect("错误音效", false);
            for (let i = 0; i < selfAnswerArr.length; i++) {
                let answer = selfAnswerArr[i];
                if (!this.isInArray(answerArr, answer)) {
                    this.drawRedLine(selfAnswerArr[i]);
                }
            }
        }
    }

    //判断元素是否在数组中
    private isInArray(arr: any[][], value: any[]) {
        //不考虑value数组中元素的顺序
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].sort().toString() == value.sort().toString()) {
                return true;
            }
        }
        return false;
    }

    private drawRedLine(answerArr: number[]) {
        let geziNode = this.geziType[EditorManager.editorData.geziSize]
        let draw_node = geziNode.getChildByName("draw_node");
        let startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answerArr[0]);
        let endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answerArr[1]);
        let startPos = startNode.position;
        let endPos = endNode.position;
        let lineNode = new cc.Node();
        lineNode.parent = draw_node;
        let graphics = lineNode.addComponent(cc.Graphics);
        graphics.lineWidth = 20;
        graphics.strokeColor = cc.Color.RED;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();

        this.scheduleOnce(() => {
            this.delInArray(answerArr);
            SoundManager.playEffect("连线消失的音效", false);
            lineNode.destroy();
            this.drawLine();
            UIHelp.closeMask();
        }, 0.5);
    }

    private delInArray(value: any[]) {
        //不考虑value数组中元素的顺序
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            if (SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i].sort().toString() == value.sort().toString()) {
                SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                return;
            }
        }
    }

    private onTrueEffect() {
        this.drawGreenLine();
        this.scheduleOnce(() => {
            this.moveRole();
        }, 0.5);
    }

    private moveRole() {
        let geziNode = this.geziType[EditorManager.editorData.geziSize];
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            let answer = SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            let startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            let endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            let index1 = startNode.getComponent(Role).type;
            let index2 = endNode.getComponent(Role).type;
            let startRole = startNode;
            let endRole = endNode;
            if (index1 > index2) {
                startRole = endNode;
                endRole = startNode;
            }

            cc.tween(startRole).to(0.5, { position: endRole.position }).call(() => {
                endRole.getComponent(Role).showChange();
                startRole.opacity = 0;
                this.scheduleOnce(() => {
                    this.gameOver();
                }, 2.5);
            }).start();
        }
    }

    private drawGreenLine() {
        let geziNode = this.geziType[EditorManager.editorData.geziSize]
        let draw_node = geziNode.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (let i = 0; i < SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            let answer = SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            let startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            let endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            let startPos = startNode.position;
            let endPos = endNode.position;
            let lineNode = new cc.Node();
            lineNode.parent = draw_node;
            let graphics = lineNode.addComponent(cc.Graphics);
            graphics.lineWidth = 20;
            graphics.strokeColor = cc.Color.GREEN;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
            this.scheduleOnce(() => {
                lineNode.destroy();
            }, 0.5);
        }
    }

    private gameOver() {
        if (EditorManager.editorData.needEnd) {
            ListenerManager.dispatch(EventType.GAME_OVER);
        }
    }

    @property(cc.Sprite)
    captureNode: cc.Sprite = null;
    @property(cc.Camera)
    private camera: cc.Camera = null;
    @property(cc.Node)
    private mm: cc.Node = null;

    public CapturePicture() {
        let data = this.captureTexture();
        let texture = new cc.Texture2D()
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, 2048, 1152);
        let newSpriteFrame = new cc.SpriteFrame(texture);
        newSpriteFrame.setFlipY(true);
        return newSpriteFrame;
    }
    private captureTexture() {
        this.mm.active = true;
        let data = this.captureScreen(this.camera.getComponent(cc.Camera), this.mm);
        this.mm.active = false;
        return data;
    }
    private captureScreen(camera: cc.Camera, prop?: cc.Node | cc.Rect) {
        let newTexture = new cc.RenderTexture();
        let oldTexture = camera.targetTexture;
        let rect: cc.Rect = cc.rect(0, 0, cc.visibleRect.width, cc.visibleRect.height);
        if (prop) {
            if (prop instanceof cc.Node) {
                rect = prop.getBoundingBoxToWorld();
            } else {
                rect = prop;
            }
        }
        rect.width = Math.ceil(rect.width);//特殊情况下数值是浮点类型的，转换成integer类型。这里width=2048;height=1152 直接写死数值也可以
        rect.height = Math.ceil(rect.height);
        newTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.game._renderContext.STENCIL_INDEX8);
        camera.targetTexture = newTexture;
        camera.render();
        camera.targetTexture = oldTexture;
        let buffer = new ArrayBuffer(rect.width * rect.height * 4);
        let data = new Uint8Array(buffer);
        newTexture.readPixels(data, rect.x, rect.y, rect.width, rect.height);
        return data;
    }

}
