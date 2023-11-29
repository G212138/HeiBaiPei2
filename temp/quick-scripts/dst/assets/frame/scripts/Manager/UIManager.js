
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFVJTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBK0M7QUFFL0M7SUFjSTtRQVpRLFdBQU0sR0FBYSxFQUFFLENBQUM7UUFDdEIsV0FBTSxHQUFZLElBQUksQ0FBQztRQUN2QixjQUFTLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUMxQixrQkFBYSxHQUFZLElBQUksQ0FBQztRQVVqQyxtQ0FBbUM7SUFDdkMsQ0FBQztJQVRhLDBCQUFXLEdBQXpCO1FBQ0ksSUFBSSxJQUFJLEtBQUssSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7U0FDekM7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU1NLCtCQUFNLEdBQWIsVUFBZ0MsT0FBbUIsRUFBRSxRQUFtQixFQUFFLFVBQXFCO1FBQUUsY0FBYzthQUFkLFVBQWMsRUFBZCxxQkFBYyxFQUFkLElBQWM7WUFBZCw2QkFBYzs7UUFDM0csT0FBTyxJQUFJLE9BQU8sQ0FBWSxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQzFDLElBQUksWUFBWSxHQUFHLFVBQUMsY0FBc0IsRUFBRSxVQUFrQixFQUFFLElBQVM7Z0JBQ3JFLElBQUksVUFBVSxFQUFFO29CQUNaLFVBQVUsQ0FBQyxjQUFjLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNoRDtZQUNMLENBQUMsQ0FBQztZQUVGLElBQUksWUFBWSxHQUFHLFVBQUMsS0FBWSxFQUFFLEtBQWdCO2dCQUM5QyxJQUFJLEtBQUssRUFBRTtvQkFDUCxFQUFFLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNkLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO2lC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QUFDLENBQUM7d0JBQzVCLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN6QjtnQkFDTCxDQUFDLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBOU1jLHdCQUFTLEdBQW1CLElBQUksQ0FBQztJQStNcEQscUJBQUM7Q0FoTkQsQUFnTkMsSUFBQTtBQUVZLFFBQUEsU0FBUyxHQUFHLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUV0RCxJQUFZLGFBT1g7QUFQRCxXQUFZLGFBQWE7SUFDckIscURBQVUsQ0FBQTtJQUNWLG9EQUFVLENBQUE7SUFDVixrREFBUyxDQUFBO0lBQ1Qsa0RBQVMsQ0FBQTtJQUNULG9EQUFVLENBQUE7SUFDViw4REFBZSxDQUFBO0FBQ25CLENBQUMsRUFQVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU94QiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhc2VVSSwgVUlDbGFzcyB9IGZyb20gJy4uL1VJL0Jhc2VVSSc7XG5cbmNsYXNzIFVJTWFuYWdlckNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFVJTWFuYWdlckNsYXNzID0gbnVsbDtcbiAgICBwcml2YXRlIHVpTGlzdDogQmFzZVVJW10gPSBbXTtcbiAgICBwcml2YXRlIHVpUm9vdDogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBzdGF0ZUxpc3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgcHVibGljIGlzR2FtZVNob3dpbmc6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBVSU1hbmFnZXJDbGFzcyB7XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVUlNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIHRoaXMudWlSb290ID0gY2MuZmluZChcIkNhbnZhc1wiKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgbG9hZFVJPFQgZXh0ZW5kcyBCYXNlVUk+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4sIGNhbGxiYWNrPzogRnVuY3Rpb24sIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbiwgLi4uYXJnczogYW55W10pIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGNjLlByZWZhYj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByb2dyZXNzRnVuYyA9IChjb21wbGV0ZWRDb3VudDogbnVtYmVyLCB0b3RhbENvdW50OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChvblByb2dyZXNzKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoY29tcGxldGVkQ291bnQsIHRvdGFsQ291bnQsIGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGxldCBjb21wbGV0ZUZ1bmMgPSAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmxvZyhlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhhc3NldCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh1aUNsYXNzLmlzRnJhbWVQYW5lbCkge1xuICAgICAgICAgICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdmcmFtZVJlcycsIChlcnI6IEVycm9yLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnVuZGxlLmxvYWQodWlDbGFzcy5nZXRVcmwoKSwgcHJvZ3Jlc3NGdW5jLCBjb21wbGV0ZUZ1bmMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1aUNsYXNzLmdldFVybCgpLCBwcm9ncmVzc0Z1bmMsIGNvbXBsZXRlRnVuYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBhc3luYyBvcGVuVUk8VCBleHRlbmRzIEJhc2VVST4oXG4gICAgICAgIHVpQ2xhc3M6IFVJQ2xhc3M8VD4sXG4gICAgICAgIGRhdGE/OiBhbnksXG4gICAgICAgIHpPcmRlcj86IG51bWJlcixcbiAgICAgICAgY2FsbGJhY2s/OiBGdW5jdGlvbixcbiAgICAgICAgb25Qcm9ncmVzcz86IEZ1bmN0aW9uLFxuICAgICAgICAuLi5hcmdzOiBhbnlbXVxuICAgICkge1xuICAgICAgICBpZiAoIXRoaXMudWlSb290KSB7XG4gICAgICAgICAgICB0aGlzLnVpUm9vdCA9IGNjLmZpbmQoJ0NhbnZhcycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZ2V0VUkodWlDbGFzcykpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zdGF0ZUxpc3RbdWlDbGFzcy5jbGFzc05hbWVdID0gdHJ1ZTtcblxuICAgICAgICBsZXQgcHJlZmFiID0gYXdhaXQgdGhpcy5sb2FkVUkodWlDbGFzcywgKGFzc2V0OiBjYy5QcmVmYWIpID0+IHt9LCBvblByb2dyZXNzKTtcbiAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0VUkodWlDbGFzcykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZUxpc3RbdWlDbGFzcy5jbGFzc05hbWVdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgdWlOb2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgIHVpTm9kZS5wYXJlbnQgPSB0aGlzLnVpUm9vdDtcbiAgICAgICAgICAgIGlmICh6T3JkZXIpIHtcbiAgICAgICAgICAgICAgICB1aU5vZGUuekluZGV4ID0gek9yZGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVpID0gdWlOb2RlLmdldENvbXBvbmVudChCYXNlVUkpO1xuICAgICAgICAgICAgdWkuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB1aS50YWcgPSB1aUNsYXNzO1xuICAgICAgICAgICAgdGhpcy51aUxpc3QucHVzaCh1aSk7XG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGNsb3NlVUk8VCBleHRlbmRzIEJhc2VVST4odWlDbGFzczogVUlDbGFzczxUPikge1xuICAgICAgICB0aGlzLnN0YXRlTGlzdFt1aUNsYXNzLmNsYXNzTmFtZV0gPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlMaXN0W2ldLnRhZyA9PT0gdWlDbGFzcykge1xuICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0W2ldLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRoaXMudWlMaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgY2xvc2VBbGxVSSgpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgbGV0IHVpQ2xhc3MgPSB0aGlzLnVpTGlzdFtpXTtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVMaXN0W3VpQ2xhc3MubmFtZV0gPSBmYWxzZTtcbiAgICAgICAgICAgIHVpQ2xhc3Mubm9kZS5kZXN0cm95KCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aUxpc3QgPSBbXTtcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc2hvd1VJPFQgZXh0ZW5kcyBCYXNlVUk+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4sIGRhdGE/OiBhbnksIHpPcmRlcj86IG51bWJlciwgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgdWkgPSB0aGlzLmdldFVJKHVpQ2xhc3MpO1xuICAgICAgICBpZiAodWkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhdGVMaXN0W3VpQ2xhc3MuY2xhc3NOYW1lXSA9IHRydWU7XG4gICAgICAgICAgICB1aS5kYXRhID0gZGF0YTtcbiAgICAgICAgICAgIHVpLm5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHVpLm9uU2hvdygpO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgaXNPcGVuID0gYXdhaXQgdGhpcy5vcGVuVUkodWlDbGFzcywgZGF0YSwgek9yZGVyKTtcbiAgICAgICAgICAgIGlmIChpc09wZW4pIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgIGxldCB1aSA9IHRoaXMuZ2V0VUkodWlDbGFzcyk7XG4gICAgICAgICAgICAgICAgdWkub25TaG93KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaXNPcGVuO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGhpZGVVSTxUIGV4dGVuZHMgQmFzZVVJPih1aUNsYXNzOiBVSUNsYXNzPFQ+KSB7XG4gICAgICAgIGxldCB1aSA9IHRoaXMuZ2V0VUkodWlDbGFzcyk7XG4gICAgICAgIGlmICh1aSkge1xuICAgICAgICAgICAgdGhpcy5zdGF0ZUxpc3RbdWlDbGFzcy5jbGFzc05hbWVdID0gZmFsc2U7XG4gICAgICAgICAgICB1aS5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldFVJPFQgZXh0ZW5kcyBCYXNlVUk+KHVpQ2xhc3M6IFVJQ2xhc3M8VD4pOiBUIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnVpTGlzdC5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudWlMaXN0W2ldLnRhZyA9PT0gdWlDbGFzcykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVpTGlzdFtpXSBhcyBUO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWKqOaAgeWKoOi9veW5tuiOt+WPlnJlc291cmNlc+ebruW9leS4reeahOi1hOa6kFxuICAgICAqIEBwYXJhbSBwYXRoIHJlc291cmNlc+S4i+eahOi1hOa6kOi3r+W+hFxuICAgICAqIEBwYXJhbSB0eXBlXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgYXNzZXRcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVzPFQgZXh0ZW5kcyBjYy5Bc3NldD4ocGF0aDogc3RyaW5nLCB0eXBlOiB0eXBlb2YgY2MuQXNzZXQsIGNhbGxiYWNrPzogKGFzc2V0OiBUKSA9PiB2b2lkKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCB0eXBlLCAoZXJyb3I6IEVycm9yLCBhc3NldDogVCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBjYy5sb2coZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhhc3NldCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGFzc2V0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yqo5oCB5Yqg6L295bm26I635Y+W6Ieq5a6a5LmJYnVuZGxl55uu5b2V5Lit55qE6LWE5rqQXG4gICAgICogQHBhcmFtIGJ1bmRsZU5hbWUg6Ieq5a6a5LmJYnVuZGxl5ZCN5a2XXG4gICAgICogQHBhcmFtIHBhdGggYnVuZGxl5LiL55qE6LWE5rqQ6Lev5b6EXG4gICAgICogQHBhcmFtIHR5cGVcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJucyBhc3NldFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRCdW5kbGVSZXM8VCBleHRlbmRzIGNjLkFzc2V0PihcbiAgICAgICAgYnVuZGxlTmFtZTogc3RyaW5nLFxuICAgICAgICBwYXRoOiBzdHJpbmcsXG4gICAgICAgIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCxcbiAgICAgICAgY2FsbGJhY2s/OiAoYXNzZXQ6IFQpID0+IHZvaWQsXG4gICAgKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxUPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShidW5kbGVOYW1lLCAoZXJyOiBFcnJvciwgYnVuZGxlOiBjYy5Bc3NldE1hbmFnZXIuQnVuZGxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJ1bmRsZS5sb2FkKHBhdGgsIHR5cGUsIChlcnJvcjogRXJyb3IsIGFzc2V0OiBUKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MubG9nKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoYXNzZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgVUlNYW5hZ2VyID0gVUlNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gRVBBTkVMX1pPUkRFUiB7XG4gICAgTk9STUFMID0gMSwgLy/muLjmiI/nlYzpnaJcbiAgICBQT1BVUCA9IDEwLCAvL+W8ueeql1xuICAgIE1BU0sgPSAxNSwgLy/pga7nvalcbiAgICBUSVBTID0gMjAsIC8v5o+Q56S65qGGXG4gICAgRVJST1IgPSAzMCwgLy/plJnor6/mj5DnpLpcbiAgICBTVUJNSVNTSU9OID0gNDAsIC8v5o+Q5Lqk562U5qGIXG59XG4iXX0=