
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
        _this.videoPlayer = null;
        _this.captureNode = null;
        _this.camera = null;
        _this.mm = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_ROLE, this.handleClickRole, this);
        //监听视频是否播放完毕
        this.videoPlayer.node.on('completed', this.onVideoPlayerCompleted, this);
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
        this.videoPlayer.node.active = true;
        this.videoPlayer.play();
        // this.initUI();
    };
    GameUI.prototype.onVideoPlayerCompleted = function () {
        var _this = this;
        console.log("视频播放完毕");
        // cc.tween(this.videoPlayer.node).to(0.5, {opacity: 0}).call(() => {
        //     this.videoPlayer.node.active = false;
        // }).start();
        this.captureNode.spriteFrame = this.CapturePicture();
        this.captureNode.node.active = true;
        this.scheduleOnce(function () {
            _this.videoPlayer.node.active = false;
            cc.tween(_this.captureNode.node).to(0.5, { opacity: 0 }).call(function () {
                _this.captureNode.node.active = false;
            }).start();
        }, 0.5);
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
    GameUI.prototype.CapturePicture = function () {
        var data = this.captureTexture();
        var texture = new cc.Texture2D();
        texture.initWithData(data, cc.Texture2D.PixelFormat.RGBA8888, 2048, 1152);
        var newSpriteFrame = new cc.SpriteFrame(texture);
        newSpriteFrame.setFlipY(true);
        return newSpriteFrame;
    };
    GameUI.prototype.captureTexture = function () {
        this.mm.active = true;
        var data = this.captureScreen(this.camera.getComponent(cc.Camera), this.mm);
        this.mm.active = false;
        return data;
    };
    GameUI.prototype.captureScreen = function (camera, prop) {
        var newTexture = new cc.RenderTexture();
        var oldTexture = camera.targetTexture;
        var rect = cc.rect(0, 0, cc.visibleRect.width, cc.visibleRect.height);
        if (prop) {
            if (prop instanceof cc.Node) {
                rect = prop.getBoundingBoxToWorld();
            }
            else {
                rect = prop;
            }
        }
        rect.width = Math.ceil(rect.width); //特殊情况下数值是浮点类型的，转换成integer类型。这里width=2048;height=1152 直接写死数值也可以
        rect.height = Math.ceil(rect.height);
        newTexture.initWithSize(cc.visibleRect.width, cc.visibleRect.height, cc.game._renderContext.STENCIL_INDEX8);
        camera.targetTexture = newTexture;
        camera.render();
        camera.targetTexture = oldTexture;
        var buffer = new ArrayBuffer(rect.width * rect.height * 4);
        var data = new Uint8Array(buffer);
        newTexture.readPixels(data, rect.x, rect.y, rect.width, rect.height);
        return data;
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
    __decorate([
        property(cc.VideoPlayer)
    ], GameUI.prototype, "videoPlayer", void 0);
    __decorate([
        property(cc.Sprite)
    ], GameUI.prototype, "captureNode", void 0);
    __decorate([
        property(cc.Camera)
    ], GameUI.prototype, "camera", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "mm", void 0);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRixpRUFBZ0U7QUFFaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUE2V0M7UUEzV1csY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBRXBDLGlCQUFXLEdBQW1CLElBQUksQ0FBQztRQXNUM0MsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFdEIsWUFBTSxHQUFjLElBQUksQ0FBQztRQUV6QixRQUFFLEdBQVksSUFBSSxDQUFDOztJQXVDL0IsQ0FBQztJQS9WRyx1QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFD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TSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzNELElBQUksSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNyRSxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBeldEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2U7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzt5Q0FDWTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ2tCO0lBRXRDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQzBCO0lBRTVDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUM7K0NBQ2tCO0lBc1QzQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNVO0lBRTlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MENBQ2E7SUFFakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDUztJQXRVVixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBNlcxQjtJQUFELGFBQUM7Q0E3V0QsQUE2V0MsQ0E3V21DLEVBQUUsQ0FBQyxTQUFTLEdBNlcvQztrQkE3V29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgQ3VzdG9tU3luY0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YS9DdXN0b21TeW5jRGF0YVwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vUm9sZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZ2V6aVR5cGU6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aWdhbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHJvbGVfcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9zdWJtaXRfZGlzYWJsZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLlZpZGVvUGxheWVyKVxyXG4gICAgcHJpdmF0ZSB2aWRlb1BsYXllcjogY2MuVmlkZW9QbGF5ZXIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmluaXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0xJQ0tfUk9MRSwgdGhpcy5oYW5kbGVDbGlja1JvbGUsIHRoaXMpO1xyXG5cclxuICAgICAgICAvL+ebkeWQrOinhumikeaYr+WQpuaSreaUvuWujOavlVxyXG4gICAgICAgIHRoaXMudmlkZW9QbGF5ZXIubm9kZS5vbignY29tcGxldGVkJywgdGhpcy5vblZpZGVvUGxheWVyQ29tcGxldGVkLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuRU5URVJfR0FNRSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmluaXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRVBMQVksIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5DTElDS19ST0xFLCB0aGlzLmhhbmRsZUNsaWNrUm9sZSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVFbnRlckdhbWUoKSB7XHJcbiAgICAgICAgaWYgKCFFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubmVlZEVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJiZ1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy52aWRlb1BsYXllci5wbGF5KCk7XHJcbiAgICAgICAgLy8gdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uVmlkZW9QbGF5ZXJDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLop4bpopHmkq3mlL7lrozmr5VcIik7XHJcblxyXG4gICAgICAgIC8vIGNjLnR3ZWVuKHRoaXMudmlkZW9QbGF5ZXIubm9kZSkudG8oMC41LCB7b3BhY2l0eTogMH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZpZGVvUGxheWVyLm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgLy8gfSkuc3RhcnQoKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVOb2RlLnNwcml0ZUZyYW1lID0gdGhpcy5DYXB0dXJlUGljdHVyZSgpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZU5vZGUubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy52aWRlb1BsYXllci5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBjYy50d2Vlbih0aGlzLmNhcHR1cmVOb2RlLm5vZGUpLnRvKDAuNSwgeyBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYXB0dXJlTm9kZS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9KS5zdGFydCgpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICAgICAgdGhpcy5pbml0VUkoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRVSSgpIHtcclxuICAgICAgICB0aGlzLmdlemlUeXBlLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaG93Um9sZSgpO1xyXG4gICAgICAgIHRoaXMuZHJhd0xpbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dSb2xlKCkge1xyXG4gICAgICAgIGxldCByb2xlUGFyZW50ID0gdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpO1xyXG4gICAgICAgIGxldCByb3dDb3VudCA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IDUgOiA2O1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm93Q291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd0NvdW50OyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnJbaV1bal0gIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb2xlTm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucm9sZV9wcmVmYWIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOb2RlLnBhcmVudCA9IHJvbGVQYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkcmVuSW5kZXggPSBpICogcm93Q291bnQgKyBqO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOb2RlLm5hbWUgPSBcInJvbGVfXCIgKyBjaGlsZHJlbkluZGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uZ2V0Q2hpbGRCeU5hbWUoXCJnZXppXCIpLmNoaWxkcmVuW2NoaWxkcmVuSW5kZXhdLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGVOb2RlLnBvc2l0aW9uID0gcG9zO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb2xlID0gcm9sZU5vZGUuZ2V0Q29tcG9uZW50KFJvbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGUudHlwZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFycltpXVtqXTtcclxuICAgICAgICAgICAgICAgICAgICByb2xlLmdlemlJbmRleCA9IGNoaWxkcmVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZS5zaG93SW5pdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93VGlnYW4oKTtcclxuICAgICAgICB9LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaGFuZGxlQ2xpY2tSb2xlKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGlmIChTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlID09IG51bGwpIHtcclxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9IGRhdGE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlVwZGF0ZUxpbmUoZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuY2hpbGRyZW5Db3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5jaGlsZHJlbltpXS5nZXRDb21wb25lbnQoUm9sZSkuaW5pdFJvbGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgcm9sZU5vZGUgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSk7XHJcbiAgICAgICAgICAgIHJvbGVOb2RlLmdldENvbXBvbmVudChSb2xlKS5zaG93Q2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBVcGRhdGVMaW5lKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBzZWxmQW5zd2VyID0gW1N5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUsIGRhdGFdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYW5zd2VyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFycltpXTtcclxuICAgICAgICAgICAgaWYgKGFuc3dlclswXSA9PSBzZWxmQW5zd2VyWzBdICYmIGFuc3dlclsxXSA9PSBzZWxmQW5zd2VyWzFdKSB7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLov57nur/mtojlpLHnmoTpn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuc3dlclswXSA9PSBzZWxmQW5zd2VyWzFdICYmIGFuc3dlclsxXSA9PSBzZWxmQW5zd2VyWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLov57nur/mtojlpLHnmoTpn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIucHVzaChzZWxmQW5zd2VyKTtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlID0gbnVsbDtcclxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuWHuueOsOi/nue6v+eahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0xpbmUoKSB7XHJcbiAgICAgICAgdGhpcy5idG5fc3VibWl0X2Rpc2FibGVkLmFjdGl2ZSA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIubGVuZ3RoID09IDA7XHJcblxyXG4gICAgICAgIGxldCBnZXppTm9kZSA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXVxyXG4gICAgICAgIGxldCBkcmF3X25vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYXdfbm9kZVwiKTtcclxuICAgICAgICBkcmF3X25vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnJbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMF0pO1xyXG4gICAgICAgICAgICBsZXQgZW5kTm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlclsxXSk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IHN0YXJ0Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGVuZE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGxpbmVOb2RlLnBhcmVudCA9IGRyYXdfbm9kZTtcclxuICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjA7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93VGlnYW4oKSB7XHJcbiAgICAgICAgdGhpcy50aWdhbi5zdHJpbmcgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW47XHJcbiAgICAgICAgdGhpcy50aWdhbi5ub2RlLnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW4ubGVuZ3RoID4gMDtcclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0J0bigpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzaG93QnRuKCkge1xyXG4gICAgICAgIHRoaXMuYnRuX25vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tSZXNldCgpIHtcclxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyID0gW107XHJcbiAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIG9uQ2xpY2tTdWJtaXQoKSB7XHJcbiAgICAgICAgVUlIZWxwLnNob3dNYXNrKCk7XHJcbiAgICAgICAgbGV0IHNlbGZBbnN3ZXJBcnIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyO1xyXG4gICAgICAgIGxldCBhbnN3ZXJBcnIgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyO1xyXG4gICAgICAgIGlmIChzZWxmQW5zd2VyQXJyLmxlbmd0aCA9PSBhbnN3ZXJBcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGxldCBpc0FsbFJpZ2h0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmQW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyID0gc2VsZkFuc3dlckFycltpXTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5pc0luQXJyYXkoYW5zd2VyQXJyLCBhbnN3ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNBbGxSaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlZExpbmUoc2VsZkFuc3dlckFycltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzQWxsUmlnaHQpIHtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5q2j56Gu6Z+z5pWIXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25UcnVlRWZmZWN0KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLplJnor6/pn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIGZhbHNlKTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLplJnor6/pn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBzZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5BcnJheShhbnN3ZXJBcnIsIGFuc3dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYXdSZWRMaW5lKHNlbGZBbnN3ZXJBcnJbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5Yik5pat5YWD57Sg5piv5ZCm5Zyo5pWw57uE5LitXHJcbiAgICBwcml2YXRlIGlzSW5BcnJheShhcnI6IGFueVtdW10sIHZhbHVlOiBhbnlbXSkge1xyXG4gICAgICAgIC8v5LiN6ICD6JmRdmFsdWXmlbDnu4TkuK3lhYPntKDnmoTpobrluo9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoYXJyW2ldLnNvcnQoKS50b1N0cmluZygpID09IHZhbHVlLnNvcnQoKS50b1N0cmluZygpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3UmVkTGluZShhbnN3ZXJBcnI6IG51bWJlcltdKSB7XHJcbiAgICAgICAgbGV0IGdlemlOb2RlID0gdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdXHJcbiAgICAgICAgbGV0IGRyYXdfbm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwiZHJhd19ub2RlXCIpO1xyXG4gICAgICAgIGxldCBzdGFydE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJBcnJbMF0pO1xyXG4gICAgICAgIGxldCBlbmROb2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgYW5zd2VyQXJyWzFdKTtcclxuICAgICAgICBsZXQgc3RhcnRQb3MgPSBzdGFydE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IGVuZFBvcyA9IGVuZE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgbGV0IGxpbmVOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSBkcmF3X25vZGU7XHJcbiAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAyMDtcclxuICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLlJFRDtcclxuICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICBncmFwaGljcy5saW5lVG8oZW5kUG9zLngsIGVuZFBvcy55KTtcclxuICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlbEluQXJyYXkoYW5zd2VyQXJyKTtcclxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLov57nur/mtojlpLHnmoTpn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICBsaW5lTm9kZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoKTtcclxuICAgICAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxJbkFycmF5KHZhbHVlOiBhbnlbXSkge1xyXG4gICAgICAgIC8v5LiN6ICD6JmRdmFsdWXmlbDnu4TkuK3lhYPntKDnmoTpobrluo9cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnJbaV0uc29ydCgpLnRvU3RyaW5nKCkgPT0gdmFsdWUuc29ydCgpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25UcnVlRWZmZWN0KCkge1xyXG4gICAgICAgIHRoaXMuZHJhd0dyZWVuTGluZSgpO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlUm9sZSgpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3ZlUm9sZSgpIHtcclxuICAgICAgICBsZXQgZ2V6aU5vZGUgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnROb2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgYW5zd2VyWzBdKTtcclxuICAgICAgICAgICAgbGV0IGVuZE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMV0pO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXgxID0gc3RhcnROb2RlLmdldENvbXBvbmVudChSb2xlKS50eXBlO1xyXG4gICAgICAgICAgICBsZXQgaW5kZXgyID0gZW5kTm9kZS5nZXRDb21wb25lbnQoUm9sZSkudHlwZTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0Um9sZSA9IHN0YXJ0Tm9kZTtcclxuICAgICAgICAgICAgbGV0IGVuZFJvbGUgPSBlbmROb2RlO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXgxID4gaW5kZXgyKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFJvbGUgPSBlbmROb2RlO1xyXG4gICAgICAgICAgICAgICAgZW5kUm9sZSA9IHN0YXJ0Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY2MudHdlZW4oc3RhcnRSb2xlKS50bygwLjUsIHsgcG9zaXRpb246IGVuZFJvbGUucG9zaXRpb24gfSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbmRSb2xlLmdldENvbXBvbmVudChSb2xlKS5zaG93Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFJvbGUub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICAgICAgICAgICAgfSwgMi41KTtcclxuICAgICAgICAgICAgfSkuc3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3R3JlZW5MaW5lKCkge1xyXG4gICAgICAgIGxldCBnZXppTm9kZSA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXVxyXG4gICAgICAgIGxldCBkcmF3X25vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcImRyYXdfbm9kZVwiKTtcclxuICAgICAgICBkcmF3X25vZGUucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnJbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMF0pO1xyXG4gICAgICAgICAgICBsZXQgZW5kTm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlclsxXSk7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IHN0YXJ0Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGVuZE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XHJcbiAgICAgICAgICAgIGxpbmVOb2RlLnBhcmVudCA9IGRyYXdfbm9kZTtcclxuICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuYWRkQ29tcG9uZW50KGNjLkdyYXBoaWNzKTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVdpZHRoID0gMjA7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuR1JFRU47XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xyXG4gICAgICAgICAgICBncmFwaGljcy5tb3ZlVG8oc3RhcnRQb3MueCwgc3RhcnRQb3MueSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGluZU5vZGUuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9LCAwLjUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdhbWVPdmVyKCkge1xyXG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEubmVlZEVuZCkge1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfT1ZFUik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5TcHJpdGUpXHJcbiAgICBjYXB0dXJlTm9kZTogY2MuU3ByaXRlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5DYW1lcmEpXHJcbiAgICBwcml2YXRlIGNhbWVyYTogY2MuQ2FtZXJhID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgcHJpdmF0ZSBtbTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIENhcHR1cmVQaWN0dXJlKCkge1xyXG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jYXB0dXJlVGV4dHVyZSgpO1xyXG4gICAgICAgIGxldCB0ZXh0dXJlID0gbmV3IGNjLlRleHR1cmUyRCgpXHJcbiAgICAgICAgdGV4dHVyZS5pbml0V2l0aERhdGEoZGF0YSwgY2MuVGV4dHVyZTJELlBpeGVsRm9ybWF0LlJHQkE4ODg4LCAyMDQ4LCAxMTUyKTtcclxuICAgICAgICBsZXQgbmV3U3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgbmV3U3ByaXRlRnJhbWUuc2V0RmxpcFkodHJ1ZSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld1Nwcml0ZUZyYW1lO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBjYXB0dXJlVGV4dHVyZSgpIHtcclxuICAgICAgICB0aGlzLm1tLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNhcHR1cmVTY3JlZW4odGhpcy5jYW1lcmEuZ2V0Q29tcG9uZW50KGNjLkNhbWVyYSksIHRoaXMubW0pO1xyXG4gICAgICAgIHRoaXMubW0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIGNhcHR1cmVTY3JlZW4oY2FtZXJhOiBjYy5DYW1lcmEsIHByb3A/OiBjYy5Ob2RlIHwgY2MuUmVjdCkge1xyXG4gICAgICAgIGxldCBuZXdUZXh0dXJlID0gbmV3IGNjLlJlbmRlclRleHR1cmUoKTtcclxuICAgICAgICBsZXQgb2xkVGV4dHVyZSA9IGNhbWVyYS50YXJnZXRUZXh0dXJlO1xyXG4gICAgICAgIGxldCByZWN0OiBjYy5SZWN0ID0gY2MucmVjdCgwLCAwLCBjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0KTtcclxuICAgICAgICBpZiAocHJvcCkge1xyXG4gICAgICAgICAgICBpZiAocHJvcCBpbnN0YW5jZW9mIGNjLk5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHJlY3QgPSBwcm9wLmdldEJvdW5kaW5nQm94VG9Xb3JsZCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmVjdCA9IHByb3A7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmVjdC53aWR0aCA9IE1hdGguY2VpbChyZWN0LndpZHRoKTsvL+eJueauiuaDheWGteS4i+aVsOWAvOaYr+a1rueCueexu+Wei+eahO+8jOi9rOaNouaIkGludGVnZXLnsbvlnovjgILov5nph4x3aWR0aD0yMDQ4O2hlaWdodD0xMTUyIOebtOaOpeWGmeatu+aVsOWAvOS5n+WPr+S7pVxyXG4gICAgICAgIHJlY3QuaGVpZ2h0ID0gTWF0aC5jZWlsKHJlY3QuaGVpZ2h0KTtcclxuICAgICAgICBuZXdUZXh0dXJlLmluaXRXaXRoU2l6ZShjYy52aXNpYmxlUmVjdC53aWR0aCwgY2MudmlzaWJsZVJlY3QuaGVpZ2h0LCBjYy5nYW1lLl9yZW5kZXJDb250ZXh0LlNURU5DSUxfSU5ERVg4KTtcclxuICAgICAgICBjYW1lcmEudGFyZ2V0VGV4dHVyZSA9IG5ld1RleHR1cmU7XHJcbiAgICAgICAgY2FtZXJhLnJlbmRlcigpO1xyXG4gICAgICAgIGNhbWVyYS50YXJnZXRUZXh0dXJlID0gb2xkVGV4dHVyZTtcclxuICAgICAgICBsZXQgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHJlY3Qud2lkdGggKiByZWN0LmhlaWdodCAqIDQpO1xyXG4gICAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcclxuICAgICAgICBuZXdUZXh0dXJlLnJlYWRQaXhlbHMoZGF0YSwgcmVjdC54LCByZWN0LnksIHJlY3Qud2lkdGgsIHJlY3QuaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19