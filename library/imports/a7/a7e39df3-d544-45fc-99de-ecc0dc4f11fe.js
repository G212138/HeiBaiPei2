"use strict";
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