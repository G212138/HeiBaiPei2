"use strict";
cc._RF.push(module, 'b276fOW8MRNTqj/bpy0hngz', 'TitleNode');
// frame/scripts/UI/Item/TitleNode.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TitileNode = /** @class */ (function (_super) {
    __extends(TitileNode, _super);
    function TitileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bianJiLabel = null;
        _this.jianYanLabel = null;
        _this.tiaoNode = null;
        _this.heiSe = cc.color(0, 0, 0);
        _this.huiSe = cc.color(127, 127, 127);
        return _this;
    }
    TitileNode.prototype.start = function () {
        this.bianJiLabel.node.color = this.heiSe;
        this.jianYanLabel.node.color = this.huiSe;
        this.tiaoNode.color = this.huiSe;
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, this.onStateSwitching, this);
    };
    TitileNode.prototype.onStateSwitching = function (state) {
        if (0 === state) {
            this.jianYanLabel.node.color = this.huiSe;
            this.tiaoNode.color = this.huiSe;
        }
        else {
            this.jianYanLabel.node.color = this.heiSe;
            this.tiaoNode.color = this.heiSe;
        }
    };
    __decorate([
        property(cc.Label)
    ], TitileNode.prototype, "bianJiLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TitileNode.prototype, "jianYanLabel", void 0);
    __decorate([
        property(cc.Node)
    ], TitileNode.prototype, "tiaoNode", void 0);
    TitileNode = __decorate([
        ccclass
    ], TitileNode);
    return TitileNode;
}(cc.Component));
exports.default = TitileNode;

cc._RF.pop();