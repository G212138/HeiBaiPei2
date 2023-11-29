
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