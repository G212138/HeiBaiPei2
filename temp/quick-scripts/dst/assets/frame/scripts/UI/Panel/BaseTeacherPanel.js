
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZVRlYWNoZXJQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLDhDQUE2QztBQUM3Qyw2Q0FBNEM7QUFDNUMsb0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQThDLG9DQUFNO0lBQXBEOztJQXNFQSxDQUFDO0lBcEVHLGlDQUFNLEdBQU4sY0FBVSxDQUFDO0lBRVgsZ0NBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDZCxlQUFNLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM5QixDQUFDO0lBRU0sbUNBQVEsR0FBZixjQUFtQixDQUFDO0lBRVosaUNBQU0sR0FBZDtRQUFBLGlCQXdDQztRQXZDRyxpQkFBTyxDQUFDLFdBQVcsQ0FDZixpQkFBTyxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLEVBQ2xELEtBQUssRUFDTCxnQ0FBZ0MsRUFDaEMsVUFBQyxHQUFHLEVBQUUsUUFBUTtZQUNWLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDO2dCQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUN6QixLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7b0JBQ2hCLE9BQU87aUJBQ1Y7Z0JBQ0QsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3RELGlCQUFPLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUM5QyxJQUFJLGlCQUFPLENBQUMsS0FBSyxFQUFFO29CQUNmLG1DQUFtQztvQkFDbkMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2lCQUNuQjtxQkFBTTtvQkFDSCxJQUFJLE9BQU8sSUFBSSxJQUFJLEVBQUU7d0JBQ2pCLElBQUksT0FBTyxDQUFDLGFBQWEsSUFBSSx1QkFBVSxDQUFDLGFBQWEsRUFBRTs0QkFDbkQsZUFBTSxDQUFDLGNBQWMsQ0FDakIsbUNBQW1DLEdBQUcsaUJBQU8sQ0FBQyxPQUFPLEVBQ3JELEVBQUUsRUFDRixFQUFFLEVBQ0YsSUFBSSxDQUNQLENBQUM7NEJBQ0YsT0FBTzt5QkFDVjt3QkFDRCxtQkFBbUI7d0JBQ25CLDZCQUFhLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUNuQjt5QkFBTTt3QkFDSCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ25CO2lCQUNKO2FBQ0o7UUFDTCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7SUFDTixDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLG1DQUFRLEdBQVI7UUFDSSxJQUFJLFFBQVEsR0FBRyxFQUFFLGFBQWEsRUFBRSxpQkFBTyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3ZELGlCQUFPLENBQUMsV0FBVyxDQUNmLGlCQUFPLENBQUMsS0FBSyxFQUNiLE1BQU0sRUFDTixnQ0FBZ0MsRUFDaEMsVUFBQyxHQUFHLEVBQUUsUUFBUTtZQUNWLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ04sZUFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM1QjtRQUNMLENBQUMsRUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUMzQixDQUFDO0lBQ04sQ0FBQztJQW5FYSwwQkFBUyxHQUFHLGtCQUFrQixDQUFDO0lBRDVCLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBc0VwQztJQUFELHVCQUFDO0NBdEVELEFBc0VDLENBdEU2QyxlQUFNLEdBc0VuRDtrQkF0RW9CLGdCQUFnQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcbmltcG9ydCB7IEVkaXRvck1hbmFnZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvTWFuYWdlci9FZGl0b3JNYW5hZ2VyJztcbmltcG9ydCB7IE5ldFdvcmsgfSBmcm9tICcuLi8uLi9IdHRwL05ldFdvcmsnO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCB7IEJhc2VVSSB9IGZyb20gJy4uL0Jhc2VVSSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlVGVhY2hlclBhbmVsIGV4dGVuZHMgQmFzZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdCYXNlVGVhY2hlclBhbmVsJztcbiAgICBvbkxvYWQoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuZGF0YS5ub2RlLnBhcmVudC5yZW1vdmVDaGlsZCh0aGlzLmRhdGEubm9kZSk7XG4gICAgICAgIHRoaXMuZ2V0TmV0KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZVJlY292ZXJNYXNrKCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNldFBhbmVsKCkge31cblxuICAgIHByaXZhdGUgZ2V0TmV0KCkge1xuICAgICAgICBOZXRXb3JrLmh0dHBSZXF1ZXN0KFxuICAgICAgICAgICAgTmV0V29yay5HRVRfVElUTEUgKyAnP3RpdGxlX2lkPScgKyBOZXRXb3JrLnRpdGxlSWQsXG4gICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn5raI5oGv6L+U5ZueJyArIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcy5kYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb250ZW50ID0gSlNPTi5wYXJzZShyZXMuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBOZXRXb3JrLmNvdXJzZXdhcmVJZCA9IHJlcy5kYXRhLmNvdXJzZXdhcmVfaWQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChOZXRXb3JrLmVtcHR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WmguaenFVSTOmHjOmdouW4puS6hmVtcHR55Y+C5pWwIOW5tuS4lOS4unRydWUgIOWwseeri+WIu+a4hemZpOaVsOaNrlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5DbGVhck5ldCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LkNvdXJzZXdhcmVLZXkgIT0gQ29uc3RWYWx1ZS5Db3Vyc2V3YXJlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICfor6V0aXRsZUlk5bey6KKr5L2/55SoLOivt+iBlOezu+aKgOacr+iAgeW4iOino+WGs++8gVxcbnRpdGxlSWQ9JyArIE5ldFdvcmsudGl0bGVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpznvJbovpHlmajmlbDmja7kv67mlLkg5YWI5rOo6YeK5o6J5q2k6KGMXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRWRpdG9yTWFuYWdlci5zZXREYXRhKGNvbnRlbnQuZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhbmVsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICAvL+WIoOmZpOivvuS7tuaVsOaNriAg5LiA6Iis5Li66ISP5pWw5o2u5riF55CGXG4gICAgQ2xlYXJOZXQoKSB7XG4gICAgICAgIGxldCBqc29uRGF0YSA9IHsgY291cnNld2FyZV9pZDogTmV0V29yay5jb3Vyc2V3YXJlSWQgfTtcbiAgICAgICAgTmV0V29yay5odHRwUmVxdWVzdChcbiAgICAgICAgICAgIE5ldFdvcmsuQ0xFQVIsXG4gICAgICAgICAgICAnUE9TVCcsXG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04JyxcbiAgICAgICAgICAgIChlcnIsIHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+etlOahiOWIoOmZpOaIkOWKnycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeShqc29uRGF0YSksXG4gICAgICAgICk7XG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=