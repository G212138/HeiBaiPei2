"use strict";
cc._RF.push(module, 'c6da4j3MGhPfIxwls9tY6iS', 'BaseUI');
// frame/scripts/UI/BaseUI.ts

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
exports.BaseUI = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var ListenerManager_1 = require("../Manager/ListenerManager");
var BindNode_1 = require("./BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseUI.prototype, "data", {
        get: function () {
            return this.mData;
        },
        set: function (value) {
            this.mData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseUI.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    BaseUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.PREFAB_PANEL_DIR + this.className;
    };
    BaseUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    BaseUI.prototype.onShow = function () {
        cc.log('BaseUI onShow');
    };
    BaseUI.className = 'BaseUI';
    BaseUI.isFramePanel = false;
    BaseUI = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(BindNode_1.default));
exports.BaseUI = BaseUI;

cc._RF.pop();