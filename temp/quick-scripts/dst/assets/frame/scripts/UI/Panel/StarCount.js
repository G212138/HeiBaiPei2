
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a1fbe+gSexDOJnHjY6RnoVI', 'StarCount');
// frame/scripts/UI/Panel/StarCount.ts

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
var SoundManager_1 = require("./../../Manager/SoundManager");
var Tools_1 = require("../../Utils/Tools");
var BaseFrameUI_1 = require("../BaseFrameUI");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var UIHelp_1 = require("../../Utils/UIHelp");
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StarCount = /** @class */ (function (_super) {
    __extends(StarCount, _super);
    function StarCount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._btn_replay = null;
        _this._sp_like_youxiao = null;
        _this._sp_like_xiaodi = null;
        _this._sp_yuwen = null;
        _this._sp_yingyu = null;
        _this.audioList = ['', 'star_good', 'star_great', 'star_perfect'];
        return _this;
    }
    StarCount.prototype.onLoad = function () {
        if (this._sp_like_youxiao) {
            this._sp_like_youxiao.active = false;
        }
        if (this._sp_like_xiaodi) {
            this._sp_like_xiaodi.active = false;
        }
        if (this._sp_yuwen) {
            this._sp_yuwen.active = false;
        }
        if (this._sp_yingyu) {
            this._sp_yingyu.active = false;
        }
    };
    /**
     *
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    StarCount.prototype.showStars = function (isShowReplay, starNum) {
        var star = 0;
        if (void 0 === starNum || null === starNum) {
            star = ReportManager_1.ReportManager.getStarCount();
        }
        else {
            star = starNum;
        }
        SoundManager_1.SoundManager.playEffect(this.audioList[star], false);
        UIHelp_1.UIHelp.closeMask();
        if (this._btn_replay) {
            this._btn_replay.active = isShowReplay;
        }
        var subject = ConstValue_1.ConstValue.Subject || 1;
        var spine = null;
        switch (subject) {
            case 1:
                {
                    var level = EditorManager_1.EditorManager.getCoursewareLevel();
                    if (level < 0 || level > 2) {
                        UIHelp_1.UIHelp.closeStarCount();
                        UIHelp_1.UIHelp.showErrorPanel('coursewareLevel错误，请在EditorManager中设置！');
                        return;
                    }
                    if (0 === level) {
                        spine = this._sp_like_youxiao && this._sp_like_youxiao.getComponent(sp.Skeleton);
                    }
                    else if (1 === level || 2 === level) {
                        spine = this._sp_like_xiaodi && this._sp_like_xiaodi.getComponent(sp.Skeleton);
                    }
                }
                break;
            case 2:
                {
                    spine = this._sp_yuwen && this._sp_yuwen.getComponent(sp.Skeleton);
                }
                break;
            case 3:
                {
                    spine = this._sp_yingyu && this._sp_yingyu.getComponent(sp.Skeleton);
                }
                break;
        }
        if (spine) {
            spine.node.active = true;
            Tools_1.Tools.playSpine(spine, "in_0" + star, false, function () {
                Tools_1.Tools.playSpine(spine, "idle_0" + star, true);
            });
        }
    };
    StarCount.className = 'StarCount';
    StarCount = __decorate([
        ccclass
    ], StarCount);
    return StarCount;
}(BaseFrameUI_1.default));
exports.default = StarCount;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcU3RhckNvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCwyQ0FBMEM7QUFDMUMsOENBQXlDO0FBQ3pDLGdGQUErRTtBQUMvRSw2REFBNEQ7QUFDNUQsNkNBQTRDO0FBQzVDLHVFQUFzRTtBQUVoRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF1Qyw2QkFBVztJQUFsRDtRQUFBLHFFQW1GQztRQWhGVyxpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixzQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFDakMscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFDaEMsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixlQUFTLEdBQWEsQ0FBQyxFQUFFLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUMsQ0FBQzs7SUEwRWxGLENBQUM7SUF4RUcsMEJBQU0sR0FBTjtRQUNJLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3hDO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2xDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw2QkFBUyxHQUFULFVBQVUsWUFBc0IsRUFBRSxPQUFnQjtRQUM5QyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUM7UUFDYixJQUFJLEtBQUssQ0FBQyxLQUFLLE9BQU8sSUFBSSxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ3hDLElBQUksR0FBRyw2QkFBYSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxJQUFJLEdBQUcsT0FBTyxDQUFDO1NBQ2xCO1FBRUQsMkJBQVksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNyRCxlQUFNLENBQUMsU0FBUyxFQUFFLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztTQUMxQztRQUVELElBQU0sT0FBTyxHQUFXLHVCQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQztRQUNoRCxJQUFJLEtBQUssR0FBZ0IsSUFBSSxDQUFDO1FBQzlCLFFBQVEsT0FBTyxFQUFFO1lBQ2IsS0FBSyxDQUFDO2dCQUNGO29CQUNJLElBQU0sS0FBSyxHQUFHLDZCQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztvQkFDakQsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7d0JBQ3hCLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQzt3QkFDeEIsZUFBTSxDQUFDLGNBQWMsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO3dCQUMvRCxPQUFPO3FCQUNWO29CQUVELElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTt3QkFDYixLQUFLLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNwRjt5QkFBTSxJQUFJLENBQUMsS0FBSyxLQUFLLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTt3QkFDbkMsS0FBSyxHQUFHLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNsRjtpQkFDSjtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGO29CQUNJLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQztpQkFDdEU7Z0JBQ0QsTUFBTTtZQUNWLEtBQUssQ0FBQztnQkFDRjtvQkFDSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3hFO2dCQUNELE1BQU07U0FDYjtRQUNELElBQUksS0FBSyxFQUFFO1lBQ1AsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLGFBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLFNBQU8sSUFBTSxFQUFFLEtBQUssRUFBRTtnQkFDekMsYUFBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsV0FBUyxJQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7U0FDTjtJQUNMLENBQUM7SUFqRmEsbUJBQVMsR0FBRyxXQUFXLENBQUM7SUFEckIsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1GN0I7SUFBRCxnQkFBQztDQW5GRCxBQW1GQyxDQW5Gc0MscUJBQVcsR0FtRmpEO2tCQW5Gb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgVG9vbHMgfSBmcm9tICcuLi8uLi9VdGlscy9Ub29scyc7XG5pbXBvcnQgQmFzZUZyYW1lVUkgZnJvbSAnLi4vQmFzZUZyYW1lVUknO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvUmVwb3J0TWFuYWdlcic7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgQ29uc3RWYWx1ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9EYXRhL0NvbnN0VmFsdWUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RhckNvdW50IGV4dGVuZHMgQmFzZUZyYW1lVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ1N0YXJDb3VudCc7XG5cbiAgICBwcml2YXRlIF9idG5fcmVwbGF5OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcF9saWtlX3lvdXhpYW86IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX3NwX2xpa2VfeGlhb2RpOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcF95dXdlbjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BfeWluZ3l1OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgYXVkaW9MaXN0OiBzdHJpbmdbXSA9IFsnJywgJ3N0YXJfZ29vZCcsICdzdGFyX2dyZWF0JywgJ3N0YXJfcGVyZmVjdCddO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBpZiAodGhpcy5fc3BfbGlrZV95b3V4aWFvKSB7XG4gICAgICAgICAgICB0aGlzLl9zcF9saWtlX3lvdXhpYW8uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX3NwX2xpa2VfeGlhb2RpKSB7XG4gICAgICAgICAgICB0aGlzLl9zcF9saWtlX3hpYW9kaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fc3BfeXV3ZW4pIHtcbiAgICAgICAgICAgIHRoaXMuX3NwX3l1d2VuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLl9zcF95aW5neXUpIHtcbiAgICAgICAgICAgIHRoaXMuX3NwX3lpbmd5dS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqXG4gICAgICogQHBhcmFtIGlzU2hvd1JlcGxheSDmmK/lkKbmmL7npLrph43njqnmjInpkq5cbiAgICAgKiBAcGFyYW0gc3Rhck51bSDmmJ/mlbAgKOS4jeS8oOWPguaVsOWImeS7jlJlcG9ydE1hbmFnZXLph4zlj5blgLwpXG4gICAgICovXG4gICAgc2hvd1N0YXJzKGlzU2hvd1JlcGxheT86IGJvb2xlYW4sIHN0YXJOdW0/OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IHN0YXIgPSAwO1xuICAgICAgICBpZiAodm9pZCAwID09PSBzdGFyTnVtIHx8IG51bGwgPT09IHN0YXJOdW0pIHtcbiAgICAgICAgICAgIHN0YXIgPSBSZXBvcnRNYW5hZ2VyLmdldFN0YXJDb3VudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhciA9IHN0YXJOdW07XG4gICAgICAgIH1cblxuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCh0aGlzLmF1ZGlvTGlzdFtzdGFyXSwgZmFsc2UpO1xuICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuX2J0bl9yZXBsYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX2J0bl9yZXBsYXkuYWN0aXZlID0gaXNTaG93UmVwbGF5O1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3ViamVjdDogbnVtYmVyID0gQ29uc3RWYWx1ZS5TdWJqZWN0IHx8IDE7XG4gICAgICAgIGxldCBzcGluZTogc3AuU2tlbGV0b24gPSBudWxsO1xuICAgICAgICBzd2l0Y2ggKHN1YmplY3QpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxldmVsID0gRWRpdG9yTWFuYWdlci5nZXRDb3Vyc2V3YXJlTGV2ZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxldmVsIDwgMCB8fCBsZXZlbCA+IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKCdjb3Vyc2V3YXJlTGV2ZWzplJnor6/vvIzor7flnKhFZGl0b3JNYW5hZ2Vy5Lit6K6+572u77yBJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gbGV2ZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwaW5lID0gdGhpcy5fc3BfbGlrZV95b3V4aWFvICYmIHRoaXMuX3NwX2xpa2VfeW91eGlhby5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKDEgPT09IGxldmVsIHx8IDIgPT09IGxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGluZSA9IHRoaXMuX3NwX2xpa2VfeGlhb2RpICYmIHRoaXMuX3NwX2xpa2VfeGlhb2RpLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzcGluZSA9IHRoaXMuX3NwX3l1d2VuICYmIHRoaXMuX3NwX3l1d2VuLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3BpbmUgPSB0aGlzLl9zcF95aW5neXUgJiYgdGhpcy5fc3BfeWluZ3l1LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcGluZSkge1xuICAgICAgICAgICAgc3BpbmUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwaW5lLCBgaW5fMCR7c3Rhcn1gLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIFRvb2xzLnBsYXlTcGluZShzcGluZSwgYGlkbGVfMCR7c3Rhcn1gLCB0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19