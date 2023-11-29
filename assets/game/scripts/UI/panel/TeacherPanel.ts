import { FrameMsgType } from '../../../../frame/scripts/Data/FrameMsgType';
import { ListenerManager } from '../../../../frame/scripts/Manager/ListenerManager';
import { ReportManager } from '../../../../frame/scripts/Manager/ReportManager';
import { UIManager } from '../../../../frame/scripts/Manager/UIManager';
import BaseTeacherPanel from '../../../../frame/scripts/UI/Panel/BaseTeacherPanel';
import SubmissionPanel from '../../../../frame/scripts/UI/Panel/SubmissionPanel';
import { UIHelp } from '../../../../frame/scripts/Utils/UIHelp';
import { EventType } from '../../Data/EventType';
import { EditorManager } from '../../Manager/EditorManager';
import GeziArea from '../Item/GeziArea';
import IconDrag from '../Item/IconDrag';
import GamePanel from './GamePanel';

const { ccclass, property } = cc._decorator;

@ccclass
export default class TeacherPanel extends BaseTeacherPanel {
    public static className = 'TeacherPanel';

    @property(cc.ToggleContainer)
    private toggle_stars: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_replay: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_titleAudio: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_needEnd: cc.ToggleContainer = null;
    @property(cc.ToggleContainer)
    private toggle_geziSize: cc.ToggleContainer = null;
    @property(cc.EditBox)
    private tigan_edit: cc.EditBox = null;
    @property(cc.Node)
    private gezi_1: cc.Node = null;
    @property(cc.Node)
    private gezi_2: cc.Node = null;
    @property(cc.Prefab)
    private gezi_prefab_1: cc.Prefab = null;
    @property(cc.Prefab)
    private gezi_prefab_2: cc.Prefab = null;
    @property(cc.Node)
    private mask_1: cc.Node = null;
    @property(cc.Node)
    private mask_2: cc.Node = null;
    @property(cc.Node)
    private mask_3: cc.Node = null;


    private _btn_save: cc.Node = null;
    private _btn_view: cc.Node = null;

    onLoad() {
        super.onLoad();
        ListenerManager.on(EventType.DRAG_ICON_END, this.onDragMaoziEnd, this);
        ListenerManager.on(EventType.CLICK_ICON, this.onHandleClick, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.DRAG_ICON_END, this.onDragMaoziEnd, this);
        ListenerManager.off(EventType.CLICK_ICON, this.onHandleClick, this);
    }

    start() {
        super.start();

        // 可编辑的游戏，不展示保存按钮
        const isEdit = EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        this._btn_save.active = true;
    }

    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    setPanel() {
        super.setPanel();
        this.toggle_stars.toggleItems[EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.toggle_needEnd.toggleItems[EditorManager.editorData.needEnd ? 0 : 1].isChecked = true;
        this.toggle_geziSize.toggleItems[EditorManager.editorData.geziSize].isChecked = true;
        this.tigan_edit.string = EditorManager.editorData.tigan.toString();

        this.initGeZi();
    }

    // 星级评判开关
    public onToggleStar(toggle: cc.Toggle): void {
        let index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager.editorData.isStarCount = 0 === index;
    }

    // 重玩开关
    public onToggleReplay(toggle: cc.Toggle): void {
        let index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager.editorData.isReplay = 0 === index;
    }

    // 自动播放题干语音开关
    public onToggleTitleAudio(toggle: cc.Toggle): void {
        let index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager.editorData.isPlayTitle = 0 === index;
    }

    //是否需要结算
    private onToggleNeedEnd(toggle: cc.Toggle): void {
        let index = this.toggle_needEnd.toggleItems.indexOf(toggle);
        EditorManager.editorData.needEnd = 0 === index;
    }

    // 格子大小
    private onToggleGeziSize(toggle: cc.Toggle): void {
        let index = this.toggle_geziSize.toggleItems.indexOf(toggle);
        EditorManager.editorData.geziSize = index;
        this.initGeZi();
    }

    onHandleTiganChanged() {
        if (this.tigan_edit.string.length >= 30) {
            UIHelp.showTip("最多输入30个字哦！");
        }
        EditorManager.editorData.tigan = this.tigan_edit.string;
    }

    onHanleTiganEnd() {
        EditorManager.editorData.tigan = this.tigan_edit.string;
    }

    private initGeZi() {
        this.gezi_1.parent.active = EditorManager.editorData.geziSize === 0;
        this.gezi_2.parent.active = EditorManager.editorData.geziSize === 1;
        let geziNode = EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        let geziPrefab = EditorManager.editorData.geziSize === 0 ? this.gezi_prefab_1 : this.gezi_prefab_2;
        let gezirowCount = EditorManager.editorData.geziSize === 0 ? 5 : 6;
        geziNode.removeAllChildren();
        for (let i = 0; i < gezirowCount; i++) {
            for (let j = 0; j < gezirowCount; j++) {
                let gezi = cc.instantiate(geziPrefab);
                gezi.getComponent(GeziArea).row = i;
                gezi.getComponent(GeziArea).col = j;
                gezi.parent = geziNode;
            }
        }
        // 生成二维数组
        EditorManager.editorData.geziIconArr = [];
        for (let i = 0; i < gezirowCount; i++) {
            let arr = [];
            for (let j = 0; j < gezirowCount; j++) {
                arr.push(0);
            }
            EditorManager.editorData.geziIconArr.push(arr);
        }
        this.onDragMaoziEnd();
    }

    private onDragMaoziEnd() {
        let geziNode = EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        let iconType = null;
        for (let i = 0; i < geziNode.childrenCount; i++) {
            let gezi = geziNode.children[i];
            if (gezi.getChildByName("icon_node").childrenCount > 0) {
                iconType = gezi.getChildByName("icon_node").children[0].getComponent(IconDrag).getIndex();
                break;
            }
        }
        if (iconType === null) {
            this.mask_1.active = false;
            this.mask_2.active = false;
            this.mask_3.active = false;
            return;
        } else {
            this.mask_1.active = iconType != 1 && iconType != 2;
            this.mask_2.active = iconType != 3 && iconType != 4;
            this.mask_3.active = iconType != 5 && iconType != 6 && iconType != 7;
        }
        for (let i = 0; i < geziNode.childrenCount; i++) {
            let gezi = geziNode.children[i];
            if (gezi.getChildByName("icon_node").childrenCount > 0) {
                iconType = gezi.getChildByName("icon_node").children[0].getComponent(IconDrag).getIndex();
                EditorManager.editorData.geziIconArr[gezi.getComponent(GeziArea).row][gezi.getComponent(GeziArea).col] = iconType;
            }
        }
    }

    //已经点击的格子
    private clickedGezi: { row: number, col: number } = null;
    private onHandleClick(data) {
        if (this.clickedGezi != null) {
            if (this.clickedGezi.row == data.row && this.clickedGezi.col == data.col) {
                this.clickedGezi = null;
                return;
            } else {
                this.setAnswer(data);
            }
        } else {
            this.clickedGezi = data;
        }
    }

    private setAnswer(data) {
        let geziNode = EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        let rowCount = EditorManager.editorData.geziSize === 0 ? 5 : 6;
        //根据行列计算出索引
        let startIndex = this.clickedGezi.row * rowCount + this.clickedGezi.col;
        let endIndex = data.row * rowCount + data.col;
        let answer = [startIndex, endIndex];
        //不考虑顺序，如果已经存在，就删除
        for (let i = 0; i < EditorManager.editorData.answerArr.length; i++) {
            let arr = EditorManager.editorData.answerArr[i];
            if (arr[0] == endIndex && arr[1] == startIndex) {
                EditorManager.editorData.answerArr.splice(i, 1);
                this.clickedGezi = null;
                geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag).showHighLight(false);
                geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag).showHighLight(false);
                this.drawLine();
                return;
            } else if (arr[0] == startIndex && arr[1] == endIndex) {
                EditorManager.editorData.answerArr.splice(i, 1);
                this.clickedGezi = null;
                geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag).showHighLight(false);
                geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag).showHighLight(false);
                this.drawLine();
                return;
            }
        }
        EditorManager.editorData.answerArr.push(answer);
        this.clickedGezi = null;
        geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag).showHighLight(false);
        geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag).showHighLight(false);
        this.drawLine();
    }

    private drawLine() {
        let geziNode = EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        let draw_node = geziNode.parent.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (let i = 0; i < EditorManager.editorData.answerArr.length; i++) {
            let arr = EditorManager.editorData.answerArr[i];
            let startIndex = arr[0];
            let endIndex = arr[1];
            let startPos = geziNode.children[startIndex].position;
            let endPos = geziNode.children[endIndex].position;
            let lineNode = new cc.Node();
            lineNode.addComponent(cc.Graphics);
            lineNode.parent = draw_node;
            let graphics = lineNode.getComponent(cc.Graphics);
            graphics.strokeColor = cc.Color.WHITE;
            graphics.fillColor = cc.Color.WHITE;
            graphics.lineWidth = 20;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
        }
    }

    // 保存课件按钮
    public onBtnSaveClicked() {
        const isEdit = EditorManager.isSupportEdit();
        if (!isEdit || ReportManager.isAllOver) {
            UIHelp.showSubmissionPanel();
        } else {
            UIHelp.showTip('请先完成一遍题目');
        }
    }
    // 预览课件按钮
    public onBtnViewClicked() {
        if (
            -1 === EditorManager.getCoursewareLevel() ||
            null === EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager.getCoursewareLevel()
        ) {
            UIHelp.showTip('请先设置coursewareLevel');
        } else {
            ListenerManager.dispatch(FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager.showUI(GamePanel);
        }
    }
}
