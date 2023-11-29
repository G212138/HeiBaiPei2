"use strict";
cc._RF.push(module, 'bdbeagD9lJH1p1yPQBbNwPK', 'SubmissionPanel');
// frame/scripts/UI/Panel/SubmissionPanel.ts

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
var NetWork_1 = require("../../Http/NetWork");
var BaseFrameUI_1 = require("../BaseFrameUI");
var UIHelp_1 = require("../../Utils/UIHelp");
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var SubmissionPanel = /** @class */ (function (_super) {
    __extends(SubmissionPanel, _super);
    function SubmissionPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubmissionPanel.prototype.start = function () { };
    SubmissionPanel.prototype.onQueDingBtnClick = function (event) {
        this.DetectionNet();
    };
    SubmissionPanel.prototype.onQuXiaoBtnClick = function (event) {
        UIHelp_1.UIHelp.closeSubmissionPanel();
    };
    //提交或者修改答案
    SubmissionPanel.prototype.DetectionNet = function () {
        var _this = this;
        if (!NetWork_1.NetWork.titleId) {
            UIHelp_1.UIHelp.showErrorPanel('titleId为空,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
            return;
        }
        var data = JSON.stringify({
            CoursewareKey: ConstValue_1.ConstValue.CoursewareKey,
            data: EditorManager_1.EditorManager.getData(),
        });
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_TITLE + '?title_id=' + NetWork_1.NetWork.titleId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                if (response.data.courseware_content == null || response.data.courseware_content == '') {
                    _this.AddNet(data);
                }
                else {
                    NetWork_1.NetWork.coursewareId = response.data.courseware_id;
                    var res = JSON.parse(response.data.courseware_content);
                    if (!NetWork_1.NetWork.empty) {
                        if (res.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                            _this.ModifyNet(data);
                        }
                        else {
                            UIHelp_1.UIHelp.showErrorPanel('该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork_1.NetWork.titleId, '', '', '确定');
                        }
                    }
                }
            }
        }, null);
    };
    //添加答案信息
    SubmissionPanel.prototype.AddNet = function (gameDataJson) {
        var data = {
            title_id: NetWork_1.NetWork.titleId,
            courseware_content: gameDataJson,
            is_result: 1,
            is_lavel: 1,
            lavel_num: EditorManager_1.EditorManager.getLevelCount(),
        };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.ADD, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案提交成功');
                UIHelp_1.UIHelp.closeSubmissionPanel();
            }
        }, JSON.stringify(data));
    };
    //修改课件
    SubmissionPanel.prototype.ModifyNet = function (gameDataJson) {
        var jsonData = {
            courseware_id: NetWork_1.NetWork.coursewareId,
            courseware_content: gameDataJson,
            is_result: 1,
            is_lavel: 1,
            lavel_num: EditorManager_1.EditorManager.getLevelCount(),
        };
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.MODIFY, 'POST', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                UIHelp_1.UIHelp.showTip('答案修改成功');
                UIHelp_1.UIHelp.closeSubmissionPanel();
            }
        }, JSON.stringify(jsonData));
    };
    SubmissionPanel.className = 'SubmissionPanel';
    SubmissionPanel = __decorate([
        ccclass
    ], SubmissionPanel);
    return SubmissionPanel;
}(BaseFrameUI_1.default));
exports.default = SubmissionPanel;

cc._RF.pop();