"use strict";
cc._RF.push(module, 'cf8a66RO2hJWJN7q1dt4/zn', 'LoadingUI');
// frame/scripts/UI/Panel/LoadingUI.ts

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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingUI = void 0;
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var GamePanel_1 = require("../../../../game/scripts/UI/panel/GamePanel");
var TeacherPanel_1 = require("../../../../game/scripts/UI/panel/TeacherPanel");
var NetWork_1 = require("../../Http/NetWork");
var SoundManager_1 = require("../../Manager/SoundManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var BaseFrameUI_1 = require("../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var LoadingUI = /** @class */ (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_like = null;
        _this._pb_loading_like = null;
        _this._lb_percent_like = null;
        _this._nd_yuwen = null;
        _this._pb_loading_yuwen = null;
        _this._lb_percent_yuwen = null;
        _this._nd_yingyu = null;
        _this._pb_loading_yingyu = null;
        _this._lb_percent_yingyu = null;
        _this._sp_progressTag_yingyu = null;
        _this.isLoadStart = false;
        _this._resProgress = 20;
        _this._audioProgress = 10;
        return _this;
    }
    LoadingUI.prototype.onLoad = function () {
        NetWork_1.NetWork.GetRequest();
        this.initPanelBySubject();
        this.init();
    };
    LoadingUI.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadPreloadDir()];
                    case 1:
                        _a.sent();
                        this.setLoadingProgressUI(this._resProgress);
                        this.loadAudio();
                        return [2 /*return*/];
                }
            });
        });
    };
    // 根据学科设置界面
    LoadingUI.prototype.initPanelBySubject = function () {
        var subject = ConstValue_1.ConstValue.Subject || 1;
        this._nd_like.active = 1 === subject;
        this._nd_yuwen.active = 2 === subject;
        this._nd_yingyu.active = 3 === subject;
        this._sp_progressTag_yingyu.getComponent(sp.Skeleton).setAnimation(0, 'loading', true);
    };
    // 预加载音频
    LoadingUI.prototype.loadAudio = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                SoundManager_1.SoundManager.preLoadAllAudioClips(function () {
                    _this.setLoadingProgressUI(_this._resProgress + _this._audioProgress);
                    _this.openPanel();
                });
                return [2 /*return*/];
            });
        });
    };
    // 预加载 'resources/preload' 目录下的资源
    LoadingUI.prototype.loadPreloadDir = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        cc.resources.loadDir('preload', cc.Asset, function (error, assets) {
                            resolve();
                        });
                    })];
            });
        });
    };
    // 打开界面
    LoadingUI.prototype.openPanel = function () {
        var _this = this;
        var onProgress = function (completedCount, totalCount, item) {
            if (!_this.isLoadStart) {
                _this.isLoadStart = true;
                //新课堂上报
                GameMsg_1.default.resLoadStart();
            }
            var finishProgress = _this._resProgress + _this._audioProgress;
            var value = finishProgress + Math.round((completedCount / totalCount) * (100 - finishProgress));
            _this.setLoadingProgressUI(value);
        };
        var openPanel = ConstValue_1.ConstValue.IS_TEACHER ? TeacherPanel_1.default : GamePanel_1.default;
        UIManager_1.UIManager.openUI(openPanel, this, 0, function () {
            //新课堂上报
            GameMsg_1.default.resLoadEnd();
        }, onProgress);
    };
    LoadingUI.prototype.setLoadingProgressUI = function (value) {
        //新课堂上报
        GameMsg_1.default.resLoading(value);
        this._pb_loading_like.getComponent(cc.ProgressBar).progress = value / 100;
        this._pb_loading_yuwen.getComponent(cc.ProgressBar).progress = value / 100;
        this._pb_loading_yingyu.getComponent(cc.ProgressBar).progress = value / 100;
        this._lb_percent_like.getComponent(cc.Label).string = value.toString() + '%';
        this._lb_percent_yuwen.getComponent(cc.Label).string = value.toString() + '%';
        this._lb_percent_yingyu.getComponent(cc.Label).string = value.toString() + '%';
        // @ts-ignore
        if (3 === ConstValue_1.ConstValue.Subject && value >= 80) {
            var spComp = this._sp_progressTag_yingyu.getComponent(sp.Skeleton);
            var finishAnim = 'finish';
            if (finishAnim !== spComp.animation) {
                spComp.setAnimation(0, finishAnim, false);
            }
        }
    };
    LoadingUI.className = 'LoadingUI';
    LoadingUI = __decorate([
        ccclass
    ], LoadingUI);
    return LoadingUI;
}(BaseFrameUI_1.default));
exports.LoadingUI = LoadingUI;

cc._RF.pop();