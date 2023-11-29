
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