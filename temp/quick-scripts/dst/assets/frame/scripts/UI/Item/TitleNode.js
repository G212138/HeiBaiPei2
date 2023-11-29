
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUaXRsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELGlFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJCQztRQXpCRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsV0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFrQnBDLENBQUM7SUFoQkcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsaUNBQWUsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBTlIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJCOUI7SUFBRCxpQkFBQztDQTNCRCxBQTJCQyxDQTNCdUMsRUFBRSxDQUFDLFNBQVMsR0EyQm5EO2tCQTNCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGlsZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBiaWFuSmlMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBqaWFuWWFuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aWFvTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBoZWlTZSA9IGNjLmNvbG9yKDAsIDAsIDApO1xuICAgIGh1aVNlID0gY2MuY29sb3IoMTI3LCAxMjcsIDEyNyk7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iaWFuSmlMYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5oZWlTZTtcbiAgICAgICAgdGhpcy5qaWFuWWFuTGFiZWwubm9kZS5jb2xvciA9IHRoaXMuaHVpU2U7XG4gICAgICAgIHRoaXMudGlhb05vZGUuY29sb3IgPSB0aGlzLmh1aVNlO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCB0aGlzLm9uU3RhdGVTd2l0Y2hpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uU3RhdGVTd2l0Y2hpbmcoc3RhdGU6IG51bWJlcikge1xuICAgICAgICBpZiAoMCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuamlhbllhbkxhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmh1aVNlO1xuICAgICAgICAgICAgdGhpcy50aWFvTm9kZS5jb2xvciA9IHRoaXMuaHVpU2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmppYW5ZYW5MYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5oZWlTZTtcbiAgICAgICAgICAgIHRoaXMudGlhb05vZGUuY29sb3IgPSB0aGlzLmhlaVNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19