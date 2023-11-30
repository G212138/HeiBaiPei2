
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/frame/scripts/Data/FrameConstValue');
require('./assets/frame/scripts/Data/FrameMsgType');
require('./assets/frame/scripts/Data/FrameSyncData');
require('./assets/frame/scripts/Http/NetWork');
require('./assets/frame/scripts/Manager/ListenerManager');
require('./assets/frame/scripts/Manager/ReportManager');
require('./assets/frame/scripts/Manager/SoundManager');
require('./assets/frame/scripts/Manager/SyncDataManager');
require('./assets/frame/scripts/Manager/UIManager');
require('./assets/frame/scripts/SDK/GameMsg');
require('./assets/frame/scripts/SDK/T2M');
require('./assets/frame/scripts/UI/AdaptiveScreen');
require('./assets/frame/scripts/UI/BaseFrameUI');
require('./assets/frame/scripts/UI/BaseUI');
require('./assets/frame/scripts/UI/BindNode');
require('./assets/frame/scripts/UI/GameMain');
require('./assets/frame/scripts/UI/Item/MaskGlobal');
require('./assets/frame/scripts/UI/Item/MaskRecover');
require('./assets/frame/scripts/UI/Item/TeacherPanelLoading');
require('./assets/frame/scripts/UI/Item/Tip');
require('./assets/frame/scripts/UI/Item/TitleNode');
require('./assets/frame/scripts/UI/Item/replayBtn');
require('./assets/frame/scripts/UI/Panel/AffirmTips');
require('./assets/frame/scripts/UI/Panel/BaseGamePanel');
require('./assets/frame/scripts/UI/Panel/BaseTeacherPanel');
require('./assets/frame/scripts/UI/Panel/ErrorPanel');
require('./assets/frame/scripts/UI/Panel/LoadingUI');
require('./assets/frame/scripts/UI/Panel/OverTips');
require('./assets/frame/scripts/UI/Panel/StarCount');
require('./assets/frame/scripts/UI/Panel/SubmissionPanel');
require('./assets/frame/scripts/UI/Panel/TipUI');
require('./assets/frame/scripts/UI/Panel/UploadAndReturnPanel');
require('./assets/frame/scripts/Utils/AudioPlayExtension');
require('./assets/frame/scripts/Utils/BoundingBoxDemo');
require('./assets/frame/scripts/Utils/BoundingBoxHelp');
require('./assets/frame/scripts/Utils/HitTest');
require('./assets/frame/scripts/Utils/MathUtils');
require('./assets/frame/scripts/Utils/Tools');
require('./assets/frame/scripts/Utils/UIHelp');
require('./assets/game/scripts/Data/ConstValue');
require('./assets/game/scripts/Data/CustomSyncData');
require('./assets/game/scripts/Data/EventType');
require('./assets/game/scripts/Manager/EditorManager');
require('./assets/game/scripts/Manager/GameManager');
require('./assets/game/scripts/SkeletonExt');
require('./assets/game/scripts/UI/Components/ButtonSync');
require('./assets/game/scripts/UI/Item/GameUI');
require('./assets/game/scripts/UI/Item/GeziArea');
require('./assets/game/scripts/UI/Item/IconDrag');
require('./assets/game/scripts/UI/Item/Role');
require('./assets/game/scripts/UI/Item/SoundConfig');
require('./assets/game/scripts/UI/panel/GamePanel');
require('./assets/game/scripts/UI/panel/TeacherPanel');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '75b2dk5WVVO7LtxMPb6Uw7K', 'TeacherPanelLoading');
// frame/scripts/UI/Item/TeacherPanelLoading.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanelLoading = /** @class */ (function (_super) {
    __extends(TeacherPanelLoading, _super);
    function TeacherPanelLoading() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_panel = null;
        return _this;
        // update (dt) {}
    }
    // LIFE-CYCLE CALLBACKS:
    // onLoad () {}
    TeacherPanelLoading.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, this.onEnableEvent, this);
    };
    TeacherPanelLoading.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    TeacherPanelLoading.prototype.onEnableEvent = function (isShow) {
        this._nd_panel.active = isShow;
    };
    TeacherPanelLoading = __decorate([
        ccclass
    ], TeacherPanelLoading);
    return TeacherPanelLoading;
}(BindNode_1.default));
exports.default = TeacherPanelLoading;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUZWFjaGVyUGFuZWxMb2FkaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxpRUFBZ0U7QUFDaEUsd0NBQW1DO0FBRTdCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQWlELHVDQUFRO0lBQXpEO1FBQUEscUVBb0JDO1FBbkJXLGVBQVMsR0FBWSxJQUFJLENBQUM7O1FBa0JsQyxpQkFBaUI7SUFDckIsQ0FBQztJQWpCRyx3QkFBd0I7SUFFeEIsZUFBZTtJQUVmLG1DQUFLLEdBQUw7UUFDSSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckYsQ0FBQztJQUVELHVDQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsMkNBQWEsR0FBYixVQUFjLE1BQWU7UUFDekIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ25DLENBQUM7SUFqQmdCLG1CQUFtQjtRQUR2QyxPQUFPO09BQ2EsbUJBQW1CLENBb0J2QztJQUFELDBCQUFDO0NBcEJELEFBb0JDLENBcEJnRCxrQkFBUSxHQW9CeEQ7a0JBcEJvQixtQkFBbUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmluZE5vZGUgZnJvbSAnLi4vQmluZE5vZGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVhY2hlclBhbmVsTG9hZGluZyBleHRlbmRzIEJpbmROb2RlIHtcbiAgICBwcml2YXRlIF9uZF9wYW5lbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihGcmFtZU1zZ1R5cGUuVEVBQ0hFUl9QQU5FTF9MT0FESU5HLCB0aGlzLm9uRW5hYmxlRXZlbnQsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLnJlbW92ZUFsbCh0aGlzKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZUV2ZW50KGlzU2hvdzogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9uZF9wYW5lbC5hY3RpdmUgPSBpc1Nob3c7XG4gICAgfVxuXG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '431c7WvXqpPsYjqV8+W1/t4', 'FrameConstValue');
// frame/scripts/Data/FrameConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameConstValue = void 0;
var FrameConstValue = /** @class */ (function () {
    function FrameConstValue() {
    }
    FrameConstValue.FRAME_PREFAB_PANEL_DIR = 'prefab/panel/';
    FrameConstValue.FRAME_AUDIO_DIR = 'audios/';
    FrameConstValue.CONFIG_FILE_DIR = 'config/';
    FrameConstValue.PREFAB_PANEL_DIR = 'prefab/ui/panel/';
    FrameConstValue.GAME_AUDIO_DIR = 'audios/';
    return FrameConstValue;
}());
exports.FrameConstValue = FrameConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUwwQixzQ0FBc0IsR0FBRyxlQUFlLENBQUM7SUFDekMsK0JBQWUsR0FBRyxTQUFTLENBQUM7SUFDNUIsK0JBQWUsR0FBRyxTQUFTLENBQUM7SUFDNUIsZ0NBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDdEMsOEJBQWMsR0FBRyxTQUFTLENBQUM7SUFDdEQsc0JBQUM7Q0FORCxBQU1DLElBQUE7QUFOWSwwQ0FBZSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGcmFtZUNvbnN0VmFsdWUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgRlJBTUVfUFJFRkFCX1BBTkVMX0RJUiA9ICdwcmVmYWIvcGFuZWwvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEZSQU1FX0FVRElPX0RJUiA9ICdhdWRpb3MvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IENPTkZJR19GSUxFX0RJUiA9ICdjb25maWcvJztcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBSRUZBQl9QQU5FTF9ESVIgPSAncHJlZmFiL3VpL3BhbmVsLyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHQU1FX0FVRElPX0RJUiA9ICdhdWRpb3MvJztcbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/SkeletonExt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b17bdM6/FlI8aRFdqpwmXvl', 'SkeletonExt');
// game/scripts/SkeletonExt.js

"use strict";

cc.game.once(cc.game.EVENT_ENGINE_INITED, function () {
  cc.js.mixin(sp.Skeleton.prototype, {
    update: function update(dt) {
      // if (CC_EDITOR) return;
      if (CC_EDITOR) {
        cc.engine._animatingInEditMode = 1;
        cc.engine.animatingInEditMode = 1;
      }

      if (this.paused) return;
      dt *= this.timeScale * sp.timeScale;

      if (this.isAnimationCached()) {
        // Cache mode and has animation queue.
        if (this._isAniComplete) {
          if (this._animationQueue.length === 0 && !this._headAniInfo) {
            var frameCache = this._frameCache;

            if (frameCache && frameCache.isInvalid()) {
              frameCache.updateToFrame();
              var frames = frameCache.frames;
              this._curFrame = frames[frames.length - 1];
            }

            return;
          }

          if (!this._headAniInfo) {
            this._headAniInfo = this._animationQueue.shift();
          }

          this._accTime += dt;

          if (this._accTime > this._headAniInfo.delay) {
            var aniInfo = this._headAniInfo;
            this._headAniInfo = null;
            this.setAnimation(0, aniInfo.animationName, aniInfo.loop);
          }

          return;
        }

        this._updateCache(dt);
      } else {
        this._updateRealtime(dt);
      }
    }
  });
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcU2tlbGV0b25FeHQuanMiXSwibmFtZXMiOlsiY2MiLCJnYW1lIiwib25jZSIsIkVWRU5UX0VOR0lORV9JTklURUQiLCJqcyIsIm1peGluIiwic3AiLCJTa2VsZXRvbiIsInByb3RvdHlwZSIsInVwZGF0ZSIsImR0IiwiQ0NfRURJVE9SIiwiZW5naW5lIiwiX2FuaW1hdGluZ0luRWRpdE1vZGUiLCJhbmltYXRpbmdJbkVkaXRNb2RlIiwicGF1c2VkIiwidGltZVNjYWxlIiwiaXNBbmltYXRpb25DYWNoZWQiLCJfaXNBbmlDb21wbGV0ZSIsIl9hbmltYXRpb25RdWV1ZSIsImxlbmd0aCIsIl9oZWFkQW5pSW5mbyIsImZyYW1lQ2FjaGUiLCJfZnJhbWVDYWNoZSIsImlzSW52YWxpZCIsInVwZGF0ZVRvRnJhbWUiLCJmcmFtZXMiLCJfY3VyRnJhbWUiLCJzaGlmdCIsIl9hY2NUaW1lIiwiZGVsYXkiLCJhbmlJbmZvIiwic2V0QW5pbWF0aW9uIiwiYW5pbWF0aW9uTmFtZSIsImxvb3AiLCJfdXBkYXRlQ2FjaGUiLCJfdXBkYXRlUmVhbHRpbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0FBLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRQyxJQUFSLENBQWFGLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRRSxtQkFBckIsRUFBMEMsWUFBWTtBQUVsREgsRUFBQUEsRUFBRSxDQUFDSSxFQUFILENBQU1DLEtBQU4sQ0FBWUMsRUFBRSxDQUFDQyxRQUFILENBQVlDLFNBQXhCLEVBQW1DO0FBQy9CQyxJQUFBQSxNQUQrQixrQkFDdkJDLEVBRHVCLEVBQ25CO0FBQ1I7QUFFQSxVQUFJQyxTQUFKLEVBQWU7QUFDWFgsUUFBQUEsRUFBRSxDQUFDWSxNQUFILENBQVVDLG9CQUFWLEdBQWlDLENBQWpDO0FBQ0FiLFFBQUFBLEVBQUUsQ0FBQ1ksTUFBSCxDQUFVRSxtQkFBVixHQUFnQyxDQUFoQztBQUNIOztBQUVELFVBQUksS0FBS0MsTUFBVCxFQUFpQjtBQUVqQkwsTUFBQUEsRUFBRSxJQUFJLEtBQUtNLFNBQUwsR0FBaUJWLEVBQUUsQ0FBQ1UsU0FBMUI7O0FBRUEsVUFBSSxLQUFLQyxpQkFBTCxFQUFKLEVBQThCO0FBRTFCO0FBQ0EsWUFBSSxLQUFLQyxjQUFULEVBQXlCO0FBQ3JCLGNBQUksS0FBS0MsZUFBTCxDQUFxQkMsTUFBckIsS0FBZ0MsQ0FBaEMsSUFBcUMsQ0FBQyxLQUFLQyxZQUEvQyxFQUE2RDtBQUN6RCxnQkFBSUMsVUFBVSxHQUFHLEtBQUtDLFdBQXRCOztBQUNBLGdCQUFJRCxVQUFVLElBQUlBLFVBQVUsQ0FBQ0UsU0FBWCxFQUFsQixFQUEwQztBQUN0Q0YsY0FBQUEsVUFBVSxDQUFDRyxhQUFYO0FBQ0Esa0JBQUlDLE1BQU0sR0FBR0osVUFBVSxDQUFDSSxNQUF4QjtBQUNBLG1CQUFLQyxTQUFMLEdBQWlCRCxNQUFNLENBQUNBLE1BQU0sQ0FBQ04sTUFBUCxHQUFnQixDQUFqQixDQUF2QjtBQUNIOztBQUNEO0FBQ0g7O0FBQ0QsY0FBSSxDQUFDLEtBQUtDLFlBQVYsRUFBd0I7QUFDcEIsaUJBQUtBLFlBQUwsR0FBb0IsS0FBS0YsZUFBTCxDQUFxQlMsS0FBckIsRUFBcEI7QUFDSDs7QUFDRCxlQUFLQyxRQUFMLElBQWlCbkIsRUFBakI7O0FBQ0EsY0FBSSxLQUFLbUIsUUFBTCxHQUFnQixLQUFLUixZQUFMLENBQWtCUyxLQUF0QyxFQUE2QztBQUN6QyxnQkFBSUMsT0FBTyxHQUFHLEtBQUtWLFlBQW5CO0FBQ0EsaUJBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDQSxpQkFBS1csWUFBTCxDQUFtQixDQUFuQixFQUFzQkQsT0FBTyxDQUFDRSxhQUE5QixFQUE2Q0YsT0FBTyxDQUFDRyxJQUFyRDtBQUNIOztBQUNEO0FBQ0g7O0FBRUQsYUFBS0MsWUFBTCxDQUFrQnpCLEVBQWxCO0FBQ0gsT0ExQkQsTUEwQk87QUFDSCxhQUFLMEIsZUFBTCxDQUFxQjFCLEVBQXJCO0FBQ0g7QUFDSjtBQTFDOEIsR0FBbkM7QUE2Q0gsQ0EvQ0QiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuY2MuZ2FtZS5vbmNlKGNjLmdhbWUuRVZFTlRfRU5HSU5FX0lOSVRFRCwgZnVuY3Rpb24gKCkge1xuXG4gICAgY2MuanMubWl4aW4oc3AuU2tlbGV0b24ucHJvdG90eXBlLCB7XG4gICAgICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgICAgIC8vIGlmIChDQ19FRElUT1IpIHJldHVybjtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKENDX0VESVRPUikge1xuICAgICAgICAgICAgICAgIGNjLmVuZ2luZS5fYW5pbWF0aW5nSW5FZGl0TW9kZSA9IDE7XG4gICAgICAgICAgICAgICAgY2MuZW5naW5lLmFuaW1hdGluZ0luRWRpdE1vZGUgPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5wYXVzZWQpIHJldHVybjtcbiAgICBcbiAgICAgICAgICAgIGR0ICo9IHRoaXMudGltZVNjYWxlICogc3AudGltZVNjYWxlO1xuICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBbmltYXRpb25DYWNoZWQoKSkge1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIENhY2hlIG1vZGUgYW5kIGhhcyBhbmltYXRpb24gcXVldWUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzQW5pQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FuaW1hdGlvblF1ZXVlLmxlbmd0aCA9PT0gMCAmJiAhdGhpcy5faGVhZEFuaUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZUNhY2hlID0gdGhpcy5fZnJhbWVDYWNoZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmcmFtZUNhY2hlICYmIGZyYW1lQ2FjaGUuaXNJbnZhbGlkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcmFtZUNhY2hlLnVwZGF0ZVRvRnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZnJhbWVzID0gZnJhbWVDYWNoZS5mcmFtZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyRnJhbWUgPSBmcmFtZXNbZnJhbWVzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5faGVhZEFuaUluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hlYWRBbmlJbmZvID0gdGhpcy5fYW5pbWF0aW9uUXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hY2NUaW1lICs9IGR0O1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fYWNjVGltZSA+IHRoaXMuX2hlYWRBbmlJbmZvLmRlbGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5pSW5mbyA9IHRoaXMuX2hlYWRBbmlJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5faGVhZEFuaUluZm8gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBbmltYXRpb24gKDAsIGFuaUluZm8uYW5pbWF0aW9uTmFtZSwgYW5pSW5mby5sb29wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUNhY2hlKGR0KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdXBkYXRlUmVhbHRpbWUoZHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcblxufSlcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/ListenerManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05dc2tRAiFMobMbxaPK4NIf', 'ListenerManager');
// frame/scripts/Manager/ListenerManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerManager = void 0;
var ListenerManagerClass = /** @class */ (function () {
    function ListenerManagerClass() {
        this.handle = {};
    }
    ListenerManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new ListenerManagerClass();
        }
        return this._instance;
    };
    ListenerManagerClass.prototype.on = function (eventName, cb, target) {
        if (this.hasEvent(eventName, cb, target)) {
            return;
        }
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }
        var data = { func: cb, target: target };
        this.handle[eventName].push(data);
    };
    ListenerManagerClass.prototype.off = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                list.splice(i, 1);
                break;
            }
        }
    };
    ListenerManagerClass.prototype.dispatch = function (eventName) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            event.func.apply(event.target, args);
        }
    };
    ListenerManagerClass.prototype.removeAll = function (target) {
        if (target) {
            for (var key in this.handle) {
                var list = this.handle[key];
                for (var i = 0, l = list.length; i < l; i++) {
                    var event = list[i];
                    if (event.target == target) {
                        list.splice(i, 1);
                        if (l > 0) {
                            l--;
                        }
                        i--;
                    }
                }
            }
        }
        else {
            for (var key in this.handle) {
                var list = this.handle[key];
                while (list.length > 0) {
                    list.pop();
                }
            }
        }
    };
    ListenerManagerClass.prototype.hasEvent = function (eventName, cb, target) {
        var list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return false;
        }
        for (var i = 0; i < list.length; i++) {
            var event = list[i];
            if (cb == event.func && (!target || target == event.target)) {
                return true;
            }
        }
        return false;
    };
    ListenerManagerClass._instance = null;
    return ListenerManagerClass;
}());
exports.ListenerManager = ListenerManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXExpc3RlbmVyTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtJQUFBO1FBRVksV0FBTSxHQUFXLEVBQUUsQ0FBQztJQW9GaEMsQ0FBQztJQWxGaUIsZ0NBQVcsR0FBekI7UUFDSSxJQUFJLElBQUksS0FBSyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSxpQ0FBRSxHQUFULFVBQVUsU0FBaUIsRUFBRSxFQUFZLEVBQUUsTUFBVztRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUN0QyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQU0sSUFBSSxHQUFlLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxrQ0FBRyxHQUFWLFVBQVcsU0FBaUIsRUFBRSxFQUFZLEVBQUUsTUFBWTtRQUNwRCxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7WUFDM0IsT0FBTztTQUNWO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxD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QUFNLENBQUMsRUFBRTtnQkFDekQsT0FBTyxJQUFJLENBQUM7YUFDZjtTQUNKO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQXBGYyw4QkFBUyxHQUF5QixJQUFJLENBQUM7SUFxRjFELDJCQUFDO0NBdEZELEFBc0ZDLElBQUE7QUFFWSxRQUFBLGVBQWUsR0FBRyxvQkFBb0IsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBJRXZlbnREYXRhIHtcbiAgICBmdW5jOiBGdW5jdGlvbjtcbiAgICB0YXJnZXQ6IGFueTtcbn1cblxuaW50ZXJmYWNlIElFdmVudCB7XG4gICAgW2V2ZW50TmFtZTogc3RyaW5nXTogSUV2ZW50RGF0YVtdO1xufVxuXG5jbGFzcyBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyA9IG51bGw7XG4gICAgcHJpdmF0ZSBoYW5kbGU6IElFdmVudCA9IHt9O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBMaXN0ZW5lck1hbmFnZXJDbGFzcyB7XG4gICAgICAgIGlmIChudWxsID09PSB0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgTGlzdGVuZXJNYW5hZ2VyQ2xhc3MoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldDogYW55KSB7XG4gICAgICAgIGlmICh0aGlzLmhhc0V2ZW50KGV2ZW50TmFtZSwgY2IsIHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghdGhpcy5oYW5kbGVbZXZlbnROYW1lXSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGE6IElFdmVudERhdGEgPSB7IGZ1bmM6IGNiLCB0YXJnZXQgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXS5wdXNoKGRhdGEpO1xuICAgIH1cblxuICAgIHB1YmxpYyBvZmYoZXZlbnROYW1lOiBzdHJpbmcsIGNiOiBGdW5jdGlvbiwgdGFyZ2V0PzogYW55KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmhhbmRsZVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgaWYgKGNiID09IGV2ZW50LmZ1bmMgJiYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09IGV2ZW50LnRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwYXRjaChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczogYW55KSB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSB0aGlzLmhhbmRsZVtldmVudE5hbWVdO1xuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xuICAgICAgICAgICAgZXZlbnQuZnVuYy5hcHBseShldmVudC50YXJnZXQsIGFyZ3MpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJlbW92ZUFsbCh0YXJnZXQ/OiBhbnkpIHtcbiAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGxpc3QgPSB0aGlzLmhhbmRsZVtrZXldO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV2ZW50ID0gbGlzdFtpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbC0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHRoaXMuaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2tleV07XG4gICAgICAgICAgICAgICAgd2hpbGUgKGxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LnBvcCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBoYXNFdmVudChldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpOiBib29sZWFuIHtcbiAgICAgICAgY29uc3QgbGlzdCA9IHRoaXMuaGFuZGxlW2V2ZW50TmFtZV07XG4gICAgICAgIGlmICghbGlzdCB8fCBsaXN0Lmxlbmd0aCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGxpc3RbaV07XG4gICAgICAgICAgICBpZiAoY2IgPT0gZXZlbnQuZnVuYyAmJiAoIXRhcmdldCB8fCB0YXJnZXQgPT0gZXZlbnQudGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBMaXN0ZW5lck1hbmFnZXIgPSBMaXN0ZW5lck1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GeziArea.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d7cfSEQKBKUqk46zROXmuh', 'GeziArea');
// game/scripts/UI/Item/GeziArea.ts

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
var HitTest_1 = require("../../../../frame/scripts/Utils/HitTest");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GeziArea = /** @class */ (function (_super) {
    __extends(GeziArea, _super);
    function GeziArea() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //行数
        _this.row = 0;
        //列数
        _this.col = 0;
        return _this;
    }
    GeziArea.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_ICON, this.onDragMaozi, this);
    };
    GeziArea.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_ICON, this.onDragMaozi, this);
    };
    GeziArea.prototype.onDragMaozi = function (pos) {
        if (HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
        }
        else {
        }
    };
    GeziArea.prototype.isPosInRect = function (pos) {
        return HitTest_1.HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    };
    GeziArea.prototype.fill = function (item) {
        if (this.node.getChildByName("icon_node").childrenCount > 0) {
            this.node.getChildByName("icon_node").removeAllChildren();
        }
        this.node.color = cc.Color.WHITE;
        item.parent = this.node.getChildByName("icon_node");
        item.position = cc.v3(0, 0);
    };
    GeziArea = __decorate([
        ccclass
    ], GeziArea);
    return GeziArea;
}(cc.Component));
exports.default = GeziArea;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdlemlBcmVhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRixtRUFBa0U7QUFDbEUsa0RBQWlEO0FBRzNDLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBa0NDO1FBaENHLElBQUk7UUFDRyxTQUFHLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLElBQUk7UUFDRyxTQUFHLEdBQVcsQ0FBQyxDQUFDOztJQTZCM0IsQ0FBQztJQTNCRyx5QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVPLDhCQUFXLEdBQW5CLFVBQW9CLEdBQVk7UUFDNUIsSUFBSSxpQkFBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1NBRTVEO2FBQU07U0FFTjtJQUNMLENBQUM7SUFFTSw4QkFBVyxHQUFsQixVQUFtQixHQUFZO1FBQzNCLE9BQU8saUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRU0sdUJBQUksR0FBWCxVQUFZLElBQWE7UUFDckIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDN0Q7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQWpDZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQWtDNUI7SUFBRCxlQUFDO0NBbENELEFBa0NDLENBbENxQyxFQUFFLENBQUMsU0FBUyxHQWtDakQ7a0JBbENvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSGl0VGVzdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1V0aWxzL0hpdFRlc3RcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uLy4uL0RhdGEvRXZlbnRUeXBlXCI7XHJcbmltcG9ydCBJY29uRHJhZyBmcm9tIFwiLi9JY29uRHJhZ1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHZXppQXJlYSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgLy/ooYzmlbBcclxuICAgIHB1YmxpYyByb3c6IG51bWJlciA9IDA7XHJcbiAgICAvL+WIl+aVsFxyXG4gICAgcHVibGljIGNvbDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5EUkFHX0lDT04sIHRoaXMub25EcmFnTWFvemksIHRoaXMpO1xyXG4gICAgfVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkRSQUdfSUNPTiwgdGhpcy5vbkRyYWdNYW96aSwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkRyYWdNYW96aShwb3M6IGNjLlZlYzIpIHtcclxuICAgICAgICBpZiAoSGl0VGVzdC5wb3NJblJlY3QobmV3IGNjLlZlYzIocG9zLngsIHBvcy55KSwgdGhpcy5ub2RlKSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzUG9zSW5SZWN0KHBvczogY2MuVmVjMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBIaXRUZXN0LnBvc0luUmVjdChuZXcgY2MuVmVjMihwb3MueCwgcG9zLnkpLCB0aGlzLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBmaWxsKGl0ZW06IGNjLk5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKTtcclxuICAgICAgICBpdGVtLnBvc2l0aW9uID0gY2MudjMoMCwgMCk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Http/NetWork.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9cd01aQNbFMUY4sUMN0yYH5', 'NetWork');
// frame/scripts/Http/NetWork.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetWork = exports.NetWorkClass = void 0;
var ConstValue_1 = require("../../../game/scripts/Data/ConstValue");
var UIManager_1 = require("../Manager/UIManager");
var GameMsg_1 = require("../SDK/GameMsg");
var UIHelp_1 = require("../Utils/UIHelp");
var NetWorkClass = /** @class */ (function () {
    function NetWorkClass() {
        //判断是否是线上   URL里不加参数则默认为测试环境
        this.isOnlineEnv = this.GetIsOnline() == 'online';
        //判断是否是pc预加载的协议    URL里不加参数则默认为非预加载
        this.isOwcr = this.GetBPreload();
        this.BASE = this.isOnlineEnv
            ? 'https://courseware-online.speiyou.com'
            : 'https://ceshi-courseware.speiyou.com';
        // public readonly BASE = this.isOnlineEnv ? 'https://courseware-online.saasp.vdyoo.com' : 'https://ceshi-courseware-online.saasp.vdyoo.com';
        // public readonly COS_URL = this.isOnlineEnv ?
        //     'https://classroom-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts'
        //     : 'https://test-class-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts';
        // public readonly COS_BASE_URL = this.isOnlineEnv ? 'https://micro-class.xuepeiyou.com/' : 'https://micro-class-test.xuepeiyou.com/';
        this.GET_QUESTION = this.BASE + '/get';
        this.GET_USER_PROGRESS = this.BASE + '/get/answer';
        this.GET_TITLE = this.BASE + '/get/title';
        this.ADD = this.BASE + '/add';
        this.MODIFY = this.BASE + '/modify';
        this.CLEAR = this.BASE + '/clear';
        this.empty = false; //清理脏数据的开关，在URL里面拼此参数 = true；
        //新课堂参数
        this.userId = null; //用户id
        this.chapterId = null; //直播讲id
        this.coursewareId = null; //题目信息   用于交互游戏自身查题目信息
        this.titleId = null; //交互游戏绑定id   绑定的时候用（监课平台）  学生端不传
        this.bLive = null; //是否是直播
        this.bPreload = null; //是否预加载  （cdn/zip)
        this.env = null; //运行环境（线上/测试）
        this.app = null; //App名称
        this.platform = null; //硬件平台信息（pc/iPad/android/androidPad/web）
        this.channel = null; //使用方(辅导端、学生端、未来黑板、配齐、教研云、……）
        this.browser = null; //浏览器信息（内核及版本）
        this.appVersion = null; //端的版本信息
        this.isTeacher = false; //是否为教师（通过同步的get_role返回的是否为'teacher'）
        this.isSync = false; //是否为同步（通过同步的get_is_sync返回是否为1/true）
        this.isOffline = 0; //是否为离线模式
        this.isMaster = null; //是否是主动发心跳的一方
        this.isSupportKeepPlay = false; //是否支持接着玩重新玩
        this.theRequest = null;
    }
    NetWorkClass.getInstance = function () {
        if (this.instance == null) {
            this.instance = new NetWorkClass();
        }
        return this.instance;
    };
    NetWorkClass.prototype.setIsSync = function (isSync) {
        isSync = isSync == null ? false : isSync;
        exports.NetWork.isSync = isSync;
    };
    NetWorkClass.prototype.setIsTeacher = function (role) {
        var isTeacher = role == 'teacher';
        exports.NetWork.isTeacher = isTeacher;
    };
    NetWorkClass.prototype.setIsPreload = function (isPreload) {
        isPreload = isPreload == null ? false : isPreload;
        UIManager_1.UIManager.isGameShowing = !isPreload;
    };
    NetWorkClass.prototype.setIsMaster = function (isMaster) {
        isMaster = isMaster == null ? false : isMaster;
        exports.NetWork.isMaster = isMaster;
    };
    NetWorkClass.prototype.setIsSupportKeepPlay = function (isSupportKeepPlay) {
        exports.NetWork.isSupportKeepPlay = isSupportKeepPlay;
        if (!isSupportKeepPlay) {
            exports.NetWork.isMaster = exports.NetWork.isTeacher;
        }
        console.log("isSupportKeepPlay: " + isSupportKeepPlay);
    };
    /**
     * 请求网络Post 0成功 1超时
     * @param url
     * @param openType
     * @param contentType
     * @param callback
     * @param params
     */
    NetWorkClass.prototype.httpRequest = function (url, openType, contentType, callback, params) {
        var _this = this;
        if (callback === void 0) { callback = null; }
        if (params === void 0) { params = ''; }
        //------------------离线模式-------------------------
        if (this.isOffline && url.substring(0, this.GET_QUESTION.length) == this.GET_QUESTION) {
            GameMsg_1.default.recv_json_data(function (data) {
                console.log('recv_json_data:', data);
                if (callback && data.jsonData.errcode == 0) {
                    callback(false, data.jsonData);
                }
                else {
                    UIHelp_1.UIHelp.showErrorPanel(data.jsonData.errmsg + ',请联系客服！', '', '', '确定', function () {
                        _this.httpRequest(url, openType, contentType, callback, params);
                    }, false);
                }
            });
            GameMsg_1.default.request_json_data({ coursewareId: this.coursewareId });
            return;
        }
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            if (!this.titleId) {
                //教师端没有titleId的情况
                UIHelp_1.UIHelp.showErrorPanel('URL参数错误,缺少titleId,请联系技术人员！', '', '', '确定');
                return;
            }
        }
        else {
            //新课堂学生端  判断所有参数
            if (!ConstValue_1.ConstValue.IS_TEACHER &&
                (!this.userId || !this.coursewareId || !this.env || !this.app || !this.channel || !this.browser)) {
                GameMsg_1.default.URLError(this.theRequest);
                UIHelp_1.UIHelp.showErrorPanel('URL参数错误,请联系客服！', '', '', '确定');
                return;
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open(openType, url);
        xhr.timeout = 10000;
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.withCredentials = true;
        //回调
        xhr.onreadystatechange = function () {
            console.log('httpRequest rsp status', xhr.status, '        xhr.readyState', xhr.readyState, '        xhr.responseText', xhr.responseText);
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 400) {
                var response = JSON.parse(xhr.responseText);
                if (callback && response.errcode == 0) {
                    callback(false, response);
                }
                else {
                    GameMsg_1.default.httpError(response.errmsg);
                    if (ConstValue_1.ConstValue.IS_EDITIONS) {
                        UIHelp_1.UIHelp.showErrorPanel(response.errmsg + ',请联系客服！', '', '', '确定', function () {
                            _this.httpRequest(url, openType, contentType, callback, params);
                        }, false);
                    }
                }
            }
        };
        //超时回调
        xhr.ontimeout = function (event) {
            GameMsg_1.default.httpTimeOut('网络不佳，请稍后重试');
            if (ConstValue_1.ConstValue.IS_EDITIONS) {
                UIHelp_1.UIHelp.showErrorPanel('网络不佳，请稍后重试', '', '若重新连接无效，请联系客服', '重新连接', function () {
                    _this.httpRequest(url, openType, contentType, callback, params);
                }, true);
            }
            console.log('httpRequest timeout');
            callback && callback(true, null);
        };
        //出错
        xhr.onerror = function (error) {
            if (ConstValue_1.ConstValue.IS_EDITIONS) {
                UIHelp_1.UIHelp.showErrorPanel('网络出错，请稍后重试', '若重新连接无效，请联系客服', '', '重新连接', function () {
                    _this.httpRequest(url, openType, contentType, callback, params);
                }, true);
            }
            console.log('httpRequest error');
            callback && callback(true, null);
        };
        xhr.send(params);
    };
    /**
     * 获取url参数
     */
    NetWorkClass.prototype.GetRequest = function () {
        if (this.theRequest != null) {
            return this.theRequest;
        }
        this.theRequest = new Object();
        var url = location.search; //获取url中"?"符后的字串
        if (url.indexOf('?') != -1) {
            var str = url.substr(1);
            var strs = str.split('&');
            for (var i = 0; i < strs.length; i++) {
                this.theRequest[strs[i].split('=')[0]] = decodeURIComponent(strs[i].split('=')[1]);
            }
        }
        //新课堂url必需参数
        this.userId = this.theRequest['userId'];
        this.chapterId = this.theRequest['chapterId'];
        this.coursewareId = this.theRequest['coursewareId'];
        this.titleId = this.theRequest['titleId'];
        this.bLive = this.theRequest['bLive'];
        this.bPreload = this.theRequest['bPreload'];
        this.env = this.theRequest['env'];
        this.app = this.theRequest['app'];
        this.platform = this.theRequest['platform'];
        this.channel = this.theRequest['channel'];
        this.browser = this.theRequest['browser'];
        this.appVersion = this.theRequest['appVersion'];
        this.empty = this.theRequest['empty'];
        this.isOffline = parseInt(this.theRequest['isOffline']); //离线模式
        return this.theRequest;
    };
    NetWorkClass.prototype.GetBPreload = function () {
        var BPreload = 0;
        if (this.GetRequest()['bPreload']) {
            BPreload = this.GetRequest()['bPreload'];
        }
        return BPreload;
    };
    NetWorkClass.prototype.GetIsOnline = function () {
        var isOnline = 'test';
        if (this.GetRequest()['env']) {
            isOnline = this.GetRequest()['env'];
        }
        return isOnline;
    };
    return NetWorkClass;
}());
exports.NetWorkClass = NetWorkClass;
exports.NetWork = NetWorkClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXEh0dHBcXE5ldFdvcmsudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0VBQW1FO0FBQ25FLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsMENBQXlDO0FBQ3pDO0lBQUE7UUFHSSw0QkFBNEI7UUFDWixnQkFBVyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxRQUFRLENBQUM7UUFDN0QsbUNBQW1DO1FBQ25CLFdBQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsU0FBSSxHQUFHLElBQUksQ0FBQyxXQUFXO1lBQ25DLENBQUMsQ0FBQyx1Q0FBdUM7WUFDekMsQ0FBQyxDQUFDLHNDQUFzQyxDQUFDO1FBQzdDLDZJQUE2STtRQUM3SSwrQ0FBK0M7UUFDL0Msd0ZBQXdGO1FBQ3hGLDRGQUE0RjtRQUM1RixzSUFBc0k7UUFFdEgsaUJBQVksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQztRQUNsQyxzQkFBaUIsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUM5QyxjQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxZQUFZLENBQUM7UUFDckMsUUFBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO1FBQ3pCLFdBQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQztRQUMvQixVQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7UUFFdEMsVUFBSyxHQUFZLEtBQUssQ0FBQyxDQUFDLDZCQUE2QjtRQUU1RCxPQUFPO1FBQ0EsV0FBTSxHQUFHLElBQUksQ0FBQyxDQUFDLE1BQU07UUFDckIsY0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU87UUFDekIsaUJBQVksR0FBRyxJQUFJLENBQUMsQ0FBQyxzQkFBc0I7UUFDM0MsWUFBTyxHQUFHLElBQUksQ0FBQyxDQUFDLGdDQUFnQztRQUNoRCxVQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsT0FBTztRQUNyQixhQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsa0JBQWtCO1FBQ25DLFFBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxhQUFhO1FBQ3pCLFFBQUcsR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPO1FBQ25CLGFBQVEsR0FBRyxJQUFJLENBQUMsQ0FBQyx3Q0FBd0M7UUFDekQsWUFBTyxHQUFHLElBQUksQ0FBQyxDQUFDLDZCQUE2QjtRQUM3QyxZQUFPLEdBQUcsSUFBSSxDQUFDLENBQUMsY0FBYztRQUM5QixlQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsUUFBUTtRQUMzQixjQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMscUNBQXFDO1FBQ3hELFdBQU0sR0FBRyxLQUFLLENBQUMsQ0FBQyxvQ0FBb0M7UUFDcEQsY0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDeEIsYUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDLGFBQWE7UUFDOUIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDLENBQUMsWUFBWTtRQUV2QyxlQUFVLEdBQUcsSUFBSSxDQUFDO0lBeU43QixDQUFDO0lBdk5pQix3QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1NBQ3RDO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFFTSxnQ0FBUyxHQUFoQixVQUFpQixNQUFlO1FBQzVCLE1BQU0sR0FBRyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxlQUFPLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztJQUM1QixDQUFDO0lBRU0sbUNBQVksR0FBbkIsVUFBb0IsSUFBWTtRQUM1QixJQUFJLFNBQVMsR0FBRyxJQUFJLElBQUksU0FBUyxDQUFDO1FBQ2xDLGVBQU8sQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxtQ0FBWSxHQUFuQixVQUFvQixTQUFrQjtRQUNsQyxTQUFTLEdBQUcsU0FBUyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDbEQscUJBQVMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxTQUFTLENBQUM7SUFDekMsQ0FBQztJQUVNLGtDQUFXLEdBQWxCLFVBQW1CLFFBQWlCO1FBQ2hDLFFBQVEsR0FBRyxRQUFRLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUMvQyxlQUFPLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUNoQyxDQUFDO0lBRU0sMkNBQW9CLEdBQTNCLFVBQTRCLGlCQUEwQjtRQUNsRCxlQUFPLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7UUFDOUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3BCLGVBQU8sQ0FBQyxRQUFRLEdBQUcsZUFBTyxDQUFDLFNBQVMsQ0FBQztTQUN4QztRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXNCLGlCQUFtQixDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSxrQ0FBVyxHQUFsQixVQUFtQixHQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFlLEVBQUUsTUFBVztRQUFuRixpQkFzSEM7UUF0SHNELHlCQUFBLEVBQUEsZUFBZTtRQUFFLHVCQUFBLEVBQUEsV0FBVztRQUMvRSxpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuRixpQkFBTyxDQUFDLGNBQWMsQ0FBQyxVQUFDLElBQUk7Z0JBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3JDLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtvQkFDeEMsUUFBUSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ2xDO3FCQUFNO29CQUNILGVBQU0sQ0FBQyxjQUFjLENBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFDaEMsRUFBRSxFQUNGLEVBQUUsRUFDRixJQUFJLEVBQ0o7d0JBQ0ksS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQ25FLENBQUMsRUFDRCxLQUFLLENBQ1IsQ0FBQztpQkFDTDtZQUNMLENBQUMsQ0FBQyxDQUFDO1lBQ0gsaUJBQU8sQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQztZQUMvRCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLHVCQUFVLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUNmLGlCQUFpQjtnQkFDakIsZUFBTSxDQUFDLGNBQWMsQ0FBQyw0QkFBNEIsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUNsRSxPQUFPO2FBQ1Y7U0FDSjthQUFNO1lBQ0gsZ0JBQWdCO1lBQ2hCLElBQ0ksQ0FBQyx1QkFBVSxDQUFDLFVBQVU7Z0JBQ3RCLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFDbEc7Z0JBQ0UsaUJBQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUNsQyxlQUFNLENBQUMsY0FBYyxDQUFDLGdCQUFnQixFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RELE9BQU87YUFDVjtTQUNKO1FBRUQsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMvQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN4QixHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNwQixHQUFHLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRTNCLElBQUk7UUFDSixHQUFHLENBQUMsa0JBQWtCLEdBQUc7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FDUCx3QkFBd0IsRUFDeEIsR0FBRyxDQUFDLE1BQU0sRUFDVix3QkFBd0IsRUFDeEIsR0FBRyxDQUFDLFVBQVUsRUFDZCwwQkFBMEIsRUFDMUIsR0FBRyxDQUFDLFlBQVksQ0FDbkIsQ0FBQztZQUNGLElBQUksR0FBRyxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUU7Z0JBQy9ELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRTtvQkFDbkMsUUFBUSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFDN0I7cUJBQU07b0JBQ0gsaUJBQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29CQUNuQyxJQUFJLHVCQUFVLENBQUMsV0FBVyxFQUFFO3dCQUN4QixlQUFNLENBQUMsY0FBYyxDQUNqQixRQUFRLENBQUMsTUFBTSxHQUFHLFNBQVMsRUFDM0IsRUFBRSxFQUNGLEVBQUUsRUFDRixJQUFJLEVBQ0o7NEJBQ0ksS0FBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBQ25FLENBQUMsRUFDRCxLQUFLLENBQ1IsQ0FBQztxQkFDTDtpQkFDSjthQUNKO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsTUFBTTtRQUNOLEdBQUcsQ0FBQyxTQUFTLEdBQUcsVUFBQyxLQUFLO1lBQ2xCLGlCQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ2xDLElBQUksdUJBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLGVBQU0sQ0FBQyxjQUFjLENBQ2pCLFlBQVksRUFDWixFQUFFLEVBQ0YsZUFBZSxFQUNmLE1BQU0sRUFDTjtvQkFDSSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDbkUsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO2FBQ0w7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDbkMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBRUYsSUFBSTtRQUNKLEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBQyxLQUFLO1lBQ2hCLElBQUksdUJBQVUsQ0FBQyxXQUFXLEVBQUU7Z0JBQ3hCLGVBQU0sQ0FBQyxjQUFjLENBQ2pCLFlBQVksRUFDWixlQUFlLEVBQ2YsRUFBRSxFQUNGLE1BQU0sRUFDTjtvQkFDSSxLQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztnQkFDbkUsQ0FBQyxFQUNELElBQUksQ0FDUCxDQUFDO2FBQ0w7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDakMsUUFBUSxJQUFJLFFBQVEsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDO1FBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQ7O09BRUc7SUFDSSxpQ0FBVSxHQUFqQjtRQUNJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7WUFDekIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQy9CLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxnQkFBZ0I7UUFFM0MsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3RGO1NBQ0o7UUFFRCxZQUFZO1FBQ1osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDcEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFFL0QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFTSxrQ0FBVyxHQUFsQjtRQUNJLElBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvQixRQUFRLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDcEIsQ0FBQztJQUVNLGtDQUFXLEdBQWxCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzFCLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQXJRQSxBQXFRQyxJQUFBO0FBclFZLG9DQUFZO0FBdVFaLFFBQUEsT0FBTyxHQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0VmFsdWUgfSBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvRGF0YS9Db25zdFZhbHVlJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uL1V0aWxzL1VJSGVscCc7XG5leHBvcnQgY2xhc3MgTmV0V29ya0NsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTmV0V29ya0NsYXNzO1xuXG4gICAgLy/liKTmlq3mmK/lkKbmmK/nur/kuIogICBVUkzph4zkuI3liqDlj4LmlbDliJnpu5jorqTkuLrmtYvor5Xnjq/looNcbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNPbmxpbmVFbnYgPSB0aGlzLkdldElzT25saW5lKCkgPT0gJ29ubGluZSc7XG4gICAgLy/liKTmlq3mmK/lkKbmmK9wY+mihOWKoOi9veeahOWNj+iuriAgICBVUkzph4zkuI3liqDlj4LmlbDliJnpu5jorqTkuLrpnZ7pooTliqDovb1cbiAgICBwdWJsaWMgcmVhZG9ubHkgaXNPd2NyID0gdGhpcy5HZXRCUHJlbG9hZCgpO1xuICAgIHB1YmxpYyByZWFkb25seSBCQVNFID0gdGhpcy5pc09ubGluZUVudlxuICAgICAgICA/ICdodHRwczovL2NvdXJzZXdhcmUtb25saW5lLnNwZWl5b3UuY29tJ1xuICAgICAgICA6ICdodHRwczovL2Nlc2hpLWNvdXJzZXdhcmUuc3BlaXlvdS5jb20nO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBCQVNFID0gdGhpcy5pc09ubGluZUVudiA/ICdodHRwczovL2NvdXJzZXdhcmUtb25saW5lLnNhYXNwLnZkeW9vLmNvbScgOiAnaHR0cHM6Ly9jZXNoaS1jb3Vyc2V3YXJlLW9ubGluZS5zYWFzcC52ZHlvby5jb20nO1xuICAgIC8vIHB1YmxpYyByZWFkb25seSBDT1NfVVJMID0gdGhpcy5pc09ubGluZUVudiA/XG4gICAgLy8gICAgICdodHRwczovL2NsYXNzcm9vbS1hcGktb25saW5lLnNhYXNwLnZkeW9vLmNvbS9taWNyby1jbGFzcy9zdG9yYWdlL3YxL3RlbmNlbnQvc3RzJ1xuICAgIC8vICAgICA6ICdodHRwczovL3Rlc3QtY2xhc3MtYXBpLW9ubGluZS5zYWFzcC52ZHlvby5jb20vbWljcm8tY2xhc3Mvc3RvcmFnZS92MS90ZW5jZW50L3N0cyc7XG4gICAgLy8gcHVibGljIHJlYWRvbmx5IENPU19CQVNFX1VSTCA9IHRoaXMuaXNPbmxpbmVFbnYgPyAnaHR0cHM6Ly9taWNyby1jbGFzcy54dWVwZWl5b3UuY29tLycgOiAnaHR0cHM6Ly9taWNyby1jbGFzcy10ZXN0Lnh1ZXBlaXlvdS5jb20vJztcblxuICAgIHB1YmxpYyByZWFkb25seSBHRVRfUVVFU1RJT04gPSB0aGlzLkJBU0UgKyAnL2dldCc7XG4gICAgcHVibGljIHJlYWRvbmx5IEdFVF9VU0VSX1BST0dSRVNTID0gdGhpcy5CQVNFICsgJy9nZXQvYW5zd2VyJztcbiAgICBwdWJsaWMgcmVhZG9ubHkgR0VUX1RJVExFID0gdGhpcy5CQVNFICsgJy9nZXQvdGl0bGUnO1xuICAgIHB1YmxpYyByZWFkb25seSBBREQgPSB0aGlzLkJBU0UgKyAnL2FkZCc7XG4gICAgcHVibGljIHJlYWRvbmx5IE1PRElGWSA9IHRoaXMuQkFTRSArICcvbW9kaWZ5JztcbiAgICBwdWJsaWMgcmVhZG9ubHkgQ0xFQVIgPSB0aGlzLkJBU0UgKyAnL2NsZWFyJztcblxuICAgIHB1YmxpYyBlbXB0eTogYm9vbGVhbiA9IGZhbHNlOyAvL+a4heeQhuiEj+aVsOaNrueahOW8gOWFs++8jOWcqFVSTOmHjOmdouaLvOatpOWPguaVsCA9IHRydWXvvJtcblxuICAgIC8v5paw6K++5aCC5Y+C5pWwXG4gICAgcHVibGljIHVzZXJJZCA9IG51bGw7IC8v55So5oi3aWRcbiAgICBwdWJsaWMgY2hhcHRlcklkID0gbnVsbDsgLy/nm7Tmkq3orrJpZFxuICAgIHB1YmxpYyBjb3Vyc2V3YXJlSWQgPSBudWxsOyAvL+mimOebruS/oeaBryAgIOeUqOS6juS6pOS6kua4uOaIj+iHqui6q+afpemimOebruS/oeaBr1xuICAgIHB1YmxpYyB0aXRsZUlkID0gbnVsbDsgLy/kuqTkupLmuLjmiI/nu5HlrpppZCAgIOe7keWumueahOaXtuWAmeeUqO+8iOebkeivvuW5s+WPsO+8iSAg5a2m55Sf56uv5LiN5LygXG4gICAgcHVibGljIGJMaXZlID0gbnVsbDsgLy/mmK/lkKbmmK/nm7Tmkq1cbiAgICBwdWJsaWMgYlByZWxvYWQgPSBudWxsOyAvL+aYr+WQpumihOWKoOi9vSAg77yIY2RuL3ppcClcbiAgICBwdWJsaWMgZW52ID0gbnVsbDsgLy/ov5DooYznjq/looPvvIjnur/kuIov5rWL6K+V77yJXG4gICAgcHVibGljIGFwcCA9IG51bGw7IC8vQXBw5ZCN56ewXG4gICAgcHVibGljIHBsYXRmb3JtID0gbnVsbDsgLy/noazku7blubPlj7Dkv6Hmga/vvIhwYy9pUGFkL2FuZHJvaWQvYW5kcm9pZFBhZC93ZWLvvIlcbiAgICBwdWJsaWMgY2hhbm5lbCA9IG51bGw7IC8v5L2/55So5pa5KOi+heWvvOerr+OAgeWtpueUn+err+OAgeacquadpem7keadv+OAgemFjem9kOOAgeaVmeeglOS6keOAgeKApuKApu+8iVxuICAgIHB1YmxpYyBicm93c2VyID0gbnVsbDsgLy/mtY/op4jlmajkv6Hmga/vvIjlhoXmoLjlj4rniYjmnKzvvIlcbiAgICBwdWJsaWMgYXBwVmVyc2lvbiA9IG51bGw7IC8v56uv55qE54mI5pys5L+h5oGvXG4gICAgcHVibGljIGlzVGVhY2hlciA9IGZhbHNlOyAvL+aYr+WQpuS4uuaVmeW4iO+8iOmAmui/h+WQjOatpeeahGdldF9yb2xl6L+U5Zue55qE5piv5ZCm5Li6J3RlYWNoZXIn77yJXG4gICAgcHVibGljIGlzU3luYyA9IGZhbHNlOyAvL+aYr+WQpuS4uuWQjOatpe+8iOmAmui/h+WQjOatpeeahGdldF9pc19zeW5j6L+U5Zue5piv5ZCm5Li6MS90cnVl77yJXG4gICAgcHVibGljIGlzT2ZmbGluZSA9IDA7IC8v5piv5ZCm5Li656a757q/5qih5byPXG4gICAgcHVibGljIGlzTWFzdGVyID0gbnVsbDsgLy/mmK/lkKbmmK/kuLvliqjlj5Hlv4Pot7PnmoTkuIDmlrlcbiAgICBwdWJsaWMgaXNTdXBwb3J0S2VlcFBsYXkgPSBmYWxzZTsgLy/mmK/lkKbmlK/mjIHmjqXnnYDnjqnph43mlrDnjqlcblxuICAgIHB1YmxpYyB0aGVSZXF1ZXN0ID0gbnVsbDtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKSB7XG4gICAgICAgIGlmICh0aGlzLmluc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2UgPSBuZXcgTmV0V29ya0NsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzU3luYyhpc1N5bmM6IGJvb2xlYW4pIHtcbiAgICAgICAgaXNTeW5jID0gaXNTeW5jID09IG51bGwgPyBmYWxzZSA6IGlzU3luYztcbiAgICAgICAgTmV0V29yay5pc1N5bmMgPSBpc1N5bmM7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzVGVhY2hlcihyb2xlOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IGlzVGVhY2hlciA9IHJvbGUgPT0gJ3RlYWNoZXInO1xuICAgICAgICBOZXRXb3JrLmlzVGVhY2hlciA9IGlzVGVhY2hlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXNQcmVsb2FkKGlzUHJlbG9hZDogYm9vbGVhbikge1xuICAgICAgICBpc1ByZWxvYWQgPSBpc1ByZWxvYWQgPT0gbnVsbCA/IGZhbHNlIDogaXNQcmVsb2FkO1xuICAgICAgICBVSU1hbmFnZXIuaXNHYW1lU2hvd2luZyA9ICFpc1ByZWxvYWQ7XG4gICAgfVxuXG4gICAgcHVibGljIHNldElzTWFzdGVyKGlzTWFzdGVyOiBib29sZWFuKSB7XG4gICAgICAgIGlzTWFzdGVyID0gaXNNYXN0ZXIgPT0gbnVsbCA/IGZhbHNlIDogaXNNYXN0ZXI7XG4gICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBpc01hc3RlcjtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0SXNTdXBwb3J0S2VlcFBsYXkoaXNTdXBwb3J0S2VlcFBsYXk6IGJvb2xlYW4pIHtcbiAgICAgICAgTmV0V29yay5pc1N1cHBvcnRLZWVwUGxheSA9IGlzU3VwcG9ydEtlZXBQbGF5O1xuICAgICAgICBpZiAoIWlzU3VwcG9ydEtlZXBQbGF5KSB7XG4gICAgICAgICAgICBOZXRXb3JrLmlzTWFzdGVyID0gTmV0V29yay5pc1RlYWNoZXI7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coYGlzU3VwcG9ydEtlZXBQbGF5OiAke2lzU3VwcG9ydEtlZXBQbGF5fWApO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOivt+axgue9kee7nFBvc3QgMOaIkOWKnyAx6LaF5pe2XG4gICAgICogQHBhcmFtIHVybFxuICAgICAqIEBwYXJhbSBvcGVuVHlwZVxuICAgICAqIEBwYXJhbSBjb250ZW50VHlwZVxuICAgICAqIEBwYXJhbSBjYWxsYmFja1xuICAgICAqIEBwYXJhbSBwYXJhbXNcbiAgICAgKi9cbiAgICBwdWJsaWMgaHR0cFJlcXVlc3QodXJsOiBzdHJpbmcsIG9wZW5UeXBlLCBjb250ZW50VHlwZSwgY2FsbGJhY2sgPSBudWxsLCBwYXJhbXMgPSAnJykge1xuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLeemu+e6v+aooeW8jy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgaWYgKHRoaXMuaXNPZmZsaW5lICYmIHVybC5zdWJzdHJpbmcoMCwgdGhpcy5HRVRfUVVFU1RJT04ubGVuZ3RoKSA9PSB0aGlzLkdFVF9RVUVTVElPTikge1xuICAgICAgICAgICAgR2FtZU1zZy5yZWN2X2pzb25fZGF0YSgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWN2X2pzb25fZGF0YTonLCBkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgZGF0YS5qc29uRGF0YS5lcnJjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIGRhdGEuanNvbkRhdGEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuanNvbkRhdGEuZXJybXNnICsgJyzor7fogZTns7vlrqLmnI3vvIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICfnoa7lrponLFxuICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X2pzb25fZGF0YSh7IGNvdXJzZXdhcmVJZDogdGhpcy5jb3Vyc2V3YXJlSWQgfSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19URUFDSEVSKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGl0bGVJZCkge1xuICAgICAgICAgICAgICAgIC8v5pWZ5biI56uv5rKh5pyJdGl0bGVJZOeahOaDheWGtVxuICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbCgnVVJM5Y+C5pWw6ZSZ6K+vLOe8uuWwkXRpdGxlSWQs6K+36IGU57O75oqA5pyv5Lq65ZGY77yBJywgJycsICcnLCAn56Gu5a6aJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy/mlrDor77loILlrabnlJ/nq68gIOWIpOaWreaJgOacieWPguaVsFxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICFDb25zdFZhbHVlLklTX1RFQUNIRVIgJiZcbiAgICAgICAgICAgICAgICAoIXRoaXMudXNlcklkIHx8ICF0aGlzLmNvdXJzZXdhcmVJZCB8fCAhdGhpcy5lbnYgfHwgIXRoaXMuYXBwIHx8ICF0aGlzLmNoYW5uZWwgfHwgIXRoaXMuYnJvd3NlcilcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIEdhbWVNc2cuVVJMRXJyb3IodGhpcy50aGVSZXF1ZXN0KTtcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoJ1VSTOWPguaVsOmUmeivryzor7fogZTns7vlrqLmnI3vvIEnLCAnJywgJycsICfnoa7lrponKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgIHhoci5vcGVuKG9wZW5UeXBlLCB1cmwpO1xuICAgICAgICB4aHIudGltZW91dCA9IDEwMDAwO1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgY29udGVudFR5cGUpO1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcblxuICAgICAgICAvL+Wbnuiwg1xuICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXG4gICAgICAgICAgICAgICAgJ2h0dHBSZXF1ZXN0IHJzcCBzdGF0dXMnLFxuICAgICAgICAgICAgICAgIHhoci5zdGF0dXMsXG4gICAgICAgICAgICAgICAgJyAgICAgICAgeGhyLnJlYWR5U3RhdGUnLFxuICAgICAgICAgICAgICAgIHhoci5yZWFkeVN0YXRlLFxuICAgICAgICAgICAgICAgICcgICAgICAgIHhoci5yZXNwb25zZVRleHQnLFxuICAgICAgICAgICAgICAgIHhoci5yZXNwb25zZVRleHQsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09IDQgJiYgeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8PSA0MDApIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiByZXNwb25zZS5lcnJjb2RlID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBHYW1lTXNnLmh0dHBFcnJvcihyZXNwb25zZS5lcnJtc2cpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xuICAgICAgICAgICAgICAgICAgICAgICAgVUlIZWxwLnNob3dFcnJvclBhbmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLmVycm1zZyArICcs6K+36IGU57O75a6i5pyN77yBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAn56Gu5a6aJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8v6LaF5pe25Zue6LCDXG4gICAgICAgIHhoci5vbnRpbWVvdXQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIEdhbWVNc2cuaHR0cFRpbWVPdXQoJ+e9kee7nOS4jeS9s++8jOivt+eojeWQjumHjeivlScpO1xuICAgICAgICAgICAgaWYgKENvbnN0VmFsdWUuSVNfRURJVElPTlMpIHtcbiAgICAgICAgICAgICAgICBVSUhlbHAuc2hvd0Vycm9yUGFuZWwoXG4gICAgICAgICAgICAgICAgICAgICfnvZHnu5zkuI3kvbPvvIzor7fnqI3lkI7ph43or5UnLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ+iLpemHjeaWsOi/nuaOpeaXoOaViO+8jOivt+iBlOezu+WuouacjScsXG4gICAgICAgICAgICAgICAgICAgICfph43mlrDov57mjqUnLFxuICAgICAgICAgICAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmh0dHBSZXF1ZXN0KHVybCwgb3BlblR5cGUsIGNvbnRlbnRUeXBlLCBjYWxsYmFjaywgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2h0dHBSZXF1ZXN0IHRpbWVvdXQnKTtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUsIG51bGwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8v5Ye66ZSZXG4gICAgICAgIHhoci5vbmVycm9yID0gKGVycm9yKSA9PiB7XG4gICAgICAgICAgICBpZiAoQ29uc3RWYWx1ZS5JU19FRElUSU9OUykge1xuICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbChcbiAgICAgICAgICAgICAgICAgICAgJ+e9kee7nOWHuumUme+8jOivt+eojeWQjumHjeivlScsXG4gICAgICAgICAgICAgICAgICAgICfoi6Xph43mlrDov57mjqXml6DmlYjvvIzor7fogZTns7vlrqLmnI0nLFxuICAgICAgICAgICAgICAgICAgICAnJyxcbiAgICAgICAgICAgICAgICAgICAgJ+mHjeaWsOi/nuaOpScsXG4gICAgICAgICAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaHR0cFJlcXVlc3QodXJsLCBvcGVuVHlwZSwgY29udGVudFR5cGUsIGNhbGxiYWNrLCBwYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaHR0cFJlcXVlc3QgZXJyb3InKTtcbiAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKHRydWUsIG51bGwpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHhoci5zZW5kKHBhcmFtcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+WdXJs5Y+C5pWwXG4gICAgICovXG4gICAgcHVibGljIEdldFJlcXVlc3QoKSB7XG4gICAgICAgIGlmICh0aGlzLnRoZVJlcXVlc3QgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGhlUmVxdWVzdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRoZVJlcXVlc3QgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIHZhciB1cmwgPSBsb2NhdGlvbi5zZWFyY2g7IC8v6I635Y+WdXJs5LitXCI/XCLnrKblkI7nmoTlrZfkuLJcblxuICAgICAgICBpZiAodXJsLmluZGV4T2YoJz8nKSAhPSAtMSkge1xuICAgICAgICAgICAgdmFyIHN0ciA9IHVybC5zdWJzdHIoMSk7XG4gICAgICAgICAgICB2YXIgc3RycyA9IHN0ci5zcGxpdCgnJicpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aGVSZXF1ZXN0W3N0cnNbaV0uc3BsaXQoJz0nKVswXV0gPSBkZWNvZGVVUklDb21wb25lbnQoc3Ryc1tpXS5zcGxpdCgnPScpWzFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5paw6K++5aCCdXJs5b+F6ZyA5Y+C5pWwXG4gICAgICAgIHRoaXMudXNlcklkID0gdGhpcy50aGVSZXF1ZXN0Wyd1c2VySWQnXTtcbiAgICAgICAgdGhpcy5jaGFwdGVySWQgPSB0aGlzLnRoZVJlcXVlc3RbJ2NoYXB0ZXJJZCddO1xuICAgICAgICB0aGlzLmNvdXJzZXdhcmVJZCA9IHRoaXMudGhlUmVxdWVzdFsnY291cnNld2FyZUlkJ107XG4gICAgICAgIHRoaXMudGl0bGVJZCA9IHRoaXMudGhlUmVxdWVzdFsndGl0bGVJZCddO1xuICAgICAgICB0aGlzLmJMaXZlID0gdGhpcy50aGVSZXF1ZXN0WydiTGl2ZSddO1xuICAgICAgICB0aGlzLmJQcmVsb2FkID0gdGhpcy50aGVSZXF1ZXN0WydiUHJlbG9hZCddO1xuICAgICAgICB0aGlzLmVudiA9IHRoaXMudGhlUmVxdWVzdFsnZW52J107XG4gICAgICAgIHRoaXMuYXBwID0gdGhpcy50aGVSZXF1ZXN0WydhcHAnXTtcbiAgICAgICAgdGhpcy5wbGF0Zm9ybSA9IHRoaXMudGhlUmVxdWVzdFsncGxhdGZvcm0nXTtcbiAgICAgICAgdGhpcy5jaGFubmVsID0gdGhpcy50aGVSZXF1ZXN0WydjaGFubmVsJ107XG4gICAgICAgIHRoaXMuYnJvd3NlciA9IHRoaXMudGhlUmVxdWVzdFsnYnJvd3NlciddO1xuICAgICAgICB0aGlzLmFwcFZlcnNpb24gPSB0aGlzLnRoZVJlcXVlc3RbJ2FwcFZlcnNpb24nXTtcbiAgICAgICAgdGhpcy5lbXB0eSA9IHRoaXMudGhlUmVxdWVzdFsnZW1wdHknXTtcbiAgICAgICAgdGhpcy5pc09mZmxpbmUgPSBwYXJzZUludCh0aGlzLnRoZVJlcXVlc3RbJ2lzT2ZmbGluZSddKTsgLy/nprvnur/mqKHlvI9cblxuICAgICAgICByZXR1cm4gdGhpcy50aGVSZXF1ZXN0O1xuICAgIH1cblxuICAgIHB1YmxpYyBHZXRCUHJlbG9hZCgpIHtcbiAgICAgICAgbGV0IEJQcmVsb2FkID0gMDtcbiAgICAgICAgaWYgKHRoaXMuR2V0UmVxdWVzdCgpWydiUHJlbG9hZCddKSB7XG4gICAgICAgICAgICBCUHJlbG9hZCA9IHRoaXMuR2V0UmVxdWVzdCgpWydiUHJlbG9hZCddO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBCUHJlbG9hZDtcbiAgICB9XG5cbiAgICBwdWJsaWMgR2V0SXNPbmxpbmUoKSB7XG4gICAgICAgIGxldCBpc09ubGluZSA9ICd0ZXN0JztcbiAgICAgICAgaWYgKHRoaXMuR2V0UmVxdWVzdCgpWydlbnYnXSkge1xuICAgICAgICAgICAgaXNPbmxpbmUgPSB0aGlzLkdldFJlcXVlc3QoKVsnZW52J107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGlzT25saW5lO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IE5ldFdvcmsgPSBOZXRXb3JrQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/SDK/GameMsg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '835ffTMXMRIv6YdlX4iSt2f', 'GameMsg');
// frame/scripts/SDK/GameMsg.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameMsg = /** @class */ (function () {
    function GameMsg() {
    }
    /************************************可调用接口**************************************/
    /**
     * 监听课堂端发出的事件
     * @param key 事件名字
     * @param callBack 响应函数
     */
    GameMsg.addEvent = function (key, callBack) {
        window['gameMsg'].on_client_event(key, callBack);
    };
    /**
     * 资源加载开始
     * @param type 课件类型
     * @param protocol_version 交互课件版本
     */
    GameMsg.resLoadStart = function (type, protocol_version) {
        window['gameMsg'].res_load_start('courseware_game', '1.1.8');
        GameMsg.resLoadStartLog();
        GameMsg.request_res_load_start('');
    };
    /**
     * 资源加载中
     * @param percent 加载百分比
     */
    GameMsg.resLoading = function (percent) {
        window['gameMsg'].res_load_process(percent);
        GameMsg.res_load_process(percent);
    };
    /**
     * 资源加载完成
     */
    GameMsg.resLoadEnd = function () {
        window['gameMsg'].res_load_complete();
        GameMsg.resLoadEndLog();
        GameMsg.request_res_load_end('');
    };
    /**
     * 游戏开始
     */
    GameMsg.gameStart = function (isResult) {
        if (isResult === void 0) { isResult = false; }
        window['gameMsg'].game_start({ isResult: isResult });
        GameMsg.gameMsg_gameStart(isResult);
        GameMsg.iframe_game_start(isResult);
    };
    /**
     * 游戏操作过程数据上报
     * @param answer_data 操作过程数据/全量数据
     */
    GameMsg.answerSyncSend = function (answer_data) {
        window['gameMsg'].answer_sync_send(answer_data);
        window['iframeMsg'].answer_sync_send(answer_data);
        GameMsg.gameLevelReport(answer_data);
    };
    /**
     * 游戏完成时用于数据上报的全量数据
     * @param data 游戏全量数据
     */
    GameMsg.gameOver = function (data) {
        window['gameMsg'].game_over(data);
        window['iframeMsg'].game_over(data);
        GameMsg.gameOverReport(data);
    };
    /**
     * 上报统计数据
     */
    GameMsg.gameStatisticData = function (data) {
        var sendData = { type: 'courseware_game_answer', data: data };
        window['gameMsg'].game_statistic_data(sendData);
        window['iframeMsg'].game_statistic_data(sendData);
    };
    /**
     * 游戏结束，收到stop消息后发送
     */
    GameMsg.finished = function () {
        window['gameMsg'].finished();
    };
    /**
     * 同步发送
     * @param 同步数据
     */
    GameMsg.send_sync_data = function (msg) {
        window['iframeMsg'].send_sync_data(msg);
    };
    /**
     * 同步接收
     * @param cb 回调
     */
    GameMsg.recv_sync_data = function (cb) {
        window['iframeMsg'].recv_sync_data(cb);
    };
    /**
     * 获取是否同步
     * @param cb 回调
     */
    GameMsg.get_is_sync = function (cb) {
        window['iframeMsg'].get_is_sync(cb);
    };
    /**
     * 获取角色信息
     * @param cb 回调
     */
    GameMsg.get_role = function (cb) {
        window['iframeMsg'].get_role(cb);
    };
    // 离线模式监听json消息
    GameMsg.recv_json_data = function (cb) {
        window['iframeMsg'].recv_json_data(cb);
    };
    // 离线模式请求json数据
    GameMsg.request_json_data = function (data) {
        window['iframeMsg'].request_json_data(data);
    };
    // 正常日志
    GameMsg.info = function (msg) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = window['aliLogMsg']).info.apply(_a, __spreadArrays([msg], data));
    };
    // 警告日志
    GameMsg.warn = function (msg) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = window['aliLogMsg']).warn.apply(_a, __spreadArrays([msg], data));
    };
    // 报错日志
    GameMsg.error = function (msg) {
        var _a;
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        (_a = window['aliLogMsg']).error.apply(_a, __spreadArrays([msg], data));
    };
    /**
     * URL参数不全报错
     * @param data url参数
     */
    GameMsg.URLError = function (data) {
        window['aliLogMsg'].URLError(data);
    };
    // 网络请求超时
    GameMsg.httpTimeOut = function (msg) {
        window['aliLogMsg'].httpTimeOut(msg);
    };
    // 网络请求错误
    GameMsg.httpError = function (msg) {
        window['aliLogMsg'].httpError(msg);
    };
    // coursewareKey不同
    GameMsg.differntKey = function (msg) {
        window['aliLogMsg'].differntKey(msg);
    };
    // 游戏收到结束游戏上报
    GameMsg.gameStop = function () {
        window['aliLogMsg'].gameStop();
    };
    /*************************************接着玩、重新玩*********************************/
    /**
     * 发送3S心跳
     * @param data
     */
    GameMsg.send_sync_3s_data = function (data) {
        window['iframeMsg'].send_sync_3s_data(data);
    };
    /**
     * 监听3S心跳
     * @param cb
     */
    GameMsg.recv_sync_3s_data = function (cb) {
        window['iframeMsg'].recv_sync_3s_data(cb);
    };
    /**
     * 监听接着玩
     * @param cb
     */
    GameMsg.recv_keep_playing = function (cb) {
        window['iframeMsg'].recv_keep_playing(cb);
    };
    /**
     * 接着玩回调
     * @param data  3s心跳数据
     */
    GameMsg.request_keep_playing = function (data) {
        window['iframeMsg'].request_keep_playing(data);
    };
    /**
     * 监听取消接着玩
     * @param cb
     */
    GameMsg.recv_cancel_keep_playing = function (cb) {
        window['iframeMsg'].recv_cancel_keep_playing(cb);
    };
    /**
     * 监听重新玩
     * @param cb
     */
    GameMsg.recv_restart = function (cb) {
        window['iframeMsg'].recv_restart(cb);
    };
    /**
     * 发送重新玩成功回调
     * @param data
     */
    GameMsg.request_restart_over = function (data) {
        if (data === void 0) { data = ''; }
        window['iframeMsg'].request_restart_over(data);
    };
    /**
     * 发送准备就绪
     * @param data
     */
    GameMsg.request_event_ready = function (data) {
        if (data === void 0) { data = ''; }
        window['iframeMsg'].request_event_ready(data);
    };
    /**
     * 监听是否为主动发送心跳的一端
     * @param cb 回调
     */
    GameMsg.recv_is_master = function (cb) {
        window['iframeMsg'].recv_is_master(cb);
    };
    /**
     * 发送同步事件监听初始化完成
     * @param data
     */
    GameMsg.request_sync_init = function (data) {
        if (data === void 0) { data = ''; }
        window['iframeMsg'].request_sync_init(data);
    };
    /**
     * 发送关卡信息
     * @param data
     */
    GameMsg.request_level_info = function (data) {
        window['iframeMsg'].request_level_info(data);
    };
    /**
     * 获取是否支持接着玩
     * @param cb 回调
     */
    GameMsg.get_is_supportKeepAndRestart = function (cb) {
        window['iframeMsg'].get_is_supportKeepAndRestart(cb);
    };
    /*************************************预加载*********************************/
    /**
     * 获取是否支持预加载
     * @param cb 回调
     */
    GameMsg.get_is_preload = function (cb) {
        window['iframeMsg'].get_is_preload(cb);
    };
    /**
     * 监听窗口打开
     * @param cb
     */
    GameMsg.recv_show_gamePanel = function (cb) {
        window['iframeMsg'].recv_show_gamePanel(cb);
    };
    /**
     * 监听窗口关闭
     * @param cb
     */
    GameMsg.recv_hide_gamePanel = function (cb) {
        window['iframeMsg'].recv_hide_gamePanel(cb);
    };
    /**
     * 发送资源加载开始
     * @param data
     */
    GameMsg.request_res_load_start = function (data) {
        window['iframeMsg'].request_res_load_start(data);
    };
    /**
     * 发送加载进度
     * @param percent 加载百分比
     */
    GameMsg.res_load_process = function (percent) {
        window['iframeMsg'].res_load_process(percent);
    };
    /**
     * 发送资源加载结束
     * @param data
     */
    GameMsg.request_res_load_end = function (data) {
        window['iframeMsg'].request_res_load_end(data);
    };
    /**
     * 发送引擎加载开始
     * @param data
     */
    GameMsg.request_engine_load_start = function (data) {
        window['iframeMsg'].request_engine_load_start(data);
    };
    /**
     * 发送引擎加载结束
     * @param data
     */
    GameMsg.request_engine_load_end = function (data) {
        window['iframeMsg'].request_engine_load_end(data);
    };
    /**
     * 加载完成
     */
    GameMsg.iframe_game_start = function (isResult) {
        if (this.b_init) {
            return;
        }
        this.b_init = true;
        window['iframeMsg'].game_start({ isResult: isResult });
        GameMsg.iframeMsg_gameStart(isResult);
    };
    // 资源加载开始
    GameMsg.resLoadStartLog = function () {
        window['aliLogMsg'].resLoadStart();
    };
    // 资源加载结束
    GameMsg.resLoadEndLog = function () {
        window['aliLogMsg'].resLoadEnd();
    };
    // gameMsg调用gameStart
    GameMsg.gameMsg_gameStart = function (isResult) {
        window['aliLogMsg'].gameMsg_gameStart({ isResult: isResult });
    };
    // iframeMsg调用gameStart
    GameMsg.iframeMsg_gameStart = function (isResult) {
        window['aliLogMsg'].iframeMsg_gameStart({ isResult: isResult });
    };
    // 游戏单关/单步上报
    GameMsg.gameLevelReport = function (data) {
        window['aliLogMsg'].gameLevelReport(data);
    };
    // 游戏GameOver上报
    GameMsg.gameOverReport = function (data) {
        window['aliLogMsg'].gameOverReport(data);
    };
    /**********************************************************************************/
    /************************************私有接口**************************************/
    GameMsg.b_init = false; // 防止在自测试时多次发送start
    return GameMsg;
}());
exports.default = GameMsg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFNES1xcR2FtZU1zZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBZ1hBLENBQUM7SUEvV0csaUZBQWlGO0lBQ2pGOzs7O09BSUc7SUFDVyxnQkFBUSxHQUF0QixVQUF1QixHQUFHLEVBQUUsUUFBUTtRQUNoQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNXLG9CQUFZLEdBQTFCLFVBQTJCLElBQUssRUFBRSxnQkFBaUI7UUFDL0MsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDMUIsT0FBTyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRDs7O09BR0c7SUFDVyxrQkFBVSxHQUF4QixVQUF5QixPQUFPO1FBQzVCLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0JBQVUsR0FBeEI7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN0QyxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsT0FBTyxDQUFDLG9CQUFvQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNXLGlCQUFTLEdBQXZCLFVBQXdCLFFBQWdCO1FBQWhCLHlCQUFBLEVBQUEsZ0JBQWdCO1FBQ3BDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMs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QW1CLEdBQWxDLFVBQW1DLFFBQVE7UUFDdkMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELFlBQVk7SUFDRyx1QkFBZSxHQUE5QixVQUErQixJQUFJO1FBQy9CLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELGVBQWU7SUFDQSxzQkFBYyxHQUE3QixVQUE4QixJQUFJO1FBQzlCLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQXZDRCxvRkFBb0Y7SUFFcEYsZ0ZBQWdGO0lBQ2pFLGNBQU0sR0FBWSxLQUFLLENBQUMsQ0FBQyxtQkFBbUI7SUFzQy9ELGNBQUM7Q0FoWEQsQUFnWEMsSUFBQTtrQkFoWG9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lTXNnIHtcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5Y+v6LCD55So5o6l5Y+jKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqXG4gICAgICog55uR5ZCs6K++5aCC56uv5Y+R5Ye655qE5LqL5Lu2XG4gICAgICogQHBhcmFtIGtleSDkuovku7blkI3lrZdcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5ZON5bqU5Ye95pWwXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhZGRFdmVudChrZXksIGNhbGxCYWNrKSB7XG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLm9uX2NsaWVudF9ldmVudChrZXksIGNhbGxCYWNrKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotYTmupDliqDovb3lvIDlp4tcbiAgICAgKiBAcGFyYW0gdHlwZSDor77ku7bnsbvlnotcbiAgICAgKiBAcGFyYW0gcHJvdG9jb2xfdmVyc2lvbiDkuqTkupLor77ku7bniYjmnKxcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlc0xvYWRTdGFydCh0eXBlPywgcHJvdG9jb2xfdmVyc2lvbj8pIHtcbiAgICAgICAgd2luZG93WydnYW1lTXNnJ10ucmVzX2xvYWRfc3RhcnQoJ2NvdXJzZXdhcmVfZ2FtZScsICcxLjEuOCcpO1xuICAgICAgICBHYW1lTXNnLnJlc0xvYWRTdGFydExvZygpO1xuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfcmVzX2xvYWRfc3RhcnQoJycpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOi1hOa6kOWKoOi9veS4rVxuICAgICAqIEBwYXJhbSBwZXJjZW50IOWKoOi9veeZvuWIhuavlFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVzTG9hZGluZyhwZXJjZW50KSB7XG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLnJlc19sb2FkX3Byb2Nlc3MocGVyY2VudCk7XG4gICAgICAgIEdhbWVNc2cucmVzX2xvYWRfcHJvY2VzcyhwZXJjZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDotYTmupDliqDovb3lrozmiJBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlc0xvYWRFbmQoKSB7XG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLnJlc19sb2FkX2NvbXBsZXRlKCk7XG4gICAgICAgIEdhbWVNc2cucmVzTG9hZEVuZExvZygpO1xuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfcmVzX2xvYWRfZW5kKCcnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lvIDlp4tcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdhbWVTdGFydChpc1Jlc3VsdCA9IGZhbHNlKSB7XG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLmdhbWVfc3RhcnQoeyBpc1Jlc3VsdDogaXNSZXN1bHQgfSk7XG4gICAgICAgIEdhbWVNc2cuZ2FtZU1zZ19nYW1lU3RhcnQoaXNSZXN1bHQpO1xuICAgICAgICBHYW1lTXNnLmlmcmFtZV9nYW1lX3N0YXJ0KGlzUmVzdWx0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/mk43kvZzov4fnqIvmlbDmja7kuIrmiqVcbiAgICAgKiBAcGFyYW0gYW5zd2VyX2RhdGEg5pON5L2c6L+H56iL5pWw5o2uL+WFqOmHj+aVsOaNrlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYW5zd2VyU3luY1NlbmQoYW5zd2VyX2RhdGEpIHtcbiAgICAgICAgd2luZG93WydnYW1lTXNnJ10uYW5zd2VyX3N5bmNfc2VuZChhbnN3ZXJfZGF0YSk7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10uYW5zd2VyX3N5bmNfc2VuZChhbnN3ZXJfZGF0YSk7XG4gICAgICAgIEdhbWVNc2cuZ2FtZUxldmVsUmVwb3J0KGFuc3dlcl9kYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmuLjmiI/lrozmiJDml7bnlKjkuo7mlbDmja7kuIrmiqXnmoTlhajph4/mlbDmja5cbiAgICAgKiBAcGFyYW0gZGF0YSDmuLjmiI/lhajph4/mlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdhbWVPdmVyKGRhdGEpIHtcbiAgICAgICAgd2luZG93WydnYW1lTXNnJ10uZ2FtZV9vdmVyKGRhdGEpO1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdhbWVfb3ZlcihkYXRhKTtcbiAgICAgICAgR2FtZU1zZy5nYW1lT3ZlclJlcG9ydChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuIrmiqXnu5/orqHmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdhbWVTdGF0aXN0aWNEYXRhKGRhdGE6IGFueSkge1xuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IHsgdHlwZTogJ2NvdXJzZXdhcmVfZ2FtZV9hbnN3ZXInLCBkYXRhOiBkYXRhIH07XG4gICAgICAgIHdpbmRvd1snZ2FtZU1zZyddLmdhbWVfc3RhdGlzdGljX2RhdGEoc2VuZERhdGEpO1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdhbWVfc3RhdGlzdGljX2RhdGEoc2VuZERhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn++8jOaUtuWIsHN0b3Dmtojmga/lkI7lj5HpgIFcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGZpbmlzaGVkKCkge1xuICAgICAgICB3aW5kb3dbJ2dhbWVNc2cnXS5maW5pc2hlZCgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWQjOatpeWPkemAgVxuICAgICAqIEBwYXJhbSDlkIzmraXmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNlbmRfc3luY19kYXRhKG1zZzogYW55KSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10uc2VuZF9zeW5jX2RhdGEobXNnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlkIzmraXmjqXmlLZcbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWN2X3N5bmNfZGF0YShjYikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3Zfc3luY19kYXRhKGNiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmmK/lkKblkIzmraVcbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRfaXNfc3luYyhjYikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdldF9pc19zeW5jKGNiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bop5LoibLkv6Hmga9cbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRfcm9sZShjYikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLmdldF9yb2xlKGNiKTtcbiAgICB9XG5cbiAgICAvLyDnprvnur/mqKHlvI/nm5HlkKxqc29u5raI5oGvXG4gICAgcHVibGljIHN0YXRpYyByZWN2X2pzb25fZGF0YShjYikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3ZfanNvbl9kYXRhKGNiKTtcbiAgICB9XG5cbiAgICAvLyDnprvnur/mqKHlvI/or7fmsYJqc29u5pWw5o2uXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0X2pzb25fZGF0YShkYXRhKSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9qc29uX2RhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8g5q2j5bi45pel5b+XXG4gICAgcHVibGljIHN0YXRpYyBpbmZvKG1zZywgLi4uZGF0YSkge1xuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLmluZm8obXNnLCAuLi5kYXRhKTtcbiAgICB9XG4gICAgLy8g6K2m5ZGK5pel5b+XXG4gICAgcHVibGljIHN0YXRpYyB3YXJuKG1zZywgLi4uZGF0YSkge1xuICAgICAgICB3aW5kb3dbJ2FsaUxvZ01zZyddLndhcm4obXNnLCAuLi5kYXRhKTtcbiAgICB9XG4gICAgLy8g5oql6ZSZ5pel5b+XXG4gICAgcHVibGljIHN0YXRpYyBlcnJvcihtc2csIC4uLmRhdGEpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5lcnJvcihtc2csIC4uLmRhdGEpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBVUkzlj4LmlbDkuI3lhajmiqXplJlcbiAgICAgKiBAcGFyYW0gZGF0YSB1cmzlj4LmlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIFVSTEVycm9yKGRhdGEpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5VUkxFcnJvcihkYXRhKTtcbiAgICB9XG4gICAgLy8g572R57uc6K+35rGC6LaF5pe2XG4gICAgcHVibGljIHN0YXRpYyBodHRwVGltZU91dChtc2cpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5odHRwVGltZU91dChtc2cpO1xuICAgIH1cbiAgICAvLyDnvZHnu5zor7fmsYLplJnor69cbiAgICBwdWJsaWMgc3RhdGljIGh0dHBFcnJvcihtc2cpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5odHRwRXJyb3IobXNnKTtcbiAgICB9XG4gICAgLy8gY291cnNld2FyZUtleeS4jeWQjFxuICAgIHB1YmxpYyBzdGF0aWMgZGlmZmVybnRLZXkobXNnKSB7XG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10uZGlmZmVybnRLZXkobXNnKTtcbiAgICB9XG4gICAgLy8g5ri45oiP5pS25Yiw57uT5p2f5ri45oiP5LiK5oqlXG4gICAgcHVibGljIHN0YXRpYyBnYW1lU3RvcCgpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5nYW1lU3RvcCgpO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioq5o6l552A546p44CB6YeN5paw546pKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqXG4gICAgICog5Y+R6YCBM1Plv4Pot7NcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2VuZF9zeW5jXzNzX2RhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10uc2VuZF9zeW5jXzNzX2RhdGEoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCsM1Plv4Pot7NcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlY3Zfc3luY18zc19kYXRhKGNiOiBGdW5jdGlvbikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3Zfc3luY18zc19kYXRhKGNiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmjqXnnYDnjqlcbiAgICAgKiBAcGFyYW0gY2JcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlY3Zfa2VlcF9wbGF5aW5nKGNiOiBGdW5jdGlvbikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3Zfa2VlcF9wbGF5aW5nKGNiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmjqXnnYDnjqnlm57osINcbiAgICAgKiBAcGFyYW0gZGF0YSAgM3Plv4Pot7PmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3Rfa2VlcF9wbGF5aW5nKGRhdGE6IGFueSkge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlcXVlc3Rfa2VlcF9wbGF5aW5nKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOWPlua2iOaOpeedgOeOqVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVjdl9jYW5jZWxfa2VlcF9wbGF5aW5nKGNiOiBGdW5jdGlvbikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3ZfY2FuY2VsX2tlZXBfcGxheWluZyhjYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs6YeN5paw546pXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWN2X3Jlc3RhcnQoY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVjdl9yZXN0YXJ0KGNiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HpgIHph43mlrDnjqnmiJDlip/lm57osINcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdF9yZXN0YXJ0X292ZXIoZGF0YSA9ICcnKSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9yZXN0YXJ0X292ZXIoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5YeG5aSH5bCx57uqXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3RfZXZlbnRfcmVhZHkoZGF0YSA9ICcnKSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9ldmVudF9yZWFkeShkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmmK/lkKbkuLrkuLvliqjlj5HpgIHlv4Pot7PnmoTkuIDnq69cbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWN2X2lzX21hc3RlcihjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZWN2X2lzX21hc3RlcihjYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5ZCM5q2l5LqL5Lu255uR5ZCs5Yid5aeL5YyW5a6M5oiQXG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlcXVlc3Rfc3luY19pbml0KGRhdGEgPSAnJykge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlcXVlc3Rfc3luY19pbml0KGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWPkemAgeWFs+WNoeS/oeaBr1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZXF1ZXN0X2xldmVsX2luZm8oZGF0YTogYW55KSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9sZXZlbF9pbmZvKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaYr+WQpuaUr+aMgeaOpeedgOeOqVxuICAgICAqIEBwYXJhbSBjYiDlm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldF9pc19zdXBwb3J0S2VlcEFuZFJlc3RhcnQoY2I6IEZ1bmN0aW9uKSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10uZ2V0X2lzX3N1cHBvcnRLZWVwQW5kUmVzdGFydChjYik7XG4gICAgfVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKirpooTliqDovb0qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmmK/lkKbmlK/mjIHpooTliqDovb1cbiAgICAgKiBAcGFyYW0gY2Ig5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRfaXNfcHJlbG9hZChjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5nZXRfaXNfcHJlbG9hZChjYik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs56qX5Y+j5omT5byAXG4gICAgICogQHBhcmFtIGNiXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZWN2X3Nob3dfZ2FtZVBhbmVsKGNiOiBGdW5jdGlvbikge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlY3Zfc2hvd19nYW1lUGFuZWwoY2IpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOeql+WPo+WFs+mXrVxuICAgICAqIEBwYXJhbSBjYlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVjdl9oaWRlX2dhbWVQYW5lbChjYjogRnVuY3Rpb24pIHtcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZWN2X2hpZGVfZ2FtZVBhbmVsKGNiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HpgIHotYTmupDliqDovb3lvIDlp4tcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlcXVlc3RfcmVzX2xvYWRfc3RhcnQoZGF0YSkge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlcXVlc3RfcmVzX2xvYWRfc3RhcnQoZGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5Yqg6L296L+b5bqmXG4gICAgICogQHBhcmFtIHBlcmNlbnQg5Yqg6L2955m+5YiG5q+UXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgcmVzX2xvYWRfcHJvY2VzcyhwZXJjZW50KSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVzX2xvYWRfcHJvY2VzcyhwZXJjZW50KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HpgIHotYTmupDliqDovb3nu5PmnZ9cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIHJlcXVlc3RfcmVzX2xvYWRfZW5kKGRhdGEpIHtcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5yZXF1ZXN0X3Jlc19sb2FkX2VuZChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HpgIHlvJXmk47liqDovb3lvIDlp4tcbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdF9lbmdpbmVfbG9hZF9zdGFydChkYXRhKSB7XG4gICAgICAgIHdpbmRvd1snaWZyYW1lTXNnJ10ucmVxdWVzdF9lbmdpbmVfbG9hZF9zdGFydChkYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj5HpgIHlvJXmk47liqDovb3nu5PmnZ9cbiAgICAgKiBAcGFyYW0gZGF0YVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVxdWVzdF9lbmdpbmVfbG9hZF9lbmQoZGF0YSkge1xuICAgICAgICB3aW5kb3dbJ2lmcmFtZU1zZyddLnJlcXVlc3RfZW5naW5lX2xvYWRfZW5kKGRhdGEpO1xuICAgIH1cblxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKuengeacieaOpeWPoyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIHByaXZhdGUgc3RhdGljIGJfaW5pdDogYm9vbGVhbiA9IGZhbHNlOyAvLyDpmLLmraLlnKjoh6rmtYvor5Xml7blpJrmrKHlj5HpgIFzdGFydFxuICAgIC8qKlxuICAgICAqIOWKoOi9veWujOaIkFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIGlmcmFtZV9nYW1lX3N0YXJ0KGlzUmVzdWx0KSB7XG4gICAgICAgIGlmICh0aGlzLmJfaW5pdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYl9pbml0ID0gdHJ1ZTtcbiAgICAgICAgd2luZG93WydpZnJhbWVNc2cnXS5nYW1lX3N0YXJ0KHtpc1Jlc3VsdDogaXNSZXN1bHR9KTtcbiAgICAgICAgR2FtZU1zZy5pZnJhbWVNc2dfZ2FtZVN0YXJ0KGlzUmVzdWx0KTtcbiAgICB9XG5cbiAgICAvLyDotYTmupDliqDovb3lvIDlp4tcbiAgICBwcml2YXRlIHN0YXRpYyByZXNMb2FkU3RhcnRMb2coKSB7XG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10ucmVzTG9hZFN0YXJ0KCk7XG4gICAgfVxuICAgIC8vIOi1hOa6kOWKoOi9vee7k+adn1xuICAgIHByaXZhdGUgc3RhdGljIHJlc0xvYWRFbmRMb2coKSB7XG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10ucmVzTG9hZEVuZCgpO1xuICAgIH1cbiAgICAvLyBnYW1lTXNn6LCD55SoZ2FtZVN0YXJ0XG4gICAgcHJpdmF0ZSBzdGF0aWMgZ2FtZU1zZ19nYW1lU3RhcnQoaXNSZXN1bHQpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5nYW1lTXNnX2dhbWVTdGFydCh7aXNSZXN1bHQ6IGlzUmVzdWx0fSk7XG4gICAgfVxuICAgIC8vIGlmcmFtZU1zZ+iwg+eUqGdhbWVTdGFydFxuICAgIHByaXZhdGUgc3RhdGljIGlmcmFtZU1zZ19nYW1lU3RhcnQoaXNSZXN1bHQpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5pZnJhbWVNc2dfZ2FtZVN0YXJ0KHtpc1Jlc3VsdDogaXNSZXN1bHR9KTtcbiAgICB9XG4gICAgLy8g5ri45oiP5Y2V5YWzL+WNleatpeS4iuaKpVxuICAgIHByaXZhdGUgc3RhdGljIGdhbWVMZXZlbFJlcG9ydChkYXRhKSB7XG4gICAgICAgIHdpbmRvd1snYWxpTG9nTXNnJ10uZ2FtZUxldmVsUmVwb3J0KGRhdGEpO1xuICAgIH1cbiAgICAvLyDmuLjmiI9HYW1lT3ZlcuS4iuaKpVxuICAgIHByaXZhdGUgc3RhdGljIGdhbWVPdmVyUmVwb3J0KGRhdGEpIHtcbiAgICAgICAgd2luZG93WydhbGlMb2dNc2cnXS5nYW1lT3ZlclJlcG9ydChkYXRhKTtcbiAgICB9XG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/HitTest.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cc84066lYNFeaHvvm4jg8ve', 'HitTest');
// frame/scripts/Utils/HitTest.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HitTest = void 0;
var HitTest = /** @class */ (function () {
    function HitTest() {
    }
    /**
     * 点是否在图形内
     * @param pos 世界坐标
     * @param rect 碰撞节点
     */
    HitTest.posInRect = function (pos, rect) {
        var p = rect.parent.convertToWorldSpaceAR(rect.position);
        var lb = cc.v2(p.x - rect.width / 2, p.y - rect.height / 2);
        var rt = cc.v2(p.x + rect.width / 2, p.y + rect.height / 2);
        var b = pos.x >= lb.x && pos.y >= lb.y && pos.x <= rt.x && pos.y <= rt.y;
        return b;
    };
    /**
     * 图形点击检测, 锚点必须为左上角，或者中心。
     * 所检测的图片不可打包图集
     * @param posw 点击的世界坐标
     * @param sprite 点击的图片
     * @param accurate 是否开始像素精确判定
     */
    HitTest.imgHitTest = function (posw, sprite, accurate) {
        if (accurate === void 0) { accurate = false; }
        if (accurate) {
            var spf = sprite.spriteFrame;
            var pos = sprite.node.convertToNodeSpaceAR(posw);
            if (sprite.node.anchorX == 0 && sprite.node.anchorY == 1) {
                pos.y = -pos.y;
            }
            else if (sprite.node.anchorX == 0.5 && sprite.node.anchorY == 0.5) {
                var w = sprite.node.width;
                var h = sprite.node.height;
                pos.x = w / 2 + pos.x;
                if (pos.y > 0) {
                    pos.y = h / 2 - pos.y;
                }
                else {
                    pos.y = h / 2 + Math.abs(pos.y);
                }
            }
            var tex = spf.getTexture();
            var cvs = document.createElement('canvas');
            var ctx = cvs.getContext('2d');
            cvs.width = tex.width;
            cvs.height = tex.height;
            ctx.drawImage(tex.getHtmlElementObj(), 0, 0, tex.width, tex.height, 0, 0, tex.width / 1, tex.height / 1);
            var ctx = cvs.getContext('2d');
            var data = ctx.getImageData(pos.x, pos.y, 1, 1).data;
            console.log(data);
            return data[3] != 0;
        }
        else {
            this.posInRect(posw, sprite.node);
        }
    };
    /**
     * 点是否在多边形内
     */
    HitTest.polygonInside = function (point, polygon) {
        var b = false;
        var cn = 0;
        for (var i = 0, l = polygon.length - 1; i < l; i++) {
            var p1 = polygon[i];
            var p2 = polygon[i + 1];
            if ((p1.y < point.y && p2.y > point.y) || (p1.y > point.y && p2.y < point.y)) {
                var vt = (point.y - p1.y) / (p2.y - p1.y);
                if (point.x < p1.x + vt * (p2.x - p1.x)) {
                    ++cn;
                }
            }
        }
        // 判断交点个数是奇数还是偶数，奇数在图内，偶数在图外，如果有特殊图形，则需要特殊判断
        b = cn % 2 == 1;
        return b;
    };
    return HitTest;
}());
exports.HitTest = HitTest;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxIaXRUZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUF5RUEsQ0FBQztJQXhFRzs7OztPQUlHO0lBQ1csaUJBQVMsR0FBdkIsVUFBd0IsR0FBWSxFQUFFLElBQWE7UUFDL0MsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDekQsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM1RCxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN6RSxPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDVyxrQkFBVSxHQUF4QixVQUF5QixJQUFhLEVBQUUsTUFBaUIsRUFBRSxRQUF5QjtRQUF6Qix5QkFBQSxFQUFBLGdCQUF5QjtRQUNoRixJQUFJLFFBQVEsRUFBRTtZQUNWLElBQUksR0FBRyxHQUFHLE1BQU0s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QUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFFLElBQUksRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JDLEVBQUUsRUFBRSxDQUFDO2lCQUNSO2FBQ0o7U0FDSjtRQUNELDRDQUE0QztRQUM1QyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQ0wsY0FBQztBQUFELENBekVBLEFBeUVDLElBQUE7QUF6RVksMEJBQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGl0VGVzdCB7XG4gICAgLyoqXG4gICAgICog54K55piv5ZCm5Zyo5Zu+5b2i5YaFXG4gICAgICogQHBhcmFtIHBvcyDkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gcmVjdCDnorDmkp7oioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBvc0luUmVjdChwb3M6IGNjLlZlYzIsIHJlY3Q6IGNjLk5vZGUpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IHAgPSByZWN0LnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIocmVjdC5wb3NpdGlvbik7XG4gICAgICAgIGxldCBsYiA9IGNjLnYyKHAueCAtIHJlY3Qud2lkdGggLyAyLCBwLnkgLSByZWN0LmhlaWdodCAvIDIpO1xuICAgICAgICBsZXQgcnQgPSBjYy52MihwLnggKyByZWN0LndpZHRoIC8gMiwgcC55ICsgcmVjdC5oZWlnaHQgLyAyKTtcbiAgICAgICAgbGV0IGIgPSBwb3MueCA+PSBsYi54ICYmIHBvcy55ID49IGxiLnkgJiYgcG9zLnggPD0gcnQueCAmJiBwb3MueSA8PSBydC55O1xuICAgICAgICByZXR1cm4gYjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlm77lvaLngrnlh7vmo4DmtYssIOmUmueCueW/hemhu+S4uuW3puS4iuinku+8jOaIluiAheS4reW/g+OAglxuICAgICAqIOaJgOajgOa1i+eahOWbvueJh+S4jeWPr+aJk+WMheWbvumbhlxuICAgICAqIEBwYXJhbSBwb3N3IOeCueWHu+eahOS4lueVjOWdkOagh1xuICAgICAqIEBwYXJhbSBzcHJpdGUg54K55Ye755qE5Zu+54mHXG4gICAgICogQHBhcmFtIGFjY3VyYXRlIOaYr+WQpuW8gOWni+WDj+e0oOeyvuehruWIpOWumlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgaW1nSGl0VGVzdChwb3N3OiBjYy5WZWMyLCBzcHJpdGU6IGNjLlNwcml0ZSwgYWNjdXJhdGU6IGJvb2xlYW4gPSBmYWxzZSk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoYWNjdXJhdGUpIHtcbiAgICAgICAgICAgIGxldCBzcGYgPSBzcHJpdGUuc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICBsZXQgcG9zID0gc3ByaXRlLm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIocG9zdyk7XG4gICAgICAgICAgICBpZiAoc3ByaXRlLm5vZGUuYW5jaG9yWCA9PSAwICYmIHNwcml0ZS5ub2RlLmFuY2hvclkgPT0gMSkge1xuICAgICAgICAgICAgICAgIHBvcy55ID0gLXBvcy55O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChzcHJpdGUubm9kZS5hbmNob3JYID09IDAuNSAmJiBzcHJpdGUubm9kZS5hbmNob3JZID09IDAuNSkge1xuICAgICAgICAgICAgICAgIGxldCB3ID0gc3ByaXRlLm5vZGUud2lkdGg7XG4gICAgICAgICAgICAgICAgbGV0IGggPSBzcHJpdGUubm9kZS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgcG9zLnggPSB3IC8gMiArIHBvcy54O1xuICAgICAgICAgICAgICAgIGlmIChwb3MueSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zLnkgPSBoIC8gMiAtIHBvcy55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBvcy55ID0gaCAvIDIgKyBNYXRoLmFicyhwb3MueSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHRleCA9IHNwZi5nZXRUZXh0dXJlKCk7XG4gICAgICAgICAgICBsZXQgY3ZzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgICAgICB2YXIgY3R4ID0gY3ZzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICBjdnMud2lkdGggPSB0ZXgud2lkdGg7XG4gICAgICAgICAgICBjdnMuaGVpZ2h0ID0gdGV4LmhlaWdodDtcbiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UodGV4LmdldEh0bWxFbGVtZW50T2JqKCksIDAsIDAsIHRleC53aWR0aCwgdGV4LmhlaWdodCwgMCwgMCwgdGV4LndpZHRoIC8gMSwgdGV4LmhlaWdodCAvIDEpO1xuICAgICAgICAgICAgdmFyIGN0eCA9IGN2cy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBjdHguZ2V0SW1hZ2VEYXRhKHBvcy54LCBwb3MueSwgMSwgMSkuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YVszXSAhPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wb3NJblJlY3QocG9zdywgc3ByaXRlLm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog54K55piv5ZCm5Zyo5aSa6L655b2i5YaFXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwb2x5Z29uSW5zaWRlKHBvaW50OiBjYy5WZWMyLCBwb2x5Z29uOiBjYy5WZWMyW10pOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGIgPSBmYWxzZTtcbiAgICAgICAgbGV0IGNuID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aCAtIDE7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwMSA9IHBvbHlnb25baV07XG4gICAgICAgICAgICBsZXQgcDIgPSBwb2x5Z29uW2kgKyAxXTtcbiAgICAgICAgICAgIGlmICgocDEueSA8IHBvaW50LnkgJiYgcDIueSA+IHBvaW50LnkpIHx8IChwMS55ID4gcG9pbnQueSAmJiBwMi55IDwgcG9pbnQueSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdnQgPSAocG9pbnQueSAtIHAxLnkpIC8gKHAyLnkgLSBwMS55KTtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQueCA8IHAxLnggKyB2dCAqIChwMi54IC0gcDEueCkpIHtcbiAgICAgICAgICAgICAgICAgICAgKytjbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5Yik5pat5Lqk54K55Liq5pWw5piv5aWH5pWw6L+Y5piv5YG25pWw77yM5aWH5pWw5Zyo5Zu+5YaF77yM5YG25pWw5Zyo5Zu+5aSW77yM5aaC5p6c5pyJ54m55q6K5Zu+5b2i77yM5YiZ6ZyA6KaB54m55q6K5Yik5patXG4gICAgICAgIGIgPSBjbiAlIDIgPT0gMTtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e0cd2sRJnFGkbmE879tvukm', 'SoundManager');
// frame/scripts/Manager/SoundManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundManager = exports.MusicType = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var GameMsg_1 = require("../SDK/GameMsg");
var ListenerManager_1 = require("./ListenerManager");
var UIManager_1 = require("./UIManager");
/** 音乐的资源名称枚举 */
var MusicType;
(function (MusicType) {
    /** 背景音乐 */
    MusicType["BGM_MUSIC"] = "BGM_MUSIC";
    /** 题干语音 */
    MusicType["TITLE_AUDIO"] = "TITLE_AUDIO";
    /** 音效 */
    MusicType["GAME_EFFECT"] = "GAME_EFFECT";
    /** 语音 */
    MusicType["GAME_AUDIO"] = "GAME_AUDIO";
})(MusicType = exports.MusicType || (exports.MusicType = {}));
var SoundManagerClass = /** @class */ (function () {
    function SoundManagerClass() {
        this.playing_sound = new Object();
        // 缓存背景音乐名字
        this.bgm = '';
        this.bgmIndex = -1;
        // 语音列表
        this._audioList = new Map();
        // 音效列表
        this._effectList = new Map();
        // 音效统一的引用计数
        this._referenceList = new Map();
        // 题干语音
        this._titleID = null;
        /** 存放音频资源的 Map */
        this._audioClipMap = new Map();
        this.MUSIC_BGM = 'bgm';
        this.AUDIO_TITLE = 'audio_sound';
    }
    SoundManagerClass.prototype.start = function () {
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.PLAYBGM, this.playBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.RESUMEBGM, this.resumeBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPBGM, this.stopBGM.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.PLAYAUDIOTITLE, this.playAudioTitle.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPAUDIOTITLE, this.stopAudioTitle.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALLAUDIO, this.stopAllAudio.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALLEFFECT, this.stopAllEffect.bind(this));
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOPALL, this.stopAll.bind(this));
    };
    SoundManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new SoundManagerClass();
        }
        return this._instance;
    };
    // 获取音频资源
    SoundManagerClass.prototype.getAudioClip = function (clipName) {
        if (!this._audioClipMap.has(clipName)) {
            cc.log("\u672A\u7F13\u5B58\u7684\u97F3\u9891\u8D44\u6E90: " + clipName);
            return null;
        }
        else {
            return this._audioClipMap.get(clipName);
        }
    };
    // 加载resource里的音效资源
    SoundManagerClass.prototype.preLoadResAudio = function (callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR;
        cc.resources.loadDir(path, cc.AudioClip, function (error, audioClips) {
            // 错误处理
            if (error) {
                cc.error(error);
                callback(false);
                return;
            }
            // 获取完毕后装入 Map
            audioClips.forEach(function (ele) {
                // cc.log('缓存完毕! ele.name == ' + ele.name);
                _this._audioClipMap.set(ele.name, ele);
                _this._referenceList.set(ele.name, 0);
            });
            // 执行回调返回进度
            callback(true);
        });
    };
    // 加载frameRes里的音效资源
    SoundManagerClass.prototype.preLoadFrameAudio = function (callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.FRAME_AUDIO_DIR;
        cc.assetManager.loadBundle('frameRes', function (err, bundle) {
            if (err) {
                cc.error(err);
                callback(false);
                return;
            }
            bundle.loadDir(path, cc.AudioClip, function (error, audioClips) {
                if (error) {
                    cc.error(error);
                    callback(false);
                    return;
                }
                audioClips.forEach(function (ele) {
                    // cc.log('缓存完毕! ele.name == ' + ele.name);
                    _this._audioClipMap.set(ele.name, ele);
                    _this._referenceList.set(ele.name, 0);
                });
                callback(true);
            });
        });
    };
    // 缓存所有音频资源
    SoundManagerClass.prototype.preLoadAllAudioClips = function (callback) {
        /** 加载代码，参数为 url，资源类型，进度回调，完成回调 */
        var isCompletedLoadResAudio = false;
        var isCompletedLoadFrameAudio = false;
        this.preLoadResAudio(function (isCompleted) {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadResAudio ');
            }
            isCompletedLoadResAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
        this.preLoadFrameAudio(function (isCompleted) {
            if (isCompleted) {
                cc.log('缓存完毕! preLoadFrameAudio ');
            }
            isCompletedLoadFrameAudio = true;
            if (isCompletedLoadResAudio && isCompletedLoadFrameAudio) {
                callback(true);
            }
        });
    };
    // 单独缓存某一个音频
    SoundManagerClass.prototype.preloadAudioClipName = function (clipName, callback) {
        var _this = this;
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + clipName;
        cc.log('preloadAudioClipName path == ' + path);
        cc.resources.load(path, cc.AudioClip, function (error, asset) {
            if (error) {
                cc.error(error);
                return;
            }
            var clip = asset;
            _this._audioClipMap.set(clipName, clip);
            _this._referenceList.set(clipName, 0);
            cc.log('缓存完毕!');
            callback();
        });
    };
    /**
     * 播放背景音乐
     * @param soundName 背景音乐文件名
     */
    SoundManagerClass.prototype.playBGM = function (soundName) {
        var _this = this;
        if (soundName === void 0) { soundName = ''; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (NetWork_1.NetWork.channel == 'blackboard' || Boolean(NetWork_1.NetWork.isSync)) {
            return;
        }
        if (soundName == '') {
            soundName = this.MUSIC_BGM;
        }
        this.bgm = soundName;
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + soundName;
        cc.resources.load(path, cc.AudioClip, function (err, asset) {
            if (err) {
                cc.error(err);
                return;
            }
            var clip = asset;
            _this.bgmIndex = cc.audioEngine.playMusic(clip, true);
        });
    };
    //重新开始播放背景音乐
    SoundManagerClass.prototype.resumeBGM = function () {
        cc.audioEngine.stopMusic();
        var path = FrameConstValue_1.FrameConstValue.GAME_AUDIO_DIR + this.bgm;
        cc.resources.load(path, cc.AudioClip, function (err, asset) {
            if (err) {
                cc.error(err);
                return;
            }
            var clip = asset;
            cc.audioEngine.playMusic(clip, true);
        });
    };
    // 重新开始播放背景音乐
    SoundManagerClass.prototype.stopBGM = function () {
        this.bgm = '';
        this.bgmIndex = -1;
        cc.audioEngine.stopMusic();
    };
    // 设置背景音音量
    SoundManagerClass.prototype.setMusicVolume = function (volume, tweenDur) {
        var _this = this;
        if (tweenDur === void 0) { tweenDur = 0; }
        if (this.bgmIndex != -1) {
            volume = cc.misc.clamp01(volume);
            if (tweenDur == 0) {
                cc.audioEngine.setVolume(this.bgmIndex, volume);
            }
            else {
                var obj = { v: cc.audioEngine.getVolume(this.bgmIndex) };
                cc.tween(obj)
                    .to(tweenDur, { v: volume }, {
                    progress: function (start, end, current, ratio) {
                        var v = start + (end - start) * ratio;
                        cc.audioEngine.setVolume(_this.bgmIndex, v);
                    },
                })
                    .start();
            }
        }
    };
    /**
     * 播放题干语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playAudioTitle = function (clipName, bLoop, bInterupt, bMutex, endCb) {
        if (bLoop === void 0) { bLoop = false; }
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (endCb === void 0) { endCb = null; }
        // if (clipName == '') {
        //     clipName = this.AUDIO_TITLE;
        // }
        this.playAudio(clipName, bLoop, bInterupt, bMutex, endCb, true);
    };
    // ting zhi
    SoundManagerClass.prototype.stopAudioTitle = function () {
        var _this = this;
        this._audioList.forEach(function (value, key) {
            // cc.log("this._audioList value == "+value)
            // cc.log("this._audioList key == "+key)
            if (null != _this._titleID && _this._titleID === value) {
                _this._audioList.delete(key);
                cc.audioEngine.stopEffect(value);
            }
        });
        this._titleID = null;
        // 题干语音播放完回调
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.COMPLETE_TRUMPET);
    };
    /**
     * 播放语音
     *
     * @param {string} clipName 语音clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他语音,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playAudio = function (clipName, bLoop, bInterupt, bMutex, onFinished, isTitleAudio) {
        var _this = this;
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (onFinished === void 0) { onFinished = null; }
        if (isTitleAudio === void 0) { isTitleAudio = false; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (!clipName)
            return;
        bInterupt && this.stopAllAudio();
        bMutex && this.stopAllEffect();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                exports.SoundManager.preloadAudioClipName(clipName, function () {
                    clip = this._audioClipMap.get(clipName);
                    this.playAudio(clip, bLoop, bInterupt, bMutex, onFinished, isTitleAudio);
                }.bind(this));
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, bLoop);
        // 赋值titleId
        if (isTitleAudio) {
            this._titleID = id;
            cc.log('this._titleID == ' + this._titleID);
        }
        this._audioList.set(clip.name, id);
        //播放引用计数加1
        var referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                _this.stopSoundByName(clip.name);
            }
            _this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinished && onFinished();
            }, 100);
        });
    };
    /**
     * 播放音效
     *
     * @param {string} clipName 音效clip文件
     * @param {boolean} bLoop 是否循环
     * @param {boolean} [bInterupt=true] 是否打断其他音效,默认true
     * @param {boolean} [bMutex=false] 是否互斥（指音效和语音）,默认false
     * @memberof SoundManagerClass
     */
    SoundManagerClass.prototype.playEffect = function (clipName, bLoop, bInterupt, bMutex, onFinished) {
        var _this = this;
        if (bInterupt === void 0) { bInterupt = true; }
        if (bMutex === void 0) { bMutex = false; }
        if (onFinished === void 0) { onFinished = null; }
        if (!UIManager_1.UIManager.isGameShowing) {
            cc.warn("\u4E0D\u8981\u5728GamePanel\u7684onLoad\u548Cstart\u91CC\u64AD\u653E\u97F3\u9891\uFF01");
            return;
        }
        if (!clipName)
            return;
        bInterupt && this.stopAllEffect();
        bMutex && this.stopAllAudio();
        var clip = null;
        if (typeof clipName === 'string') {
            clip = this.getAudioClip(clipName);
            if (clip == null) {
                exports.SoundManager.preloadAudioClipName(clipName, function () {
                    clip = this._audioClipMap.get(clipName);
                    this.playEffect(clip, bLoop, bInterupt, bMutex, onFinished);
                }.bind(this));
                return;
            }
        }
        else {
            clip = clipName;
        }
        var id = cc.audioEngine.playEffect(clip, bLoop);
        this._effectList.set(clip.name, id);
        //播放引用计数加1
        var referenceCount = this._referenceList.get(clip.name);
        this._referenceList.set(clip.name, referenceCount++);
        cc.audioEngine.setFinishCallback(id, function () {
            //引用计数为0删除资源
            var referenceCount = _this._referenceList.get(clip.name);
            if (referenceCount-- <= 0) {
                _this.stopSoundByName(clip.name);
            }
            _this._referenceList.set(clip.name, referenceCount < 0 ? 0 : referenceCount);
            setTimeout(function () {
                onFinished && onFinished();
            }, 100);
        });
    };
    // 设置音效大小
    SoundManagerClass.prototype.setEffectVolume = function (volume) {
        volume = cc.misc.clamp01(volume);
        this._audioList.forEach(function (value, key) {
            cc.audioEngine.setVolume(value, volume);
        });
    };
    // 停止语音
    SoundManagerClass.prototype.stopAllAudio = function () {
        var _this = this;
        this._audioList.forEach(function (value, key) {
            if (null != _this._titleID && _this._titleID === value) {
                // 题干语音播放完回调
                ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.COMPLETE_TRUMPET);
            }
            _this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._audioList = new Map();
        this._titleID = null;
    };
    // 停止音效
    SoundManagerClass.prototype.stopAllEffect = function () {
        var _this = this;
        this._effectList.forEach(function (value, key) {
            _this._referenceList.set(key, 0);
            cc.audioEngine.stopEffect(value);
        });
        this._effectList = new Map();
    };
    // 停止播放指定的音频通过名字
    SoundManagerClass.prototype.stopSoundByName = function (clipName) {
        this._referenceList.set(clipName, 0);
        var id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._audioList.delete(clipName);
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            cc.audioEngine.stop(id);
            this._effectList.delete(clipName);
        }
    };
    // 停止正在播放的所有音频
    SoundManagerClass.prototype.stopAll = function () {
        this.stopAllAudio();
        this.stopAllEffect();
        cc.audioEngine.stopAll();
    };
    // 某个音效是否正在播放
    SoundManagerClass.prototype.isPlaying = function (clipName) {
        var id = this._audioList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        id = this._effectList.get(clipName);
        if (id != null && id != -1) {
            return true;
        }
        return false;
    };
    SoundManagerClass._instance = null;
    return SoundManagerClass;
}());
exports.SoundManager = SoundManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFNvdW5kTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQscURBQW9EO0FBQ3BELDJDQUEwQztBQUMxQywwQ0FBcUM7QUFDckMscURBQW9EO0FBQ3BELHlDQUF3QztBQUV4QyxnQkFBZ0I7QUFDaEIsSUFBWSxTQVNYO0FBVEQsV0FBWSxTQUFTO0lBQ2pCLFdBQVc7SUFDWCxvQ0FBdUIsQ0FBQTtJQUN2QixXQUFXO0lBQ1gsd0NBQTJCLENBQUE7SUFDM0IsU0FBUztJQUNULHdDQUEyQixDQUFBO0lBQzNCLFNBQVM7SUFDVCxzQ0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBVFcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFTcEI7QUFFRDtJQUFBO1FBRVksa0JBQWEsR0FBVyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQzdDLFdBQVc7UUFDSCxRQUFHLEdBQVcsRUFBRSxDQUFDO1FBQ2pCLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQztRQUM5QixPQUFPO1FBQ0MsZUFBVSxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3BELE9BQU87UUFDQyxnQkFBVyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3JELFlBQVk7UUFDSixtQkFBYyxHQUF3QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hELE9BQU87UUFDQyxhQUFRLEdBQVcsSUFBSSxDQUFDO1FBQ2hDLGtCQUFrQjtRQUNYLGtCQUFhLEdBQThCLElBQUksR0FBRyxFQUFFLENBQUM7UUFFckQsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixnQkFBVyxHQUFHLGFBQWEsQ0FBQztJQTJhdkMsQ0FBQztJQXphRyxpQ0FBSyxHQUFMO1FBQ0ksaUJBQU8sQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMs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LElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDeEIsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELEVBQUUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNwQyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBM2JjLDJCQUFTLEdBQXNCLElBQUksQ0FBQztJQTRidkQsd0JBQUM7Q0E3YkQsQUE2YkMsSUFBQTtBQUVZLFFBQUEsWUFBWSxHQUFHLGlCQUFpQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVDb25zdFZhbHVlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZUNvbnN0VmFsdWUnO1xuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgTmV0V29yayB9IGZyb20gJy4uL0h0dHAvTmV0V29yayc7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi9TREsvR2FtZU1zZyc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tICcuL1VJTWFuYWdlcic7XG5cbi8qKiDpn7PkuZDnmoTotYTmupDlkI3np7DmnprkuL4gKi9cbmV4cG9ydCBlbnVtIE11c2ljVHlwZSB7XG4gICAgLyoqIOiDjOaZr+mfs+S5kCAqL1xuICAgIEJHTV9NVVNJQyA9ICdCR01fTVVTSUMnLFxuICAgIC8qKiDpopjlubLor63pn7MgKi9cbiAgICBUSVRMRV9BVURJTyA9ICdUSVRMRV9BVURJTycsXG4gICAgLyoqIOmfs+aViCAqL1xuICAgIEdBTUVfRUZGRUNUID0gJ0dBTUVfRUZGRUNUJyxcbiAgICAvKiog6K+t6Z+zICovXG4gICAgR0FNRV9BVURJTyA9ICdHQU1FX0FVRElPJyxcbn1cblxuY2xhc3MgU291bmRNYW5hZ2VyQ2xhc3Mge1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogU291bmRNYW5hZ2VyQ2xhc3MgPSBudWxsO1xuICAgIHByaXZhdGUgcGxheWluZ19zb3VuZDogT2JqZWN0ID0gbmV3IE9iamVjdCgpO1xuICAgIC8vIOe8k+WtmOiDjOaZr+mfs+S5kOWQjeWtl1xuICAgIHByaXZhdGUgYmdtOiBzdHJpbmcgPSAnJztcbiAgICBwcml2YXRlIGJnbUluZGV4OiBudW1iZXIgPSAtMTtcbiAgICAvLyDor63pn7PliJfooahcbiAgICBwcml2YXRlIF9hdWRpb0xpc3Q6IE1hcDxzdHJpbmcsIG51bWJlcj4gPSBuZXcgTWFwKCk7XG4gICAgLy8g6Z+z5pWI5YiX6KGoXG4gICAgcHJpdmF0ZSBfZWZmZWN0TGlzdDogTWFwPHN0cmluZywgbnVtYmVyPiA9IG5ldyBNYXAoKTtcbiAgICAvLyDpn7PmlYjnu5/kuIDnmoTlvJXnlKjorqHmlbBcbiAgICBwcml2YXRlIF9yZWZlcmVuY2VMaXN0OiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xuICAgIC8vIOmimOW5suivremfs1xuICAgIHByaXZhdGUgX3RpdGxlSUQ6IG51bWJlciA9IG51bGw7XG4gICAgLyoqIOWtmOaUvumfs+mikei1hOa6kOeahCBNYXAgKi9cbiAgICBwdWJsaWMgX2F1ZGlvQ2xpcE1hcDogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcblxuICAgIHB1YmxpYyBNVVNJQ19CR00gPSAnYmdtJztcbiAgICBwdWJsaWMgQVVESU9fVElUTEUgPSAnYXVkaW9fc291bmQnO1xuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlBMQVlCR00sIHRoaXMucGxheUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuUkVTVU1FQkdNLCB0aGlzLnJlc3VtZUJHTS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEJHTSwgdGhpcy5zdG9wQkdNLmJpbmQodGhpcykpO1xuICAgICAgICBHYW1lTXNnLmFkZEV2ZW50KEZyYW1lTXNnVHlwZS5QTEFZQVVESU9USVRMRSwgdGhpcy5wbGF5QXVkaW9UaXRsZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEFVRElPVElUTEUsIHRoaXMuc3RvcEF1ZGlvVGl0bGUuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1BBTExBVURJTywgdGhpcy5zdG9wQWxsQXVkaW8uYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1BBTExFRkZFQ1QsIHRoaXMuc3RvcEFsbEVmZmVjdC5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5hZGRFdmVudChGcmFtZU1zZ1R5cGUuU1RPUEFMTCwgdGhpcy5zdG9wQWxsLmJpbmQodGhpcykpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogU291bmRNYW5hZ2VyQ2xhc3Mge1xuICAgICAgICBpZiAobnVsbCA9PT0gdGhpcy5faW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFNvdW5kTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIOiOt+WPlumfs+mikei1hOa6kFxuICAgIHB1YmxpYyBnZXRBdWRpb0NsaXAoY2xpcE5hbWU6IHN0cmluZyk6IGNjLkF1ZGlvQ2xpcCB7XG4gICAgICAgIGlmICghdGhpcy5fYXVkaW9DbGlwTWFwLmhhcyhjbGlwTmFtZSkpIHtcbiAgICAgICAgICAgIGNjLmxvZyhg5pyq57yT5a2Y55qE6Z+z6aKR6LWE5rqQOiAke2NsaXBOYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDliqDovb1yZXNvdXJjZemHjOeahOmfs+aViOi1hOa6kFxuICAgIHB1YmxpYyBwcmVMb2FkUmVzQXVkaW8oY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5HQU1FX0FVRElPX0RJUjtcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWREaXIocGF0aCwgY2MuQXVkaW9DbGlwLCAoZXJyb3IsIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICAvLyDplJnor6/lpITnkIZcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6I635Y+W5a6M5q+V5ZCO6KOF5YWlIE1hcFxuICAgICAgICAgICAgYXVkaW9DbGlwcy5mb3JFYWNoKChlbGUpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coJ+e8k+WtmOWujOavlSEgZWxlLm5hbWUgPT0gJyArIGVsZS5uYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGVsZS5uYW1lLCBlbGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGVsZS5uYW1lLCAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8g5omn6KGM5Zue6LCD6L+U5Zue6L+b5bqmXG4gICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g5Yqg6L29ZnJhbWVSZXPph4znmoTpn7PmlYjotYTmupBcbiAgICBwdWJsaWMgcHJlTG9hZEZyYW1lQXVkaW8oY2FsbGJhY2s6IChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5GUkFNRV9BVURJT19ESVI7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkQnVuZGxlKCdmcmFtZVJlcycsIChlcnI6IEVycm9yLCBidW5kbGU6IGNjLkFzc2V0TWFuYWdlci5CdW5kbGUpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBidW5kbGUubG9hZERpcihwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvcjogRXJyb3IsIGF1ZGlvQ2xpcHM6IGNjLkF1ZGlvQ2xpcFtdKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGF1ZGlvQ2xpcHMuZm9yRWFjaCgoZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZygn57yT5a2Y5a6M5q+VISBlbGUubmFtZSA9PSAnICsgZWxlLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGVsZS5uYW1lLCBlbGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VMaXN0LnNldChlbGUubmFtZSwgMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8g57yT5a2Y5omA5pyJ6Z+z6aKR6LWE5rqQXG4gICAgcHVibGljIHByZUxvYWRBbGxBdWRpb0NsaXBzKGNhbGxiYWNrOiAoaXNDb21wbGV0ZWQ6IGJvb2xlYW4pID0+IHZvaWQpIHtcbiAgICAgICAgLyoqIOWKoOi9veS7o+egge+8jOWPguaVsOS4uiB1cmzvvIzotYTmupDnsbvlnovvvIzov5vluqblm57osIPvvIzlrozmiJDlm57osIMgKi9cbiAgICAgICAgbGV0IGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gZmFsc2U7XG4gICAgICAgIGxldCBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvID0gZmFsc2U7XG4gICAgICAgIHRoaXMucHJlTG9hZFJlc0F1ZGlvKChpc0NvbXBsZXRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgICAgICAgaWYgKGlzQ29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgY2MubG9nKCfnvJPlrZjlrozmr5UhIHByZUxvYWRSZXNBdWRpbyAnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzQ29tcGxldGVkTG9hZFJlc0F1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyAmJiBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJlTG9hZEZyYW1lQXVkaW8oKGlzQ29tcGxldGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXNDb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICBjYy5sb2coJ+e8k+WtmOWujOavlSEgcHJlTG9hZEZyYW1lQXVkaW8gJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlZExvYWRSZXNBdWRpbyAmJiBpc0NvbXBsZXRlZExvYWRGcmFtZUF1ZGlvKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIOWNleeLrOe8k+WtmOafkOS4gOS4qumfs+mikVxuICAgIHB1YmxpYyBwcmVsb2FkQXVkaW9DbGlwTmFtZShjbGlwTmFtZTogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xuICAgICAgICBsZXQgcGF0aCA9IEZyYW1lQ29uc3RWYWx1ZS5HQU1FX0FVRElPX0RJUiArIGNsaXBOYW1lO1xuICAgICAgICBjYy5sb2coJ3ByZWxvYWRBdWRpb0NsaXBOYW1lIHBhdGggPT0gJyArIHBhdGgpO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnJvciwgYXNzZXQ6IGNjLkFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGNsaXAgPSBhc3NldCBhcyBjYy5BdWRpb0NsaXA7XG4gICAgICAgICAgICB0aGlzLl9hdWRpb0NsaXBNYXAuc2V0KGNsaXBOYW1lLCBjbGlwKTtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGNsaXBOYW1lLCAwKTtcbiAgICAgICAgICAgIGNjLmxvZygn57yT5a2Y5a6M5q+VIScpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgICogQHBhcmFtIHNvdW5kTmFtZSDog4zmma/pn7PkuZDmlofku7blkI1cbiAgICAgKi9cbiAgICBwdWJsaWMgcGxheUJHTShzb3VuZE5hbWU6IHN0cmluZyA9ICcnKSB7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHtcbiAgICAgICAgICAgIGNjLndhcm4oYOS4jeimgeWcqEdhbWVQYW5lbOeahG9uTG9hZOWSjHN0YXJ06YeM5pKt5pS+6Z+z6aKR77yBYCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoTmV0V29yay5jaGFubmVsID09ICdibGFja2JvYXJkJyB8fCBCb29sZWFuKE5ldFdvcmsuaXNTeW5jKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VuZE5hbWUgPT0gJycpIHtcbiAgICAgICAgICAgIHNvdW5kTmFtZSA9IHRoaXMuTVVTSUNfQkdNO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iZ20gPSBzb3VuZE5hbWU7XG4gICAgICAgIHRoaXMuYmdtSW5kZXggPSAtMTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGxldCBwYXRoID0gRnJhbWVDb25zdFZhbHVlLkdBTUVfQVVESU9fRElSICsgc291bmROYW1lO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChwYXRoLCBjYy5BdWRpb0NsaXAsIChlcnIsIGFzc2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2MuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgY2xpcCA9IGFzc2V0IGFzIGNjLkF1ZGlvQ2xpcDtcbiAgICAgICAgICAgIHRoaXMuYmdtSW5kZXggPSBjYy5hdWRpb0VuZ2luZS5wbGF5TXVzaWMoY2xpcCwgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8v6YeN5paw5byA5aeL5pKt5pS+6IOM5pmv6Z+z5LmQXG4gICAgcHVibGljIHJlc3VtZUJHTSgpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcE11c2ljKCk7XG4gICAgICAgIGxldCBwYXRoID0gRnJhbWVDb25zdFZhbHVlLkdBTUVfQVVESU9fRElSICsgdGhpcy5iZ207XG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKHBhdGgsIGNjLkF1ZGlvQ2xpcCwgKGVyciwgYXNzZXQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy5lcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjbGlwID0gYXNzZXQgYXMgY2MuQXVkaW9DbGlwO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDph43mlrDlvIDlp4vmkq3mlL7og4zmma/pn7PkuZBcbiAgICBwdWJsaWMgc3RvcEJHTSgpIHtcbiAgICAgICAgdGhpcy5iZ20gPSAnJztcbiAgICAgICAgdGhpcy5iZ21JbmRleCA9IC0xO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcbiAgICB9XG5cbiAgICAvLyDorr7nva7og4zmma/pn7Ppn7Pph49cbiAgICBwdWJsaWMgc2V0TXVzaWNWb2x1bWUodm9sdW1lOiBudW1iZXIsIHR3ZWVuRHVyID0gMCkge1xuICAgICAgICBpZiAodGhpcy5iZ21JbmRleCAhPSAtMSkge1xuICAgICAgICAgICAgdm9sdW1lID0gY2MubWlzYy5jbGFtcDAxKHZvbHVtZSk7XG4gICAgICAgICAgICBpZiAodHdlZW5EdXIgPT0gMCkge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUluZGV4LCB2b2x1bWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0geyB2OiBjYy5hdWRpb0VuZ2luZS5nZXRWb2x1bWUodGhpcy5iZ21JbmRleCkgfTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihvYmopXG4gICAgICAgICAgICAgICAgICAgIC50byhcbiAgICAgICAgICAgICAgICAgICAgICAgIHR3ZWVuRHVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2OiB2b2x1bWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9ncmVzczogKHN0YXJ0LCBlbmQsIGN1cnJlbnQsIHJhdGlvKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2ID0gc3RhcnQgKyAoZW5kIC0gc3RhcnQpICogcmF0aW87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZSh0aGlzLmJnbUluZGV4LCB2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOaSreaUvumimOW5suivremfs1xuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNsaXBOYW1lIOivremfs2NsaXDmlofku7ZcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJMb29wIOaYr+WQpuW+queOr1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JJbnRlcnVwdD10cnVlXSDmmK/lkKbmiZPmlq3lhbbku5bor63pn7Ms6buY6K6kdHJ1ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2JNdXRleD1mYWxzZV0g5piv5ZCm5LqS5pal77yI5oyH6Z+z5pWI5ZKM6K+t6Z+z77yJLOm7mOiupGZhbHNlXG4gICAgICogQG1lbWJlcm9mIFNvdW5kTWFuYWdlckNsYXNzXG4gICAgICovXG4gICAgcHVibGljIHBsYXlBdWRpb1RpdGxlKFxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxuICAgICAgICBiTG9vcDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBiSW50ZXJ1cHQ6IGJvb2xlYW4gPSB0cnVlLFxuICAgICAgICBiTXV0ZXg6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgZW5kQ2I6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICApIHtcbiAgICAgICAgLy8gaWYgKGNsaXBOYW1lID09ICcnKSB7XG4gICAgICAgIC8vICAgICBjbGlwTmFtZSA9IHRoaXMuQVVESU9fVElUTEU7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5wbGF5QXVkaW8oY2xpcE5hbWUsIGJMb29wLCBiSW50ZXJ1cHQsIGJNdXRleCwgZW5kQ2IsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIHRpbmcgemhpXG4gICAgcHVibGljIHN0b3BBdWRpb1RpdGxlKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwidGhpcy5fYXVkaW9MaXN0IHZhbHVlID09IFwiK3ZhbHVlKVxuICAgICAgICAgICAgLy8gY2MubG9nKFwidGhpcy5fYXVkaW9MaXN0IGtleSA9PSBcIitrZXkpXG4gICAgICAgICAgICBpZiAobnVsbCAhPSB0aGlzLl90aXRsZUlEICYmIHRoaXMuX3RpdGxlSUQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYXVkaW9MaXN0LmRlbGV0ZShrZXkpO1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BFZmZlY3QodmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fdGl0bGVJRCA9IG51bGw7XG4gICAgICAgIC8vIOmimOW5suivremfs+aSreaUvuWujOWbnuiwg1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkNPTVBMRVRFX1RSVU1QRVQpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiDmkq3mlL7or63pn7NcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjbGlwTmFtZSDor63pn7NjbGlw5paH5Lu2XG4gICAgICogQHBhcmFtIHtib29sZWFufSBiTG9vcCDmmK/lkKblvqrnjq9cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiSW50ZXJ1cHQ9dHJ1ZV0g5piv5ZCm5omT5pat5YW25LuW6K+t6Z+zLOm7mOiupHRydWVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtiTXV0ZXg9ZmFsc2VdIOaYr+WQpuS6kuaWpe+8iOaMh+mfs+aViOWSjOivremfs++8iSzpu5jorqRmYWxzZVxuICAgICAqIEBtZW1iZXJvZiBTb3VuZE1hbmFnZXJDbGFzc1xuICAgICAqL1xuXG4gICAgcHVibGljIHBsYXlBdWRpbyhcbiAgICAgICAgY2xpcE5hbWU6IHN0cmluZyB8IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgYkxvb3A6IGJvb2xlYW4sXG4gICAgICAgIGJJbnRlcnVwdDogYm9vbGVhbiA9IHRydWUsXG4gICAgICAgIGJNdXRleDogYm9vbGVhbiA9IGZhbHNlLFxuICAgICAgICBvbkZpbmlzaGVkOiBGdW5jdGlvbiA9IG51bGwsXG4gICAgICAgIGlzVGl0bGVBdWRpbzogYm9vbGVhbiA9IGZhbHNlLFxuICAgICkge1xuICAgICAgICBpZiAoIVVJTWFuYWdlci5pc0dhbWVTaG93aW5nKSB7XG4gICAgICAgICAgICBjYy53YXJuKGDkuI3opoHlnKhHYW1lUGFuZWznmoRvbkxvYWTlkoxzdGFydOmHjOaSreaUvumfs+mike+8gWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbGlwTmFtZSkgcmV0dXJuO1xuXG4gICAgICAgIGJJbnRlcnVwdCAmJiB0aGlzLnN0b3BBbGxBdWRpbygpO1xuICAgICAgICBiTXV0ZXggJiYgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG5cbiAgICAgICAgbGV0IGNsaXAgPSBudWxsO1xuXG4gICAgICAgIGlmICh0eXBlb2YgY2xpcE5hbWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBjbGlwID0gdGhpcy5nZXRBdWRpb0NsaXAoY2xpcE5hbWUpO1xuICAgICAgICAgICAgaWYgKGNsaXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wcmVsb2FkQXVkaW9DbGlwTmFtZShcbiAgICAgICAgICAgICAgICAgICAgY2xpcE5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaXAgPSB0aGlzLl9hdWRpb0NsaXBNYXAuZ2V0KGNsaXBOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUF1ZGlvKGNsaXAsIGJMb29wLCBiSW50ZXJ1cHQsIGJNdXRleCwgb25GaW5pc2hlZCwgaXNUaXRsZUF1ZGlvKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBiTG9vcCk7XG4gICAgICAgIC8vIOi1i+WAvHRpdGxlSWRcbiAgICAgICAgaWYgKGlzVGl0bGVBdWRpbykge1xuICAgICAgICAgICAgdGhpcy5fdGl0bGVJRCA9IGlkO1xuICAgICAgICAgICAgY2MubG9nKCd0aGlzLl90aXRsZUlEID09ICcgKyB0aGlzLl90aXRsZUlEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hdWRpb0xpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xuICAgICAgICAvL+aSreaUvuW8leeUqOiuoeaVsOWKoDFcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCsrKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCAmJiBvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5pKt5pS+6Z+z5pWIXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpcE5hbWUg6Z+z5pWIY2xpcOaWh+S7tlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYkxvb3Ag5piv5ZCm5b6q546vXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYkludGVydXB0PXRydWVdIOaYr+WQpuaJk+aWreWFtuS7lumfs+aViCzpu5jorqR0cnVlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbYk11dGV4PWZhbHNlXSDmmK/lkKbkupLmlqXvvIjmjIfpn7PmlYjlkozor63pn7PvvIks6buY6K6kZmFsc2VcbiAgICAgKiBAbWVtYmVyb2YgU291bmRNYW5hZ2VyQ2xhc3NcbiAgICAgKi9cblxuICAgIHB1YmxpYyBwbGF5RWZmZWN0KFxuICAgICAgICBjbGlwTmFtZTogc3RyaW5nIHwgY2MuQXVkaW9DbGlwLFxuICAgICAgICBiTG9vcDogYm9vbGVhbixcbiAgICAgICAgYkludGVydXB0OiBib29sZWFuID0gdHJ1ZSxcbiAgICAgICAgYk11dGV4OiBib29sZWFuID0gZmFsc2UsXG4gICAgICAgIG9uRmluaXNoZWQ6IEZ1bmN0aW9uID0gbnVsbCxcbiAgICApIHtcbiAgICAgICAgaWYgKCFVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykge1xuICAgICAgICAgICAgY2Mud2Fybihg5LiN6KaB5ZyoR2FtZVBhbmVs55qEb25Mb2Fk5ZKMc3RhcnTph4zmkq3mlL7pn7PpopHvvIFgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2xpcE5hbWUpIHJldHVybjtcblxuICAgICAgICBiSW50ZXJ1cHQgJiYgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICAgIGJNdXRleCAmJiB0aGlzLnN0b3BBbGxBdWRpbygpO1xuXG4gICAgICAgIGxldCBjbGlwID0gbnVsbDtcblxuICAgICAgICBpZiAodHlwZW9mIGNsaXBOYW1lID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgY2xpcCA9IHRoaXMuZ2V0QXVkaW9DbGlwKGNsaXBOYW1lKTtcbiAgICAgICAgICAgIGlmIChjbGlwID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucHJlbG9hZEF1ZGlvQ2xpcE5hbWUoXG4gICAgICAgICAgICAgICAgICAgIGNsaXBOYW1lLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGlwID0gdGhpcy5fYXVkaW9DbGlwTWFwLmdldChjbGlwTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlFZmZlY3QoY2xpcCwgYkxvb3AsIGJJbnRlcnVwdCwgYk11dGV4LCBvbkZpbmlzaGVkKTtcbiAgICAgICAgICAgICAgICAgICAgfS5iaW5kKHRoaXMpLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2xpcCA9IGNsaXBOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlkID0gY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdChjbGlwLCBiTG9vcCk7XG4gICAgICAgIHRoaXMuX2VmZmVjdExpc3Quc2V0KGNsaXAubmFtZSwgaWQpO1xuICAgICAgICAvL+aSreaUvuW8leeUqOiuoeaVsOWKoDFcbiAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCsrKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0RmluaXNoQ2FsbGJhY2soaWQsICgpID0+IHtcbiAgICAgICAgICAgIC8v5byV55So6K6h5pWw5Li6MOWIoOmZpOi1hOa6kFxuICAgICAgICAgICAgbGV0IHJlZmVyZW5jZUNvdW50ID0gdGhpcy5fcmVmZXJlbmNlTGlzdC5nZXQoY2xpcC5uYW1lKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2VDb3VudC0tIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3BTb3VuZEJ5TmFtZShjbGlwLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fcmVmZXJlbmNlTGlzdC5zZXQoY2xpcC5uYW1lLCByZWZlcmVuY2VDb3VudCA8IDAgPyAwIDogcmVmZXJlbmNlQ291bnQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgb25GaW5pc2hlZCAmJiBvbkZpbmlzaGVkKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDorr7nva7pn7PmlYjlpKflsI9cbiAgICBwdWJsaWMgc2V0RWZmZWN0Vm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHZvbHVtZSA9IGNjLm1pc2MuY2xhbXAwMSh2b2x1bWUpO1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc2V0Vm9sdW1lKHZhbHVlLCB2b2x1bWUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyDlgZzmraLor63pn7NcbiAgICBwdWJsaWMgc3RvcEFsbEF1ZGlvKCkge1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKG51bGwgIT0gdGhpcy5fdGl0bGVJRCAmJiB0aGlzLl90aXRsZUlEID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIC8vIOmimOW5suivremfs+aSreaUvuWujOWbnuiwg1xuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuQ09NUExFVEVfVFJVTVBFVCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9yZWZlcmVuY2VMaXN0LnNldChrZXksIDApO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEVmZmVjdCh2YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hdWRpb0xpc3QgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX3RpdGxlSUQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIOWBnOatoumfs+aViFxuICAgIHB1YmxpYyBzdG9wQWxsRWZmZWN0KCkge1xuICAgICAgICB0aGlzLl9lZmZlY3RMaXN0LmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGtleSwgMCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KHZhbHVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2VmZmVjdExpc3QgPSBuZXcgTWFwKCk7XG4gICAgfVxuXG4gICAgLy8g5YGc5q2i5pKt5pS+5oyH5a6a55qE6Z+z6aKR6YCa6L+H5ZCN5a2XXG4gICAgcHVibGljIHN0b3BTb3VuZEJ5TmFtZShjbGlwTmFtZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3JlZmVyZW5jZUxpc3Quc2V0KGNsaXBOYW1lLCAwKTtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkICE9IC0xKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKGlkKTtcbiAgICAgICAgICAgIHRoaXMuX2F1ZGlvTGlzdC5kZWxldGUoY2xpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICAgIGlkID0gdGhpcy5fZWZmZWN0TGlzdC5nZXQoY2xpcE5hbWUpO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCAmJiBpZCAhPSAtMSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcChpZCk7XG4gICAgICAgICAgICB0aGlzLl9lZmZlY3RMaXN0LmRlbGV0ZShjbGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyDlgZzmraLmraPlnKjmkq3mlL7nmoTmiYDmnInpn7PpopFcbiAgICBwdWJsaWMgc3RvcEFsbCgpIHtcbiAgICAgICAgdGhpcy5zdG9wQWxsQXVkaW8oKTtcbiAgICAgICAgdGhpcy5zdG9wQWxsRWZmZWN0KCk7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3BBbGwoKTtcbiAgICB9XG5cbiAgICAvLyDmn5DkuKrpn7PmlYjmmK/lkKbmraPlnKjmkq3mlL5cbiAgICBwdWJsaWMgaXNQbGF5aW5nKGNsaXBOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgICAgbGV0IGlkID0gdGhpcy5fYXVkaW9MaXN0LmdldChjbGlwTmFtZSk7XG4gICAgICAgIGlmIChpZCAhPSBudWxsICYmIGlkICE9IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZCA9IHRoaXMuX2VmZmVjdExpc3QuZ2V0KGNsaXBOYW1lKTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwgJiYgaWQgIT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBTb3VuZE1hbmFnZXIgPSBTb3VuZE1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/ReportManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c1c64g+oUJINqZmXJU6GCDp', 'ReportManager');
// frame/scripts/Manager/ReportManager.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportData = exports.ExtraData = exports.ExtraGameOverData = exports.GameOverData = exports.ExtraLevelData = exports.LevelData = exports.AnswerResult = exports.ReportManager = void 0;
var ConstValue_1 = require("../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../game/scripts/Manager/EditorManager");
var GameMsg_1 = require("../SDK/GameMsg");
/**
 * 作答数据管理类
 */
var ReportManagerClass = /** @class */ (function () {
    function ReportManagerClass() {
        /** 星级标准 */
        this._startLevelConfig = [80, 50, 0];
        /** ---------------------------必需参数--------------------------- */
        this._type = 'txt';
        this._result = [];
        // public _gameOver: GameOverData = null;
        /** 第几次作答 */
        this._playIndex = 0;
        /** ---------------------------辅助参数--------------------------- */
        /** 每关开始时间 */
        this._levelStartTime = 0;
        /** 每关作答耗时 */
        this._coastTimeArr = [];
        /** 每关作答次数 */
        this._tryCounts = [];
        /** 实际作答正确次数 */
        this._correctCounts = [];
        /** 每关作答状态 */
        this._AnswerResults = [];
        /** 总关卡数目 */
        this._levelCount = 0;
        /** 当前关卡id  从0开始*/
        this._curLevelId = 0;
        /** 实际作答正确次数 */
        // public _correctCount: number = 0;
        /** 是否全部关卡通关 */
        this.isAllOver = false;
        /** 是否整体未操作 */
        // public _isUndo: boolean = true;
        /**
         * 是否 当前步骤/关卡 未操作，
         * 只要用户有操作就修改此值
         * */
        // public _isCurLevelUndo: boolean = true;
        /** 是否已经上报过game_over */
        this._isReportedGameOver = false;
        /** 需要判断正误的总步数 */
        this._stepCount = 0;
    }
    ReportManagerClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new ReportManagerClass();
        }
        return this._instance;
    };
    /** 添加 关/步骤 时间 */
    ReportManagerClass.prototype.addCoastTime = function (tm) {
        var time = tm - this._levelStartTime;
        time = Math.ceil(time / 1000) * 1000; //时间取整
        this._coastTimeArr[this._curLevelId] = time;
    };
    /** 获取总耗时 */
    ReportManagerClass.prototype.getCoastTimes = function () {
        return this._coastTimeArr;
    };
    ReportManagerClass.prototype.setCoastTimes = function (arr) {
        this._coastTimeArr = arr;
    };
    /** 获取总次数 */
    ReportManagerClass.prototype.getTryCounts = function () {
        return this._tryCounts;
    };
    ReportManagerClass.prototype.setTryCounts = function (arr) {
        this._tryCounts = arr;
    };
    ReportManagerClass.prototype.getCorrectCounts = function () {
        return this._correctCounts;
    };
    ReportManagerClass.prototype.setCorrectCounts = function (arr) {
        this._correctCounts = arr;
    };
    /** 获取总次数 */
    ReportManagerClass.prototype.getAnswerResults = function () {
        return this._AnswerResults;
    };
    ReportManagerClass.prototype.setAnswerResults = function (arr) {
        this._AnswerResults = arr;
    };
    ReportManagerClass.prototype.setAnswerResultByLevel = function (level, answer) {
        this._AnswerResults[level] = answer;
    };
    /** 添加 关/步骤 次数 */
    ReportManagerClass.prototype.addTryCount = function (bCorrect) {
        if (this._tryCounts[this._curLevelId]) {
            this._tryCounts[this._curLevelId] += 1;
        }
        else {
            this._tryCounts[this._curLevelId] = 1;
        }
        if (void 0 === this._correctCounts[this._curLevelId]) {
            this._correctCounts[this._curLevelId] = 0;
        }
        if (bCorrect) {
            this._correctCounts[this._curLevelId] += 1;
        }
    };
    /**
     * 初始化要上报的数据
     *
     * @param {number} levelCount 关卡总数
     */
    ReportManagerClass.prototype.initReportData = function (levelCount) {
        this._playIndex = 1;
        this._curLevelId = 0;
        this.isAllOver = false;
        this._isReportedGameOver = false;
        this._levelCount = levelCount;
        this._result = [];
        for (var i = 0; i < this._levelCount; i++) {
            var levelInfo = this._levelCount > 1 ? ConstValue_1.ConstValue.GameName + "_\u7B2C" + (i + 1) + "\u5173" : ConstValue_1.ConstValue.GameName;
            var _levelData = new ExtraLevelData();
            _levelData.id = i + 1;
            _levelData.question_info = levelInfo;
            this._result.push(_levelData);
        }
        this._levelStartTime = Date.now();
        this.setTryCounts([]);
        this.setCorrectCounts([]);
        this.setCoastTimes([]);
        this.setAnswerResults([]);
        if (EditorManager_1.EditorManager['getStepCount']) {
            this._stepCount = EditorManager_1.EditorManager['getStepCount']();
        }
        else {
            this._stepCount = levelCount;
        }
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    /**
     * 通关之后的重玩
     *  只有外层index自增   其余数据恢复初始状态
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.replayGame = function () {
        this._result = [];
        ++this._playIndex;
        this.isAllOver = false;
        this._isReportedGameOver = false;
        this._curLevelId = 0;
        for (var i = 0; i < this._levelCount; i++) {
            var levelInfo = this._levelCount > 1 ? ConstValue_1.ConstValue.GameName + "_\u7B2C" + (i + 1) + "\u5173" : ConstValue_1.ConstValue.GameName;
            var _levelData = new ExtraLevelData();
            _levelData.id = i + 1;
            _levelData.question_info = levelInfo;
            this._result.push(_levelData);
        }
        this._levelStartTime = Date.now();
        this.setTryCounts([]);
        this.setCorrectCounts([]);
        this.setCoastTimes([]);
        this.setAnswerResults([]);
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    // public setFirstTouch() {
    //     this._isCurLevelUndo = false;
    //     this._isUndo = false;
    // }
    /**
     * 更新关卡作答数据
     *
     * @param {boolean} bCorrect 是否作答正确
     * @param {boolean} bCurLevelFinish 当前关卡是否已完成 用于按步骤上报时状态设置为half，默认为true
     */
    ReportManagerClass.prototype.reportLevelResult = function (bCorrect, bCurLevelFinish) {
        if (bCurLevelFinish === void 0) { bCurLevelFinish = true; }
        if (void 0 === this._result[this._curLevelId])
            return;
        var curTime = Date.now();
        this.addCoastTime(curTime);
        this.addTryCount(bCorrect);
        var answerRes = AnswerResult.NoAnswer;
        if (bCorrect) {
            answerRes = bCurLevelFinish ? AnswerResult.AnswerRight : AnswerResult.AnswerHalf;
        }
        else {
            answerRes = AnswerResult.AnswerError;
        }
        this.setAnswerResultByLevel(this._curLevelId, answerRes);
        var _reportData = this.getReportData();
        _reportData.gameOver = null;
        console.log(_reportData);
        GameMsg_1.default.answerSyncSend(_reportData);
        if (bCurLevelFinish) {
            ++this._curLevelId;
            this._levelStartTime = Date.now();
            if (this._curLevelId === this._levelCount) {
                this.isAllOver = true;
                this.reportGameOver();
            }
            else {
                GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
            }
        }
    };
    /**
     * 作答结束/端上收题 数据上报
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.reportGameOver = function () {
        if (this._isReportedGameOver) {
            return;
        }
        var _reporGameOvertData = this.getReportData();
        console.log(_reporGameOvertData);
        GameMsg_1.default.gameOver(_reporGameOvertData);
        GameMsg_1.default.gameStatisticData(_reporGameOvertData.ext);
        /** 上报game_over数据之后修改状态 */
        this._isReportedGameOver = true;
    };
    /**
     * 获取关卡数据
     */
    ReportManagerClass.prototype.getResultData = function (isExtra) {
        for (var i = 0; i < this._result.length; ++i) {
            var levelData = this._result[i];
            var levelIndex = levelData.id - 1;
            var answerResult = this.getAnswerResults()[levelIndex] || AnswerResult.NoAnswer;
            var answerNum = this.getTryCounts()[levelIndex] || 0;
            var answerCorrect = this.getCorrectCounts()[levelIndex] || 0;
            var answerWrong = answerNum - answerCorrect;
            var answerTime = Math.ceil((this.getCoastTimes()[levelIndex] || 0) / 1000);
            levelData.answer_res = answerResult;
            levelData.answer_num = answerNum;
            levelData.correct_num = answerCorrect;
            levelData.wrong_num = answerWrong;
            levelData.answer_time = answerTime;
        }
        if (isExtra) {
            return this._result;
        }
        else {
            var result_1 = [];
            this._result.forEach(function (info) {
                var extraLevelData = new LevelData();
                extraLevelData.id = info.id;
                extraLevelData.question_info = info.question_info;
                extraLevelData.answer_res = info.answer_res;
                extraLevelData.answer_num = info.answer_num;
                extraLevelData.answer_time = info.answer_time;
                result_1.push(extraLevelData);
            });
            return result_1;
        }
    };
    /**
     * 获取gameOver数据
     */
    ReportManagerClass.prototype.getGameOverData = function (isExtra) {
        var totalTryCount = eval(this.getTryCounts().join('+'));
        totalTryCount = totalTryCount ? totalTryCount : 0;
        var totalCorrectCount = eval(this.getCorrectCounts().join('+'));
        totalCorrectCount = totalCorrectCount ? totalCorrectCount : 0;
        var totalWrongCount = totalTryCount - totalCorrectCount;
        var totalTimes = eval(this.getCoastTimes().join('+'));
        totalTimes = totalTimes ? totalTimes : 0;
        var gameOver = null;
        if (isExtra) {
            gameOver = new ExtraGameOverData();
            gameOver.game_correct_num = totalCorrectCount;
            gameOver.game_wrong_num = totalWrongCount;
            gameOver.cur_level_id = Math.min(this._curLevelId + 1, this._levelCount);
            gameOver.total_level_num = this._levelCount;
            gameOver.star_num = this.getStarCount();
            gameOver.step_count = this._stepCount;
        }
        else {
            gameOver = new GameOverData();
        }
        gameOver.percentage = this.isAllOver ? Math.round((totalCorrectCount / totalTryCount) * 100) : 0;
        gameOver.answer_all_time = Math.ceil(totalTimes / 1000);
        gameOver.complete_degree = this.isAllOver ? 100 : Math.ceil((totalCorrectCount / this._stepCount) * 100);
        gameOver.answer_all_state =
            0 === totalTryCount
                ? AnswerResult.NoAnswer
                : this.isAllOver
                    ? AnswerResult.AnswerRight
                    : AnswerResult.AnswerHalf;
        return gameOver;
    };
    ReportManagerClass.prototype.getExtraData = function () {
        var extraData = new ExtraData();
        extraData.type = this._type;
        extraData.index = this._playIndex;
        extraData.result = this.getResultData(true);
        extraData.gameOver = this.getGameOverData(true);
        return extraData;
    };
    ReportManagerClass.prototype.getReportData = function () {
        var reportData = new ReportData();
        reportData.type = this._type;
        reportData.index = this._playIndex;
        reportData.result = this.getResultData(false);
        reportData.gameOver = this.getGameOverData(false);
        reportData.ext = this.getExtraData();
        return reportData;
    };
    /**
     * 获取星数
     */
    ReportManagerClass.prototype.getStarCount = function () {
        var gameOverData = this.getGameOverData(false);
        var starCount = 0;
        /** 计算星级 */
        if (gameOverData.percentage >= this._startLevelConfig[0]) {
            starCount = 3;
        }
        else if (gameOverData.percentage >= this._startLevelConfig[1]) {
            starCount = 2;
        }
        else if (gameOverData.percentage > this._startLevelConfig[2]) {
            starCount = 1;
        }
        else {
            starCount = 0;
        }
        return starCount;
    };
    /**
     * 需要同步的数据
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.getSyncData = function () {
        var _data = {
            bReportedGameOver: this._isReportedGameOver,
            playCount: this._playIndex,
            startTime: this._levelStartTime,
            coastTimes: this.getCoastTimes(),
            tryCounts: this.getTryCounts(),
            correctCounts: this.getCorrectCounts(),
            curLevelId: this._curLevelId,
            bFinished: this.isAllOver,
            answerResults: this.getAnswerResults(),
        };
        return _data;
    };
    /**
     * 设置接收到的作答状态到本地
     *
     * @param {*} data
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.setSyncData = function (data) {
        this._isReportedGameOver = data.bReportedGameOver;
        this._playIndex = data.playCount;
        this._levelStartTime = data.startTime;
        this.setCoastTimes(data.coastTimes);
        this.setTryCounts(data.tryCounts);
        this.setCorrectCounts(data.correctCounts);
        this._curLevelId = data.curLevelId;
        this.isAllOver = data.bFinished;
        this.setAnswerResults(data.answerResults);
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    ReportManagerClass._instance = null;
    return ReportManagerClass;
}());
exports.ReportManager = ReportManagerClass.getInstance();
var AnswerResult;
(function (AnswerResult) {
    AnswerResult["AnswerError"] = "answer_error";
    AnswerResult["AnswerRight"] = "answer_right";
    AnswerResult["AnswerHalf"] = "answer_half";
    AnswerResult["NoAnswer"] = "no_answer";
})(AnswerResult = exports.AnswerResult || (exports.AnswerResult = {}));
/**
 * 单关作答数据
 */
var LevelData = /** @class */ (function () {
    function LevelData() {
        /** 关卡ID */
        this.id = 0;
        /** 题目信息 */
        this.question_info = '';
        /** 关卡作答结果  answer_error/answer_right/answer_half/no_answer */
        this.answer_res = AnswerResult.NoAnswer;
        /** 关卡作答次数 */
        this.answer_num = 0;
        /** 关卡作答时间 */
        this.answer_time = 0;
    }
    return LevelData;
}());
exports.LevelData = LevelData;
/**
 * 单关作答数据(额外上报)
 */
var ExtraLevelData = /** @class */ (function (_super) {
    __extends(ExtraLevelData, _super);
    function ExtraLevelData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 关卡作答正确步数 */
        _this.correct_num = 0;
        /** 关卡作答错误步数 */
        _this.wrong_num = 0;
        return _this;
    }
    return ExtraLevelData;
}(LevelData));
exports.ExtraLevelData = ExtraLevelData;
/**
 * gameOver字段内容
 * 其中 percentage 字段在 未通关 的时候，数值为0
 */
var GameOverData = /** @class */ (function () {
    function GameOverData() {
        /** 正确率 */
        this.percentage = 0;
        /** 总作答状态 */
        this.answer_all_state = AnswerResult.NoAnswer;
        /** 总作答时间 */
        this.answer_all_time = 0;
        /** 完成度 */
        this.complete_degree = 0;
    }
    return GameOverData;
}());
exports.GameOverData = GameOverData;
/**
 * gameOver字段内容(额外上报)
 */
var ExtraGameOverData = /** @class */ (function (_super) {
    __extends(ExtraGameOverData, _super);
    function ExtraGameOverData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 总作答正确步数 */
        _this.game_correct_num = 0;
        /** 总作答错误步数 */
        _this.game_wrong_num = 0;
        /** 当前关卡id */
        _this.cur_level_id = 1;
        /** 总关卡数 */
        _this.total_level_num = 0;
        /** 星级 */
        _this.star_num = 0;
        /** 总步数 */
        _this.step_count = 0;
        return _this;
    }
    return ExtraGameOverData;
}(GameOverData));
exports.ExtraGameOverData = ExtraGameOverData;
/**
 * 额外数据上报
 * */
var ExtraData = /** @class */ (function () {
    function ExtraData() {
        /** 格式类型 */
        this.type = 'txt';
        /** 第几次作答 */
        this.index = 1;
        /** 关卡作答结果 */
        this.result = [];
        /** gameOver数据 */
        this.gameOver = new ExtraGameOverData();
    }
    return ExtraData;
}());
exports.ExtraData = ExtraData;
var ReportData = /** @class */ (function () {
    function ReportData() {
        /** 格式类型 */
        this.type = 'txt';
        /** 第几次作答 */
        this.index = 1;
        /** 关卡作答结果 */
        this.result = [];
        /** gameOver数据 */
        this.gameOver = new GameOverData();
        /** 额外数据上报 */
        this.ext = new ExtraData();
    }
    return ReportData;
}());
exports.ReportData = ReportData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFJlcG9ydE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUNuRSw2RUFBNEU7QUFDNUUsMENBQXFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBQTtRQVNJLFdBQVc7UUFDSixzQkFBaUIsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsaUVBQWlFO1FBQzFELFVBQUssR0FBVyxLQUFLLENBQUM7UUFDdEIsWUFBTyxHQUEwQixFQUFFLENBQUM7UUFDM0MseUNBQXlDO1FBQ3pDLFlBQVk7UUFDTCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGlFQUFpRTtRQUNqRSxhQUFhO1FBQ04sb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFFbkMsYUFBYTtRQUNOLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBZXBDLGFBQWE7UUFDTixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBU2pDLGVBQWU7UUFDUixtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQVFyQyxhQUFhO1FBQ04sbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBWTNDLFlBQVk7UUFDTCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUUvQixrQkFBa0I7UUFDWCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUUvQixlQUFlO1FBQ2Ysb0NBQW9DO1FBRXBDLGVBQWU7UUFDUixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxDLGNBQWM7UUFDZCxrQ0FBa0M7UUFFbEM7OzthQUdLO1FBQ0wsMENBQTBDO1FBRTFDLHVCQUF1QjtRQUNoQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFNUMsaUJBQWlCO1FBQ1YsZUFBVSxHQUFXLENBQUMsQ0FBQztJQTBTbEMsQ0FBQztJQXZZaUIsOEJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZ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YUFBYTtRQUNiLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO1FBQ3pCLGlCQUFpQjtRQUNqQixhQUFRLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsYUFBYTtRQUNiLFFBQUcsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFBRCxpQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi9TREsvR2FtZU1zZyc7XG5cbi8qKlxuICog5L2c562U5pWw5o2u566h55CG57G7XG4gKi9cbmNsYXNzIFJlcG9ydE1hbmFnZXJDbGFzcyB7XG4gICAgcHVibGljIHN0YXRpYyBfaW5zdGFuY2U6IFJlcG9ydE1hbmFnZXJDbGFzcyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVwb3J0TWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKiDmmJ/nuqfmoIflh4YgKi9cbiAgICBwdWJsaWMgX3N0YXJ0TGV2ZWxDb25maWc6IG51bWJlcltdID0gWzgwLCA1MCwgMF07XG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW/hemcgOWPguaVsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nID0gJ3R4dCc7XG4gICAgcHVibGljIF9yZXN1bHQ6IEFycmF5PEV4dHJhTGV2ZWxEYXRhPiA9IFtdO1xuICAgIC8vIHB1YmxpYyBfZ2FtZU92ZXI6IEdhbWVPdmVyRGF0YSA9IG51bGw7XG4gICAgLyoqIOesrOWHoOasoeS9nOetlCAqL1xuICAgIHB1YmxpYyBfcGxheUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLei+heWKqeWPguaVsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qKiDmr4/lhbPlvIDlp4vml7bpl7QgKi9cbiAgICBwdWJsaWMgX2xldmVsU3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOavj+WFs+S9nOetlOiAl+aXtiAqL1xuICAgIHB1YmxpYyBfY29hc3RUaW1lQXJyOiBudW1iZXJbXSA9IFtdO1xuICAgIC8qKiDmt7vliqAg5YWzL+atpemqpCDml7bpl7QgKi9cbiAgICBwdWJsaWMgYWRkQ29hc3RUaW1lKHRtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0bSAtIHRoaXMuX2xldmVsU3RhcnRUaW1lO1xuICAgICAgICB0aW1lID0gTWF0aC5jZWlsKHRpbWUgLyAxMDAwKSAqIDEwMDA7IC8v5pe26Ze05Y+W5pW0XG4gICAgICAgIHRoaXMuX2NvYXN0VGltZUFyclt0aGlzLl9jdXJMZXZlbElkXSA9IHRpbWU7XG4gICAgfVxuICAgIC8qKiDojrflj5bmgLvogJfml7YgKi9cbiAgICBwdWJsaWMgZ2V0Q29hc3RUaW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvYXN0VGltZUFycjtcbiAgICB9XG4gICAgcHVibGljIHNldENvYXN0VGltZXMoYXJyOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9jb2FzdFRpbWVBcnIgPSBhcnI7XG4gICAgfVxuXG4gICAgLyoqIOavj+WFs+S9nOetlOasoeaVsCAqL1xuICAgIHB1YmxpYyBfdHJ5Q291bnRzOiBudW1iZXJbXSA9IFtdO1xuICAgIC8qKiDojrflj5bmgLvmrKHmlbAgKi9cbiAgICBwdWJsaWMgZ2V0VHJ5Q291bnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5Q291bnRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VHJ5Q291bnRzKGFycjogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fdHJ5Q291bnRzID0gYXJyO1xuICAgIH1cblxuICAgIC8qKiDlrp7pmYXkvZznrZTmraPnoa7mrKHmlbAgKi9cbiAgICBwdWJsaWMgX2NvcnJlY3RDb3VudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIGdldENvcnJlY3RDb3VudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JyZWN0Q291bnRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29ycmVjdENvdW50cyhhcnI6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RDb3VudHMgPSBhcnI7XG4gICAgfVxuXG4gICAgLyoqIOavj+WFs+S9nOetlOeKtuaAgSAqL1xuICAgIHB1YmxpYyBfQW5zd2VyUmVzdWx0czogQW5zd2VyUmVzdWx0W10gPSBbXTtcbiAgICAvKiog6I635Y+W5oC75qyh5pWwICovXG4gICAgcHVibGljIGdldEFuc3dlclJlc3VsdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BbnN3ZXJSZXN1bHRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0QW5zd2VyUmVzdWx0cyhhcnI6IEFuc3dlclJlc3VsdFtdKSB7XG4gICAgICAgIHRoaXMuX0Fuc3dlclJlc3VsdHMgPSBhcnI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRBbnN3ZXJSZXN1bHRCeUxldmVsKGxldmVsOiBudW1iZXIsIGFuc3dlcjogQW5zd2VyUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuX0Fuc3dlclJlc3VsdHNbbGV2ZWxdID0gYW5zd2VyO1xuICAgIH1cblxuICAgIC8qKiDmgLvlhbPljaHmlbDnm64gKi9cbiAgICBwdWJsaWMgX2xldmVsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICAvKiog5b2T5YmN5YWz5Y2haWQgIOS7jjDlvIDlp4sqL1xuICAgIHB1YmxpYyBfY3VyTGV2ZWxJZDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDlrp7pmYXkvZznrZTmraPnoa7mrKHmlbAgKi9cbiAgICAvLyBwdWJsaWMgX2NvcnJlY3RDb3VudDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDmmK/lkKblhajpg6jlhbPljaHpgJrlhbMgKi9cbiAgICBwdWJsaWMgaXNBbGxPdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiog5piv5ZCm5pW05L2T5pyq5pON5L2cICovXG4gICAgLy8gcHVibGljIF9pc1VuZG86IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICog5piv5ZCmIOW9k+WJjeatpemqpC/lhbPljaEg5pyq5pON5L2c77yMXG4gICAgICog5Y+q6KaB55So5oi35pyJ5pON5L2c5bCx5L+u5pS55q2k5YC8XG4gICAgICogKi9cbiAgICAvLyBwdWJsaWMgX2lzQ3VyTGV2ZWxVbmRvOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKiDmmK/lkKblt7Lnu4/kuIrmiqXov4dnYW1lX292ZXIgKi9cbiAgICBwdWJsaWMgX2lzUmVwb3J0ZWRHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqIOmcgOimgeWIpOaWreato+ivr+eahOaAu+atpeaVsCAqL1xuICAgIHB1YmxpYyBfc3RlcENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOa3u+WKoCDlhbMv5q2l6aqkIOasoeaVsCAqL1xuICAgIHB1YmxpYyBhZGRUcnlDb3VudChiQ29ycmVjdDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fdHJ5Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl90cnlDb3VudHNbdGhpcy5fY3VyTGV2ZWxJZF0gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeUNvdW50c1t0aGlzLl9jdXJMZXZlbElkXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLl9jb3JyZWN0Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JyZWN0Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvcnJlY3RDb3VudHNbdGhpcy5fY3VyTGV2ZWxJZF0gKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluimgeS4iuaKpeeahOaVsOaNrlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsQ291bnQg5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIGluaXRSZXBvcnREYXRhKGxldmVsQ291bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wbGF5SW5kZXggPSAxO1xuICAgICAgICB0aGlzLl9jdXJMZXZlbElkID0gMDtcbiAgICAgICAgdGhpcy5pc0FsbE92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fbGV2ZWxDb3VudCA9IGxldmVsQ291bnQ7XG4gICAgICAgIHRoaXMuX3Jlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xldmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxldmVsSW5mbyA9IHRoaXMuX2xldmVsQ291bnQgPiAxID8gYCR7Q29uc3RWYWx1ZS5HYW1lTmFtZX1f56ysJHtpICsgMX3lhbNgIDogQ29uc3RWYWx1ZS5HYW1lTmFtZTtcbiAgICAgICAgICAgIGxldCBfbGV2ZWxEYXRhID0gbmV3IEV4dHJhTGV2ZWxEYXRhKCk7XG4gICAgICAgICAgICBfbGV2ZWxEYXRhLmlkID0gaSArIDE7XG4gICAgICAgICAgICBfbGV2ZWxEYXRhLnF1ZXN0aW9uX2luZm8gPSBsZXZlbEluZm87XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHQucHVzaChfbGV2ZWxEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sZXZlbFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc2V0VHJ5Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRDb3JyZWN0Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRDb2FzdFRpbWVzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJSZXN1bHRzKFtdKTtcblxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlclsnZ2V0U3RlcENvdW50J10pIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBDb3VudCA9IEVkaXRvck1hbmFnZXJbJ2dldFN0ZXBDb3VudCddKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGVwQ291bnQgPSBsZXZlbENvdW50O1xuICAgICAgICB9XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9sZXZlbF9pbmZvKHsgbGV2ZWxDb3VudDogdGhpcy5fbGV2ZWxDb3VudCwgY3VyTGV2ZWw6IHRoaXMuX2N1ckxldmVsSWQgKyAxIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmuWFs+S5i+WQjueahOmHjeeOqVxuICAgICAqICDlj6rmnInlpJblsYJpbmRleOiHquWiniAgIOWFtuS9meaVsOaNruaBouWkjeWIneWni+eKtuaAgVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIERhdGFSZXBvcnRNZ3JcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGF5R2FtZSgpIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gW107XG5cbiAgICAgICAgKyt0aGlzLl9wbGF5SW5kZXg7XG4gICAgICAgIHRoaXMuaXNBbGxPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jdXJMZXZlbElkID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZXZlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsZXZlbEluZm8gPSB0aGlzLl9sZXZlbENvdW50ID4gMSA/IGAke0NvbnN0VmFsdWUuR2FtZU5hbWV9X+esrCR7aSArIDF95YWzYCA6IENvbnN0VmFsdWUuR2FtZU5hbWU7XG4gICAgICAgICAgICBsZXQgX2xldmVsRGF0YSA9IG5ldyBFeHRyYUxldmVsRGF0YSgpO1xuICAgICAgICAgICAgX2xldmVsRGF0YS5pZCA9IGkgKyAxO1xuICAgICAgICAgICAgX2xldmVsRGF0YS5xdWVzdGlvbl9pbmZvID0gbGV2ZWxJbmZvO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0LnB1c2goX2xldmVsRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGV2ZWxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnNldFRyeUNvdW50cyhbXSk7XG4gICAgICAgIHRoaXMuc2V0Q29ycmVjdENvdW50cyhbXSk7XG4gICAgICAgIHRoaXMuc2V0Q29hc3RUaW1lcyhbXSk7XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyUmVzdWx0cyhbXSk7XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9sZXZlbF9pbmZvKHsgbGV2ZWxDb3VudDogdGhpcy5fbGV2ZWxDb3VudCwgY3VyTGV2ZWw6IHRoaXMuX2N1ckxldmVsSWQgKyAxIH0pO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBzZXRGaXJzdFRvdWNoKCkge1xuICAgIC8vICAgICB0aGlzLl9pc0N1ckxldmVsVW5kbyA9IGZhbHNlO1xuICAgIC8vICAgICB0aGlzLl9pc1VuZG8gPSBmYWxzZTtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDlhbPljaHkvZznrZTmlbDmja5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYkNvcnJlY3Qg5piv5ZCm5L2c562U5q2j56GuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiQ3VyTGV2ZWxGaW5pc2gg5b2T5YmN5YWz5Y2h5piv5ZCm5bey5a6M5oiQIOeUqOS6juaMieatpemqpOS4iuaKpeaXtueKtuaAgeiuvue9ruS4umhhbGbvvIzpu5jorqTkuLp0cnVlXG4gICAgICovXG4gICAgcHVibGljIHJlcG9ydExldmVsUmVzdWx0KGJDb3JyZWN0OiBib29sZWFuLCBiQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHRoaXMuX3Jlc3VsdFt0aGlzLl9jdXJMZXZlbElkXSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBjdXJUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hZGRDb2FzdFRpbWUoY3VyVGltZSk7XG4gICAgICAgIHRoaXMuYWRkVHJ5Q291bnQoYkNvcnJlY3QpO1xuICAgICAgICBsZXQgYW5zd2VyUmVzID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgIGFuc3dlclJlcyA9IGJDdXJMZXZlbEZpbmlzaCA/IEFuc3dlclJlc3VsdC5BbnN3ZXJSaWdodCA6IEFuc3dlclJlc3VsdC5BbnN3ZXJIYWxmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5zd2VyUmVzID0gQW5zd2VyUmVzdWx0LkFuc3dlckVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyUmVzdWx0QnlMZXZlbCh0aGlzLl9jdXJMZXZlbElkLCBhbnN3ZXJSZXMpO1xuXG4gICAgICAgIGxldCBfcmVwb3J0RGF0YSA9IHRoaXMuZ2V0UmVwb3J0RGF0YSgpO1xuICAgICAgICBfcmVwb3J0RGF0YS5nYW1lT3ZlciA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKF9yZXBvcnREYXRhKTtcbiAgICAgICAgR2FtZU1zZy5hbnN3ZXJTeW5jU2VuZChfcmVwb3J0RGF0YSk7XG5cbiAgICAgICAgaWYgKGJDdXJMZXZlbEZpbmlzaCkge1xuICAgICAgICAgICAgKyt0aGlzLl9jdXJMZXZlbElkO1xuICAgICAgICAgICAgdGhpcy5fbGV2ZWxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1ckxldmVsSWQgPT09IHRoaXMuX2xldmVsQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRHYW1lT3ZlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBHYW1lTXNnLnJlcXVlc3RfbGV2ZWxfaW5mbyh7IGxldmVsQ291bnQ6IHRoaXMuX2xldmVsQ291bnQsIGN1ckxldmVsOiB0aGlzLl9jdXJMZXZlbElkICsgMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9nOetlOe7k+adny/nq6/kuIrmlLbpopgg5pWw5o2u5LiK5oqlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGF0YVJlcG9ydE1nclxuICAgICAqL1xuICAgIHB1YmxpYyByZXBvcnRHYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9yZXBvckdhbWVPdmVydERhdGEgPSB0aGlzLmdldFJlcG9ydERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2coX3JlcG9yR2FtZU92ZXJ0RGF0YSk7XG4gICAgICAgIEdhbWVNc2cuZ2FtZU92ZXIoX3JlcG9yR2FtZU92ZXJ0RGF0YSk7XG4gICAgICAgIEdhbWVNc2cuZ2FtZVN0YXRpc3RpY0RhdGEoX3JlcG9yR2FtZU92ZXJ0RGF0YS5leHQpO1xuXG4gICAgICAgIC8qKiDkuIrmiqVnYW1lX292ZXLmlbDmja7kuYvlkI7kv67mlLnnirbmgIEgKi9cbiAgICAgICAgdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVzdWx0RGF0YShpc0V4dHJhOiBib29sZWFuKTogTGV2ZWxEYXRhW10gfCBFeHRyYUxldmVsRGF0YVtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBsZXZlbERhdGEgPSB0aGlzLl9yZXN1bHRbaV07XG4gICAgICAgICAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxEYXRhLmlkIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlclJlc3VsdCA9IHRoaXMuZ2V0QW5zd2VyUmVzdWx0cygpW2xldmVsSW5kZXhdIHx8IEFuc3dlclJlc3VsdC5Ob0Fuc3dlcjtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlck51bSA9IHRoaXMuZ2V0VHJ5Q291bnRzKClbbGV2ZWxJbmRleF0gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlckNvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RDb3VudHMoKVtsZXZlbEluZGV4XSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyV3JvbmcgPSBhbnN3ZXJOdW0gLSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyVGltZSA9IE1hdGguY2VpbCgodGhpcy5nZXRDb2FzdFRpbWVzKClbbGV2ZWxJbmRleF0gfHwgMCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGxldmVsRGF0YS5hbnN3ZXJfcmVzID0gYW5zd2VyUmVzdWx0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl9udW0gPSBhbnN3ZXJOdW07XG4gICAgICAgICAgICBsZXZlbERhdGEuY29ycmVjdF9udW0gPSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLndyb25nX251bSA9IGFuc3dlcldyb25nO1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl90aW1lID0gYW5zd2VyVGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V4dHJhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0LmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFMZXZlbERhdGEgPSBuZXcgTGV2ZWxEYXRhKCk7XG4gICAgICAgICAgICAgICAgZXh0cmFMZXZlbERhdGEuaWQgPSBpbmZvLmlkO1xuICAgICAgICAgICAgICAgIGV4dHJhTGV2ZWxEYXRhLnF1ZXN0aW9uX2luZm8gPSBpbmZvLnF1ZXN0aW9uX2luZm87XG4gICAgICAgICAgICAgICAgZXh0cmFMZXZlbERhdGEuYW5zd2VyX3JlcyA9IGluZm8uYW5zd2VyX3JlcztcbiAgICAgICAgICAgICAgICBleHRyYUxldmVsRGF0YS5hbnN3ZXJfbnVtID0gaW5mby5hbnN3ZXJfbnVtO1xuICAgICAgICAgICAgICAgIGV4dHJhTGV2ZWxEYXRhLmFuc3dlcl90aW1lID0gaW5mby5hbnN3ZXJfdGltZTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGV4dHJhTGV2ZWxEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+WZ2FtZU92ZXLmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0R2FtZU92ZXJEYXRhKGlzRXh0cmE6IGJvb2xlYW4pOiBHYW1lT3ZlckRhdGEgfCBFeHRyYUdhbWVPdmVyRGF0YSB7XG4gICAgICAgIGxldCB0b3RhbFRyeUNvdW50ID0gZXZhbCh0aGlzLmdldFRyeUNvdW50cygpLmpvaW4oJysnKSk7XG4gICAgICAgIHRvdGFsVHJ5Q291bnQgPSB0b3RhbFRyeUNvdW50ID8gdG90YWxUcnlDb3VudCA6IDA7XG4gICAgICAgIGxldCB0b3RhbENvcnJlY3RDb3VudCA9IGV2YWwodGhpcy5nZXRDb3JyZWN0Q291bnRzKCkuam9pbignKycpKTtcbiAgICAgICAgdG90YWxDb3JyZWN0Q291bnQgPSB0b3RhbENvcnJlY3RDb3VudCA/IHRvdGFsQ29ycmVjdENvdW50IDogMDtcbiAgICAgICAgY29uc3QgdG90YWxXcm9uZ0NvdW50ID0gdG90YWxUcnlDb3VudCAtIHRvdGFsQ29ycmVjdENvdW50O1xuICAgICAgICBsZXQgdG90YWxUaW1lcyA9IGV2YWwodGhpcy5nZXRDb2FzdFRpbWVzKCkuam9pbignKycpKTtcbiAgICAgICAgdG90YWxUaW1lcyA9IHRvdGFsVGltZXMgPyB0b3RhbFRpbWVzIDogMDtcblxuICAgICAgICBsZXQgZ2FtZU92ZXI6IEdhbWVPdmVyRGF0YSB8IEV4dHJhR2FtZU92ZXJEYXRhID0gbnVsbDtcbiAgICAgICAgaWYgKGlzRXh0cmEpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyID0gbmV3IEV4dHJhR2FtZU92ZXJEYXRhKCk7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLmdhbWVfY29ycmVjdF9udW0gPSB0b3RhbENvcnJlY3RDb3VudDtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkuZ2FtZV93cm9uZ19udW0gPSB0b3RhbFdyb25nQ291bnQ7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLmN1cl9sZXZlbF9pZCA9IE1hdGgubWluKHRoaXMuX2N1ckxldmVsSWQgKyAxLCB0aGlzLl9sZXZlbENvdW50KTtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkudG90YWxfbGV2ZWxfbnVtID0gdGhpcy5fbGV2ZWxDb3VudDtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkuc3Rhcl9udW0gPSB0aGlzLmdldFN0YXJDb3VudCgpO1xuICAgICAgICAgICAgKGdhbWVPdmVyIGFzIEV4dHJhR2FtZU92ZXJEYXRhKS5zdGVwX2NvdW50ID0gdGhpcy5fc3RlcENvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSBuZXcgR2FtZU92ZXJEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lT3Zlci5wZXJjZW50YWdlID0gdGhpcy5pc0FsbE92ZXIgPyBNYXRoLnJvdW5kKCh0b3RhbENvcnJlY3RDb3VudCAvIHRvdGFsVHJ5Q291bnQpICogMTAwKSA6IDA7XG4gICAgICAgIGdhbWVPdmVyLmFuc3dlcl9hbGxfdGltZSA9IE1hdGguY2VpbCh0b3RhbFRpbWVzIC8gMTAwMCk7XG4gICAgICAgIGdhbWVPdmVyLmNvbXBsZXRlX2RlZ3JlZSA9IHRoaXMuaXNBbGxPdmVyID8gMTAwIDogTWF0aC5jZWlsKCh0b3RhbENvcnJlY3RDb3VudCAvIHRoaXMuX3N0ZXBDb3VudCkgKiAxMDApO1xuICAgICAgICBnYW1lT3Zlci5hbnN3ZXJfYWxsX3N0YXRlID1cbiAgICAgICAgICAgIDAgPT09IHRvdGFsVHJ5Q291bnRcbiAgICAgICAgICAgICAgICA/IEFuc3dlclJlc3VsdC5Ob0Fuc3dlclxuICAgICAgICAgICAgICAgIDogdGhpcy5pc0FsbE92ZXJcbiAgICAgICAgICAgICAgICA/IEFuc3dlclJlc3VsdC5BbnN3ZXJSaWdodFxuICAgICAgICAgICAgICAgIDogQW5zd2VyUmVzdWx0LkFuc3dlckhhbGY7XG5cbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFeHRyYURhdGEoKTogRXh0cmFEYXRhIHtcbiAgICAgICAgbGV0IGV4dHJhRGF0YTogRXh0cmFEYXRhID0gbmV3IEV4dHJhRGF0YSgpO1xuICAgICAgICBleHRyYURhdGEudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgICAgIGV4dHJhRGF0YS5pbmRleCA9IHRoaXMuX3BsYXlJbmRleDtcbiAgICAgICAgZXh0cmFEYXRhLnJlc3VsdCA9IHRoaXMuZ2V0UmVzdWx0RGF0YSh0cnVlKSBhcyBFeHRyYUxldmVsRGF0YVtdO1xuICAgICAgICBleHRyYURhdGEuZ2FtZU92ZXIgPSB0aGlzLmdldEdhbWVPdmVyRGF0YSh0cnVlKSBhcyBFeHRyYUdhbWVPdmVyRGF0YTtcblxuICAgICAgICByZXR1cm4gZXh0cmFEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXBvcnREYXRhKCk6IFJlcG9ydERhdGEge1xuICAgICAgICBsZXQgcmVwb3J0RGF0YTogUmVwb3J0RGF0YSA9IG5ldyBSZXBvcnREYXRhKCk7XG4gICAgICAgIHJlcG9ydERhdGEudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgICAgIHJlcG9ydERhdGEuaW5kZXggPSB0aGlzLl9wbGF5SW5kZXg7XG4gICAgICAgIHJlcG9ydERhdGEucmVzdWx0ID0gdGhpcy5nZXRSZXN1bHREYXRhKGZhbHNlKSBhcyBMZXZlbERhdGFbXTtcbiAgICAgICAgcmVwb3J0RGF0YS5nYW1lT3ZlciA9IHRoaXMuZ2V0R2FtZU92ZXJEYXRhKGZhbHNlKSBhcyBHYW1lT3ZlckRhdGE7XG4gICAgICAgIHJlcG9ydERhdGEuZXh0ID0gdGhpcy5nZXRFeHRyYURhdGEoKTtcblxuICAgICAgICByZXR1cm4gcmVwb3J0RGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmmJ/mlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RhckNvdW50KCkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlckRhdGEgPSB0aGlzLmdldEdhbWVPdmVyRGF0YShmYWxzZSk7XG5cbiAgICAgICAgbGV0IHN0YXJDb3VudCA9IDA7XG4gICAgICAgIC8qKiDorqHnrpfmmJ/nuqcgKi9cbiAgICAgICAgaWYgKGdhbWVPdmVyRGF0YS5wZXJjZW50YWdlID49IHRoaXMuX3N0YXJ0TGV2ZWxDb25maWdbMF0pIHtcbiAgICAgICAgICAgIHN0YXJDb3VudCA9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZU92ZXJEYXRhLnBlcmNlbnRhZ2UgPj0gdGhpcy5fc3RhcnRMZXZlbENvbmZpZ1sxXSkge1xuICAgICAgICAgICAgc3RhckNvdW50ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lT3ZlckRhdGEucGVyY2VudGFnZSA+IHRoaXMuX3N0YXJ0TGV2ZWxDb25maWdbMl0pIHtcbiAgICAgICAgICAgIHN0YXJDb3VudCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFyQ291bnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpnIDopoHlkIzmraXnmoTmlbDmja5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEYXRhUmVwb3J0TWdyXG4gICAgICovXG4gICAgcHVibGljIGdldFN5bmNEYXRhKCkge1xuICAgICAgICBsZXQgX2RhdGEgPSB7XG4gICAgICAgICAgICBiUmVwb3J0ZWRHYW1lT3ZlcjogdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyLCAvL+aYr+WQpuW3sue7j+S4iuaKpei/h2dhbWVfb3ZlclxuICAgICAgICAgICAgcGxheUNvdW50OiB0aGlzLl9wbGF5SW5kZXgsIC8v57uf6K6h5L2c562U5qyh5pWwICDku6XpgJrlhbPkuLrnu7TluqZcbiAgICAgICAgICAgIHN0YXJ0VGltZTogdGhpcy5fbGV2ZWxTdGFydFRpbWUsIC8v5q+P5YWz5byA5aeL5pe26Ze0XG4gICAgICAgICAgICBjb2FzdFRpbWVzOiB0aGlzLmdldENvYXN0VGltZXMoKSwgLy/mr4/lhbPkvZznrZTogJfml7ZcbiAgICAgICAgICAgIHRyeUNvdW50czogdGhpcy5nZXRUcnlDb3VudHMoKSwgLy/mr4/lhbPlsJ3or5XmrKHmlbBcbiAgICAgICAgICAgIGNvcnJlY3RDb3VudHM6IHRoaXMuZ2V0Q29ycmVjdENvdW50cygpLCAvL+avj+WFs+S9nOetlOato+ehruasoeaVsFxuICAgICAgICAgICAgY3VyTGV2ZWxJZDogdGhpcy5fY3VyTGV2ZWxJZCwgLy/lvZPliY3lhbPljaFcbiAgICAgICAgICAgIGJGaW5pc2hlZDogdGhpcy5pc0FsbE92ZXIsXG4gICAgICAgICAgICBhbnN3ZXJSZXN1bHRzOiB0aGlzLmdldEFuc3dlclJlc3VsdHMoKSwgLy/mr4/lhbPkvZznrZTnirbmgIFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaOpeaUtuWIsOeahOS9nOetlOeKtuaAgeWIsOacrOWcsFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAgICogQG1lbWJlcm9mIERhdGFSZXBvcnRNZ3JcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3luY0RhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3ZlciA9IGRhdGEuYlJlcG9ydGVkR2FtZU92ZXI7XG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IGRhdGEucGxheUNvdW50O1xuICAgICAgICB0aGlzLl9sZXZlbFN0YXJ0VGltZSA9IGRhdGEuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLnNldENvYXN0VGltZXMoZGF0YS5jb2FzdFRpbWVzKTtcbiAgICAgICAgdGhpcy5zZXRUcnlDb3VudHMoZGF0YS50cnlDb3VudHMpO1xuICAgICAgICB0aGlzLnNldENvcnJlY3RDb3VudHMoZGF0YS5jb3JyZWN0Q291bnRzKTtcbiAgICAgICAgdGhpcy5fY3VyTGV2ZWxJZCA9IGRhdGEuY3VyTGV2ZWxJZDtcbiAgICAgICAgdGhpcy5pc0FsbE92ZXIgPSBkYXRhLmJGaW5pc2hlZDtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJSZXN1bHRzKGRhdGEuYW5zd2VyUmVzdWx0cyk7XG5cbiAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X2xldmVsX2luZm8oeyBsZXZlbENvdW50OiB0aGlzLl9sZXZlbENvdW50LCBjdXJMZXZlbDogdGhpcy5fY3VyTGV2ZWxJZCArIDEgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IFJlcG9ydE1hbmFnZXIgPSBSZXBvcnRNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gQW5zd2VyUmVzdWx0IHtcbiAgICBBbnN3ZXJFcnJvciA9ICdhbnN3ZXJfZXJyb3InLCAvL+etlOmUmVxuICAgIEFuc3dlclJpZ2h0ID0gJ2Fuc3dlcl9yaWdodCcsIC8v562U5a+5XG4gICAgQW5zd2VySGFsZiA9ICdhbnN3ZXJfaGFsZicsIC8v5pyq562U5a6MXG4gICAgTm9BbnN3ZXIgPSAnbm9fYW5zd2VyJywgLy/mnKrkvZznrZRcbn1cblxuLyoqXG4gKiDljZXlhbPkvZznrZTmlbDmja5cbiAqL1xuZXhwb3J0IGNsYXNzIExldmVsRGF0YSB7XG4gICAgLyoqIOWFs+WNoUlEICovXG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgLyoqIOmimOebruS/oeaBryAqL1xuICAgIHF1ZXN0aW9uX2luZm86IHN0cmluZyA9ICcnO1xuICAgIC8qKiDlhbPljaHkvZznrZTnu5PmnpwgIGFuc3dlcl9lcnJvci9hbnN3ZXJfcmlnaHQvYW5zd2VyX2hhbGYvbm9fYW5zd2VyICovXG4gICAgYW5zd2VyX3JlczogQW5zd2VyUmVzdWx0ID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgIC8qKiDlhbPljaHkvZznrZTmrKHmlbAgKi9cbiAgICBhbnN3ZXJfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDlhbPljaHkvZznrZTml7bpl7QgKi9cbiAgICBhbnN3ZXJfdGltZTogbnVtYmVyID0gMDtcbn1cblxuLyoqXG4gKiDljZXlhbPkvZznrZTmlbDmja4o6aKd5aSW5LiK5oqlKVxuICovXG5leHBvcnQgY2xhc3MgRXh0cmFMZXZlbERhdGEgZXh0ZW5kcyBMZXZlbERhdGEge1xuICAgIC8qKiDlhbPljaHkvZznrZTmraPnoa7mraXmlbAgKi9cbiAgICBjb3JyZWN0X251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5YWz5Y2h5L2c562U6ZSZ6K+v5q2l5pWwICovXG4gICAgd3JvbmdfbnVtOiBudW1iZXIgPSAwO1xufVxuXG4vKipcbiAqIGdhbWVPdmVy5a2X5q615YaF5a65XG4gKiDlhbbkuK0gcGVyY2VudGFnZSDlrZfmrrXlnKgg5pyq6YCa5YWzIOeahOaXtuWAme+8jOaVsOWAvOS4ujBcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWVPdmVyRGF0YSB7XG4gICAgLyoqIOato+ehrueOhyAqL1xuICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgIC8qKiDmgLvkvZznrZTnirbmgIEgKi9cbiAgICBhbnN3ZXJfYWxsX3N0YXRlID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgIC8qKiDmgLvkvZznrZTml7bpl7QgKi9cbiAgICBhbnN3ZXJfYWxsX3RpbWUgPSAwO1xuICAgIC8qKiDlrozmiJDluqYgKi9cbiAgICBjb21wbGV0ZV9kZWdyZWUgPSAwO1xufVxuXG4vKipcbiAqIGdhbWVPdmVy5a2X5q615YaF5a65KOmineWkluS4iuaKpSlcbiAqL1xuZXhwb3J0IGNsYXNzIEV4dHJhR2FtZU92ZXJEYXRhIGV4dGVuZHMgR2FtZU92ZXJEYXRhIHtcbiAgICAvKiog5oC75L2c562U5q2j56Gu5q2l5pWwICovXG4gICAgZ2FtZV9jb3JyZWN0X251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5oC75L2c562U6ZSZ6K+v5q2l5pWwICovXG4gICAgZ2FtZV93cm9uZ19udW06IG51bWJlciA9IDA7XG4gICAgLyoqIOW9k+WJjeWFs+WNoWlkICovXG4gICAgY3VyX2xldmVsX2lkOiBudW1iZXIgPSAxO1xuICAgIC8qKiDmgLvlhbPljaHmlbAgKi9cbiAgICB0b3RhbF9sZXZlbF9udW06IG51bWJlciA9IDA7XG4gICAgLyoqIOaYn+e6pyAqL1xuICAgIHN0YXJfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDmgLvmraXmlbAgKi9cbiAgICBzdGVwX2NvdW50OiBudW1iZXIgPSAwO1xufVxuXG4vKipcbiAqIOmineWkluaVsOaNruS4iuaKpVxuICogKi9cbmV4cG9ydCBjbGFzcyBFeHRyYURhdGEge1xuICAgIC8qKiDmoLzlvI/nsbvlnosgKi9cbiAgICB0eXBlOiBzdHJpbmcgPSAndHh0JztcbiAgICAvKiog56ys5Yeg5qyh5L2c562UICovXG4gICAgaW5kZXg6IG51bWJlciA9IDE7XG4gICAgLyoqIOWFs+WNoeS9nOetlOe7k+aenCAqL1xuICAgIHJlc3VsdDogRXh0cmFMZXZlbERhdGFbXSA9IFtdO1xuICAgIC8qKiBnYW1lT3ZlcuaVsOaNriAqL1xuICAgIGdhbWVPdmVyOiBFeHRyYUdhbWVPdmVyRGF0YSA9IG5ldyBFeHRyYUdhbWVPdmVyRGF0YSgpO1xufVxuXG5leHBvcnQgY2xhc3MgUmVwb3J0RGF0YSB7XG4gICAgLyoqIOagvOW8j+exu+WeiyAqL1xuICAgIHR5cGU6IHN0cmluZyA9ICd0eHQnO1xuICAgIC8qKiDnrKzlh6DmrKHkvZznrZQgKi9cbiAgICBpbmRleDogbnVtYmVyID0gMTtcbiAgICAvKiog5YWz5Y2h5L2c562U57uT5p6cICovXG4gICAgcmVzdWx0OiBMZXZlbERhdGFbXSA9IFtdO1xuICAgIC8qKiBnYW1lT3ZlcuaVsOaNriAqL1xuICAgIGdhbWVPdmVyOiBHYW1lT3ZlckRhdGEgPSBuZXcgR2FtZU92ZXJEYXRhKCk7XG4gICAgLyoqIOmineWkluaVsOaNruS4iuaKpSAqL1xuICAgIGV4dDogRXh0cmFEYXRhID0gbmV3IEV4dHJhRGF0YSgpO1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '30e46ZgmPlO+5CRM3r8Ls4a', 'SyncDataManager');
// frame/scripts/Manager/SyncDataManager.ts

"use strict";
/**
 * 同步数据
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncDataManager = exports.SyncData = void 0;
var FrameSyncData_1 = require("../../../frame/scripts/Data/FrameSyncData");
var ReportManager_1 = require("../../../frame/scripts/Manager/ReportManager");
var CustomSyncData_1 = require("../../../game/scripts/Data/CustomSyncData");
/**
 * 需要同步的数据
 * 自定义数据不要在这里实现，请在 CustomSyncData 中实现
 */
var SyncData = /** @class */ (function () {
    function SyncData() {
        this.reportData = null; // 上报数据
        this.customSyncData = new CustomSyncData_1.CustomSyncData(); // 自定义同步数据
        this.frameSyncData = new FrameSyncData_1.FrameSyncData(); // 框架中的同步数据
    }
    return SyncData;
}());
exports.SyncData = SyncData;
var SyncDataManagerClass = /** @class */ (function () {
    function SyncDataManagerClass() {
        /** 同步数据 */
        this._syncData = new SyncData();
    }
    SyncDataManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new SyncDataManagerClass();
        }
        return this._instance;
    };
    Object.defineProperty(SyncDataManagerClass.prototype, "syncData", {
        get: function () {
            return this.getSyncData();
        },
        set: function (data) {
            this.setSyncData(data);
        },
        enumerable: false,
        configurable: true
    });
    SyncDataManagerClass.prototype.initSyncData = function () {
        this._syncData = new SyncData();
    };
    SyncDataManagerClass.prototype.getSyncData = function () {
        this._syncData.reportData = ReportManager_1.ReportManager.getSyncData();
        return this._syncData;
    };
    SyncDataManagerClass.prototype.setSyncData = function (data) {
        this._syncData = data;
        ReportManager_1.ReportManager.setSyncData(data.reportData);
    };
    /**
     * 重玩
     */
    SyncDataManagerClass.prototype.replay = function () {
        var actionId = this._syncData.frameSyncData.actionId;
        var replayCount = this._syncData.frameSyncData.hasReplayCount + 1;
        this._syncData = new SyncData();
        this._syncData.frameSyncData.actionId = actionId;
        this._syncData.frameSyncData.hasReplayCount = replayCount;
    };
    SyncDataManagerClass._instance = null;
    return SyncDataManagerClass;
}());
exports.SyncDataManager = SyncDataManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFN5bmNEYXRhTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0dBRUc7OztBQUVILDJFQUEwRTtBQUMxRSw4RUFBNkU7QUFDN0UsNEVBQTJFO0FBRTNFOzs7R0FHRztBQUNIO0lBQUE7UUFDVyxlQUFVLEdBQVEsSUFBSSxDQUFDLENBQUMsT0FBTztRQUMvQixtQkFBYyxHQUFtQixJQUFJLCtCQUFjLEVBQUUsQ0FBQyxDQUFDLFVBQVU7UUFDakUsa0JBQWEsR0FBa0IsSUFBSSw2QkFBYSxFQUFFLENBQUMsQ0FBQyxXQUFXO0lBQzFFLENBQUM7SUFBRCxlQUFDO0FBQUQsQ0FKQSxBQUlDLElBQUE7QUFKWSw0QkFBUTtBQUtyQjtJQUFBO1FBVUksV0FBVztRQUNILGNBQVMsR0FBYSxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBZ0NqRCxDQUFDO0lBeENpQixnQ0FBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7U0FDL0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQUlELHNCQUFXLDBDQUFRO2FBR25CO1lBQ0ksT0FBTyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQzthQUxELFVBQW9CLElBQWM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixDQUFDOzs7T0FBQTtJQUtNLDJDQUFZLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxHQUFHLDZCQUFhLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDeEQsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixJQUFjO1FBQzdCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBTSxHQUFiO1FBQ0ksSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDO1FBQ3ZELElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztJQUM5RCxDQUFDO0lBekNjLDhCQUFTLEdBQXlCLElBQUksQ0FBQztJQTBDMUQsMkJBQUM7Q0EzQ0QsQUEyQ0MsSUFBQTtBQUVZLFFBQUEsZUFBZSxHQUFHLG9CQUFvQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDlkIzmraXmlbDmja5cbiAqL1xuXG5pbXBvcnQgeyBGcmFtZVN5bmNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9EYXRhL0ZyYW1lU3luY0RhdGEnO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IEN1c3RvbVN5bmNEYXRhIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ3VzdG9tU3luY0RhdGEnO1xuXG4vKipcbiAqIOmcgOimgeWQjOatpeeahOaVsOaNrlxuICog6Ieq5a6a5LmJ5pWw5o2u5LiN6KaB5Zyo6L+Z6YeM5a6e546w77yM6K+35ZyoIEN1c3RvbVN5bmNEYXRhIOS4reWunueOsFxuICovXG5leHBvcnQgY2xhc3MgU3luY0RhdGEge1xuICAgIHB1YmxpYyByZXBvcnREYXRhOiBhbnkgPSBudWxsOyAvLyDkuIrmiqXmlbDmja5cbiAgICBwdWJsaWMgY3VzdG9tU3luY0RhdGE6IEN1c3RvbVN5bmNEYXRhID0gbmV3IEN1c3RvbVN5bmNEYXRhKCk7IC8vIOiHquWumuS5ieWQjOatpeaVsOaNrlxuICAgIHB1YmxpYyBmcmFtZVN5bmNEYXRhOiBGcmFtZVN5bmNEYXRhID0gbmV3IEZyYW1lU3luY0RhdGEoKTsgLy8g5qGG5p625Lit55qE5ZCM5q2l5pWw5o2uXG59XG5jbGFzcyBTeW5jRGF0YU1hbmFnZXJDbGFzcyB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBTeW5jRGF0YU1hbmFnZXJDbGFzcyA9IG51bGw7XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldEluc3RhbmNlKCk6IFN5bmNEYXRhTWFuYWdlckNsYXNzIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBTeW5jRGF0YU1hbmFnZXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiog5ZCM5q2l5pWw5o2uICovXG4gICAgcHJpdmF0ZSBfc3luY0RhdGE6IFN5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgcHVibGljIHNldCBzeW5jRGF0YShkYXRhOiBTeW5jRGF0YSkge1xuICAgICAgICB0aGlzLnNldFN5bmNEYXRhKGRhdGEpO1xuICAgIH1cbiAgICBwdWJsaWMgZ2V0IHN5bmNEYXRhKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRTeW5jRGF0YSgpO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0U3luY0RhdGEoKSB7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgfVxuXG4gICAgcHVibGljIGdldFN5bmNEYXRhKCk6IFN5bmNEYXRhIHtcbiAgICAgICAgdGhpcy5fc3luY0RhdGEucmVwb3J0RGF0YSA9IFJlcG9ydE1hbmFnZXIuZ2V0U3luY0RhdGEoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N5bmNEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBzZXRTeW5jRGF0YShkYXRhOiBTeW5jRGF0YSkge1xuICAgICAgICB0aGlzLl9zeW5jRGF0YSA9IGRhdGE7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIuc2V0U3luY0RhdGEoZGF0YS5yZXBvcnREYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43njqlcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGF5KCkge1xuICAgICAgICBjb25zdCBhY3Rpb25JZCA9IHRoaXMuX3N5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQ7XG4gICAgICAgIGNvbnN0IHJlcGxheUNvdW50ID0gdGhpcy5fc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5oYXNSZXBsYXlDb3VudCArIDE7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhID0gbmV3IFN5bmNEYXRhKCk7XG4gICAgICAgIHRoaXMuX3N5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSBhY3Rpb25JZDtcbiAgICAgICAgdGhpcy5fc3luY0RhdGEuZnJhbWVTeW5jRGF0YS5oYXNSZXBsYXlDb3VudCA9IHJlcGxheUNvdW50O1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFN5bmNEYXRhTWFuYWdlciA9IFN5bmNEYXRhTWFuYWdlckNsYXNzLmdldEluc3RhbmNlKCk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BindNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '65374G80ONGaJ+/vbcxCejv', 'BindNode');
// frame/scripts/UI/BindNode.ts

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
var ccclass = cc._decorator.ccclass;
var BindNode = /** @class */ (function (_super) {
    __extends(BindNode, _super);
    function BindNode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BindNode_1 = BindNode;
    BindNode.prototype.__preload = function () {
        this.bindNode(this.node, this);
    };
    //遍历全部节点，绑定节点名字（重名的只会绑定第一个符合条件的节点）
    BindNode.prototype.bindNode = function (node, target) {
        if (!node || !target) {
            return;
        }
        var _nameTag = '_'; //名字以 '_' 开头的节点才会被绑定
        var nodeList = [node];
        var i = 0;
        while (node) {
            var nodeName = node.name;
            if (_nameTag === nodeName[0] && !target[nodeName]) {
                target[nodeName] = node;
                // cc.log('bindNode:  ', nodeName);
            }
            var bindComp = node.getComponent(BindNode_1);
            if (0 === i || !bindComp) {
                nodeList = nodeList.concat(node.children); //节点有脚本继承了BindNode，就不再绑定其子节点
            }
            node = nodeList[++i];
        }
    };
    var BindNode_1;
    BindNode = BindNode_1 = __decorate([
        ccclass
    ], BindNode);
    return BindNode;
}(cc.Component));
exports.default = BindNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCaW5kTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBUSxJQUFBLE9BQU8sR0FBSyxFQUFFLENBQUMsVUFBVSxRQUFsQixDQUFtQjtBQUdsQztJQUFzQyw0QkFBWTtJQUFsRDs7SUE4QkEsQ0FBQztpQkE5Qm9CLFFBQVE7SUFDekIsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQWtDO0lBQ2xDLDJCQUFRLEdBQVIsVUFBUyxJQUFhLEVBQUUsTUFBVztRQUMvQixJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU87U0FDVjtRQUVELElBQUksUUFBUSxHQUFXLEdBQUcsQ0FBQyxDQUFDLG9CQUFvQjtRQUVoRCxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNWLE9BQU8sSUFBSSxFQUFFO1lBQ1QsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN6QixJQUFJLFFBQVEsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLG1DQUFtQzthQUN0QztZQUVELElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBUSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUN0QixRQUFRLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyw0QkFBNEI7YUFDMUU7WUFFRCxJQUFJLEdBQUcsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDeEI7SUFDTCxDQUFDOztJQTdCZ0IsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQThCNUI7SUFBRCxlQUFDO0NBOUJELEFBOEJDLENBOUJxQyxFQUFFLENBQUMsU0FBUyxHQThCakQ7a0JBOUJvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzIH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmluZE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIF9fcHJlbG9hZCgpIHtcbiAgICAgICAgdGhpcy5iaW5kTm9kZSh0aGlzLm5vZGUsIHRoaXMpO1xuICAgIH1cblxuICAgIC8v6YGN5Y6G5YWo6YOo6IqC54K577yM57uR5a6a6IqC54K55ZCN5a2X77yI6YeN5ZCN55qE5Y+q5Lya57uR5a6a56ys5LiA5Liq56ym5ZCI5p2h5Lu255qE6IqC54K577yJXG4gICAgYmluZE5vZGUobm9kZTogY2MuTm9kZSwgdGFyZ2V0OiBhbnkpIHtcbiAgICAgICAgaWYgKCFub2RlIHx8ICF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBfbmFtZVRhZzogc3RyaW5nID0gJ18nOyAvL+WQjeWtl+S7pSAnXycg5byA5aS055qE6IqC54K55omN5Lya6KKr57uR5a6aXG5cbiAgICAgICAgbGV0IG5vZGVMaXN0ID0gW25vZGVdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBsZXQgbm9kZU5hbWUgPSBub2RlLm5hbWU7XG4gICAgICAgICAgICBpZiAoX25hbWVUYWcgPT09IG5vZGVOYW1lWzBdICYmICF0YXJnZXRbbm9kZU5hbWVdKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W25vZGVOYW1lXSA9IG5vZGU7XG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCdiaW5kTm9kZTogICcsIG5vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYmluZENvbXAgPSBub2RlLmdldENvbXBvbmVudChCaW5kTm9kZSk7XG4gICAgICAgICAgICBpZiAoMCA9PT0gaSB8fCAhYmluZENvbXApIHtcbiAgICAgICAgICAgICAgICBub2RlTGlzdCA9IG5vZGVMaXN0LmNvbmNhdChub2RlLmNoaWxkcmVuKTsgLy/oioLngrnmnInohJrmnKznu6fmib/kuoZCaW5kTm9kZe+8jOWwseS4jeWGjee7keWumuWFtuWtkOiKgueCuVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub2RlID0gbm9kZUxpc3RbKytpXTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/SDK/T2M.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a7e393z1URF/Jne7MDcTxH+', 'T2M');
// frame/scripts/SDK/T2M.ts

"use strict";
/**
 * v2.2
 * Author: jinhailiang
 * Email: jinhailiang@tal.com
 * update-1.0: 2020_04_05:构建
 * update-1.1: 2020_10_29:用数组管理reducer，便于多个组件之间进行事件传输；
 * update-1.2: 2020_12_08:添加心跳同步和动作验证；
 * update-2.0: 2021_03_19:代码重构：核心功能解藕-此版本专注于实现游戏异步事件的管理；
 *              1.结构优化-更改API，用户可以按使用单机游戏事件管理器的方式使用此模块。
 *              2.通过增加待运行的事件队列解决偶现的动作执行错序问题。
 *              3.去除心跳同步，心跳同步作为普通异步事件的特例留给用户自定义。
 *              4.去除网络导致的动作错序验证，上层网络导致的动作错序和丢失问题 1）留给心跳同步解决 2）需对上层网络协议重新选择或优化。
 *              5.新增网络堵塞时，抛弃非关键数据功能。
 * update-2.1: 2021_04_06:无论是否同步操作方都直接调用回调函数；
 * update-2.2: 2021_04_07:去除action上携带的时间戳及关键数据标记，接收端通过update依次执行队列中的action，避免使用settimeout出现事件队列阻塞的问题；
 *
 * detail: T2M(type to method)用来管理数据同步，派发action时执行相应的方法。借助此模块，用户可以用开发单机游戏的方式开发同步游戏；
 * 跟开发单机游戏的区别：
 * 1. 反应速度-单机游戏是即时反应，同步游戏需要等一段时间，这段时间包括本模块为降低发送频率所设计的50ms的缓存时间和网络传输消耗的时间。
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.T2M = exports.T2MClass = exports.SendData = exports.Action = void 0;
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var ListenerManager_1 = require("../Manager/ListenerManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIHelp_1 = require("../Utils/UIHelp");
var GameMsg_1 = require("./GameMsg");
var Action = /** @class */ (function () {
    function Action() {
        this.type = '';
        this.syncData = JSON.parse(JSON.stringify(SyncDataManager_1.SyncDataManager.getSyncData()));
        this.data = null;
    }
    return Action;
}());
exports.Action = Action;
var SendData = /** @class */ (function () {
    function SendData(isHeartBreak, data) {
        this.isHeartBreak = false;
        this.data = [];
        this.isHeartBreak = isHeartBreak || false;
        this.data = data || [];
    }
    return SendData;
}());
exports.SendData = SendData;
var T2MClass = /** @class */ (function () {
    function T2MClass() {
        this._map = new Map();
        this._isSync = false;
        this._isInit = false;
        this._cacheList = [];
        this._waitRunActionList = [];
        this._sendTime = 0;
        this._lastEventTime = 0;
        this.isRecover = false;
        this._heartCount = 0;
        this._heartInterval = 1000;
        this._fastHeartCount = 4;
    }
    T2MClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new T2MClass();
        }
        return this._instance;
    };
    /**
     * 初始化：gamemsg注册监听事件，初始化发送时间
     */
    T2MClass.prototype.init = function () {
        this.setSync(NetWork_1.NetWork.isSync);
        if (!this._isInit) {
            GameMsg_1.default.recv_sync_data(this.actionSyncHandler.bind(this));
            // GameMsg.recv_sync_3s_data(this.onHeartBreakHandler.bind(this));
            this._lastSendTime = Date.now();
            this.addSyncEventListener(FrameMsgType_1.FrameMsgType.ON_HEART_BREAK, this.onHeartBreak.bind(this));
            this.setFastHeartBreakState();
            this._isInit = true;
            GameMsg_1.default.request_sync_init();
        }
    };
    T2MClass.prototype.onReturnToTeacherPanel = function () {
        this._isSync = false;
    };
    /**
     * 设置是否派发同步事件
     * @param isSync  为true时发送同步事件，否则发送单机事件
     */
    T2MClass.prototype.setSync = function (isSync) {
        this._isSync = isSync;
    };
    /**
     * 为事件类型注册监听器
     * @param type  监听的事件类型
     * @param listener  监听器回调函数
     */
    T2MClass.prototype.addSyncEventListener = function (type, listener) {
        this._map.set(type, listener);
    };
    /**
     * 移除事件监听
     * @param type  事件类型
     */
    T2MClass.prototype.removeSyncEventListener = function (type) {
        if (this._map.has(type)) {
            this._map.delete(type);
        }
    };
    /**
     * 派发事件，接收端接收到事件后会触发对应的回调函数
     * @param type  事件类型
     * @param data  发送的数据
     * @param addCache  是否放入缓存。当设置为true时，会将派发的事件放入一个缓存队列中，等一段时间后统一发送；当设置为false时，会立即派发。拖拽事件建议设置为true。
     */
    T2MClass.prototype.dispatch = function (type, data, addCache) {
        if (addCache === void 0) { addCache = true; }
        var syncAction = new Action();
        syncAction.type = type;
        syncAction.data = data;
        if (this._isSync) {
            if (FrameMsgType_1.FrameMsgType.ON_HEART_BREAK === type) {
                var sendData = new SendData(true, [syncAction]);
                GameMsg_1.default.send_sync_data(sendData);
            }
            else {
                // 非心跳事件不发全量数据
                syncAction.syncData = null;
                if (addCache) {
                    this._cacheList.push(syncAction);
                }
                else {
                    var sendData = new SendData(false, [syncAction]);
                    GameMsg_1.default.send_sync_data(sendData);
                }
            }
            this._sendTime = Date.now();
        }
        else {
            if (this._map.has(type)) {
                if (FrameMsgType_1.FrameMsgType.ON_HEART_BREAK !== type) {
                    this._map.get(type)(data);
                }
            }
            else {
                console.log("Listener type is null! type = " + type);
            }
        }
    };
    /**
     * 监听心跳
     * @param data
     */
    T2MClass.prototype.onHeartBreak = function (data) {
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId !== data.frameSyncData.actionId) {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, data);
        }
        if (!this.isRecover) {
            this.isRecover = true;
            UIHelp_1.UIHelp.closeRecoverMask();
            // -999为接着玩预留字段，取消接着玩时不发送 ON_FIRST_BREAK 事件
            if (-999 !== data.frameSyncData.actionId) {
                ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_FIRST_BREAK, null);
            }
            // 检测心跳数据量，过大给提醒
            var dataStr = JSON.stringify(data);
            console.log('SyncData length: ', dataStr.length);
            if (dataStr.length > 1024 * 5) {
                console.warn('心跳数据量过大！ dataStr.length: ', dataStr.length);
            }
        }
    };
    /**
     * 1.发送端通过心跳发送缓存事件，每隔一段时间(50ms)发送一次缓存队列；
     * 2.接受端执行待执行缓存队列中的action；
     * 3.使用时需要在组件的update周期函数中调用此函数；
     */
    T2MClass.prototype.update = function () {
        if (!this._isInit)
            return;
        this.sendSyncEvent();
        this.sendHeartBreak();
        this.runActions();
    };
    /**
     * 发送事件
     */
    T2MClass.prototype.sendSyncEvent = function () {
        if (Date.now() - this._lastSendTime >= 50) {
            if (this._cacheList.length > 0) {
                var sendData = new SendData(false, this._cacheList);
                GameMsg_1.default.send_sync_data(sendData);
                this._cacheList = [];
                this._sendTime = Date.now();
            }
            this._lastSendTime = Date.now();
        }
    };
    T2MClass.prototype.setFastHeartBreakState = function () {
        this._sendTime = 0;
        this._heartCount = 0;
        this._heartInterval = 1000;
    };
    /**
     * 发送心跳包
     */
    T2MClass.prototype.sendHeartBreak = function () {
        if (Date.now() - this._sendTime > this._heartInterval && (NetWork_1.NetWork.isSupportKeepPlay || NetWork_1.NetWork.isMaster)) {
            // const syncData = SyncDataManager.getSyncData();
            this.dispatch(FrameMsgType_1.FrameMsgType.ON_HEART_BREAK, null, false);
            this._sendTime = Date.now();
            ++this._heartCount;
            if (this._fastHeartCount === this._heartCount) {
                this._heartInterval = 3000;
            }
            cc.log('sendHeartBreak');
        }
    };
    /**
     * 接受端接收到数据时的回调
     */
    T2MClass.prototype.actionSyncHandler = function (data) {
        var actions = data.data.data;
        // 重新玩或接着玩时，如果播放器拿不到心跳数据，会发一个内容为null的心跳
        if (!actions) {
            var tmpAction = new Action();
            tmpAction.type = FrameMsgType_1.FrameMsgType.ON_HEART_BREAK;
            actions = [tmpAction];
            data.data.data = actions;
            this.onHeartBreakHandler(data);
            return;
        }
        if (1 === actions.length && FrameMsgType_1.FrameMsgType.ON_HEART_BREAK === actions[0].type) {
            if (!NetWork_1.NetWork.isMaster) {
                this.onHeartBreakHandler(data);
            }
            return;
        }
        // 接着玩兼容旧端 学生端接收到第一次心跳后才处理同步事件
        if (NetWork_1.NetWork.isSupportKeepPlay || NetWork_1.NetWork.isMaster || this.isRecover) {
            if (this._waitRunActionList.length == 0) {
                this._waitRunActionList = __spreadArrays(actions);
            }
            else {
                this._waitRunActionList = __spreadArrays(this._waitRunActionList, actions);
            }
            this._lastEventTime = Date.now();
        }
    };
    /**
     *
     * @param data 接收心跳数据
     */
    T2MClass.prototype.onHeartBreakHandler = function (data) {
        var actions = data.data.data;
        // 收到操作事件2S内不处理心跳（防止旧的心跳数据覆盖当前状态）
        if (Date.now() - this._lastEventTime > 2000) {
            if (this._waitRunActionList.length == 0) {
                this._waitRunActionList = __spreadArrays(actions);
            }
            else {
                this._waitRunActionList = __spreadArrays(this._waitRunActionList, actions);
            }
        }
    };
    /**
     * 依次运行缓存中的action
     */
    T2MClass.prototype.runActions = function () {
        var waitRunActionsNum = this._waitRunActionList.length;
        if (waitRunActionsNum > 0) {
            var updateTime = Date.now() - this._lastUpdateTime;
            var minEnterTimePerAction = 7;
            var maxNeedRunActionNum = Math.floor(updateTime / minEnterTimePerAction);
            var runNum = Math.min(waitRunActionsNum, maxNeedRunActionNum);
            var action = this._waitRunActionList[0];
            if (FrameMsgType_1.FrameMsgType.ON_HEART_BREAK !== action.type) {
                for (var i = 0; i < runNum; i++) {
                    var action_1 = this._waitRunActionList.shift();
                    if (this._map.has(action_1.type)) {
                        this._map.get(action_1.type)(action_1.data);
                    }
                    ++SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId;
                }
            }
            else {
                this._waitRunActionList.shift();
                this._map.get(action.type)(action.syncData);
            }
        }
        this._lastUpdateTime = Date.now();
    };
    T2MClass._instance = null;
    return T2MClass;
}());
exports.T2MClass = T2MClass;
exports.T2M = T2MClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFNES1xcVDJNLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW1CRzs7Ozs7Ozs7OztBQUVILHFEQUFvRDtBQUNwRCwyQ0FBMEM7QUFDMUMsOERBQTZEO0FBRTdELDhEQUF1RTtBQUN2RSwwQ0FBeUM7QUFDekMscUNBQWdDO0FBRWhDO0lBQUE7UUFDSSxTQUFJLEdBQVcsRUFBRSxDQUFDO1FBQ2xCLGFBQVEsR0FBYSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0UsU0FBSSxHQUFRLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQUQsYUFBQztBQUFELENBSkEsQUFJQyxJQUFBO0FBSlksd0JBQU07QUFNbkI7SUFJSSxrQkFBWSxZQUFzQixFQUFFLElBQWU7UUFIbkQsaUJBQVksR0FBWSxLQUFLLENBQUM7UUFDOUIsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUdoQixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksSUFBSSxLQUFLLENBQUM7UUFDMUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFSWSw0QkFBUTtBQVVyQjtJQUFBO1FBR1ksU0FBSSxHQUEwQixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ3hDLFlBQU8sR0FBWSxLQUFLLENBQUM7UUFDekIsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUN6QixlQUFVLEdBQWtCLEVBQUUsQ0FBQztRQUcvQix1QkFBa0IsR0FBa0IsRUFBRSxDQUFDO1FBQ3ZDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDNUIsY0FBUyxHQUFZLEtBQUssQ0FBQztRQUMxQixnQkFBVyxH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dEMsQ0FBQztJQXBRYyxrQkFBUyxHQUFhLElBQUksQ0FBQztJQXFROUMsZUFBQztDQXRRRCxBQXNRQyxJQUFBO0FBdFFZLDRCQUFRO0FBd1FSLFFBQUEsR0FBRyxHQUFHLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogdjIuMlxuICogQXV0aG9yOiBqaW5oYWlsaWFuZ1xuICogRW1haWw6IGppbmhhaWxpYW5nQHRhbC5jb21cbiAqIHVwZGF0ZS0xLjA6IDIwMjBfMDRfMDU65p6E5bu6XG4gKiB1cGRhdGUtMS4xOiAyMDIwXzEwXzI5OueUqOaVsOe7hOeuoeeQhnJlZHVjZXLvvIzkvr/kuo7lpJrkuKrnu4Tku7bkuYvpl7Tov5vooYzkuovku7bkvKDovpPvvJtcbiAqIHVwZGF0ZS0xLjI6IDIwMjBfMTJfMDg65re75Yqg5b+D6Lez5ZCM5q2l5ZKM5Yqo5L2c6aqM6K+B77ybXG4gKiB1cGRhdGUtMi4wOiAyMDIxXzAzXzE5OuS7o+eggemHjeaehO+8muaguOW/g+WKn+iDveino+iXlS3mraTniYjmnKzkuJPms6jkuo7lrp7njrDmuLjmiI/lvILmraXkuovku7bnmoTnrqHnkIbvvJtcbiAqICAgICAgICAgICAgICAxLue7k+aehOS8mOWMli3mm7TmlLlBUEnvvIznlKjmiLflj6/ku6XmjInkvb/nlKjljZXmnLrmuLjmiI/kuovku7bnrqHnkIblmajnmoTmlrnlvI/kvb/nlKjmraTmqKHlnZfjgIJcbiAqICAgICAgICAgICAgICAyLumAmui/h+WinuWKoOW+hei/kOihjOeahOS6i+S7tumYn+WIl+ino+WGs+WBtueOsOeahOWKqOS9nOaJp+ihjOmUmeW6j+mXrumimOOAglxuICogICAgICAgICAgICAgIDMu5Y676Zmk5b+D6Lez5ZCM5q2l77yM5b+D6Lez5ZCM5q2l5L2c5Li65pmu6YCa5byC5q2l5LqL5Lu255qE54m55L6L55WZ57uZ55So5oi36Ieq5a6a5LmJ44CCXG4gKiAgICAgICAgICAgICAgNC7ljrvpmaTnvZHnu5zlr7zoh7TnmoTliqjkvZzplJnluo/pqozor4HvvIzkuIrlsYLnvZHnu5zlr7zoh7TnmoTliqjkvZzplJnluo/lkozkuKLlpLHpl67popggMe+8ieeVmee7meW/g+i3s+WQjOatpeino+WGsyAy77yJ6ZyA5a+55LiK5bGC572R57uc5Y2P6K6u6YeN5paw6YCJ5oup5oiW5LyY5YyW44CCXG4gKiAgICAgICAgICAgICAgNS7mlrDlop7nvZHnu5zloLXloZ7ml7bvvIzmipvlvIPpnZ7lhbPplK7mlbDmja7lip/og73jgIJcbiAqIHVwZGF0ZS0yLjE6IDIwMjFfMDRfMDY65peg6K665piv5ZCm5ZCM5q2l5pON5L2c5pa56YO955u05o6l6LCD55So5Zue6LCD5Ye95pWw77ybXG4gKiB1cGRhdGUtMi4yOiAyMDIxXzA0XzA3OuWOu+mZpGFjdGlvbuS4iuaQuuW4pueahOaXtumXtOaIs+WPiuWFs+mUruaVsOaNruagh+iusO+8jOaOpeaUtuerr+mAmui/h3VwZGF0ZeS+neasoeaJp+ihjOmYn+WIl+S4reeahGFjdGlvbu+8jOmBv+WFjeS9v+eUqHNldHRpbWVvdXTlh7rnjrDkuovku7bpmJ/liJfpmLvloZ7nmoTpl67popjvvJtcbiAqXG4gKiBkZXRhaWw6IFQyTSh0eXBlIHRvIG1ldGhvZCnnlKjmnaXnrqHnkIbmlbDmja7lkIzmraXvvIzmtL7lj5FhY3Rpb27ml7bmiafooYznm7jlupTnmoTmlrnms5XjgILlgJ/liqnmraTmqKHlnZfvvIznlKjmiLflj6/ku6XnlKjlvIDlj5HljZXmnLrmuLjmiI/nmoTmlrnlvI/lvIDlj5HlkIzmraXmuLjmiI/vvJtcbiAqIOi3n+W8gOWPkeWNleacuua4uOaIj+eahOWMuuWIq++8mlxuICogMS4g5Y+N5bqU6YCf5bqmLeWNleacuua4uOaIj+aYr+WNs+aXtuWPjeW6lO+8jOWQjOatpea4uOaIj+mcgOimgeetieS4gOauteaXtumXtO+8jOi/meauteaXtumXtOWMheaLrOacrOaooeWdl+S4uumZjeS9juWPkemAgemikeeOh+aJgOiuvuiuoeeahDUwbXPnmoTnvJPlrZjml7bpl7TlkoznvZHnu5zkvKDovpPmtojogJfnmoTml7bpl7TjgIJcbiAqL1xuXG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuL0dhbWVNc2cnO1xuXG5leHBvcnQgY2xhc3MgQWN0aW9uIHtcbiAgICB0eXBlOiBzdHJpbmcgPSAnJztcbiAgICBzeW5jRGF0YTogU3luY0RhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpKSk7XG4gICAgZGF0YTogYW55ID0gbnVsbDtcbn1cblxuZXhwb3J0IGNsYXNzIFNlbmREYXRhIHtcbiAgICBpc0hlYXJ0QnJlYWs6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBkYXRhOiBBY3Rpb25bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoaXNIZWFydEJyZWFrPzogYm9vbGVhbiwgZGF0YT86IEFjdGlvbltdKSB7XG4gICAgICAgIHRoaXMuaXNIZWFydEJyZWFrID0gaXNIZWFydEJyZWFrIHx8IGZhbHNlO1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhIHx8IFtdO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFQyTUNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IFQyTUNsYXNzID0gbnVsbDtcblxuICAgIHByaXZhdGUgX21hcDogTWFwPHN0cmluZywgRnVuY3Rpb24+ID0gbmV3IE1hcCgpO1xuICAgIHByaXZhdGUgX2lzU3luYzogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2lzSW5pdDogQm9vbGVhbiA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NhY2hlTGlzdDogQXJyYXk8QWN0aW9uPiA9IFtdO1xuICAgIHByaXZhdGUgX2xhc3RTZW5kVGltZTogbnVtYmVyO1xuICAgIHByaXZhdGUgX2xhc3RVcGRhdGVUaW1lOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfd2FpdFJ1bkFjdGlvbkxpc3Q6IEFycmF5PEFjdGlvbj4gPSBbXTtcbiAgICBwcml2YXRlIF9zZW5kVGltZTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIF9sYXN0RXZlbnRUaW1lOiBudW1iZXIgPSAwO1xuICAgIHB1YmxpYyBpc1JlY292ZXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIF9oZWFydENvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgX2hlYXJ0SW50ZXJ2YWw6IG51bWJlciA9IDEwMDA7XG4gICAgcHJpdmF0ZSByZWFkb25seSBfZmFzdEhlYXJ0Q291bnQgPSA0O1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IFQyTUNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMlu+8mmdhbWVtc2fms6jlhoznm5HlkKzkuovku7bvvIzliJ3lp4vljJblj5HpgIHml7bpl7RcbiAgICAgKi9cbiAgICBwdWJsaWMgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5zZXRTeW5jKE5ldFdvcmsuaXNTeW5jKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc0luaXQpIHtcbiAgICAgICAgICAgIEdhbWVNc2cucmVjdl9zeW5jX2RhdGEodGhpcy5hY3Rpb25TeW5jSGFuZGxlci5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIC8vIEdhbWVNc2cucmVjdl9zeW5jXzNzX2RhdGEodGhpcy5vbkhlYXJ0QnJlYWtIYW5kbGVyLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgdGhpcy5fbGFzdFNlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIHRoaXMuYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLLCB0aGlzLm9uSGVhcnRCcmVhay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy5faXNJbml0ID0gdHJ1ZTtcbiAgICAgICAgICAgIEdhbWVNc2cucmVxdWVzdF9zeW5jX2luaXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblJldHVyblRvVGVhY2hlclBhbmVsKCkge1xuICAgICAgICB0aGlzLl9pc1N5bmMgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDorr7nva7mmK/lkKbmtL7lj5HlkIzmraXkuovku7ZcbiAgICAgKiBAcGFyYW0gaXNTeW5jICDkuLp0cnVl5pe25Y+R6YCB5ZCM5q2l5LqL5Lu277yM5ZCm5YiZ5Y+R6YCB5Y2V5py65LqL5Lu2XG4gICAgICovXG4gICAgcHVibGljIHNldFN5bmMoaXNTeW5jOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuX2lzU3luYyA9IGlzU3luYztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkuLrkuovku7bnsbvlnovms6jlhoznm5HlkKzlmahcbiAgICAgKiBAcGFyYW0gdHlwZSAg55uR5ZCs55qE5LqL5Lu257G75Z6LXG4gICAgICogQHBhcmFtIGxpc3RlbmVyICDnm5HlkKzlmajlm57osIPlh73mlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgYWRkU3luY0V2ZW50TGlzdGVuZXIodHlwZTogc3RyaW5nLCBsaXN0ZW5lcjogRnVuY3Rpb24pIHtcbiAgICAgICAgdGhpcy5fbWFwLnNldCh0eXBlLCBsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog56e76Zmk5LqL5Lu255uR5ZCsXG4gICAgICogQHBhcmFtIHR5cGUgIOS6i+S7tuexu+Wei1xuICAgICAqL1xuICAgIHB1YmxpYyByZW1vdmVTeW5jRXZlbnRMaXN0ZW5lcih0eXBlOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX21hcC5oYXModHlwZSkpIHtcbiAgICAgICAgICAgIHRoaXMuX21hcC5kZWxldGUodHlwZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmtL7lj5Hkuovku7bvvIzmjqXmlLbnq6/mjqXmlLbliLDkuovku7blkI7kvJrop6blj5Hlr7nlupTnmoTlm57osIPlh73mlbBcbiAgICAgKiBAcGFyYW0gdHlwZSAg5LqL5Lu257G75Z6LXG4gICAgICogQHBhcmFtIGRhdGEgIOWPkemAgeeahOaVsOaNrlxuICAgICAqIEBwYXJhbSBhZGRDYWNoZSAg5piv5ZCm5pS+5YWl57yT5a2Y44CC5b2T6K6+572u5Li6dHJ1ZeaXtu+8jOS8muWwhua0vuWPkeeahOS6i+S7tuaUvuWFpeS4gOS4que8k+WtmOmYn+WIl+S4re+8jOetieS4gOauteaXtumXtOWQjue7n+S4gOWPkemAge+8m+W9k+iuvue9ruS4umZhbHNl5pe277yM5Lya56uL5Y2z5rS+5Y+R44CC5ouW5ou95LqL5Lu25bu66K6u6K6+572u5Li6dHJ1ZeOAglxuICAgICAqL1xuICAgIHB1YmxpYyBkaXNwYXRjaCh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSwgYWRkQ2FjaGU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGxldCBzeW5jQWN0aW9uID0gbmV3IEFjdGlvbigpO1xuICAgICAgICBzeW5jQWN0aW9uLnR5cGUgPSB0eXBlO1xuICAgICAgICBzeW5jQWN0aW9uLmRhdGEgPSBkYXRhO1xuICAgICAgICBpZiAodGhpcy5faXNTeW5jKSB7XG4gICAgICAgICAgICBpZiAoRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKHRydWUsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgICAgICAgICAgR2FtZU1zZy5zZW5kX3N5bmNfZGF0YShzZW5kRGF0YSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOmdnuW/g+i3s+S6i+S7tuS4jeWPkeWFqOmHj+aVsOaNrlxuICAgICAgICAgICAgICAgIHN5bmNBY3Rpb24uc3luY0RhdGEgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChhZGRDYWNoZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYWNoZUxpc3QucHVzaChzeW5jQWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSBuZXcgU2VuZERhdGEoZmFsc2UsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgICAgICAgICAgICAgIEdhbWVNc2cuc2VuZF9zeW5jX2RhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX3NlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9tYXAuaGFzKHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKEZyYW1lTXNnVHlwZS5PTl9IRUFSVF9CUkVBSyAhPT0gdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXAuZ2V0KHR5cGUpKGRhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYExpc3RlbmVyIHR5cGUgaXMgbnVsbCEgdHlwZSA9ICR7dHlwZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOW/g+i3s1xuICAgICAqIEBwYXJhbSBkYXRhXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkhlYXJ0QnJlYWsoZGF0YTogU3luY0RhdGEpIHtcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmFjdGlvbklkICE9PSBkYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQpIHtcbiAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fUkVDT1ZFUllfREFUQSwgZGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuaXNSZWNvdmVyKSB7XG4gICAgICAgICAgICB0aGlzLmlzUmVjb3ZlciA9IHRydWU7XG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VSZWNvdmVyTWFzaygpO1xuXG4gICAgICAgICAgICAvLyAtOTk55Li65o6l552A546p6aKE55WZ5a2X5q6177yM5Y+W5raI5o6l552A546p5pe25LiN5Y+R6YCBIE9OX0ZJUlNUX0JSRUFLIOS6i+S7tlxuICAgICAgICAgICAgaWYgKC05OTkgIT09IGRhdGEuZnJhbWVTeW5jRGF0YS5hY3Rpb25JZCkge1xuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fRklSU1RfQlJFQUssIG51bGwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDmo4DmtYvlv4Pot7PmlbDmja7ph4/vvIzov4flpKfnu5nmj5DphpJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFTdHIgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTeW5jRGF0YSBsZW5ndGg6ICcsIGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIGlmIChkYXRhU3RyLmxlbmd0aCA+IDEwMjQgKiA1KSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCflv4Pot7PmlbDmja7ph4/ov4flpKfvvIEgZGF0YVN0ci5sZW5ndGg6ICcsIGRhdGFTdHIubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIDEu5Y+R6YCB56uv6YCa6L+H5b+D6Lez5Y+R6YCB57yT5a2Y5LqL5Lu277yM5q+P6ZqU5LiA5q615pe26Ze0KDUwbXMp5Y+R6YCB5LiA5qyh57yT5a2Y6Zif5YiX77ybXG4gICAgICogMi7mjqXlj5fnq6/miafooYzlvoXmiafooYznvJPlrZjpmJ/liJfkuK3nmoRhY3Rpb27vvJtcbiAgICAgKiAzLuS9v+eUqOaXtumcgOimgeWcqOe7hOS7tueahHVwZGF0ZeWRqOacn+WHveaVsOS4reiwg+eUqOatpOWHveaVsO+8m1xuICAgICAqL1xuICAgIHB1YmxpYyB1cGRhdGUoKSB7XG4gICAgICAgIGlmICghdGhpcy5faXNJbml0KSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5zZW5kU3luY0V2ZW50KCk7XG4gICAgICAgIHRoaXMuc2VuZEhlYXJ0QnJlYWsoKTtcbiAgICAgICAgdGhpcy5ydW5BY3Rpb25zKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5LqL5Lu2XG4gICAgICovXG4gICAgcHJpdmF0ZSBzZW5kU3luY0V2ZW50KCkge1xuICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIHRoaXMuX2xhc3RTZW5kVGltZSA+PSA1MCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2NhY2hlTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKGZhbHNlLCB0aGlzLl9jYWNoZUxpc3QpO1xuICAgICAgICAgICAgICAgIEdhbWVNc2cuc2VuZF9zeW5jX2RhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhY2hlTGlzdCA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NlbmRUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2xhc3RTZW5kVGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpIHtcbiAgICAgICAgdGhpcy5fc2VuZFRpbWUgPSAwO1xuICAgICAgICB0aGlzLl9oZWFydENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5faGVhcnRJbnRlcnZhbCA9IDEwMDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+R6YCB5b+D6Lez5YyFXG4gICAgICovXG4gICAgcHJpdmF0ZSBzZW5kSGVhcnRCcmVhaygpIHtcbiAgICAgICAgaWYgKERhdGUubm93KCkgLSB0aGlzLl9zZW5kVGltZSA+IHRoaXMuX2hlYXJ0SW50ZXJ2YWwgJiYgKE5ldFdvcmsuaXNTdXBwb3J0S2VlcFBsYXkgfHwgTmV0V29yay5pc01hc3RlcikpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHN5bmNEYXRhID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCk7XG4gICAgICAgICAgICB0aGlzLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9IRUFSVF9CUkVBSywgbnVsbCwgZmFsc2UpO1xuICAgICAgICAgICAgdGhpcy5fc2VuZFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgKyt0aGlzLl9oZWFydENvdW50O1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Zhc3RIZWFydENvdW50ID09PSB0aGlzLl9oZWFydENvdW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faGVhcnRJbnRlcnZhbCA9IDMwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5sb2coJ3NlbmRIZWFydEJyZWFrJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmjqXlj5fnq6/mjqXmlLbliLDmlbDmja7ml7bnmoTlm57osINcbiAgICAgKi9cbiAgICBwcml2YXRlIGFjdGlvblN5bmNIYW5kbGVyKGRhdGE6IGFueSkge1xuICAgICAgICBsZXQgYWN0aW9ucyA9IGRhdGEuZGF0YS5kYXRhO1xuXG4gICAgICAgIC8vIOmHjeaWsOeOqeaIluaOpeedgOeOqeaXtu+8jOWmguaenOaSreaUvuWZqOaLv+S4jeWIsOW/g+i3s+aVsOaNru+8jOS8muWPkeS4gOS4quWGheWuueS4um51bGznmoTlv4Pot7NcbiAgICAgICAgaWYgKCFhY3Rpb25zKSB7XG4gICAgICAgICAgICBsZXQgdG1wQWN0aW9uID0gbmV3IEFjdGlvbigpO1xuICAgICAgICAgICAgdG1wQWN0aW9uLnR5cGUgPSBGcmFtZU1zZ1R5cGUuT05fSEVBUlRfQlJFQUs7XG4gICAgICAgICAgICBhY3Rpb25zID0gW3RtcEFjdGlvbl07XG4gICAgICAgICAgICBkYXRhLmRhdGEuZGF0YSA9IGFjdGlvbnM7XG4gICAgICAgICAgICB0aGlzLm9uSGVhcnRCcmVha0hhbmRsZXIoZGF0YSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoMSA9PT0gYWN0aW9ucy5sZW5ndGggJiYgRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLID09PSBhY3Rpb25zWzBdLnR5cGUpIHtcbiAgICAgICAgICAgIGlmICghTmV0V29yay5pc01hc3Rlcikge1xuICAgICAgICAgICAgICAgIHRoaXMub25IZWFydEJyZWFrSGFuZGxlcihkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOaOpeedgOeOqeWFvOWuueaXp+erryDlrabnlJ/nq6/mjqXmlLbliLDnrKzkuIDmrKHlv4Pot7PlkI7miY3lpITnkIblkIzmraXkuovku7ZcbiAgICAgICAgaWYgKE5ldFdvcmsuaXNTdXBwb3J0S2VlcFBsYXkgfHwgTmV0V29yay5pc01hc3RlciB8fCB0aGlzLmlzUmVjb3Zlcikge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0Lmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fd2FpdFJ1bkFjdGlvbkxpc3QgPSBbLi4uYWN0aW9uc107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0ID0gWy4uLnRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0LCAuLi5hY3Rpb25zXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2xhc3RFdmVudFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICpcbiAgICAgKiBAcGFyYW0gZGF0YSDmjqXmlLblv4Pot7PmlbDmja5cbiAgICAgKi9cbiAgICBwcml2YXRlIG9uSGVhcnRCcmVha0hhbmRsZXIoZGF0YTogYW55KSB7XG4gICAgICAgIGxldCBhY3Rpb25zID0gZGF0YS5kYXRhLmRhdGE7XG4gICAgICAgIC8vIOaUtuWIsOaTjeS9nOS6i+S7tjJT5YaF5LiN5aSE55CG5b+D6Lez77yI6Ziy5q2i5pen55qE5b+D6Lez5pWw5o2u6KaG55uW5b2T5YmN54q25oCB77yJXG4gICAgICAgIGlmIChEYXRlLm5vdygpIC0gdGhpcy5fbGFzdEV2ZW50VGltZSA+IDIwMDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl93YWl0UnVuQWN0aW9uTGlzdC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0ID0gWy4uLmFjdGlvbnNdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWl0UnVuQWN0aW9uTGlzdCA9IFsuLi50aGlzLl93YWl0UnVuQWN0aW9uTGlzdCwgLi4uYWN0aW9uc107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvp3mrKHov5DooYznvJPlrZjkuK3nmoRhY3Rpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHJ1bkFjdGlvbnMoKSB7XG4gICAgICAgIGxldCB3YWl0UnVuQWN0aW9uc051bSA9IHRoaXMuX3dhaXRSdW5BY3Rpb25MaXN0Lmxlbmd0aDtcbiAgICAgICAgaWYgKHdhaXRSdW5BY3Rpb25zTnVtID4gMCkge1xuICAgICAgICAgICAgbGV0IHVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpIC0gdGhpcy5fbGFzdFVwZGF0ZVRpbWU7XG4gICAgICAgICAgICBsZXQgbWluRW50ZXJUaW1lUGVyQWN0aW9uID0gNztcbiAgICAgICAgICAgIGxldCBtYXhOZWVkUnVuQWN0aW9uTnVtID0gTWF0aC5mbG9vcih1cGRhdGVUaW1lIC8gbWluRW50ZXJUaW1lUGVyQWN0aW9uKTtcbiAgICAgICAgICAgIGxldCBydW5OdW0gPSBNYXRoLm1pbih3YWl0UnVuQWN0aW9uc051bSwgbWF4TmVlZFJ1bkFjdGlvbk51bSk7XG4gICAgICAgICAgICBsZXQgYWN0aW9uID0gdGhpcy5fd2FpdFJ1bkFjdGlvbkxpc3RbMF07XG4gICAgICAgICAgICBpZiAoRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLICE9PSBhY3Rpb24udHlwZSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcnVuTnVtOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbjogQWN0aW9uID0gdGhpcy5fd2FpdFJ1bkFjdGlvbkxpc3Quc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbWFwLmhhcyhhY3Rpb24udHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcC5nZXQoYWN0aW9uLnR5cGUpKGFjdGlvbi5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICsrU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl93YWl0UnVuQWN0aW9uTGlzdC5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX21hcC5nZXQoYWN0aW9uLnR5cGUpKGFjdGlvbi5zeW5jRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGFzdFVwZGF0ZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IFQyTSA9IFQyTUNsYXNzLmdldEluc3RhbmNlKCk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6fa1aRp8dNq6gX3GwD9kTX', 'BaseFrameUI');
// frame/scripts/UI/BaseFrameUI.ts

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
var FrameConstValue_1 = require("../Data/FrameConstValue");
var BaseUI_1 = require("./BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseFrameUI = /** @class */ (function (_super) {
    __extends(BaseFrameUI, _super);
    function BaseFrameUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseFrameUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.FRAME_PREFAB_PANEL_DIR + this.className;
    };
    BaseFrameUI.isFramePanel = true;
    BaseFrameUI = __decorate([
        ccclass
    ], BaseFrameUI);
    return BaseFrameUI;
}(BaseUI_1.BaseUI));
exports.default = BaseFrameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCYXNlRnJhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyREFBMEQ7QUFDMUQsbUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlDLCtCQUFNO0lBQS9DOztJQU9BLENBQUM7SUFKaUIsa0JBQU0sR0FBcEI7UUFDSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN2QixPQUFPLGlDQUFlLENBQUMsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUNuRSxDQUFDO0lBTGEsd0JBQVksR0FBWSxJQUFJLENBQUM7SUFEMUIsV0FBVztRQUQvQixPQUFPO09BQ2EsV0FBVyxDQU8vQjtJQUFELGtCQUFDO0NBUEQsQUFPQyxDQVB3QyxlQUFNLEdBTzlDO2tCQVBvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVDb25zdFZhbHVlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZUNvbnN0VmFsdWUnO1xuaW1wb3J0IHsgQmFzZVVJIH0gZnJvbSAnLi9CYXNlVUknO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZUZyYW1lVUkgZXh0ZW5kcyBCYXNlVUkge1xuICAgIHB1YmxpYyBzdGF0aWMgaXNGcmFtZVBhbmVsOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0VXJsKCk6IHN0cmluZyB7XG4gICAgICAgIGNjLmxvZyh0aGlzLmNsYXNzTmFtZSk7XG4gICAgICAgIHJldHVybiBGcmFtZUNvbnN0VmFsdWUuRlJBTUVfUFJFRkFCX1BBTkVMX0RJUiArIHRoaXMuY2xhc3NOYW1lO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/BaseUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c6da4j3MGhPfIxwls9tY6iS', 'BaseUI');
// frame/scripts/UI/BaseUI.ts

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
exports.BaseUI = void 0;
var FrameConstValue_1 = require("../Data/FrameConstValue");
var ListenerManager_1 = require("../Manager/ListenerManager");
var BindNode_1 = require("./BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseUI = /** @class */ (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(BaseUI.prototype, "data", {
        get: function () {
            return this.mData;
        },
        set: function (value) {
            this.mData = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseUI.prototype, "tag", {
        get: function () {
            return this.mTag;
        },
        set: function (value) {
            this.mTag = value;
        },
        enumerable: false,
        configurable: true
    });
    BaseUI.getUrl = function () {
        cc.log(this.className);
        return FrameConstValue_1.FrameConstValue.PREFAB_PANEL_DIR + this.className;
    };
    BaseUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.removeAll(this);
    };
    BaseUI.prototype.onShow = function () {
        cc.log('BaseUI onShow');
    };
    BaseUI.className = 'BaseUI';
    BaseUI.isFramePanel = false;
    BaseUI = __decorate([
        ccclass
    ], BaseUI);
    return BaseUI;
}(BindNode_1.default));
exports.BaseUI = BaseUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxCYXNlVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUEwRDtBQUMxRCw4REFBNkQ7QUFDN0QsdUNBQWtDO0FBUzVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXFDLDBCQUFRO0lBQTdDOztJQStCQSxDQUFDO0lBM0JHLHNCQUFXLHdCQUFJO2FBQWY7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzthQUVELFVBQWdCLEtBQVU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFNRCxzQkFBVyx1QkFBRzthQUFkO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7YUFDRCxVQUFlLEtBQVU7WUFDckIsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BSEE7SUFLYSxhQUFNLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxpQ0FBZSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDN0QsQ0FBQztJQUVELDBCQUFTLEdBQVQ7UUFDSSxpQ0FBZSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsdUJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQTdCYSxnQkFBUyxHQUFHLFFBQVEsQ0FBQztJQUNyQixtQkFBWSxHQUFZLEtBQUssQ0FBQztJQUYxQixNQUFNO1FBRDNCLE9BQU87T0FDYyxNQUFNLENBK0IzQjtJQUFELGFBQUM7Q0EvQkQsQUErQkMsQ0EvQm9DLGtCQUFRLEdBK0I1QztBQS9CcUIsd0JBQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZUNvbnN0VmFsdWUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgQmluZE5vZGUgZnJvbSAnLi9CaW5kTm9kZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgVUlDbGFzczxUIGV4dGVuZHMgQmFzZVVJPiB7XG4gICAgbmV3ICgpOiBUO1xuICAgIGdldFVybCgpOiBzdHJpbmc7XG4gICAgaXNGcmFtZVBhbmVsOiBib29sZWFuO1xuICAgIGNsYXNzTmFtZTogc3RyaW5nO1xufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVUkgZXh0ZW5kcyBCaW5kTm9kZSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnQmFzZVVJJztcbiAgICBwdWJsaWMgc3RhdGljIGlzRnJhbWVQYW5lbDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIHByb3RlY3RlZCBtRGF0YTogYW55O1xuICAgIHB1YmxpYyBnZXQgZGF0YSgpOiBhbnkge1xuICAgICAgICByZXR1cm4gdGhpcy5tRGF0YTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2V0IGRhdGEodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1EYXRhID0gdmFsdWU7XG4gICAgfVxuICAgIHByb3RlY3RlZCBtVGFnOiBhbnk7XG4gICAgcHVibGljIGdldCB0YWcoKTogYW55IHtcbiAgICAgICAgcmV0dXJuIHRoaXMubVRhZztcbiAgICB9XG4gICAgcHVibGljIHNldCB0YWcodmFsdWU6IGFueSkge1xuICAgICAgICB0aGlzLm1UYWcgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIGdldFVybCgpOiBzdHJpbmcge1xuICAgICAgICBjYy5sb2codGhpcy5jbGFzc05hbWUpO1xuICAgICAgICByZXR1cm4gRnJhbWVDb25zdFZhbHVlLlBSRUZBQl9QQU5FTF9ESVIgKyB0aGlzLmNsYXNzTmFtZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5yZW1vdmVBbGwodGhpcyk7XG4gICAgfVxuXG4gICAgb25TaG93KCkge1xuICAgICAgICBjYy5sb2coJ0Jhc2VVSSBvblNob3cnKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/GameMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'df13ad6CdtFhp9uucAXsIC/', 'GameMain');
// frame/scripts/UI/GameMain.ts

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
exports.GameMain = void 0;
var EditorManager_1 = require("../../../game/scripts/Manager/EditorManager");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var NetWork_1 = require("../Http/NetWork");
var ListenerManager_1 = require("../Manager/ListenerManager");
var ReportManager_1 = require("../Manager/ReportManager");
var SoundManager_1 = require("../Manager/SoundManager");
var SyncDataManager_1 = require("../Manager/SyncDataManager");
var UIManager_1 = require("../Manager/UIManager");
var GameMsg_1 = require("../SDK/GameMsg");
var T2M_1 = require("../SDK/T2M");
var UIHelp_1 = require("../Utils/UIHelp");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
// 开启抗锯齿
cc.macro.ENABLE_WEBGL_ANTIALIAS = true;
var GameMain = /** @class */ (function (_super) {
    __extends(GameMain, _super);
    function GameMain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameMain.prototype.onLoad = function () {
        var loading = document.getElementById('loading-full');
        if (loading) {
            loading.style.display = 'none';
        }
        cc.macro.ENABLE_MULTI_TOUCH = false;
        this.addSDKEventListener();
        GameMsg_1.default.get_is_preload(NetWork_1.NetWork.setIsPreload);
        GameMsg_1.default.get_is_sync(NetWork_1.NetWork.setIsSync);
        GameMsg_1.default.get_role(NetWork_1.NetWork.setIsTeacher);
        GameMsg_1.default.get_is_supportKeepAndRestart(NetWork_1.NetWork.setIsSupportKeepPlay);
    };
    GameMain.prototype.addSDKEventListener = function () {
        GameMsg_1.default.recv_show_gamePanel(this.onReceiveGameShow.bind(this));
        GameMsg_1.default.recv_hide_gamePanel(this.onReceiveGameHide.bind(this));
        GameMsg_1.default.recv_keep_playing(this.onReceiveKeepPlaying.bind(this));
        GameMsg_1.default.recv_cancel_keep_playing(this.onReceiveCancellKeepPlaying.bind(this));
        GameMsg_1.default.recv_restart(this.onReceiveRestart.bind(this));
        GameMsg_1.default.recv_is_master(this.onReceiveIsMaster.bind(this));
        //发送准备就绪，可以接收消息了
        GameMsg_1.default.request_event_ready();
    };
    /**
     * 监听接着玩
     */
    GameMain.prototype.onReceiveKeepPlaying = function () {
        console.log('onReceiveKeepPlaying');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        //发送接着玩数据
        var syncAction = new T2M_1.Action();
        syncAction.type = FrameMsgType_1.FrameMsgType.ON_HEART_BREAK;
        // syncAction.syncData.frameSyncData.actionId = -1;
        var sendData = new T2M_1.SendData(true, [syncAction]);
        GameMsg_1.default.request_keep_playing(sendData);
        // UIHelp.showRecoverMask();
    };
    /**
     * 监听取消接着玩
     */
    GameMain.prototype.onReceiveCancellKeepPlaying = function () {
        console.log('onReceiveCancellKeepPlaying');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        T2M_1.T2M.setFastHeartBreakState();
    };
    /**
     * 监听重新玩
     */
    GameMain.prototype.onReceiveRestart = function () {
        console.log('onReceiveRestart');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        //发送重新玩成功回调
        GameMsg_1.default.request_restart_over();
        UIManager_1.UIManager.closeAllUI();
        SoundManager_1.SoundManager.stopAll();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.showGamePanel();
        });
    };
    /**
     * 监听窗口打开
     */
    GameMain.prototype.onReceiveGameShow = function () {
        console.log('onReceiveGameShow');
        if (UIManager_1.UIManager.isGameShowing)
            return;
        UIManager_1.UIManager.isGameShowing = true;
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW);
    };
    /**
     * 监听窗口关闭
     */
    GameMain.prototype.onReceiveGameHide = function () {
        console.log('onReceiveGameHide');
        if (!UIManager_1.UIManager.isGameShowing)
            return;
        UIManager_1.UIManager.isGameShowing = false;
        UIManager_1.UIManager.closeAllUI();
        SoundManager_1.SoundManager.stopAll();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        T2M_1.T2M.isRecover = false;
        this.scheduleOnce(function () {
            UIHelp_1.UIHelp.showGamePanel();
        });
    };
    /**
     * 监听是否为主动发送心跳的一端
     */
    GameMain.prototype.onReceiveIsMaster = function (data) {
        NetWork_1.NetWork.isMaster = data.data;
        if (!NetWork_1.NetWork.isMaster) {
            T2M_1.T2M.isRecover = false;
            UIHelp_1.UIHelp.showRecoverMask();
            if (0 !== SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId) {
                SyncDataManager_1.SyncDataManager.syncData.frameSyncData.actionId = -999;
            }
        }
        else {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        console.log("onReceiveIsMaster isMaster: " + NetWork_1.NetWork.isMaster);
    };
    GameMain = __decorate([
        ccclass
    ], GameMain);
    return GameMain;
}(cc.Component));
exports.GameMain = GameMain;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxHYW1lTWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkVBQTRFO0FBQzVFLHFEQUFvRDtBQUNwRCwyQ0FBMEM7QUFDMUMsOERBQTZEO0FBQzdELDBEQUF5RDtBQUN6RCx3REFBdUQ7QUFDdkQsOERBQXVFO0FBQ3ZFLGtEQUFpRDtBQUNqRCwwQ0FBcUM7QUFDckMsa0NBQW1EO0FBQ25ELDBDQUF5QztBQUVuQyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QyxRQUFRO0FBQ1IsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUM7QUFFdkM7SUFBOEIsNEJBQVk7SUFBMUM7O0lBcUhBLENBQUM7SUFwSEcseUJBQU0sR0FBTjtRQUNJLElBQUksT0FBTyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxPQUFPLEVBQUU7WUFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDbEM7UUFDRCxFQUFFLENBQUMsS0FBSyxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztRQUVwQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixpQkFBTyxDQUFDLGNBQWMsQ0FBQyxpQkFBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzdDLGlCQUFPLENBQUMsV0FBVyxDQUFDLGlCQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkMsaUJBQU8sQ0FBQyxRQUFRLENBQUMsaUJBQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN2QyxpQkFBTyxDQUFDLDRCQUE0QixDQUFDLGlCQUFPLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsc0NBQW1CLEdBQW5C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YW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCB7IEFjdGlvbiwgU2VuZERhdGEsIFQyTSB9IGZyb20gJy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vVXRpbHMvVUlIZWxwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLy8g5byA5ZCv5oqX6ZSv6b2/XG5jYy5tYWNyby5FTkFCTEVfV0VCR0xfQU5USUFMSUFTID0gdHJ1ZTtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgR2FtZU1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgbGV0IGxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9hZGluZy1mdWxsJyk7XG4gICAgICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgICAgICBsb2FkaW5nLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgY2MubWFjcm8uRU5BQkxFX01VTFRJX1RPVUNIID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5hZGRTREtFdmVudExpc3RlbmVyKCk7XG4gICAgICAgIEdhbWVNc2cuZ2V0X2lzX3ByZWxvYWQoTmV0V29yay5zZXRJc1ByZWxvYWQpO1xuICAgICAgICBHYW1lTXNnLmdldF9pc19zeW5jKE5ldFdvcmsuc2V0SXNTeW5jKTtcbiAgICAgICAgR2FtZU1zZy5nZXRfcm9sZShOZXRXb3JrLnNldElzVGVhY2hlcik7XG4gICAgICAgIEdhbWVNc2cuZ2V0X2lzX3N1cHBvcnRLZWVwQW5kUmVzdGFydChOZXRXb3JrLnNldElzU3VwcG9ydEtlZXBQbGF5KTtcbiAgICB9XG5cbiAgICBhZGRTREtFdmVudExpc3RlbmVyKCkge1xuICAgICAgICBHYW1lTXNnLnJlY3Zfc2hvd19nYW1lUGFuZWwodGhpcy5vblJlY2VpdmVHYW1lU2hvdy5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2hpZGVfZ2FtZVBhbmVsKHRoaXMub25SZWNlaXZlR2FtZUhpZGUuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cucmVjdl9rZWVwX3BsYXlpbmcodGhpcy5vblJlY2VpdmVLZWVwUGxheWluZy5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2NhbmNlbF9rZWVwX3BsYXlpbmcodGhpcy5vblJlY2VpdmVDYW5jZWxsS2VlcFBsYXlpbmcuYmluZCh0aGlzKSk7XG4gICAgICAgIEdhbWVNc2cucmVjdl9yZXN0YXJ0KHRoaXMub25SZWNlaXZlUmVzdGFydC5iaW5kKHRoaXMpKTtcbiAgICAgICAgR2FtZU1zZy5yZWN2X2lzX21hc3Rlcih0aGlzLm9uUmVjZWl2ZUlzTWFzdGVyLmJpbmQodGhpcykpO1xuICAgICAgICAvL+WPkemAgeWHhuWkh+Wwsee7qu+8jOWPr+S7peaOpeaUtua2iOaBr+S6hlxuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfZXZlbnRfcmVhZHkoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnm5HlkKzmjqXnnYDnjqlcbiAgICAgKi9cbiAgICBvblJlY2VpdmVLZWVwUGxheWluZygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ29uUmVjZWl2ZUtlZXBQbGF5aW5nJyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICAvL+WPkemAgeaOpeedgOeOqeaVsOaNrlxuICAgICAgICBsZXQgc3luY0FjdGlvbiA9IG5ldyBBY3Rpb24oKTtcbiAgICAgICAgc3luY0FjdGlvbi50eXBlID0gRnJhbWVNc2dUeXBlLk9OX0hFQVJUX0JSRUFLO1xuICAgICAgICAvLyBzeW5jQWN0aW9uLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSAtMTtcbiAgICAgICAgbGV0IHNlbmREYXRhID0gbmV3IFNlbmREYXRhKHRydWUsIFtzeW5jQWN0aW9uXSk7XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9rZWVwX3BsYXlpbmcoc2VuZERhdGEpO1xuICAgICAgICAvLyBVSUhlbHAuc2hvd1JlY292ZXJNYXNrKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5Y+W5raI5o6l552A546pXG4gICAgICovXG4gICAgb25SZWNlaXZlQ2FuY2VsbEtlZXBQbGF5aW5nKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25SZWNlaXZlQ2FuY2VsbEtlZXBQbGF5aW5nJyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICBUMk0uc2V0RmFzdEhlYXJ0QnJlYWtTdGF0ZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOmHjeaWsOeOqVxuICAgICAqL1xuICAgIG9uUmVjZWl2ZVJlc3RhcnQoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlY2VpdmVSZXN0YXJ0Jyk7XG4gICAgICAgIGlmICghVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICAvL+WPkemAgemHjeaWsOeOqeaIkOWKn+Wbnuiwg1xuICAgICAgICBHYW1lTXNnLnJlcXVlc3RfcmVzdGFydF9vdmVyKCk7XG4gICAgICAgIFVJTWFuYWdlci5jbG9zZUFsbFVJKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5pbml0UmVwb3J0RGF0YShFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSk7XG5cbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dHYW1lUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs56qX5Y+j5omT5byAXG4gICAgICovXG4gICAgb25SZWNlaXZlR2FtZVNob3coKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdvblJlY2VpdmVHYW1lU2hvdycpO1xuICAgICAgICBpZiAoVUlNYW5hZ2VyLmlzR2FtZVNob3dpbmcpIHJldHVybjtcblxuICAgICAgICBVSU1hbmFnZXIuaXNHYW1lU2hvd2luZyA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuUFJFTE9BRF9HQU1FX1NIT1cpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOebkeWQrOeql+WPo+WFs+mXrVxuICAgICAqL1xuICAgIG9uUmVjZWl2ZUdhbWVIaWRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnb25SZWNlaXZlR2FtZUhpZGUnKTtcbiAgICAgICAgaWYgKCFVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykgcmV0dXJuO1xuXG4gICAgICAgIFVJTWFuYWdlci5pc0dhbWVTaG93aW5nID0gZmFsc2U7XG4gICAgICAgIFVJTWFuYWdlci5jbG9zZUFsbFVJKCk7XG4gICAgICAgIFNvdW5kTWFuYWdlci5zdG9wQWxsKCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5pbml0U3luY0RhdGEoKTtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5pbml0UmVwb3J0RGF0YShFZGl0b3JNYW5hZ2VyLmdldExldmVsQ291bnQoKSk7XG4gICAgICAgIFQyTS5pc1JlY292ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dHYW1lUGFuZWwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog55uR5ZCs5piv5ZCm5Li65Li75Yqo5Y+R6YCB5b+D6Lez55qE5LiA56uvXG4gICAgICovXG4gICAgb25SZWNlaXZlSXNNYXN0ZXIoZGF0YTogYW55KSB7XG4gICAgICAgIE5ldFdvcmsuaXNNYXN0ZXIgPSBkYXRhLmRhdGE7XG4gICAgICAgIGlmICghTmV0V29yay5pc01hc3Rlcikge1xuICAgICAgICAgICAgVDJNLmlzUmVjb3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dSZWNvdmVyTWFzaygpO1xuICAgICAgICAgICAgaWYgKDAgIT09IFN5bmNEYXRhTWFuYWdlci5zeW5jRGF0YS5mcmFtZVN5bmNEYXRhLmFjdGlvbklkKSB7XG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuYWN0aW9uSWQgPSAtOTk5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlUmVjb3Zlck1hc2soKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBvblJlY2VpdmVJc01hc3RlciBpc01hc3RlcjogJHtOZXRXb3JrLmlzTWFzdGVyfWApO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c61c0OGRkxGBqEB0icrBo6y', 'MaskRecover');
// frame/scripts/UI/Item/MaskRecover.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var UIManager_1 = require("../../Manager/UIManager");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskRecover = /** @class */ (function (_super) {
    __extends(MaskRecover, _super);
    function MaskRecover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_mask = null;
        _this._nd_loading = null;
        _this.isShowLoading = false;
        return _this;
    }
    MaskRecover.prototype.onLoad = function () {
        //设置最层级
        this.node.zIndex = UIManager_1.EPANEL_ZORDER.MASK;
    };
    MaskRecover.prototype.start = function () {
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.MASK_RECOVER, this.onMask, this);
        this._nd_loading.active = false;
        this._nd_mask.active = false;
    };
    MaskRecover.prototype.onMask = function (isState) {
        this._nd_mask.active = isState;
    };
    MaskRecover = __decorate([
        ccclass
    ], MaskRecover);
    return MaskRecover;
}(BindNode_1.default));
exports.default = MaskRecover;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNYXNrUmVjb3Zlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx3REFBdUQ7QUFDdkQsaUVBQWdFO0FBQ2hFLHFEQUF3RDtBQUV4RCx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBeUMsK0JBQVE7SUFBakQ7UUFBQSxxRUFtQkM7UUFsQlUsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFnQjFDLENBQUM7SUFkRyw0QkFBTSxHQUFOO1FBQ0ksT0FBTztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLHlCQUFhLENBQUMsSUFBSSxDQUFDO0lBQzFDLENBQUM7SUFFRCwyQkFBSyxHQUFMO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ2pDLENBQUM7SUFFRCw0QkFBTSxHQUFOLFVBQU8sT0FBZ0I7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO0lBQ25DLENBQUM7SUFsQmdCLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtQi9CO0lBQUQsa0JBQUM7Q0FuQkQsQUFtQkMsQ0FuQndDLGtCQUFRLEdBbUJoRDtrQkFuQm9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBFUEFORUxfWk9SREVSIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCBCaW5kTm9kZSBmcm9tICcuLi9CaW5kTm9kZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYXNrUmVjb3ZlciBleHRlbmRzIEJpbmROb2RlIHtcbiAgICBwdWJsaWMgX25kX21hc2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBfbmRfbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG4gICAgcHVibGljIGlzU2hvd0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/orr7nva7mnIDlsYLnuqdcbiAgICAgICAgdGhpcy5ub2RlLnpJbmRleCA9IEVQQU5FTF9aT1JERVIuTUFTSztcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIHRoaXMub25NYXNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmRfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1hc2soaXNTdGF0ZTogYm9vbGVhbikge1xuICAgICAgICB0aGlzLl9uZF9tYXNrLmFjdGl2ZSA9IGlzU3RhdGU7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b276fOW8MRNTqj/bpy0hngz', 'TitleNode');
// frame/scripts/UI/Item/TitleNode.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TitileNode = /** @class */ (function (_super) {
    __extends(TitileNode, _super);
    function TitileNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bianJiLabel = null;
        _this.jianYanLabel = null;
        _this.tiaoNode = null;
        _this.heiSe = cc.color(0, 0, 0);
        _this.huiSe = cc.color(127, 127, 127);
        return _this;
    }
    TitileNode.prototype.start = function () {
        this.bianJiLabel.node.color = this.heiSe;
        this.jianYanLabel.node.color = this.huiSe;
        this.tiaoNode.color = this.huiSe;
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, this.onStateSwitching, this);
    };
    TitileNode.prototype.onStateSwitching = function (state) {
        if (0 === state) {
            this.jianYanLabel.node.color = this.huiSe;
            this.tiaoNode.color = this.huiSe;
        }
        else {
            this.jianYanLabel.node.color = this.heiSe;
            this.tiaoNode.color = this.heiSe;
        }
    };
    __decorate([
        property(cc.Label)
    ], TitileNode.prototype, "bianJiLabel", void 0);
    __decorate([
        property(cc.Label)
    ], TitileNode.prototype, "jianYanLabel", void 0);
    __decorate([
        property(cc.Node)
    ], TitileNode.prototype, "tiaoNode", void 0);
    TitileNode = __decorate([
        ccclass
    ], TitileNode);
    return TitileNode;
}(cc.Component));
exports.default = TitileNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUaXRsZU5vZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELGlFQUFnRTtBQUUxRCxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUF3Qyw4QkFBWTtJQUFwRDtRQUFBLHFFQTJCQztRQXpCRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUU5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsV0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs7SUFrQnBDLENBQUM7SUFoQkcsMEJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDakMsaUNBQWUsQ0FBQyxFQUFFLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixLQUFhO1FBQzFCLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUNiLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEM7YUFBTTtZQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQzFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDcEM7SUFDTCxDQUFDO0lBeEJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7bURBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztvREFDVztJQUU5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNPO0lBTlIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQTJCOUI7SUFBRCxpQkFBQztDQTNCRCxBQTJCQyxDQTNCdUMsRUFBRSxDQUFDLFNBQVMsR0EyQm5EO2tCQTNCb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpdGlsZU5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBiaWFuSmlMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBqaWFuWWFuTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICB0aWFvTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBoZWlTZSA9IGNjLmNvbG9yKDAsIDAsIDApO1xuICAgIGh1aVNlID0gY2MuY29sb3IoMTI3LCAxMjcsIDEyNyk7XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy5iaWFuSmlMYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5oZWlTZTtcbiAgICAgICAgdGhpcy5qaWFuWWFuTGFiZWwubm9kZS5jb2xvciA9IHRoaXMuaHVpU2U7XG4gICAgICAgIHRoaXMudGlhb05vZGUuY29sb3IgPSB0aGlzLmh1aVNlO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCB0aGlzLm9uU3RhdGVTd2l0Y2hpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIG9uU3RhdGVTd2l0Y2hpbmcoc3RhdGU6IG51bWJlcikge1xuICAgICAgICBpZiAoMCA9PT0gc3RhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuamlhbllhbkxhYmVsLm5vZGUuY29sb3IgPSB0aGlzLmh1aVNlO1xuICAgICAgICAgICAgdGhpcy50aWFvTm9kZS5jb2xvciA9IHRoaXMuaHVpU2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmppYW5ZYW5MYWJlbC5ub2RlLmNvbG9yID0gdGhpcy5oZWlTZTtcbiAgICAgICAgICAgIHRoaXMudGlhb05vZGUuY29sb3IgPSB0aGlzLmhlaVNlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba00bud/zlDiY6tClWPdHIa', 'AdaptiveScreen');
// frame/scripts/UI/AdaptiveScreen.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 自适应代码
 */
var AdaptiveScreen = /** @class */ (function (_super) {
    __extends(AdaptiveScreen, _super);
    function AdaptiveScreen() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * 全屏背景图片，用于自适应
         */
        _this.bgNode = null;
        /**舞台设计宽度 */
        _this.viewWidth = 640;
        /**舞台设计高度 */
        _this.viewHeight = 1136;
        return _this;
        // update (dt) {}
    }
    AdaptiveScreen.prototype.onLoad = function () {
        this.screenAdapter();
    };
    AdaptiveScreen.prototype.start = function () {
        this.viewUp();
    };
    /**
     * 自适应
     */
    AdaptiveScreen.prototype.screenAdapter = function () {
        if (cc.Canvas.instance) {
            this.stage = cc.Canvas.instance.node;
            var canvas = cc.Canvas.instance;
            var winSize = cc.view.getFrameSize();
            // console.log(cc.winSize);
            // console.log(cc.view.getCanvasSize());
            // console.log(cc.view.getFrameSize());
            // console.log(cc.view.getVisibleSize());
            if (winSize.width / winSize.height < canvas.designResolution.width / canvas.designResolution.height) {
                canvas.fitWidth = true;
                canvas.fitHeight = false;
            }
            else {
                canvas.fitHeight = true;
                canvas.fitWidth = false;
            }
        }
    };
    AdaptiveScreen.prototype.viewUp = function () {
        var winSize = cc.winSize;
        var scaleX = winSize.width / this.viewWidth;
        var scaleY = winSize.height / this.viewHeight;
        this.bgNode.scale = 1 * Math.max(scaleX, scaleY);
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: '全屏背景图片，用于自适应',
        })
    ], AdaptiveScreen.prototype, "bgNode", void 0);
    __decorate([
        property
    ], AdaptiveScreen.prototype, "viewWidth", void 0);
    __decorate([
        property
    ], AdaptiveScreen.prototype, "viewHeight", void 0);
    AdaptiveScreen = __decorate([
        ccclass
    ], AdaptiveScreen);
    return AdaptiveScreen;
}(cc.Component));
exports.default = AdaptiveScreen;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxBZGFwdGl2ZVNjcmVlbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUM1Qzs7R0FFRztBQUVIO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBcURDO1FBcERHOztXQUVHO1FBS0gsWUFBTSxHQUFZLElBQUksQ0FBQztRQUN2QixZQUFZO1FBRUwsZUFBUyxHQUFXLEdBQUcsQ0FBQztRQUMvQixZQUFZO1FBRUwsZ0JBQVUsR0FBVyxJQUFJLENBQUM7O1FBc0NqQyxpQkFBaUI7SUFDckIsQ0FBQztJQW5DRywrQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDRCw4QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDRDs7T0FFRztJQUNJLHNDQUFhLEdBQXBCO1FBQ0ksSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztZQUNyQyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztZQUNoQyxJQUFJLE9BQU8sR0FBWSxFQUFFLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQzlDLDJCQUEyQjtZQUMzQix3Q0FBd0M7WUFDeEMsdUNBQXVDO1lBQ3ZDLHlDQUF5QztZQUN6QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pHLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2dCQUN2QixNQUFNLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUM1QjtpQkFBTTtnQkFDSCxNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDeEIsTUFBTSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7YUFDM0I7U0FDSjtJQUNMLENBQUM7SUFDRCwrQkFBTSxHQUFOO1FBQ0ksSUFBSSxPQUFPLEdBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUNsQyxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDNUMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRTlDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBM0NEO1FBSkMsUUFBUSxDQUFDO1lBQ04sSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJO1lBQ2IsT0FBTyxFQUFFLGNBQWM7U0FDMUIsQ0FBQztrREFDcUI7SUFHdkI7UUFEQyxRQUFRO3FEQUNzQjtJQUcvQjtRQURDLFFBQVE7c0RBQ3dCO0lBZGhCLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FxRGxDO0lBQUQscUJBQUM7Q0FyREQsQUFxREMsQ0FyRDJDLEVBQUUsQ0FBQyxTQUFTLEdBcUR2RDtrQkFyRG9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuLyoqXG4gKiDoh6rpgILlupTku6PnoIFcbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0aXZlU2NyZWVuIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICAvKipcbiAgICAgKiDlhajlsY/og4zmma/lm77niYfvvIznlKjkuo7oh6rpgILlupRcbiAgICAgKi9cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0eXBlOiBjYy5Ob2RlLFxuICAgICAgICB0b29sdGlwOiAn5YWo5bGP6IOM5pmv5Zu+54mH77yM55So5LqO6Ieq6YCC5bqUJyxcbiAgICB9KVxuICAgIGJnTm9kZTogY2MuTm9kZSA9IG51bGw7XG4gICAgLyoq6Iie5Y+w6K6+6K6h5a695bqmICovXG4gICAgQHByb3BlcnR5XG4gICAgcHVibGljIHZpZXdXaWR0aDogbnVtYmVyID0gNjQwO1xuICAgIC8qKuiInuWPsOiuvuiuoemrmOW6piAqL1xuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyB2aWV3SGVpZ2h0OiBudW1iZXIgPSAxMTM2O1xuXG4gICAgLyoq5b2T5YmN5Zy65pmvIOiInuWPsCAqL1xuICAgIHB1YmxpYyBzdGFnZTogY2MuTm9kZTtcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHRoaXMuc2NyZWVuQWRhcHRlcigpO1xuICAgIH1cbiAgICBzdGFydCgpIHtcbiAgICAgICAgdGhpcy52aWV3VXAoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog6Ieq6YCC5bqUXG4gICAgICovXG4gICAgcHVibGljIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGlmIChjYy5DYW52YXMuaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc3RhZ2UgPSBjYy5DYW52YXMuaW5zdGFuY2Uubm9kZTtcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBjYy5DYW52YXMuaW5zdGFuY2U7XG4gICAgICAgICAgICBsZXQgd2luU2l6ZTogY2MuU2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjYy53aW5TaXplKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnZpZXcuZ2V0Q2FudmFzU2l6ZSgpKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNjLnZpZXcuZ2V0RnJhbWVTaXplKCkpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpKTtcbiAgICAgICAgICAgIGlmICh3aW5TaXplLndpZHRoIC8gd2luU2l6ZS5oZWlnaHQgPCBjYW52YXMuZGVzaWduUmVzb2x1dGlvbi53aWR0aCAvIGNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICB2aWV3VXAoKSB7XG4gICAgICAgIGxldCB3aW5TaXplOiBjYy5TaXplID0gY2Mud2luU2l6ZTtcbiAgICAgICAgbGV0IHNjYWxlWCA9IHdpblNpemUud2lkdGggLyB0aGlzLnZpZXdXaWR0aDtcbiAgICAgICAgbGV0IHNjYWxlWSA9IHdpblNpemUuaGVpZ2h0IC8gdGhpcy52aWV3SGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuYmdOb2RlLnNjYWxlID0gMSAqIE1hdGgubWF4KHNjYWxlWCwgc2NhbGVZKTtcbiAgICB9XG4gICAgLy8gdXBkYXRlIChkdCkge31cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/Tip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c7373SoEY5LDIC2BLTSmOq3', 'Tip');
// frame/scripts/UI/Item/Tip.ts

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
exports.Tip = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tip = /** @class */ (function (_super) {
    __extends(Tip, _super);
    function Tip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.neiRongNode = null;
        _this.tipLabel = null;
        _this.ready = true;
        return _this;
    }
    Tip.prototype.playTip = function (message) {
        var _this = this;
        this.neiRongNode.active = true;
        this.node.stopAllActions();
        this.ready = false;
        this.tipLabel.string = message;
        this.reset();
        cc.tween(this.node)
            .delay(1)
            .to(0.5, { y: 128, opacity: 0 })
            .call(function () {
            _this.ready = true;
        })
            .start();
    };
    Tip.prototype.isReady = function () {
        return this.ready;
    };
    Tip.prototype.reset = function () {
        this.node.setPosition(0, 0);
        this.node.opacity = 255;
    };
    __decorate([
        property(cc.Node)
    ], Tip.prototype, "neiRongNode", void 0);
    __decorate([
        property(cc.Label)
    ], Tip.prototype, "tipLabel", void 0);
    Tip = __decorate([
        ccclass
    ], Tip);
    return Tip;
}(cc.Component));
exports.Tip = Tip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxUaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXlCLHVCQUFZO0lBQXJDO1FBQUEscUVBZ0NDO1FBOUJXLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRzVCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFDMUIsV0FBSyxHQUFZLElBQUksQ0FBQzs7SUEwQmxDLENBQUM7SUF4QlUscUJBQU8sR0FBZCxVQUFlLE9BQWU7UUFBOUIsaUJBY0M7UUFiRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRWIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2QsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUNSLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsQ0FBQzthQUMvQixJQUFJLENBQUM7WUFDRixLQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztRQUN0QixDQUFDLENBQUM7YUFDRCxLQUFLLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRU0scUJBQU8sR0FBZDtRQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRU0sbUJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7SUFDNUIsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNrQjtJQUdwQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3lDQUNlO0lBTHpCLEdBQUc7UUFEZixPQUFPO09BQ0ssR0FBRyxDQWdDZjtJQUFELFVBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ3dCLEVBQUUsQ0FBQyxTQUFTLEdBZ0NwQztBQWhDWSxrQkFBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgVGlwIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG5laVJvbmdOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHRpcExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgcHJpdmF0ZSByZWFkeTogYm9vbGVhbiA9IHRydWU7XG5cbiAgICBwdWJsaWMgcGxheVRpcChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgdGhpcy5uZWlSb25nTm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGhpcy5yZWFkeSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRpcExhYmVsLnN0cmluZyA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICBjYy50d2Vlbih0aGlzLm5vZGUpXG4gICAgICAgICAgICAuZGVsYXkoMSlcbiAgICAgICAgICAgIC50bygwLjUsIHsgeTogMTI4LCBvcGFjaXR5OiAwIH0pXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkeSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIGlzUmVhZHkoKTogYm9vbGVhbiB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlYWR5O1xuICAgIH1cblxuICAgIHB1YmxpYyByZXNldCgpIHtcbiAgICAgICAgdGhpcy5ub2RlLnNldFBvc2l0aW9uKDAsIDApO1xuICAgICAgICB0aGlzLm5vZGUub3BhY2l0eSA9IDI1NTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d48b48sqpEdozOnbOcVCAB', 'EventType');
// game/scripts/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    // examp
    EventType["ON_BUTTON_CLICKED"] = "ON_BUTTON_CLICKED";
    EventType["ENTER_GAME"] = "ENTER_GAME";
    EventType["GAME_RECONNECT"] = "GAME_RECONNECT";
    EventType["GAME_OVER"] = "GAME_OVER";
    EventType["SUBMIT"] = "SUBMIT";
    EventType["GAME_REPLAY"] = "GAME_REPLAY";
    EventType["DRAG_ICON"] = "DRAG_ICON";
    EventType["DRAG_ICON_END"] = "DRAG_ICON_END";
    EventType["CLICK_ICON"] = "CLICK_ICON";
    //game
    EventType["CLICK_ROLE"] = "CLICK_ROLE";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQWdCWDtBQWhCRCxXQUFZLFNBQVM7SUFDakIsUUFBUTtJQUNSLG9EQUF1QyxDQUFBO0lBRXZDLHNDQUF5QixDQUFBO0lBQ3pCLDhDQUFpQyxDQUFBO0lBQ2pDLG9DQUF1QixDQUFBO0lBQ3ZCLDhCQUFpQixDQUFBO0lBQ2pCLHdDQUEyQixDQUFBO0lBRTNCLG9DQUF1QixDQUFBO0lBQ3ZCLDRDQUErQixDQUFBO0lBQy9CLHNDQUF5QixDQUFBO0lBRXpCLE1BQU07SUFDTixzQ0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBaEJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBZ0JwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6Ieq5a6a5LmJ5LqL5Lu257G75Z6LXG4gKi9cblxuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICAvLyBleGFtcFxuICAgIE9OX0JVVFRPTl9DTElDS0VEID0gJ09OX0JVVFRPTl9DTElDS0VEJyxcblxuICAgIEVOVEVSX0dBTUUgPSAnRU5URVJfR0FNRScsXG4gICAgR0FNRV9SRUNPTk5FQ1QgPSBcIkdBTUVfUkVDT05ORUNUXCIsXG4gICAgR0FNRV9PVkVSID0gXCJHQU1FX09WRVJcIixcbiAgICBTVUJNSVQgPSBcIlNVQk1JVFwiLFxuICAgIEdBTUVfUkVQTEFZID0gXCJHQU1FX1JFUExBWVwiLFxuXG4gICAgRFJBR19JQ09OID0gXCJEUkFHX0lDT05cIixcbiAgICBEUkFHX0lDT05fRU5EID0gXCJEUkFHX0lDT05fRU5EXCIsXG4gICAgQ0xJQ0tfSUNPTiA9IFwiQ0xJQ0tfSUNPTlwiLFxuXG4gICAgLy9nYW1lXG4gICAgQ0xJQ0tfUk9MRSA9IFwiQ0xJQ0tfUk9MRVwiLFxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f496fZ+e7dBKotK1z+dphJ7', 'replayBtn');
// frame/scripts/UI/Item/replayBtn.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var T2M_1 = require("../../SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var replayBtn = /** @class */ (function (_super) {
    __extends(replayBtn, _super);
    function replayBtn() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._touchEnable = true;
        return _this;
    }
    replayBtn.prototype.start = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.TOUCH_START, function () {
            if (!_this._touchEnable)
                return;
            _this.node.scale = 1.1;
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_END, function () {
            if (!_this._touchEnable)
                return;
            _this._touchEnable = false;
            _this.node.scale = 1;
            T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.REPLAY_START, null);
        }, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, function () {
            _this.node.scale = 1;
        }, this);
    };
    replayBtn.prototype.onEnable = function () {
        this._touchEnable = true;
    };
    replayBtn = __decorate([
        ccclass
    ], replayBtn);
    return replayBtn;
}(cc.Component));
exports.default = replayBtn;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxyZXBsYXlCdG4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELHFDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQW1DQztRQWxDVyxrQkFBWSxHQUFZLElBQUksQ0FBQzs7SUFrQ3pDLENBQUM7SUFqQ0cseUJBQUssR0FBTDtRQUFBLGlCQTRCQztRQTNCRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQzdCO1lBQ0ksSUFBSSxDQUFDLEtBQUksQ0FBQyxZQUFZO2dCQUFFLE9BQU87WUFDL0IsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQzFCLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUNSLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFDM0I7WUFDSSxJQUFJLENBQUMsS0FBSSxDQUFDLFlBQVk7Z0JBQUUsT0FBTztZQUMvQixLQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztZQUMxQixLQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7WUFDcEIsU0FBRyxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQ0QsSUFBSSxDQUNQLENBQUM7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FDUixFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQzlCO1lBQ0ksS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUMsRUFDRCxJQUFJLENBQ1AsQ0FBQztJQUNOLENBQUM7SUFFRCw0QkFBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7SUFDN0IsQ0FBQztJQWxDZ0IsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQW1DN0I7SUFBRCxnQkFBQztDQW5DRCxBQW1DQyxDQW5Dc0MsRUFBRSxDQUFDLFNBQVMsR0FtQ2xEO2tCQW5Db0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHJlcGxheUJ0biBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBfdG91Y2hFbmFibGU6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLm5vZGUub24oXG4gICAgICAgICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3RvdWNoRW5hYmxlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMS4xO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5fdG91Y2hFbmFibGUpIHJldHVybjtcbiAgICAgICAgICAgICAgICB0aGlzLl90b3VjaEVuYWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICAgICAgVDJNLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5SRVBMQVlfU1RBUlQsIG51bGwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5ub2RlLm9uKFxuICAgICAgICAgICAgY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDE7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgdGhpcy5fdG91Y2hFbmFibGUgPSB0cnVlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '78373xfPadEJ5IFn4sizh3z', 'ErrorPanel');
// frame/scripts/UI/Panel/ErrorPanel.ts

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
var UIHelp_1 = require("../../Utils/UIHelp");
var SoundManager_1 = require("./../../Manager/SoundManager");
var GameMsg_1 = require("./../../SDK/GameMsg");
var BaseFrameUI_1 = require("./../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ErrorPanel = /** @class */ (function (_super) {
    __extends(ErrorPanel, _super);
    function ErrorPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.biaoTi = null;
        _this.shuoMing = null;
        _this.tiShi = null;
        _this.btnLab = null;
        _this.btn = null;
        _this.isClose = false;
        return _this;
    }
    ErrorPanel.prototype.start = function () {
        // cc.director.pause();
    };
    ErrorPanel.prototype.onLoad = function () { };
    /**
     * 设置错误弹窗数据
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    ErrorPanel.prototype.setPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        if (isClose === void 0) { isClose = false; }
        var data = {
            shuoMing: shuoMing,
            biaoTi: biaoTi,
            tiShi: tiShi,
        };
        GameMsg_1.default.warn('ErrorPanelLog', data);
        SoundManager_1.SoundManager.playEffect('sfx_error', false);
        this.shuoMing.string = shuoMing;
        this.isClose = isClose;
        this.callback = callBack;
        this.biaoTi.string = biaoTi ? biaoTi : this.biaoTi.string;
        this.tiShi.string = tiShi ? tiShi : this.tiShi.string;
        this.btnLab.string = btnLab ? btnLab : this.btnLab.string;
        this.btn.interactable = this.isClose;
    };
    ErrorPanel.prototype.onBtnClick = function () {
        SoundManager_1.SoundManager.playEffect('sfx_buttn', false);
        if (this.callback) {
            this.callback();
        }
        if (this.isClose) {
            UIHelp_1.UIHelp.closeErrorPanel();
        }
    };
    ErrorPanel.className = 'ErrorPanel';
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "biaoTi", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "shuoMing", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "tiShi", void 0);
    __decorate([
        property(cc.Label)
    ], ErrorPanel.prototype, "btnLab", void 0);
    __decorate([
        property(cc.Button)
    ], ErrorPanel.prototype, "btn", void 0);
    ErrorPanel = __decorate([
        ccclass
    ], ErrorPanel);
    return ErrorPanel;
}(BaseFrameUI_1.default));
exports.default = ErrorPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcRXJyb3JQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw2Q0FBNEM7QUFDNUMsNkRBQTREO0FBQzVELCtDQUEwQztBQUMxQyxnREFBMkM7QUFFckMsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVc7SUFBbkQ7UUFBQSxxRUErREM7UUE1REcsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFhLElBQUksQ0FBQztRQUV4QixTQUFHLEdBQWMsSUFBSSxDQUFDO1FBRXRCLGFBQU8sR0FBWSxLQUFLLENBQUM7O0lBa0Q3QixDQUFDO0lBaERHLDBCQUFLLEdBQUw7UUFDSSx1QkFBdUI7SUFDM0IsQ0FBQztJQUVELDJCQUFNLEdBQU4sY0FBVSxDQUFDO0lBQ1g7Ozs7Ozs7O09BUUc7SUFDSCw2QkFBUSxHQUFSLFVBQ0ksUUFBZ0IsRUFDaEIsTUFBZSxFQUNmLEtBQWMsRUFDZCxNQUFlLEVBQ2YsUUFBbUIsRUFDbkIsT0FBd0I7UUFBeEIsd0JBQUEsRUFBQSxlQUF3QjtRQUV4QixJQUFJLElBQUksR0FBRztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsS0FBSyxFQUFFLEtBQUs7U0FDZixDQUFDO1FBRUYsaUJBQU8sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BDLDJCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1FBQzFELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUN0RCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDMUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN6QyxDQUFDO0lBRUQsK0JBQVUsR0FBVjtRQUNJLDJCQUFZLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDZixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxlQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBN0RhLG9CQUFTLEdBQUcsWUFBWSxDQUFDO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ0s7SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsyQ0FDRTtJQVhMLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0ErRDlCO0lBQUQsaUJBQUM7Q0EvREQsQUErREMsQ0EvRHVDLHFCQUFXLEdBK0RsRDtrQkEvRG9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLy4uLy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCBCYXNlRnJhbWVVSSBmcm9tICcuLy4uL0Jhc2VGcmFtZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9yUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnRXJyb3JQYW5lbCc7XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIGJpYW9UaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBzaHVvTWluZzogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICB0aVNoaTogY2MuTGFiZWwgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBidG5MYWI6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIGJ0bjogY2MuQnV0dG9uID0gbnVsbDtcblxuICAgIGlzQ2xvc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjYWxsYmFjazogRnVuY3Rpb247XG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnBhdXNlKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge31cbiAgICAvKipcbiAgICAgKiDorr7nva7plJnor6/lvLnnqpfmlbDmja5cbiAgICAgKiBAcGFyYW0gc2h1b01pbmcg6ZSZ6K+v6K+05piOXG4gICAgICogQHBhcmFtIGJpYW9UaSDmoIfpopjmloflrZdcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXG4gICAgICogQHBhcmFtIGJ0bkxhYiDmjInpkq7mloflrZdcbiAgICAgKiBAcGFyYW0gY2FsbEJhY2sg5Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXG4gICAgICovXG4gICAgc2V0UGFuZWwoXG4gICAgICAgIHNodW9NaW5nOiBzdHJpbmcsXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcbiAgICAgICAgdGlTaGk/OiBzdHJpbmcsXG4gICAgICAgIGJ0bkxhYj86IHN0cmluZyxcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcbiAgICAgICAgaXNDbG9zZTogYm9vbGVhbiA9IGZhbHNlLFxuICAgICkge1xuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIHNodW9NaW5nOiBzaHVvTWluZyxcbiAgICAgICAgICAgIGJpYW9UaTogYmlhb1RpLFxuICAgICAgICAgICAgdGlTaGk6IHRpU2hpLFxuICAgICAgICB9O1xuXG4gICAgICAgIEdhbWVNc2cud2FybignRXJyb3JQYW5lbExvZycsIGRhdGEpO1xuICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgnc2Z4X2Vycm9yJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnNodW9NaW5nLnN0cmluZyA9IHNodW9NaW5nO1xuICAgICAgICB0aGlzLmlzQ2xvc2UgPSBpc0Nsb3NlO1xuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbEJhY2s7XG4gICAgICAgIHRoaXMuYmlhb1RpLnN0cmluZyA9IGJpYW9UaSA/IGJpYW9UaSA6IHRoaXMuYmlhb1RpLnN0cmluZztcbiAgICAgICAgdGhpcy50aVNoaS5zdHJpbmcgPSB0aVNoaSA/IHRpU2hpIDogdGhpcy50aVNoaS5zdHJpbmc7XG4gICAgICAgIHRoaXMuYnRuTGFiLnN0cmluZyA9IGJ0bkxhYiA/IGJ0bkxhYiA6IHRoaXMuYnRuTGFiLnN0cmluZztcbiAgICAgICAgdGhpcy5idG4uaW50ZXJhY3RhYmxlID0gdGhpcy5pc0Nsb3NlO1xuICAgIH1cblxuICAgIG9uQnRuQ2xpY2soKSB7XG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfYnV0dG4nLCBmYWxzZSk7XG4gICAgICAgIGlmICh0aGlzLmNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXNDbG9zZSkge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlRXJyb3JQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '858970ZsXNOcpzdwRAxST5n', 'MaskGlobal');
// frame/scripts/UI/Item/MaskGlobal.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var UIManager_1 = require("../../Manager/UIManager");
var UIHelp_1 = require("../../Utils/UIHelp");
var BindNode_1 = require("../BindNode");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MaskGlobal = /** @class */ (function (_super) {
    __extends(MaskGlobal, _super);
    function MaskGlobal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._nd_mask = null;
        _this._nd_loading = null;
        _this.isShowLoading = false;
        return _this;
    }
    MaskGlobal.prototype.onLoad = function () {
        //设置最层级
        this.node.zIndex = UIManager_1.EPANEL_ZORDER.MASK;
    };
    MaskGlobal.prototype.start = function () {
        /**
         * 适用方法
         * ListenerManager.dispatch(FrameMsgType.ON_MASK,true,true);
         */
        this._nd_mask.on(cc.Node.EventType.TOUCH_START, this.on_touchStart, this);
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_MASK, this.onMask, this);
        this._nd_loading.active = false;
        this._nd_mask.active = false;
    };
    MaskGlobal.prototype.onMask = function (isState, isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        this._nd_mask.active = isState;
        this.isShowLoading = isShowLoading;
        this.SetLoading(this.isShowLoading);
    };
    MaskGlobal.prototype.on_touchStart = function () {
        if (this.isShowLoading) {
            return;
        }
        UIHelp_1.UIHelp.showTip('请稍后再操作');
    };
    MaskGlobal.prototype.SetLoading = function (isShowLoading) {
        this._nd_loading.active = isShowLoading;
    };
    MaskGlobal = __decorate([
        ccclass
    ], MaskGlobal);
    return MaskGlobal;
}(BindNode_1.default));
exports.default = MaskGlobal;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxJdGVtXFxNYXNrR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHdEQUF1RDtBQUN2RCxpRUFBZ0U7QUFDaEUscURBQXdEO0FBQ3hELDZDQUE0QztBQUM1Qyx3Q0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBd0MsOEJBQVE7SUFBaEQ7UUFBQSxxRUFxQ0M7UUFwQ1UsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUM1QixtQkFBYSxHQUFZLEtBQUssQ0FBQzs7SUFrQzFDLENBQUM7SUFoQ0csMkJBQU0sR0FBTjtRQUNJLE9BQU87UUFDUCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyx5QkFBYSxDQUFDLElBQUksQ0FBQztJQUMxQyxDQUFDO0lBRUQsMEJBQUssR0FBTDtRQUNJOzs7V0FHRztRQUNILElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLGlDQUFlLENBQUMsRUFBRSxDQUFDLDJCQUFZLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsYUFBOEI7UUFBOUIsOEJBQUEsRUFBQSxxQkFBOEI7UUFDbkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQy9CLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCxrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3BCLE9BQU87U0FDVjtRQUNELGVBQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELCtCQUFVLEdBQVYsVUFBVyxhQUFzQjtRQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7SUFDNUMsQ0FBQztJQXBDZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQXFDOUI7SUFBRCxpQkFBQztDQXJDRCxBQXFDQyxDQXJDdUMsa0JBQVEsR0FxQy9DO2tCQXJDb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IEVQQU5FTF9aT1JERVIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1VJTWFuYWdlcic7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IEJpbmROb2RlIGZyb20gJy4uL0JpbmROb2RlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hc2tHbG9iYWwgZXh0ZW5kcyBCaW5kTm9kZSB7XG4gICAgcHVibGljIF9uZF9tYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwdWJsaWMgX25kX2xvYWRpbmc6IGNjLk5vZGUgPSBudWxsO1xuICAgIHB1YmxpYyBpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v6K6+572u5pyA5bGC57qnXG4gICAgICAgIHRoaXMubm9kZS56SW5kZXggPSBFUEFORUxfWk9SREVSLk1BU0s7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDpgILnlKjmlrnms5VcbiAgICAgICAgICogTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLHRydWUsdHJ1ZSk7XG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9uZF9tYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uX3RvdWNoU3RhcnQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRoaXMub25NYXNrLCB0aGlzKTtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbmRfbWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBvbk1hc2soaXNTdGF0ZTogYm9vbGVhbiwgaXNTaG93TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuX25kX21hc2suYWN0aXZlID0gaXNTdGF0ZTtcbiAgICAgICAgdGhpcy5pc1Nob3dMb2FkaW5nID0gaXNTaG93TG9hZGluZztcbiAgICAgICAgdGhpcy5TZXRMb2FkaW5nKHRoaXMuaXNTaG93TG9hZGluZyk7XG4gICAgfVxuXG4gICAgb25fdG91Y2hTdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTaG93TG9hZGluZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFVJSGVscC5zaG93VGlwKCfor7fnqI3lkI7lho3mk43kvZwnKTtcbiAgICB9XG5cbiAgICBTZXRMb2FkaW5nKGlzU2hvd0xvYWRpbmc6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5fbmRfbG9hZGluZy5hY3RpdmUgPSBpc1Nob3dMb2FkaW5nO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd402btyepNJObcDSUkLUQcr', 'OverTips');
// frame/scripts/UI/Panel/OverTips.ts

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
exports.OverTips = exports.DefalutTitle = exports.Type_Tile = void 0;
var SoundManager_1 = require("./../../Manager/SoundManager");
var Tools_1 = require("../../Utils/Tools");
var BaseFrameUI_1 = require("../BaseFrameUI");
var UIHelp_1 = require("../../Utils/UIHelp");
var UIManager_1 = require("../../Manager/UIManager");
var T2M_1 = require("../../SDK/T2M");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var ConstValue_1 = require("../../../../game/scripts/Data/ConstValue");
var Type_Tile;
(function (Type_Tile) {
    Type_Tile[Type_Tile["ZuoDaJieShu"] = 0] = "ZuoDaJieShu";
    Type_Tile[Type_Tile["ChuangGuanChengGong"] = 1] = "ChuangGuanChengGong";
    Type_Tile[Type_Tile["TiaoZhanJieShu"] = 2] = "TiaoZhanJieShu";
    Type_Tile[Type_Tile["TiaoZhanChengGong"] = 3] = "TiaoZhanChengGong";
    Type_Tile[Type_Tile["ChuangGuanJieShu"] = 4] = "ChuangGuanJieShu";
})(Type_Tile = exports.Type_Tile || (exports.Type_Tile = {}));
exports.DefalutTitle = ['作答结束', '闯关成功', '挑战结束', '挑战成功', '闯关结束'];
var FontMap = {
    作: 'img_zuo',
    答: 'img_da',
    结: 'img_jie',
    束: 'img_shu',
    成: 'img_cheng',
    功: 'img_gong',
    挑: 'img_tiao',
    战: 'img_zhan',
    闯: 'img_chuang',
    关: 'img_guan',
};
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var OverTips = /** @class */ (function (_super) {
    __extends(OverTips, _super);
    function OverTips() {
        var _this = _super.call(this) || this;
        _this._lb_tips = null;
        _this._sp_false = null;
        _this._sp_true = null;
        _this._sp_complete = null;
        _this._btn_close = null;
        _this._btn_replay = null;
        _this._nd_yanhua = null;
        _this.callback = null;
        _this.endInAnimation = false;
        _this.img_titles = [];
        _this.bones = [];
        _this._endTitle = '';
        return _this;
    }
    OverTips.prototype.onLoad = function () {
        UIManager_1.UIManager.getBundleRes('frameRes', 'images/OverTips/word', cc.SpriteAtlas, function (asset) { });
    };
    OverTips.prototype.start = function () {
        this._btn_close.on(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, this.doClickClose.bind(this));
    };
    OverTips.prototype.onDisable = function () {
        this._btn_close.off(cc.Node.EventType.TOUCH_END, this.onClickClose, this);
    };
    /**
     设置显示内容
     @param {number} type          0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     @param {string} str           提示内容
     @param {Function} callback    回调函数
     @param {string} endTitle      end动效提示文字
     @param {boolean} isShowReplay     是否显示重玩按钮
     @param {boolean} isShowClose     是否显示关闭按钮
     @param {boolean} autoOff     是否自动关闭
     */
    OverTips.prototype.init = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        this.callback = callback;
        this._sp_false.active = type == 0;
        this._sp_true.active = type == 1;
        this._sp_complete.active = type == 2;
        this._lb_tips.active = type != 2;
        this._lb_tips.getComponent(cc.Label).string = str;
        this._btn_close.active = isShowClose && (0 === type || 1 === type);
        if (this._btn_replay) {
            this._btn_replay.active = isShowReplay;
        }
        if (!endTitle || 4 !== endTitle.length) {
            this._endTitle = exports.DefalutTitle[0];
        }
        else {
            this._endTitle = endTitle;
        }
        switch (type) {
            case 0:
                Tools_1.Tools.playSpine(this._sp_false.getComponent(sp.Skeleton), 'false', false, function () {
                    if (autoOff) {
                        _this.delayClose();
                    }
                });
                SoundManager_1.SoundManager.playEffect('sfx_genneg', false, false, false);
                break;
            case 1:
                this._sp_true.getComponent(sp.Skeleton).clearTracks();
                Tools_1.Tools.playSpine(this._sp_true.getComponent(sp.Skeleton), 'true', false, function () {
                    if (autoOff) {
                        _this.delayClose();
                    }
                });
                SoundManager_1.SoundManager.playEffect('sfx_genpos', false, false, false);
                break;
            case 2:
                this.playCompleteBySubject();
                break;
        }
        this.playTipsAction();
        UIHelp_1.UIHelp.closeMask();
    };
    OverTips.prototype.playCompleteBySubject = function () {
        var subject = ConstValue_1.ConstValue.Subject || 1;
        switch (subject) {
            case 1:
                {
                    this._sp_complete.active = false;
                    var spComp = this._sp_complete.getComponent(sp.Skeleton);
                    this.bones = [];
                    this.bones.push(spComp.findBone('paipai'));
                    this.bones.push(spComp.findBone('xiaoU'));
                    this.bones.push(spComp.findBone('mimiya'));
                    this.bones.push(spComp.findBone('doudou'));
                    this.createTitleImage();
                }
                break;
            case 2:
                {
                    this.endInAnimation = false;
                    this._sp_complete.active = true;
                    var spComp_1 = this._sp_complete.getComponent(sp.Skeleton);
                    Tools_1.Tools.playSpine(spComp_1, 'ni zhenbang', false, function () {
                        Tools_1.Tools.playSpine(spComp_1, 'xunhuan', true);
                    });
                    SoundManager_1.SoundManager.playEffect('over_yuwen', false);
                }
                break;
            case 3:
                {
                    this.endInAnimation = false;
                    this._nd_yanhua.active = true;
                    this._sp_complete.active = true;
                    var spComp_2 = this._sp_complete.getComponent(sp.Skeleton);
                    Tools_1.Tools.playSpine(spComp_2, 'animation', false, function () {
                        spComp_2.animation = null;
                    });
                    SoundManager_1.SoundManager.playEffect('over_yingyu', false);
                }
                break;
        }
    };
    OverTips.prototype.delayClose = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.doClickClose();
        }, 0);
    };
    OverTips.prototype.playTipsAction = function () {
        if (this._lb_tips.active) {
            var endPos = cc.v2(this._lb_tips.position.x, this._lb_tips.position.y);
            var framePos_1 = cc.v2(endPos.x, endPos.y - 72.8);
            var framePos_2 = cc.v2(endPos.x, endPos.y + 12);
            var framePos_3 = cc.v2(endPos.x, endPos.y - 8);
            var framePos_4 = cc.v2(endPos.x, endPos.y + 7.3);
            this._lb_tips.position = cc.v3(framePos_1.x, framePos_1.y);
            cc.tween(this._lb_tips)
                .to(0.08, { x: framePos_2.x, y: framePos_2.y })
                .to(0.08, { x: framePos_3.x, y: framePos_3.y })
                .to(0.08, { x: framePos_4.x, y: framePos_4.y })
                .to(0.06, { x: endPos.x, y: endPos.y })
                .start();
        }
    };
    OverTips.prototype.onClickClose = function (event, customEventData) {
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.OVERTIPS_CLOSE, null);
    };
    OverTips.prototype.doClickClose = function () {
        if (this.callback)
            this.callback();
        UIHelp_1.UIHelp.closeOverTips();
    };
    OverTips.prototype.createTitleImage = function () {
        var _this = this;
        UIManager_1.UIManager.getBundleRes('frameRes', 'images/OverTips/word', cc.SpriteAtlas, function (atlas) {
            _this.img_titles.forEach(function (node) {
                node.removeFromParent(true);
            });
            _this.img_titles = [];
            for (var i = 0; i < _this._endTitle.length; ++i) {
                var str = _this._endTitle[i];
                var spriteFrame = atlas.getSpriteFrame(FontMap[str]);
                var imageNode = new cc.Node();
                var image = imageNode.addComponent(cc.Sprite);
                image.spriteFrame = spriteFrame;
                imageNode.parent = _this.node;
                imageNode.active = false;
                _this.img_titles.push(imageNode);
            }
            _this.endInAnimation = true;
            _this._sp_complete.active = true;
            var spComp = _this._sp_complete.getComponent(sp.Skeleton);
            Tools_1.Tools.playSpine(spComp, 'in', false, function () {
                Tools_1.Tools.playSpine(spComp, 'stand', true);
                _this.endInAnimation = false;
            });
            SoundManager_1.SoundManager.playEffect('sfx_geupgrd', false);
        });
    };
    OverTips.prototype.update = function () {
        if (!this.endInAnimation)
            return;
        for (var index = 0; index < this.img_titles.length; index++) {
            this.img_titles[index].active = true;
            this.img_titles[index].position = cc.v3(this.bones[index].worldX - 139, this.bones[index].worldY - 135);
        }
    };
    OverTips.className = 'OverTips';
    OverTips = __decorate([
        ccclass
    ], OverTips);
    return OverTips;
}(BaseFrameUI_1.default));
exports.OverTips = OverTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcT3ZlclRpcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUE0RDtBQUM1RCwyQ0FBMEM7QUFDMUMsOENBQXlDO0FBQ3pDLDZDQUE0QztBQUM1QyxxREFBb0Q7QUFDcEQscUNBQW9DO0FBQ3BDLHdEQUF1RDtBQUN2RCx1RUFBc0U7QUFFdEUsSUFBWSxTQU1YO0FBTkQsV0FBWSxTQUFTO0lBQ2pCLHVEQUFXLENBQUE7SUFDWCx1RUFBbUIsQ0FBQTtJQUNuQiw2REFBYyxDQUFBO0lBQ2QsbUVBQWlCLENBQUE7SUFDakIsaUVBQWdCLENBQUE7QUFDcEIsQ0FBQyxFQU5XLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBTXBCO0FBRVksUUFBQSxZQUFZLEdBQUcsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7QUFFckUsSUFBSSxPQUFPLEdBQUc7SUFDVixDQUFDLEVBQUUsU0FBUztJQUNaLENBQUMsRUFBRSxRQUFRO0lBQ1gsQ0FBQyxFQUFFLFNBQVM7SUFDWixDQUFDLEVBQUUsU0FBUztJQUNaLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFVBQVU7SUFDYixDQUFDLEVBQUUsVUFBVTtJQUNiLENBQUMsRUFBRSxVQUFVO0lBQ2IsQ0FBQyxFQUFFLFlBQVk7SUFDZixDQUFDLEVBQUUsVUFBVTtDQUNoQixDQUFDO0FBRUksSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBOEIsNEJBQVc7SUFpQnJDO1FBQUEsWUFDSSxpQkFBTyxTQUNWO1FBaEJPLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUMxQixjQUFRLEdBQVksSUFB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QUN6RCxhQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFO2dCQUNqQyxhQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsMkJBQVksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2xELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELHlCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWM7WUFBRSxPQUFPO1FBQ2pDLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLENBQUM7U0FDM0c7SUFDTCxDQUFDO0lBOU1hLGtCQUFTLEdBQUcsVUFBVSxDQUFDO0lBRDVCLFFBQVE7UUFEcEIsT0FBTztPQUNLLFFBQVEsQ0FnTnBCO0lBQUQsZUFBQztDQWhORCxBQWdOQyxDQWhONkIscUJBQVcsR0FnTnhDO0FBaE5ZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi8uLi8uLi9NYW5hZ2VyL1NvdW5kTWFuYWdlcic7XG5pbXBvcnQgeyBUb29scyB9IGZyb20gJy4uLy4uL1V0aWxzL1Rvb2xzJztcbmltcG9ydCBCYXNlRnJhbWVVSSBmcm9tICcuLi9CYXNlRnJhbWVVSSc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5cbmV4cG9ydCBlbnVtIFR5cGVfVGlsZSB7XG4gICAgWnVvRGFKaWVTaHUsXG4gICAgQ2h1YW5nR3VhbkNoZW5nR29uZyxcbiAgICBUaWFvWmhhbkppZVNodSxcbiAgICBUaWFvWmhhbkNoZW5nR29uZyxcbiAgICBDaHVhbmdHdWFuSmllU2h1LFxufVxuXG5leHBvcnQgY29uc3QgRGVmYWx1dFRpdGxlID0gWyfkvZznrZTnu5PmnZ8nLCAn6Zev5YWz5oiQ5YqfJywgJ+aMkeaImOe7k+adnycsICfmjJHmiJjmiJDlip8nLCAn6Zev5YWz57uT5p2fJ107XG5cbmxldCBGb250TWFwID0ge1xuICAgIOS9nDogJ2ltZ196dW8nLFxuICAgIOetlDogJ2ltZ19kYScsXG4gICAg57uTOiAnaW1nX2ppZScsXG4gICAg5p2fOiAnaW1nX3NodScsXG4gICAg5oiQOiAnaW1nX2NoZW5nJyxcbiAgICDlip86ICdpbWdfZ29uZycsXG4gICAg5oyROiAnaW1nX3RpYW8nLFxuICAgIOaImDogJ2ltZ196aGFuJyxcbiAgICDpl686ICdpbWdfY2h1YW5nJyxcbiAgICDlhbM6ICdpbWdfZ3VhbicsXG59O1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBPdmVyVGlwcyBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdPdmVyVGlwcyc7XG5cbiAgICBwcml2YXRlIF9sYl90aXBzOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9zcF9mYWxzZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BfdHJ1ZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfc3BfY29tcGxldGU6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgX2J0bl9jbG9zZTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfYnRuX3JlcGxheTogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBfbmRfeWFuaHVhOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIHByaXZhdGUgY2FsbGJhY2sgPSBudWxsO1xuICAgIHByaXZhdGUgZW5kSW5BbmltYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBwcml2YXRlIGltZ190aXRsZXM6IGNjLk5vZGVbXSA9IFtdO1xuICAgIHByaXZhdGUgYm9uZXM6IGFueVtdID0gW107XG4gICAgcHJpdmF0ZSBfZW5kVGl0bGU6IHN0cmluZyA9ICcnO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICBVSU1hbmFnZXIuZ2V0QnVuZGxlUmVzKCdmcmFtZVJlcycsICdpbWFnZXMvT3ZlclRpcHMvd29yZCcsIGNjLlNwcml0ZUF0bGFzLCAoYXNzZXQ6IGNjLlNwcml0ZUF0bGFzKSA9PiB7fSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMuX2J0bl9jbG9zZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbGlja0Nsb3NlLCB0aGlzKTtcblxuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLk9WRVJUSVBTX0NMT1NFLCB0aGlzLmRvQ2xpY2tDbG9zZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIHRoaXMuX2J0bl9jbG9zZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uQ2xpY2tDbG9zZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiuvue9ruaYvuekuuWGheWuuVxuICAgICBAcGFyYW0ge251bWJlcn0gdHlwZSAgICAgICAgICAwOiDplJnor68gIDHvvJrnrZTlr7nkuoYgIDLvvJrpl6/lhbPmiJDlip8o5LiA55u05pi+56S65LiN5Lya5YWz6ZetKVxuICAgICBAcGFyYW0ge3N0cmluZ30gc3RyICAgICAgICAgICDmj5DnpLrlhoXlrrlcbiAgICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgICAg5Zue6LCD5Ye95pWwXG4gICAgIEBwYXJhbSB7c3RyaW5nfSBlbmRUaXRsZSAgICAgIGVuZOWKqOaViOaPkOekuuaWh+Wtl1xuICAgICBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd1JlcGxheSAgICAg5piv5ZCm5pi+56S66YeN546p5oyJ6ZKuXG4gICAgIEBwYXJhbSB7Ym9vbGVhbn0gaXNTaG93Q2xvc2UgICAgIOaYr+WQpuaYvuekuuWFs+mXreaMiemSrlxuICAgICBAcGFyYW0ge2Jvb2xlYW59IGF1dG9PZmYgICAgIOaYr+WQpuiHquWKqOWFs+mXrVxuICAgICAqL1xuICAgIGluaXQoXG4gICAgICAgIHR5cGU6IG51bWJlcixcbiAgICAgICAgc3RyOiBzdHJpbmcgPSAnJyxcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uLFxuICAgICAgICBlbmRUaXRsZT86IHN0cmluZyxcbiAgICAgICAgaXNTaG93UmVwbGF5PzogYm9vbGVhbixcbiAgICAgICAgaXNTaG93Q2xvc2U6IGJvb2xlYW4gPSBmYWxzZSxcbiAgICAgICAgYXV0b09mZjogYm9vbGVhbiA9IHRydWUsXG4gICAgKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgdGhpcy5fc3BfZmFsc2UuYWN0aXZlID0gdHlwZSA9PSAwO1xuICAgICAgICB0aGlzLl9zcF90cnVlLmFjdGl2ZSA9IHR5cGUgPT0gMTtcbiAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gdHlwZSA9PSAyO1xuICAgICAgICB0aGlzLl9sYl90aXBzLmFjdGl2ZSA9IHR5cGUgIT0gMjtcbiAgICAgICAgdGhpcy5fbGJfdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHN0cjtcbiAgICAgICAgdGhpcy5fYnRuX2Nsb3NlLmFjdGl2ZSA9IGlzU2hvd0Nsb3NlICYmICgwID09PSB0eXBlIHx8IDEgPT09IHR5cGUpO1xuICAgICAgICBpZiAodGhpcy5fYnRuX3JlcGxheSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3JlcGxheS5hY3RpdmUgPSBpc1Nob3dSZXBsYXk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWVuZFRpdGxlIHx8IDQgIT09IGVuZFRpdGxlLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5fZW5kVGl0bGUgPSBEZWZhbHV0VGl0bGVbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9lbmRUaXRsZSA9IGVuZFRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuX3NwX2ZhbHNlLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbiksICdmYWxzZScsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdXRvT2ZmKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGF5Q2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfZ2VubmVnJywgZmFsc2UsIGZhbHNlLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5fc3BfdHJ1ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLmNsZWFyVHJhY2tzKCk7XG4gICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHRoaXMuX3NwX3RydWUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKSwgJ3RydWUnLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYXV0b09mZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxheUNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdCgnc2Z4X2dlbnBvcycsIGZhbHNlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIHRoaXMucGxheUNvbXBsZXRlQnlTdWJqZWN0KCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucGxheVRpcHNBY3Rpb24oKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlTWFzaygpO1xuICAgIH1cblxuICAgIHBsYXlDb21wbGV0ZUJ5U3ViamVjdCgpIHtcbiAgICAgICAgY29uc3Qgc3ViamVjdDogbnVtYmVyID0gQ29uc3RWYWx1ZS5TdWJqZWN0IHx8IDE7XG4gICAgICAgIHN3aXRjaCAoc3ViamVjdCkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvbmVzID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9uZXMucHVzaChzcENvbXAuZmluZEJvbmUoJ3BhaXBhaScpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib25lcy5wdXNoKHNwQ29tcC5maW5kQm9uZSgneGlhb1UnKSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9uZXMucHVzaChzcENvbXAuZmluZEJvbmUoJ21pbWl5YScpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib25lcy5wdXNoKHNwQ29tcC5maW5kQm9uZSgnZG91ZG91JykpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZVRpdGxlSW1hZ2UoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwX2NvbXBsZXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoc3BDb21wLCAnbmkgemhlbmJhbmcnLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwQ29tcCwgJ3h1bmh1YW4nLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdvdmVyX3l1d2VuJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kSW5BbmltYXRpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fbmRfeWFuaHVhLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3NwX2NvbXBsZXRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoc3BDb21wLCAnYW5pbWF0aW9uJywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwQ29tcC5hbmltYXRpb24gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoJ292ZXJfeWluZ3l1JywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlbGF5Q2xvc2UoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZG9DbGlja0Nsb3NlKCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHBsYXlUaXBzQWN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy5fbGJfdGlwcy5hY3RpdmUpIHtcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBjYy52Mih0aGlzLl9sYl90aXBzLnBvc2l0aW9uLngsIHRoaXMuX2xiX3RpcHMucG9zaXRpb24ueSk7XG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMSA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSAtIDcyLjgpO1xuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzIgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyAxMik7XG4gICAgICAgICAgICBsZXQgZnJhbWVQb3NfMyA9IGNjLnYyKGVuZFBvcy54LCBlbmRQb3MueSAtIDgpO1xuICAgICAgICAgICAgbGV0IGZyYW1lUG9zXzQgPSBjYy52MihlbmRQb3MueCwgZW5kUG9zLnkgKyA3LjMpO1xuICAgICAgICAgICAgdGhpcy5fbGJfdGlwcy5wb3NpdGlvbiA9IGNjLnYzKGZyYW1lUG9zXzEueCwgZnJhbWVQb3NfMS55KTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuX2xiX3RpcHMpXG4gICAgICAgICAgICAgICAgLnRvKDAuMDgsIHsgeDogZnJhbWVQb3NfMi54LCB5OiBmcmFtZVBvc18yLnkgfSlcbiAgICAgICAgICAgICAgICAudG8oMC4wOCwgeyB4OiBmcmFtZVBvc18zLngsIHk6IGZyYW1lUG9zXzMueSB9KVxuICAgICAgICAgICAgICAgIC50bygwLjA4LCB7IHg6IGZyYW1lUG9zXzQueCwgeTogZnJhbWVQb3NfNC55IH0pXG4gICAgICAgICAgICAgICAgLnRvKDAuMDYsIHsgeDogZW5kUG9zLngsIHk6IGVuZFBvcy55IH0pXG4gICAgICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkNsaWNrQ2xvc2UoZXZlbnQ/LCBjdXN0b21FdmVudERhdGE/KTogdm9pZCB7XG4gICAgICAgIFQyTS5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT1ZFUlRJUFNfQ0xPU0UsIG51bGwpO1xuICAgIH1cblxuICAgIGRvQ2xpY2tDbG9zZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FsbGJhY2spIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVUaXRsZUltYWdlKCkge1xuICAgICAgICBVSU1hbmFnZXIuZ2V0QnVuZGxlUmVzKCdmcmFtZVJlcycsICdpbWFnZXMvT3ZlclRpcHMvd29yZCcsIGNjLlNwcml0ZUF0bGFzLCAoYXRsYXM6IGNjLlNwcml0ZUF0bGFzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmltZ190aXRsZXMuZm9yRWFjaCgobm9kZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5vZGUucmVtb3ZlRnJvbVBhcmVudCh0cnVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5pbWdfdGl0bGVzID0gW107XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fZW5kVGl0bGUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdHIgPSB0aGlzLl9lbmRUaXRsZVtpXTtcbiAgICAgICAgICAgICAgICBsZXQgc3ByaXRlRnJhbWUgPSBhdGxhcy5nZXRTcHJpdGVGcmFtZShGb250TWFwW3N0cl0pO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xuICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGltYWdlTm9kZS5hZGRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICBpbWFnZS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgICAgICAgICAgICAgIGltYWdlTm9kZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICAgICAgaW1hZ2VOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaW1nX3RpdGxlcy5wdXNoKGltYWdlTm9kZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZW5kSW5BbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fc3BfY29tcGxldGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBzcENvbXAgPSB0aGlzLl9zcF9jb21wbGV0ZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICAgICAgVG9vbHMucGxheVNwaW5lKHNwQ29tcCwgJ2luJywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgICAgICAgICBUb29scy5wbGF5U3BpbmUoc3BDb21wLCAnc3RhbmQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEluQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KCdzZnhfZ2V1cGdyZCcsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW5kSW5BbmltYXRpb24pIHJldHVybjtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaW1nX3RpdGxlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIHRoaXMuaW1nX3RpdGxlc1tpbmRleF0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuaW1nX3RpdGxlc1tpbmRleF0ucG9zaXRpb24gPSBjYy52Myh0aGlzLmJvbmVzW2luZGV4XS53b3JsZFggLSAxMzksIHRoaXMuYm9uZXNbaW5kZXhdLndvcmxkWSAtIDEzNSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '04f62OpblhMYb6+AOI+oOHr', 'TipUI');
// frame/scripts/UI/Panel/TipUI.ts

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
exports.TipUI = void 0;
var BaseFrameUI_1 = require("../BaseFrameUI");
var Tip_1 = require("../Item/Tip");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TipUI = /** @class */ (function (_super) {
    __extends(TipUI, _super);
    function TipUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tipPrefab = null;
        _this.tipPool = [];
        return _this;
    }
    TipUI.prototype.showTip = function (message) {
        for (var j = 0; j < this.tipPool.length; j++) {
            if (!this.tipPool[j].isReady()) {
                this.tipPool[j].reset();
                this.tipPool[j].playTip(message);
                return;
            }
        }
        for (var i = 0; i < this.tipPool.length; ++i) {
            if (this.tipPool[i] != null && this.tipPool[i].isReady()) {
                this.tipPool[i].node.setSiblingIndex(200);
                this.tipPool[i].playTip(message);
                return;
            }
        }
        // cc.log("create tip");
        var TipNode = cc.instantiate(this.tipPrefab);
        TipNode.parent = this.node;
        var tip = TipNode.getComponent(Tip_1.Tip);
        this.tipPool.push(tip);
        tip.playTip(message);
    };
    TipUI.className = 'TipUI';
    __decorate([
        property(cc.Prefab)
    ], TipUI.prototype, "tipPrefab", void 0);
    TipUI = __decorate([
        ccclass
    ], TipUI);
    return TipUI;
}(BaseFrameUI_1.default));
exports.TipUI = TipUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVGlwVUkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDhDQUF5QztBQUN6QyxtQ0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkIseUJBQVc7SUFBdEM7UUFBQSxxRUE2QkM7UUF6QlcsZUFBUyxHQUFjLElBQUksQ0FBQztRQUM1QixhQUFPLEdBQVUsRUFBRSxDQUFDOztJQXdCaEMsQ0FBQztJQXRCRyx1QkFBTyxHQUFQLFVBQVEsT0FBZTtRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQyxPQUFPO2FBQ1Y7U0FDSjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMxQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU87YUFDVjtTQUNKO1FBQ0Qsd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUMzQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLFNBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQTNCYSxlQUFTLEdBQUcsT0FBTyxDQUFDO0lBR2xDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ2dCO0lBSjNCLEtBQUs7UUFEakIsT0FBTztPQUNLLEtBQUssQ0E2QmpCO0lBQUQsWUFBQztDQTdCRCxBQTZCQyxDQTdCMEIscUJBQVcsR0E2QnJDO0FBN0JZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IFRpcCB9IGZyb20gJy4uL0l0ZW0vVGlwJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBjbGFzcyBUaXBVSSBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdUaXBVSSc7XG5cbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHByaXZhdGUgdGlwUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIHByaXZhdGUgdGlwUG9vbDogVGlwW10gPSBbXTtcblxuICAgIHNob3dUaXAobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy50aXBQb29sLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMudGlwUG9vbFtqXS5pc1JlYWR5KCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFBvb2xbal0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpcFBvb2xbal0ucGxheVRpcChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnRpcFBvb2wubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRpcFBvb2xbaV0gIT0gbnVsbCAmJiB0aGlzLnRpcFBvb2xbaV0uaXNSZWFkeSgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBQb29sW2ldLm5vZGUuc2V0U2libGluZ0luZGV4KDIwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy50aXBQb29sW2ldLnBsYXlUaXAobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNjLmxvZyhcImNyZWF0ZSB0aXBcIik7XG4gICAgICAgIGxldCBUaXBOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aXBQcmVmYWIpO1xuICAgICAgICBUaXBOb2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgbGV0IHRpcCA9IFRpcE5vZGUuZ2V0Q29tcG9uZW50KFRpcCk7XG4gICAgICAgIHRoaXMudGlwUG9vbC5wdXNoKHRpcCk7XG4gICAgICAgIHRpcC5wbGF5VGlwKG1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8a2a4ho4VlCloJCvzPCR9a/', 'UploadAndReturnPanel');
// frame/scripts/UI/Panel/UploadAndReturnPanel.ts

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
var ListenerManager_1 = require("./../../Manager/ListenerManager");
var BaseFrameUI_1 = require("../BaseFrameUI");
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var UIHelp_1 = require("../../Utils/UIHelp");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var T2M_1 = require("../../SDK/T2M");
var EditorManager_1 = require("../../../../game/scripts/Manager/EditorManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var UploadAndReturnPanel = /** @class */ (function (_super) {
    __extends(UploadAndReturnPanel, _super);
    function UploadAndReturnPanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UploadAndReturnPanel.prototype.onLoad = function () {
        var _this = this;
        this.node.on(cc.Node.EventType.POSITION_CHANGED, function () {
            _this.adjustWidget();
        });
    };
    UploadAndReturnPanel.prototype.start = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 1);
    };
    UploadAndReturnPanel.prototype.onFanHui = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_EDIT_STATE_SWITCHING, 0);
        UIHelp_1.UIHelp.closeStarCount();
        UIHelp_1.UIHelp.closeGamePanel();
        UIHelp_1.UIHelp.closeUploadAndReturnPanel();
        UIHelp_1.UIHelp.closeSubmissionPanel();
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeAffirmTip();
        ReportManager_1.ReportManager.reportGameOver();
        SoundManager_1.SoundManager.stopAll();
        T2M_1.T2M.onReturnToTeacherPanel();
    };
    UploadAndReturnPanel.prototype.onTiJiao = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
    };
    UploadAndReturnPanel.prototype.adjustWidget = function () {
        var scenceHeight = cc.winSize.height;
        var widget = this.getComponent(cc.Widget);
        if (widget) {
            if (scenceHeight > this.node.height) {
                widget.bottom = (scenceHeight - this.node.height) / 2;
            }
            else {
                widget.bottom = 0;
            }
            widget.updateAlignment();
        }
    };
    UploadAndReturnPanel.className = 'UploadAndReturnPanel';
    UploadAndReturnPanel = __decorate([
        ccclass
    ], UploadAndReturnPanel);
    return UploadAndReturnPanel;
}(BaseFrameUI_1.default));
exports.default = UploadAndReturnPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcVXBsb2FkQW5kUmV0dXJuUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQWtFO0FBQ2xFLDhDQUF5QztBQUN6Qyx3REFBdUQ7QUFDdkQsNkNBQTRDO0FBQzVDLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQscUNBQW9DO0FBQ3BDLGdGQUErRTtBQUV6RSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUFrRCx3Q0FBVztJQUE3RDs7SUErQ0EsQ0FBQztJQTVDRyxxQ0FBTSxHQUFOO1FBQUEsaUJBSUM7UUFIRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM3QyxLQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDeEIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0NBQUssR0FBTDtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsdUJBQXVCLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHVCQUF1QixFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsZUFBTSxDQUFDLHlCQUF5QixFQUFFLENBQUM7UUFDbkMsZUFBTSxDQUFDLG9CQUFvQixFQUFFLENBQUM7UUFDOUIsZUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3ZCLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4Qiw2QkFBYSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQy9CLDJCQUFZLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDdkIsU0FBRyxDQUFDLHNCQUFzQixFQUFFLENBQUM7SUFDakMsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDSSxJQUFNLE1BQU0sR0FBRyw2QkFBYSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxNQUFNLElBQUksNkJBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDcEMsZUFBTSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDaEM7YUFBTTtZQUNILGVBQU0sQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDOUI7SUFDTCxDQUFDO0lBRUQsMkNBQVksR0FBWjtRQUNJLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ3JDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzFDLElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDckI7WUFDRCxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBN0NhLDhCQUFTLEdBQUcsc0JBQXNCLENBQUM7SUFEaEMsb0JBQW9CO1FBRHhDLE9BQU87T0FDYSxvQkFBb0IsQ0ErQ3hDO0lBQUQsMkJBQUM7Q0EvQ0QsQUErQ0MsQ0EvQ2lELHFCQUFXLEdBK0M1RDtrQkEvQ29CLG9CQUFvQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4vLi4vLi4vTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcbmltcG9ydCB7IEZyYW1lTXNnVHlwZSB9IGZyb20gJy4uLy4uL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IFVJSGVscCB9IGZyb20gJy4uLy4uL1V0aWxzL1VJSGVscCc7XG5pbXBvcnQgeyBSZXBvcnRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU291bmRNYW5hZ2VyJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2dhbWUvc2NyaXB0cy9NYW5hZ2VyL0VkaXRvck1hbmFnZXInO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXBsb2FkQW5kUmV0dXJuUGFuZWwgZXh0ZW5kcyBCYXNlRnJhbWVVSSB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnVXBsb2FkQW5kUmV0dXJuUGFuZWwnO1xuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuUE9TSVRJT05fQ0hBTkdFRCwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGp1c3RXaWRnZXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChGcmFtZU1zZ1R5cGUuT05fRURJVF9TVEFURV9TV0lUQ0hJTkcsIDEpO1xuICAgIH1cblxuICAgIG9uRmFuSHVpKCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX0VESVRfU1RBVEVfU1dJVENISU5HLCAwKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlU3RhckNvdW50KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZUdhbWVQYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xuICAgICAgICBVSUhlbHAuY2xvc2VTdWJtaXNzaW9uUGFuZWwoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgU291bmRNYW5hZ2VyLnN0b3BBbGwoKTtcbiAgICAgICAgVDJNLm9uUmV0dXJuVG9UZWFjaGVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBvblRpSmlhbygpIHtcbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICghaXNFZGl0IHx8IFJlcG9ydE1hbmFnZXIuaXNBbGxPdmVyKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1N1Ym1pc3Npb25QYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLnNob3dUaXAoJ+ivt+WFiOWujOaIkOS4gOmBjemimOebricpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWRqdXN0V2lkZ2V0KCkge1xuICAgICAgICBsZXQgc2NlbmNlSGVpZ2h0ID0gY2Mud2luU2l6ZS5oZWlnaHQ7XG4gICAgICAgIGxldCB3aWRnZXQgPSB0aGlzLmdldENvbXBvbmVudChjYy5XaWRnZXQpO1xuICAgICAgICBpZiAod2lkZ2V0KSB7XG4gICAgICAgICAgICBpZiAoc2NlbmNlSGVpZ2h0ID4gdGhpcy5ub2RlLmhlaWdodCkge1xuICAgICAgICAgICAgICAgIHdpZGdldC5ib3R0b20gPSAoc2NlbmNlSGVpZ2h0IC0gdGhpcy5ub2RlLmhlaWdodCkgLyAyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3aWRnZXQuYm90dG9tID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpZGdldC51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1694s8BidGvaCpzhIeiAbf', 'BaseGamePanel');
// frame/scripts/UI/Panel/BaseGamePanel.ts

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
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var NetWork_1 = require("../../Http/NetWork");
var ListenerManager_1 = require("../../Manager/ListenerManager");
var ReportManager_1 = require("../../Manager/ReportManager");
var SoundManager_1 = require("../../Manager/SoundManager");
var SyncDataManager_1 = require("../../Manager/SyncDataManager");
var UIManager_1 = require("../../Manager/UIManager");
var GameMsg_1 = require("../../SDK/GameMsg");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseUI_1 = require("../BaseUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BaseGamePanel = /** @class */ (function (_super) {
    __extends(BaseGamePanel, _super);
    function BaseGamePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._isPanelReady = false;
        _this.isRresult = true;
        return _this;
    }
    // onLoad () {}
    BaseGamePanel.prototype.start = function () {
        if (this.data && this.data.node && this.data.node.parent) {
            this.data.node.removeFromParent();
        }
        // 发送GameStart
        GameMsg_1.default.gameStart(this.isRresult);
        this.addSDKEventListener();
        if (NetWork_1.NetWork.isSync && !NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.showRecoverMask();
        }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, false);
        if (ConstValue_1.ConstValue.IS_TEACHER) {
            this.panelReady();
            UIHelp_1.UIHelp.showUploadAndReturnPanel();
        }
        else {
            this.getNet();
        }
    };
    BaseGamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        UIHelp_1.UIHelp.closeMask();
    };
    BaseGamePanel.prototype.panelReady = function () {
        this._isPanelReady = true;
        if (UIManager_1.UIManager.isGameShowing) {
            this.setPanel();
        }
        else {
            cc.game.pause();
        }
    };
    BaseGamePanel.prototype.setPanel = function () {
        T2M_1.T2M.init();
        SyncDataManager_1.SyncDataManager.initSyncData();
        ReportManager_1.ReportManager.initReportData(EditorManager_1.EditorManager.getLevelCount());
        if (!NetWork_1.NetWork.isSync || NetWork_1.NetWork.isMaster) {
            UIHelp_1.UIHelp.closeRecoverMask();
        }
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            cc.resources.load('prefab/ui/panel/OverTips');
        }
        else {
            cc.resources.load('prefab/ui/panel/StarCount');
        }
    };
    BaseGamePanel.prototype.onRecoveryData = function (recovery) {
        SyncDataManager_1.SyncDataManager.setSyncData(recovery);
        if (SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver) {
            this.showGameOverPanel();
        }
        else {
            UIHelp_1.UIHelp.closeOverTips();
            UIHelp_1.UIHelp.closeStarCount();
        }
    };
    BaseGamePanel.prototype.answerRight = function (isCurLevelFinish) {
        ReportManager_1.ReportManager.reportLevelResult(true, isCurLevelFinish);
    };
    BaseGamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        ReportManager_1.ReportManager.reportLevelResult(false, isCurLevelFinish);
    };
    BaseGamePanel.prototype.gameOver = function () {
        SyncDataManager_1.SyncDataManager.syncData.frameSyncData.isGameOver = true;
        this.showGameOverPanel();
    };
    BaseGamePanel.prototype.showGameOverPanel = function () {
        UIHelp_1.UIHelp.showMask();
        SoundManager_1.SoundManager.stopAll();
        var isShowReplay = EditorManager_1.EditorManager.editorData.isReplay &&
            SyncDataManager_1.SyncDataManager.syncData.frameSyncData.hasReplayCount < EditorManager_1.EditorManager.editorData.replayCount;
        if (EditorManager_1.EditorManager.editorData.isStarCount) {
            UIHelp_1.UIHelp.showStarCount(isShowReplay);
        }
        else {
            var str = 1 === EditorManager_1.EditorManager.getLevelCount() ? '挑战成功' : '闯关成功';
            UIHelp_1.UIHelp.showOverTips(2, '', null, str, isShowReplay);
        }
    };
    BaseGamePanel.prototype.onGameShow = function () {
        if (this._isPanelReady) {
            cc.game.resume();
            this.setPanel();
        }
    };
    BaseGamePanel.prototype.onReplay = function () {
        UIHelp_1.UIHelp.closeOverTips();
        UIHelp_1.UIHelp.closeStarCount();
        SyncDataManager_1.SyncDataManager.replay();
        ReportManager_1.ReportManager.replayGame();
    };
    BaseGamePanel.prototype.addSDKEventListener = function () {
        // 小组课
        GameMsg_1.default.addEvent(FrameMsgType_1.FrameMsgType.STOP, this.onSDKMsgStopReceived.bind(this));
        // 小班课
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.ON_RECOVERY_DATA, this.onRecoveryData, this);
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.REPLAY_START, this.onReplay.bind(this));
        // 预加载：监听窗口打开
        ListenerManager_1.ListenerManager.on(FrameMsgType_1.FrameMsgType.PRELOAD_GAME_SHOW, this.onGameShow.bind(this), this);
    };
    BaseGamePanel.prototype.getNet = function () {
        var _this = this;
        NetWork_1.NetWork.httpRequest(NetWork_1.NetWork.GET_QUESTION + '?courseware_id=' + NetWork_1.NetWork.coursewareId, 'GET', 'application/json;charset=utf-8', function (err, response) {
            if (!err) {
                var response_data = response;
                if (Array.isArray(response_data.data)) {
                    return;
                }
                var content = JSON.parse(response_data.data.courseware_content);
                if (content != null) {
                    if (content.CoursewareKey == ConstValue_1.ConstValue.CoursewareKey) {
                        EditorManager_1.EditorManager.setData(content.data);
                        _this.panelReady();
                    }
                    else {
                        // coursewareKey错误
                        GameMsg_1.default.differntKey('CoursewareKey错误！');
                        UIHelp_1.UIHelp.showErrorPanel('CoursewareKey错误,请联系客服！', '', '', '确定');
                        return;
                    }
                }
            }
            else {
            }
        }, null);
    };
    // 游戏结束消息监听
    BaseGamePanel.prototype.onSDKMsgStopReceived = function () {
        //各游戏独立处理  先上报当前作答数据  后发送finish消息
        GameMsg_1.default.gameStop();
        //新课堂上报
        ReportManager_1.ReportManager.reportGameOver();
        GameMsg_1.default.finished();
    };
    BaseGamePanel.prototype.update = function (dt) {
        T2M_1.T2M.update();
    };
    BaseGamePanel.className = 'BaseGamePanel';
    __decorate([
        property
    ], BaseGamePanel.prototype, "isRresult", void 0);
    BaseGamePanel = __decorate([
        ccclass
    ], BaseGamePanel);
    return BaseGamePanel;
}(BaseUI_1.BaseUI));
exports.default = BaseGamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQmFzZUdhbWVQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1RUFBc0U7QUFDdEUsZ0ZBQStFO0FBQy9FLHdEQUF1RDtBQUN2RCw4Q0FBNkM7QUFDN0MsaUVBQWdFO0FBQ2hFLDZEQUE0RDtBQUM1RCwyREFBMEQ7QUFDMUQsaUVBQTBFO0FBQzFFLHFEQUFvRDtBQUNwRCw2Q0FBd0M7QUFDeEMscUNBQW9DO0FBQ3BDLDZDQUE0QztBQUM1QyxvQ0FBbUM7QUFFN0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBMkMsaUNBQU07SUFBakQ7UUFBQSxxRUFxS0M7UUFuS1csbUJBQWEsR0FBWSxLQUFLLENBQUM7UUFHaEMsZUFBUyxHQUFZLElBQUksQ0FBQzs7SUFnS3JDLENBQUM7SUE5SkcsZUFBZTtJQUVmLDZCQUFLLEdBQUw7UUFDSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDckM7UUFFRCxjQUFjO1FBQ2QsaUJBQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQzNCLElBQUksaUJBQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxpQkFBTyxDQUFDLFFBQVEsRUFBRTtZQUNyQyxlQUFNLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDNUI7UUFDRCxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLHFCQUFxQixFQUFF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RyxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFuS2EsdUJBQVMsR0FBRyxlQUFlLENBQUM7SUFJMUM7UUFEQyxRQUFRO29EQUN3QjtJQUxoQixhQUFhO1FBRGpDLE9BQU87T0FDYSxhQUFhLENBcUtqQztJQUFELG9CQUFDO0NBcktELEFBcUtDLENBckswQyxlQUFNLEdBcUtoRDtrQkFyS29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi9EYXRhL0ZyYW1lTXNnVHlwZSc7XG5pbXBvcnQgeyBOZXRXb3JrIH0gZnJvbSAnLi4vLi4vSHR0cC9OZXRXb3JrJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyJztcbmltcG9ydCB7IFJlcG9ydE1hbmFnZXIgfSBmcm9tICcuLi8uLi9NYW5hZ2VyL1JlcG9ydE1hbmFnZXInO1xuaW1wb3J0IHsgU291bmRNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuaW1wb3J0IHsgU3luY0RhdGEsIFN5bmNEYXRhTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvU3luY0RhdGFNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcbmltcG9ydCBHYW1lTXNnIGZyb20gJy4uLy4uL1NESy9HYW1lTXNnJztcbmltcG9ydCB7IFQyTSB9IGZyb20gJy4uLy4uL1NESy9UMk0nO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vVXRpbHMvVUlIZWxwJztcbmltcG9ydCB7IEJhc2VVSSB9IGZyb20gJy4uL0Jhc2VVSSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlR2FtZVBhbmVsIGV4dGVuZHMgQmFzZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdCYXNlR2FtZVBhbmVsJztcbiAgICBwcml2YXRlIF9pc1BhbmVsUmVhZHk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIEBwcm9wZXJ0eVxuICAgIHB1YmxpYyBpc1JyZXN1bHQ6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLy8gb25Mb2FkICgpIHt9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSAmJiB0aGlzLmRhdGEubm9kZSAmJiB0aGlzLmRhdGEubm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5ub2RlLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOWPkemAgUdhbWVTdGFydFxuICAgICAgICBHYW1lTXNnLmdhbWVTdGFydCh0aGlzLmlzUnJlc3VsdCk7XG4gICAgICAgIHRoaXMuYWRkU0RLRXZlbnRMaXN0ZW5lcigpO1xuICAgICAgICBpZiAoTmV0V29yay5pc1N5bmMgJiYgIU5ldFdvcmsuaXNNYXN0ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93UmVjb3Zlck1hc2soKTtcbiAgICAgICAgfVxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLlRFQUNIRVJfUEFORUxfTE9BRElORywgZmFsc2UpO1xuXG4gICAgICAgIGlmIChDb25zdFZhbHVlLklTX1RFQUNIRVIpIHtcbiAgICAgICAgICAgIHRoaXMucGFuZWxSZWFkeSgpO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXROZXQoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgc3VwZXIub25EZXN0cm95KCk7XG4gICAgICAgIFVJSGVscC5jbG9zZU1hc2soKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhbmVsUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuX2lzUGFuZWxSZWFkeSA9IHRydWU7XG4gICAgICAgIGlmIChVSU1hbmFnZXIuaXNHYW1lU2hvd2luZykge1xuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuZ2FtZS5wYXVzZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNldFBhbmVsKCkge1xuICAgICAgICBUMk0uaW5pdCgpO1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuaW5pdFN5bmNEYXRhKCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIuaW5pdFJlcG9ydERhdGEoRWRpdG9yTWFuYWdlci5nZXRMZXZlbENvdW50KCkpO1xuICAgICAgICBpZiAoIU5ldFdvcmsuaXNTeW5jIHx8IE5ldFdvcmsuaXNNYXN0ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZVJlY292ZXJNYXNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50KSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgncHJlZmFiL3VpL3BhbmVsL092ZXJUaXBzJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCgncHJlZmFiL3VpL3BhbmVsL1N0YXJDb3VudCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUmVjb3ZlcnlEYXRhKHJlY292ZXJ5OiBTeW5jRGF0YSkge1xuICAgICAgICBTeW5jRGF0YU1hbmFnZXIuc2V0U3luY0RhdGEocmVjb3ZlcnkpO1xuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaXNHYW1lT3Zlcikge1xuICAgICAgICAgICAgdGhpcy5zaG93R2FtZU92ZXJQYW5lbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgVUlIZWxwLmNsb3NlT3ZlclRpcHMoKTtcbiAgICAgICAgICAgIFVJSGVscC5jbG9zZVN0YXJDb3VudCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGFuc3dlclJpZ2h0KGlzQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4pIHtcbiAgICAgICAgUmVwb3J0TWFuYWdlci5yZXBvcnRMZXZlbFJlc3VsdCh0cnVlLCBpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgYW5zd2VyV3JvbmcoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0TGV2ZWxSZXN1bHQoZmFsc2UsIGlzQ3VyTGV2ZWxGaW5pc2gpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIHRoaXMuc2hvd0dhbWVPdmVyUGFuZWwoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0dhbWVPdmVyUGFuZWwoKSB7XG4gICAgICAgIFVJSGVscC5zaG93TWFzaygpO1xuICAgICAgICBTb3VuZE1hbmFnZXIuc3RvcEFsbCgpO1xuICAgICAgICBsZXQgaXNTaG93UmVwbGF5OiBib29sZWFuID1cbiAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSAmJlxuICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGEuaGFzUmVwbGF5Q291bnQgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEucmVwbGF5Q291bnQ7XG4gICAgICAgIGlmIChFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3RhckNvdW50KGlzU2hvd1JlcGxheSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc3RyID0gMSA9PT0gRWRpdG9yTWFuYWdlci5nZXRMZXZlbENvdW50KCkgPyAn5oyR5oiY5oiQ5YqfJyA6ICfpl6/lhbPmiJDlip8nO1xuICAgICAgICAgICAgVUlIZWxwLnNob3dPdmVyVGlwcygyLCAnJywgbnVsbCwgc3RyLCBpc1Nob3dSZXBsYXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbkdhbWVTaG93KCkge1xuICAgICAgICBpZiAodGhpcy5faXNQYW5lbFJlYWR5KSB7XG4gICAgICAgICAgICBjYy5nYW1lLnJlc3VtZSgpO1xuICAgICAgICAgICAgdGhpcy5zZXRQYW5lbCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uUmVwbGF5KCkge1xuICAgICAgICBVSUhlbHAuY2xvc2VPdmVyVGlwcygpO1xuICAgICAgICBVSUhlbHAuY2xvc2VTdGFyQ291bnQoKTtcblxuICAgICAgICBTeW5jRGF0YU1hbmFnZXIucmVwbGF5KCk7XG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwbGF5R2FtZSgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWRkU0RLRXZlbnRMaXN0ZW5lcigpIHtcbiAgICAgICAgLy8g5bCP57uE6K++XG4gICAgICAgIEdhbWVNc2cuYWRkRXZlbnQoRnJhbWVNc2dUeXBlLlNUT1AsIHRoaXMub25TREtNc2dTdG9wUmVjZWl2ZWQuYmluZCh0aGlzKSk7XG4gICAgICAgIC8vIOWwj+ePreivvlxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLk9OX1JFQ09WRVJZX0RBVEEsIHRoaXMub25SZWNvdmVyeURhdGEsIHRoaXMpO1xuXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcihGcmFtZU1zZ1R5cGUuUkVQTEFZX1NUQVJULCB0aGlzLm9uUmVwbGF5LmJpbmQodGhpcykpO1xuXG4gICAgICAgIC8vIOmihOWKoOi9ve+8muebkeWQrOeql+WPo+aJk+W8gFxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRnJhbWVNc2dUeXBlLlBSRUxPQURfR0FNRV9TSE9XLCB0aGlzLm9uR2FtZVNob3cuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBnZXROZXQoKSB7XG4gICAgICAgIE5ldFdvcmsuaHR0cFJlcXVlc3QoXG4gICAgICAgICAgICBOZXRXb3JrLkdFVF9RVUVTVElPTiArICc/Y291cnNld2FyZV9pZD0nICsgTmV0V29yay5jb3Vyc2V3YXJlSWQsXG4gICAgICAgICAgICAnR0VUJyxcbiAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTgnLFxuICAgICAgICAgICAgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWVycikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VfZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZV9kYXRhLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSBKU09OLnBhcnNlKHJlc3BvbnNlX2RhdGEuZGF0YS5jb3Vyc2V3YXJlX2NvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5Db3Vyc2V3YXJlS2V5ID09IENvbnN0VmFsdWUuQ291cnNld2FyZUtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuc2V0RGF0YShjb250ZW50LmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFuZWxSZWFkeSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb3Vyc2V3YXJlS2V56ZSZ6K+vXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgR2FtZU1zZy5kaWZmZXJudEtleSgnQ291cnNld2FyZUtleemUmeivr++8gScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVJSGVscC5zaG93RXJyb3JQYW5lbCgnQ291cnNld2FyZUtleemUmeivryzor7fogZTns7vlrqLmnI3vvIEnLCAnJywgJycsICfnoa7lrponKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIOa4uOaIj+e7k+adn+a2iOaBr+ebkeWQrFxuICAgIHByaXZhdGUgb25TREtNc2dTdG9wUmVjZWl2ZWQoKSB7XG4gICAgICAgIC8v5ZCE5ri45oiP54us56uL5aSE55CGICDlhYjkuIrmiqXlvZPliY3kvZznrZTmlbDmja4gIOWQjuWPkemAgWZpbmlzaOa2iOaBr1xuICAgICAgICBHYW1lTXNnLmdhbWVTdG9wKCk7XG4gICAgICAgIC8v5paw6K++5aCC5LiK5oqlXG4gICAgICAgIFJlcG9ydE1hbmFnZXIucmVwb3J0R2FtZU92ZXIoKTtcbiAgICAgICAgR2FtZU1zZy5maW5pc2hlZCgpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBUMk0udXBkYXRlKCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67e25WAGoRADq1zkpxqqwdF', 'AffirmTips');
// frame/scripts/UI/Panel/AffirmTips.ts

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
exports.AffirmTips = void 0;
var FrameMsgType_1 = require("../../Data/FrameMsgType");
var T2M_1 = require("../../SDK/T2M");
var UIHelp_1 = require("../../Utils/UIHelp");
var BaseFrameUI_1 = require("../BaseFrameUI");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var AffirmTips = /** @class */ (function (_super) {
    __extends(AffirmTips, _super);
    function AffirmTips() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NodeDes = null; //描述节点
        _this.title = null;
        _this.des = null;
        _this.close = null;
        _this.ok = null;
        _this.btnCloseLabel = null;
        _this.btnOkLabel = null;
        _this.win = null; //描述节点
        _this.fail = null; //描述节点
        _this.callback = null;
        return _this;
        // update (dt) {}
    }
    AffirmTips.prototype.start = function () {
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_SURE, this.disposeOk.bind(this));
        T2M_1.T2M.addSyncEventListener(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_CANCEL, this.disposeCancel.bind(this));
    };
    //type 成功 1 失败 2
    AffirmTips.prototype.init = function (type, des, callback, btnCloselDes, btnOkDes) {
        this.title.node.active = false;
        this.des.node.active = true;
        this.win.active = type == 1;
        this.fail.active = type == 2;
        this.type = type;
        this.callback = callback;
        //console.log("到了初始化");
        //Tools.playSpine(this.sp_BgAnimator, "fault", false);
        this.des.string = des;
        if (btnCloselDes) {
            btnCloselDes == '' ? '取消' : btnCloselDes;
            this.btnCloseLabel.string = btnCloselDes;
        }
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
        }
    };
    AffirmTips.prototype.setOnlyOneBtnType = function (btnOkDes) {
        this.close.node.active = false;
        this.ok.node.active = true;
        this.ok.node.position = cc.v3(0, this.ok.node.position.y, 0);
        if (btnOkDes) {
            btnOkDes == '' ? '确定' : btnOkDes;
            this.btnOkLabel.string = btnOkDes;
            if (btnOkDes.length > 4)
                this.btnOkLabel.fontSize = 40;
        }
    };
    AffirmTips.prototype.OnClickClose = function () {
        //console.log("关闭");
    };
    //通用动画
    AffirmTips.prototype.TipsAnimatorScale = function (nodeObj) {
        nodeObj.stopAllActions();
        var seq = cc.sequence(cc.delayTime(1), cc.scaleTo(0.2, 1, 1));
        nodeObj.runAction(seq);
        // nodeObj.runAction(cc.scaleTo(0.2, 1, 1));
    };
    //ok 1 确认 0 取消
    AffirmTips.prototype.OnClickOk = function () {
        console.log('确认');
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_SURE, null);
    };
    AffirmTips.prototype.OnClickCancel = function () {
        console.log('取消');
        T2M_1.T2M.dispatch(FrameMsgType_1.FrameMsgType.AFFIRMTIPS_CANCEL, null);
    };
    AffirmTips.prototype.disposeOk = function () {
        UIHelp_1.UIHelp.closeAffirmTip();
        this.callback && this.callback(1);
    };
    AffirmTips.prototype.disposeCancel = function () {
        UIHelp_1.UIHelp.closeAffirmTip();
        this.callback && this.callback(0);
    };
    AffirmTips.className = 'AffirmTips';
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "NodeDes", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "des", void 0);
    __decorate([
        property(cc.Button)
    ], AffirmTips.prototype, "close", void 0);
    __decorate([
        property(cc.Button)
    ], AffirmTips.prototype, "ok", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "btnCloseLabel", void 0);
    __decorate([
        property(cc.Label)
    ], AffirmTips.prototype, "btnOkLabel", void 0);
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "win", void 0);
    __decorate([
        property(cc.Node)
    ], AffirmTips.prototype, "fail", void 0);
    AffirmTips = __decorate([
        ccclass
    ], AffirmTips);
    return AffirmTips;
}(BaseFrameUI_1.default));
exports.AffirmTips = AffirmTips;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFVJXFxQYW5lbFxcQWZmaXJtVGlwcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELHFDQUFvQztBQUNwQyw2Q0FBNEM7QUFDNUMsOENBQXlDO0FBRW5DLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQWdDLDhCQUFXO0lBQTNDO1FBQUEscUVBK0ZDO1FBM0ZXLGFBQU8sR0FBWSxJQUFJLENBQUMsQ0FBQyxNQUFNO1FBRS9CLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsU0FBRyxHQUFhLElBQUksQ0FBQztRQUVyQixXQUFLLEdBQWMsSUFBSSxDQUFDO1FBRXhCLFFBQUUsR0FBYyxJQUFJLENBQUM7UUFFckIsbUJBQWEsR0FBYSxJQUFJLENBQUM7UUFFL0IsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsU0FBRyxHQUFZLElBQUksQ0FBQyxDQUFDLE1BQU07UUFFM0IsVUFBSSxHQUFZLElBQUksQ0FBQyxDQUFDLE1BQU07UUFFNUIsY0FBUSxHQUFHLElBQUksQ0FBQzs7UUF3RXhCLGlCQUFpQjtJQUNyQixDQUFDO0lBdkVHLDBCQUFLLEdBQUw7UUFDSSxTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUNsRixTQUFHLENBQUMsb0JBQW9CLENBQUMsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQzVGLENBQUM7SUFFRCxnQkFBZ0I7SUFDaEIseUJBQUksR0FBSixVQUFLLElBQVksRUFBRSxHQUFXLEVBQUUsUUFBYSxFQUFFLFlBQXFCLEVBQUUsUUFBaUI7UUFDbkYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6Qix1QkFBdUI7UUFDdkIsc0RBQXNEO1FBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztRQUN0QixJQUFJLFlBQVksRUFBRTtZQUNkLFlBQVksSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDO1lBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQztTQUM1QztRQUNELElBQUksUUFBUSxFQUFFO1lBQ1YsUUFBUSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQztJQUVELHNDQUFpQixHQUFqQixVQUFrQixRQUFpQjtRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxRQUFRLEVBQUU7WUFDVixRQUFRLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7WUFDbEMsSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1NBQzFEO0lBQ0wsQ0FBQztJQUVELGlDQUFZLEdBQVo7UUFDSSxvQkFBb0I7SUFDeEIsQ0FBQztJQUVELE1BQU07SUFDTixzQ0FBaUIsR0FBakIsVUFBa0IsT0FBZ0I7UUFDOUIsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3pCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3ZCLDRDQUE0QztJQUNoRCxDQUFDO0lBRUQsY0FBYztJQUNkLDhCQUFTLEdBQVQ7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLFNBQUcsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xCLFNBQUcsQ0FBQyxRQUFRLENBQUMsMkJBQVksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsOEJBQVMsR0FBVDtRQUNJLGVBQU0sQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELGtDQUFhLEdBQWI7UUFDSSxlQUFNLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUEzRmEsb0JBQVMsR0FBRyxZQUFZLENBQUM7SUFHdkM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDYztJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNZO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ1U7SUFFN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzs2Q0FDWTtJQUVoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNTO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7cURBQ29CO0lBRXZDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ2lCO0lBRXBDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDVztJQXBCcEIsVUFBVTtRQUR0QixPQUFPO09BQ0ssVUFBVSxDQStGdEI7SUFBRCxpQkFBQztDQS9GRCxBQStGQyxDQS9GK0IscUJBQVcsR0ErRjFDO0FBL0ZZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xuaW1wb3J0IHsgVDJNIH0gZnJvbSAnLi4vLi4vU0RLL1QyTSc7XG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tICcuLi8uLi9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IEJhc2VGcmFtZVVJIGZyb20gJy4uL0Jhc2VGcmFtZVVJJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgY2xhc3MgQWZmaXJtVGlwcyBleHRlbmRzIEJhc2VGcmFtZVVJIHtcbiAgICBwdWJsaWMgc3RhdGljIGNsYXNzTmFtZSA9ICdBZmZpcm1UaXBzJztcblxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgTm9kZURlczogY2MuTm9kZSA9IG51bGw7IC8v5o+P6L+w6IqC54K5XG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICAgIHByaXZhdGUgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBkZXM6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuQnV0dG9uKVxuICAgIHByaXZhdGUgY2xvc2U6IGNjLkJ1dHRvbiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgICBwcml2YXRlIG9rOiBjYy5CdXR0b24gPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIGJ0bkNsb3NlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgcHJpdmF0ZSBidG5Pa0xhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSB3aW46IGNjLk5vZGUgPSBudWxsOyAvL+aPj+i/sOiKgueCuVxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZmFpbDogY2MuTm9kZSA9IG51bGw7IC8v5o+P6L+w6IqC54K5XG5cbiAgICBwcml2YXRlIGNhbGxiYWNrID0gbnVsbDtcbiAgICBwcml2YXRlIHR5cGU6IG51bWJlcjtcbiAgICBzdGFydCgpIHtcbiAgICAgICAgVDJNLmFkZFN5bmNFdmVudExpc3RlbmVyKEZyYW1lTXNnVHlwZS5BRkZJUk1USVBTX1NVUkUsIHRoaXMuZGlzcG9zZU9rLmJpbmQodGhpcykpO1xuICAgICAgICBUMk0uYWRkU3luY0V2ZW50TGlzdGVuZXIoRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfQ0FOQ0VMLCB0aGlzLmRpc3Bvc2VDYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgLy90eXBlIOaIkOWKnyAxIOWksei0pSAyXG4gICAgaW5pdCh0eXBlOiBudW1iZXIsIGRlczogc3RyaW5nLCBjYWxsYmFjazogYW55LCBidG5DbG9zZWxEZXM/OiBzdHJpbmcsIGJ0bk9rRGVzPzogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudGl0bGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5kZXMubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLndpbi5hY3RpdmUgPSB0eXBlID09IDE7XG4gICAgICAgIHRoaXMuZmFpbC5hY3RpdmUgPSB0eXBlID09IDI7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIuWIsOS6huWIneWni+WMllwiKTtcbiAgICAgICAgLy9Ub29scy5wbGF5U3BpbmUodGhpcy5zcF9CZ0FuaW1hdG9yLCBcImZhdWx0XCIsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5kZXMuc3RyaW5nID0gZGVzO1xuICAgICAgICBpZiAoYnRuQ2xvc2VsRGVzKSB7XG4gICAgICAgICAgICBidG5DbG9zZWxEZXMgPT0gJycgPyAn5Y+W5raIJyA6IGJ0bkNsb3NlbERlcztcbiAgICAgICAgICAgIHRoaXMuYnRuQ2xvc2VMYWJlbC5zdHJpbmcgPSBidG5DbG9zZWxEZXM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJ0bk9rRGVzKSB7XG4gICAgICAgICAgICBidG5Pa0RlcyA9PSAnJyA/ICfnoa7lrponIDogYnRuT2tEZXM7XG4gICAgICAgICAgICB0aGlzLmJ0bk9rTGFiZWwuc3RyaW5nID0gYnRuT2tEZXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPbmx5T25lQnRuVHlwZShidG5Pa0Rlcz86IHN0cmluZykge1xuICAgICAgICB0aGlzLmNsb3NlLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMub2subm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLm9rLm5vZGUucG9zaXRpb24gPSBjYy52MygwLCB0aGlzLm9rLm5vZGUucG9zaXRpb24ueSwgMCk7XG4gICAgICAgIGlmIChidG5Pa0Rlcykge1xuICAgICAgICAgICAgYnRuT2tEZXMgPT0gJycgPyAn56Gu5a6aJyA6IGJ0bk9rRGVzO1xuICAgICAgICAgICAgdGhpcy5idG5Pa0xhYmVsLnN0cmluZyA9IGJ0bk9rRGVzO1xuICAgICAgICAgICAgaWYgKGJ0bk9rRGVzLmxlbmd0aCA+IDQpIHRoaXMuYnRuT2tMYWJlbC5mb250U2l6ZSA9IDQwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgT25DbGlja0Nsb3NlKCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKFwi5YWz6ZetXCIpO1xuICAgIH1cblxuICAgIC8v6YCa55So5Yqo55S7XG4gICAgVGlwc0FuaW1hdG9yU2NhbGUobm9kZU9iajogY2MuTm9kZSkge1xuICAgICAgICBub2RlT2JqLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHZhciBzZXEgPSBjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMSksIGNjLnNjYWxlVG8oMC4yLCAxLCAxKSk7XG4gICAgICAgIG5vZGVPYmoucnVuQWN0aW9uKHNlcSk7XG4gICAgICAgIC8vIG5vZGVPYmoucnVuQWN0aW9uKGNjLnNjYWxlVG8oMC4yLCAxLCAxKSk7XG4gICAgfVxuXG4gICAgLy9vayAxIOehruiupCAwIOWPlua2iFxuICAgIE9uQ2xpY2tPaygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+ehruiupCcpO1xuICAgICAgICBUMk0uZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfU1VSRSwgbnVsbCk7XG4gICAgfVxuXG4gICAgT25DbGlja0NhbmNlbCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ+WPlua2iCcpO1xuICAgICAgICBUMk0uZGlzcGF0Y2goRnJhbWVNc2dUeXBlLkFGRklSTVRJUFNfQ0FOQ0VMLCBudWxsKTtcbiAgICB9XG5cbiAgICBkaXNwb3NlT2soKSB7XG4gICAgICAgIFVJSGVscC5jbG9zZUFmZmlybVRpcCgpO1xuICAgICAgICB0aGlzLmNhbGxiYWNrICYmIHRoaXMuY2FsbGJhY2soMSk7XG4gICAgfVxuXG4gICAgZGlzcG9zZUNhbmNlbCgpIHtcbiAgICAgICAgVUlIZWxwLmNsb3NlQWZmaXJtVGlwKCk7XG4gICAgICAgIHRoaXMuY2FsbGJhY2sgJiYgdGhpcy5jYWxsYmFjaygwKTtcbiAgICB9XG5cbiAgICAvLyB1cGRhdGUgKGR0KSB7fVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd28fa0BmSFGwY3HLHVIrT8f', 'BoundingBoxHelp');
// frame/scripts/Utils/BoundingBoxHelp.ts

"use strict";
/**
 * Author: kouyaqi
 * Email: kouyaqi@100tal.com
 */
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * 处理sp.Skeleton的边界框的方法；
 * 将此脚本挂载到含有spine资源的节点；
 * 资源顶点越多，贴合越好，性能越低。
 * */
var BoundingBoxHelp = /** @class */ (function (_super) {
    __extends(BoundingBoxHelp, _super);
    function BoundingBoxHelp() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skeleton = null;
        /**插槽的顶点数据 */
        _this.vertices = [];
        /**转换得到的坐标 */
        _this.positions = [];
        return _this;
    }
    BoundingBoxHelp.prototype.getSkeleton = function () {
        if (this.skeleton == null) {
            this.skeleton = this.node.getComponent(sp.Skeleton);
        }
        return this.skeleton;
    };
    /**
     * 获取插槽所绑定的边界框的世界坐标
     * @param slotName 插槽名称
     */
    BoundingBoxHelp.prototype.getBoundingBoxWorldPositions = function (slotName) {
        var skeleton = this.getSkeleton();
        if (skeleton == null) {
            console.warn('没有Spine资源！');
            return this.positions;
        }
        var boundingBoxSlot = skeleton.findSlot(slotName);
        if (!boundingBoxSlot) {
            console.warn("\u6CA1\u6709\u627E\u5230\u63D2\u69FD\uFF1A " + slotName);
            return this.positions;
        }
        var attachment = boundingBoxSlot.attachment;
        /** http://zh.esotericsoftware.com/spine-api-reference#BoundingBoxAttachment
         * Transforms the attachment's local vertices to world coordinates. If the slot has attachmentVertices, they are used to deform the vertices.
         *   See World transforms in the Spine Runtimes Guide.
         */
        attachment.computeWorldVertices(boundingBoxSlot, 0, attachment.worldVerticesLength, this.vertices, 0, 2);
        for (var i = 0; i < this.vertices.length; i += 2) {
            if (!this.positions[i / 2]) {
                this.positions[i / 2] = cc.Vec2.ZERO;
            }
            this.positions[i / 2].x = this.vertices[i];
            this.positions[i / 2].y = this.vertices[i + 1];
        }
        //此时的世界坐标是Spine内部的世界坐标，需要转换为Cocos里的世界坐标
        for (var i = 0; i < this.positions.length; i++) {
            this.positions[i] = this.node.convertToWorldSpaceAR(this.positions[i]);
        }
        return this.positions;
    };
    /**
     * 获取插槽所绑定的边界框相对于节点的坐标
     * @param slotName 插槽名称
     * @param node 相对节点
     */
    BoundingBoxHelp.prototype.getBoundingBoxRelativePositions = function (slotName, node) {
        var positions = this.getBoundingBoxWorldPositions(slotName);
        for (var i = 0; i < positions.length; i++) {
            positions[i] = node.convertToNodeSpaceAR(positions[i]);
        }
        return positions;
    };
    BoundingBoxHelp = __decorate([
        ccclass
    ], BoundingBoxHelp);
    return BoundingBoxHelp;
}(cc.Component));
exports.default = BoundingBoxHelp;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxCb3VuZGluZ0JveEhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUcsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7Ozs7S0FJSztBQUVMO0lBQTZDLG1DQUFZO0lBQXpEO1FBQUEscUVBb0VDO1FBbkVXLGNBQVEsR0FBZ0IsSUFBSSxDQUFDO1FBRXJDLGFBQWE7UUFDTCxjQUFRLEdBQWEsRUFBRSxDQUFDO1FBRWhDLGFBQWE7UUFDTCxlQUFTLEdBQWMsRUFBRSxDQUFDOztJQTZEdEMsQ0FBQztJQTNEVyxxQ0FBVyxHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdkQ7UUFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLHNEQUE0QixHQUFuQyxVQUFvQyxRQUFnQjtRQUNoRCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDM0IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxlQUFlLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0RBQVcsUUFBVSxDQUFDLENBQUM7WUFDcEMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxVQUFVLEdBQUcsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM1Qzs7O1dBR0c7UUFDSCxVQUFVLENBQUMsb0JBQW9CLENBQUMsZUFBZSxFQUFFLENBQUMsRUFBRSxVQUFVLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFekcsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUN4QztZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNsRDtRQUVELHVDQUF1QztRQUN2QyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDNUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMxRTtRQUVELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLHlEQUErQixHQUF0QyxVQUF1QyxRQUFnQixFQUFFLElBQWE7UUFDbEUsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzVELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDMUQ7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNyQixDQUFDO0lBbkVnQixlQUFlO1FBRG5DLE9BQU87T0FDYSxlQUFlLENBb0VuQztJQUFELHNCQUFDO0NBcEVELEFBb0VDLENBcEU0QyxFQUFFLENBQUMsU0FBUyxHQW9FeEQ7a0JBcEVvQixlQUFlIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBdXRob3I6IGtvdXlhcWlcbiAqIEVtYWlsOiBrb3V5YXFpQDEwMHRhbC5jb21cbiAqL1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG4vKipcbiAqIOWkhOeQhnNwLlNrZWxldG9u55qE6L6555WM5qGG55qE5pa55rOV77ybXG4gKiDlsIbmraTohJrmnKzmjILovb3liLDlkKvmnIlzcGluZei1hOa6kOeahOiKgueCue+8m1xuICog6LWE5rqQ6aG254K56LaK5aSa77yM6LS05ZCI6LaK5aW977yM5oCn6IO96LaK5L2O44CCXG4gKiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvdW5kaW5nQm94SGVscCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHJpdmF0ZSBza2VsZXRvbjogc3AuU2tlbGV0b24gPSBudWxsO1xuXG4gICAgLyoq5o+S5qe955qE6aG254K55pWw5o2uICovXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlczogbnVtYmVyW10gPSBbXTtcblxuICAgIC8qKui9rOaNouW+l+WIsOeahOWdkOaghyAqL1xuICAgIHByaXZhdGUgcG9zaXRpb25zOiBjYy5WZWMyW10gPSBbXTtcblxuICAgIHByaXZhdGUgZ2V0U2tlbGV0b24oKSB7XG4gICAgICAgIGlmICh0aGlzLnNrZWxldG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2tlbGV0b24gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5za2VsZXRvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmj5Lmp73miYDnu5HlrprnmoTovrnnlYzmoYbnmoTkuJbnlYzlnZDmoIdcbiAgICAgKiBAcGFyYW0gc2xvdE5hbWUg5o+S5qe95ZCN56ewXG4gICAgICovXG4gICAgcHVibGljIGdldEJvdW5kaW5nQm94V29ybGRQb3NpdGlvbnMoc2xvdE5hbWU6IHN0cmluZyk6IGNjLlZlYzJbXSB7XG4gICAgICAgIGxldCBza2VsZXRvbiA9IHRoaXMuZ2V0U2tlbGV0b24oKTtcbiAgICAgICAgaWYgKHNrZWxldG9uID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign5rKh5pyJU3BpbmXotYTmupDvvIEnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBib3VuZGluZ0JveFNsb3QgPSBza2VsZXRvbi5maW5kU2xvdChzbG90TmFtZSk7XG4gICAgICAgIGlmICghYm91bmRpbmdCb3hTbG90KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYOayoeacieaJvuWIsOaPkuanve+8miAke3Nsb3ROYW1lfWApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGF0dGFjaG1lbnQgPSBib3VuZGluZ0JveFNsb3QuYXR0YWNobWVudDtcbiAgICAgICAgLyoqIGh0dHA6Ly96aC5lc290ZXJpY3NvZnR3YXJlLmNvbS9zcGluZS1hcGktcmVmZXJlbmNlI0JvdW5kaW5nQm94QXR0YWNobWVudFxuICAgICAgICAgKiBUcmFuc2Zvcm1zIHRoZSBhdHRhY2htZW50J3MgbG9jYWwgdmVydGljZXMgdG8gd29ybGQgY29vcmRpbmF0ZXMuIElmIHRoZSBzbG90IGhhcyBhdHRhY2htZW50VmVydGljZXMsIHRoZXkgYXJlIHVzZWQgdG8gZGVmb3JtIHRoZSB2ZXJ0aWNlcy5cbiAgICAgICAgICogICBTZWUgV29ybGQgdHJhbnNmb3JtcyBpbiB0aGUgU3BpbmUgUnVudGltZXMgR3VpZGUuXG4gICAgICAgICAqL1xuICAgICAgICBhdHRhY2htZW50LmNvbXB1dGVXb3JsZFZlcnRpY2VzKGJvdW5kaW5nQm94U2xvdCwgMCwgYXR0YWNobWVudC53b3JsZFZlcnRpY2VzTGVuZ3RoLCB0aGlzLnZlcnRpY2VzLCAwLCAyKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmVydGljZXMubGVuZ3RoOyBpICs9IDIpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3NpdGlvbnNbaSAvIDJdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdID0gY2MuVmVjMi5aRVJPO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdLnggPSB0aGlzLnZlcnRpY2VzW2ldO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaSAvIDJdLnkgPSB0aGlzLnZlcnRpY2VzW2kgKyAxXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q2k5pe255qE5LiW55WM5Z2Q5qCH5pivU3BpbmXlhoXpg6jnmoTkuJbnlYzlnZDmoIfvvIzpnIDopoHovazmjaLkuLpDb2Nvc+mHjOeahOS4lueVjOWdkOagh1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpXSA9IHRoaXMubm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIodGhpcy5wb3NpdGlvbnNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb25zO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluaPkuanveaJgOe7keWumueahOi+ueeVjOahhuebuOWvueS6juiKgueCueeahOWdkOagh1xuICAgICAqIEBwYXJhbSBzbG90TmFtZSDmj5Lmp73lkI3np7BcbiAgICAgKiBAcGFyYW0gbm9kZSDnm7jlr7noioLngrlcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Qm91bmRpbmdCb3hSZWxhdGl2ZVBvc2l0aW9ucyhzbG90TmFtZTogc3RyaW5nLCBub2RlOiBjYy5Ob2RlKTogY2MuVmVjMltdIHtcbiAgICAgICAgbGV0IHBvc2l0aW9ucyA9IHRoaXMuZ2V0Qm91bmRpbmdCb3hXb3JsZFBvc2l0aW9ucyhzbG90TmFtZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBwb3NpdGlvbnNbaV0gPSBub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKHBvc2l0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c9926FhnVH2Z4Gs2ZXOlDV', 'Tools');
// frame/scripts/Utils/Tools.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tools = exports.ArtMoveParam = void 0;
/**美术提供的位移动画参数 */
var ArtMoveParam = /** @class */ (function () {
    /**
     * @param t 时刻，ms
     * @param p 位置
     */
    function ArtMoveParam(t, p) {
        /**时刻，ms */
        this.time = 0;
        /**位置 */
        this.pos = cc.Vec3.ZERO;
        this.time = t;
        this.pos = p;
    }
    return ArtMoveParam;
}());
exports.ArtMoveParam = ArtMoveParam;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tools = /** @class */ (function () {
    function Tools() {
    }
    /**
     * 播放spine动画
     * @param {*} sp_Skeleton 动画文件
     * @param {*} animName 动作名称
     * @param {*} loop 是否循环
     * @param {*} callback 播放完毕回调
     */
    Tools.playSpine = function (sp_Skeleton, animName, loop, callback) {
        // sp_Skeleton.premultipliedAlpha=false;//这样设置在cocos creator中才能有半透明效果
        if (callback === void 0) { callback = null; }
        // let spine = this.node.getComponent(sp.Skeleton);
        var track = sp_Skeleton.setAnimation(0, animName, loop);
        if (track) {
            // 注册动画的结束回调
            sp_Skeleton.setCompleteListener(function (trackEntry, loopCount) {
                var name = trackEntry.animation ? trackEntry.animation.name : '';
                if (name === animName && callback) {
                    callback(); // 动画结束后执行自己的逻辑
                }
            });
        }
    };
    //参数获取
    Tools.getQueryVariable = function (variable) {
        var query = window.location.href;
        var vars = query.split('?');
        if (vars.length < 2)
            return false;
        var vars = vars[1].split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (pair[0] == variable) {
                return pair[1];
            }
        }
        return false;
    };
    /**
     * 使节点直接运行美术提供的位移动画参数，
     * (节点当前位置对应美术参数列表最后一个参数位置，
     * 函数内部会做相对位置的处理)
     * @param node
     * @param params
     * @param endCbk
     */
    Tools.runArtMoveSequence = function (node, params, endCbk) {
        if (endCbk === void 0) { endCbk = null; }
        var nodeOriPos = node.position;
        //节点实际坐标与美术参数坐标的差
        var gapPos = nodeOriPos.sub(params[params.length - 1].pos);
        function transArtPosToNodePos(artPos) {
            return artPos.add(gapPos);
        }
        node.setPosition(transArtPosToNodePos(params[0].pos));
        if (params.length <= 1) {
            if (endCbk)
                endCbk();
            return;
        }
        var actArray = [];
        for (var i = 1; i < params.length - 1; i++) {
            var duration = (params[i].time - params[i - 1].time) * 0.001;
            var p = transArtPosToNodePos(params[i].pos);
            actArray.push(cc.moveTo(duration, cc.v2(p.x, p.y)));
        }
        if (endCbk) {
            actArray.push(cc.callFunc(endCbk));
        }
        node.runAction(cc.sequence(actArray));
    };
    /**获取当前时间戳，毫秒 */
    Tools.getNowTimeMS = function () {
        return new Date().getTime();
    };
    /**获取当前时间戳，秒 */
    Tools.getNowTimeS = function () {
        return Math.floor(new Date().getTime() * 0.001);
    };
    /**
     * 格式化时间， eg: 100 ->  '01:40'
     * @param time 时长，秒
     */
    Tools.getFormatTime = function (time) {
        var min = Math.floor(time / 60);
        if (min < 10) {
            min = '0' + min;
        }
        var sec = time % 60;
        if (sec < 10) {
            sec = '0' + sec;
        }
        return min + ':' + sec;
    };
    Tools = __decorate([
        ccclass
    ], Tools);
    return Tools;
}());
exports.Tools = Tools;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxUb29scy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7Ozs7Ozs7OztBQUVuRyxpQkFBaUI7QUFDakI7SUFNSTs7O09BR0c7SUFDSCxzQkFBWSxDQUFTLEVBQUUsQ0FBVTtRQVRqQyxXQUFXO1FBQ1gsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixRQUFRO1FBQ1IsUUFBRyxHQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBT3hCLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDakIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FkQSxBQWNDLElBQUE7QUFkWSxvQ0FBWTtBQWdCbkIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBQTtJQW9HQSxDQUFDO0lBbkdHOzs7Ozs7T0FNRztJQUNXLGVBQVMsR0FBdkIsVUFBd0IsV0FBd0IsRUFBRSxRQUFnQixFQUFFLElBQWEsRUFBRSxRQUF5QjtRQUN4RyxxRUFBcUU7UUFEVSx5QkFBQSxFQUFBLGVBQXlCO1FBR3hHLG1EQUFtRDtRQUNuRCxJQUFJLEtBQUssR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEVBQUU7WUFDUCxZQUFZO1lBQ1osV0FBVyxDQUFDLG1CQUFtQixDQUFDLFVBQUMsVUFBVSxFQUFFLFNBQVM7Z0JBQ2xELElBQUksSUFBSSxHQUFHLFVBQVUs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SSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGdCQUFnQjtJQUNGLGtCQUFZLEdBQTFCO1FBQ0ksT0FBTyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxlQUFlO0lBQ0QsaUJBQVcsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ1csbUJBQWEsR0FBM0IsVUFBNEIsSUFBWTtRQUNwQyxJQUFJLEdBQUcsR0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztRQUNyQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUU7WUFDVixHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztTQUNuQjtRQUNELElBQUksR0FBRyxHQUFRLElBQUksR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO1lBQ1YsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDbkI7UUFDRCxPQUFPLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0lBQzNCLENBQUM7SUFuR1EsS0FBSztRQURqQixPQUFPO09BQ0ssS0FBSyxDQW9HakI7SUFBRCxZQUFDO0NBcEdELEFBb0dDLElBQUE7QUFwR1ksc0JBQUsiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG4vKirnvo7mnK/mj5DkvpvnmoTkvY3np7vliqjnlLvlj4LmlbAgKi9cbmV4cG9ydCBjbGFzcyBBcnRNb3ZlUGFyYW0ge1xuICAgIC8qKuaXtuWIu++8jG1zICovXG4gICAgdGltZTogbnVtYmVyID0gMDtcbiAgICAvKirkvY3nva4gKi9cbiAgICBwb3M6IGNjLlZlYzMgPSBjYy5WZWMzLlpFUk87XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gdCDml7bliLvvvIxtc1xuICAgICAqIEBwYXJhbSBwIOS9jee9rlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHQ6IG51bWJlciwgcDogY2MuVmVjMykge1xuICAgICAgICB0aGlzLnRpbWUgPSB0O1xuICAgICAgICB0aGlzLnBvcyA9IHA7XG4gICAgfVxufVxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFRvb2xzIHtcbiAgICAvKipcbiAgICAgKiDmkq3mlL5zcGluZeWKqOeUu1xuICAgICAqIEBwYXJhbSB7Kn0gc3BfU2tlbGV0b24g5Yqo55S75paH5Lu2XG4gICAgICogQHBhcmFtIHsqfSBhbmltTmFtZSDliqjkvZzlkI3np7BcbiAgICAgKiBAcGFyYW0geyp9IGxvb3Ag5piv5ZCm5b6q546vXG4gICAgICogQHBhcmFtIHsqfSBjYWxsYmFjayDmkq3mlL7lrozmr5Xlm57osINcbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHBsYXlTcGluZShzcF9Ta2VsZXRvbjogc3AuU2tlbGV0b24sIGFuaW1OYW1lOiBzdHJpbmcsIGxvb3A6IGJvb2xlYW4sIGNhbGxiYWNrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgLy8gc3BfU2tlbGV0b24ucHJlbXVsdGlwbGllZEFscGhhPWZhbHNlOy8v6L+Z5qC36K6+572u5ZyoY29jb3MgY3JlYXRvcuS4reaJjeiDveacieWNiumAj+aYjuaViOaenFxuXG4gICAgICAgIC8vIGxldCBzcGluZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pO1xuICAgICAgICBsZXQgdHJhY2sgPSBzcF9Ta2VsZXRvbi5zZXRBbmltYXRpb24oMCwgYW5pbU5hbWUsIGxvb3ApO1xuICAgICAgICBpZiAodHJhY2spIHtcbiAgICAgICAgICAgIC8vIOazqOWGjOWKqOeUu+eahOe7k+adn+Wbnuiwg1xuICAgICAgICAgICAgc3BfU2tlbGV0b24uc2V0Q29tcGxldGVMaXN0ZW5lcigodHJhY2tFbnRyeSwgbG9vcENvdW50KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSB0cmFja0VudHJ5LmFuaW1hdGlvbiA/IHRyYWNrRW50cnkuYW5pbWF0aW9uLm5hbWUgOiAnJztcbiAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gYW5pbU5hbWUgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTsgLy8g5Yqo55S757uT5p2f5ZCO5omn6KGM6Ieq5bex55qE6YC76L6RXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WPguaVsOiOt+WPllxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UXVlcnlWYXJpYWJsZSh2YXJpYWJsZTogc3RyaW5nKSB7XG4gICAgICAgIHZhciBxdWVyeSA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB2YXIgdmFycyA9IHF1ZXJ5LnNwbGl0KCc/Jyk7XG4gICAgICAgIGlmICh2YXJzLmxlbmd0aCA8IDIpIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHZhcnMgPSB2YXJzWzFdLnNwbGl0KCcmJyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHZhcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgICAgICAgIGlmIChwYWlyWzBdID09IHZhcmlhYmxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhaXJbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9v+iKgueCueebtOaOpei/kOihjOe+juacr+aPkOS+m+eahOS9jeenu+WKqOeUu+WPguaVsO+8jFxuICAgICAqICjoioLngrnlvZPliY3kvY3nva7lr7nlupTnvo7mnK/lj4LmlbDliJfooajmnIDlkI7kuIDkuKrlj4LmlbDkvY3nva7vvIxcbiAgICAgKiDlh73mlbDlhoXpg6jkvJrlgZrnm7jlr7nkvY3nva7nmoTlpITnkIYpXG4gICAgICogQHBhcmFtIG5vZGVcbiAgICAgKiBAcGFyYW0gcGFyYW1zXG4gICAgICogQHBhcmFtIGVuZENia1xuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcnVuQXJ0TW92ZVNlcXVlbmNlKG5vZGU6IGNjLk5vZGUsIHBhcmFtczogQXJyYXk8QXJ0TW92ZVBhcmFtPiwgZW5kQ2JrOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgbGV0IG5vZGVPcmlQb3MgPSBub2RlLnBvc2l0aW9uO1xuICAgICAgICAvL+iKgueCueWunumZheWdkOagh+S4jue+juacr+WPguaVsOWdkOagh+eahOW3rlxuICAgICAgICBsZXQgZ2FwUG9zID0gbm9kZU9yaVBvcy5zdWIocGFyYW1zW3BhcmFtcy5sZW5ndGggLSAxXS5wb3MpO1xuICAgICAgICBmdW5jdGlvbiB0cmFuc0FydFBvc1RvTm9kZVBvcyhhcnRQb3M6IGNjLlZlYzMpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnRQb3MuYWRkKGdhcFBvcyk7XG4gICAgICAgIH1cbiAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0cmFuc0FydFBvc1RvTm9kZVBvcyhwYXJhbXNbMF0ucG9zKSk7XG5cbiAgICAgICAgaWYgKHBhcmFtcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgaWYgKGVuZENiaykgZW5kQ2JrKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYWN0QXJyYXk6IEFycmF5PGNjLkZpbml0ZVRpbWVBY3Rpb24+ID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcGFyYW1zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgICAgICAgbGV0IGR1cmF0aW9uID0gKHBhcmFtc1tpXS50aW1lIC0gcGFyYW1zW2kgLSAxXS50aW1lKSAqIDAuMDAxO1xuICAgICAgICAgICAgbGV0IHAgPSB0cmFuc0FydFBvc1RvTm9kZVBvcyhwYXJhbXNbaV0ucG9zKTtcbiAgICAgICAgICAgIGFjdEFycmF5LnB1c2goY2MubW92ZVRvKGR1cmF0aW9uLCBjYy52MihwLngsIHAueSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZW5kQ2JrKSB7XG4gICAgICAgICAgICBhY3RBcnJheS5wdXNoKGNjLmNhbGxGdW5jKGVuZENiaykpO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0QXJyYXkpKTtcbiAgICB9XG5cbiAgICAvKirojrflj5blvZPliY3ml7bpl7TmiLPvvIzmr6vnp5IgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldE5vd1RpbWVNUygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIH1cblxuICAgIC8qKuiOt+WPluW9k+WJjeaXtumXtOaIs++8jOenkiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Tm93VGltZVMoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKG5ldyBEYXRlKCkuZ2V0VGltZSgpICogMC4wMDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOagvOW8j+WMluaXtumXtO+8jCBlZzogMTAwIC0+ICAnMDE6NDAnXG4gICAgICogQHBhcmFtIHRpbWUg5pe26ZW/77yM56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRGb3JtYXRUaW1lKHRpbWU6IG51bWJlcikge1xuICAgICAgICBsZXQgbWluOiBhbnkgPSBNYXRoLmZsb29yKHRpbWUgLyA2MCk7XG4gICAgICAgIGlmIChtaW4gPCAxMCkge1xuICAgICAgICAgICAgbWluID0gJzAnICsgbWluO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWM6IGFueSA9IHRpbWUgJSA2MDtcbiAgICAgICAgaWYgKHNlYyA8IDEwKSB7XG4gICAgICAgICAgICBzZWMgPSAnMCcgKyBzZWM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1pbiArICc6JyArIHNlYztcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd5f9dT/06tF45iF1u1hFPMw', 'BoundingBoxDemo');
// frame/scripts/Utils/BoundingBoxDemo.ts

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
var BoundingBoxHelp_1 = require("./BoundingBoxHelp");
/**
 * Author: kouyaqi
 * Email: kouyaqi@100tal.com
 */
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
/**
 * BoundingBoxHelp 的使用例子
 */
var BoundingboxDemo = /** @class */ (function (_super) {
    __extends(BoundingboxDemo, _super);
    function BoundingboxDemo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bbh = null;
        _this.grs = null;
        return _this;
    }
    BoundingboxDemo.prototype.update = function (dt) {
        this.grs.clear();
        //把边界框绘制出来
        var postions = this.bbh.getBoundingBoxWorldPositions('boundingBox');
        this.polygon(this.grs, postions);
        this.grs.stroke();
    };
    /**
     * 绘制多边形路径，至少3条边
     * @param poss
     */
    BoundingboxDemo.prototype.polygon = function (graphics, poss) {
        if (poss.length < 3)
            return;
        graphics.moveTo(poss[0].x, poss[0].y);
        for (var i = 1; i < poss.length; i++) {
            graphics.lineTo(poss[i].x, poss[i].y);
        }
        graphics.lineTo(poss[0].x, poss[0].y);
    };
    __decorate([
        property(BoundingBoxHelp_1.default)
    ], BoundingboxDemo.prototype, "bbh", void 0);
    __decorate([
        property(cc.Graphics)
    ], BoundingboxDemo.prototype, "grs", void 0);
    BoundingboxDemo = __decorate([
        ccclass
    ], BoundingboxDemo);
    return BoundingboxDemo;
}(cc.Component));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxCb3VuZGluZ0JveERlbW8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscURBQWdEO0FBRWhEOzs7R0FHRztBQUVHLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDOztHQUVHO0FBRUg7SUFBOEIsbUNBQVk7SUFBMUM7UUFBQSxxRUE0QkM7UUExQlcsU0FBRyxHQUFvQixJQUFJLENBQUM7UUFHNUIsU0FBRyxHQUFnQixJQUFJLENBQUM7O0lBdUJwQyxDQUFDO0lBckJHLGdDQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVqQixVQUFVO1FBQ1YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssaUNBQU8sR0FBZixVQUFnQixRQUFxQixFQUFFLElBQWU7UUFDbEQsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFBRSxPQUFPO1FBQzVCLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QztRQUNELFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQXpCRDtRQURDLFFBQVEsQ0FBQyx5QkFBZSxDQUFDO2dEQUNVO0lBR3BDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0RBQ1U7SUFMOUIsZUFBZTtRQURwQixPQUFPO09BQ0YsZUFBZSxDQTRCcEI7SUFBRCxzQkFBQztDQTVCRCxBQTRCQyxDQTVCNkIsRUFBRSxDQUFDLFNBQVMsR0E0QnpDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJvdW5kaW5nQm94SGVscCBmcm9tICcuL0JvdW5kaW5nQm94SGVscCc7XG5cbi8qKlxuICogQXV0aG9yOiBrb3V5YXFpXG4gKiBFbWFpbDoga291eWFxaUAxMDB0YWwuY29tXG4gKi9cblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuLyoqXG4gKiBCb3VuZGluZ0JveEhlbHAg55qE5L2/55So5L6L5a2QXG4gKi9cbkBjY2NsYXNzXG5jbGFzcyBCb3VuZGluZ2JveERlbW8gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShCb3VuZGluZ0JveEhlbHApXG4gICAgcHJpdmF0ZSBiYmg6IEJvdW5kaW5nQm94SGVscCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuR3JhcGhpY3MpXG4gICAgcHJpdmF0ZSBncnM6IGNjLkdyYXBoaWNzID0gbnVsbDtcblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICB0aGlzLmdycy5jbGVhcigpO1xuXG4gICAgICAgIC8v5oqK6L6555WM5qGG57uY5Yi25Ye65p2lXG4gICAgICAgIGxldCBwb3N0aW9ucyA9IHRoaXMuYmJoLmdldEJvdW5kaW5nQm94V29ybGRQb3NpdGlvbnMoJ2JvdW5kaW5nQm94Jyk7XG4gICAgICAgIHRoaXMucG9seWdvbih0aGlzLmdycywgcG9zdGlvbnMpO1xuICAgICAgICB0aGlzLmdycy5zdHJva2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDnu5jliLblpJrovrnlvaLot6/lvoTvvIzoh7PlsJEz5p2h6L65XG4gICAgICogQHBhcmFtIHBvc3NcbiAgICAgKi9cbiAgICBwcml2YXRlIHBvbHlnb24oZ3JhcGhpY3M6IGNjLkdyYXBoaWNzLCBwb3NzOiBjYy5WZWMyW10pIHtcbiAgICAgICAgaWYgKHBvc3MubGVuZ3RoIDwgMykgcmV0dXJuO1xuICAgICAgICBncmFwaGljcy5tb3ZlVG8ocG9zc1swXS54LCBwb3NzWzBdLnkpO1xuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHBvc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVUbyhwb3NzW2ldLngsIHBvc3NbaV0ueSk7XG4gICAgICAgIH1cbiAgICAgICAgZ3JhcGhpY3MubGluZVRvKHBvc3NbMF0ueCwgcG9zc1swXS55KTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5171dGpWFGFZGEuFaQdUkt', 'AudioPlayExtension');
// frame/scripts/Utils/AudioPlayExtension.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayExtension = void 0;
var SoundManager_1 = require("./../Manager/SoundManager");
/**期望发音与'resources/audio'文件夹下资源名称的对应配置 */
var AudioConfig = {
    例: 'sfx_buttn',
    子: 'sfx_error',
};
/**音频播放扩展方法 */
var AudioPlayExtension = /** @class */ (function () {
    function AudioPlayExtension() {
    }
    /**
     * 播放多个音频资源组成的一段内容
     * @param content AudioConfig中的key组成的内容, eg: '例子例子'
     * @param finish 完成回调
     */
    AudioPlayExtension.playJoinAudio = function (content, finish) {
        if (content.length == 0) {
            console.warn('playJoinAudio : 内容为空!');
            finish();
            return;
        }
        var idx = 0;
        function next() {
            if (idx > content.length - 1) {
                console.log("'" + content + "' \u64AD\u653E\u5B8C\u6210.");
                finish();
                return;
            }
            SoundManager_1.SoundManager.playEffect(AudioConfig[content[idx]], false, false, false, next);
            idx++;
        }
        next();
    };
    return AudioPlayExtension;
}());
exports.AudioPlayExtension = AudioPlayExtension;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxBdWRpb1BsYXlFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXlEO0FBRXpELHlDQUF5QztBQUN6QyxJQUFJLFdBQVcsR0FBRztJQUNkLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFdBQVc7Q0FDakIsQ0FBQztBQUVGLGNBQWM7QUFDZDtJQUFBO0lBMEJBLENBQUM7SUF6Qkc7Ozs7T0FJRztJQUNXLGdDQUFhLEdBQTNCLFVBQTRCLE9BQWUsRUFBRSxNQUFnQjtRQUN6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztRQUNwQixTQUFTLElBQUk7WUFDVCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFJLE9BQU8sZ0NBQVMsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLEVBQUUsQ0FBQztnQkFDVCxPQUFPO2FBQ1Y7WUFFRCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUUsR0FBRyxFQUFFLENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuXG4vKirmnJ/mnJvlj5Hpn7PkuI4ncmVzb3VyY2VzL2F1ZGlvJ+aWh+S7tuWkueS4i+i1hOa6kOWQjeensOeahOWvueW6lOmFjee9riAqL1xubGV0IEF1ZGlvQ29uZmlnID0ge1xuICAgIOS+izogJ3NmeF9idXR0bicsXG4gICAg5a2QOiAnc2Z4X2Vycm9yJyxcbn07XG5cbi8qKumfs+mikeaSreaUvuaJqeWxleaWueazlSAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheUV4dGVuc2lvbiB7XG4gICAgLyoqXG4gICAgICog5pKt5pS+5aSa5Liq6Z+z6aKR6LWE5rqQ57uE5oiQ55qE5LiA5q615YaF5a65XG4gICAgICogQHBhcmFtIGNvbnRlbnQgQXVkaW9Db25maWfkuK3nmoRrZXnnu4TmiJDnmoTlhoXlrrksIGVnOiAn5L6L5a2Q5L6L5a2QJ1xuICAgICAqIEBwYXJhbSBmaW5pc2gg5a6M5oiQ5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwbGF5Sm9pbkF1ZGlvKGNvbnRlbnQ6IHN0cmluZywgZmluaXNoOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoY29udGVudC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdwbGF5Sm9pbkF1ZGlvIDog5YaF5a655Li656m6IScpO1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSAwO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKGlkeCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAnJHtjb250ZW50fScg5pKt5pS+5a6M5oiQLmApO1xuICAgICAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoQXVkaW9Db25maWdbY29udGVudFtpZHhdXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgbmV4dCk7XG4gICAgICAgICAgICBpZHgrKztcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '98b4e33oG1P47hj2twQ6/jN', 'FrameSyncData');
// frame/scripts/Data/FrameSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameSyncData = void 0;
/**
 * 框架中需要同步的数据
 * 对应 SyncDataManager.syncData.frameSyncData
 * @class FrameSyncData
 */
var FrameSyncData = /** @class */ (function () {
    function FrameSyncData() {
        this.actionId = 0; // 操作指令id
        this.isDispose = true; // 是否处理全量数据
        this.hasReplayCount = 0; // 已重玩的次数
        this.isGameOver = false; // 游戏是否结束
    }
    return FrameSyncData;
}());
exports.FrameSyncData = FrameSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7R0FJRztBQUNIO0lBQUE7UUFDVyxhQUFRLEdBQVcsQ0FBQyxDQUFDLENBQUMsU0FBUztRQUMvQixjQUFTLEdBQVksSUFBSSxDQUFDLENBQUMsV0FBVztRQUN0QyxtQkFBYyxHQUFXLENBQUMsQ0FBQyxDQUFDLFNBQVM7UUFDckMsZUFBVSxHQUFZLEtBQUssQ0FBQyxDQUFDLFNBQVM7SUFDakQsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSxzQ0FBYSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog5qGG5p625Lit6ZyA6KaB5ZCM5q2l55qE5pWw5o2uXG4gKiDlr7nlupQgU3luY0RhdGFNYW5hZ2VyLnN5bmNEYXRhLmZyYW1lU3luY0RhdGFcbiAqIEBjbGFzcyBGcmFtZVN5bmNEYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBGcmFtZVN5bmNEYXRhIHtcbiAgICBwdWJsaWMgYWN0aW9uSWQ6IG51bWJlciA9IDA7IC8vIOaTjeS9nOaMh+S7pGlkXG4gICAgcHVibGljIGlzRGlzcG9zZTogYm9vbGVhbiA9IHRydWU7IC8vIOaYr+WQpuWkhOeQhuWFqOmHj+aVsOaNrlxuICAgIHB1YmxpYyBoYXNSZXBsYXlDb3VudDogbnVtYmVyID0gMDsgLy8g5bey6YeN546p55qE5qyh5pWwXG4gICAgcHVibGljIGlzR2FtZU92ZXI6IGJvb2xlYW4gPSBmYWxzZTsgLy8g5ri45oiP5piv5ZCm57uT5p2fXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/UIHelp.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c44e6cLg85JzaIFNvBdsH7x', 'UIHelp');
// frame/scripts/Utils/UIHelp.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UIHelp = void 0;
var GamePanel_1 = require("../../../game/scripts/UI/panel/GamePanel");
var TeacherPanel_1 = require("../../../game/scripts/UI/panel/TeacherPanel");
var FrameMsgType_1 = require("../Data/FrameMsgType");
var ListenerManager_1 = require("../Manager/ListenerManager");
var UIManager_1 = require("../Manager/UIManager");
var AffirmTips_1 = require("../UI/Panel/AffirmTips");
var ErrorPanel_1 = require("../UI/Panel/ErrorPanel");
var OverTips_1 = require("../UI/Panel/OverTips");
var StarCount_1 = require("../UI/Panel/StarCount");
var SubmissionPanel_1 = require("../UI/Panel/SubmissionPanel");
var TipUI_1 = require("../UI/Panel/TipUI");
var UploadAndReturnPanel_1 = require("../UI/Panel/UploadAndReturnPanel");
var UIHelpClass = /** @class */ (function () {
    function UIHelpClass() {
    }
    UIHelpClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new UIHelpClass();
        }
        return this._instance;
    };
    /**
     *
     * @param message tips文字内容
     */
    UIHelpClass.prototype.showTip = function (message) {
        var _this = this;
        var tipUI = UIManager_1.UIManager.getUI(TipUI_1.TipUI);
        if (!tipUI) {
            UIManager_1.UIManager.openUI(TipUI_1.TipUI, null, UIManager_1.EPANEL_ZORDER.TIPS, function () {
                _this.showTip(message);
            });
        }
        else {
            tipUI.showTip(message);
        }
    };
    /**
     * 结束tip
     * @param type tips类型   0: 错误  1：答对了  2：闯关成功(一直显示不会关闭)
     * @param {string} str           提示内容
     * @param {Function} callback    回调函数
     * @param {string} endTitle      end动效提示文字
     * @param {boolean} isShowReplay     是否显示重玩按钮
     * @param {boolean} isShowClose     是否显示关闭按钮
     * @param {boolean} autoOff     是否自动关闭
     */
    UIHelpClass.prototype.showOverTips = function (type, str, callback, endTitle, isShowReplay, isShowClose, autoOff) {
        var _this = this;
        if (str === void 0) { str = ''; }
        if (callback === void 0) { callback = null; }
        if (isShowClose === void 0) { isShowClose = false; }
        if (autoOff === void 0) { autoOff = true; }
        var overTips = UIManager_1.UIManager.getUI(OverTips_1.OverTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(OverTips_1.OverTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showOverTips(type, str, callback, endTitle, isShowReplay, autoOff);
            });
        }
        else {
            overTips.init(type, str, callback, endTitle, isShowReplay, isShowClose, autoOff);
        }
    };
    UIHelpClass.prototype.closeOverTips = function () {
        UIManager_1.UIManager.closeUI(OverTips_1.OverTips);
    };
    /**
     * 星级评测页面(学生自己可GameData StudentData数据自动刷新，同步则需要传参)
     * @param isShowReplay 是否显示重玩按钮
     * @param starNum 星数 (不传参数则从ReportManager里取值)
     */
    UIHelpClass.prototype.showStarCount = function (isShowReplay, starNum) {
        var _this = this;
        var starCount = UIManager_1.UIManager.getUI(StarCount_1.default);
        if (!starCount) {
            UIManager_1.UIManager.openUI(StarCount_1.default, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showStarCount(isShowReplay, starNum);
            });
        }
        else {
            starCount.showStars(isShowReplay, starNum);
        }
    };
    UIHelpClass.prototype.closeStarCount = function () {
        UIManager_1.UIManager.closeUI(StarCount_1.default);
    };
    /**
     * 二次确认框
     * @param type tips类型  0:内容tips   1:系统tips
     * @param des tips文字内容
     * @param callback 按钮回调
     * @param btnCloselDes 关闭按钮文字描述
     * @param btnOkDes OK按钮文字描述
     */
    UIHelpClass.prototype.showAffirmTip = function (type, des, callback, btnCloselDes, btnOkDes) {
        var _this = this;
        var overTips = UIManager_1.UIManager.getUI(AffirmTips_1.AffirmTips);
        if (!overTips) {
            UIManager_1.UIManager.openUI(AffirmTips_1.AffirmTips, null, UIManager_1.EPANEL_ZORDER.POPUP, function () {
                _this.showAffirmTip(type, des, callback, btnCloselDes, btnOkDes);
            });
        }
        else {
            overTips.init(type, des, callback, btnCloselDes, btnOkDes);
        }
    };
    UIHelpClass.prototype.closeAffirmTip = function () {
        UIManager_1.UIManager.closeUI(AffirmTips_1.AffirmTips);
    };
    /**
     * 错误弹窗
     * @param shuoMing 错误说明
     * @param biaoTi 标题文字
     * @param tiShi 提示文字
     * @param btnLab 按钮文字
     * @param callBack 回调函数
     * @param isClose 是否可关闭
     */
    UIHelpClass.prototype.showErrorPanel = function (shuoMing, biaoTi, tiShi, btnLab, callBack, isClose) {
        var _this = this;
        if (isClose === void 0) { isClose = false; }
        var errorPanel = UIManager_1.UIManager.getUI(ErrorPanel_1.default);
        if (!errorPanel) {
            UIManager_1.UIManager.openUI(ErrorPanel_1.default, null, UIManager_1.EPANEL_ZORDER.ERROR, function () {
                _this.showErrorPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
            });
        }
        else {
            errorPanel.setPanel(shuoMing, biaoTi, tiShi, btnLab, callBack, isClose);
        }
    };
    UIHelpClass.prototype.closeErrorPanel = function () {
        UIManager_1.UIManager.closeUI(ErrorPanel_1.default);
    };
    /**
     * 提交、返回
     */
    UIHelpClass.prototype.showUploadAndReturnPanel = function () {
        UIManager_1.UIManager.showUI(UploadAndReturnPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeUploadAndReturnPanel = function () {
        UIManager_1.UIManager.closeUI(UploadAndReturnPanel_1.default);
    };
    UIHelpClass.prototype.showSubmissionPanel = function () {
        UIManager_1.UIManager.showUI(SubmissionPanel_1.default, null, UIManager_1.EPANEL_ZORDER.SUBMISSION);
    };
    UIHelpClass.prototype.closeSubmissionPanel = function () {
        UIManager_1.UIManager.closeUI(SubmissionPanel_1.default);
    };
    UIHelpClass.prototype.showGamePanel = function (callback) {
        UIManager_1.UIManager.openUI(GamePanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeGamePanel = function () {
        UIManager_1.UIManager.closeUI(GamePanel_1.default);
    };
    UIHelpClass.prototype.showTeacherPanel = function (callback) {
        UIManager_1.UIManager.openUI(TeacherPanel_1.default, null, UIManager_1.EPANEL_ZORDER.NORMAL, callback);
    };
    UIHelpClass.prototype.closeTeacherPanel = function () {
        UIManager_1.UIManager.closeUI(TeacherPanel_1.default);
    };
    /**
     * 显示遮罩
     * @param isShowLoading 是否显示Loading
     */
    UIHelpClass.prototype.showMask = function (isShowLoading) {
        if (isShowLoading === void 0) { isShowLoading = false; }
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, true, isShowLoading);
    };
    /**
     * 隐藏遮罩
     */
    UIHelpClass.prototype.closeMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.ON_MASK, false);
    };
    /**
     * 显示数据恢复遮罩
     */
    UIHelpClass.prototype.showRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, true);
    };
    /**
     * 隐藏数据恢复遮罩
     */
    UIHelpClass.prototype.closeRecoverMask = function () {
        ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.MASK_RECOVER, false);
    };
    UIHelpClass._instance = null;
    return UIHelpClass;
}());
exports.UIHelp = UIHelpClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxVSUhlbHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0VBQWlFO0FBQ2pFLDRFQUF1RTtBQUN2RSxxREFBb0Q7QUFDcEQsOERBQTZEO0FBQzdELGtEQUFnRTtBQUNoRSxxREFBb0Q7QUFDcEQscURBQWdEO0FBQ2hELGlEQUFnRDtBQUNoRCxtREFBOEM7QUFDOUMsK0RBQTBEO0FBQzFELDJDQUEwQztBQUMxQyx5RUFBb0U7QUFFcEU7SUFBQTtJQXlNQSxDQUFDO0lBdE1pQix1QkFBVyxHQUF6QjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQU8sR0FBZCxVQUFlLE9BQWU7UUFBOUIsaUJBU0M7UUFSRyxJQUFJLEtBQUssR0FBRyxxQkFBUyxDQUFDLEtBQUssQ0FBQyxhQUFLLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ1IscUJBQVMsQ0FBQyxNQUFNLENBQUMsYUFBSyxFQUFFLElBQUksRUFBRSx5QkFBYSxDQUFDLElBQUksRUFBRTtnQkFDOUMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQixDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7Ozs7T0FTRztJQUNJLGtDQUFZLEdBQW5CLFVBQ0ksSUFBWSxFQUNaLEdBQWdCLEVBQ2hCLFFBQXlCLEVBQ3pCLFFBQWlCLEVBQ2pCLFlBQXNCLEVBQ3RCLFdBQTRCLEVBQzVCLE9BQXVCO1FBUDNCLGlCQWlCQztRQWZHLG9CQUFBLEVBQUEsUUFBZ0I7UUFDaEIseUJBQUEsRUFBQSxlQUF5QjtRQUd6Qiw0QkFBQSxFQUFBLG1CQUE0QjtRQUM1Qix3QkFBQSxFQUFBLGNBQXVCO1FBRXZCLElBQUksUUFBUSxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDLG1CQUFRLENBQUMsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ1gscUJBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVEsRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ2xELEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQ3BGO0lBQ0wsQ0FBQztJQUVNLG1DQUFhLEdBQXBCO1FBQ0kscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQVEsQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksbUNBQWEsR0FBcEIsVUFBcUIsWUFBc0IsRUFBRSxPQUFnQjtRQUE3RCxpQkFTQztRQVJHLElBQUksU0FBUyxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDLG1CQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ1oscUJBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVMsRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ25ELEtBQUksQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTTtZQUNILFNBQVMsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzlDO0lBQ0wsQ0FBQztJQUVNLG9DQUFjLEdBQXJCO1FBQ0kscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksbUNBQWEsR0FBcEIsVUFDSSxJQUFZLEVBQ1osR0FBVyxFQUNYLFFBQWdDLEVBQ2hDLFlBQXFCLEVBQ3JCLFFBQWlCO1FBTHJCLGlCQWVDO1FBUkcsSUFBSSxRQUFRLEdBQUcscUJBQVMsQ0FBQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxxQkFBUyxDQUFDLE1BQU0sQ0FBQyx1QkFBVSxFQUFFLElBQUksRUFBRSx5QkFBYSxDQUFDLEtBQUssRUFBRTtnQkFDcEQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDcEUsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUFNO1lBQ0gsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsUUFBUSxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDO0lBRU0sb0NBQWMsR0FBckI7UUFDSSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyx1QkFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOzs7Ozs7OztPQVFHO0lBQ0ksb0NBQWMsR0FBckIsVUFDSSxRQUFnQixFQUNoQixNQUFlLEVBQ2YsS0FBYyxFQUNkLE1BQWUsRUFDZixRQUFtQixFQUNuQixPQUF3QjtRQU41QixpQkFnQkM7UUFWRyx3QkFBQSxFQUFBLGVBQXdCO1FBRXhCLElBQUksVUFBVSxHQUFHLHFCQUFTLENBQUMsS0FBSyxDQUFDLG9CQUFVLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2IscUJBQVMsQ0FBQyxNQUFNLENBQUMsb0JBQVUsRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3BELEtBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUM1RSxDQUFDLENBQUMsQ0FBQztTQUNOO2FBQU07WUFDSCxVQUFVLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7U0FDM0U7SUFDTCxDQUFDO0lBRU0scUNBQWUsR0FBdEI7UUFDSSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxvQkFBVSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksOENBQXdCLEdBQS9CO1FBQ0kscUJBQVMsQ0FBQyxNQUFNLENBQUMsOEJBQW9CLEVBQUUsSUFBSSxFQUFFLHlCQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVNLCtDQUF5QixHQUFoQztRQUNJLHFCQUFTLENBQUMsT0FBTyxDQUFDLDhCQUFvQixDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVNLHlDQUFtQixHQUExQjtRQUNJLHFCQUFTLENBQUMsTUFBTSxDQUFDLHlCQUFlLEVBQUUsSUFBSSxFQUFFLHlCQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLDBDQUFvQixHQUEzQjtRQUNJLHFCQUFTLENBQUMsT0FBTyxDQUFDLHlCQUFlLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRU0sbUNBQWEsR0FBcEIsVUFBcUIsUUFBbUI7UUFDcEMscUJBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQVMsRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVNLG9DQUFjLEdBQXJCO1FBQ0kscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQVMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxzQ0FBZ0IsR0FBdkIsVUFBd0IsUUFBbUI7UUFDdkMscUJBQVMsQ0FBQyxNQUFNLENBQUMsc0JBQVksRUFBRSxJQUFJLEVBQUUseUJBQWEsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVNLHVDQUFpQixHQUF4QjtRQUNJLHFCQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFZLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksOEJBQVEsR0FBZixVQUFnQixhQUE4QjtRQUE5Qiw4QkFBQSxFQUFBLHFCQUE4QjtRQUMxQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDeEUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksK0JBQVMsR0FBaEI7UUFDSSxpQ0FBZSxDQUFDLFFBQVEsQ0FBQywyQkFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUMxRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBZSxHQUF0QjtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNJLHNDQUFnQixHQUF2QjtRQUNJLGlDQUFlLENBQUMsUUFBUSxDQUFDLDJCQUFZLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUF2TWMscUJBQVMsR0FBZ0IsSUFBSSxDQUFDO0lBd01qRCxrQkFBQztDQXpNRCxBQXlNQyxJQUFBO0FBQ1ksUUFBQSxNQUFNLEdBQUcsV0FBVyxDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvR2FtZVBhbmVsJztcclxuaW1wb3J0IFRlYWNoZXJQYW5lbCBmcm9tICcuLi8uLi8uLi9nYW1lL3NjcmlwdHMvVUkvcGFuZWwvVGVhY2hlclBhbmVsJztcclxuaW1wb3J0IHsgRnJhbWVNc2dUeXBlIH0gZnJvbSAnLi4vRGF0YS9GcmFtZU1zZ1R5cGUnO1xyXG5pbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tICcuLi9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XHJcbmltcG9ydCB7IEVQQU5FTF9aT1JERVIsIFVJTWFuYWdlciB9IGZyb20gJy4uL01hbmFnZXIvVUlNYW5hZ2VyJztcclxuaW1wb3J0IHsgQWZmaXJtVGlwcyB9IGZyb20gJy4uL1VJL1BhbmVsL0FmZmlybVRpcHMnO1xyXG5pbXBvcnQgRXJyb3JQYW5lbCBmcm9tICcuLi9VSS9QYW5lbC9FcnJvclBhbmVsJztcclxuaW1wb3J0IHsgT3ZlclRpcHMgfSBmcm9tICcuLi9VSS9QYW5lbC9PdmVyVGlwcyc7XHJcbmltcG9ydCBTdGFyQ291bnQgZnJvbSAnLi4vVUkvUGFuZWwvU3RhckNvdW50JztcclxuaW1wb3J0IFN1Ym1pc3Npb25QYW5lbCBmcm9tICcuLi9VSS9QYW5lbC9TdWJtaXNzaW9uUGFuZWwnO1xyXG5pbXBvcnQgeyBUaXBVSSB9IGZyb20gJy4uL1VJL1BhbmVsL1RpcFVJJztcclxuaW1wb3J0IFVwbG9hZEFuZFJldHVyblBhbmVsIGZyb20gJy4uL1VJL1BhbmVsL1VwbG9hZEFuZFJldHVyblBhbmVsJztcclxuXHJcbmNsYXNzIFVJSGVscENsYXNzIHtcclxuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0YW5jZTogVUlIZWxwQ2xhc3MgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogVUlIZWxwQ2xhc3Mge1xyXG4gICAgICAgIGlmICghdGhpcy5faW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgVUlIZWxwQ2xhc3MoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRpcHPmloflrZflhoXlrrlcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dUaXAobWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHRpcFVJID0gVUlNYW5hZ2VyLmdldFVJKFRpcFVJKTtcclxuICAgICAgICBpZiAoIXRpcFVJKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoVGlwVUksIG51bGwsIEVQQU5FTF9aT1JERVIuVElQUywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwKG1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aXBVSS5zaG93VGlwKG1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOe7k+adn3RpcFxyXG4gICAgICogQHBhcmFtIHR5cGUgdGlwc+exu+WeiyAgIDA6IOmUmeivryAgMe+8muetlOWvueS6hiAgMu+8mumXr+WFs+aIkOWKnyjkuIDnm7TmmL7npLrkuI3kvJrlhbPpl60pXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3RyICAgICAgICAgICDmj5DnpLrlhoXlrrlcclxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrICAgIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGVuZFRpdGxlICAgICAgZW5k5Yqo5pWI5o+Q56S65paH5a2XXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd1JlcGxheSAgICAg5piv5ZCm5pi+56S66YeN546p5oyJ6ZKuXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2hvd0Nsb3NlICAgICDmmK/lkKbmmL7npLrlhbPpl63mjInpkq5cclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYXV0b09mZiAgICAg5piv5ZCm6Ieq5Yqo5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93T3ZlclRpcHMoXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIHN0cjogc3RyaW5nID0gJycsXHJcbiAgICAgICAgY2FsbGJhY2s6IEZ1bmN0aW9uID0gbnVsbCxcclxuICAgICAgICBlbmRUaXRsZT86IHN0cmluZyxcclxuICAgICAgICBpc1Nob3dSZXBsYXk/OiBib29sZWFuLFxyXG4gICAgICAgIGlzU2hvd0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICAgICAgYXV0b09mZjogYm9vbGVhbiA9IHRydWUsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgb3ZlclRpcHMgPSBVSU1hbmFnZXIuZ2V0VUkoT3ZlclRpcHMpO1xyXG4gICAgICAgIGlmICghb3ZlclRpcHMpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShPdmVyVGlwcywgbnVsbCwgRVBBTkVMX1pPUkRFUi5QT1BVUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93T3ZlclRpcHModHlwZSwgc3RyLCBjYWxsYmFjaywgZW5kVGl0bGUsIGlzU2hvd1JlcGxheSwgYXV0b09mZik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG92ZXJUaXBzLmluaXQodHlwZSwgc3RyLCBjYWxsYmFjaywgZW5kVGl0bGUsIGlzU2hvd1JlcGxheSwgaXNTaG93Q2xvc2UsIGF1dG9PZmYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VPdmVyVGlwcygpIHtcclxuICAgICAgICBVSU1hbmFnZXIuY2xvc2VVSShPdmVyVGlwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmJ/nuqfor4TmtYvpobXpnaIo5a2m55Sf6Ieq5bex5Y+vR2FtZURhdGEgU3R1ZGVudERhdGHmlbDmja7oh6rliqjliLfmlrDvvIzlkIzmraXliJnpnIDopoHkvKDlj4IpXHJcbiAgICAgKiBAcGFyYW0gaXNTaG93UmVwbGF5IOaYr+WQpuaYvuekuumHjeeOqeaMiemSrlxyXG4gICAgICogQHBhcmFtIHN0YXJOdW0g5pif5pWwICjkuI3kvKDlj4LmlbDliJnku45SZXBvcnRNYW5hZ2Vy6YeM5Y+W5YC8KVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc2hvd1N0YXJDb3VudChpc1Nob3dSZXBsYXk/OiBib29sZWFuLCBzdGFyTnVtPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHN0YXJDb3VudCA9IFVJTWFuYWdlci5nZXRVSShTdGFyQ291bnQpO1xyXG4gICAgICAgIGlmICghc3RhckNvdW50KSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoU3RhckNvdW50LCBudWxsLCBFUEFORUxfWk9SREVSLlBPUFVQLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGFyQ291bnQoaXNTaG93UmVwbGF5LCBzdGFyTnVtKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc3RhckNvdW50LnNob3dTdGFycyhpc1Nob3dSZXBsYXksIHN0YXJOdW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdGFyQ291bnQoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3RhckNvdW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS6jOasoeehruiupOahhlxyXG4gICAgICogQHBhcmFtIHR5cGUgdGlwc+exu+WeiyAgMDrlhoXlrrl0aXBzICAgMTrns7vnu590aXBzXHJcbiAgICAgKiBAcGFyYW0gZGVzIHRpcHPmloflrZflhoXlrrlcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjayDmjInpkq7lm57osINcclxuICAgICAqIEBwYXJhbSBidG5DbG9zZWxEZXMg5YWz6Zet5oyJ6ZKu5paH5a2X5o+P6L+wXHJcbiAgICAgKiBAcGFyYW0gYnRuT2tEZXMgT0vmjInpkq7mloflrZfmj4/ov7BcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dBZmZpcm1UaXAoXHJcbiAgICAgICAgdHlwZTogbnVtYmVyLFxyXG4gICAgICAgIGRlczogc3RyaW5nLFxyXG4gICAgICAgIGNhbGxiYWNrOiAodHlwZTogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIGJ0bkNsb3NlbERlcz86IHN0cmluZyxcclxuICAgICAgICBidG5Pa0Rlcz86IHN0cmluZyxcclxuICAgICkge1xyXG4gICAgICAgIGxldCBvdmVyVGlwcyA9IFVJTWFuYWdlci5nZXRVSShBZmZpcm1UaXBzKTtcclxuICAgICAgICBpZiAoIW92ZXJUaXBzKSB7XHJcbiAgICAgICAgICAgIFVJTWFuYWdlci5vcGVuVUkoQWZmaXJtVGlwcywgbnVsbCwgRVBBTkVMX1pPUkRFUi5QT1BVUCwgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93QWZmaXJtVGlwKHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvdmVyVGlwcy5pbml0KHR5cGUsIGRlcywgY2FsbGJhY2ssIGJ0bkNsb3NlbERlcywgYnRuT2tEZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VBZmZpcm1UaXAoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoQWZmaXJtVGlwcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDplJnor6/lvLnnqpdcclxuICAgICAqIEBwYXJhbSBzaHVvTWluZyDplJnor6/or7TmmI5cclxuICAgICAqIEBwYXJhbSBiaWFvVGkg5qCH6aKY5paH5a2XXHJcbiAgICAgKiBAcGFyYW0gdGlTaGkg5o+Q56S65paH5a2XXHJcbiAgICAgKiBAcGFyYW0gYnRuTGFiIOaMiemSruaWh+Wtl1xyXG4gICAgICogQHBhcmFtIGNhbGxCYWNrIOWbnuiwg+WHveaVsFxyXG4gICAgICogQHBhcmFtIGlzQ2xvc2Ug5piv5ZCm5Y+v5YWz6ZetXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93RXJyb3JQYW5lbChcclxuICAgICAgICBzaHVvTWluZzogc3RyaW5nLFxyXG4gICAgICAgIGJpYW9UaT86IHN0cmluZyxcclxuICAgICAgICB0aVNoaT86IHN0cmluZyxcclxuICAgICAgICBidG5MYWI/OiBzdHJpbmcsXHJcbiAgICAgICAgY2FsbEJhY2s/OiBGdW5jdGlvbixcclxuICAgICAgICBpc0Nsb3NlOiBib29sZWFuID0gZmFsc2UsXHJcbiAgICApIHtcclxuICAgICAgICBsZXQgZXJyb3JQYW5lbCA9IFVJTWFuYWdlci5nZXRVSShFcnJvclBhbmVsKTtcclxuICAgICAgICBpZiAoIWVycm9yUGFuZWwpIHtcclxuICAgICAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShFcnJvclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLkVSUk9SLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvclBhbmVsKHNodW9NaW5nLCBiaWFvVGksIHRpU2hpLCBidG5MYWIsIGNhbGxCYWNrLCBpc0Nsb3NlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZXJyb3JQYW5lbC5zZXRQYW5lbChzaHVvTWluZywgYmlhb1RpLCB0aVNoaSwgYnRuTGFiLCBjYWxsQmFjaywgaXNDbG9zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZUVycm9yUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoRXJyb3JQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmj5DkuqTjgIHov5Tlm55cclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dVcGxvYWRBbmRSZXR1cm5QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFVwbG9hZEFuZFJldHVyblBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLlNVQk1JU1NJT04pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVVwbG9hZEFuZFJldHVyblBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKFVwbG9hZEFuZFJldHVyblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd1N1Ym1pc3Npb25QYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKFN1Ym1pc3Npb25QYW5lbCwgbnVsbCwgRVBBTkVMX1pPUkRFUi5TVUJNSVNTSU9OKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvc2VTdWJtaXNzaW9uUGFuZWwoKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLmNsb3NlVUkoU3VibWlzc2lvblBhbmVsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0dhbWVQYW5lbChjYWxsYmFjaz86IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgVUlNYW5hZ2VyLm9wZW5VSShHYW1lUGFuZWwsIG51bGwsIEVQQU5FTF9aT1JERVIuTk9STUFMLCBjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsb3NlR2FtZVBhbmVsKCkge1xyXG4gICAgICAgIFVJTWFuYWdlci5jbG9zZVVJKEdhbWVQYW5lbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNob3dUZWFjaGVyUGFuZWwoY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgICAgIFVJTWFuYWdlci5vcGVuVUkoVGVhY2hlclBhbmVsLCBudWxsLCBFUEFORUxfWk9SREVSLk5PUk1BTCwgY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9zZVRlYWNoZXJQYW5lbCgpIHtcclxuICAgICAgICBVSU1hbmFnZXIuY2xvc2VVSShUZWFjaGVyUGFuZWwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5pi+56S66YGu572pXHJcbiAgICAgKiBAcGFyYW0gaXNTaG93TG9hZGluZyDmmK/lkKbmmL7npLpMb2FkaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzaG93TWFzayhpc1Nob3dMb2FkaW5nOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk9OX01BU0ssIHRydWUsIGlzU2hvd0xvYWRpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6ZqQ6JeP6YGu572pXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbG9zZU1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5PTl9NQVNLLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmmL7npLrmlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIHNob3dSZWNvdmVyTWFzaygpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLk1BU0tfUkVDT1ZFUiwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpmpDol4/mlbDmja7mgaLlpI3pga7nvalcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNsb3NlUmVjb3Zlck1hc2soKSB7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEZyYW1lTXNnVHlwZS5NQVNLX1JFQ09WRVIsIGZhbHNlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY29uc3QgVUlIZWxwID0gVUlIZWxwQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Data/FrameMsgType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '132eegjAf1ENIev+X8ptATq', 'FrameMsgType');
// frame/scripts/Data/FrameMsgType.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FrameMsgType = void 0;
var FrameMsgType = /** @class */ (function () {
    function FrameMsgType() {
    }
    FrameMsgType.ON_EDIT_STATE_SWITCHING = 'ON_EDIT_STATE_SWITCHING';
    // 数据同步类型
    FrameMsgType.ON_TOUCH_CLICK = 'ON_TOUCH_CLICK';
    FrameMsgType.ON_TOUCH_START = 'ON_TOUCH_START';
    FrameMsgType.ON_TOUCH_MOVE = 'ON_TOUCH_MOVE';
    FrameMsgType.ON_TOUCH_END = 'ON_TOUCH_END';
    // 心跳
    FrameMsgType.ON_HEART_BREAK = 'ON_HEART_BREAK';
    // 数据恢复
    FrameMsgType.ON_RECOVERY_DATA = 'ON_RECOVERY_DATA';
    // 再玩一次
    FrameMsgType.REPLAY_START = 'REPLAY_START';
    // 题干语音播放完成
    FrameMsgType.COMPLETE_TRUMPET = 'COMPLETE_TRUMPET';
    /**  全局遮罩 */
    FrameMsgType.ON_MASK = 'ON_MASK';
    // 数据恢复遮罩
    FrameMsgType.MASK_RECOVER = 'MASK_RECOVER';
    // OverTips关闭按钮
    FrameMsgType.OVERTIPS_CLOSE = 'OVERTIPS_CLOSE';
    // AffirmTips确认按钮
    FrameMsgType.AFFIRMTIPS_SURE = 'AFFIRMTIPS_SURE';
    // AffirmTips取消按钮
    FrameMsgType.AFFIRMTIPS_CANCEL = 'AFFIRMTIPS_CANCEL';
    // 第一次接收到心跳
    FrameMsgType.ON_FIRST_BREAK = 'ON_FIRST_BREAK';
    // TeacherPanel的loading层开关
    FrameMsgType.TEACHER_PANEL_LOADING = 'TEACHER_PANEL_LOADING';
    // 预加载-Panel Ready
    FrameMsgType.PRELOAD_GAME_SHOW = 'PRELOAD_GAME_SHOW';
    /*****************************************************************/
    /** SDK内部事件 */
    FrameMsgType.ACTION_SYNC_RECEIVE = 'action_sync_receive'; //游戏操作交互同步  //交互游戏暂不处理此消息
    FrameMsgType.DISABLED = 'disabled'; //是否可以操作游戏 0禁用 1开启 默认1  //交互游戏暂不处理此消息
    FrameMsgType.RELOAD = 'reload'; //重新加载游戏  //在index.html监听
    FrameMsgType.DATA_RECOVERY = 'data_recovery'; //游戏数据恢复
    FrameMsgType.STOP = 'stop'; //停止游戏（游戏需要返回finish）
    FrameMsgType.INIT = 'init'; //恢复游戏到初始化界面
    FrameMsgType.THRESHHOLD = 'threshhold'; //游戏消息频率（默认100ms/次）
    FrameMsgType.PLAYBGM = 'play_bgm'; //播放背景音
    FrameMsgType.RESUMEBGM = 'resume_bgm'; //恢复背景音
    FrameMsgType.STOPBGM = 'stop_bgm'; //停止背景音
    FrameMsgType.PLAYAUDIOTITLE = 'play_audio_title'; //播放题干音
    FrameMsgType.STOPAUDIOTITLE = 'stop_audio_title'; //停止题干音
    FrameMsgType.STOPALLAUDIO = 'stop_all_audio'; //停止语音（包括题干）
    FrameMsgType.STOPALLEFFECT = 'stop_all_effect'; //停止音效
    FrameMsgType.STOPALL = 'stop_all'; //停止所有（不包括背景）
    return FrameMsgType;
}());
exports.FrameMsgType = FrameMsgType;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXERhdGFcXEZyYW1lTXNnVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBcURBLENBQUM7SUFwRDBCLG9DQUF1QixHQUFHLHlCQUF5QixDQUFDO0lBRTNFLFNBQVM7SUFDYywyQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ2xDLDJCQUFjLEdBQUcsZ0JBQWdCLENBQUM7SUFDbEMsMEJBQWEsR0FBRyxlQUFlLENBQUM7SUFDaEMseUJBQVksR0FBRyxjQUFjLENBQUM7SUFDckQsS0FBSztJQUNrQiwyQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ3pELE9BQU87SUFDZ0IsNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDN0QsT0FBTztJQUNnQix5QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUNyRCxXQUFXO0lBQ1ksNkJBQWdCLEdBQUcsa0JBQWtCLENBQUM7SUFDN0QsWUFBWTtJQUNXLG9CQUFPLEdBQUcsU0FBUyxDQUFDO0lBQzNDLFNBQVM7SUFDYyx5QkFBWSxHQUFHLGNBQWMsQ0FBQztJQUNyRCxlQUFlO0lBQ1EsMkJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztJQUN6RCxpQkFBaUI7SUFDTSw0QkFBZSxHQUFHLGlCQUFpQixDQUFDO0lBQzNELGlCQUFpQjtJQUNNLDhCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBQy9ELFdBQVc7SUFDWSwyQkFBYyxHQUFHLGdCQUFnQixDQUFDO0lBQ3pELDBCQUEwQjtJQUNILGtDQUFxQixHQUFHLHVCQUF1QixDQUFDO0lBQ3ZFLGtCQUFrQjtJQUNLLDhCQUFpQixHQUFHLG1CQUFtQixDQUFDO0lBRS9ELG1FQUFtRTtJQUNuRSxjQUFjO0lBQ1MsZ0NBQW1CLEdBQUcscUJBQXFCLENBQUMsQ0FBQyx5QkFBeUI7SUFDdEUscUJBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQyxxQ0FBcUM7SUFDNUQsbUJBQU0sR0FBRyxRQUFRLENBQUMsQ0FBQyx5QkFBeUI7SUFDNUMsMEJBQWEsR0FBRyxlQUFlLENBQUMsQ0FBQyxRQUFRO0lBQ3pDLGlCQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsb0JBQW9CO0lBQ25DLGlCQUFJLEdBQUcsTUFBTSxDQUFDLENBQUMsWUFBWTtJQUMzQix1QkFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLG1CQUFtQjtJQUU5QyxvQkFBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLE9BQU87SUFDN0Isc0JBQVMsR0FBRyxZQUFZLENBQUMsQ0FBQyxPQUFPO0lBQ2pDLG9CQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsT0FBTztJQUM3QiwyQkFBYyxHQUFHLGtCQUFrQixDQUFDLENBQUMsT0FBTztJQUM1QywyQkFBYyxHQUFHLGtCQUFrQixDQUFDLENBQUMsT0FBTztJQUM1Qyx5QkFBWSxHQUFHLGdCQUFnQixDQUFDLENBQUMsWUFBWTtJQUM3QywwQkFBYSxHQUFHLGlCQUFpQixDQUFDLENBQUMsTUFBTTtJQUN6QyxvQkFBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLGFBQWE7SUFHOUQsbUJBQUM7Q0FyREQsQUFxREMsSUFBQTtBQXJEWSxvQ0FBWSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBGcmFtZU1zZ1R5cGUge1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT05fRURJVF9TVEFURV9TV0lUQ0hJTkcgPSAnT05fRURJVF9TVEFURV9TV0lUQ0hJTkcnO1xuXG4gICAgLy8g5pWw5o2u5ZCM5q2l57G75Z6LXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9UT1VDSF9DTElDSyA9ICdPTl9UT1VDSF9DTElDSyc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9UT1VDSF9TVEFSVCA9ICdPTl9UT1VDSF9TVEFSVCc7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9UT1VDSF9NT1ZFID0gJ09OX1RPVUNIX01PVkUnO1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgT05fVE9VQ0hfRU5EID0gJ09OX1RPVUNIX0VORCc7XG4gICAgLy8g5b+D6LezXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9IRUFSVF9CUkVBSyA9ICdPTl9IRUFSVF9CUkVBSyc7XG4gICAgLy8g5pWw5o2u5oGi5aSNXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9SRUNPVkVSWV9EQVRBID0gJ09OX1JFQ09WRVJZX0RBVEEnO1xuICAgIC8vIOWGjeeOqeS4gOasoVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVQTEFZX1NUQVJUID0gJ1JFUExBWV9TVEFSVCc7XG4gICAgLy8g6aKY5bmy6K+t6Z+z5pKt5pS+5a6M5oiQXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDT01QTEVURV9UUlVNUEVUID0gJ0NPTVBMRVRFX1RSVU1QRVQnO1xuICAgIC8qKiAg5YWo5bGA6YGu572pICovXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9NQVNLID0gJ09OX01BU0snO1xuICAgIC8vIOaVsOaNruaBouWkjemBrue9qVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgTUFTS19SRUNPVkVSID0gJ01BU0tfUkVDT1ZFUic7XG4gICAgLy8gT3ZlclRpcHPlhbPpl63mjInpkq5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IE9WRVJUSVBTX0NMT1NFID0gJ09WRVJUSVBTX0NMT1NFJztcbiAgICAvLyBBZmZpcm1UaXBz56Gu6K6k5oyJ6ZKuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBRkZJUk1USVBTX1NVUkUgPSAnQUZGSVJNVElQU19TVVJFJztcbiAgICAvLyBBZmZpcm1UaXBz5Y+W5raI5oyJ6ZKuXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBRkZJUk1USVBTX0NBTkNFTCA9ICdBRkZJUk1USVBTX0NBTkNFTCc7XG4gICAgLy8g56ys5LiA5qyh5o6l5pS25Yiw5b+D6LezXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBPTl9GSVJTVF9CUkVBSyA9ICdPTl9GSVJTVF9CUkVBSyc7XG4gICAgLy8gVGVhY2hlclBhbmVs55qEbG9hZGluZ+WxguW8gOWFs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgVEVBQ0hFUl9QQU5FTF9MT0FESU5HID0gJ1RFQUNIRVJfUEFORUxfTE9BRElORyc7XG4gICAgLy8g6aKE5Yqg6L29LVBhbmVsIFJlYWR5XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQUkVMT0FEX0dBTUVfU0hPVyA9ICdQUkVMT0FEX0dBTUVfU0hPVyc7XG5cbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgLyoqIFNES+WGhemDqOS6i+S7tiAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQUNUSU9OX1NZTkNfUkVDRUlWRSA9ICdhY3Rpb25fc3luY19yZWNlaXZlJzsgLy/muLjmiI/mk43kvZzkuqTkupLlkIzmraUgIC8v5Lqk5LqS5ri45oiP5pqC5LiN5aSE55CG5q2k5raI5oGvXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBESVNBQkxFRCA9ICdkaXNhYmxlZCc7IC8v5piv5ZCm5Y+v5Lul5pON5L2c5ri45oiPIDDnpoHnlKggMeW8gOWQryDpu5jorqQxICAvL+S6pOS6kua4uOaIj+aaguS4jeWkhOeQhuatpOa2iOaBr1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVMT0FEID0gJ3JlbG9hZCc7IC8v6YeN5paw5Yqg6L295ri45oiPICAvL+WcqGluZGV4Lmh0bWznm5HlkKxcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IERBVEFfUkVDT1ZFUlkgPSAnZGF0YV9yZWNvdmVyeSc7IC8v5ri45oiP5pWw5o2u5oGi5aSNXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTVE9QID0gJ3N0b3AnOyAvL+WBnOatoua4uOaIj++8iOa4uOaIj+mcgOimgei/lOWbnmZpbmlzaO+8iVxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgSU5JVCA9ICdpbml0JzsgLy/mgaLlpI3muLjmiI/liLDliJ3lp4vljJbnlYzpnaJcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFRIUkVTSEhPTEQgPSAndGhyZXNoaG9sZCc7IC8v5ri45oiP5raI5oGv6aKR546H77yI6buY6K6kMTAwbXMv5qyh77yJXG5cbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBMQVlCR00gPSAncGxheV9iZ20nOyAvL+aSreaUvuiDjOaZr+mfs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUkVTVU1FQkdNID0gJ3Jlc3VtZV9iZ20nOyAvL+aBouWkjeiDjOaZr+mfs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RPUEJHTSA9ICdzdG9wX2JnbSc7IC8v5YGc5q2i6IOM5pmv6Z+zXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBQTEFZQVVESU9USVRMRSA9ICdwbGF5X2F1ZGlvX3RpdGxlJzsgLy/mkq3mlL7popjlubLpn7NcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BBVURJT1RJVExFID0gJ3N0b3BfYXVkaW9fdGl0bGUnOyAvL+WBnOatoumimOW5sumfs1xuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgU1RPUEFMTEFVRElPID0gJ3N0b3BfYWxsX2F1ZGlvJzsgLy/lgZzmraLor63pn7PvvIjljIXmi6zpopjlubLvvIlcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BBTExFRkZFQ1QgPSAnc3RvcF9hbGxfZWZmZWN0JzsgLy/lgZzmraLpn7PmlYhcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFNUT1BBTEwgPSAnc3RvcF9hbGwnOyAvL+WBnOatouaJgOacie+8iOS4jeWMheaLrOiDjOaZr++8iVxuXG4gICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/MathUtils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aa960SepSxHGal1p7xVIQi8', 'MathUtils');
// frame/scripts/Utils/MathUtils.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MathUtils = void 0;
var MathUtils = /** @class */ (function () {
    function MathUtils() {
    }
    MathUtils.getInstance = function () {
        if (this.instance == null) {
            this.instance = new MathUtils();
        }
        return this.instance;
    };
    /**
     弧度制转换为角度值
     @param radian 弧度制
     @returns {number}
     */
    MathUtils.prototype.getAngle = function (radian) {
        return (180 * radian) / Math.PI;
    };
    /**
     角度值转换为弧度制
     @param angle
     */
    MathUtils.prototype.getRadian = function (angle) {
        return (angle / 180) * Math.PI;
    };
    /**
     获取两点间弧度
     @param p1X
     @param p1Y
     @param p2X
     @param p2Y
     @returns {number}
     */
    MathUtils.prototype.getRadian2 = function (p1X, p1Y, p2X, p2Y) {
        var xdis = p2X - p1X;
        var ydis = p2Y - p1Y;
        return Math.atan2(ydis, xdis);
    };
    /**
     获取两点间距离
     @param p1
     @param p1
     * @returns {number}
     */
    MathUtils.prototype.getDistance = function (p1, p2) {
        var disX = p2.x - p1.x;
        var disY = p2.y - p1.y;
        var disQ = disX * disX + disY * disY;
        return Math.sqrt(disQ);
    };
    /**
     获取一个区间的随机数
     @param $from 最小值
     @param $end 最大值
     @returns {number}
     */
    MathUtils.prototype.limit = function ($from, $end) {
        $from = Math.min($from, $end);
        $end = Math.max($from, $end);
        var range = $end - $from;
        return $from + Math.random() * range;
    };
    /**
     获取一个区间的随机数(帧数)
     @param $from 最小值
     @param $end 最大值
     @returns {number}
     */
    MathUtils.prototype.limitInteger = function ($from, $end) {
        return Math.round(this.limit($from, $end));
    };
    /**
     在一个数组中随机获取一个元素
     @param arr 数组
     @returns {any} 随机出来的结果
     */
    MathUtils.prototype.randomArray = function (arr) {
        var index = Math.floor(Math.random() * arr.length);
        return arr[index];
    };
    /**
     点到直线的垂点
     */
    MathUtils.prototype.SagPoint = function (x, y, sp, ep) {
        var se = (sp.x - ep.x) * (sp.x - ep.x) + (sp.y - ep.y) * (sp.y - ep.y); //线段两点距离平方
        var p = (x - sp.x) * (ep.x - sp.x) + (y - sp.y) * (ep.y - sp.y); //向量点乘=|a|*|b|*cosA
        var r = p / se; //r即点到线段的投影长度与线段长度比
        var outx = sp.x + r * (ep.x - sp.x); //垂足x
        var outy = sp.y + r * (ep.y - sp.y); //垂足y
        var point = new cc.Vec3(outx, outy);
        return point;
    };
    /**
     求延长线上的某点，第一象限
     */
    MathUtils.prototype.extendedLinePoint = function (p1, p2, dis) {
        var lab = 0;
        var x;
        var y;
        // lab = Math.sqrt(Math.abs((p2.x - p1.x) * (p2.x - p1.x)) + Math.abs((p2.y - p1.y) * (p2.y - p1.y)));
        lab = this.getDistance(p1, p2);
        if (p2.x > p1.x && p2.y > p1.y) {
            x = (dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x < p1.x && p2.y > p1.y) {
            x = (-dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x < p1.x && p2.y < p1.y) {
            x = (-dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (-dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        else if (p2.x > p1.x && p2.y < p1.y) {
            x = (dis / lab) * Math.abs(p1.x - p2.x) + p2.x;
            y = (-dis / lab) * Math.abs(p1.y - p2.y) + p2.y;
        }
        var p = new cc.Vec3(x, y);
        return p;
    };
    /**
     获得两点的角度 1~4象限
     @param {cc.Vec3} p1
     @param {cc.Vec3} p2
     */
    MathUtils.prototype.getTwoPointsRadian1 = function (p1, p2) {
        var x = Math.abs(p1.x - p2.x);
        var y = Math.abs(p1.y - p2.y);
        var z = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
        var cos = y / z;
        var radina = Math.acos(cos); //用反三角函数求弧度
        var angle = Math.floor(180 / (Math.PI / radina)); //将弧度转换成角度
        if (p2.x > p1.x && p2.y < p1.y) {
            //鼠标在第四象限
            angle = 180 - angle;
        }
        if (p2.x == p1.x && p2.y > p1.y) {
            //鼠标在y轴负方向上
            angle = 180;
        }
        if (p2.x > p1.x && p2.y == p1.y) {
            //鼠标在x轴正方向上
            angle = 90;
        }
        if (p2.x < p1.x && p2.y < p1.y) {
            //鼠标在第三象限
            angle = 180 + angle;
        }
        if (p2.x < p1.x && p2.y == p1.y) {
            //鼠标在x轴负方向
            angle = 270;
        }
        if (p2.x < p1.x && p2.y > p1.y) {
            //鼠标在第二象限
            angle = 360 - angle;
        }
        return angle;
    };
    /**
     获得两点的角度  无论正反旋转
     @param {cc.Vec3} p1
     @param {cc.Vec3} p2
     */
    MathUtils.prototype.getTwoPointsRadian2 = function (p1, p2) {
        var o = p1.x - p2.x;
        var a = p1.y - p2.y;
        var r = (Math.atan2(a, o) * -180) / Math.PI - 90;
        return r;
    };
    /**
     取两条直线的交点
     @param p1          // 直线1点1
     @param p2          // 直线1点2
     @param p3          // 直线2点1
     @param p4          // 直线2点2
     */
    MathUtils.prototype.fingCrossPoint = function (p1, p2, p3, p4) {
        var a1 = p2.y - p1.y;
        var b1 = p1.x - p2.x;
        var c1 = p1.x * p2.y - p2.x * p1.y;
        var a2 = p4.y - p3.y;
        var b2 = p3.x - p4.x;
        var c2 = p3.x * p4.y - p4.x * p3.y;
        var det = a1 * b2 - a2 * b1;
        if (det == 0) {
            return null;
        }
        var x = (c1 * b2 - c2 * b1) / det;
        var y = (a1 * c2 - a2 * c1) / det;
        var p = new cc.Vec3(Math.floor(x), Math.floor(y));
        return p;
    };
    /**
     * 用于浮点数相加  解决浮点数相加不准确问题
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accAdd = function (arg1, arg2) {
        var r1 = 0, r2 = 0, m = 0, c = 0;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        c = Math.abs(r1 - r2);
        m = Math.pow(10, Math.max(r1, r2));
        if (c > 0) {
            var cm = Math.pow(10, c);
            if (r1 > r2) {
                arg1 = Number(arg1.toString().replace('.', ''));
                arg2 = Number(arg2.toString().replace('.', '')) * cm;
            }
            else {
                arg1 = Number(arg1.toString().replace('.', '')) * cm;
                arg2 = Number(arg2.toString().replace('.', ''));
            }
        }
        else {
            arg1 = Number(arg1.toString().replace('.', ''));
            arg2 = Number(arg2.toString().replace('.', ''));
        }
        return (arg1 + arg2) / m;
    };
    /**
     * 浮点数相减
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accSub = function (arg1, arg2) {
        var r1 = 0, r2 = 0, m = 0, n = 0;
        try {
            r1 = arg1.toString().split('.')[1].length;
        }
        catch (e) {
            r1 = 0;
        }
        try {
            r2 = arg2.toString().split('.')[1].length;
        }
        catch (e) {
            r2 = 0;
        }
        m = Math.pow(10, Math.max(r1, r2)); //last modify by deeka //动态控制精度长度
        n = r1 >= r2 ? r1 : r2;
        return ((arg1 * m - arg2 * m) / m).toFixed(n);
    };
    /**
     * 浮点数相乘
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accMul = function (arg1, arg2) {
        var m = 0, s1 = arg1.toString(), s2 = arg2.toString();
        try {
            m += s1.split('.')[1].length;
        }
        catch (e) { }
        try {
            m += s2.split('.')[1].length;
        }
        catch (e) { }
        return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
    };
    /**
     * 浮点数相除
     * @param arg1
     * @param arg2
     */
    MathUtils.prototype.accDiv = function (arg1, arg2) {
        var t1 = 0, t2 = 0, r1 = 0, r2 = 0;
        try {
            t1 = arg1.toString().split('.')[1].length;
        }
        catch (e) { }
        try {
            t2 = arg2.toString().split('.')[1].length;
        }
        catch (e) { }
        r1 = Number(arg1.toString().replace('.', ''));
        r2 = Number(arg2.toString().replace('.', ''));
        return (r1 / r2) * Math.pow(10, t2 - t1);
    };
    /**
     线段中点
     * @param {cc.Vec3} p1
     * @param {cc.Vec3} p2
     * @returns {cc.Vec3}
     * @memberof MathUtils
     */
    MathUtils.prototype.getCenterPosition = function (p1, p2) {
        var pos = cc.v3((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
        return pos;
    };
    return MathUtils;
}());
exports.MathUtils = MathUtils;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxNYXRoVXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7SUFVSTtJQUFlLENBQUM7SUFQVCxxQkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3pCLENBQUM7SUFJRDs7OztPQUlHO0lBQ0ksNEJBQVEsR0FBZixVQUFnQixNQUFjO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksNkJBQVMsR0FBaEIsVUFBaUIsS0FBYTtRQUMxQixPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7SUFDbkMsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSw4QkFBVSxHQUFqQixVQUFrQixHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ2hFLElBQUksSUFBSSxHQUFXLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDN0IsSUFBSSxJQUFJLEdBQVcsR0FBRyxHQUFHLEdBQUcsQ0FBQztRQUM3QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLCtCQUFXLEdBQWxCLFVBQW1CLEVBQVcsRUFBRSxFQUFXO1FBQ3ZDLElBQUksSUFBSSxHQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLElBQUksR0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENB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QUUsRUFBRSxDQUFDLENBQUM7UUFDL0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQzVCLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNsRDthQUFNLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNuQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEQsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO2FBQU0sSUFBSSxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxFQUFFO1lBQ25DLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDL0MsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksdUNBQW1CLEdBQTFCLFVBQTJCLEVBQVcsRUFBRSxFQUFXO1FBQy9DLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5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R0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1NBQzdDO1FBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRTtRQUNkLElBQUk7WUFDQSxFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7U0FDN0M7UUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO1FBQ2QsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzlDLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM5QyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0kscUNBQWlCLEdBQXhCLFVBQXlCLEVBQVcsRUFBRSxFQUFXO1FBQzdDLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN0RCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFDTCxnQkFBQztBQUFELENBbFVBLEFBa1VDLElBQUE7QUFsVVksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTWF0aFV0aWxzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogTWF0aFV0aWxzO1xuXG4gICAgc3RhdGljIGdldEluc3RhbmNlKCkge1xuICAgICAgICBpZiAodGhpcy5pbnN0YW5jZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gbmV3IE1hdGhVdGlscygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge31cblxuICAgIC8qKlxuICAgICDlvKfluqbliLbovazmjaLkuLrop5LluqblgLxcbiAgICAgQHBhcmFtIHJhZGlhbiDlvKfluqbliLZcbiAgICAgQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0QW5nbGUocmFkaWFuOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gKDE4MCAqIHJhZGlhbikgLyBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDop5LluqblgLzovazmjaLkuLrlvKfluqbliLZcbiAgICAgQHBhcmFtIGFuZ2xlXG4gICAgICovXG4gICAgcHVibGljIGdldFJhZGlhbihhbmdsZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIChhbmdsZSAvIDE4MCkgKiBNYXRoLlBJO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDojrflj5bkuKTngrnpl7TlvKfluqZcbiAgICAgQHBhcmFtIHAxWFxuICAgICBAcGFyYW0gcDFZXG4gICAgIEBwYXJhbSBwMlhcbiAgICAgQHBhcmFtIHAyWVxuICAgICBAcmV0dXJucyB7bnVtYmVyfVxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRSYWRpYW4yKHAxWDogbnVtYmVyLCBwMVk6IG51bWJlciwgcDJYOiBudW1iZXIsIHAyWTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHhkaXM6IG51bWJlciA9IHAyWCAtIHAxWDtcbiAgICAgICAgdmFyIHlkaXM6IG51bWJlciA9IHAyWSAtIHAxWTtcbiAgICAgICAgcmV0dXJuIE1hdGguYXRhbjIoeWRpcywgeGRpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+WPluS4pOeCuemXtOi3neemu1xuICAgICBAcGFyYW0gcDFcbiAgICAgQHBhcmFtIHAxXG4gICAgICogQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0RGlzdGFuY2UocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIGRpc1g6IG51bWJlciA9IHAyLnggLSBwMS54O1xuICAgICAgICB2YXIgZGlzWTogbnVtYmVyID0gcDIueSAtIHAxLnk7XG4gICAgICAgIHZhciBkaXNROiBudW1iZXIgPSBkaXNYICogZGlzWCArIGRpc1kgKiBkaXNZO1xuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc1EpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDojrflj5bkuIDkuKrljLrpl7TnmoTpmo/mnLrmlbBcbiAgICAgQHBhcmFtICRmcm9tIOacgOWwj+WAvFxuICAgICBAcGFyYW0gJGVuZCDmnIDlpKflgLxcbiAgICAgQHJldHVybnMge251bWJlcn1cbiAgICAgKi9cbiAgICBwdWJsaWMgbGltaXQoJGZyb206IG51bWJlciwgJGVuZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICAgICAgJGZyb20gPSBNYXRoLm1pbigkZnJvbSwgJGVuZCk7XG4gICAgICAgICRlbmQgPSBNYXRoLm1heCgkZnJvbSwgJGVuZCk7XG4gICAgICAgIHZhciByYW5nZTogbnVtYmVyID0gJGVuZCAtICRmcm9tO1xuICAgICAgICByZXR1cm4gJGZyb20gKyBNYXRoLnJhbmRvbSgpICogcmFuZ2U7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+WPluS4gOS4quWMuumXtOeahOmaj+acuuaVsCjluKfmlbApXG4gICAgIEBwYXJhbSAkZnJvbSDmnIDlsI/lgLxcbiAgICAgQHBhcmFtICRlbmQg5pyA5aSn5YC8XG4gICAgIEByZXR1cm5zIHtudW1iZXJ9XG4gICAgICovXG4gICAgcHVibGljIGxpbWl0SW50ZWdlcigkZnJvbTogbnVtYmVyLCAkZW5kOiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmxpbWl0KCRmcm9tLCAkZW5kKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOWcqOS4gOS4quaVsOe7hOS4remaj+acuuiOt+WPluS4gOS4quWFg+e0oFxuICAgICBAcGFyYW0gYXJyIOaVsOe7hFxuICAgICBAcmV0dXJucyB7YW55fSDpmo/mnLrlh7rmnaXnmoTnu5PmnpxcbiAgICAgKi9cbiAgICBwdWJsaWMgcmFuZG9tQXJyYXkoYXJyOiBBcnJheTxhbnk+KTogYW55IHtcbiAgICAgICAgdmFyIGluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBhcnIubGVuZ3RoKTtcbiAgICAgICAgcmV0dXJuIGFycltpbmRleF07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOeCueWIsOebtOe6v+eahOWegueCuVxuICAgICAqL1xuICAgIHB1YmxpYyBTYWdQb2ludCh4LCB5LCBzcCwgZXApOiBjYy5WZWMzIHtcbiAgICAgICAgdmFyIHNlOiBudW1iZXIgPSAoc3AueCAtIGVwLngpICogKHNwLnggLSBlcC54KSArIChzcC55IC0gZXAueSkgKiAoc3AueSAtIGVwLnkpOyAvL+e6v+auteS4pOeCuei3neemu+W5s+aWuVxuICAgICAgICB2YXIgcDogbnVtYmVyID0gKHggLSBzcC54KSAqIChlcC54IC0gc3AueCkgKyAoeSAtIHNwLnkpICogKGVwLnkgLSBzcC55KTsgLy/lkJHph4/ngrnkuZg9fGF8KnxifCpjb3NBXG4gICAgICAgIHZhciByOiBudW1iZXIgPSBwIC8gc2U7IC8vcuWNs+eCueWIsOe6v+auteeahOaKleW9semVv+W6puS4jue6v+autemVv+W6puavlFxuICAgICAgICB2YXIgb3V0eDogbnVtYmVyID0gc3AueCArIHIgKiAoZXAueCAtIHNwLngpOyAvL+Wegui2s3hcbiAgICAgICAgdmFyIG91dHk6IG51bWJlciA9IHNwLnkgKyByICogKGVwLnkgLSBzcC55KTsgLy/lnoLotrN5XG4gICAgICAgIHZhciBwb2ludCA9IG5ldyBjYy5WZWMzKG91dHgsIG91dHkpO1xuICAgICAgICByZXR1cm4gcG9pbnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOaxguW7tumVv+e6v+S4iueahOafkOeCue+8jOesrOS4gOixoemZkFxuICAgICAqL1xuICAgIHB1YmxpYyBleHRlbmRlZExpbmVQb2ludChwMTogY2MuVmVjMywgcDI6IGNjLlZlYzMsIGRpczogbnVtYmVyKTogY2MuVmVjMyB7XG4gICAgICAgIHZhciBsYWIgPSAwO1xuICAgICAgICB2YXIgeDogbnVtYmVyO1xuICAgICAgICB2YXIgeTogbnVtYmVyO1xuICAgICAgICAvLyBsYWIgPSBNYXRoLnNxcnQoTWF0aC5hYnMoKHAyLnggLSBwMS54KSAqIChwMi54IC0gcDEueCkpICsgTWF0aC5hYnMoKHAyLnkgLSBwMS55KSAqIChwMi55IC0gcDEueSkpKTtcbiAgICAgICAgbGFiID0gdGhpcy5nZXREaXN0YW5jZShwMSwgcDIpO1xuICAgICAgICBpZiAocDIueCA+IHAxLnggJiYgcDIueSA+IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnggLSBwMi54KSArIHAyLng7XG4gICAgICAgICAgICB5ID0gKGRpcyAvIGxhYikgKiBNYXRoLmFicyhwMS55IC0gcDIueSkgKyBwMi55O1xuICAgICAgICB9IGVsc2UgaWYgKHAyLnggPCBwMS54ICYmIHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICB4ID0gKC1kaXMgLyBsYWIpICogTWF0aC5hYnMocDEueCAtIHAyLngpICsgcDIueDtcbiAgICAgICAgICAgIHkgPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSArIHAyLnk7XG4gICAgICAgIH0gZWxzZSBpZiAocDIueCA8IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoLWRpcyAvIGxhYikgKiBNYXRoLmFicyhwMS54IC0gcDIueCkgKyBwMi54O1xuICAgICAgICAgICAgeSA9ICgtZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnkgLSBwMi55KSArIHAyLnk7XG4gICAgICAgIH0gZWxzZSBpZiAocDIueCA+IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIHggPSAoZGlzIC8gbGFiKSAqIE1hdGguYWJzKHAxLnggLSBwMi54KSArIHAyLng7XG4gICAgICAgICAgICB5ID0gKC1kaXMgLyBsYWIpICogTWF0aC5hYnMocDEueSAtIHAyLnkpICsgcDIueTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcCA9IG5ldyBjYy5WZWMzKHgsIHkpO1xuICAgICAgICByZXR1cm4gcDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAg6I635b6X5Lik54K555qE6KeS5bqmIDF+NOixoemZkFxuICAgICBAcGFyYW0ge2NjLlZlYzN9IHAxXG4gICAgIEBwYXJhbSB7Y2MuVmVjM30gcDIgXG4gICAgICovXG4gICAgcHVibGljIGdldFR3b1BvaW50c1JhZGlhbjEocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgdmFyIHggPSBNYXRoLmFicyhwMS54IC0gcDIueCk7XG4gICAgICAgIHZhciB5ID0gTWF0aC5hYnMocDEueSAtIHAyLnkpO1xuICAgICAgICB2YXIgeiA9IE1hdGguc3FydChNYXRoLnBvdyh4LCAyKSArIE1hdGgucG93KHksIDIpKTtcbiAgICAgICAgdmFyIGNvcyA9IHkgLyB6O1xuICAgICAgICB2YXIgcmFkaW5hID0gTWF0aC5hY29zKGNvcyk7IC8v55So5Y+N5LiJ6KeS5Ye95pWw5rGC5byn5bqmXG4gICAgICAgIHZhciBhbmdsZSA9IE1hdGguZmxvb3IoMTgwIC8gKE1hdGguUEkgLyByYWRpbmEpKTsgLy/lsIblvKfluqbovazmjaLmiJDop5LluqZcblxuICAgICAgICBpZiAocDIueCA+IHAxLnggJiYgcDIueSA8IHAxLnkpIHtcbiAgICAgICAgICAgIC8v6byg5qCH5Zyo56ys5Zub6LGh6ZmQXG4gICAgICAgICAgICBhbmdsZSA9IDE4MCAtIGFuZ2xlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHAyLnggPT0gcDEueCAmJiBwMi55ID4gcDEueSkge1xuICAgICAgICAgICAgLy/pvKDmoIflnKh56L206LSf5pa55ZCR5LiKXG4gICAgICAgICAgICBhbmdsZSA9IDE4MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwMi54ID4gcDEueCAmJiBwMi55ID09IHAxLnkpIHtcbiAgICAgICAgICAgIC8v6byg5qCH5ZyoeOi9tOato+aWueWQkeS4ilxuICAgICAgICAgICAgYW5nbGUgPSA5MDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwMi54IDwgcDEueCAmJiBwMi55IDwgcDEueSkge1xuICAgICAgICAgICAgLy/pvKDmoIflnKjnrKzkuInosaHpmZBcbiAgICAgICAgICAgIGFuZ2xlID0gMTgwICsgYW5nbGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocDIueCA8IHAxLnggJiYgcDIueSA9PSBwMS55KSB7XG4gICAgICAgICAgICAvL+m8oOagh+WcqHjovbTotJ/mlrnlkJFcbiAgICAgICAgICAgIGFuZ2xlID0gMjcwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHAyLnggPCBwMS54ICYmIHAyLnkgPiBwMS55KSB7XG4gICAgICAgICAgICAvL+m8oOagh+WcqOesrOS6jOixoemZkFxuICAgICAgICAgICAgYW5nbGUgPSAzNjAgLSBhbmdsZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYW5nbGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgIOiOt+W+l+S4pOeCueeahOinkuW6piAg5peg6K665q2j5Y+N5peL6L2sXG4gICAgIEBwYXJhbSB7Y2MuVmVjM30gcDFcbiAgICAgQHBhcmFtIHtjYy5WZWMzfSBwMiBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0VHdvUG9pbnRzUmFkaWFuMihwMTogY2MuVmVjMywgcDI6IGNjLlZlYzMpOiBudW1iZXIge1xuICAgICAgICBsZXQgbyA9IHAxLnggLSBwMi54O1xuICAgICAgICBsZXQgYSA9IHAxLnkgLSBwMi55O1xuICAgICAgICBsZXQgciA9IChNYXRoLmF0YW4yKGEsIG8pICogLTE4MCkgLyBNYXRoLlBJIC0gOTA7XG4gICAgICAgIHJldHVybiByO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDlj5bkuKTmnaHnm7Tnur/nmoTkuqTngrlcbiAgICAgQHBhcmFtIHAxICAgICAgICAgIC8vIOebtOe6vzHngrkxXG4gICAgIEBwYXJhbSBwMiAgICAgICAgICAvLyDnm7Tnur8x54K5MlxuICAgICBAcGFyYW0gcDMgICAgICAgICAgLy8g55u057q/MueCuTFcbiAgICAgQHBhcmFtIHA0ICAgICAgICAgIC8vIOebtOe6vzLngrkyXG4gICAgICovXG4gICAgcHVibGljIGZpbmdDcm9zc1BvaW50KHAxOiBjYy5WZWMzLCBwMjogY2MuVmVjMywgcDM6IGNjLlZlYzMsIHA0OiBjYy5WZWMzKTogY2MuVmVjMyB7XG4gICAgICAgIHZhciBhMSA9IHAyLnkgLSBwMS55O1xuICAgICAgICB2YXIgYjEgPSBwMS54IC0gcDIueDtcbiAgICAgICAgdmFyIGMxID0gcDEueCAqIHAyLnkgLSBwMi54ICogcDEueTtcbiAgICAgICAgdmFyIGEyID0gcDQueSAtIHAzLnk7XG4gICAgICAgIHZhciBiMiA9IHAzLnggLSBwNC54O1xuICAgICAgICB2YXIgYzIgPSBwMy54ICogcDQueSAtIHA0LnggKiBwMy55O1xuICAgICAgICB2YXIgZGV0ID0gYTEgKiBiMiAtIGEyICogYjE7XG4gICAgICAgIGlmIChkZXQgPT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHggPSAoYzEgKiBiMiAtIGMyICogYjEpIC8gZGV0O1xuICAgICAgICB2YXIgeSA9IChhMSAqIGMyIC0gYTIgKiBjMSkgLyBkZXQ7XG4gICAgICAgIHZhciBwOiBjYy5WZWMzID0gbmV3IGNjLlZlYzMoTWF0aC5mbG9vcih4KSwgTWF0aC5mbG9vcih5KSk7XG4gICAgICAgIHJldHVybiBwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOeUqOS6jua1rueCueaVsOebuOWKoCAg6Kej5Yaz5rWu54K55pWw55u45Yqg5LiN5YeG56Gu6Zeu6aKYXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NBZGQoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHIxID0gMCxcbiAgICAgICAgICAgIHIyID0gMCxcbiAgICAgICAgICAgIG0gPSAwLFxuICAgICAgICAgICAgYyA9IDA7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByMSA9IGFyZzEudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcjEgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByMiA9IGFyZzIudG9TdHJpbmcoKS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcjIgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGMgPSBNYXRoLmFicyhyMSAtIHIyKTtcbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTtcbiAgICAgICAgaWYgKGMgPiAwKSB7XG4gICAgICAgICAgICB2YXIgY20gPSBNYXRoLnBvdygxMCwgYyk7XG4gICAgICAgICAgICBpZiAocjEgPiByMikge1xuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpICogY207XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGFyZzEgPSBOdW1iZXIoYXJnMS50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpICogY207XG4gICAgICAgICAgICAgICAgYXJnMiA9IE51bWJlcihhcmcyLnRvU3RyaW5nKCkucmVwbGFjZSgnLicsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmcxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICAgICAgICAgIGFyZzIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAoYXJnMSArIGFyZzIpIC8gbTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDmta7ngrnmlbDnm7jlh49cbiAgICAgKiBAcGFyYW0gYXJnMVxuICAgICAqIEBwYXJhbSBhcmcyXG4gICAgICovXG4gICAgcHVibGljIGFjY1N1YihhcmcxOiBudW1iZXIsIGFyZzI6IG51bWJlcikge1xuICAgICAgICB2YXIgcjEgPSAwLFxuICAgICAgICAgICAgcjIgPSAwLFxuICAgICAgICAgICAgbSA9IDAsXG4gICAgICAgICAgICBuID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByMSA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHIyID0gYXJnMi50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByMiA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgbSA9IE1hdGgucG93KDEwLCBNYXRoLm1heChyMSwgcjIpKTsgLy9sYXN0IG1vZGlmeSBieSBkZWVrYSAvL+WKqOaAgeaOp+WItueyvuW6pumVv+W6plxuICAgICAgICBuID0gcjEgPj0gcjIgPyByMSA6IHIyO1xuICAgICAgICByZXR1cm4gKChhcmcxICogbSAtIGFyZzIgKiBtKSAvIG0pLnRvRml4ZWQobik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rWu54K55pWw55u45LmYXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NNdWwoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIG0gPSAwLFxuICAgICAgICAgICAgczEgPSBhcmcxLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzMiA9IGFyZzIudG9TdHJpbmcoKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIG0gKz0gczEuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBtICs9IHMyLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICByZXR1cm4gKE51bWJlcihzMS5yZXBsYWNlKCcuJywgJycpKSAqIE51bWJlcihzMi5yZXBsYWNlKCcuJywgJycpKSkgLyBNYXRoLnBvdygxMCwgbSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5rWu54K55pWw55u46ZmkXG4gICAgICogQHBhcmFtIGFyZzFcbiAgICAgKiBAcGFyYW0gYXJnMlxuICAgICAqL1xuICAgIHB1YmxpYyBhY2NEaXYoYXJnMTogbnVtYmVyLCBhcmcyOiBudW1iZXIpIHtcbiAgICAgICAgdmFyIHQxID0gMCxcbiAgICAgICAgICAgIHQyID0gMCxcbiAgICAgICAgICAgIHIxID0gMCxcbiAgICAgICAgICAgIHIyID0gMDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHQxID0gYXJnMS50b1N0cmluZygpLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdDIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICAgIHIxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgICAgICAgcjIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICAgICAgICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICDnur/mrrXkuK3ngrlcbiAgICAgKiBAcGFyYW0ge2NjLlZlYzN9IHAxXG4gICAgICogQHBhcmFtIHtjYy5WZWMzfSBwMlxuICAgICAqIEByZXR1cm5zIHtjYy5WZWMzfVxuICAgICAqIEBtZW1iZXJvZiBNYXRoVXRpbHNcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0Q2VudGVyUG9zaXRpb24ocDE6IGNjLlZlYzMsIHAyOiBjYy5WZWMzKTogY2MuVmVjMyB7XG4gICAgICAgIGxldCBwb3MgPSBjYy52MygocDEueCArIHAyLngpIC8gMiwgKHAxLnkgKyBwMi55KSAvIDIpO1xuICAgICAgICByZXR1cm4gcG9zO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/EditorManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '64363RgvXdCJJdpexRQv89P', 'EditorManager');
// game/scripts/Manager/EditorManager.ts

"use strict";
/**编辑器数据类 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditorManager = void 0;
/**
 * 编辑器数据，根据游戏自定义内部数据
 */
var EditorData = /** @class */ (function () {
    function EditorData() {
        // 是否开启星级评
        this.isStarCount = true;
        // 是否开启再玩一次
        this.isReplay = true;
        // 是否自动播放题干语音
        this.isPlayTitle = true;
        // 可重玩次数
        this.replayCount = 1;
        // 关卡总数
        this.levelCount = 1;
        // 总步数
        this.stepCount = 0;
        // 课件等级 0：幼小  1：小低  2：小高
        this.coursewareLevel = 2;
        // TODO 自定义数据
        this.needEnd = true;
        this.geziSize = 0;
        this.tigan = '';
        this.iconType = 0;
        //二维数组
        this.geziIconArr = [];
        this.answerArr = [];
    }
    return EditorData;
}());
var EditorManagerClass = /** @class */ (function () {
    function EditorManagerClass() {
        /** 编辑器数据 */
        this.editorData = new EditorData();
    }
    EditorManagerClass.getInstance = function () {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    };
    /**
     * 是否支持题目编辑
     */
    EditorManagerClass.prototype.isSupportEdit = function () {
        var keys = Object.getOwnPropertyNames(this.editorData);
        return keys.length > 7;
    };
    /**
     * 获取关卡总数
     */
    EditorManagerClass.prototype.getLevelCount = function () {
        return this.editorData.levelCount;
    };
    /**
     * 设置关卡总数
     */
    EditorManagerClass.prototype.setLevelCount = function (num) {
        this.editorData.levelCount = num;
    };
    /**
     * 获取总步数
     */
    EditorManagerClass.prototype.getStepCount = function () {
        return this.editorData.stepCount || this.getLevelCount();
    };
    /**
     * 设置总步数
     */
    EditorManagerClass.prototype.setStepCount = function (num) {
        this.editorData.stepCount = num;
    };
    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    EditorManagerClass.prototype.getCoursewareLevel = function () {
        return this.editorData.coursewareLevel;
    };
    /**
     * 获取编辑器数据
     */
    EditorManagerClass.prototype.getData = function () {
        return this.editorData;
    };
    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    EditorManagerClass.prototype.setData = function (data) {
        this.editorData = data;
    };
    return EditorManagerClass;
}());
exports.EditorManager = EditorManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcRWRpdG9yTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsWUFBWTs7O0FBRVo7O0dBRUc7QUFDSDtJQUFBO1FBQ0ksVUFBVTtRQUNILGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBQ25DLFdBQVc7UUFDSixhQUFRLEdBQVksSUFBSSxDQUFDO1FBQ2hDLGFBQWE7UUFDTixnQkFBVyxHQUFZLElBQUksQ0FBQztRQUNuQyxRQUFRO1FBQ0QsZ0JBQVcsR0FBVyxDQUFDLENBQUM7UUFDL0IsT0FBTztRQUNBLGVBQVUsR0FBVyxDQUFDLENBQUM7UUFDOUIsTUFBTTtRQUNDLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDN0Isd0JBQXdCO1FBQ2pCLG9CQUFlLEdBQVcsQ0FBQyxDQUFDO1FBQ25DLGFBQWE7UUFDTixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFDckIsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUNuQixhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzVCLE1BQU07UUFDQyxnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM3QixjQUFTLEdBQWUsRUFBRSxDQUFDO0lBQ3RDLENBQUM7SUFBRCxpQkFBQztBQUFELENBdkJBLEFBdUJDLElBQUE7QUFFRDtJQWFJO1FBSEEsWUFBWTtRQUNMLGVBQVUsR0FBZSxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBRWxDLENBQUM7SUFWVCw4QkFBVyxHQUFsQjtRQUNJLElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7WUFDeEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUM7U0FDN0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQU9EOztPQUVHO0lBQ0ksMENBQWEsR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxNQUFNLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRXZELE9BQU8sSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksMENBQWEsR0FBcEI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7T0FFRztJQUNJLDBDQUFhLEdBQXBCLFVBQXFCLEdBQVc7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDO0lBQ3JDLENBQUM7SUFFRDs7T0FFRztJQUNJLHlDQUFZLEdBQW5CO1FBQ0ksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDN0QsQ0FBQztJQUVEOztPQUVHO0lBQ0kseUNBQVksR0FBbkIsVUFBb0IsR0FBVztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7SUFDcEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSwrQ0FBa0IsR0FBekI7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDO0lBQzNDLENBQUM7SUFFRDs7T0FFRztJQUNJLG9DQUFPLEdBQWQ7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQUVEOzs7T0FHRztJQUNJLG9DQUFPLEdBQWQsVUFBZSxJQUFnQjtRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztJQUMzQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTNFQSxBQTJFQyxJQUFBO0FBRVksUUFBQSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsV0FBVyxFQUFFLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKirnvJbovpHlmajmlbDmja7nsbsgKi9cblxuLyoqXG4gKiDnvJbovpHlmajmlbDmja7vvIzmoLnmja7muLjmiI/oh6rlrprkuYnlhoXpg6jmlbDmja5cbiAqL1xuY2xhc3MgRWRpdG9yRGF0YSB7XG4gICAgLy8g5piv5ZCm5byA5ZCv5pif57qn6K+EXG4gICAgcHVibGljIGlzU3RhckNvdW50OiBib29sZWFuID0gdHJ1ZTtcbiAgICAvLyDmmK/lkKblvIDlkK/lho3njqnkuIDmrKFcbiAgICBwdWJsaWMgaXNSZXBsYXk6IGJvb2xlYW4gPSB0cnVlO1xuICAgIC8vIOaYr+WQpuiHquWKqOaSreaUvumimOW5suivremfs1xuICAgIHB1YmxpYyBpc1BsYXlUaXRsZTogYm9vbGVhbiA9IHRydWU7XG4gICAgLy8g5Y+v6YeN546p5qyh5pWwXG4gICAgcHVibGljIHJlcGxheUNvdW50OiBudW1iZXIgPSAxO1xuICAgIC8vIOWFs+WNoeaAu+aVsFxuICAgIHB1YmxpYyBsZXZlbENvdW50OiBudW1iZXIgPSAxO1xuICAgIC8vIOaAu+atpeaVsFxuICAgIHB1YmxpYyBzdGVwQ291bnQ6IG51bWJlciA9IDA7XG4gICAgLy8g6K++5Lu2562J57qnIDDvvJrlubzlsI8gIDHvvJrlsI/kvY4gIDLvvJrlsI/pq5hcbiAgICBwdWJsaWMgY291cnNld2FyZUxldmVsOiBudW1iZXIgPSAyO1xuICAgIC8vIFRPRE8g6Ieq5a6a5LmJ5pWw5o2uXG4gICAgcHVibGljIG5lZWRFbmQ6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBnZXppU2l6ZTogbnVtYmVyID0gMDtcbiAgICBwdWJsaWMgdGlnYW46IHN0cmluZyA9ICcnO1xuICAgIHB1YmxpYyBpY29uVHlwZTogbnVtYmVyID0gMDtcbiAgICAvL+S6jOe7tOaVsOe7hFxuICAgIHB1YmxpYyBnZXppSWNvbkFycjogbnVtYmVyW11bXSA9IFtdO1xuICAgIHB1YmxpYyBhbnN3ZXJBcnI6IG51bWJlcltdW10gPSBbXTtcbn1cblxuY2xhc3MgRWRpdG9yTWFuYWdlckNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEVkaXRvck1hbmFnZXJDbGFzcztcblxuICAgIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2luc3RhbmNlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEVkaXRvck1hbmFnZXJDbGFzcygpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgICB9XG5cbiAgICAvKiog57yW6L6R5Zmo5pWw5o2uICovXG4gICAgcHVibGljIGVkaXRvckRhdGE6IEVkaXRvckRhdGEgPSBuZXcgRWRpdG9yRGF0YSgpO1xuXG4gICAgY29uc3RydWN0b3IoKSB7fVxuXG4gICAgLyoqXG4gICAgICog5piv5ZCm5pSv5oyB6aKY55uu57yW6L6RXG4gICAgICovXG4gICAgcHVibGljIGlzU3VwcG9ydEVkaXQoKTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGhpcy5lZGl0b3JEYXRhKTtcblxuICAgICAgICByZXR1cm4ga2V5cy5sZW5ndGggPiA3O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluWFs+WNoeaAu+aVsFxuICAgICAqL1xuICAgIHB1YmxpYyBnZXRMZXZlbENvdW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5lZGl0b3JEYXRhLmxldmVsQ291bnQ7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIHNldExldmVsQ291bnQobnVtOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5lZGl0b3JEYXRhLmxldmVsQ291bnQgPSBudW07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W5oC75q2l5pWwXG4gICAgICovXG4gICAgcHVibGljIGdldFN0ZXBDb3VudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YS5zdGVwQ291bnQgfHwgdGhpcy5nZXRMZXZlbENvdW50KCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6K6+572u5oC75q2l5pWwXG4gICAgICovXG4gICAgcHVibGljIHNldFN0ZXBDb3VudChudW06IG51bWJlcikge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEuc3RlcENvdW50ID0gbnVtO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiOt+WPluivvuS7tuetiee6p1xuICAgICAqIOmcgOimgeWQhOS4qua4uOaIj+agueaNruWunumZheaDheWGteiuvue9ruato+ehrueahOaVsOWAvFxuICAgICAqIOivvuS7tuetiee6pyAw77ya5bm85bCPICAx77ya5bCP5L2OICAy77ya5bCP6auYXG4gICAgICovXG4gICAgcHVibGljIGdldENvdXJzZXdhcmVMZXZlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWRpdG9yRGF0YS5jb3Vyc2V3YXJlTGV2ZWw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+W57yW6L6R5Zmo5pWw5o2uXG4gICAgICovXG4gICAgcHVibGljIGdldERhdGEoKTogRWRpdG9yRGF0YSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVkaXRvckRhdGE7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5qC55o2u572R57uc6K+35rGC57uT5p6c6K6+572u57yW6L6R5Zmo5pWw5o2uXG4gICAgICogQHBhcmFtIHtFZGl0b3JEYXRhfSBkYXRhXG4gICAgICovXG4gICAgcHVibGljIHNldERhdGEoZGF0YTogRWRpdG9yRGF0YSkge1xuICAgICAgICB0aGlzLmVkaXRvckRhdGEgPSBkYXRhO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEVkaXRvck1hbmFnZXIgPSBFZGl0b3JNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '70c27EBmWdPJYtgMQ9dyPZS', 'TeacherPanel');
// game/scripts/UI/panel/TeacherPanel.ts

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
var FrameMsgType_1 = require("../../../../frame/scripts/Data/FrameMsgType");
var ListenerManager_1 = require("../../../../frame/scripts/Manager/ListenerManager");
var ReportManager_1 = require("../../../../frame/scripts/Manager/ReportManager");
var UIManager_1 = require("../../../../frame/scripts/Manager/UIManager");
var BaseTeacherPanel_1 = require("../../../../frame/scripts/UI/Panel/BaseTeacherPanel");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GeziArea_1 = require("../Item/GeziArea");
var IconDrag_1 = require("../Item/IconDrag");
var GamePanel_1 = require("./GamePanel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TeacherPanel = /** @class */ (function (_super) {
    __extends(TeacherPanel, _super);
    function TeacherPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.toggle_stars = null;
        _this.toggle_replay = null;
        _this.toggle_titleAudio = null;
        _this.toggle_needEnd = null;
        _this.toggle_geziSize = null;
        _this.tigan_edit = null;
        _this.gezi_1 = null;
        _this.gezi_2 = null;
        _this.gezi_prefab_1 = null;
        _this.gezi_prefab_2 = null;
        _this.mask_1 = null;
        _this.mask_2 = null;
        _this.mask_3 = null;
        _this._btn_save = null;
        _this._btn_view = null;
        //已经点击的格子
        _this.clickedGezi = null;
        return _this;
    }
    TeacherPanel.prototype.onLoad = function () {
        _super.prototype.onLoad.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.DRAG_ICON_END, this.onDragMaoziEnd, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_ICON, this.onHandleClick, this);
    };
    TeacherPanel.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.DRAG_ICON_END, this.onDragMaoziEnd, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_ICON, this.onHandleClick, this);
    };
    TeacherPanel.prototype.start = function () {
        _super.prototype.start.call(this);
        // 可编辑的游戏，不展示保存按钮
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (this._btn_save) {
            this._btn_save.active = !isEdit;
        }
        this._btn_save.active = true;
    };
    /**
     * 设置界面（这里已经拿到了网络请求数据）
     */
    TeacherPanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        this.toggle_stars.toggleItems[EditorManager_1.EditorManager.editorData.isStarCount ? 0 : 1].isChecked = true;
        this.toggle_replay.toggleItems[EditorManager_1.EditorManager.editorData.isReplay ? 0 : 1].isChecked = true;
        this.toggle_titleAudio.toggleItems[EditorManager_1.EditorManager.editorData.isPlayTitle ? 0 : 1].isChecked = true;
        this.toggle_needEnd.toggleItems[EditorManager_1.EditorManager.editorData.needEnd ? 0 : 1].isChecked = true;
        this.toggle_geziSize.toggleItems[EditorManager_1.EditorManager.editorData.geziSize].isChecked = true;
        this.tigan_edit.string = EditorManager_1.EditorManager.editorData.tigan.toString();
        this.initGeZi();
    };
    // 星级评判开关
    TeacherPanel.prototype.onToggleStar = function (toggle) {
        var index = this.toggle_stars.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isStarCount = 0 === index;
    };
    // 重玩开关
    TeacherPanel.prototype.onToggleReplay = function (toggle) {
        var index = this.toggle_replay.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isReplay = 0 === index;
    };
    // 自动播放题干语音开关
    TeacherPanel.prototype.onToggleTitleAudio = function (toggle) {
        var index = this.toggle_titleAudio.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.isPlayTitle = 0 === index;
    };
    //是否需要结算
    TeacherPanel.prototype.onToggleNeedEnd = function (toggle) {
        var index = this.toggle_needEnd.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.needEnd = 0 === index;
    };
    // 格子大小
    TeacherPanel.prototype.onToggleGeziSize = function (toggle) {
        var index = this.toggle_geziSize.toggleItems.indexOf(toggle);
        EditorManager_1.EditorManager.editorData.geziSize = index;
        this.initGeZi();
    };
    TeacherPanel.prototype.onHandleTiganChanged = function () {
        if (this.tigan_edit.string.length >= 30) {
            UIHelp_1.UIHelp.showTip("最多输入30个字哦！");
        }
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.onHanleTiganEnd = function () {
        EditorManager_1.EditorManager.editorData.tigan = this.tigan_edit.string;
    };
    TeacherPanel.prototype.initGeZi = function () {
        this.gezi_1.parent.active = EditorManager_1.EditorManager.editorData.geziSize === 0;
        this.gezi_2.parent.active = EditorManager_1.EditorManager.editorData.geziSize === 1;
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var geziPrefab = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_prefab_1 : this.gezi_prefab_2;
        var gezirowCount = EditorManager_1.EditorManager.editorData.geziSize === 0 ? 5 : 6;
        geziNode.removeAllChildren();
        for (var i = 0; i < gezirowCount; i++) {
            for (var j = 0; j < gezirowCount; j++) {
                var gezi = cc.instantiate(geziPrefab);
                gezi.getComponent(GeziArea_1.default).row = i;
                gezi.getComponent(GeziArea_1.default).col = j;
                gezi.parent = geziNode;
            }
        }
        // 生成二维数组
        EditorManager_1.EditorManager.editorData.geziIconArr = [];
        for (var i = 0; i < gezirowCount; i++) {
            var arr = [];
            for (var j = 0; j < gezirowCount; j++) {
                arr.push(0);
            }
            EditorManager_1.EditorManager.editorData.geziIconArr.push(arr);
        }
        this.onDragMaoziEnd();
    };
    TeacherPanel.prototype.onDragMaoziEnd = function () {
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var iconType = null;
        for (var i = 0; i < geziNode.childrenCount; i++) {
            var gezi = geziNode.children[i];
            if (gezi.getChildByName("icon_node").childrenCount > 0) {
                iconType = gezi.getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).getIndex();
                break;
            }
        }
        if (iconType === null) {
            this.mask_1.active = false;
            this.mask_2.active = false;
            this.mask_3.active = false;
            return;
        }
        else {
            this.mask_1.active = iconType != 1 && iconType != 2;
            this.mask_2.active = iconType != 3 && iconType != 4;
            this.mask_3.active = iconType != 5 && iconType != 6 && iconType != 7;
        }
        for (var i = 0; i < geziNode.childrenCount; i++) {
            var gezi = geziNode.children[i];
            if (gezi.getChildByName("icon_node").childrenCount > 0) {
                iconType = gezi.getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).getIndex();
                EditorManager_1.EditorManager.editorData.geziIconArr[gezi.getComponent(GeziArea_1.default).row][gezi.getComponent(GeziArea_1.default).col] = iconType;
            }
            else {
                EditorManager_1.EditorManager.editorData.geziIconArr[gezi.getComponent(GeziArea_1.default).row][gezi.getComponent(GeziArea_1.default).col] = 0;
            }
        }
    };
    TeacherPanel.prototype.onHandleClick = function (data) {
        if (this.clickedGezi != null) {
            if (this.clickedGezi.row == data.row && this.clickedGezi.col == data.col) {
                this.clickedGezi = null;
                return;
            }
            else {
                this.setAnswer(data);
            }
        }
        else {
            this.clickedGezi = data;
        }
    };
    TeacherPanel.prototype.setAnswer = function (data) {
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var rowCount = EditorManager_1.EditorManager.editorData.geziSize === 0 ? 5 : 6;
        //根据行列计算出索引
        var startIndex = this.clickedGezi.row * rowCount + this.clickedGezi.col;
        var endIndex = data.row * rowCount + data.col;
        var answer = [startIndex, endIndex];
        //不考虑顺序，如果已经存在，就删除
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.answerArr.length; i++) {
            var arr = EditorManager_1.EditorManager.editorData.answerArr[i];
            if (arr[0] == endIndex && arr[1] == startIndex) {
                EditorManager_1.EditorManager.editorData.answerArr.splice(i, 1);
                this.clickedGezi = null;
                geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                this.drawLine();
                return;
            }
            else if (arr[0] == startIndex && arr[1] == endIndex) {
                EditorManager_1.EditorManager.editorData.answerArr.splice(i, 1);
                this.clickedGezi = null;
                geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
                this.drawLine();
                return;
            }
        }
        EditorManager_1.EditorManager.editorData.answerArr.push(answer);
        this.clickedGezi = null;
        geziNode.children[startIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
        geziNode.children[endIndex].getChildByName("icon_node").children[0].getComponent(IconDrag_1.default).showHighLight(false);
        this.drawLine();
    };
    TeacherPanel.prototype.drawLine = function () {
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        var draw_node = geziNode.parent.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (var i = 0; i < EditorManager_1.EditorManager.editorData.answerArr.length; i++) {
            var arr = EditorManager_1.EditorManager.editorData.answerArr[i];
            var startIndex = arr[0];
            var endIndex = arr[1];
            var startPos = geziNode.children[startIndex].position;
            var endPos = geziNode.children[endIndex].position;
            var lineNode = new cc.Node();
            lineNode.addComponent(cc.Graphics);
            lineNode.parent = draw_node;
            var graphics = lineNode.getComponent(cc.Graphics);
            graphics.strokeColor = cc.Color.WHITE;
            graphics.fillColor = cc.Color.WHITE;
            graphics.lineWidth = 20;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
        }
    };
    // 保存课件按钮
    TeacherPanel.prototype.onBtnSaveClicked = function () {
        var isEdit = EditorManager_1.EditorManager.isSupportEdit();
        if (!isEdit || ReportManager_1.ReportManager.isAllOver) {
            UIHelp_1.UIHelp.showSubmissionPanel();
        }
        else {
            UIHelp_1.UIHelp.showTip('请先完成一遍题目');
        }
    };
    // 预览课件按钮
    TeacherPanel.prototype.onBtnViewClicked = function () {
        if (-1 === EditorManager_1.EditorManager.getCoursewareLevel() ||
            null === EditorManager_1.EditorManager.getCoursewareLevel() ||
            void 0 === EditorManager_1.EditorManager.getCoursewareLevel()) {
            UIHelp_1.UIHelp.showTip('请先设置coursewareLevel');
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(FrameMsgType_1.FrameMsgType.TEACHER_PANEL_LOADING, true);
            UIManager_1.UIManager.showUI(GamePanel_1.default);
        }
    };
    TeacherPanel.className = 'TeacherPanel';
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_stars", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_replay", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_titleAudio", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_needEnd", void 0);
    __decorate([
        property(cc.ToggleContainer)
    ], TeacherPanel.prototype, "toggle_geziSize", void 0);
    __decorate([
        property(cc.EditBox)
    ], TeacherPanel.prototype, "tigan_edit", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "gezi_1", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "gezi_2", void 0);
    __decorate([
        property(cc.Prefab)
    ], TeacherPanel.prototype, "gezi_prefab_1", void 0);
    __decorate([
        property(cc.Prefab)
    ], TeacherPanel.prototype, "gezi_prefab_2", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "mask_1", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "mask_2", void 0);
    __decorate([
        property(cc.Node)
    ], TeacherPanel.prototype, "mask_3", void 0);
    TeacherPanel = __decorate([
        ccclass
    ], TeacherPanel);
    return TeacherPanel;
}(BaseTeacherPanel_1.default));
exports.default = TeacherPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxUZWFjaGVyUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEVBQTJFO0FBQzNFLHFGQUFvRjtBQUNwRixpRkFBZ0Y7QUFDaEYseUVBQXdFO0FBQ3hFLHdGQUFtRjtBQUVuRixpRUFBZ0U7QUFDaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCw2Q0FBd0M7QUFDeEMsNkNBQXdDO0FBQ3hDLHlDQUFvQztBQUU5QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBZ0I7SUFBMUQ7UUFBQSxxRUEwUUM7UUF0UVcsa0JBQVksR0FBdUIsSUFBSSxDQUFDO1FBRXhDLG1CQUFhLEdBQXVCLElBQUksQ0FBQztRQUV6Qyx1QkFBaUIsR0FBdUIsSUFBSSxDQUFDO1FBRTdDLG9CQUFjLEdBQXVCLElBQUksQ0FBQztRQUUxQyxxQkFBZSxHQUF1QixJQUFJLENBQUM7UUFFM0MsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFFOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBRWhDLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFFdkIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBR3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQTJJbEMsU0FBUztRQUNELGlCQUFXLEdBQWlDLElBQUksQ0FBQzs7SUE4RjdELENBQUM7SUF4T0csNkJBQU0sR0FBTjtRQUNJLGlCQUFNLE1BQU0sV0FBRSxDQUFDO1FBQ2YsaUNBQWUsQ0FBQyxF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O0lBQ0wsQ0FBQztJQXhRYSxzQkFBUyxHQUFHLGNBQWMsQ0FBQztJQUd6QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3NEQUNtQjtJQUVoRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3VEQUNvQjtJQUVqRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDOzJEQUN3QjtJQUVyRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3dEQUNxQjtJQUVsRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsZUFBZSxDQUFDO3lEQUNzQjtJQUVuRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO29EQUNpQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzt1REFDb0I7SUFFeEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDYTtJQUUvQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNhO0lBRS9CO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ2E7SUE1QmQsWUFBWTtRQURoQyxPQUFPO09BQ2EsWUFBWSxDQTBRaEM7SUFBRCxtQkFBQztDQTFRRCxBQTBRQyxDQTFReUMsMEJBQWdCLEdBMFF6RDtrQkExUW9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZU1zZ1R5cGUgfSBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL0RhdGEvRnJhbWVNc2dUeXBlJztcbmltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9MaXN0ZW5lck1hbmFnZXInO1xuaW1wb3J0IHsgUmVwb3J0TWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9SZXBvcnRNYW5hZ2VyJztcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gJy4uLy4uLy4uLy4uL2ZyYW1lL3NjcmlwdHMvTWFuYWdlci9VSU1hbmFnZXInO1xuaW1wb3J0IEJhc2VUZWFjaGVyUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9CYXNlVGVhY2hlclBhbmVsJztcbmltcG9ydCBTdWJtaXNzaW9uUGFuZWwgZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VSS9QYW5lbC9TdWJtaXNzaW9uUGFuZWwnO1xuaW1wb3J0IHsgVUlIZWxwIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHAnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gJy4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgR2V6aUFyZWEgZnJvbSAnLi4vSXRlbS9HZXppQXJlYSc7XG5pbXBvcnQgSWNvbkRyYWcgZnJvbSAnLi4vSXRlbS9JY29uRHJhZyc7XG5pbXBvcnQgR2FtZVBhbmVsIGZyb20gJy4vR2FtZVBhbmVsJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlYWNoZXJQYW5lbCBleHRlbmRzIEJhc2VUZWFjaGVyUGFuZWwge1xuICAgIHB1YmxpYyBzdGF0aWMgY2xhc3NOYW1lID0gJ1RlYWNoZXJQYW5lbCc7XG5cbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX3N0YXJzOiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfcmVwbGF5OiBjYy5Ub2dnbGVDb250YWluZXIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ub2dnbGVDb250YWluZXIpXG4gICAgcHJpdmF0ZSB0b2dnbGVfdGl0bGVBdWRpbzogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuVG9nZ2xlQ29udGFpbmVyKVxuICAgIHByaXZhdGUgdG9nZ2xlX25lZWRFbmQ6IGNjLlRvZ2dsZUNvbnRhaW5lciA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlRvZ2dsZUNvbnRhaW5lcilcbiAgICBwcml2YXRlIHRvZ2dsZV9nZXppU2l6ZTogY2MuVG9nZ2xlQ29udGFpbmVyID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBwcml2YXRlIHRpZ2FuX2VkaXQ6IGNjLkVkaXRCb3ggPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgZ2V6aV8xOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIGdlemlfMjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGdlemlfcHJlZmFiXzE6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwcml2YXRlIGdlemlfcHJlZmFiXzI6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgcHJpdmF0ZSBtYXNrXzE6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHByaXZhdGUgbWFza18yOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBwcml2YXRlIG1hc2tfMzogY2MuTm9kZSA9IG51bGw7XG5cblxuICAgIHByaXZhdGUgX2J0bl9zYXZlOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwcml2YXRlIF9idG5fdmlldzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIHN1cGVyLm9uTG9hZCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkRSQUdfSUNPTl9FTkQsIHRoaXMub25EcmFnTWFvemlFbmQsIHRoaXMpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkNMSUNLX0lDT04sIHRoaXMub25IYW5kbGVDbGljaywgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5EUkFHX0lDT05fRU5ELCB0aGlzLm9uRHJhZ01hb3ppRW5kLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuQ0xJQ0tfSUNPTiwgdGhpcy5vbkhhbmRsZUNsaWNrLCB0aGlzKTtcbiAgICB9XG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcblxuICAgICAgICAvLyDlj6/nvJbovpHnmoTmuLjmiI/vvIzkuI3lsZXnpLrkv53lrZjmjInpkq5cbiAgICAgICAgY29uc3QgaXNFZGl0ID0gRWRpdG9yTWFuYWdlci5pc1N1cHBvcnRFZGl0KCk7XG4gICAgICAgIGlmICh0aGlzLl9idG5fc2F2ZSkge1xuICAgICAgICAgICAgdGhpcy5fYnRuX3NhdmUuYWN0aXZlID0gIWlzRWRpdDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9idG5fc2F2ZS5hY3RpdmUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9rueVjOmdou+8iOi/memHjOW3sue7j+aLv+WIsOS6hue9kee7nOivt+axguaVsOaNru+8iVxuICAgICAqL1xuICAgIHNldFBhbmVsKCkge1xuICAgICAgICBzdXBlci5zZXRQYW5lbCgpO1xuICAgICAgICB0aGlzLnRvZ2dsZV9zdGFycy50b2dnbGVJdGVtc1tFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuaXNTdGFyQ291bnQgPyAwIDogMV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50b2dnbGVfcmVwbGF5LnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV90aXRsZUF1ZGlvLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA/IDAgOiAxXS5pc0NoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLnRvZ2dsZV9uZWVkRW5kLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5uZWVkRW5kID8gMCA6IDFdLmlzQ2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMudG9nZ2xlX2dlemlTaXplLnRvZ2dsZUl0ZW1zW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uaXNDaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aWdhbl9lZGl0LnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbi50b1N0cmluZygpO1xuXG4gICAgICAgIHRoaXMuaW5pdEdlWmkoKTtcbiAgICB9XG5cbiAgICAvLyDmmJ/nuqfor4TliKTlvIDlhbNcbiAgICBwdWJsaWMgb25Ub2dnbGVTdGFyKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3N0YXJzLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmlzU3RhckNvdW50ID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g6YeN546p5byA5YWzXG4gICAgcHVibGljIG9uVG9nZ2xlUmVwbGF5KHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX3JlcGxheS50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1JlcGxheSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8vIOiHquWKqOaSreaUvumimOW5suivremfs+W8gOWFs1xuICAgIHB1YmxpYyBvblRvZ2dsZVRpdGxlQXVkaW8odG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfdGl0bGVBdWRpby50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5pc1BsYXlUaXRsZSA9IDAgPT09IGluZGV4O1xuICAgIH1cblxuICAgIC8v5piv5ZCm6ZyA6KaB57uT566XXG4gICAgcHJpdmF0ZSBvblRvZ2dsZU5lZWRFbmQodG9nZ2xlOiBjYy5Ub2dnbGUpOiB2b2lkIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy50b2dnbGVfbmVlZEVuZC50b2dnbGVJdGVtcy5pbmRleE9mKHRvZ2dsZSk7XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5uZWVkRW5kID0gMCA9PT0gaW5kZXg7XG4gICAgfVxuXG4gICAgLy8g5qC85a2Q5aSn5bCPXG4gICAgcHJpdmF0ZSBvblRvZ2dsZUdlemlTaXplKHRvZ2dsZTogY2MuVG9nZ2xlKTogdm9pZCB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMudG9nZ2xlX2dlemlTaXplLnRvZ2dsZUl0ZW1zLmluZGV4T2YodG9nZ2xlKTtcbiAgICAgICAgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID0gaW5kZXg7XG4gICAgICAgIHRoaXMuaW5pdEdlWmkoKTtcbiAgICB9XG5cbiAgICBvbkhhbmRsZVRpZ2FuQ2hhbmdlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMudGlnYW5fZWRpdC5zdHJpbmcubGVuZ3RoID49IDMwKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcChcIuacgOWkmui+k+WFpTMw5Liq5a2X5ZOm77yBXCIpO1xuICAgICAgICB9XG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbiA9IHRoaXMudGlnYW5fZWRpdC5zdHJpbmc7XG4gICAgfVxuXG4gICAgb25IYW5sZVRpZ2FuRW5kKCkge1xuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEudGlnYW4gPSB0aGlzLnRpZ2FuX2VkaXQuc3RyaW5nO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEdlWmkoKSB7XG4gICAgICAgIHRoaXMuZ2V6aV8xLnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDA7XG4gICAgICAgIHRoaXMuZ2V6aV8yLnBhcmVudC5hY3RpdmUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDE7XG4gICAgICAgIGxldCBnZXppTm9kZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IHRoaXMuZ2V6aV8xIDogdGhpcy5nZXppXzI7XG4gICAgICAgIGxldCBnZXppUHJlZmFiID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gdGhpcy5nZXppX3ByZWZhYl8xIDogdGhpcy5nZXppX3ByZWZhYl8yO1xuICAgICAgICBsZXQgZ2V6aXJvd0NvdW50ID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gNSA6IDY7XG4gICAgICAgIGdlemlOb2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V6aXJvd0NvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2V6aXJvd0NvdW50OyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZ2V6aSA9IGNjLmluc3RhbnRpYXRlKGdlemlQcmVmYWIpO1xuICAgICAgICAgICAgICAgIGdlemkuZ2V0Q29tcG9uZW50KEdlemlBcmVhKS5yb3cgPSBpO1xuICAgICAgICAgICAgICAgIGdlemkuZ2V0Q29tcG9uZW50KEdlemlBcmVhKS5jb2wgPSBqO1xuICAgICAgICAgICAgICAgIGdlemkucGFyZW50ID0gZ2V6aU5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g55Sf5oiQ5LqM57u05pWw57uEXG4gICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlemlyb3dDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdlemlyb3dDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgYXJyLnB1c2goMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnIucHVzaChhcnIpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25EcmFnTWFvemlFbmQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uRHJhZ01hb3ppRW5kKCkge1xuICAgICAgICBsZXQgZ2V6aU5vZGUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDAgPyB0aGlzLmdlemlfMSA6IHRoaXMuZ2V6aV8yO1xuICAgICAgICBsZXQgaWNvblR5cGUgPSBudWxsO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlemlOb2RlLmNoaWxkcmVuQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGdlemkgPSBnZXppTm9kZS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChnZXppLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuQ291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWNvblR5cGUgPSBnZXppLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuZ2V0SW5kZXgoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaWNvblR5cGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubWFza18xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tYXNrXzIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLm1hc2tfMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubWFza18xLmFjdGl2ZSA9IGljb25UeXBlICE9IDEgJiYgaWNvblR5cGUgIT0gMjtcbiAgICAgICAgICAgIHRoaXMubWFza18yLmFjdGl2ZSA9IGljb25UeXBlICE9IDMgJiYgaWNvblR5cGUgIT0gNDtcbiAgICAgICAgICAgIHRoaXMubWFza18zLmFjdGl2ZSA9IGljb25UeXBlICE9IDUgJiYgaWNvblR5cGUgIT0gNiAmJiBpY29uVHlwZSAhPSA3O1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2V6aU5vZGUuY2hpbGRyZW5Db3VudDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZ2V6aSA9IGdlemlOb2RlLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGdlemkuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5Db3VudCA+IDApIHtcbiAgICAgICAgICAgICAgICBpY29uVHlwZSA9IGdlemkuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uX25vZGVcIikuY2hpbGRyZW5bMF0uZ2V0Q29tcG9uZW50KEljb25EcmFnKS5nZXRJbmRleCgpO1xuICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFycltnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkucm93XVtnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkuY29sXSA9IGljb25UeXBlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aUljb25BcnJbZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLnJvd11bZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLmNvbF0gPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy/lt7Lnu4/ngrnlh7vnmoTmoLzlrZBcbiAgICBwcml2YXRlIGNsaWNrZWRHZXppOiB7IHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciB9ID0gbnVsbDtcbiAgICBwcml2YXRlIG9uSGFuZGxlQ2xpY2soZGF0YSkge1xuICAgICAgICBpZiAodGhpcy5jbGlja2VkR2V6aSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja2VkR2V6aS5yb3cgPT0gZGF0YS5yb3cgJiYgdGhpcy5jbGlja2VkR2V6aS5jb2wgPT0gZGF0YS5jb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRHZXppID0gbnVsbDtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0QW5zd2VyKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jbGlja2VkR2V6aSA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHNldEFuc3dlcihkYXRhKSB7XG4gICAgICAgIGxldCBnZXppTm9kZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IHRoaXMuZ2V6aV8xIDogdGhpcy5nZXppXzI7XG4gICAgICAgIGxldCByb3dDb3VudCA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZSA9PT0gMCA/IDUgOiA2O1xuICAgICAgICAvL+agueaNruihjOWIl+iuoeeul+WHuue0ouW8lVxuICAgICAgICBsZXQgc3RhcnRJbmRleCA9IHRoaXMuY2xpY2tlZEdlemkucm93ICogcm93Q291bnQgKyB0aGlzLmNsaWNrZWRHZXppLmNvbDtcbiAgICAgICAgbGV0IGVuZEluZGV4ID0gZGF0YS5yb3cgKiByb3dDb3VudCArIGRhdGEuY29sO1xuICAgICAgICBsZXQgYW5zd2VyID0gW3N0YXJ0SW5kZXgsIGVuZEluZGV4XTtcbiAgICAgICAgLy/kuI3ogIPomZHpobrluo/vvIzlpoLmnpzlt7Lnu4/lrZjlnKjvvIzlsLHliKDpmaRcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYXJyID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFycltpXTtcbiAgICAgICAgICAgIGlmIChhcnJbMF0gPT0gZW5kSW5kZXggJiYgYXJyWzFdID09IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrZWRHZXppID0gbnVsbDtcbiAgICAgICAgICAgICAgICBnZXppTm9kZS5jaGlsZHJlbltzdGFydEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0xpbmUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFyclswXSA9PSBzdGFydEluZGV4ICYmIGFyclsxXSA9PSBlbmRJbmRleCkge1xuICAgICAgICAgICAgICAgIEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tlZEdlemkgPSBudWxsO1xuICAgICAgICAgICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW3N0YXJ0SW5kZXhdLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuc2hvd0hpZ2hMaWdodChmYWxzZSk7XG4gICAgICAgICAgICAgICAgZ2V6aU5vZGUuY2hpbGRyZW5bZW5kSW5kZXhdLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuc2hvd0hpZ2hMaWdodChmYWxzZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuYW5zd2VyQXJyLnB1c2goYW5zd2VyKTtcbiAgICAgICAgdGhpcy5jbGlja2VkR2V6aSA9IG51bGw7XG4gICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW3N0YXJ0SW5kZXhdLmdldENoaWxkQnlOYW1lKFwiaWNvbl9ub2RlXCIpLmNoaWxkcmVuWzBdLmdldENvbXBvbmVudChJY29uRHJhZykuc2hvd0hpZ2hMaWdodChmYWxzZSk7XG4gICAgICAgIGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5nZXRDaGlsZEJ5TmFtZShcImljb25fbm9kZVwiKS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoSWNvbkRyYWcpLnNob3dIaWdoTGlnaHQoZmFsc2UpO1xuICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkcmF3TGluZSgpIHtcbiAgICAgICAgbGV0IGdlemlOb2RlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gdGhpcy5nZXppXzEgOiB0aGlzLmdlemlfMjtcbiAgICAgICAgbGV0IGRyYXdfbm9kZSA9IGdlemlOb2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImRyYXdfbm9kZVwiKTtcbiAgICAgICAgZHJhd19ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmFuc3dlckFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGFyciA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnJbaV07XG4gICAgICAgICAgICBsZXQgc3RhcnRJbmRleCA9IGFyclswXTtcbiAgICAgICAgICAgIGxldCBlbmRJbmRleCA9IGFyclsxXTtcbiAgICAgICAgICAgIGxldCBzdGFydFBvcyA9IGdlemlOb2RlLmNoaWxkcmVuW3N0YXJ0SW5kZXhdLnBvc2l0aW9uO1xuICAgICAgICAgICAgbGV0IGVuZFBvcyA9IGdlemlOb2RlLmNoaWxkcmVuW2VuZEluZGV4XS5wb3NpdGlvbjtcbiAgICAgICAgICAgIGxldCBsaW5lTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgbGluZU5vZGUucGFyZW50ID0gZHJhd19ub2RlO1xuICAgICAgICAgICAgbGV0IGdyYXBoaWNzID0gbGluZU5vZGUuZ2V0Q29tcG9uZW50KGNjLkdyYXBoaWNzKTtcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICAgICAgICBncmFwaGljcy5maWxsQ29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwLlJPVU5EO1xuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZFBvcy54LCBlbmRQb3MueSk7XG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIOS/neWtmOivvuS7tuaMiemSrlxuICAgIHB1YmxpYyBvbkJ0blNhdmVDbGlja2VkKCkge1xuICAgICAgICBjb25zdCBpc0VkaXQgPSBFZGl0b3JNYW5hZ2VyLmlzU3VwcG9ydEVkaXQoKTtcbiAgICAgICAgaWYgKCFpc0VkaXQgfHwgUmVwb3J0TWFuYWdlci5pc0FsbE92ZXIpIHtcbiAgICAgICAgICAgIFVJSGVscC5zaG93U3VibWlzc2lvblBhbmVsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI5a6M5oiQ5LiA6YGN6aKY55uuJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g6aKE6KeI6K++5Lu25oyJ6ZKuXG4gICAgcHVibGljIG9uQnRuVmlld0NsaWNrZWQoKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIC0xID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICBudWxsID09PSBFZGl0b3JNYW5hZ2VyLmdldENvdXJzZXdhcmVMZXZlbCgpIHx8XG4gICAgICAgICAgICB2b2lkIDAgPT09IEVkaXRvck1hbmFnZXIuZ2V0Q291cnNld2FyZUxldmVsKClcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBVSUhlbHAuc2hvd1RpcCgn6K+35YWI6K6+572uY291cnNld2FyZUxldmVsJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRnJhbWVNc2dUeXBlLlRFQUNIRVJfUEFORUxfTE9BRElORywgdHJ1ZSk7XG4gICAgICAgICAgICBVSU1hbmFnZXIuc2hvd1VJKEdhbWVQYW5lbCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '219dc1rDTJCjYWJhJNQFxIJ', 'ButtonSync');
// game/scripts/UI/Components/ButtonSync.ts

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
var T2M_1 = require("../../../../frame/scripts/SDK/T2M");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ButtonSync = /** @class */ (function (_super) {
    __extends(ButtonSync, _super);
    function ButtonSync() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.touchStartEvents = [];
        _this.touchEndEvents = [];
        _this.needScale = false;
        return _this;
    }
    ButtonSync_1 = ButtonSync;
    ButtonSync.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.tagId = this.node.name + this.node.parent.name + this.node.getSiblingIndex();
        this.addEventByT2M();
    };
    ButtonSync.prototype.addTouchEvent = function (target, component, handlers) {
        this.touchStartEvents.push(new ButtonSync_1.EventHandler());
        this.touchStartEvents[0].target = target;
        this.touchStartEvents[0].component = component;
        this.touchStartEvents[0].handler = handlers[0];
        this.touchEndEvents.push(new ButtonSync_1.EventHandler());
        this.touchEndEvents[0].target = target;
        this.touchEndEvents[0].component = component;
        this.touchEndEvents[0].handler = handlers[1];
    };
    ButtonSync.prototype.touchStart = function (event) {
        var type = 'touchStart' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.touchEnd = function (event) {
        var type = 'touchEnd' + this.tagId;
        T2M_1.T2M.dispatch(type, null);
    };
    ButtonSync.prototype.addEventByT2M = function () {
        T2M_1.T2M.addSyncEventListener('touchStart' + this.tagId, this.touchStartHandler.bind(this));
        T2M_1.T2M.addSyncEventListener('touchEnd' + this.tagId, this.touchEndHandler.bind(this));
    };
    ButtonSync.prototype.touchStartHandler = function (data) {
        if (this.needScale) {
            this.node.scale = 1.1;
        }
        for (var _i = 0, _a = this.touchStartEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    ButtonSync.prototype.touchEndHandler = function (data) {
        if (this.needScale) {
            this.node.scale = 1;
        }
        for (var _i = 0, _a = this.touchEndEvents; _i < _a.length; _i++) {
            var eventHandler = _a[_i];
            eventHandler.emit([{ target: this.node }]);
        }
    };
    var ButtonSync_1;
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchStartEvents", void 0);
    __decorate([
        property({ type: [cc.Component.EventHandler] })
    ], ButtonSync.prototype, "touchEndEvents", void 0);
    __decorate([
        property(cc.Boolean)
    ], ButtonSync.prototype, "needScale", void 0);
    ButtonSync = ButtonSync_1 = __decorate([
        ccclass
    ], ButtonSync);
    return ButtonSync;
}(cc.Component));
exports.default = ButtonSync;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXENvbXBvbmVudHNcXEJ1dHRvblN5bmMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseURBQXdEO0FBR2xELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBK0RDO1FBN0RXLHNCQUFnQixHQUFnQyxFQUFFLENBQUM7UUFFbkQsb0JBQWMsR0FBZ0MsRUFBRSxDQUFDO1FBRWpELGVBQVMsR0FBWSxLQUFLLENBQUM7O0lBeUR2QyxDQUFDO21CQS9Eb0IsVUFBVTtJQVUzQiwyQkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNsRixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVNLGtDQUFhLEdB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RUFBRSxDQUFDO3dEQUNXO0lBRTNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO3NEQUNTO0lBRXpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7aURBQ2M7SUFObEIsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQStEOUI7SUFBRCxpQkFBQztDQS9ERCxBQStEQyxDQS9EdUMsRUFBRSxDQUFDLFNBQVMsR0ErRG5EO2tCQS9Eb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFQyTSB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1NESy9UMk1cIjtcclxuXHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnV0dG9uU3luYyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEV2ZW50czogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcltdID0gW107XHJcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBbY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcl0gfSlcclxuICAgIHByaXZhdGUgdG91Y2hFbmRFdmVudHM6IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXJbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBwcml2YXRlIG5lZWRTY2FsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgdGFnSWQ6IHN0cmluZztcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9DQU5DRUwsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMudGFnSWQgPSB0aGlzLm5vZGUubmFtZSArIHRoaXMubm9kZS5wYXJlbnQubmFtZSArIHRoaXMubm9kZS5nZXRTaWJsaW5nSW5kZXgoKTtcclxuICAgICAgICB0aGlzLmFkZEV2ZW50QnlUMk0oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkVG91Y2hFdmVudCh0YXJnZXQ6IGNjLk5vZGUsIGNvbXBvbmVudDogc3RyaW5nLCBoYW5kbGVyczogc3RyaW5nW10pIHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHMucHVzaChuZXcgQnV0dG9uU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0RXZlbnRzWzBdLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRFdmVudHNbMF0uY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMF07XHJcblxyXG4gICAgICAgIHRoaXMudG91Y2hFbmRFdmVudHMucHVzaChuZXcgQnV0dG9uU3luYy5FdmVudEhhbmRsZXIoKSk7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5jb21wb25lbnQgPSBjb21wb25lbnQ7XHJcbiAgICAgICAgdGhpcy50b3VjaEVuZEV2ZW50c1swXS5oYW5kbGVyID0gaGFuZGxlcnNbMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkO1xyXG4gICAgICAgIFQyTS5kaXNwYXRjaCh0eXBlLCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgbGV0IHR5cGUgPSAndG91Y2hFbmQnICsgdGhpcy50YWdJZDtcclxuICAgICAgICBUMk0uZGlzcGF0Y2godHlwZSwgbnVsbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhZGRFdmVudEJ5VDJNKCkge1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hTdGFydCcgKyB0aGlzLnRhZ0lkLCB0aGlzLnRvdWNoU3RhcnRIYW5kbGVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIFQyTS5hZGRTeW5jRXZlbnRMaXN0ZW5lcigndG91Y2hFbmQnICsgdGhpcy50YWdJZCwgdGhpcy50b3VjaEVuZEhhbmRsZXIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0SGFuZGxlcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmVlZFNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5zY2FsZSA9IDEuMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hTdGFydEV2ZW50cykge1xyXG4gICAgICAgICAgICBldmVudEhhbmRsZXIuZW1pdChbeyB0YXJnZXQ6IHRoaXMubm9kZSB9XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hFbmRIYW5kbGVyKGRhdGEpIHtcclxuICAgICAgICBpZiAodGhpcy5uZWVkU2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLnNjYWxlID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgZXZlbnRIYW5kbGVyIG9mIHRoaXMudG91Y2hFbmRFdmVudHMpIHtcclxuICAgICAgICAgICAgZXZlbnRIYW5kbGVyLmVtaXQoW3sgdGFyZ2V0OiB0aGlzLm5vZGUgfV0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/IconDrag.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e303cf5H7tNgrjtF1rN8MVU', 'IconDrag');
// game/scripts/UI/Item/IconDrag.ts

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
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var GeziArea_1 = require("./GeziArea");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var IconDrag = /** @class */ (function (_super) {
    __extends(IconDrag, _super);
    function IconDrag() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootNode = null;
        _this.index = 0;
        _this.gezi_1 = null;
        _this.gezi_2 = null;
        _this.isRoot = true;
        _this.initPos = null;
        //根据触摸时间判断是否为点击事件
        _this.touchStartTime = null;
        _this.touchStartPos = null;
        return _this;
    }
    IconDrag_1 = IconDrag;
    IconDrag.prototype.onLoad = function () {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);
        this.initPos = this.node.position;
    };
    IconDrag.prototype.touchStart = function (event) {
        this.touchStartTime = new Date().getTime();
        this.touchStartPos = event.getLocation();
        if (this.node.getComponent(IconDrag_1).isRoot) {
            var newNode = this.clone();
            newNode.getComponent(IconDrag_1).isRoot = true;
            this.node.getComponent(IconDrag_1).isRoot = false;
        }
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(pos.x, pos.y);
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_ICON, pos2);
    };
    IconDrag.prototype.touchMove = function (event) {
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.position = cc.v3(pos.x, pos.y);
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_ICON, pos2);
    };
    IconDrag.prototype.touchEnd = function (event) {
        var _this = this;
        var pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        var pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        this.node.position = cc.v3(pos.x, pos.y);
        var isInRect = false;
        var geziNode = EditorManager_1.EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        geziNode.children.forEach(function (gezi) {
            if (gezi.getComponent(GeziArea_1.default).isPosInRect(cc.v2(pos2.x, pos2.y))) {
                isInRect = true;
                gezi.getComponent(GeziArea_1.default).fill(_this.node);
            }
        });
        if (!isInRect) {
            this.node.destroy();
        }
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.DRAG_ICON_END);
        if (new Date().getTime() - this.touchStartTime < 200 && this.touchStartPos.sub(event.getLocation()).mag() < 10) {
            if (this.node.parent.name == "icon_node") {
                var row = this.node.parent.parent.getComponent(GeziArea_1.default).row;
                var col = this.node.parent.parent.getComponent(GeziArea_1.default).col;
                this.node.parent.parent.getChildByName("highLight").active = !this.node.parent.parent.getChildByName("highLight").active;
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.CLICK_ICON, { row: row, col: col });
            }
        }
    };
    //克隆一个新的节点
    IconDrag.prototype.clone = function () {
        var node = cc.instantiate(this.node);
        node.parent = this.node.parent;
        node.position = this.initPos;
        node.zIndex = this.node.zIndex - 1;
        return node;
    };
    IconDrag.prototype.reset = function () {
        this.node.parent = this.rootNode;
        this.node.position = this.initPos;
    };
    IconDrag.prototype.getIndex = function () {
        return this.index;
    };
    IconDrag.prototype.showHighLight = function (show) {
        this.node.parent.parent.getChildByName("highLight").active = show;
    };
    var IconDrag_1;
    __decorate([
        property(cc.Node)
    ], IconDrag.prototype, "rootNode", void 0);
    __decorate([
        property(cc.Integer)
    ], IconDrag.prototype, "index", void 0);
    __decorate([
        property(cc.Node)
    ], IconDrag.prototype, "gezi_1", void 0);
    __decorate([
        property(cc.Node)
    ], IconDrag.prototype, "gezi_2", void 0);
    IconDrag = IconDrag_1 = __decorate([
        ccclass
    ], IconDrag);
    return IconDrag;
}(cc.Component));
exports.default = IconDrag;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEljb25EcmFnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFGQUFvRjtBQUNwRixrREFBaUQ7QUFDakQsNkRBQTREO0FBQzVELHVDQUFrQztBQUc1QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQWlHQztRQTlGVyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFDdEIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUVoQyxpQkFBaUI7UUFDVCxvQkFBYyxHQUFRLElBQUksQ0FBQztRQUMzQixtQkFBYSxHQUFZLElBQUksQ0FBQzs7SUFpRjFDLENBQUM7aUJBakdvQixRQUFRO0lBa0J6Qix5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFD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QUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFDdEUsQ0FBQzs7SUE3RkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNLO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ2E7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDYTtJQVRkLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FpRzVCO0lBQUQsZUFBQztDQWpHRCxBQWlHQyxDQWpHcUMsRUFBRSxDQUFDLFNBQVMsR0FpR2pEO2tCQWpHb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3RlbmVyTWFuYWdlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL01hbmFnZXIvTGlzdGVuZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi8uLi9EYXRhL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL01hbmFnZXIvRWRpdG9yTWFuYWdlclwiO1xyXG5pbXBvcnQgR2V6aUFyZWEgZnJvbSBcIi4vR2V6aUFyZWFcIjtcclxuXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEljb25EcmFnIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgcm9vdE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLkludGVnZXIpXHJcbiAgICBwcml2YXRlIGluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGdlemlfMTogY2MuTm9kZSA9IG51bGw7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZ2V6aV8yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgaXNSb290OiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgaW5pdFBvczogY2MuVmVjMyA9IG51bGw7XHJcblxyXG4gICAgLy/moLnmja7op6bmkbjml7bpl7TliKTmlq3mmK/lkKbkuLrngrnlh7vkuovku7ZcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydFRpbWU6IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIHRvdWNoU3RhcnRQb3M6IGNjLlZlYzIgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0UG9zID0gdGhpcy5ub2RlLnBvc2l0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRQb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEljb25EcmFnKS5pc1Jvb3QpIHtcclxuICAgICAgICAgICAgbGV0IG5ld05vZGUgPSB0aGlzLmNsb25lKCk7XHJcbiAgICAgICAgICAgIG5ld05vZGUuZ2V0Q29tcG9uZW50KEljb25EcmFnKS5pc1Jvb3QgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KEljb25EcmFnKS5pc1Jvb3QgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHBvcyA9IHRoaXMucm9vdE5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudCA9IHRoaXMucm9vdE5vZGU7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMocG9zLngsIHBvcy55KTtcclxuICAgICAgICBsZXQgcG9zMiA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKHBvcy54LCBwb3MueSkpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuRFJBR19JQ09OLCBwb3MyKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnJvb3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IGNjLnYzKHBvcy54LCBwb3MueSk7XHJcbiAgICAgICAgbGV0IHBvczIgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52Mihwb3MueCwgcG9zLnkpKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkRSQUdfSUNPTiwgcG9zMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB0b3VjaEVuZChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGxldCBwb3MgPSB0aGlzLnJvb3ROb2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGV2ZW50LmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIGxldCBwb3MyID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIocG9zLngsIHBvcy55KSk7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBvc2l0aW9uID0gY2MudjMocG9zLngsIHBvcy55KTtcclxuICAgICAgICBsZXQgaXNJblJlY3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICBsZXQgZ2V6aU5vZGUgPSBFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemUgPT09IDAgPyB0aGlzLmdlemlfMSA6IHRoaXMuZ2V6aV8yO1xyXG4gICAgICAgIGdlemlOb2RlLmNoaWxkcmVuLmZvckVhY2goZ2V6aSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnZXppLmdldENvbXBvbmVudChHZXppQXJlYSkuaXNQb3NJblJlY3QoY2MudjIocG9zMi54LCBwb3MyLnkpKSkge1xyXG4gICAgICAgICAgICAgICAgaXNJblJlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZ2V6aS5nZXRDb21wb25lbnQoR2V6aUFyZWEpLmZpbGwodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghaXNJblJlY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5EUkFHX0lDT05fRU5EKTtcclxuICAgICAgICBpZiAobmV3IERhdGUoKS5nZXRUaW1lKCkgLSB0aGlzLnRvdWNoU3RhcnRUaW1lIDwgMjAwICYmIHRoaXMudG91Y2hTdGFydFBvcy5zdWIoZXZlbnQuZ2V0TG9jYXRpb24oKSkubWFnKCkgPCAxMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudC5uYW1lID09IFwiaWNvbl9ub2RlXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCByb3cgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoR2V6aUFyZWEpLnJvdztcclxuICAgICAgICAgICAgICAgIGxldCBjb2wgPSB0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDb21wb25lbnQoR2V6aUFyZWEpLmNvbDtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnQucGFyZW50LmdldENoaWxkQnlOYW1lKFwiaGlnaExpZ2h0XCIpLmFjdGl2ZSA9ICF0aGlzLm5vZGUucGFyZW50LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImhpZ2hMaWdodFwiKS5hY3RpdmU7ICBcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuQ0xJQ0tfSUNPTiwge3Jvdzogcm93LCBjb2w6IGNvbH0pO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8v5YWL6ZqG5LiA5Liq5paw55qE6IqC54K5XHJcbiAgICBwcml2YXRlIGNsb25lKCk6IGNjLk5vZGUge1xyXG4gICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlKTtcclxuICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZS5wYXJlbnQ7XHJcbiAgICAgICAgbm9kZS5wb3NpdGlvbiA9IHRoaXMuaW5pdFBvcztcclxuICAgICAgICBub2RlLnpJbmRleCA9IHRoaXMubm9kZS56SW5kZXggLTE7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5wYXJlbnQgPSB0aGlzLnJvb3ROb2RlO1xyXG4gICAgICAgIHRoaXMubm9kZS5wb3NpdGlvbiA9IHRoaXMuaW5pdFBvcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW5kZXgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2hvd0hpZ2hMaWdodChzaG93OiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLnBhcmVudC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJoaWdoTGlnaHRcIikuYWN0aXZlID0gc2hvdztcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/CustomSyncData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6665ym0IlJNYKq4da/THmw', 'CustomSyncData');
// game/scripts/Data/CustomSyncData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomSyncData = void 0;
/**
 * 需要同步的自定义数据
 * 游戏业务层同步数据在这里添加
 */
var CustomSyncData = /** @class */ (function () {
    function CustomSyncData() {
        this.curLevel = 0; // 当前关卡(第一关为0)
        // TODO 自定义
        this.selfAnswerArr = [];
        this.curChooseRole = null;
    }
    return CustomSyncData;
}());
exports.CustomSyncData = CustomSyncData;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ3VzdG9tU3luY0RhdGEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztHQUdHO0FBQ0g7SUFBQTtRQUNXLGFBQVEsR0FBVyxDQUFDLENBQUMsQ0FBQyxjQUFjO1FBQzNDLFdBQVc7UUFFSixrQkFBYSxHQUFlLEVBQUUsQ0FBQztRQUMvQixrQkFBYSxHQUFXLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBQUQscUJBQUM7QUFBRCxDQU5BLEFBTUMsSUFBQTtBQU5ZLHdDQUFjIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDpnIDopoHlkIzmraXnmoToh6rlrprkuYnmlbDmja5cbiAqIOa4uOaIj+S4muWKoeWxguWQjOatpeaVsOaNruWcqOi/memHjOa3u+WKoFxuICovXG5leHBvcnQgY2xhc3MgQ3VzdG9tU3luY0RhdGEge1xuICAgIHB1YmxpYyBjdXJMZXZlbDogbnVtYmVyID0gMDsgLy8g5b2T5YmN5YWz5Y2hKOesrOS4gOWFs+S4ujApXG4gICAgLy8gVE9ETyDoh6rlrprkuYlcblxuICAgIHB1YmxpYyBzZWxmQW5zd2VyQXJyOiBudW1iZXJbXVtdID0gW107XG4gICAgcHVibGljIGN1ckNob29zZVJvbGU6IG51bWJlciA9IG51bGw7XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Manager/GameManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '51cedVLm+hIt4MvfmM8Nj59', 'GameManager');
// game/scripts/Manager/GameManager.ts

"use strict";
/**
 * 游戏逻辑类
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var GameManagerClass = /** @class */ (function () {
    function GameManagerClass() {
    }
    GameManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    };
    GameManagerClass._instance = null;
    return GameManagerClass;
}());
exports.GameManager = GameManagerClass.getInstance();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcTWFuYWdlclxcR2FtZU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztHQUVHOzs7QUFFSDtJQUFBO0lBU0EsQ0FBQztJQU5pQiw0QkFBVyxHQUF6QjtRQUNJLElBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLGdCQUFnQixFQUFFLENBQUM7U0FDM0M7UUFDRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7SUFDMUIsQ0FBQztJQVBjLDBCQUFTLEdBQXFCLElBQUksQ0FBQztJQVF0RCx1QkFBQztDQVRELEFBU0MsSUFBQTtBQUVZLFFBQUEsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxDQUFDIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiDmuLjmiI/pgLvovpHnsbtcbiAqL1xuXG5jbGFzcyBHYW1lTWFuYWdlckNsYXNzIHtcbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zdGFuY2U6IEdhbWVNYW5hZ2VyQ2xhc3MgPSBudWxsO1xuXG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBHYW1lTWFuYWdlckNsYXNzIHtcbiAgICAgICAgaWYgKG51bGwgPT09IHRoaXMuX2luc3RhbmNlKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZSA9IG5ldyBHYW1lTWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IEdhbWVNYW5hZ2VyID0gR2FtZU1hbmFnZXJDbGFzcy5nZXRJbnN0YW5jZSgpO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/ConstValue.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b2ee0BC2l1Pp47nuM279OIO', 'ConstValue');
// game/scripts/Data/ConstValue.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstValue = void 0;
var ConstValue = /** @class */ (function () {
    function ConstValue() {
    }
    ConstValue.IS_EDITIONS = true; //是否为发布版本，用于数据上报 及 log输出控制
    ConstValue.IS_TEACHER = true; //是否为教师端版本
    ConstValue.CoursewareKey = 'HeiBaiPei2_3ns1Eh4K6s2NB8'; //每个课件唯一的key 工程名+14位随机字符串。（脚本创建工程时自动生成）
    ConstValue.GameName = '2023-k1-J6冬-黑白配（交互二）'; //游戏名中文描述，用于数据上报  （脚本创建工程时输入）
    ConstValue.Subject = 1; //学科（1理科 2语文 3英语）
    return ConstValue;
}());
exports.ConstValue = ConstValue;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcQ29uc3RWYWx1ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUFBO0lBTUEsQ0FBQztJQUwwQixzQkFBVyxHQUFHLElBQUksQ0FBQyxDQUFDLDBCQUEwQjtJQUM5QyxxQkFBVSxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVU7SUFDN0Isd0JBQWEsR0FBRywyQkFBMkIsQ0FBQyxDQUFDLHVDQUF1QztJQUNwRixtQkFBUSxHQUFHLHNCQUFzQixDQUFDLENBQUMsNkJBQTZCO0lBQ2hFLGtCQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsaUJBQWlCO0lBQ3pELGlCQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uc3RWYWx1ZSB7XG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBJU19FRElUSU9OUyA9IHRydWU7IC8v5piv5ZCm5Li65Y+R5biD54mI5pys77yM55So5LqO5pWw5o2u5LiK5oqlIOWPiiBsb2fovpPlh7rmjqfliLZcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IElTX1RFQUNIRVIgPSB0cnVlOyAvL+aYr+WQpuS4uuaVmeW4iOerr+eJiOacrFxuICAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQ291cnNld2FyZUtleSA9ICdIZWlCYWlQZWkyXzNuczFFaDRLNnMyTkI4JzsgLy/mr4/kuKror77ku7bllK/kuIDnmoRrZXkg5bel56iL5ZCNKzE05L2N6ZqP5py65a2X56ym5Liy44CC77yI6ISa5pys5Yib5bu65bel56iL5pe26Ieq5Yqo55Sf5oiQ77yJXG4gICAgcHVibGljIHN0YXRpYyByZWFkb25seSBHYW1lTmFtZSA9ICcyMDIzLWsxLUo25YasLem7keeZvemFje+8iOS6pOS6kuS6jO+8iSc7IC8v5ri45oiP5ZCN5Lit5paH5o+P6L+w77yM55So5LqO5pWw5o2u5LiK5oqlICDvvIjohJrmnKzliJvlu7rlt6XnqIvml7bovpPlhaXvvIlcbiAgICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN1YmplY3QgPSAxOyAvL+Wtpuenke+8iDHnkIbnp5EgMuivreaWhyAz6Iux6K+t77yJXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/panel/GamePanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '246c2OOkGlKHoa6ZJOVEHI+', 'GamePanel');
// game/scripts/UI/panel/GamePanel.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var BaseGamePanel_1 = require("../../../../frame/scripts/UI/Panel/BaseGamePanel");
var EventType_1 = require("../../Data/EventType");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GamePanel = /** @class */ (function (_super) {
    __extends(GamePanel, _super);
    function GamePanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GamePanel.prototype.start = function () {
        _super.prototype.start.call(this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.SUBMIT, this.submit, this);
    };
    GamePanel.prototype.onDestroy = function () {
        _super.prototype.onDestroy.call(this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_OVER, this.gameOver, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.SUBMIT, this.submit, this);
    };
    GamePanel.prototype.submit = function (isRight) {
        if (isRight) {
            this.answerRight(true);
        }
        else {
            this.answerWrong();
        }
    };
    /**
     * 游戏入口
     * 这里已经拿到数据
     */
    GamePanel.prototype.setPanel = function () {
        _super.prototype.setPanel.call(this);
        // TODO 业务逻辑
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.ENTER_GAME);
    };
    /**
     * 心跳回调（当actionId不相等时才会触发）
     * @param recovery
     */
    GamePanel.prototype.onRecoveryData = function (recovery) {
        _super.prototype.onRecoveryData.call(this, recovery);
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_RECONNECT);
    };
    /**
     * 作答正确
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerRight = function (isCurLevelFinish) {
        _super.prototype.answerRight.call(this, isCurLevelFinish);
    };
    /**
     * 作答错误
     * 父类实现了数据上报
     * @param isCurLevelFinish 本关是否完成
     */
    GamePanel.prototype.answerWrong = function (isCurLevelFinish) {
        if (isCurLevelFinish === void 0) { isCurLevelFinish = false; }
        _super.prototype.answerWrong.call(this, isCurLevelFinish);
    };
    /**
     * 游戏结束
     * 父类实现了结算界面（游戏结束或星级评判）的弹出
     */
    GamePanel.prototype.gameOver = function () {
        _super.prototype.gameOver.call(this);
    };
    /**
     * 重玩
     */
    GamePanel.prototype.onReplay = function () {
        _super.prototype.onReplay.call(this);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.shiguan_1 = 1;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.shiguan_2 = 1;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.shiguan_3 = 6;
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.trueArr = [];
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.shotEnable = true;
        ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_REPLAY);
    };
    GamePanel.prototype.update = function (dt) {
        _super.prototype.update.call(this, dt);
    };
    GamePanel.className = 'GamePanel';
    GamePanel = __decorate([
        ccclass
    ], GamePanel);
    return GamePanel;
}(BaseGamePanel_1.default));
exports.default = GamePanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXHBhbmVsXFxHYW1lUGFuZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUZBQW9GO0FBQ3BGLHFGQUE4RjtBQUM5RixrRkFBNkU7QUFDN0Usa0RBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFhO0lBQXBEOztJQW9GQSxDQUFDO0lBakZHLHlCQUFLLEdBQUw7UUFDSSxpQkFBTSxLQUFLLFdBQUUsQ0FBQztRQUNkLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDN0QsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNJLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1FBQ2xCLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUQsaUNBQWUsQ0FBQyxHQUFHLENBQUMscUJBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztJQUM3RCxDQUFDO0lBRU8sMEJBQU0sR0FBZCxVQUFlLE9BQU87UUFDbEIsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzFCO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sNEJBQVEsR0FBbEI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixZQUFZO1FBQ1osaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sa0NBQWMsR0FBeEIsVUFBeUIsUUFBa0I7UUFDdkMsaUJBQU0sY0FBYyxZQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLGlDQUFlLENBQUMsUUFBUSxDQUFDLHFCQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkQsQ0FBQztJQUVEOzs7O09BSUc7SUFDTywrQkFBVyxHQUFyQixVQUFzQixnQkFBeUI7UUFDM0MsaUJBQU0sV0FBVyxZQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDTywrQkFBVyxHQUFyQixVQUFzQixnQkFBaUM7UUFBakMsaUNBQUEsRUFBQSx3QkFBaUM7UUFDbkQsaUJBQU0sV0FBVyxZQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOzs7T0FHRztJQUNPLDRCQUFRLEdBQWxCO1FBQ0ksaUJBQU0sUUFBUSxXQUFFLENBQUM7SUFDckIsQ0FBQztJQUVEOztPQUVHO0lBQ08sNEJBQVEsR0FBbEI7UUFDSSxpQkFBTSxRQUFRLFdBQUUsQ0FBQztRQUNqQixpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQzNELGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDM0QsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUMzRCxpQ0FBZSxDQUFDLFdBQVcsRUFBRSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQzFELGlDQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsY0FBYyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDL0QsaUNBQWUsQ0FBQyxRQUFRLENBQUMscUJBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQsMEJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxpQkFBTSxNQUFNLFlBQUMsRUFBRSxDQUFDLENBQUM7SUFDckIsQ0FBQztJQWxGYSxtQkFBUyxHQUFHLFdBQVcsQ0FBQztJQURyQixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBb0Y3QjtJQUFELGdCQUFDO0NBcEZELEFBb0ZDLENBcEZzQyx1QkFBYSxHQW9GbkQ7a0JBcEZvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGVuZXJNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlcic7XG5pbXBvcnQgeyBTeW5jRGF0YSwgU3luY0RhdGFNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlcic7XG5pbXBvcnQgQmFzZUdhbWVQYW5lbCBmcm9tICcuLi8uLi8uLi8uLi9mcmFtZS9zY3JpcHRzL1VJL1BhbmVsL0Jhc2VHYW1lUGFuZWwnO1xuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSAnLi4vLi4vRGF0YS9FdmVudFR5cGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVBhbmVsIGV4dGVuZHMgQmFzZUdhbWVQYW5lbCB7XG4gICAgcHVibGljIHN0YXRpYyBjbGFzc05hbWUgPSAnR2FtZVBhbmVsJztcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBzdXBlci5zdGFydCgpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfT1ZFUiwgdGhpcy5nYW1lT3ZlciwgdGhpcyk7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICBzdXBlci5vbkRlc3Ryb3koKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9PVkVSLCB0aGlzLmdhbWVPdmVyLCB0aGlzKTtcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuU1VCTUlULCB0aGlzLnN1Ym1pdCwgdGhpcyk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdWJtaXQoaXNSaWdodCkge1xuICAgICAgICBpZiAoaXNSaWdodCkge1xuICAgICAgICAgICAgdGhpcy5hbnN3ZXJSaWdodCh0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYW5zd2VyV3JvbmcoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+WFpeWPo1xuICAgICAqIOi/memHjOW3sue7j+aLv+WIsOaVsOaNrlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBzZXRQYW5lbCgpIHtcbiAgICAgICAgc3VwZXIuc2V0UGFuZWwoKTtcbiAgICAgICAgLy8gVE9ETyDkuJrliqHpgLvovpFcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5FTlRFUl9HQU1FKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlv4Pot7Plm57osIPvvIjlvZNhY3Rpb25JZOS4jeebuOetieaXtuaJjeS8muinpuWPke+8iVxuICAgICAqIEBwYXJhbSByZWNvdmVyeVxuICAgICAqL1xuICAgIHByb3RlY3RlZCBvblJlY292ZXJ5RGF0YShyZWNvdmVyeTogU3luY0RhdGEpOiB2b2lkIHtcbiAgICAgICAgc3VwZXIub25SZWNvdmVyeURhdGEocmVjb3ZlcnkpO1xuICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNUKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvZznrZTmraPnoa5cbiAgICAgKiDniLbnsbvlrp7njrDkuobmlbDmja7kuIrmiqVcbiAgICAgKiBAcGFyYW0gaXNDdXJMZXZlbEZpbmlzaCDmnKzlhbPmmK/lkKblrozmiJBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYW5zd2VyUmlnaHQoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbikge1xuICAgICAgICBzdXBlci5hbnN3ZXJSaWdodChpc0N1ckxldmVsRmluaXNoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDkvZznrZTplJnor69cbiAgICAgKiDniLbnsbvlrp7njrDkuobmlbDmja7kuIrmiqVcbiAgICAgKiBAcGFyYW0gaXNDdXJMZXZlbEZpbmlzaCDmnKzlhbPmmK/lkKblrozmiJBcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgYW5zd2VyV3JvbmcoaXNDdXJMZXZlbEZpbmlzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyLmFuc3dlcldyb25nKGlzQ3VyTGV2ZWxGaW5pc2gpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOa4uOaIj+e7k+adn1xuICAgICAqIOeItuexu+WunueOsOS6hue7k+eul+eVjOmdou+8iOa4uOaIj+e7k+adn+aIluaYn+e6p+ivhOWIpO+8ieeahOW8ueWHulxuICAgICAqL1xuICAgIHByb3RlY3RlZCBnYW1lT3ZlcigpIHtcbiAgICAgICAgc3VwZXIuZ2FtZU92ZXIoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDph43njqlcbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgb25SZXBsYXkoKSB7XG4gICAgICAgIHN1cGVyLm9uUmVwbGF5KCk7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNoaWd1YW5fMSA9IDE7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNoaWd1YW5fMiA9IDE7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNoaWd1YW5fMyA9IDY7XG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnRydWVBcnIgPSBbXTtcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2hvdEVuYWJsZSA9IHRydWU7XG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuR0FNRV9SRVBMQVkpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBzdXBlci51cGRhdGUoZHQpO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a607xqEnJD54FRfTiB1oTH', 'SoundConfig');
// game/scripts/UI/Item/SoundConfig.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundConfig = void 0;
var SoundConfig = /** @class */ (function () {
    function SoundConfig() {
    }
    /** --------------------------游戏通用配置---------------------------------- */
    SoundConfig.soudlist = {};
    return SoundConfig;
}());
exports.SoundConfig = SoundConfig;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXFNvdW5kQ29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFNQSxDQUFDO0lBTEcseUVBQXlFO0lBQzNELG9CQUFRLEdBQUMsRUFFdEIsQ0FBQTtJQUVMLGtCQUFDO0NBTkQsQUFNQyxJQUFBO0FBTlksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU291bmRDb25maWcge1xyXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5ri45oiP6YCa55So6YWN572uLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBzb3VkbGlzdD17ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/UI/Item/GameUI.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f73c56FnmVJYpv47A7O8GFZ', 'GameUI');
// game/scripts/UI/Item/GameUI.ts

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
var SyncDataManager_1 = require("../../../../frame/scripts/Manager/SyncDataManager");
var UIHelp_1 = require("../../../../frame/scripts/Utils/UIHelp");
var EventType_1 = require("../../Data/EventType");
var EditorManager_1 = require("../../Manager/EditorManager");
var Role_1 = require("./Role");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameUI = /** @class */ (function (_super) {
    __extends(GameUI, _super);
    function GameUI() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.geziType = [];
        _this.tigan = null;
        _this.btn_node = null;
        _this.role_prefab = null;
        _this.btn_submit_disabled = null;
        return _this;
    }
    GameUI.prototype.onLoad = function () {
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.on(EventType_1.EventType.CLICK_ROLE, this.handleClickRole, this);
    };
    GameUI.prototype.onDestroy = function () {
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.GAME_REPLAY, this.handleEnterGame, this);
        ListenerManager_1.ListenerManager.off(EventType_1.EventType.CLICK_ROLE, this.handleClickRole, this);
    };
    GameUI.prototype.handleEnterGame = function () {
        if (!EditorManager_1.EditorManager.editorData.needEnd) {
            this.node.getChildByName("bg").active = false;
        }
        this.initUI();
    };
    GameUI.prototype.initUI = function () {
        this.geziType.forEach(function (item, index) {
            item.active = false;
        });
        this.geziType[EditorManager_1.EditorManager.editorData.geziSize].active = true;
        this.showRole();
        this.drawLine();
    };
    GameUI.prototype.showRole = function () {
        var _this = this;
        var roleParent = this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node");
        var rowCount = EditorManager_1.EditorManager.editorData.geziSize === 0 ? 5 : 6;
        for (var i = 0; i < rowCount; i++) {
            for (var j = 0; j < rowCount; j++) {
                if (EditorManager_1.EditorManager.editorData.geziIconArr[i][j] != 0) {
                    var roleNode = cc.instantiate(this.role_prefab);
                    roleNode.parent = roleParent;
                    var childrenIndex = i * rowCount + j;
                    roleNode.name = "role_" + childrenIndex;
                    var pos = this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("gezi").children[childrenIndex].position;
                    roleNode.position = pos;
                    var role = roleNode.getComponent(Role_1.default);
                    role.type = EditorManager_1.EditorManager.editorData.geziIconArr[i][j];
                    role.geziIndex = childrenIndex;
                    role.showInit();
                }
            }
        }
        this.scheduleOnce(function () {
            _this.showTigan();
        }, 0.5);
    };
    GameUI.prototype.handleClickRole = function (data) {
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole == null) {
            SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = data;
        }
        else {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole == data) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
            }
            else {
                this.UpdateLine(data);
            }
        }
        for (var i = 0; i < this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node").childrenCount; i++) {
            this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node").children[i].getComponent(Role_1.default).initRole();
        }
        if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole != null) {
            var roleNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize].getChildByName("role_node").getChildByName("role_" + SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole);
            roleNode.getComponent(Role_1.default).showClick();
        }
    };
    GameUI.prototype.UpdateLine = function (data) {
        var selfAnswer = [SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole, data];
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            if (answer[0] == selfAnswer[0] && answer[1] == selfAnswer[1]) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
                SoundManager_1.SoundManager.playEffect("连线消失的音效", false);
                this.drawLine();
                return;
            }
            else if (answer[0] == selfAnswer[1] && answer[1] == selfAnswer[0]) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
                SoundManager_1.SoundManager.playEffect("连线消失的音效", false);
                this.drawLine();
                return;
            }
        }
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.push(selfAnswer);
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.curChooseRole = null;
        SoundManager_1.SoundManager.playEffect("出现连线的音效", false);
        this.drawLine();
    };
    GameUI.prototype.drawLine = function () {
        this.btn_submit_disabled.active = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length == 0;
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var draw_node = geziNode.getChildByName("draw_node");
        draw_node.removeAllChildren();
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            var startPos = startNode.position;
            var endPos = endNode.position;
            var lineNode = new cc.Node();
            lineNode.parent = draw_node;
            var graphics = lineNode.addComponent(cc.Graphics);
            graphics.lineWidth = 20;
            graphics.strokeColor = cc.Color.WHITE;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
        }
    };
    GameUI.prototype.showTigan = function () {
        var _this = this;
        this.tigan.string = EditorManager_1.EditorManager.editorData.tigan;
        this.tigan.node.parent.active = EditorManager_1.EditorManager.editorData.tigan.length > 0;
        this.scheduleOnce(function () {
            _this.showBtn();
        }, 0.5);
    };
    GameUI.prototype.showBtn = function () {
        this.btn_node.active = true;
    };
    GameUI.prototype.onClickReset = function () {
        SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr = [];
        this.drawLine();
    };
    GameUI.prototype.onClickSubmit = function () {
        UIHelp_1.UIHelp.showMask();
        var selfAnswerArr = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr;
        var answerArr = EditorManager_1.EditorManager.editorData.answerArr;
        if (selfAnswerArr.length == answerArr.length) {
            var isAllRight = true;
            for (var i = 0; i < selfAnswerArr.length; i++) {
                var answer = selfAnswerArr[i];
                if (!this.isInArray(answerArr, answer)) {
                    isAllRight = false;
                    this.drawRedLine(selfAnswerArr[i]);
                }
            }
            if (isAllRight) {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, true);
                SoundManager_1.SoundManager.playEffect("正确音效", false);
                this.onTrueEffect();
            }
            else {
                ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
                SoundManager_1.SoundManager.playEffect("错误音效", false);
            }
        }
        else {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.SUBMIT, false);
            SoundManager_1.SoundManager.playEffect("错误音效", false);
            for (var i = 0; i < selfAnswerArr.length; i++) {
                var answer = selfAnswerArr[i];
                if (!this.isInArray(answerArr, answer)) {
                    this.drawRedLine(selfAnswerArr[i]);
                }
            }
        }
    };
    //判断元素是否在数组中
    GameUI.prototype.isInArray = function (arr, value) {
        //不考虑value数组中元素的顺序
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].sort().toString() == value.sort().toString()) {
                return true;
            }
        }
        return false;
    };
    GameUI.prototype.drawRedLine = function (answerArr) {
        var _this = this;
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var draw_node = geziNode.getChildByName("draw_node");
        var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answerArr[0]);
        var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answerArr[1]);
        var startPos = startNode.position;
        var endPos = endNode.position;
        var lineNode = new cc.Node();
        lineNode.parent = draw_node;
        var graphics = lineNode.addComponent(cc.Graphics);
        graphics.lineWidth = 20;
        graphics.strokeColor = cc.Color.RED;
        graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
        graphics.lineCap = cc.Graphics.LineCap.ROUND;
        graphics.moveTo(startPos.x, startPos.y);
        graphics.lineTo(endPos.x, endPos.y);
        graphics.stroke();
        this.scheduleOnce(function () {
            _this.delInArray(answerArr);
            SoundManager_1.SoundManager.playEffect("连线消失的音效", false);
            lineNode.destroy();
            _this.drawLine();
            UIHelp_1.UIHelp.closeMask();
        }, 0.5);
    };
    GameUI.prototype.delInArray = function (value) {
        //不考虑value数组中元素的顺序
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            if (SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i].sort().toString() == value.sort().toString()) {
                SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.splice(i, 1);
                return;
            }
        }
    };
    GameUI.prototype.onTrueEffect = function () {
        var _this = this;
        this.drawGreenLine();
        this.scheduleOnce(function () {
            _this.moveRole();
        }, 0.5);
    };
    GameUI.prototype.moveRole = function () {
        var _this = this;
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var _loop_1 = function (i) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            var index1 = startNode.getComponent(Role_1.default).type;
            var index2 = endNode.getComponent(Role_1.default).type;
            var startRole = startNode;
            var endRole = endNode;
            if (index1 > index2) {
                startRole = endNode;
                endRole = startNode;
            }
            cc.tween(startRole).to(0.5, { position: endRole.position }).call(function () {
                endRole.getComponent(Role_1.default).showChange();
                startRole.opacity = 0;
                _this.scheduleOnce(function () {
                    _this.gameOver();
                }, 2.5);
            }).start();
        };
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            _loop_1(i);
        }
    };
    GameUI.prototype.drawGreenLine = function () {
        var geziNode = this.geziType[EditorManager_1.EditorManager.editorData.geziSize];
        var draw_node = geziNode.getChildByName("draw_node");
        draw_node.removeAllChildren();
        var _loop_2 = function (i) {
            var answer = SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr[i];
            var startNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[0]);
            var endNode = geziNode.getChildByName("role_node").getChildByName("role_" + answer[1]);
            var startPos = startNode.position;
            var endPos = endNode.position;
            var lineNode = new cc.Node();
            lineNode.parent = draw_node;
            var graphics = lineNode.addComponent(cc.Graphics);
            graphics.lineWidth = 20;
            graphics.strokeColor = cc.Color.GREEN;
            graphics.lineJoin = cc.Graphics.LineJoin.ROUND;
            graphics.lineCap = cc.Graphics.LineCap.ROUND;
            graphics.moveTo(startPos.x, startPos.y);
            graphics.lineTo(endPos.x, endPos.y);
            graphics.stroke();
            this_1.scheduleOnce(function () {
                lineNode.destroy();
            }, 0.5);
        };
        var this_1 = this;
        for (var i = 0; i < SyncDataManager_1.SyncDataManager.getSyncData().customSyncData.selfAnswerArr.length; i++) {
            _loop_2(i);
        }
    };
    GameUI.prototype.gameOver = function () {
        if (EditorManager_1.EditorManager.editorData.needEnd) {
            ListenerManager_1.ListenerManager.dispatch(EventType_1.EventType.GAME_OVER);
        }
    };
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "geziType", void 0);
    __decorate([
        property(cc.Label)
    ], GameUI.prototype, "tigan", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_node", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameUI.prototype, "role_prefab", void 0);
    __decorate([
        property(cc.Node)
    ], GameUI.prototype, "btn_submit_disabled", void 0);
    GameUI = __decorate([
        ccclass
    ], GameUI);
    return GameUI;
}(cc.Component));
exports.default = GameUI;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcVUlcXEl0ZW1cXEdhbWVVSS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxRkFBb0Y7QUFDcEYsK0VBQThFO0FBQzlFLHFGQUFvRjtBQUNwRixpRUFBZ0U7QUFFaEUsa0RBQWlEO0FBQ2pELDZEQUE0RDtBQUM1RCwrQkFBMEI7QUFFcEIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUF5U0M7UUF2U1csY0FBUSxHQUFjLEVBQUUsQ0FBQztRQUV6QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIseUJBQW1CLEdBQVksSUFBSSxDQUFDOztJQStSaEQsQ0FBQztJQTdSRyx1QkFBTSxHQUFOO1FBQ0ksaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxpQ0FBZSxDQUFDLEVBQUUsQ0FBQyxxQkFBUyxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hFLGlDQUFlLENBQUMsRUFBRSxDQUFDLHFCQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEUsaUNBQWUsQ0FBQyxFQUFFLENBQUMscUJBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsMEJBQVMsR0FBVDtRQUNJLGlDQUFlLENBQUMsR0FBRyxDQUFDLHFCQUFTLENBQUMsVUFBVSxFQUFFLElBQUksQ0FB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WUFBWSxDQUFDO2dCQUNkLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7OztRQWxCWixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsaUNBQWUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQWpGLENBQUM7U0FtQlQ7SUFDTCxDQUFDO0lBRU8seUJBQVEsR0FBaEI7UUFDSSxJQUFJLDZCQUFhLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRTtZQUNsQyxpQ0FBZSxDQUFDLFFBQVEsQ0FBQyxxQkFBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0wsQ0FBQztJQXJTRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNlO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7eUNBQ1k7SUFFL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0Q0FDZTtJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNrQjtJQUV0QztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3VEQUMwQjtJQVYzQixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBeVMxQjtJQUFELGFBQUM7Q0F6U0QsQUF5U0MsQ0F6U21DLEVBQUUsQ0FBQyxTQUFTLEdBeVMvQztrQkF6U29CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lck1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL0xpc3RlbmVyTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTb3VuZE1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1NvdW5kTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBTeW5jRGF0YU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9NYW5hZ2VyL1N5bmNEYXRhTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBVSUhlbHAgfSBmcm9tIFwiLi4vLi4vLi4vLi4vZnJhbWUvc2NyaXB0cy9VdGlscy9VSUhlbHBcIjtcclxuaW1wb3J0IHsgQ3VzdG9tU3luY0RhdGEgfSBmcm9tIFwiLi4vLi4vRGF0YS9DdXN0b21TeW5jRGF0YVwiO1xyXG5pbXBvcnQgeyBFdmVudFR5cGUgfSBmcm9tIFwiLi4vLi4vRGF0YS9FdmVudFR5cGVcIjtcclxuaW1wb3J0IHsgRWRpdG9yTWFuYWdlciB9IGZyb20gXCIuLi8uLi9NYW5hZ2VyL0VkaXRvck1hbmFnZXJcIjtcclxuaW1wb3J0IFJvbGUgZnJvbSBcIi4vUm9sZVwiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVVSSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkoY2MuTm9kZSlcclxuICAgIHByaXZhdGUgZ2V6aVR5cGU6IGNjLk5vZGVbXSA9IFtdO1xyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgcHJpdmF0ZSB0aWdhbjogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9ub2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXHJcbiAgICBwcml2YXRlIHJvbGVfcHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBwcml2YXRlIGJ0bl9zdWJtaXRfZGlzYWJsZWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkVOVEVSX0dBTUUsIHRoaXMuaGFuZGxlRW50ZXJHYW1lLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub24oRXZlbnRUeXBlLkdBTUVfUkVDT05ORUNULCB0aGlzLmluaXRVSSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9uKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vbihFdmVudFR5cGUuQ0xJQ0tfUk9MRSwgdGhpcy5oYW5kbGVDbGlja1JvbGUsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5FTlRFUl9HQU1FLCB0aGlzLmhhbmRsZUVudGVyR2FtZSwgdGhpcyk7XHJcbiAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLm9mZihFdmVudFR5cGUuR0FNRV9SRUNPTk5FQ1QsIHRoaXMuaW5pdFVJLCB0aGlzKTtcclxuICAgICAgICBMaXN0ZW5lck1hbmFnZXIub2ZmKEV2ZW50VHlwZS5HQU1FX1JFUExBWSwgdGhpcy5oYW5kbGVFbnRlckdhbWUsIHRoaXMpO1xyXG4gICAgICAgIExpc3RlbmVyTWFuYWdlci5vZmYoRXZlbnRUeXBlLkNMSUNLX1JPTEUsIHRoaXMuaGFuZGxlQ2xpY2tSb2xlLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhbmRsZUVudGVyR2FtZSgpIHtcclxuICAgICAgICBpZiAoIUVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5uZWVkRW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJnXCIpLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRVSSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5pdFVJKCkge1xyXG4gICAgICAgIHRoaXMuZ2V6aVR5cGUuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dSb2xlKCk7XHJcbiAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2hvd1JvbGUoKSB7XHJcbiAgICAgICAgbGV0IHJvbGVQYXJlbnQgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV0uZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIik7XHJcbiAgICAgICAgbGV0IHJvd0NvdW50ID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplID09PSAwID8gNSA6IDY7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3dDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcm93Q291bnQ7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppSWNvbkFycltpXVtqXSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5yb2xlX3ByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5vZGUucGFyZW50ID0gcm9sZVBhcmVudDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRyZW5JbmRleCA9IGkgKiByb3dDb3VudCArIGo7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5vZGUubmFtZSA9IFwicm9sZV9cIiArIGNoaWxkcmVuSW5kZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcImdlemlcIikuY2hpbGRyZW5bY2hpbGRyZW5JbmRleF0ucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZU5vZGUucG9zaXRpb24gPSBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvbGUgPSByb2xlTm9kZS5nZXRDb21wb25lbnQoUm9sZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZS50eXBlID0gRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlJY29uQXJyW2ldW2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvbGUuZ2V6aUluZGV4ID0gY2hpbGRyZW5JbmRleDtcclxuICAgICAgICAgICAgICAgICAgICByb2xlLnNob3dJbml0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dUaWdhbigpO1xyXG4gICAgICAgIH0sIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVDbGlja1JvbGUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlID0gZGF0YTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9PSBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuVXBkYXRlTGluZShkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5jaGlsZHJlbkNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmNoaWxkcmVuW2ldLmdldENvbXBvbmVudChSb2xlKS5pbml0Um9sZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCByb2xlTm9kZSA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5jdXJDaG9vc2VSb2xlKTtcclxuICAgICAgICAgICAgcm9sZU5vZGUuZ2V0Q29tcG9uZW50KFJvbGUpLnNob3dDbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIFVwZGF0ZUxpbmUoZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IHNlbGZBbnN3ZXIgPSBbU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSwgZGF0YV07XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICBpZiAoYW5zd2VyWzBdID09IHNlbGZBbnN3ZXJbMF0gJiYgYW5zd2VyWzFdID09IHNlbGZBbnN3ZXJbMV0pIHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIui/nue6v+a2iOWkseeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5zd2VyWzBdID09IHNlbGZBbnN3ZXJbMV0gJiYgYW5zd2VyWzFdID09IHNlbGZBbnN3ZXJbMF0pIHtcclxuICAgICAgICAgICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuY3VyQ2hvb3NlUm9sZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIui/nue6v+a2iOWkseeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5wdXNoKHNlbGZBbnN3ZXIpO1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLmN1ckNob29zZVJvbGUgPSBudWxsO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5wbGF5RWZmZWN0KFwi5Ye6546w6L+e57q/55qE6Z+z5pWIXCIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmF3TGluZSgpIHtcclxuICAgICAgICB0aGlzLmJ0bl9zdWJtaXRfZGlzYWJsZWQuYWN0aXZlID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGggPT0gMDtcclxuXHJcbiAgICAgICAgbGV0IGdlemlOb2RlID0gdGhpcy5nZXppVHlwZVtFZGl0b3JNYW5hZ2VyLmVkaXRvckRhdGEuZ2V6aVNpemVdXHJcbiAgICAgICAgbGV0IGRyYXdfbm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwiZHJhd19ub2RlXCIpO1xyXG4gICAgICAgIGRyYXdfbm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgYW5zd2VyID0gU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFycltpXTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlclswXSk7XHJcbiAgICAgICAgICAgIGxldCBlbmROb2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgYW5zd2VyWzFdKTtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zID0gc3RhcnROb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgZW5kUG9zID0gZW5kTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgbGV0IGxpbmVOb2RlID0gbmV3IGNjLk5vZGUoKTtcclxuICAgICAgICAgICAgbGluZU5vZGUucGFyZW50ID0gZHJhd19ub2RlO1xyXG4gICAgICAgICAgICBsZXQgZ3JhcGhpY3MgPSBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lV2lkdGggPSAyMDtcclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlQ29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUpvaW4gPSBjYy5HcmFwaGljcy5MaW5lSm9pbi5ST1VORDtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLm1vdmVUbyhzdGFydFBvcy54LCBzdGFydFBvcy55KTtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubGluZVRvKGVuZFBvcy54LCBlbmRQb3MueSk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dUaWdhbigpIHtcclxuICAgICAgICB0aGlzLnRpZ2FuLnN0cmluZyA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbjtcclxuICAgICAgICB0aGlzLnRpZ2FuLm5vZGUucGFyZW50LmFjdGl2ZSA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS50aWdhbi5sZW5ndGggPiAwO1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93QnRuKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dCdG4oKSB7XHJcbiAgICAgICAgdGhpcy5idG5fbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1Jlc2V0KCkge1xyXG4gICAgICAgIFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIgPSBbXTtcclxuICAgICAgICB0aGlzLmRyYXdMaW5lKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgb25DbGlja1N1Ym1pdCgpIHtcclxuICAgICAgICBVSUhlbHAuc2hvd01hc2soKTtcclxuICAgICAgICBsZXQgc2VsZkFuc3dlckFyciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnI7XHJcbiAgICAgICAgbGV0IGFuc3dlckFyciA9IEVkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5hbnN3ZXJBcnI7XHJcbiAgICAgICAgaWYgKHNlbGZBbnN3ZXJBcnIubGVuZ3RoID09IGFuc3dlckFyci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGV0IGlzQWxsUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBzZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzSW5BcnJheShhbnN3ZXJBcnIsIGFuc3dlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc0FsbFJpZ2h0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kcmF3UmVkTGluZShzZWxmQW5zd2VyQXJyW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNBbGxSaWdodCkge1xyXG4gICAgICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5TVUJNSVQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoXCLmraPnoa7pn7PmlYhcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblRydWVFZmZlY3QoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIExpc3RlbmVyTWFuYWdlci5kaXNwYXRjaChFdmVudFR5cGUuU1VCTUlULCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBMaXN0ZW5lck1hbmFnZXIuZGlzcGF0Y2goRXZlbnRUeXBlLlNVQk1JVCwgZmFsc2UpO1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIumUmeivr+mfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuc3dlciA9IHNlbGZBbnN3ZXJBcnJbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNJbkFycmF5KGFuc3dlckFyciwgYW5zd2VyKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhd1JlZExpbmUoc2VsZkFuc3dlckFycltpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy/liKTmlq3lhYPntKDmmK/lkKblnKjmlbDnu4TkuK1cclxuICAgIHByaXZhdGUgaXNJbkFycmF5KGFycjogYW55W11bXSwgdmFsdWU6IGFueVtdKSB7XHJcbiAgICAgICAgLy/kuI3ogIPomZF2YWx1ZeaVsOe7hOS4reWFg+e0oOeahOmhuuW6j1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhcnJbaV0uc29ydCgpLnRvU3RyaW5nKCkgPT0gdmFsdWUuc29ydCgpLnRvU3RyaW5nKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRyYXdSZWRMaW5lKGFuc3dlckFycjogbnVtYmVyW10pIHtcclxuICAgICAgICBsZXQgZ2V6aU5vZGUgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV1cclxuICAgICAgICBsZXQgZHJhd19ub2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkcmF3X25vZGVcIik7XHJcbiAgICAgICAgbGV0IHN0YXJ0Tm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlckFyclswXSk7XHJcbiAgICAgICAgbGV0IGVuZE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJBcnJbMV0pO1xyXG4gICAgICAgIGxldCBzdGFydFBvcyA9IHN0YXJ0Tm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgZW5kUG9zID0gZW5kTm9kZS5wb3NpdGlvbjtcclxuICAgICAgICBsZXQgbGluZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgIGxpbmVOb2RlLnBhcmVudCA9IGRyYXdfbm9kZTtcclxuICAgICAgICBsZXQgZ3JhcGhpY3MgPSBsaW5lTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZUNvbG9yID0gY2MuQ29sb3IuUkVEO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVKb2luID0gY2MuR3JhcGhpY3MuTGluZUpvaW4uUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubGluZUNhcCA9IGNjLkdyYXBoaWNzLkxpbmVDYXAuUk9VTkQ7XHJcbiAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLmxpbmVUbyhlbmRQb3MueCwgZW5kUG9zLnkpO1xyXG4gICAgICAgIGdyYXBoaWNzLnN0cm9rZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsSW5BcnJheShhbnN3ZXJBcnIpO1xyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIucGxheUVmZmVjdChcIui/nue6v+a2iOWkseeahOmfs+aViFwiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIGxpbmVOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgdGhpcy5kcmF3TGluZSgpO1xyXG4gICAgICAgICAgICBVSUhlbHAuY2xvc2VNYXNrKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlbEluQXJyYXkodmFsdWU6IGFueVtdKSB7XHJcbiAgICAgICAgLy/kuI3ogIPomZF2YWx1ZeaVsOe7hOS4reWFg+e0oOeahOmhuuW6j1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFycltpXS5zb3J0KCkudG9TdHJpbmcoKSA9PSB2YWx1ZS5zb3J0KCkudG9TdHJpbmcoKSkge1xyXG4gICAgICAgICAgICAgICAgU3luY0RhdGFNYW5hZ2VyLmdldFN5bmNEYXRhKCkuY3VzdG9tU3luY0RhdGEuc2VsZkFuc3dlckFyci5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvblRydWVFZmZlY3QoKSB7XHJcbiAgICAgICAgdGhpcy5kcmF3R3JlZW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVSb2xlKCk7XHJcbiAgICAgICAgfSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdmVSb2xlKCkge1xyXG4gICAgICAgIGxldCBnZXppTm9kZSA9IHRoaXMuZ2V6aVR5cGVbRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLmdlemlTaXplXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGFuc3dlciA9IFN5bmNEYXRhTWFuYWdlci5nZXRTeW5jRGF0YSgpLmN1c3RvbVN5bmNEYXRhLnNlbGZBbnN3ZXJBcnJbaV07XHJcbiAgICAgICAgICAgIGxldCBzdGFydE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMF0pO1xyXG4gICAgICAgICAgICBsZXQgZW5kTm9kZSA9IGdlemlOb2RlLmdldENoaWxkQnlOYW1lKFwicm9sZV9ub2RlXCIpLmdldENoaWxkQnlOYW1lKFwicm9sZV9cIiArIGFuc3dlclsxXSk7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDEgPSBzdGFydE5vZGUuZ2V0Q29tcG9uZW50KFJvbGUpLnR5cGU7XHJcbiAgICAgICAgICAgIGxldCBpbmRleDIgPSBlbmROb2RlLmdldENvbXBvbmVudChSb2xlKS50eXBlO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRSb2xlID0gc3RhcnROb2RlO1xyXG4gICAgICAgICAgICBsZXQgZW5kUm9sZSA9IGVuZE5vZGU7XHJcbiAgICAgICAgICAgIGlmIChpbmRleDEgPiBpbmRleDIpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0Um9sZSA9IGVuZE5vZGU7XHJcbiAgICAgICAgICAgICAgICBlbmRSb2xlID0gc3RhcnROb2RlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjYy50d2VlbihzdGFydFJvbGUpLnRvKDAuNSwge3Bvc2l0aW9uOiBlbmRSb2xlLnBvc2l0aW9ufSkuY2FsbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbmRSb2xlLmdldENvbXBvbmVudChSb2xlKS5zaG93Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICBzdGFydFJvbGUub3BhY2l0eSA9IDA7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIoKTtcclxuICAgICAgICAgICAgICAgIH0sIDIuNSk7XHJcbiAgICAgICAgICAgIH0pLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZHJhd0dyZWVuTGluZSgpIHtcclxuICAgICAgICBsZXQgZ2V6aU5vZGUgPSB0aGlzLmdlemlUeXBlW0VkaXRvck1hbmFnZXIuZWRpdG9yRGF0YS5nZXppU2l6ZV1cclxuICAgICAgICBsZXQgZHJhd19ub2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJkcmF3X25vZGVcIik7XHJcbiAgICAgICAgZHJhd19ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBhbnN3ZXIgPSBTeW5jRGF0YU1hbmFnZXIuZ2V0U3luY0RhdGEoKS5jdXN0b21TeW5jRGF0YS5zZWxmQW5zd2VyQXJyW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnROb2RlID0gZ2V6aU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX25vZGVcIikuZ2V0Q2hpbGRCeU5hbWUoXCJyb2xlX1wiICsgYW5zd2VyWzBdKTtcclxuICAgICAgICAgICAgbGV0IGVuZE5vZGUgPSBnZXppTm9kZS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfbm9kZVwiKS5nZXRDaGlsZEJ5TmFtZShcInJvbGVfXCIgKyBhbnN3ZXJbMV0pO1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3MgPSBzdGFydE5vZGUucG9zaXRpb247XHJcbiAgICAgICAgICAgIGxldCBlbmRQb3MgPSBlbmROb2RlLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICBsZXQgbGluZU5vZGUgPSBuZXcgY2MuTm9kZSgpO1xyXG4gICAgICAgICAgICBsaW5lTm9kZS5wYXJlbnQgPSBkcmF3X25vZGU7XHJcbiAgICAgICAgICAgIGxldCBncmFwaGljcyA9IGxpbmVOb2RlLmFkZENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmxpbmVXaWR0aCA9IDIwO1xyXG4gICAgICAgICAgICBncmFwaGljcy5zdHJva2VDb2xvciA9IGNjLkNvbG9yLkdSRUVOO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luLlJPVU5EO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lQ2FwID0gY2MuR3JhcGhpY3MuTGluZUNhcC5ST1VORDtcclxuICAgICAgICAgICAgZ3JhcGhpY3MubW92ZVRvKHN0YXJ0UG9zLngsIHN0YXJ0UG9zLnkpO1xyXG4gICAgICAgICAgICBncmFwaGljcy5saW5lVG8oZW5kUG9zLngsIGVuZFBvcy55KTtcclxuICAgICAgICAgICAgZ3JhcGhpY3Muc3Ryb2tlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmVOb2RlLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgfSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnYW1lT3ZlcigpIHtcclxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlci5lZGl0b3JEYXRhLm5lZWRFbmQpIHtcclxuICAgICAgICAgICAgTGlzdGVuZXJNYW5hZ2VyLmRpc3BhdGNoKEV2ZW50VHlwZS5HQU1FX09WRVIpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------
