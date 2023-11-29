"use strict";
cc._RF.push(module, '65374G80ONGaJ+/vbcxCejv', 'BindNode');
// frame/scripts/UI/BindNode.ts

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
var ccclass = cc._decorator.ccclass;
var BindNode = /** @class */ (function (_super) {
    __extends(BindNode, _super);
    function BindNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindNode_1 = BindNode;
    BindNode.prototype.__preload = function () {
        this.bindNode(this.node, this);
    };
    //遍历全部节点，绑定节点名字（重名的只会绑定第一个符合条件的节点）
    BindNode.prototype.bindNode = function (node, target) {
        if (!node || !target) {
            return;
        }
        var _nameTag = '_'; //名字以 '_' 开头的节点才会被绑定
        var nodeList = [node];
        var i = 0;
        while (node) {
            var nodeName = node.name;
            if (_nameTag === nodeName[0] && !target[nodeName]) {
                target[nodeName] = node;
                // cc.log('bindNode:  ', nodeName);
            }
            var bindComp = node.getComponent(BindNode_1);
            if (0 === i || !bindComp) {
                nodeList = nodeList.concat(node.children); //节点有脚本继承了BindNode，就不再绑定其子节点
            }
            node = nodeList[++i];
        }
    };
    var BindNode_1;
    BindNode = BindNode_1 = __decorate([
        ccclass
    ], BindNode);
    return BindNode;
}(cc.Component));
exports.default = BindNode;

cc._RF.pop();