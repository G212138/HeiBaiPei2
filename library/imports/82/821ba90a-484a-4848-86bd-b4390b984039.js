"use strict";
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