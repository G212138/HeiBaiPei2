
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BindNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCaW5kTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFzQyw0QkFBWTtJQUFsRDs7SUE4QkEsQ0FBQztpQkE5Qm9CLFFBQVE7SUFDekIsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLDJCQUFRLEdBQVIsVUFBUyxJQUFhLEVBQUUsTUFBVztRQUMvQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU87U0FDVjtRQUVELElBQUksUUFBUSxHQUFXLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQjtRQUVoRCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE9BQU8sSUFBSSxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLG1DQUFtQzthQUN0QztZQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBUSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7YUFDMUU7WUFFRCxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDOztJQTdCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThCNUI7SUFBRCxlQUFDO0NBOUJELEFBOEJDLENBOUJxQyxFQUFFLENBQUMsU0FBUyxHQThCakQ7a0JBOUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIF9fcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5iaW5kTm9kZSh0aGlzLm5vZGUsIHRoaXMpO1xuICAgIH1cblxuICAgIC8v6YGN5Y6G5YWo6YOo6IqC54K577yM57uR5a6a6IqC54K55ZCN5a2X77yI6YeN5ZCN55qE5Y+q5Lya57uR5a6a56ys5LiA5Liq56ym5ZCI5p2h5Lu255qE6IqC54K577yJXG4gICAgYmluZE5vZGUobm9kZTogY2MuTm9kZSwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgaWYgKCFub2RlIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfbmFtZVRhZzogc3RyaW5nID0gJ18nOyAvL+WQjeWtl+S7pSAnXycg5byA5aS055qE6IqC54K55omN5Lya6KKr57uR5a6aXG5cbiAgICAgICAgbGV0IG5vZGVMaXN0ID0gW25vZGVdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgbm9kZU5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICBpZiAoX25hbWVUYWcgPT09IG5vZGVOYW1lWzBdICYmICF0YXJnZXRbbm9kZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25vZGVOYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCdiaW5kTm9kZTogICcsIG5vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYmluZENvbXAgPSBub2RlLmdldENvbXBvbmVudChCaW5kTm9kZSk7XG4gICAgICAgICAgICBpZiAoMCA9PT0gaSB8fCAhYmluZENvbXApIHtcbiAgICAgICAgICAgICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChub2RlLmNoaWxkcmVuKTsgLy/oioLngrnmnInohJrmnKznu6fmib/kuoZCaW5kTm9kZe+8jOWwseS4jeWGjee7keWumuWFtuWtkOiKgueCuVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbm9kZUxpc3RbKytpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==