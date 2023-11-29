"use strict";
cc._RF.push(module, 'e303cf5H7tNgrjtF1rN8MVU', 'IconDrag');
// game/scripts/UI/Item/IconDrag.ts

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
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GeziArea_1 = require("./GeziArea");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IconDrag = /** @class */ (function (_super) {
    __extends(IconDrag, _super);
    function IconDrag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.index = 0;
        _this.gezi_1 = null;
        _this.gezi_2 = null;
        _this.isRoot = true;
        _this.initPos = null;
        //根据触摸时间判断是否为点击事件
        _this.touchStartTime = null;
        _this.touchStartPos = null;
        return _this;
    }
    IconDrag_1 = IconDrag;
    IconDrag.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.initPos = this.node.position;
    };
    IconDrag.prototype.touchStart = function (event) {
        this.touchStartTime = new Date().getTime();
        this.touchStartPos = event.getLocation();
        if (this.node.getComponent(IconDrag_1).isRoot) {
            var newNode = this.clone();
            newNode.getComponent(IconDrag_1).isRoot = true;
            this.node.getComponent(IconDrag_1).isRoot = false;
        }
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(pos.x, pos.y);
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_ICON, pos2);
    };
    IconDrag.prototype.touchMove = function (event) {
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.position = cc.v3(pos.x, pos.y);
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_ICON, pos2);
    };
    IconDrag.prototype.touchEnd = function (event) {
        var _this = this;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        this.node.position = cc.v3(pos.x, pos.y);
        var isInRect = false;
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        geziNode.children.forEach(function (gezi) {
            if (gezi.getComponent(GeziArea_1.default).isPosInRect(cc.v2(pos2.x, pos2.y))) {
                isInRect = true;
                gezi.getComponent(GeziArea_1.default).fill(_this.node);
            }
        });
        if (!isInRect) {
            this.node.destroy();
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_ICON_END);
        if (new Date().getTime() - this.touchStartTime < 200 && this.touchStartPos.sub(event.getLocation()).mag() < 10) {
            if (this.node.parent.name == "icon_node") {
                var row = this.node.parent.parent.getComponent(GeziArea_1.default).row;
                var col = this.node.parent.parent.getComponent(GeziArea_1.default).col;
                this.node.parent.parent.getChildByName("highLight").active = !this.node.parent.parent.getChildByName("highLight").active;
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_ICON, { row: row, col: col });
            }
        }
    };
    //克隆一个新的节点
    IconDrag.prototype.clone = function () {
        var node = cc.instantiate(this.node);
        node.parent = this.node.parent;
        node.position = this.initPos;
        node.zIndex = this.node.zIndex - 1;
        return node;
    };
    IconDrag.prototype.reset = function () {
        this.node.parent = this.rootNode;
        this.node.position = this.initPos;
    };
    IconDrag.prototype.getIndex = function () {
        return this.index;
    };
    IconDrag.prototype.showHighLight = function (show) {
        this.node.parent.parent.getChildByName("highLight").active = show;
    };
    var IconDrag_1;
    __decorate([
        property(cc.Node)
    ], IconDrag.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Integer)
    ], IconDrag.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], IconDrag.prototype, "gezi_1", void 0);
    __decorate([
        property(cc.Node)
    ], IconDrag.prototype, "gezi_2", void 0);
    IconDrag = IconDrag_1 = __decorate([
        ccclass
    ], IconDrag);
    return IconDrag;
}(cc.Component));
exports.default = IconDrag;

cc._RF.pop();