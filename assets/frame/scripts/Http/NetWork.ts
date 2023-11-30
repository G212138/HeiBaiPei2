import { ConstValue } from '../../../game/scripts/Data/ConstValue';
import { UIManager } from '../Manager/UIManager';
import GameMsg from '../SDK/GameMsg';
import { UIHelp } from '../Utils/UIHelp';
export class NetWorkClass {
    private static instance: NetWorkClass;

    //判断是否是线上   URL里不加参数则默认为测试环境
    public readonly isOnlineEnv = this.GetIsOnline() == 'online';
    //判断是否是pc预加载的协议    URL里不加参数则默认为非预加载
    public readonly isOwcr = this.GetBPreload();
    public readonly BASE = this.isOnlineEnv
        ? 'https://courseware-online.speiyou.com'
        : 'https://ceshi-courseware.speiyou.com';
    // public readonly BASE = this.isOnlineEnv ? 'https://courseware-online.saasp.vdyoo.com' : 'https://ceshi-courseware-online.saasp.vdyoo.com';
    // public readonly COS_URL = this.isOnlineEnv ?
    //     'https://classroom-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts'
    //     : 'https://test-class-api-online.saasp.vdyoo.com/micro-class/storage/v1/tencent/sts';
    // public readonly COS_BASE_URL = this.isOnlineEnv ? 'https://micro-class.xuepeiyou.com/' : 'https://micro-class-test.xuepeiyou.com/';

    public readonly GET_QUESTION = this.BASE + '/get';
    public readonly GET_USER_PROGRESS = this.BASE + '/get/answer';
    public readonly GET_TITLE = this.BASE + '/get/title';
    public readonly ADD = this.BASE + '/add';
    public readonly MODIFY = this.BASE + '/modify';
    public readonly CLEAR = this.BASE + '/clear';

    public empty: boolean = false; //清理脏数据的开关，在URL里面拼此参数 = true；

    //新课堂参数
    public userId = null; //用户id
    public chapterId = null; //直播讲id
    public coursewareId = null; //题目信息   用于交互游戏自身查题目信息
    public titleId = null; //交互游戏绑定id   绑定的时候用（监课平台）  学生端不传
    public bLive = null; //是否是直播
    public bPreload = null; //是否预加载  （cdn/zip)
    public env = null; //运行环境（线上/测试）
    public app = null; //App名称
    public platform = null; //硬件平台信息（pc/iPad/android/androidPad/web）
    public channel = null; //使用方(辅导端、学生端、未来黑板、配齐、教研云、……）
    public browser = null; //浏览器信息（内核及版本）
    public appVersion = null; //端的版本信息
    public isTeacher = false; //是否为教师（通过同步的get_role返回的是否为'teacher'）
    public isSync = false; //是否为同步（通过同步的get_is_sync返回是否为1/true）
    public isOffline = 0; //是否为离线模式
    public isMaster = null; //是否是主动发心跳的一方
    public isSupportKeepPlay = false; //是否支持接着玩重新玩

    public theRequest = null;

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new NetWorkClass();
        }
        return this.instance;
    }

    public setIsSync(isSync: boolean) {
        isSync = isSync == null ? false : isSync;
        NetWork.isSync = isSync;
    }

    public setIsTeacher(role: string) {
        let isTeacher = role == 'teacher';
        NetWork.isTeacher = isTeacher;
    }

    public setIsPreload(isPreload: boolean) {
        isPreload = isPreload == null ? false : isPreload;
        UIManager.isGameShowing = !isPreload;
    }

    public setIsMaster(isMaster: boolean) {
        isMaster = isMaster == null ? false : isMaster;
        NetWork.isMaster = isMaster;
    }

    public setIsSupportKeepPlay(isSupportKeepPlay: boolean) {
        NetWork.isSupportKeepPlay = isSupportKeepPlay;
        if (!isSupportKeepPlay) {
            NetWork.isMaster = NetWork.isTeacher;
        }
        console.log(`isSupportKeepPlay: ${isSupportKeepPlay}`);
    }

    /**
     * 请求网络Post 0成功 1超时
     * @param url
     * @param openType
     * @param contentType
     * @param callback
     * @param params
     */
    public httpRequest(url: string, openType, contentType, callback = null, params = '') {
        //------------------离线模式-------------------------
        if (this.isOffline && url.substring(0, this.GET_QUESTION.length) == this.GET_QUESTION) {
            GameMsg.recv_json_data((data) => {
                console.log('recv_json_data:', data);
                if (callback && data.jsonData.errcode == 0) {
                    callback(false, data.jsonData);
                } else {
                    UIHelp.showErrorPanel(
                        data.jsonData.errmsg + ',请联系客服！',
                        '',
                        '',
                        '确定',
                        () => {
                            this.httpRequest(url, openType, contentType, callback, params);
                        },
                        false,
                    );
                }
            });
            GameMsg.request_json_data({ coursewareId: this.coursewareId });
            return;
        }

        if (ConstValue.IS_TEACHER) {
            if (!this.titleId) {
                //教师端没有titleId的情况
                UIHelp.showErrorPanel('URL参数错误,缺少titleId,请联系技术人员！', '', '', '确定');
                return;
            }
        } else {
            //新课堂学生端  判断所有参数
            if (
                !ConstValue.IS_TEACHER &&
                (!this.userId || !this.coursewareId || !this.env || !this.app || !this.channel || !this.browser)
            ) {
                GameMsg.URLError(this.theRequest);
                UIHelp.showErrorPanel('URL参数错误,请联系客服！', '', '', '确定');
                return;
            }
        }

        var xhr = new XMLHttpRequest();
        xhr.open(openType, url);
        xhr.timeout = 10000;
        xhr.setRequestHeader('Content-Type', contentType);
        xhr.withCredentials = true;

        //回调
        xhr.onreadystatechange = () => {
            console.log(
                'httpRequest rsp status',
                xhr.status,
                '        xhr.readyState',
                xhr.readyState,
                '        xhr.responseText',
                xhr.responseText,
            );
            if (xhr.readyState == 4 && xhr.status >= 200 && xhr.status <= 400) {
                let response = JSON.parse(xhr.responseText);
                if (callback && response.errcode == 0) {
                    callback(false, response);
                } else {
                    GameMsg.httpError(response.errmsg);
                    if (ConstValue.IS_EDITIONS) {
                        UIHelp.showErrorPanel(
                            response.errmsg + ',请联系客服！',
                            '',
                            '',
                            '确定',
                            () => {
                                this.httpRequest(url, openType, contentType, callback, params);
                            },
                            false,
                        );
                    }
                }
            }
        };

        //超时回调
        xhr.ontimeout = (event) => {
            GameMsg.httpTimeOut('网络不佳，请稍后重试');
            if (ConstValue.IS_EDITIONS) {
                UIHelp.showErrorPanel(
                    '网络不佳，请稍后重试',
                    '',
                    '若重新连接无效，请联系客服',
                    '重新连接',
                    () => {
                        this.httpRequest(url, openType, contentType, callback, params);
                    },
                    true,
                );
            }
            console.log('httpRequest timeout');
            callback && callback(true, null);
        };

        //出错
        xhr.onerror = (error) => {
            if (ConstValue.IS_EDITIONS) {
                UIHelp.showErrorPanel(
                    '网络出错，请稍后重试',
                    '若重新连接无效，请联系客服',
                    '',
                    '重新连接',
                    () => {
                        this.httpRequest(url, openType, contentType, callback, params);
                    },
                    true,
                );
            }
            console.log('httpRequest error');
            callback && callback(true, null);
        };

        xhr.send(params);
    }

    /**
     * 获取url参数
     */
    public GetRequest() {
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
    }

    public GetBPreload() {
        let BPreload = 0;
        if (this.GetRequest()['bPreload']) {
            BPreload = this.GetRequest()['bPreload'];
        }
        return BPreload;
    }

    public GetIsOnline() {
        let isOnline = 'test';
        if (this.GetRequest()['env']) {
            isOnline = this.GetRequest()['env'];
        }
        return isOnline;
    }
}

export const NetWork = NetWorkClass.getInstance();
