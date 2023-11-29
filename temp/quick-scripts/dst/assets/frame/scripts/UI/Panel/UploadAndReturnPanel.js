
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a2a4ho4VlCloJCvzPCR9a/', 'UploadAndReturnPanel');
// frame/scripts/UI/Panel/UploadAndReturnPanel.ts

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
var ListenerManager_1 = require("./../../Manager/ListenerManager");
var BaseFrameUI_1 = require("../BaseFrameUI");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var UIHelp_1 = require("../../Utils/UIHelp");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var T2M_1 = require("../../SDK/T2M");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UploadAndReturnPanel = /** @class */ (function (_super) {
    __extends(UploadAndReturnPanel, _super);
    function UploadAndReturnPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadAndReturnPanel.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            _this.adjustWidget();
        });
    };
    UploadAndReturnPanel.prototype.start = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 1);
    };
    UploadAndReturnPanel.prototype.onFanHui = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 0);
        UIHelp_1.UIHelp.closeStarCount();
        UIHelp_1.UIHelp.closeGamePanel();
        UIHelp_1.UIHelp.closeUploadAndReturnPanel();
        UIHelp_1.UIHelp.closeSubmissionPanel();
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeAffirmTip();
        ReportManager_1.ReportManager.reportGameOver();
        SoundManager_1.SoundManager.stopAll();
        T2M_1.T2M.onReturnToTeacherPanel();
    };
    UploadAndReturnPanel.prototype.onTiJiao = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
    };
    UploadAndReturnPanel.prototype.adjustWidget = function () {
        var scenceHeight = cc.winSize.height;
        var widget = this.getComponent(cc.Widget);
        if (widget) {
            if (scenceHeight > this.node.height) {
                widget.bottom = (scenceHeight - this.node.height) / 2;
            }
            else {
                widget.bottom = 0;
            }
            widget.updateAlignment();
        }
    };
    UploadAndReturnPanel.className = 'UploadAndReturnPanel';
    UploadAndReturnPanel = __decorate([
        ccclass
    ], UploadAndReturnPanel);
    return UploadAndReturnPanel;
}(BaseFrameUI_1.default));
exports.default = UploadAndReturnPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVXBsb2FkQW5kUmV0dXJuUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDhDQUF5QztBQUN6Qyx3REFBdUQ7QUFDdkQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQscUNBQW9DO0FBQ3BDLGdGQUErRTtBQUV6RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBVztJQUE3RDs7SUErQ0EsQ0FBQztJQTVDRyxxQ0FBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsZUFBTSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDbkMsZUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDOUIsZUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4Qiw2QkFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLDJCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsU0FBRyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLElBQUksNkJBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsZUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNILGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDckI7WUFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBN0NhLDhCQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFEaEMsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0ErQ3hDO0lBQUQsMkJBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ2lELHFCQUFXLEdBK0M1RDtrQkEvQ29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vLi4vLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkQW5kUmV0dXJuUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVXBsb2FkQW5kUmV0dXJuUGFuZWwnO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RXaWRnZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fRURJVF9TVEFURV9TV0lUQ0hJTkcsIDEpO1xuICAgIH1cblxuICAgIG9uRmFuSHVpKCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCAwKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3RhckNvdW50KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZUdhbWVQYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcbiAgICAgICAgVDJNLm9uUmV0dXJuVG9UZWFjaGVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBvblRpSmlhbygpIHtcbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOWujOaIkOS4gOmBjemimOebricpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRqdXN0V2lkZ2V0KCkge1xuICAgICAgICBsZXQgc2NlbmNlSGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCB3aWRnZXQgPSB0aGlzLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBpZiAoc2NlbmNlSGVpZ2h0ID4gdGhpcy5ub2RlLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSAoc2NlbmNlSGVpZ2h0IC0gdGhpcy5ub2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==