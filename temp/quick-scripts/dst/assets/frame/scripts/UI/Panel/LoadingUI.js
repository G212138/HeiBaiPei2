
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcTG9hZGluZ1VJLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUseUVBQW9FO0FBQ3BFLCtFQUEwRTtBQUMxRSw4Q0FBNkM7QUFDN0MsMkRBQTBEO0FBQzFELHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMsOENBQXlDO0FBR25DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStCLDZCQUFXO0lBQTFDO1FBQUEscUVBMkdDO1FBeEdXLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBQ2pDLHNCQUFnQixHQUFZLElBQUksQ0FBQztRQUVqQyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHVCQUFpQixHQUFZLElBQUksQ0FBQztRQUNsQyx1QkFBaUIsR0FBWSxJQUFJLENBQUM7UUFFbEMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFDM0Isd0JBQWtCLEdBQVksSUFBSSxDQUFDO1FBQ25DLHdCQUFrQixHQUFZLElBQUksQ0FBQztRQUNuQyw0QkFBc0IsR0FBWSxJQUFJLENBQUM7UUFFdkMsaUJBQVcsR0FBRyxLQUFLLENBQUM7UUFDWCxrQkFBWSxHQUFXLEVBQUUsQ0FBQztRQUMxQixvQkFBYyxHQUFXLEVBQUUsQ0FBQzs7SUF5RmpELENBQUM7SUF2RkcsMEJBQU0sR0FBTjtRQUNJLGlCQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7UUFFckIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2hCLENBQUM7SUFFSyx3QkFBSSxHQUFWOzs7OzRCQUNJLHFCQUFN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VyxHQTJHekM7QUEzR1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgR2FtZVBhbmVsIGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9VSS9wYW5lbC9HYW1lUGFuZWwnO1xuaW1wb3J0IFRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvVGVhY2hlclBhbmVsJztcbmltcG9ydCB7IE5ldFdvcmsgfSBmcm9tICcuLi8uLi9IdHRwL05ldFdvcmsnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IEdhbWVNc2cgZnJvbSAnLi4vLi4vU0RLL0dhbWVNc2cnO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IEJhc2VVSSwgVUlDbGFzcyB9IGZyb20gJy4uL0Jhc2VVSSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgTG9hZGluZ1VJIGV4dGVuZHMgQmFzZUZyYW1lVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ0xvYWRpbmdVSSc7XG5cbiAgICBwcml2YXRlIF9uZF9saWtlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9wYl9sb2FkaW5nX2xpa2U6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2xiX3BlcmNlbnRfbGlrZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9uZF95dXdlbjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfcGJfbG9hZGluZ195dXdlbjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbGJfcGVyY2VudF95dXdlbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9uZF95aW5neXU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX3BiX2xvYWRpbmdfeWluZ3l1OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9sYl9wZXJjZW50X3lpbmd5dTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BfcHJvZ3Jlc3NUYWdfeWluZ3l1OiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgaXNMb2FkU3RhcnQgPSBmYWxzZTtcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9yZXNQcm9ncmVzczogbnVtYmVyID0gMjA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfYXVkaW9Qcm9ncmVzczogbnVtYmVyID0gMTA7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIE5ldFdvcmsuR2V0UmVxdWVzdCgpO1xuXG4gICAgICAgIHRoaXMuaW5pdFBhbmVsQnlTdWJqZWN0KCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGFzeW5jIGluaXQoKSB7XG4gICAgICAgIGF3YWl0IHRoaXMubG9hZFByZWxvYWREaXIoKTtcbiAgICAgICAgdGhpcy5zZXRMb2FkaW5nUHJvZ3Jlc3NVSSh0aGlzLl9yZXNQcm9ncmVzcyk7XG4gICAgICAgIHRoaXMubG9hZEF1ZGlvKCk7XG4gICAgfVxuXG4gICAgLy8g5qC55o2u5a2m56eR6K6+572u55WM6Z2iXG4gICAgaW5pdFBhbmVsQnlTdWJqZWN0KCkge1xuICAgICAgICBjb25zdCBzdWJqZWN0OiBudW1iZXIgPSBDb25zdFZhbHVlLlN1YmplY3QgfHwgMTtcbiAgICAgICAgdGhpcy5fbmRfbGlrZS5hY3RpdmUgPSAxID09PSBzdWJqZWN0O1xuICAgICAgICB0aGlzLl9uZF95dXdlbi5hY3RpdmUgPSAyID09PSBzdWJqZWN0O1xuICAgICAgICB0aGlzLl9uZF95aW5neXUuYWN0aXZlID0gMyA9PT0gc3ViamVjdDtcbiAgICAgICAgdGhpcy5fc3BfcHJvZ3Jlc3NUYWdfeWluZ3l1LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsICdsb2FkaW5nJywgdHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8g6aKE5Yqg6L296Z+z6aKRXG4gICAgYXN5bmMgbG9hZEF1ZGlvKCkge1xuICAgICAgICBTb3VuZE1hbmFnZXIucHJlTG9hZEFsbEF1ZGlvQ2xpcHMoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nUHJvZ3Jlc3NVSSh0aGlzLl9yZXNQcm9ncmVzcyArIHRoaXMuX2F1ZGlvUHJvZ3Jlc3MpO1xuICAgICAgICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g6aKE5Yqg6L29ICdyZXNvdXJjZXMvcHJlbG9hZCcg55uu5b2V5LiL55qE6LWE5rqQXG4gICAgYXN5bmMgbG9hZFByZWxvYWREaXIoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZERpcigncHJlbG9hZCcsIGNjLkFzc2V0LCAoZXJyb3I6IEVycm9yLCBhc3NldHM6IGNjLkFzc2V0W10pID0+IHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5omT5byA55WM6Z2iXG4gICAgb3BlblBhbmVsKCkge1xuICAgICAgICBsZXQgb25Qcm9ncmVzcyA9IChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzTG9hZFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRTdGFydCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAvL+aWsOivvuWgguS4iuaKpVxuICAgICAgICAgICAgICAgIEdhbWVNc2cucmVzTG9hZFN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hQcm9ncmVzcyA9IHRoaXMuX3Jlc1Byb2dyZXNzICsgdGhpcy5fYXVkaW9Qcm9ncmVzcztcbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IGZpbmlzaFByb2dyZXNzICsgTWF0aC5yb3VuZCgoY29tcGxldGVkQ291bnQgLyB0b3RhbENvdW50KSAqICgxMDAgLSBmaW5pc2hQcm9ncmVzcykpO1xuICAgICAgICAgICAgdGhpcy5zZXRMb2FkaW5nUHJvZ3Jlc3NVSSh2YWx1ZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgbGV0IG9wZW5QYW5lbDogVUlDbGFzczxCYXNlVUk+ID0gQ29uc3RWYWx1ZS5JU19URUFDSEVSID8gVGVhY2hlclBhbmVsIDogR2FtZVBhbmVsO1xuXG4gICAgICAgIFVJTWFuYWdlci5vcGVuVUkoXG4gICAgICAgICAgICBvcGVuUGFuZWwsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAvL+aWsOivvuWgguS4iuaKpVxuICAgICAgICAgICAgICAgIEdhbWVNc2cucmVzTG9hZEVuZCgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUHJvZ3Jlc3MsXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc2V0TG9hZGluZ1Byb2dyZXNzVUkodmFsdWU6IG51bWJlcikge1xuICAgICAgICAvL+aWsOivvuWgguS4iuaKpVxuICAgICAgICBHYW1lTXNnLnJlc0xvYWRpbmcodmFsdWUpO1xuXG4gICAgICAgIHRoaXMuX3BiX2xvYWRpbmdfbGlrZS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIHRoaXMuX3BiX2xvYWRpbmdfeXV3ZW4uZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKS5wcm9ncmVzcyA9IHZhbHVlIC8gMTAwO1xuICAgICAgICB0aGlzLl9wYl9sb2FkaW5nX3lpbmd5dS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpLnByb2dyZXNzID0gdmFsdWUgLyAxMDA7XG4gICAgICAgIHRoaXMuX2xiX3BlcmNlbnRfbGlrZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCkgKyAnJSc7XG4gICAgICAgIHRoaXMuX2xiX3BlcmNlbnRfeXV3ZW4uZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB2YWx1ZS50b1N0cmluZygpICsgJyUnO1xuICAgICAgICB0aGlzLl9sYl9wZXJjZW50X3lpbmd5dS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbHVlLnRvU3RyaW5nKCkgKyAnJSc7XG5cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoMyA9PT0gQ29uc3RWYWx1ZS5TdWJqZWN0ICYmIHZhbHVlID49IDgwKSB7XG4gICAgICAgICAgICBsZXQgc3BDb21wID0gdGhpcy5fc3BfcHJvZ3Jlc3NUYWdfeWluZ3l1LmdldENvbXBvbmVudChzcC5Ta2VsZXRvbik7XG4gICAgICAgICAgICBjb25zdCBmaW5pc2hBbmltID0gJ2ZpbmlzaCc7XG4gICAgICAgICAgICBpZiAoZmluaXNoQW5pbSAhPT0gc3BDb21wLmFuaW1hdGlvbikge1xuICAgICAgICAgICAgICAgIHNwQ29tcC5zZXRBbmltYXRpb24oMCwgZmluaXNoQW5pbSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19