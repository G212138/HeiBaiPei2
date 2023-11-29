"use strict";
cc._RF.push(module, 'fcb706mngZPXIeAjofYaIuT', 'UIManager');
// frame/scripts/Manager/UIManager.ts

"use strict";
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
exports.EPANEL_ZORDER = exports.UIManager = void 0;
var BaseUI_1 = require("../UI/BaseUI");
var UIManagerClass = /** @class */ (function () {
    function UIManagerClass() {
        this.uiList = [];
        this.uiRoot = null;
        this.stateList = new Object();
        this.isGameShowing = true;
        // this.uiRoot = cc.find("Canvas");
    }
    UIManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new UIManagerClass();
        }
        return this._instance;
    };
    UIManagerClass.prototype.loadUI = function (uiClass, callback, onProgress) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            args[_i - 3] = arguments[_i];
        }
        return new Promise(function (resolve, reject) {
            var progressFunc = function (completedCount, totalCount, item) {
                if (onProgress) {
                    onProgress(completedCount, totalCount, item);
                }
            };
            var completeFunc = function (error, asset) {
                if (error) {
                    cc.log(error);
                    return reject(null);
                }
                if (callback) {
                    callback(asset);
                }
                return resolve(asset);
            };
            if (uiClass.isFramePanel) {
                cc.assetManager.loadBundle('frameRes', function (err, bundle) {
                    if (err) {
                        cc.error(err);
                        return reject(null);
                    }
                    bundle.load(uiClass.getUrl(), progressFunc, completeFunc);
                });
            }
            else {
                cc.resources.load(uiClass.getUrl(), progressFunc, completeFunc);
            }
        });
    };
    UIManagerClass.prototype.openUI = function (uiClass, data, zOrder, callback, onProgress) {
        var args = [];
        for (var _i = 5; _i < arguments.length; _i++) {
            args[_i - 5] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var prefab, uiNode, ui;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.uiRoot) {
                            this.uiRoot = cc.find('Canvas');
                        }
                        if (this.getUI(uiClass)) {
                            return [2 /*return*/, true];
                        }
                        this.stateList[uiClass.className] = true;
                        return [4 /*yield*/, this.loadUI(uiClass, function (asset) { }, onProgress)];
                    case 1:
                        prefab = _a.sent();
                        if (prefab) {
                            if (this.getUI(uiClass)) {
                                return [2 /*return*/, true];
                            }
                            if (!this.stateList[uiClass.className]) {
                                return [2 /*return*/, false];
                            }
                            uiNode = cc.instantiate(prefab);
                            uiNode.parent = this.uiRoot;
                            if (zOrder) {
                                uiNode.zIndex = zOrder;
                            }
                            ui = uiNode.getComponent(BaseUI_1.BaseUI);
                            ui.data = data;
                            ui.tag = uiClass;
                            this.uiList.push(ui);
                            if (callback) {
                                callback(args);
                            }
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    UIManagerClass.prototype.closeUI = function (uiClass) {
        this.stateList[uiClass.className] = false;
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                this.uiList[i].node.destroy();
                this.uiList.splice(i, 1);
                return;
            }
        }
    };
    UIManagerClass.prototype.closeAllUI = function () {
        for (var i = 0; i < this.uiList.length; ++i) {
            var uiClass = this.uiList[i];
            this.stateList[uiClass.name] = false;
            uiClass.node.destroy();
        }
        this.uiList = [];
    };
    UIManagerClass.prototype.showUI = function (uiClass, data, zOrder, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var ui, isOpen, ui_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ui = this.getUI(uiClass);
                        if (!ui) return [3 /*break*/, 1];
                        this.stateList[uiClass.className] = true;
                        ui.data = data;
                        ui.node.active = true;
                        ui.onShow();
                        if (callback) {
                            callback();
                        }
                        return [2 /*return*/, true];
                    case 1: return [4 /*yield*/, this.openUI(uiClass, data, zOrder)];
                    case 2:
                        isOpen = _a.sent();
                        if (isOpen) {
                            callback && callback();
                            ui_1 = this.getUI(uiClass);
                            ui_1.onShow();
                        }
                        return [2 /*return*/, isOpen];
                }
            });
        });
    };
    UIManagerClass.prototype.hideUI = function (uiClass) {
        var ui = this.getUI(uiClass);
        if (ui) {
            this.stateList[uiClass.className] = false;
            ui.node.active = false;
        }
    };
    UIManagerClass.prototype.getUI = function (uiClass) {
        for (var i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                return this.uiList[i];
            }
        }
        return null;
    };
    /**
     * 动态加载并获取resources目录中的资源
     * @param path resources下的资源路径
     * @param type
     * @param callback
     * @returns asset
     */
    UIManagerClass.prototype.getRes = function (path, type, callback) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(path, type, function (error, asset) {
                if (error) {
                    cc.log(error);
                    return reject(error);
                }
                else {
                    callback && callback(asset);
                    return resolve(asset);
                }
            });
        });
    };
    /**
     * 动态加载并获取自定义bundle目录中的资源
     * @param bundleName 自定义bundle名字
     * @param path bundle下的资源路径
     * @param type
     * @param callback
     * @returns asset
     */
    UIManagerClass.prototype.getBundleRes = function (bundleName, path, type, callback) {
        return new Promise(function (resolve, reject) {
            cc.assetManager.loadBundle(bundleName, function (err, bundle) {
                if (err) {
                    cc.error(err);
                    return reject(err);
                }
                bundle.load(path, type, function (error, asset) {
                    if (error) {
                        cc.log(error);
                        return reject(error);
                    }
                    else {
                        callback && callback(asset);
                        return resolve(asset);
                    }
                });
            });
        });
    };
    UIManagerClass._instance = null;
    return UIManagerClass;
}());
exports.UIManager = UIManagerClass.getInstance();
var EPANEL_ZORDER;
(function (EPANEL_ZORDER) {
    EPANEL_ZORDER[EPANEL_ZORDER["NORMAL"] = 1] = "NORMAL";
    EPANEL_ZORDER[EPANEL_ZORDER["POPUP"] = 10] = "POPUP";
    EPANEL_ZORDER[EPANEL_ZORDER["MASK"] = 15] = "MASK";
    EPANEL_ZORDER[EPANEL_ZORDER["TIPS"] = 20] = "TIPS";
    EPANEL_ZORDER[EPANEL_ZORDER["ERROR"] = 30] = "ERROR";
    EPANEL_ZORDER[EPANEL_ZORDER["SUBMISSION"] = 40] = "SUBMISSION";
})(EPANEL_ZORDER = exports.EPANEL_ZORDER || (exports.EPANEL_ZORDER = {}));

cc._RF.pop();