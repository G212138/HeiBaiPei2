
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/Role.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '821bakKSEpISIa9tDkLmEA5', 'Role');
// game/scripts/UI/Item/Role.ts

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
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var SoundManager_1 = require("../../../../frame/scripts/Manager/SoundManager");
var Tools_1 = require("../../../../frame/scripts/Utils/Tools");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Role = /** @class */ (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.role_skeleton = null;
        _this.type = 0;
        _this.geziIndex = 0;
        return _this;
    }
    Role.prototype.onClickRole = function () {
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_ROLE, this.geziIndex);
    };
    Role.prototype.showInit = function () {
        var _this = this;
        Tools_1.Tools.playSpine(this.role_skeleton, "eft_smoke", false, function () {
            _this.initRole();
        });
    };
    Role.prototype.initRole = function () {
        var aniName = "";
        if (this.type == 5) {
            aniName = "3";
        }
        else if (this.type == 6) {
            aniName = "4";
        }
        else if (this.type == 7) {
            aniName = "7";
        }
        else {
            aniName = "role" + this.type + "_stand";
        }
        Tools_1.Tools.playSpine(this.role_skeleton, aniName, true);
    };
    Role.prototype.showClick = function () {
        var aniName = "";
        if (this.type == 5) {
            aniName = "3";
        }
        else if (this.type == 6) {
            aniName = "4";
        }
        else if (this.type == 7) {
            aniName = "7";
        }
        else {
            aniName = "role" + this.type + "_yihuo";
        }
        Tools_1.Tools.playSpine(this.role_skeleton, aniName, true);
    };
    Role.prototype.showChange = function () {
        var _this = this;
        Tools_1.Tools.playSpine(this.role_skeleton, "eft_smoke", false, function () {
            var aniName = "1";
            if (_this.type == 2) {
                aniName = "6";
            }
            else if (_this.type == 4) {
                aniName = "5";
            }
            else if (_this.type == 6) {
                aniName = "1";
            }
            else if (_this.type == 7) {
                aniName = "2";
            }
            SoundManager_1.SoundManager.playEffect("图案变身视频的音效", false);
            Tools_1.Tools.playSpine(_this.role_skeleton, aniName, true);
        });
    };
    __decorate([
        property(sp.Skeleton)
    ], Role.prototype, "role_skeleton", void 0);
    Role = __decorate([
        ccclass
    ], Role);
    return Role;
}(cc.Component));
exports.default = Role;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFJvbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLCtFQUE4RTtBQUM5RSwrREFBOEQ7QUFDOUQsa0RBQWlEO0FBRzNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBOERDO1FBM0RXLG1CQUFhLEdBQWdCLElBQUksQ0FBQztRQUVuQyxVQUFJLEdBQVcsQ0FBQyxDQUFDO1FBQ2pCLGVBQVMsR0FBVyxDQUFDLENBQUM7O0lBd0RqQyxDQUFDO0lBdERXLDBCQUFXLEdBQW5CO1FBQ0ksaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFTSx1QkFBUSxHQUFmO1FBQUEsaUJBSUM7UUFIRyxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRTtZQUNwRCxLQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRU0sdUJBQVEsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTTtZQUNILE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDM0M7UUFDRCxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx3QkFBUyxHQUFoQjtRQUNJLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2hCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUM7U0FDakI7YUFBTTtZQUNILE9BQU8sR0FBRyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7U0FDM0M7UUFDRCxhQUFLLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTSx5QkFBVSxHQUFqQjtRQUFBLGlCQWVDO1FBZEcsYUFBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUU7WUFDcEQsSUFBSSxPQUFPLEdBQUcsR0FBRyxDQUFDO1lBQ2xCLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ2hCLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDakI7aUJBQU0sSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsRUFBRTtnQkFDdkIsT0FBTyxHQUFHLEdBQUcsQ0FBQzthQUNqQjtpQkFBTSxJQUFJLEtBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO2dCQUN2QixPQUFPLEdBQUcsR0FBRyxDQUFDO2FBQ2pCO2lCQUFNLElBQUksS0FBSSxDQUFDLElBQUksSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLE9BQU8sR0FBRyxHQUFHLENBQUM7YUFDakI7WUFDRCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDNUMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUExREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQ0FDb0I7SUFIekIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQThEeEI7SUFBRCxXQUFDO0NBOURELEFBOERDLENBOURpQyxFQUFFLENBQUMsU0FBUyxHQThEN0M7a0JBOURvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9Tb3VuZE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVG9vbHMgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9Ub29sc1wiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9sZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KHNwLlNrZWxldG9uKVxyXG4gICAgcHJpdmF0ZSByb2xlX3NrZWxldG9uOiBzcC5Ta2VsZXRvbiA9IG51bGw7XHJcblxyXG4gICAgcHVibGljIHR5cGU6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgZ2V6aUluZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1JvbGUoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5DTElDS19ST0xFLCB0aGlzLmdlemlJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dJbml0KCkge1xyXG4gICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnJvbGVfc2tlbGV0b24sIFwiZWZ0X3Ntb2tlXCIsIGZhbHNlLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdFJvbGUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5pdFJvbGUoKSB7XHJcbiAgICAgICAgbGV0IGFuaU5hbWUgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT0gNSkge1xyXG4gICAgICAgICAgICBhbmlOYW1lID0gXCIzXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gNikge1xyXG4gICAgICAgICAgICBhbmlOYW1lID0gXCI0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gNykge1xyXG4gICAgICAgICAgICBhbmlOYW1lID0gXCI3XCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYW5pTmFtZSA9IFwicm9sZVwiICsgdGhpcy50eXBlICsgXCJfc3RhbmRcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMucm9sZV9za2VsZXRvbiwgYW5pTmFtZSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dDbGljaygpIHtcclxuICAgICAgICBsZXQgYW5pTmFtZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PSA1KSB7XHJcbiAgICAgICAgICAgIGFuaU5hbWUgPSBcIjNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSA2KSB7XHJcbiAgICAgICAgICAgIGFuaU5hbWUgPSBcIjRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSA3KSB7XHJcbiAgICAgICAgICAgIGFuaU5hbWUgPSBcIjdcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhbmlOYW1lID0gXCJyb2xlXCIgKyB0aGlzLnR5cGUgKyBcIl95aWh1b1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5yb2xlX3NrZWxldG9uLCBhbmlOYW1lLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0NoYW5nZSgpIHtcclxuICAgICAgICBUb29scy5wbGF5U3BpbmUodGhpcy5yb2xlX3NrZWxldG9uLCBcImVmdF9zbW9rZVwiLCBmYWxzZSwgKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYW5pTmFtZSA9IFwiMVwiO1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09IDIpIHtcclxuICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcIjZcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT0gNCkge1xyXG4gICAgICAgICAgICAgICAgYW5pTmFtZSA9IFwiNVwiO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PSA2KSB7XHJcbiAgICAgICAgICAgICAgICBhbmlOYW1lID0gXCIxXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50eXBlID09IDcpIHtcclxuICAgICAgICAgICAgICAgIGFuaU5hbWUgPSBcIjJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIuWbvuahiOWPmOi6q+inhumikeeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZSh0aGlzLnJvbGVfc2tlbGV0b24sIGFuaU5hbWUsIHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==