"use strict";
cc._RF.push(module, 'f73c56FnmVJYpv47A7O8GFZ', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var Role_1 = require("./Role");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.geziType = [];
        _this.tigan = null;
        _this.btn_node = null;
        _this.role_prefab = null;
        _this.btn_submit_disabled = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_ROLE, this.handleClickRole, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_ROLE, this.handleClickRole, this);
    };
    GameUI.prototype.handleEnterGame = function () {
        if (!EditorManager_1.EditorManager.editorData.needEnd) {
            this.node.getChildByName("bg").active = false;
        }
        this.initUI();
    };
    GameUI.prototype.initUI = function () {
        this.geziType.forEach(function (item, index) {
            item.active = false;
        });
        this.geziType[EditorManager_1.EditorManager.editorData.geziSize].active = true;
        this.showRole();
        this.drawLine();
    };
    GameUI.prototype.showRole = function () {
        var _this = this;
        var roleParent = this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node");
        var rowCount = EditorManager_1.EditorManager.editorData.geziSize === 0 ? 5 : 6;
        for (var i = 0; i < rowCount; i++) {
            for (var j = 0; j < rowCount; j++) {
                if (EditorManager_1.EditorManager.editorData.geziIconArr[i][j] != 0) {
                    var roleNode = cc.instantiate(this.role_prefab);
                    roleNode.parent = roleParent;
                    var childrenIndex = i * rowCount + j;
                    roleNode.name = "role_" + childrenIndex;
                    var pos = this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("gezi").children[childrenIndex].position;
                    roleNode.position = pos;
                    var role = roleNode.getComponent(Role_1.default);
                    role.type = EditorManager_1.EditorManager.editorData.geziIconArr[i][j];
                    role.geziIndex = childrenIndex;
                    role.showInit();
                }
            }
        }
        this.scheduleOnce(function () {
            _this.showTigan();
        }, 0.5);
    };
    GameUI.prototype.handleClickRole = function (data) {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole == null) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = data;
        }
        else {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole == data) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
            }
            else {
                this.UpdateLine(data);
            }
        }
        for (var i = 0; i < this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node").childrenCount; i++) {
            this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node").children[i].getComponent(Role_1.default).initRole();
        }
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole != null) {
            var roleNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node").getChildByName("role_" + SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole);
            roleNode.getComponent(Role_1.default).showClick();
        }
    };
    GameUI.prototype.UpdateLine = function (data) {
        var selfAnswer = [SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole, data];
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            if (answer[0] == selfAnswer[0] && answer[1] == selfAnswer[1]) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
                SoundManager_1.SoundManager.playEffect("连线消失的音效", false);
                this.drawLine();
                return;
            }
            else if (answer[0] == selfAnswer[1] && answer[1] == selfAnswer[0]) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
                SoundManager_1.SoundManager.playEffect("连线消失的音效", false);
                this.drawLine();
                return;
            }
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.push(selfAnswer);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
        SoundManager_1.SoundManager.playEffect("出现连线的音效", false);
        this.drawLine();
    };
    GameUI.prototype.drawLine = function () {
        this.btn_submit_disabled.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length == 0;
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var draw_node = geziNode.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            var startPos = startNode.position;
            var endPos = endNode.position;
            var lineNode = new cc.Node();
            lineNode.parent = draw_node;
            var graphics = lineNode.addComponent(cc.Graphics);
            graphics.lineWidth = 20;
            graphics.strokeColor = cc.Color.WHITE;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
        }
    };
    GameUI.prototype.showTigan = function () {
        var _this = this;
        this.tigan.string = EditorManager_1.EditorManager.editorData.tigan;
        this.tigan.node.parent.active = EditorManager_1.EditorManager.editorData.tigan.length > 0;
        this.scheduleOnce(function () {
            _this.showBtn();
        }, 0.5);
    };
    GameUI.prototype.showBtn = function () {
        this.btn_node.active = true;
    };
    GameUI.prototype.onClickReset = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr = [];
        this.drawLine();
    };
    GameUI.prototype.onClickSubmit = function () {
        UIHelp_1.UIHelp.showMask();
        var selfAnswerArr = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr;
        var answerArr = EditorManager_1.EditorManager.editorData.answerArr;
        if (selfAnswerArr.length == answerArr.length) {
            var isAllRight = true;
            for (var i = 0; i < selfAnswerArr.length; i++) {
                var answer = selfAnswerArr[i];
                if (!this.isInArray(answerArr, answer)) {
                    isAllRight = false;
                    this.drawRedLine(selfAnswerArr[i]);
                }
            }
            if (isAllRight) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
                SoundManager_1.SoundManager.playEffect("正确音效", false);
                this.onTrueEffect();
            }
            else {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
                SoundManager_1.SoundManager.playEffect("错误音效", false);
            }
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
            SoundManager_1.SoundManager.playEffect("错误音效", false);
            for (var i = 0; i < selfAnswerArr.length; i++) {
                var answer = selfAnswerArr[i];
                if (!this.isInArray(answerArr, answer)) {
                    this.drawRedLine(selfAnswerArr[i]);
                }
            }
        }
    };
    //判断元素是否在数组中
    GameUI.prototype.isInArray = function (arr, value) {
        //不考虑value数组中元素的顺序
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].sort().toString() == value.sort().toString()) {
                return true;
            }
        }
        return false;
    };
    GameUI.prototype.drawRedLine = function (answerArr) {
        var _this = this;
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var draw_node = geziNode.getChildByName("draw_node");
        var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answerArr[0]);
        var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answerArr[1]);
        var startPos = startNode.position;
        var endPos = endNode.position;
        var lineNode = new cc.Node();
        lineNode.parent = draw_node;
        var graphics = lineNode.addComponent(cc.Graphics);
        graphics.lineWidth = 20;
        graphics.strokeColor = cc.Color.RED;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();
        this.scheduleOnce(function () {
            _this.delInArray(answerArr);
            SoundManager_1.SoundManager.playEffect("连线消失的音效", false);
            lineNode.destroy();
            _this.drawLine();
            UIHelp_1.UIHelp.closeMask();
        }, 0.5);
    };
    GameUI.prototype.delInArray = function (value) {
        //不考虑value数组中元素的顺序
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i].sort().toString() == value.sort().toString()) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                return;
            }
        }
    };
    GameUI.prototype.onTrueEffect = function () {
        var _this = this;
        this.drawGreenLine();
        this.scheduleOnce(function () {
            _this.moveRole();
        }, 0.5);
    };
    GameUI.prototype.moveRole = function () {
        var _this = this;
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var _loop_1 = function (i) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            var index1 = startNode.getComponent(Role_1.default).type;
            var index2 = endNode.getComponent(Role_1.default).type;
            var startRole = startNode;
            var endRole = endNode;
            if (index1 > index2) {
                startRole = endNode;
                endRole = startNode;
            }
            cc.tween(startRole).to(0.5, { position: endRole.position }).call(function () {
                endRole.getComponent(Role_1.default).showChange();
                startRole.opacity = 0;
                _this.scheduleOnce(function () {
                    _this.gameOver();
                }, 2.5);
            }).start();
        };
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            _loop_1(i);
        }
    };
    GameUI.prototype.drawGreenLine = function () {
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var draw_node = geziNode.getChildByName("draw_node");
        draw_node.removeAllChildren();
        var _loop_2 = function (i) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            var startPos = startNode.position;
            var endPos = endNode.position;
            var lineNode = new cc.Node();
            lineNode.parent = draw_node;
            var graphics = lineNode.addComponent(cc.Graphics);
            graphics.lineWidth = 20;
            graphics.strokeColor = cc.Color.GREEN;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
            this_1.scheduleOnce(function () {
                lineNode.destroy();
            }, 0.5);
        };
        var this_1 = this;
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            _loop_2(i);
        }
    };
    GameUI.prototype.gameOver = function () {
        if (EditorManager_1.EditorManager.editorData.needEnd) {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
        }
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "geziType", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "tigan", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_node", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameUI.prototype, "role_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_submit_disabled", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

cc._RF.pop();