
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c61c0OGRkxGBqEB0icrBo6y', 'MaskRecover');
// frame/scripts/UI/Item/MaskRecover.ts

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
var UIManager_1 = require("../../Manager/UIManager");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskRecover = /** @class */ (function (_super) {
    __extends(MaskRecover, _super);
    function MaskRecover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_mask = null;
        _this._nd_loading = null;
        _this.isShowLoading = false;
        return _this;
    }
    MaskRecover.prototype.onLoad = function () {
        //设置最层级
        this.node.zIndex = UIManager_1.EPANEL_ZORDER.MASK;
    };
    MaskRecover.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.MASK_RECOVER, this.onMask, this);
        this._nd_loading.active = false;
        this._nd_mask.active = false;
    };
    MaskRecover.prototype.onMask = function (isState) {
        this._nd_mask.active = isState;
    };
    MaskRecover = __decorate([
        ccclass
    ], MaskRecover);
    return MaskRecover;
}(BindNode_1.default));
exports.default = MaskRecover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNYXNrUmVjb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFDdkQsaUVBQWdFO0FBQ2hFLHFEQUF3RDtBQUV4RCx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVE7SUFBakQ7UUFBQSxxRUFtQkM7UUFsQlUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFnQjFDLENBQUM7SUFkRyw0QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sT0FBZ0I7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFsQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtQi9CO0lBQUQsa0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQndDLGtCQUFRLEdBbUJoRDtrQkFuQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBFUEFORUxfWk9SREVSIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCBCaW5kTm9kZSBmcm9tICcuLi9CaW5kTm9kZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrUmVjb3ZlciBleHRlbmRzIEJpbmROb2RlIHtcbiAgICBwdWJsaWMgX25kX21hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBfbmRfbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgcHVibGljIGlzU2hvd0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/orr7nva7mnIDlsYLnuqdcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IEVQQU5FTF9aT1JERVIuTUFTSztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIHRoaXMub25NYXNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmRfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1hc2soaXNTdGF0ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9uZF9tYXNrLmFjdGl2ZSA9IGlzU3RhdGU7XG4gICAgfVxufVxuIl19