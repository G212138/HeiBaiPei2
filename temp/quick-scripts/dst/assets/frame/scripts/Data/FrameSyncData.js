
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