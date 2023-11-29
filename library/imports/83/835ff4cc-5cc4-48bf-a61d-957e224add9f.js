"use strict";
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