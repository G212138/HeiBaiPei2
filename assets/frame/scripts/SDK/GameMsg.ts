export default class GameMsg {
    /************************************可调用接口**************************************/
    /**
     * 监听课堂端发出的事件
     * @param key 事件名字
     * @param callBack 响应函数
     */
    public static addEvent(key, callBack) {
        window['gameMsg'].on_client_event(key, callBack);
    }

    /**
     * 资源加载开始
     * @param type 课件类型
     * @param protocol_version 交互课件版本
     */
    public static resLoadStart(type?, protocol_version?) {
        window['gameMsg'].res_load_start('courseware_game', '1.1.8');
        GameMsg.resLoadStartLog();
        GameMsg.request_res_load_start('');
    }

    /**
     * 资源加载中
     * @param percent 加载百分比
     */
    public static resLoading(percent) {
        window['gameMsg'].res_load_process(percent);
        GameMsg.res_load_process(percent);
    }

    /**
     * 资源加载完成
     */
    public static resLoadEnd() {
        window['gameMsg'].res_load_complete();
        GameMsg.resLoadEndLog();
        GameMsg.request_res_load_end('');
    }

    /**
     * 游戏开始
     */
    public static gameStart(isResult = false) {
        window['gameMsg'].game_start({ isResult: isResult });
        GameMsg.gameMsg_gameStart(isResult);
        GameMsg.iframe_game_start(isResult);
    }

    /**
     * 游戏操作过程数据上报
     * @param answer_data 操作过程数据/全量数据
     */
    public static answerSyncSend(answer_data) {
        window['gameMsg'].answer_sync_send(answer_data);
        window['iframeMsg'].answer_sync_send(answer_data);
        GameMsg.gameLevelReport(answer_data);
    }

    /**
     * 游戏完成时用于数据上报的全量数据
     * @param data 游戏全量数据
     */
    public static gameOver(data) {
        window['gameMsg'].game_over(data);
        window['iframeMsg'].game_over(data);
        GameMsg.gameOverReport(data);
    }

    /**
     * 上报统计数据
     */
    public static gameStatisticData(data: any) {
        const sendData = { type: 'courseware_game_answer', data: data };
        window['gameMsg'].game_statistic_data(sendData);
        window['iframeMsg'].game_statistic_data(sendData);
    }

    /**
     * 游戏结束，收到stop消息后发送
     */
    public static finished() {
        window['gameMsg'].finished();
    }

    /**
     * 同步发送
     * @param 同步数据
     */
    public static send_sync_data(msg: any) {
        window['iframeMsg'].send_sync_data(msg);
    }

    /**
     * 同步接收
     * @param cb 回调
     */
    public static recv_sync_data(cb) {
        window['iframeMsg'].recv_sync_data(cb);
    }

    /**
     * 获取是否同步
     * @param cb 回调
     */
    public static get_is_sync(cb) {
        window['iframeMsg'].get_is_sync(cb);
    }

    /**
     * 获取角色信息
     * @param cb 回调
     */
    public static get_role(cb) {
        window['iframeMsg'].get_role(cb);
    }

    // 离线模式监听json消息
    public static recv_json_data(cb) {
        window['iframeMsg'].recv_json_data(cb);
    }

    // 离线模式请求json数据
    public static request_json_data(data) {
        window['iframeMsg'].request_json_data(data);
    }

    // 正常日志
    public static info(msg, ...data) {
        window['aliLogMsg'].info(msg, ...data);
    }
    // 警告日志
    public static warn(msg, ...data) {
        window['aliLogMsg'].warn(msg, ...data);
    }
    // 报错日志
    public static error(msg, ...data) {
        window['aliLogMsg'].error(msg, ...data);
    }
    /**
     * URL参数不全报错
     * @param data url参数
     */
    public static URLError(data) {
        window['aliLogMsg'].URLError(data);
    }
    // 网络请求超时
    public static httpTimeOut(msg) {
        window['aliLogMsg'].httpTimeOut(msg);
    }
    // 网络请求错误
    public static httpError(msg) {
        window['aliLogMsg'].httpError(msg);
    }
    // coursewareKey不同
    public static differntKey(msg) {
        window['aliLogMsg'].differntKey(msg);
    }
    // 游戏收到结束游戏上报
    public static gameStop() {
        window['aliLogMsg'].gameStop();
    }

    /*************************************接着玩、重新玩*********************************/

    /**
     * 发送3S心跳
     * @param data
     */
    public static send_sync_3s_data(data: any) {
        window['iframeMsg'].send_sync_3s_data(data);
    }

    /**
     * 监听3S心跳
     * @param cb
     */
    public static recv_sync_3s_data(cb: Function) {
        window['iframeMsg'].recv_sync_3s_data(cb);
    }

    /**
     * 监听接着玩
     * @param cb
     */
    public static recv_keep_playing(cb: Function) {
        window['iframeMsg'].recv_keep_playing(cb);
    }

    /**
     * 接着玩回调
     * @param data  3s心跳数据
     */
    public static request_keep_playing(data: any) {
        window['iframeMsg'].request_keep_playing(data);
    }

    /**
     * 监听取消接着玩
     * @param cb
     */
    public static recv_cancel_keep_playing(cb: Function) {
        window['iframeMsg'].recv_cancel_keep_playing(cb);
    }

    /**
     * 监听重新玩
     * @param cb
     */
    public static recv_restart(cb: Function) {
        window['iframeMsg'].recv_restart(cb);
    }

    /**
     * 发送重新玩成功回调
     * @param data
     */
    public static request_restart_over(data = '') {
        window['iframeMsg'].request_restart_over(data);
    }

    /**
     * 发送准备就绪
     * @param data
     */
    public static request_event_ready(data = '') {
        window['iframeMsg'].request_event_ready(data);
    }

    /**
     * 监听是否为主动发送心跳的一端
     * @param cb 回调
     */
    public static recv_is_master(cb: Function) {
        window['iframeMsg'].recv_is_master(cb);
    }

    /**
     * 发送同步事件监听初始化完成
     * @param data
     */
    public static request_sync_init(data = '') {
        window['iframeMsg'].request_sync_init(data);
    }

    /**
     * 发送关卡信息
     * @param data
     */
    public static request_level_info(data: any) {
        window['iframeMsg'].request_level_info(data);
    }

    /**
     * 获取是否支持接着玩
     * @param cb 回调
     */
    public static get_is_supportKeepAndRestart(cb: Function) {
        window['iframeMsg'].get_is_supportKeepAndRestart(cb);
    }

    /*************************************预加载*********************************/

    /**
     * 获取是否支持预加载
     * @param cb 回调
     */
    public static get_is_preload(cb: Function) {
        window['iframeMsg'].get_is_preload(cb);
    }

    /**
     * 监听窗口打开
     * @param cb
     */
    public static recv_show_gamePanel(cb: Function) {
        window['iframeMsg'].recv_show_gamePanel(cb);
    }

    /**
     * 监听窗口关闭
     * @param cb
     */
    public static recv_hide_gamePanel(cb: Function) {
        window['iframeMsg'].recv_hide_gamePanel(cb);
    }

    /**
     * 发送资源加载开始
     * @param data
     */
    private static request_res_load_start(data) {
        window['iframeMsg'].request_res_load_start(data);
    }

    /**
     * 发送加载进度
     * @param percent 加载百分比
     */
    private static res_load_process(percent) {
        window['iframeMsg'].res_load_process(percent);
    }

    /**
     * 发送资源加载结束
     * @param data
     */
    private static request_res_load_end(data) {
        window['iframeMsg'].request_res_load_end(data);
    }

    /**
     * 发送引擎加载开始
     * @param data
     */
    public static request_engine_load_start(data) {
        window['iframeMsg'].request_engine_load_start(data);
    }

    /**
     * 发送引擎加载结束
     * @param data
     */
    public static request_engine_load_end(data) {
        window['iframeMsg'].request_engine_load_end(data);
    }

    /**********************************************************************************/

    /************************************私有接口**************************************/
    private static b_init: boolean = false; // 防止在自测试时多次发送start
    /**
     * 加载完成
     */
    private static iframe_game_start(isResult) {
        if (this.b_init) {
            return;
        }
        this.b_init = true;
        window['iframeMsg'].game_start({isResult: isResult});
        GameMsg.iframeMsg_gameStart(isResult);
    }

    // 资源加载开始
    private static resLoadStartLog() {
        window['aliLogMsg'].resLoadStart();
    }
    // 资源加载结束
    private static resLoadEndLog() {
        window['aliLogMsg'].resLoadEnd();
    }
    // gameMsg调用gameStart
    private static gameMsg_gameStart(isResult) {
        window['aliLogMsg'].gameMsg_gameStart({isResult: isResult});
    }
    // iframeMsg调用gameStart
    private static iframeMsg_gameStart(isResult) {
        window['aliLogMsg'].iframeMsg_gameStart({isResult: isResult});
    }
    // 游戏单关/单步上报
    private static gameLevelReport(data) {
        window['aliLogMsg'].gameLevelReport(data);
    }
    // 游戏GameOver上报
    private static gameOverReport(data) {
        window['aliLogMsg'].gameOverReport(data);
    }
    /**********************************************************************************/
}
