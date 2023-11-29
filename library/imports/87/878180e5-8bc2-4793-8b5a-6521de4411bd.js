"use strict";
cc._RF.push(module, '87818Dli8JHk4taZSHeRBG9', 'BaseTeacherPanel');
// frame/scripts/UI/Panel/BaseTeacherPanel.ts

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
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var NetWork_1 = require("../../Http/NetWork");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseTeacherPanel = /** @class */ (function (_super) {
    __extends(BaseTeacherPanel, _super);
    function BaseTeacherPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseTeacherPanel.prototype.onLoad = function () { };
    BaseTeacherPanel.prototype.start = function () {
        this.data.node.parent.removeChild(this.data.node);
        this.getNet();
        UIHelp_1.UIHelp.closeRecoverMask();
    };
    BaseTeacherPanel.prototype.setPanel = function () { };
    BaseTeacherPanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_TITLE + '?title_id=' + NetWork_1.NetWork.titleId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            console.log('消息返回' + response);
            if (!err) {
                var res = response;
                if (Array.isArray(res.data)) {
                    _this.setPanel();
                    return;
                }
                var content = JSON.parse(res.data.courseware_content);
                NetWork_1.NetWork.coursewareId = res.data.courseware_id;
                if (NetWork_1.NetWork.empty) {
                    //如果URL里面带了empty参数 并且为true  就立刻清除数据
                    _this.ClearNet();
                }
                else {
                    if (content != null) {
                        if (content.CoursewareKey != ConstValue_1.ConstValue.CoursewareKey) {
                            UIHelp_1.UIHelp.showErrorPanel('该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
                            return;
                        }
                        // 如果编辑器数据修改 先注释掉此行
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.setPanel();
                    }
                    else {
                        _this.setPanel();
                    }
                }
            }
        }, null);
    };
    //删除课件数据  一般为脏数据清理
    BaseTeacherPanel.prototype.ClearNet = function () {
        var jsonData = { courseware_id: NetWork_1.NetWork.coursewareId };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.CLEAR, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案删除成功');
            }
        }, JSON.stringify(jsonData));
    };
    BaseTeacherPanel.className = 'BaseTeacherPanel';
    BaseTeacherPanel = __decorate([
        ccclass
    ], BaseTeacherPanel);
    return BaseTeacherPanel;
}(BaseUI_1.BaseUI));
exports.default = BaseTeacherPanel;

cc._RF.pop();