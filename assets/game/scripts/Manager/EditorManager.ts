/**编辑器数据类 */

/**
 * 编辑器数据，根据游戏自定义内部数据
 */
class EditorData {
    // 是否开启星级评
    public isStarCount: boolean = true;
    // 是否开启再玩一次
    public isReplay: boolean = true;
    // 是否自动播放题干语音
    public isPlayTitle: boolean = true;
    // 可重玩次数
    public replayCount: number = 1;
    // 关卡总数
    public levelCount: number = 1;
    // 总步数
    public stepCount: number = 0;
    // 课件等级 0：幼小  1：小低  2：小高
    public coursewareLevel: number = 2;
    // TODO 自定义数据
    public needEnd: boolean = true;
    public geziSize: number = 0;
    public tigan: string = '';
    public iconType: number = 0;
    public geziIconArr: number[] = [];
    public answerArr: number[][] = [];
}

class EditorManagerClass {
    private static _instance: EditorManagerClass;

    static getInstance() {
        if (this._instance == null) {
            this._instance = new EditorManagerClass();
        }
        return this._instance;
    }

    /** 编辑器数据 */
    public editorData: EditorData = new EditorData();

    constructor() {}

    /**
     * 是否支持题目编辑
     */
    public isSupportEdit(): boolean {
        let keys = Object.getOwnPropertyNames(this.editorData);

        return keys.length > 7;
    }

    /**
     * 获取关卡总数
     */
    public getLevelCount() {
        return this.editorData.levelCount;
    }

    /**
     * 设置关卡总数
     */
    public setLevelCount(num: number) {
        this.editorData.levelCount = num;
    }

    /**
     * 获取总步数
     */
    public getStepCount() {
        return this.editorData.stepCount || this.getLevelCount();
    }

    /**
     * 设置总步数
     */
    public setStepCount(num: number) {
        this.editorData.stepCount = num;
    }

    /**
     * 获取课件等级
     * 需要各个游戏根据实际情况设置正确的数值
     * 课件等级 0：幼小  1：小低  2：小高
     */
    public getCoursewareLevel() {
        return this.editorData.coursewareLevel;
    }

    /**
     * 获取编辑器数据
     */
    public getData(): EditorData {
        return this.editorData;
    }

    /**
     * 根据网络请求结果设置编辑器数据
     * @param {EditorData} data
     */
    public setData(data: EditorData) {
        this.editorData = data;
    }
}

export const EditorManager = EditorManagerClass.getInstance();
