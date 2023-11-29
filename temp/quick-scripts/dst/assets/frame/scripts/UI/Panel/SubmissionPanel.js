
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcU3VibWlzc2lvblBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUE2QztBQUM3Qyw4Q0FBeUM7QUFDekMsNkNBQTRDO0FBQzVDLHVFQUFzRTtBQUN0RSxnRkFBK0U7QUFFekUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBNkMsbUNBQVc7SUFBeEQ7O0lBaUdBLENBQUM7SUEvRkcsK0JBQUssR0FBTCxjQUFTLENBQUM7SUFFViwyQ0FBaUIsR0FBakIsVUFBa0IsS0FBSztRQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELDBDQUFnQixHQUFoQixVQUFpQixLQUFLO1FBQ2xCLGVBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxVQUFVO0lBQ1Ysc0NBQVksR0FBWjtRQUFBLGlCQXFDQztRQXBDRyxJQUFJLENBQUMsaUJBQU8sQ0FBQyxPQUFPLEVBQUU7WUFDbEIsZUFBTSxDQUFDLGNBQWMsQ0FBQyxnQ0FBZ0MsR0FBRyxpQkFBTyxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3hGLE9BQU87U0FDVjtRQUNELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDdEIsYUFBYSxFQUFFLHVCQUFVLENBQUMsYUFBYTtZQUN2QyxJQUFJLEVBQUUsNkJBQWEsQ0FBQyxPQUFPLEVBQUU7U0FDaEMsQ0FBQyxDQUFDO1FBQ0gsaUJBQU8sQ0FBQyxXQUFXLENBQ2YsaUJBQU8sQ0FBQyxTQUFTLEdBQUcsWUFBWSxHQUFHLGlCQUFPLENBQUMsT0FBTyxFQUNsRCxLQUFLLEVBQ0wsZ0NBQWdDLEVBQ2hDLFVBQUMsR0FBRyxFQUFFLFFBQVE7WUFDVixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxJQUFJLElBQUksUUFBUSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsSUFBSSxFQUFFLEVBQUU7b0JBQ3BGLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3JCO3FCQUFNO29CQUNILGlCQUFPLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO29CQUNuRCxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDdkQsSUFBSSxDQUFDLGlCQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNoQixJQUFJLEdBQUcsQ0FBQyxhQUFhLElBQUksdUJBQVUsQ0FBQyxhQUFhLEVBQUU7NEJBQy9DLEtBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNILGVBQU0sQ0FBQyxjQUFjLENBQ2pCLG1DQUFtQyxHQUFHLGlCQUFPLENBQUMsT0FBTyxFQUNyRCxFQUFFLEVBQ0YsRUFBRSxFQUNGLElBQUksQ0FDUCxDQUFDO3lCQUNMO3FCQUNKO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7SUFDTixDQUFDO0lBRUQsUUFBUTtJQUNSLGdDQUFNLEdBQU4sVUFBTyxZQUFZO1FBQ2YsSUFBSSxJQUFJLEdBQUc7WUFDUCxRQUFRLEVBQUUsaUJBQU8sQ0FBQyxPQUFPO1lBQ3pCLGtCQUFrQixFQUFFLFlBQVk7WUFDaEMsU0FBUyxFQUFFLENBQUM7WUFDWixRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSw2QkFBYSxDQUFDLGFBQWEsRUFBRTtTQUMzQyxDQUFDO1FBQ0YsaUJBQU8sQ0FBQyxXQUFXLENBQ2YsaUJBQU8sQ0FBQyxHQUFHLEVBQ1gsTUFBTSxFQUNOLGdDQUFnQyxFQUNoQyxVQUFDLEdBQUcsRUFBRSxRQUFRO1lBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDTixlQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUN6QixlQUFNLENBQUMsb0JBQW9CLEVBQUUsQ0FBQzthQUNqQztRQUNMLENBQUMsRUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUN2QixDQUFDO0lBQ04sQ0FBQztJQUVELE1BQU07SUFDTixtQ0FBUyxHQUFULFVBQVUsWUFBWTtRQUNsQixJQUFJLFFBQVEsR0FBRztZQUNYLGFBQWEsRUFBRSxpQkFBTyxDQUFDLFlBQVk7WUFDbkMsa0JBQWtCLEVBQUUsWUFBWTtZQUNoQyxTQUFTLEVBQUUsQ0FBQztZQUNaLFFBQVEsRUFBRSxDQUFDO1lBQ1gsU0FBUyxFQUFFLDZCQUFhLENBQUMsYUFBYSxFQUFFO1NBQzNDLENBQUM7UUFDRixpQkFBTyxDQUFDLFdBQVcsQ0FDZixpQkFBTyxDQUFDLE1BQU0sRUFDZCxNQUFNLEVBQ04sZ0NBQWdDLEVBQ2hDLFVBQUMsR0FBRyxFQUFFLFFBQVE7WUFDVixJQUFJLENBQUMsR0FBRyxFQUFFO2dCQUNOLGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pCLGVBQU0sQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQ2pDO1FBQ0wsQ0FBQyxFQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQzNCLENBQUM7SUFDTixDQUFDO0lBL0ZhLHlCQUFTLEdBQUcsaUJBQWlCLENBQUM7SUFEM0IsZUFBZTtRQURuQyxPQUFPO09BQ2EsZUFBZSxDQWlHbkM7SUFBRCxzQkFBQztDQWpHRCxBQWlHQyxDQWpHNEMscUJBQVcsR0FpR3ZEO2tCQWpHb0IsZUFBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5ldFdvcmsgfSBmcm9tICcuLi8uLi9IdHRwL05ldFdvcmsnO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJtaXNzaW9uUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnU3VibWlzc2lvblBhbmVsJztcbiAgICBzdGFydCgpIHt9XG5cbiAgICBvblF1ZURpbmdCdG5DbGljayhldmVudCkge1xuICAgICAgICB0aGlzLkRldGVjdGlvbk5ldCgpO1xuICAgIH1cblxuICAgIG9uUXVYaWFvQnRuQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3VibWlzc2lvblBhbmVsKCk7XG4gICAgfVxuXG4gICAgLy/mj5DkuqTmiJbogIXkv67mlLnnrZTmoYhcbiAgICBEZXRlY3Rpb25OZXQoKSB7XG4gICAgICAgIGlmICghTmV0V29yay50aXRsZUlkKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ3RpdGxlSWTkuLrnqbos6K+36IGU57O75oqA5pyv6ICB5biI6Kej5Yaz77yBXFxudGl0bGVJZD0nICsgTmV0V29yay50aXRsZUlkLCAnJywgJycsICfnoa7lrponKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZGF0YSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgIENvdXJzZXdhcmVLZXk6IENvbnN0VmFsdWUuQ291cnNld2FyZUtleSxcbiAgICAgICAgICAgIGRhdGE6IEVkaXRvck1hbmFnZXIuZ2V0RGF0YSgpLFxuICAgICAgICB9KTtcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcbiAgICAgICAgICAgIE5ldFdvcmsuR0VUX1RJVExFICsgJz90aXRsZV9pZD0nICsgTmV0V29yay50aXRsZUlkLFxuICAgICAgICAgICAgJ0dFVCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY291cnNld2FyZV9jb250ZW50ID09IG51bGwgfHwgcmVzcG9uc2UuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuQWRkTmV0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgTmV0V29yay5jb3Vyc2V3YXJlSWQgPSByZXNwb25zZS5kYXRhLmNvdXJzZXdhcmVfaWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmNvdXJzZXdhcmVfY29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU5ldFdvcmsuZW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLkNvdXJzZXdhcmVLZXkgPT0gQ29uc3RWYWx1ZS5Db3Vyc2V3YXJlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTW9kaWZ5TmV0KGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfor6V0aXRsZUlk5bey6KKr5L2/55SoLOivt+iBlOezu+aKgOacr+iAgeW4iOino+WGs++8gVxcbnRpdGxlSWQ9JyArIE5ldFdvcmsudGl0bGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL+a3u+WKoOetlOahiOS/oeaBr1xuICAgIEFkZE5ldChnYW1lRGF0YUpzb24pIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICB0aXRsZV9pZDogTmV0V29yay50aXRsZUlkLFxuICAgICAgICAgICAgY291cnNld2FyZV9jb250ZW50OiBnYW1lRGF0YUpzb24sXG4gICAgICAgICAgICBpc19yZXN1bHQ6IDEsXG4gICAgICAgICAgICBpc19sYXZlbDogMSxcbiAgICAgICAgICAgIGxhdmVsX251bTogRWRpdG9yTWFuYWdlci5nZXRMZXZlbENvdW50KCksXG4gICAgICAgIH07XG4gICAgICAgIE5ldFdvcmsuaHR0cFJlcXVlc3QoXG4gICAgICAgICAgICBOZXRXb3JrLkFERCxcbiAgICAgICAgICAgICdQT1NUJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn562U5qGI5o+Q5Lqk5oiQ5YqfJyk7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZVN1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShkYXRhKSxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL+S/ruaUueivvuS7tlxuICAgIE1vZGlmeU5ldChnYW1lRGF0YUpzb24pIHtcbiAgICAgICAgbGV0IGpzb25EYXRhID0ge1xuICAgICAgICAgICAgY291cnNld2FyZV9pZDogTmV0V29yay5jb3Vyc2V3YXJlSWQsXG4gICAgICAgICAgICBjb3Vyc2V3YXJlX2NvbnRlbnQ6IGdhbWVEYXRhSnNvbixcbiAgICAgICAgICAgIGlzX3Jlc3VsdDogMSxcbiAgICAgICAgICAgIGlzX2xhdmVsOiAxLFxuICAgICAgICAgICAgbGF2ZWxfbnVtOiBFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSxcbiAgICAgICAgfTtcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcbiAgICAgICAgICAgIE5ldFdvcmsuTU9ESUZZLFxuICAgICAgICAgICAgJ1BPU1QnLFxuICAgICAgICAgICAgJ2FwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtOCcsXG4gICAgICAgICAgICAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93VGlwKCfnrZTmoYjkv67mlLnmiJDlip8nKTtcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLmNsb3NlU3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGpzb25EYXRhKSxcbiAgICAgICAgKTtcbiAgICB9XG59XG4iXX0=