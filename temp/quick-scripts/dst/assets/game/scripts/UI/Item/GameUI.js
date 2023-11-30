
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRixpRUFBZ0U7QUFFaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF5U0M7UUF2U1csY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQStSaEQsQ0FBQztJQTdSRyx1QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FB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WUFBWSxDQUFDO2dCQUNkLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7OztRQWxCWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQWpGLENBQUM7U0FtQlQ7SUFDTCxDQUFDO0lBRU8seUJBQVEsR0FBaEI7UUFDSSxJQUFJLDZCQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNsQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQXJTRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUMwQjtJQVYzQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeVMxQjtJQUFELGFBQUM7Q0F6U0QsQUF5U0MsQ0F6U21DLEVBQUUsQ0FBQyxTQUFTLEdBeVMvQztrQkF6U29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgQ3VzdG9tU3luY0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YS9DdXN0b21TeW5jRGF0YVwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vUm9sZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZ2V6aVR5cGU6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aWdhbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHJvbGVfcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9zdWJtaXRfZGlzYWJsZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmluaXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0xJQ0tfUk9MRSwgdGhpcy5oYW5kbGVDbGlja1JvbGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMuaW5pdFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX1JPTEUsIHRoaXMuaGFuZGxlQ2xpY2tSb2xlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVudGVyR2FtZSgpIHtcclxuICAgICAgICBpZiAoIUVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5uZWVkRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuZ2V6aVR5cGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dSb2xlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1JvbGUoKSB7XHJcbiAgICAgICAgbGV0IHJvbGVQYXJlbnQgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIik7XHJcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gNSA6IDY7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Q291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFycltpXVtqXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlX3ByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5vZGUucGFyZW50ID0gcm9sZVBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW5JbmRleCA9IGkgKiByb3dDb3VudCArIGo7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5vZGUubmFtZSA9IFwicm9sZV9cIiArIGNoaWxkcmVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcImdlemlcIikuY2hpbGRyZW5bY2hpbGRyZW5JbmRleF0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSByb2xlTm9kZS5nZXRDb21wb25lbnQoUm9sZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZS50eXBlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlJY29uQXJyW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGUuZ2V6aUluZGV4ID0gY2hpbGRyZW5JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICByb2xlLnNob3dJbml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaWdhbigpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDbGlja1JvbGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlID0gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9PSBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlTGluZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5pbml0Um9sZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlTm9kZSA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlKTtcclxuICAgICAgICAgICAgcm9sZU5vZGUuZ2V0Q29tcG9uZW50KFJvbGUpLnNob3dDbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZUxpbmUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHNlbGZBbnN3ZXIgPSBbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSwgZGF0YV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyWzBdID09IHNlbGZBbnN3ZXJbMF0gJiYgYW5zd2VyWzFdID09IHNlbGZBbnN3ZXJbMV0pIHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIui/nue6v+a2iOWkseeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyWzBdID09IHNlbGZBbnN3ZXJbMV0gJiYgYW5zd2VyWzFdID09IHNlbGZBbnN3ZXJbMF0pIHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIui/nue6v+a2iOWkseeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5wdXNoKHNlbGZBbnN3ZXIpO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPSBudWxsO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5Ye6546w6L+e57q/55qE6Z+z5pWIXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3TGluZSgpIHtcclxuICAgICAgICB0aGlzLmJ0bl9zdWJtaXRfZGlzYWJsZWQuYWN0aXZlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGggPT0gMDtcclxuXHJcbiAgICAgICAgbGV0IGdlemlOb2RlID0gdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdXHJcbiAgICAgICAgbGV0IGRyYXdfbm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwiZHJhd19ub2RlXCIpO1xyXG4gICAgICAgIGRyYXdfbm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYW5zd2VyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFycltpXTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlclswXSk7XHJcbiAgICAgICAgICAgIGxldCBlbmROb2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgYW5zd2VyWzFdKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gc3RhcnROb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gZW5kTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IGxpbmVOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgbGluZU5vZGUucGFyZW50ID0gZHJhd19ub2RlO1xyXG4gICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAyMDtcclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZFBvcy54LCBlbmRQb3MueSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUaWdhbigpIHtcclxuICAgICAgICB0aGlzLnRpZ2FuLnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbjtcclxuICAgICAgICB0aGlzLnRpZ2FuLm5vZGUucGFyZW50LmFjdGl2ZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbi5sZW5ndGggPiAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QnRuKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5idG5fbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1Jlc2V0KCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIgPSBbXTtcclxuICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1N1Ym1pdCgpIHtcclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICBsZXQgc2VsZkFuc3dlckFyciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnI7XHJcbiAgICAgICAgbGV0IGFuc3dlckFyciA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnI7XHJcbiAgICAgICAgaWYgKHNlbGZBbnN3ZXJBcnIubGVuZ3RoID09IGFuc3dlckFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IGlzQWxsUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBzZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5BcnJheShhbnN3ZXJBcnIsIGFuc3dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0FsbFJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVkTGluZShzZWxmQW5zd2VyQXJyW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNBbGxSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmraPnoa7pn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblRydWVFZmZlY3QoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlciA9IHNlbGZBbnN3ZXJBcnJbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNJbkFycmF5KGFuc3dlckFyciwgYW5zd2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlZExpbmUoc2VsZkFuc3dlckFycltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liKTmlq3lhYPntKDmmK/lkKblnKjmlbDnu4TkuK1cclxuICAgIHByaXZhdGUgaXNJbkFycmF5KGFycjogYW55W11bXSwgdmFsdWU6IGFueVtdKSB7XHJcbiAgICAgICAgLy/kuI3ogIPomZF2YWx1ZeaVsOe7hOS4reWFg+e0oOeahOmhuuW6j1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJbaV0uc29ydCgpLnRvU3RyaW5nKCkgPT0gdmFsdWUuc29ydCgpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdSZWRMaW5lKGFuc3dlckFycjogbnVtYmVyW10pIHtcclxuICAgICAgICBsZXQgZ2V6aU5vZGUgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV1cclxuICAgICAgICBsZXQgZHJhd19ub2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkcmF3X25vZGVcIik7XHJcbiAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlckFyclswXSk7XHJcbiAgICAgICAgbGV0IGVuZE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJBcnJbMV0pO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IHN0YXJ0Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgZW5kUG9zID0gZW5kTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgbGluZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGxpbmVOb2RlLnBhcmVudCA9IGRyYXdfbm9kZTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsSW5BcnJheShhbnN3ZXJBcnIpO1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIui/nue6v+a2iOWkseeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGxpbmVOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbEluQXJyYXkodmFsdWU6IGFueVtdKSB7XHJcbiAgICAgICAgLy/kuI3ogIPomZF2YWx1ZeaVsOe7hOS4reWFg+e0oOeahOmhuuW6j1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFycltpXS5zb3J0KCkudG9TdHJpbmcoKSA9PSB2YWx1ZS5zb3J0KCkudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRydWVFZmZlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JlZW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSb2xlKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVSb2xlKCkge1xyXG4gICAgICAgIGxldCBnZXppTm9kZSA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnJbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMF0pO1xyXG4gICAgICAgICAgICBsZXQgZW5kTm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlclsxXSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDEgPSBzdGFydE5vZGUuZ2V0Q29tcG9uZW50KFJvbGUpLnR5cGU7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDIgPSBlbmROb2RlLmdldENvbXBvbmVudChSb2xlKS50eXBlO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRSb2xlID0gc3RhcnROb2RlO1xyXG4gICAgICAgICAgICBsZXQgZW5kUm9sZSA9IGVuZE5vZGU7XHJcbiAgICAgICAgICAgIGlmIChpbmRleDEgPiBpbmRleDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0Um9sZSA9IGVuZE5vZGU7XHJcbiAgICAgICAgICAgICAgICBlbmRSb2xlID0gc3RhcnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihzdGFydFJvbGUpLnRvKDAuNSwge3Bvc2l0aW9uOiBlbmRSb2xlLnBvc2l0aW9ufSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbmRSb2xlLmdldENvbXBvbmVudChSb2xlKS5zaG93Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFJvbGUub3BhY2l0eSA9IDA7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIuNSk7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0dyZWVuTGluZSgpIHtcclxuICAgICAgICBsZXQgZ2V6aU5vZGUgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV1cclxuICAgICAgICBsZXQgZHJhd19ub2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkcmF3X25vZGVcIik7XHJcbiAgICAgICAgZHJhd19ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnROb2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgYW5zd2VyWzBdKTtcclxuICAgICAgICAgICAgbGV0IGVuZE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMV0pO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBzdGFydE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBlbmROb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgbGluZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSBkcmF3X25vZGU7XHJcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IGxpbmVOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oZW5kUG9zLngsIGVuZFBvcy55KTtcclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmVOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm5lZWRFbmQpIHtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=