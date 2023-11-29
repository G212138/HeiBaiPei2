"use strict";
cc._RF.push(module, '219dc1rDTJCjYWJhJNQFxIJ', 'ButtonSync');
// game/scripts/UI/Components/ButtonSync.ts

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
var T2M_1 = require("../../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSync = /** @class */ (function (_super) {
    __extends(ButtonSync, _super);
    function ButtonSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchStartEvents = [];
        _this.touchEndEvents = [];
        _this.needScale = false;
        return _this;
    }
    ButtonSync_1 = ButtonSync;
    ButtonSync.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    ButtonSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new ButtonSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchEndEvents.push(new ButtonSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];
    };
    ButtonSync.prototype.touchStart = function (event) {
        var type = 'touchStart' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.touchEnd = function (event) {
        var type = 'touchEnd' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    ButtonSync.prototype.touchStartHandler = function (data) {
        if (this.needScale) {
            this.node.scale = 1.1;
        }
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    ButtonSync.prototype.touchEndHandler = function (data) {
        if (this.needScale) {
            this.node.scale = 1;
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    var ButtonSync_1;
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchEndEvents", void 0);
    __decorate([
        property(cc.Boolean)
    ], ButtonSync.prototype, "needScale", void 0);
    ButtonSync = ButtonSync_1 = __decorate([
        ccclass
    ], ButtonSync);
    return ButtonSync;
}(cc.Component));
exports.default = ButtonSync;

cc._RF.pop();