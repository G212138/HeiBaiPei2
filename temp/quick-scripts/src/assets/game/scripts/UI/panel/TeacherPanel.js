"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var ReportManager_1 = require("../../../../frame/scripts/Manager/ReportManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GeziArea_1 = require("../Item/GeziArea");
var IconDrag_1 = require("../Item/IconDrag");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.toggle_needEnd = null;
        _this.toggle_geziSize = null;
        _this.tigan_edit = null;
        _this.gezi_1 = null;
        _this.gezi_2 = null;
        _this.gezi_prefab_1 = null;
        _this.gezi_prefab_2 = null;
        _this.mask_1 = null;
        _this.mask_2 = null;
        _this.mask_3 = null;
        _this._btn_save = null;
        _this._btn_view = null;
        //已经点击的格子
        _this.clickedGezi = null;
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_ICON_END, this.onDragMaoziEnd, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_ICON, this.onHandleClick, this);
    };
    TeacherPanel.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_ICON_END, this.onDragMaoziEnd, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_ICON, this.onHandleClick, this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        this._btn_save.active = true;
    };
    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.toggle_needEnd.toggleItems[EditorManager_1.EditorManager.editorData.needEnd ? 0 : 1].isChecked = true;
        this.toggle_geziSize.toggleItems[EditorManager_1.EditorManager.editorData.geziSize].isChecked = true;
        this.tigan_edit.string = EditorManager_1.EditorManager.editorData.tigan.toString();
        this.initGeZi();
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    //是否需要结算
    TeacherPanel.prototype.onToggleNeedEnd = function (toggle) {
        var index = this.toggle_needEnd.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.needEnd = 0 === index;
    };
    // 格子大小
    TeacherPanel.prototype.onToggleGeziSize = function (toggle) {
        var index = this.toggle_geziSize.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.geziSize = index;
        this.initGeZi();
    };
    TeacherPanel.prototype.onHandleTiganChanged = function () {
        if (this.tigan_edit.string.length >= 30) {
            UIHelp_1.UIHelp.showTip("最多输入30个字哦！");
        }
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.onHanleTiganEnd = function () {
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.initGeZi = function () {
        this.gezi_1.parent.active = EditorManager_1.EditorManager.editorData.geziSize === 0;
        this.gezi_2.parent.active = EditorManager_1.EditorManager.editorData.geziSize === 1;
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var geziPrefab = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_prefab_1 : this.gezi_prefab_2;
        var gezirowCount = EditorManager_1.EditorManager.editorData.geziSize === 0 ? 5 : 6;
        geziNode.removeAllChildren();
        for (var i = 0; i < gezirowCount; i++) {
            for (var j = 0; j < gezirowCount; j++) {
                var gezi = cc.instantiate(geziPrefab);
                gezi.getComponent(GeziArea_1.default).row = i;
                gezi.getComponent(GeziArea_1.default).col = j;
                gezi.parent = geziNode;
            }
        }
        // 生成二维数组
        EditorManager_1.EditorManager.editorData.geziIconArr = [];
        for (var i = 0; i < gezirowCount; i++) {
            var arr = [];
            for (var j = 0; j < gezirowCount; j++) {
                arr.push(0);
            }
            EditorManager_1.EditorManager.editorData.geziIconArr.push(arr);
        }
        this.onDragMaoziEnd();
    };
    TeacherPanel.prototype.onDragMaoziEnd = function () {
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var iconType = null;
        for (var i = 0; i < geziNode.childrenCount; i++) {
            var gezi = geziNode.children[i];
            if (gezi.getChildByName("icon_node").childrenCount > 0) {
                iconType = gezi.getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).getIndex();
                break;
            }
        }
        if (iconType === null) {
            this.mask_1.active = false;
            this.mask_2.active = false;
            this.mask_3.active = false;
            return;
        }
        else {
            this.mask_1.active = iconType != 1 && iconType != 2;
            this.mask_2.active = iconType != 3 && iconType != 4;
            this.mask_3.active = iconType != 5 && iconType != 6 && iconType != 7;
        }
        for (var i = 0; i < geziNode.childrenCount; i++) {
            var gezi = geziNode.children[i];
            if (gezi.getChildByName("icon_node").childrenCount > 0) {
                iconType = gezi.getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).getIndex();
                EditorManager_1.EditorManager.editorData.geziIconArr[gezi.getComponent(GeziArea_1.default).row][gezi.getComponent(GeziArea_1.default).col] = iconType;
            }
        }
    };
    TeacherPanel.prototype.onHandleClick = function (data) {
        if (this.clickedGezi != null) {
            if (this.clickedGezi.row == data.row && this.clickedGezi.col == data.col) {
                this.clickedGezi = null;
                return;
            }
            else {
                this.setAnswer(data);
            }
        }
        else {
            this.clickedGezi = data;
        }
    };
    TeacherPanel.prototype.setAnswer = function (data) {
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var rowCount = EditorManager_1.EditorManager.editorData.geziSize === 0 ? 5 : 6;
        //根据行列计算出索引
        var startIndex = this.clickedGezi.row * rowCount + this.clickedGezi.col;
        var endIndex = data.row * rowCount + data.col;
        var answer = [startIndex, endIndex];
        //不考虑顺序，如果已经存在，就删除
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.answerArr.length; i++) {
            var arr = EditorManager_1.EditorManager.editorData.answerArr[i];
            if (arr[0] == endIndex && arr[1] == startIndex) {
                EditorManager_1.EditorManager.editorData.answerArr.splice(i, 1);
                this.clickedGezi = null;
                geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                this.drawLine();
                return;
            }
            else if (arr[0] == startIndex && arr[1] == endIndex) {
                EditorManager_1.EditorManager.editorData.answerArr.splice(i, 1);
                this.clickedGezi = null;
                geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                this.drawLine();
                return;
            }
        }
        EditorManager_1.EditorManager.editorData.answerArr.push(answer);
        this.clickedGezi = null;
        geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
        geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
        this.drawLine();
    };
    TeacherPanel.prototype.drawLine = function () {
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var draw_node = geziNode.parent.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.answerArr.length; i++) {
            var arr = EditorManager_1.EditorManager.editorData.answerArr[i];
            var startIndex = arr[0];
            var endIndex = arr[1];
            var startPos = geziNode.children[startIndex].position;
            var endPos = geziNode.children[endIndex].position;
            var lineNode = new cc.Node();
            lineNode.addComponent(cc.Graphics);
            lineNode.parent = draw_node;
            var graphics = lineNode.getComponent(cc.Graphics);
            graphics.strokeColor = cc.Color.WHITE;
            graphics.fillColor = cc.Color.WHITE;
            graphics.lineWidth = 20;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
        }
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
        }
    };
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_needEnd", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_geziSize", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "tigan_edit", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "gezi_1", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "gezi_2", void 0);
    __decorate([
        property(cc.Prefab)
    ], TeacherPanel.prototype, "gezi_prefab_1", void 0);
    __decorate([
        property(cc.Prefab)
    ], TeacherPanel.prototype, "gezi_prefab_2", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "mask_1", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "mask_2", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "mask_3", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

cc._RF.pop();