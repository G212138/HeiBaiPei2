
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