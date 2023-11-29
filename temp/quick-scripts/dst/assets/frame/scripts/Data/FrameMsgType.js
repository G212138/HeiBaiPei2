
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