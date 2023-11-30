
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
            else {
                EditorManager_1.EditorManager.editorData.geziIconArr[gezi.getComponent(GeziArea_1.default).row][gezi.getComponent(GeziArea_1.default).col] = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUNwRixpRkFBZ0Y7QUFDaEYseUVBQXdFO0FBQ3hFLHdGQUFtRjtBQUVuRixpRUFBZ0U7QUFDaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCw2Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUEwUUM7UUF0UVcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRTdDLG9CQUFjLEdBQXVCLElBQUksQ0FBQztRQUUxQyxxQkFBZSxHQUF1QixJQUFJLENBQUM7UUFFM0MsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQTJJbEMsU0FBUztRQUNELGlCQUFXLEdBQWlDLElBQUksQ0FBQzs7SUE4RjdELENBQUM7SUF4T0csNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsaUNBQWUsQ0FBQyxF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O0lBQ0wsQ0FBQztJQXhRYSxzQkFBUyxHQUFHLGNBQWMsQ0FBQztJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3NEQUNtQjtJQUVoRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3VEQUNvQjtJQUVqRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDOzJEQUN3QjtJQUVyRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3dEQUNxQjtJQUVsRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3lEQUNzQjtJQUVuRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO29EQUNpQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2E7SUE1QmQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTBRaEM7SUFBRCxtQkFBQztDQTFRRCxBQTBRQyxDQTFReUMsMEJBQWdCLEdBMFF6RDtrQkExUW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IEJhc2VUZWFjaGVyUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9CYXNlVGVhY2hlclBhbmVsJztcbmltcG9ydCBTdWJtaXNzaW9uUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9TdWJtaXNzaW9uUGFuZWwnO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgR2V6aUFyZWEgZnJvbSAnLi4vSXRlbS9HZXppQXJlYSc7XG5pbXBvcnQgSWNvbkRyYWcgZnJvbSAnLi4vSXRlbS9JY29uRHJhZyc7XG5pbXBvcnQgR2FtZVBhbmVsIGZyb20gJy4vR2FtZVBhbmVsJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYWNoZXJQYW5lbCBleHRlbmRzIEJhc2VUZWFjaGVyUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ1RlYWNoZXJQYW5lbCc7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3N0YXJzOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfcmVwbGF5OiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfdGl0bGVBdWRpbzogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX25lZWRFbmQ6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9nZXppU2l6ZTogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHRpZ2FuX2VkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2V6aV8xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGdlemlfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGdlemlfcHJlZmFiXzE6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGdlemlfcHJlZmFiXzI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtYXNrXzE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWFza18yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG1hc2tfMzogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgX2J0bl9zYXZlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9idG5fdmlldzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkRSQUdfSUNPTl9FTkQsIHRoaXMub25EcmFnTWFvemlFbmQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkNMSUNLX0lDT04sIHRoaXMub25IYW5kbGVDbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5EUkFHX0lDT05fRU5ELCB0aGlzLm9uRHJhZ01hb3ppRW5kLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuQ0xJQ0tfSUNPTiwgdGhpcy5vbkhhbmRsZUNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyDlj6/nvJbovpHnmoTmuLjmiI/vvIzkuI3lsZXnpLrkv53lrZjmjInpkq5cbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICh0aGlzLl9idG5fc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gIWlzRWRpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueVjOmdou+8iOi/memHjOW3sue7j+aLv+WIsOS6hue9kee7nOivt+axguaVsOaNru+8iVxuICAgICAqL1xuICAgIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfcmVwbGF5LnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV90aXRsZUF1ZGlvLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV9uZWVkRW5kLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5uZWVkRW5kID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX2dlemlTaXplLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aWdhbl9lZGl0LnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbi50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuaW5pdEdlWmkoKTtcbiAgICB9XG5cbiAgICAvLyDmmJ/nuqfor4TliKTlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVTdGFyKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3N0YXJzLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50ID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g6YeN546p5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlUmVwbGF5KHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3JlcGxheS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOiHquWKqOaSreaUvumimOW5suivremfs+W8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVRpdGxlQXVkaW8odG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfdGl0bGVBdWRpby50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8v5piv5ZCm6ZyA6KaB57uT566XXG4gICAgcHJpdmF0ZSBvblRvZ2dsZU5lZWRFbmQodG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfbmVlZEVuZC50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5uZWVkRW5kID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g5qC85a2Q5aSn5bCPXG4gICAgcHJpdmF0ZSBvblRvZ2dsZUdlemlTaXplKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX2dlemlTaXplLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID0gaW5kZXg7XG4gICAgICAgIHRoaXMuaW5pdEdlWmkoKTtcbiAgICB9XG5cbiAgICBvbkhhbmRsZVRpZ2FuQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGlnYW5fZWRpdC5zdHJpbmcubGVuZ3RoID49IDMwKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcChcIuacgOWkmui+k+WFpTMw5Liq5a2X5ZOm77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbiA9IHRoaXMudGlnYW5fZWRpdC5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5sZVRpZ2FuRW5kKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW4gPSB0aGlzLnRpZ2FuX2VkaXQuc3RyaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdlWmkoKSB7XG4gICAgICAgIHRoaXMuZ2V6aV8xLnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDA7XG4gICAgICAgIHRoaXMuZ2V6aV8yLnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDE7XG4gICAgICAgIGxldCBnZXppTm9kZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IHRoaXMuZ2V6aV8xIDogdGhpcy5nZXppXzI7XG4gICAgICAgIGxldCBnZXppUHJlZmFiID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gdGhpcy5nZXppX3ByZWZhYl8xIDogdGhpcy5nZXppX3ByZWZhYl8yO1xuICAgICAgICBsZXQgZ2V6aXJvd0NvdW50ID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gNSA6IDY7XG4gICAgICAgIGdlemlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V6aXJvd0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V6aXJvd0NvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V6aSA9IGNjLmluc3RhbnRpYXRlKGdlemlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIGdlemkuZ2V0Q29tcG9uZW50KEdlemlBcmVhKS5yb3cgPSBpO1xuICAgICAgICAgICAgICAgIGdlemkuZ2V0Q29tcG9uZW50KEdlemlBcmVhKS5jb2wgPSBqO1xuICAgICAgICAgICAgICAgIGdlemkucGFyZW50ID0gZ2V6aU5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5LqM57u05pWw57uEXG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlemlyb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdlemlyb3dDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnIucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25EcmFnTWFvemlFbmQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRHJhZ01hb3ppRW5kKCkge1xuICAgICAgICBsZXQgZ2V6aU5vZGUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDAgPyB0aGlzLmdlemlfMSA6IHRoaXMuZ2V6aV8yO1xuICAgICAgICBsZXQgaWNvblR5cGUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlemlOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdlemkgPSBnZXppTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChnZXppLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWNvblR5cGUgPSBnZXppLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuZ2V0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWNvblR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWFza18xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYXNrXzIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1hc2tfMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFza18xLmFjdGl2ZSA9IGljb25UeXBlICE9IDEgJiYgaWNvblR5cGUgIT0gMjtcbiAgICAgICAgICAgIHRoaXMubWFza18yLmFjdGl2ZSA9IGljb25UeXBlICE9IDMgJiYgaWNvblR5cGUgIT0gNDtcbiAgICAgICAgICAgIHRoaXMubWFza18zLmFjdGl2ZSA9IGljb25UeXBlICE9IDUgJiYgaWNvblR5cGUgIT0gNiAmJiBpY29uVHlwZSAhPSA3O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V6aU5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ2V6aSA9IGdlemlOb2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGdlemkuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBpY29uVHlwZSA9IGdlemkuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEljb25EcmFnKS5nZXRJbmRleCgpO1xuICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFycltnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkucm93XVtnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkuY29sXSA9IGljb25UeXBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnJbZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLnJvd11bZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLmNvbF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/lt7Lnu4/ngrnlh7vnmoTmoLzlrZBcbiAgICBwcml2YXRlIGNsaWNrZWRHZXppOiB7IHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciB9ID0gbnVsbDtcbiAgICBwcml2YXRlIG9uSGFuZGxlQ2xpY2soZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jbGlja2VkR2V6aSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja2VkR2V6aS5yb3cgPT0gZGF0YS5yb3cgJiYgdGhpcy5jbGlja2VkR2V6aS5jb2wgPT0gZGF0YS5jb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRHZXppID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5zd2VyKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkR2V6aSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEFuc3dlcihkYXRhKSB7XG4gICAgICAgIGxldCBnZXppTm9kZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IHRoaXMuZ2V6aV8xIDogdGhpcy5nZXppXzI7XG4gICAgICAgIGxldCByb3dDb3VudCA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IDUgOiA2O1xuICAgICAgICAvL+agueaNruihjOWIl+iuoeeul+WHuue0ouW8lVxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuY2xpY2tlZEdlemkucm93ICogcm93Q291bnQgKyB0aGlzLmNsaWNrZWRHZXppLmNvbDtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gZGF0YS5yb3cgKiByb3dDb3VudCArIGRhdGEuY29sO1xuICAgICAgICBsZXQgYW5zd2VyID0gW3N0YXJ0SW5kZXgsIGVuZEluZGV4XTtcbiAgICAgICAgLy/kuI3ogIPomZHpobrluo/vvIzlpoLmnpzlt7Lnu4/lrZjlnKjvvIzlsLHliKDpmaRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFycltpXTtcbiAgICAgICAgICAgIGlmIChhcnJbMF0gPT0gZW5kSW5kZXggJiYgYXJyWzFdID09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRHZXppID0gbnVsbDtcbiAgICAgICAgICAgICAgICBnZXppTm9kZS5jaGlsZHJlbltzdGFydEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyclswXSA9PSBzdGFydEluZGV4ICYmIGFyclsxXSA9PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tlZEdlemkgPSBudWxsO1xuICAgICAgICAgICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW3N0YXJ0SW5kZXhdLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuc2hvd0hpZ2hMaWdodChmYWxzZSk7XG4gICAgICAgICAgICAgICAgZ2V6aU5vZGUuY2hpbGRyZW5bZW5kSW5kZXhdLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuc2hvd0hpZ2hMaWdodChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLnB1c2goYW5zd2VyKTtcbiAgICAgICAgdGhpcy5jbGlja2VkR2V6aSA9IG51bGw7XG4gICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW3N0YXJ0SW5kZXhdLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuc2hvd0hpZ2hMaWdodChmYWxzZSk7XG4gICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3TGluZSgpIHtcbiAgICAgICAgbGV0IGdlemlOb2RlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gdGhpcy5nZXppXzEgOiB0aGlzLmdlemlfMjtcbiAgICAgICAgbGV0IGRyYXdfbm9kZSA9IGdlemlOb2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImRyYXdfbm9kZVwiKTtcbiAgICAgICAgZHJhd19ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFyciA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnJbaV07XG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCBlbmRJbmRleCA9IGFyclsxXTtcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGdlemlOb2RlLmNoaWxkcmVuW3N0YXJ0SW5kZXhdLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgbGluZU5vZGUucGFyZW50ID0gZHJhd19ub2RlO1xuICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZFBvcy54LCBlbmRQb3MueSk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS/neWtmOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blNhdmVDbGlja2VkKCkge1xuICAgICAgICBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgaWYgKCFpc0VkaXQgfHwgUmVwb3J0TWFuYWdlci5pc0FsbE92ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI5a6M5oiQ5LiA6YGN6aKY55uuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6aKE6KeI6K++5Lu25oyJ6ZKuXG4gICAgcHVibGljIG9uQnRuVmlld0NsaWNrZWQoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC0xID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICBudWxsID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI6K6+572uY291cnNld2FyZUxldmVsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLlRFQUNIRVJfUEFORUxfTE9BRElORywgdHJ1ZSk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKEdhbWVQYW5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=