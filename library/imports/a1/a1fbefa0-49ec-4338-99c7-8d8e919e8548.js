"use strict";
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