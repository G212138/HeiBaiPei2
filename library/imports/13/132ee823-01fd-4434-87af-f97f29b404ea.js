"use strict";
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