
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUNwRixpRkFBZ0Y7QUFDaEYseUVBQXdFO0FBQ3hFLHdGQUFtRjtBQUVuRixpRUFBZ0U7QUFDaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCw2Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUF3UUM7UUFwUVcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRTdDLG9CQUFjLEdBQXVCLElBQUksQ0FBQztRQUUxQyxxQkFBZSxHQUF1QixJQUFJLENBQUM7UUFFM0MsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQXlJbEMsU0FBUztRQUNELGlCQUFXLEdBQWlDLElBQUksQ0FBQzs7SUE4RjdELENBQUM7SUF0T0csNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsaUNBQWUsQ0FBQyxF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QUFDLGVBQWUsQ0FBQzsyREFDd0I7SUFFckQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3REFDcUI7SUFFbEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQzt5REFDc0I7SUFFbkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztvREFDaUI7SUFFdEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ29CO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ29CO0lBRXhDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNhO0lBNUJkLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F3UWhDO0lBQUQsbUJBQUM7Q0F4UUQsQUF3UUMsQ0F4UXlDLDBCQUFnQixHQXdRekQ7a0JBeFFvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBCYXNlVGVhY2hlclBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVUkvUGFuZWwvQmFzZVRlYWNoZXJQYW5lbCc7XG5pbXBvcnQgU3VibWlzc2lvblBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVUkvUGFuZWwvU3VibWlzc2lvblBhbmVsJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvVXRpbHMvVUlIZWxwJztcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRXZlbnRUeXBlJztcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IEdlemlBcmVhIGZyb20gJy4uL0l0ZW0vR2V6aUFyZWEnO1xuaW1wb3J0IEljb25EcmFnIGZyb20gJy4uL0l0ZW0vSWNvbkRyYWcnO1xuaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuL0dhbWVQYW5lbCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZWFjaGVyUGFuZWwgZXh0ZW5kcyBCYXNlVGVhY2hlclBhbmVsIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUZWFjaGVyUGFuZWwnO1xuXG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9zdGFyczogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3JlcGxheTogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3RpdGxlQXVkaW86IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9uZWVkRW5kOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfZ2V6aVNpemU6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgcHJpdmF0ZSB0aWdhbl9lZGl0OiBjYy5FZGl0Qm94ID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGdlemlfMTogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBnZXppXzI6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBnZXppX3ByZWZhYl8xOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBnZXppX3ByZWZhYl8yOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWFza18xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG1hc2tfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtYXNrXzM6IGNjLk5vZGUgPSBudWxsO1xuXG5cbiAgICBwcml2YXRlIF9idG5fc2F2ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3ZpZXc6IGNjLk5vZGUgPSBudWxsO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBzdXBlci5vbkxvYWQoKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5EUkFHX0lDT05fRU5ELCB0aGlzLm9uRHJhZ01hb3ppRW5kLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5DTElDS19JQ09OLCB0aGlzLm9uSGFuZGxlQ2xpY2ssIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuRFJBR19JQ09OX0VORCwgdGhpcy5vbkRyYWdNYW96aUVuZCwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX0lDT04sIHRoaXMub25IYW5kbGVDbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XG5cbiAgICAgICAgLy8g5Y+v57yW6L6R55qE5ri45oiP77yM5LiN5bGV56S65L+d5a2Y5oyJ6ZKuXG4gICAgICAgIGNvbnN0IGlzRWRpdCA9IEVkaXRvck1hbmFnZXIuaXNTdXBwb3J0RWRpdCgpO1xuICAgICAgICBpZiAodGhpcy5fYnRuX3NhdmUpIHtcbiAgICAgICAgICAgIHRoaXMuX2J0bl9zYXZlLmFjdGl2ZSA9ICFpc0VkaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7nlYzpnaLvvIjov5nph4zlt7Lnu4/mi7/liLDkuobnvZHnu5zor7fmsYLmlbDmja7vvIlcbiAgICAgKi9cbiAgICBzZXRQYW5lbCgpIHtcbiAgICAgICAgc3VwZXIuc2V0UGFuZWwoKTtcbiAgICAgICAgdGhpcy50b2dnbGVfc3RhcnMudG9nZ2xlSXRlbXNbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50ID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX3JlcGxheS50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfdGl0bGVBdWRpby50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQbGF5VGl0bGUgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfbmVlZEVuZC50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubmVlZEVuZCA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV9nZXppU2l6ZS50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudGlnYW5fZWRpdC5zdHJpbmcgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW4udG9TdHJpbmcoKTtcblxuICAgICAgICB0aGlzLmluaXRHZVppKCk7XG4gICAgfVxuXG4gICAgLy8g5pif57qn6K+E5Yik5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlU3Rhcih0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1N0YXJDb3VudCA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOmHjeeOqeW8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVJlcGxheSh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9yZXBsYXkudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNSZXBsYXkgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvLyDoh6rliqjmkq3mlL7popjlubLor63pn7PlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVUaXRsZUF1ZGlvKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3RpdGxlQXVkaW8udG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNQbGF5VGl0bGUgPSAwID09PSBpbmRleDtcbiAgICB9XG5cbiAgICAvL+aYr+WQpumcgOimgee7k+eul1xuICAgIHByaXZhdGUgb25Ub2dnbGVOZWVkRW5kKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX25lZWRFbmQudG9nZ2xlSXRlbXMuaW5kZXhPZih0b2dnbGUpO1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubmVlZEVuZCA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOagvOWtkOWkp+Wwj1xuICAgIHByaXZhdGUgb25Ub2dnbGVHZXppU2l6ZSh0b2dnbGU6IGNjLlRvZ2dsZSk6IHZvaWQge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnRvZ2dsZV9nZXppU2l6ZS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9IGluZGV4O1xuICAgICAgICB0aGlzLmluaXRHZVppKCk7XG4gICAgfVxuXG4gICAgb25IYW5kbGVUaWdhbkNoYW5nZWQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRpZ2FuX2VkaXQuc3RyaW5nLmxlbmd0aCA+PSAzMCkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoXCLmnIDlpJrovpPlhaUzMOS4quWtl+WTpu+8gVwiKTtcbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW4gPSB0aGlzLnRpZ2FuX2VkaXQuc3RyaW5nO1xuICAgIH1cblxuICAgIG9uSGFubGVUaWdhbkVuZCgpIHtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLnRpZ2FuID0gdGhpcy50aWdhbl9lZGl0LnN0cmluZztcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRHZVppKCkge1xuICAgICAgICB0aGlzLmdlemlfMS5wYXJlbnQuYWN0aXZlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwO1xuICAgICAgICB0aGlzLmdlemlfMi5wYXJlbnQuYWN0aXZlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAxO1xuICAgICAgICBsZXQgZ2V6aU5vZGUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDAgPyB0aGlzLmdlemlfMSA6IHRoaXMuZ2V6aV8yO1xuICAgICAgICBsZXQgZ2V6aVByZWZhYiA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IHRoaXMuZ2V6aV9wcmVmYWJfMSA6IHRoaXMuZ2V6aV9wcmVmYWJfMjtcbiAgICAgICAgbGV0IGdlemlyb3dDb3VudCA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IDUgOiA2O1xuICAgICAgICBnZXppTm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlemlyb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdlemlyb3dDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGdlemkgPSBjYy5pbnN0YW50aWF0ZShnZXppUHJlZmFiKTtcbiAgICAgICAgICAgICAgICBnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkucm93ID0gaTtcbiAgICAgICAgICAgICAgICBnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkuY29sID0gajtcbiAgICAgICAgICAgICAgICBnZXppLnBhcmVudCA9IGdlemlOb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOeUn+aIkOS6jOe7tOaVsOe7hFxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXppcm93Q291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZXppcm93Q291bnQ7IGorKykge1xuICAgICAgICAgICAgICAgIGFyci5wdXNoKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlJY29uQXJyLnB1c2goYXJyKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uRHJhZ01hb3ppRW5kKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkRyYWdNYW96aUVuZCgpIHtcbiAgICAgICAgbGV0IGdlemlOb2RlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gdGhpcy5nZXppXzEgOiB0aGlzLmdlemlfMjtcbiAgICAgICAgbGV0IGljb25UeXBlID0gbnVsbDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZXppTm9kZS5jaGlsZHJlbkNvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBnZXppID0gZ2V6aU5vZGUuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoZ2V6aS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlbkNvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIGljb25UeXBlID0gZ2V6aS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLmdldEluZGV4KCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGljb25UeXBlID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tfMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubWFza18yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYXNrXzMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm1hc2tfMS5hY3RpdmUgPSBpY29uVHlwZSAhPSAxICYmIGljb25UeXBlICE9IDI7XG4gICAgICAgICAgICB0aGlzLm1hc2tfMi5hY3RpdmUgPSBpY29uVHlwZSAhPSAzICYmIGljb25UeXBlICE9IDQ7XG4gICAgICAgICAgICB0aGlzLm1hc2tfMy5hY3RpdmUgPSBpY29uVHlwZSAhPSA1ICYmIGljb25UeXBlICE9IDYgJiYgaWNvblR5cGUgIT0gNztcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlemlOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdlemkgPSBnZXppTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChnZXppLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWNvblR5cGUgPSBnZXppLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuZ2V0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnJbZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLnJvd11bZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLmNvbF0gPSBpY29uVHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8v5bey57uP54K55Ye755qE5qC85a2QXG4gICAgcHJpdmF0ZSBjbGlja2VkR2V6aTogeyByb3c6IG51bWJlciwgY29sOiBudW1iZXIgfSA9IG51bGw7XG4gICAgcHJpdmF0ZSBvbkhhbmRsZUNsaWNrKGRhdGEpIHtcbiAgICAgICAgaWYgKHRoaXMuY2xpY2tlZEdlemkgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tlZEdlemkucm93ID09IGRhdGEucm93ICYmIHRoaXMuY2xpY2tlZEdlemkuY29sID09IGRhdGEuY29sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja2VkR2V6aSA9IG51bGw7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFuc3dlcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xpY2tlZEdlemkgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzZXRBbnN3ZXIoZGF0YSkge1xuICAgICAgICBsZXQgZ2V6aU5vZGUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDAgPyB0aGlzLmdlemlfMSA6IHRoaXMuZ2V6aV8yO1xuICAgICAgICBsZXQgcm93Q291bnQgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDAgPyA1IDogNjtcbiAgICAgICAgLy/moLnmja7ooYzliJforqHnrpflh7rntKLlvJVcbiAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSB0aGlzLmNsaWNrZWRHZXppLnJvdyAqIHJvd0NvdW50ICsgdGhpcy5jbGlja2VkR2V6aS5jb2w7XG4gICAgICAgIGxldCBlbmRJbmRleCA9IGRhdGEucm93ICogcm93Q291bnQgKyBkYXRhLmNvbDtcbiAgICAgICAgbGV0IGFuc3dlciA9IFtzdGFydEluZGV4LCBlbmRJbmRleF07XG4gICAgICAgIC8v5LiN6ICD6JmR6aG65bqP77yM5aaC5p6c5bey57uP5a2Y5Zyo77yM5bCx5Yig6ZmkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFyciA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnJbaV07XG4gICAgICAgICAgICBpZiAoYXJyWzBdID09IGVuZEluZGV4ICYmIGFyclsxXSA9PSBzdGFydEluZGV4KSB7XG4gICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFyci5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja2VkR2V6aSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZ2V6aU5vZGUuY2hpbGRyZW5bc3RhcnRJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEljb25EcmFnKS5zaG93SGlnaExpZ2h0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICBnZXppTm9kZS5jaGlsZHJlbltlbmRJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEljb25EcmFnKS5zaG93SGlnaExpZ2h0KGZhbHNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhcnJbMF0gPT0gc3RhcnRJbmRleCAmJiBhcnJbMV0gPT0gZW5kSW5kZXgpIHtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRHZXppID0gbnVsbDtcbiAgICAgICAgICAgICAgICBnZXppTm9kZS5jaGlsZHJlbltzdGFydEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFyci5wdXNoKGFuc3dlcik7XG4gICAgICAgIHRoaXMuY2xpY2tlZEdlemkgPSBudWxsO1xuICAgICAgICBnZXppTm9kZS5jaGlsZHJlbltzdGFydEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICBnZXppTm9kZS5jaGlsZHJlbltlbmRJbmRleF0uZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEljb25EcmFnKS5zaG93SGlnaExpZ2h0KGZhbHNlKTtcbiAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgZHJhd0xpbmUoKSB7XG4gICAgICAgIGxldCBnZXppTm9kZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IHRoaXMuZ2V6aV8xIDogdGhpcy5nZXppXzI7XG4gICAgICAgIGxldCBkcmF3X25vZGUgPSBnZXppTm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJkcmF3X25vZGVcIik7XG4gICAgICAgIGRyYXdfbm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBhcnIgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyW2ldO1xuICAgICAgICAgICAgbGV0IHN0YXJ0SW5kZXggPSBhcnJbMF07XG4gICAgICAgICAgICBsZXQgZW5kSW5kZXggPSBhcnJbMV07XG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBnZXppTm9kZS5jaGlsZHJlbltzdGFydEluZGV4XS5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBnZXppTm9kZS5jaGlsZHJlbltlbmRJbmRleF0ucG9zaXRpb247XG4gICAgICAgICAgICBsZXQgbGluZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGxpbmVOb2RlLnBhcmVudCA9IGRyYXdfbm9kZTtcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IGxpbmVOb2RlLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgZ3JhcGhpY3MuZmlsbENvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAyMDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XG4gICAgICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDkv53lrZjor77ku7bmjInpkq5cbiAgICBwdWJsaWMgb25CdG5TYXZlQ2xpY2tlZCgpIHtcbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOWujOaIkOS4gOmBjemimOebricpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOmihOiniOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blZpZXdDbGlja2VkKCkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgICAtMSA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKSB8fFxuICAgICAgICAgICAgbnVsbCA9PT0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKSB8fFxuICAgICAgICAgICAgdm9pZCAwID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpXG4gICAgICAgICkge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOiuvue9rmNvdXJzZXdhcmVMZXZlbCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5URUFDSEVSX1BBTkVMX0xPQURJTkcsIHRydWUpO1xuICAgICAgICAgICAgVUlNYW5hZ2VyLnNob3dVSShHYW1lUGFuZWwpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19