"use strict";
cc._RF.push(module, '9d7cfSEQKBKUqk46zROXmuh', 'GeziArea');
// game/scripts/UI/Item/GeziArea.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GeziArea = /** @class */ (function (_super) {
    __extends(GeziArea, _super);
    function GeziArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //行数
        _this.row = 0;
        //列数
        _this.col = 0;
        return _this;
    }
    GeziArea.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_ICON, this.onDragMaozi, this);
    };
    GeziArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_ICON, this.onDragMaozi, this);
    };
    GeziArea.prototype.onDragMaozi = function (pos) {
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
        }
        else {
        }
    };
    GeziArea.prototype.isPosInRect = function (pos) {
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    };
    GeziArea.prototype.fill = function (item) {
        if (this.node.getChildByName("icon_node").childrenCount > 0) {
            this.node.getChildByName("icon_node").removeAllChildren();
        }
        this.node.color = cc.Color.WHITE;
        item.parent = this.node.getChildByName("icon_node");
        item.position = cc.v3(0, 0);
    };
    GeziArea = __decorate([
        ccclass
    ], GeziArea);
    return GeziArea;
}(cc.Component));
exports.default = GeziArea;

cc._RF.pop();