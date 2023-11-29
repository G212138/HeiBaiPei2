"use strict";
cc._RF.push(module, 'c1c64g+oUJINqZmXJU6GCDp', 'ReportManager');
// frame/scripts/Manager/ReportManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportData = exports.ExtraData = exports.ExtraGameOverData = exports.GameOverData = exports.ExtraLevelData = exports.LevelData = exports.AnswerResult = exports.ReportManager = void 0;
var ConstValue_1 = require("../../../game/scripts/Data/ConstValue");
var EditorManager_1 = require("../../../game/scripts/Manager/EditorManager");
var GameMsg_1 = require("../SDK/GameMsg");
/**
 * 作答数据管理类
 */
var ReportManagerClass = /** @class */ (function () {
    function ReportManagerClass() {
        /** 星级标准 */
        this._startLevelConfig = [80, 50, 0];
        /** ---------------------------必需参数--------------------------- */
        this._type = 'txt';
        this._result = [];
        // public _gameOver: GameOverData = null;
        /** 第几次作答 */
        this._playIndex = 0;
        /** ---------------------------辅助参数--------------------------- */
        /** 每关开始时间 */
        this._levelStartTime = 0;
        /** 每关作答耗时 */
        this._coastTimeArr = [];
        /** 每关作答次数 */
        this._tryCounts = [];
        /** 实际作答正确次数 */
        this._correctCounts = [];
        /** 每关作答状态 */
        this._AnswerResults = [];
        /** 总关卡数目 */
        this._levelCount = 0;
        /** 当前关卡id  从0开始*/
        this._curLevelId = 0;
        /** 实际作答正确次数 */
        // public _correctCount: number = 0;
        /** 是否全部关卡通关 */
        this.isAllOver = false;
        /** 是否整体未操作 */
        // public _isUndo: boolean = true;
        /**
         * 是否 当前步骤/关卡 未操作，
         * 只要用户有操作就修改此值
         * */
        // public _isCurLevelUndo: boolean = true;
        /** 是否已经上报过game_over */
        this._isReportedGameOver = false;
        /** 需要判断正误的总步数 */
        this._stepCount = 0;
    }
    ReportManagerClass.getInstance = function () {
        if (!this._instance) {
            this._instance = new ReportManagerClass();
        }
        return this._instance;
    };
    /** 添加 关/步骤 时间 */
    ReportManagerClass.prototype.addCoastTime = function (tm) {
        var time = tm - this._levelStartTime;
        time = Math.ceil(time / 1000) * 1000; //时间取整
        this._coastTimeArr[this._curLevelId] = time;
    };
    /** 获取总耗时 */
    ReportManagerClass.prototype.getCoastTimes = function () {
        return this._coastTimeArr;
    };
    ReportManagerClass.prototype.setCoastTimes = function (arr) {
        this._coastTimeArr = arr;
    };
    /** 获取总次数 */
    ReportManagerClass.prototype.getTryCounts = function () {
        return this._tryCounts;
    };
    ReportManagerClass.prototype.setTryCounts = function (arr) {
        this._tryCounts = arr;
    };
    ReportManagerClass.prototype.getCorrectCounts = function () {
        return this._correctCounts;
    };
    ReportManagerClass.prototype.setCorrectCounts = function (arr) {
        this._correctCounts = arr;
    };
    /** 获取总次数 */
    ReportManagerClass.prototype.getAnswerResults = function () {
        return this._AnswerResults;
    };
    ReportManagerClass.prototype.setAnswerResults = function (arr) {
        this._AnswerResults = arr;
    };
    ReportManagerClass.prototype.setAnswerResultByLevel = function (level, answer) {
        this._AnswerResults[level] = answer;
    };
    /** 添加 关/步骤 次数 */
    ReportManagerClass.prototype.addTryCount = function (bCorrect) {
        if (this._tryCounts[this._curLevelId]) {
            this._tryCounts[this._curLevelId] += 1;
        }
        else {
            this._tryCounts[this._curLevelId] = 1;
        }
        if (void 0 === this._correctCounts[this._curLevelId]) {
            this._correctCounts[this._curLevelId] = 0;
        }
        if (bCorrect) {
            this._correctCounts[this._curLevelId] += 1;
        }
    };
    /**
     * 初始化要上报的数据
     *
     * @param {number} levelCount 关卡总数
     */
    ReportManagerClass.prototype.initReportData = function (levelCount) {
        this._playIndex = 1;
        this._curLevelId = 0;
        this.isAllOver = false;
        this._isReportedGameOver = false;
        this._levelCount = levelCount;
        this._result = [];
        for (var i = 0; i < this._levelCount; i++) {
            var levelInfo = this._levelCount > 1 ? ConstValue_1.ConstValue.GameName + "_\u7B2C" + (i + 1) + "\u5173" : ConstValue_1.ConstValue.GameName;
            var _levelData = new ExtraLevelData();
            _levelData.id = i + 1;
            _levelData.question_info = levelInfo;
            this._result.push(_levelData);
        }
        this._levelStartTime = Date.now();
        this.setTryCounts([]);
        this.setCorrectCounts([]);
        this.setCoastTimes([]);
        this.setAnswerResults([]);
        if (EditorManager_1.EditorManager['getStepCount']) {
            this._stepCount = EditorManager_1.EditorManager['getStepCount']();
        }
        else {
            this._stepCount = levelCount;
        }
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    /**
     * 通关之后的重玩
     *  只有外层index自增   其余数据恢复初始状态
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.replayGame = function () {
        this._result = [];
        ++this._playIndex;
        this.isAllOver = false;
        this._isReportedGameOver = false;
        this._curLevelId = 0;
        for (var i = 0; i < this._levelCount; i++) {
            var levelInfo = this._levelCount > 1 ? ConstValue_1.ConstValue.GameName + "_\u7B2C" + (i + 1) + "\u5173" : ConstValue_1.ConstValue.GameName;
            var _levelData = new ExtraLevelData();
            _levelData.id = i + 1;
            _levelData.question_info = levelInfo;
            this._result.push(_levelData);
        }
        this._levelStartTime = Date.now();
        this.setTryCounts([]);
        this.setCorrectCounts([]);
        this.setCoastTimes([]);
        this.setAnswerResults([]);
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    // public setFirstTouch() {
    //     this._isCurLevelUndo = false;
    //     this._isUndo = false;
    // }
    /**
     * 更新关卡作答数据
     *
     * @param {boolean} bCorrect 是否作答正确
     * @param {boolean} bCurLevelFinish 当前关卡是否已完成 用于按步骤上报时状态设置为half，默认为true
     */
    ReportManagerClass.prototype.reportLevelResult = function (bCorrect, bCurLevelFinish) {
        if (bCurLevelFinish === void 0) { bCurLevelFinish = true; }
        if (void 0 === this._result[this._curLevelId])
            return;
        var curTime = Date.now();
        this.addCoastTime(curTime);
        this.addTryCount(bCorrect);
        var answerRes = AnswerResult.NoAnswer;
        if (bCorrect) {
            answerRes = bCurLevelFinish ? AnswerResult.AnswerRight : AnswerResult.AnswerHalf;
        }
        else {
            answerRes = AnswerResult.AnswerError;
        }
        this.setAnswerResultByLevel(this._curLevelId, answerRes);
        var _reportData = this.getReportData();
        _reportData.gameOver = null;
        console.log(_reportData);
        GameMsg_1.default.answerSyncSend(_reportData);
        if (bCurLevelFinish) {
            ++this._curLevelId;
            this._levelStartTime = Date.now();
            if (this._curLevelId === this._levelCount) {
                this.isAllOver = true;
                this.reportGameOver();
            }
            else {
                GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
            }
        }
    };
    /**
     * 作答结束/端上收题 数据上报
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.reportGameOver = function () {
        if (this._isReportedGameOver) {
            return;
        }
        var _reporGameOvertData = this.getReportData();
        console.log(_reporGameOvertData);
        GameMsg_1.default.gameOver(_reporGameOvertData);
        GameMsg_1.default.gameStatisticData(_reporGameOvertData.ext);
        /** 上报game_over数据之后修改状态 */
        this._isReportedGameOver = true;
    };
    /**
     * 获取关卡数据
     */
    ReportManagerClass.prototype.getResultData = function (isExtra) {
        for (var i = 0; i < this._result.length; ++i) {
            var levelData = this._result[i];
            var levelIndex = levelData.id - 1;
            var answerResult = this.getAnswerResults()[levelIndex] || AnswerResult.NoAnswer;
            var answerNum = this.getTryCounts()[levelIndex] || 0;
            var answerCorrect = this.getCorrectCounts()[levelIndex] || 0;
            var answerWrong = answerNum - answerCorrect;
            var answerTime = Math.ceil((this.getCoastTimes()[levelIndex] || 0) / 1000);
            levelData.answer_res = answerResult;
            levelData.answer_num = answerNum;
            levelData.correct_num = answerCorrect;
            levelData.wrong_num = answerWrong;
            levelData.answer_time = answerTime;
        }
        if (isExtra) {
            return this._result;
        }
        else {
            var result_1 = [];
            this._result.forEach(function (info) {
                var extraLevelData = new LevelData();
                extraLevelData.id = info.id;
                extraLevelData.question_info = info.question_info;
                extraLevelData.answer_res = info.answer_res;
                extraLevelData.answer_num = info.answer_num;
                extraLevelData.answer_time = info.answer_time;
                result_1.push(extraLevelData);
            });
            return result_1;
        }
    };
    /**
     * 获取gameOver数据
     */
    ReportManagerClass.prototype.getGameOverData = function (isExtra) {
        var totalTryCount = eval(this.getTryCounts().join('+'));
        totalTryCount = totalTryCount ? totalTryCount : 0;
        var totalCorrectCount = eval(this.getCorrectCounts().join('+'));
        totalCorrectCount = totalCorrectCount ? totalCorrectCount : 0;
        var totalWrongCount = totalTryCount - totalCorrectCount;
        var totalTimes = eval(this.getCoastTimes().join('+'));
        totalTimes = totalTimes ? totalTimes : 0;
        var gameOver = null;
        if (isExtra) {
            gameOver = new ExtraGameOverData();
            gameOver.game_correct_num = totalCorrectCount;
            gameOver.game_wrong_num = totalWrongCount;
            gameOver.cur_level_id = Math.min(this._curLevelId + 1, this._levelCount);
            gameOver.total_level_num = this._levelCount;
            gameOver.star_num = this.getStarCount();
            gameOver.step_count = this._stepCount;
        }
        else {
            gameOver = new GameOverData();
        }
        gameOver.percentage = this.isAllOver ? Math.round((totalCorrectCount / totalTryCount) * 100) : 0;
        gameOver.answer_all_time = Math.ceil(totalTimes / 1000);
        gameOver.complete_degree = this.isAllOver ? 100 : Math.ceil((totalCorrectCount / this._stepCount) * 100);
        gameOver.answer_all_state =
            0 === totalTryCount
                ? AnswerResult.NoAnswer
                : this.isAllOver
                    ? AnswerResult.AnswerRight
                    : AnswerResult.AnswerHalf;
        return gameOver;
    };
    ReportManagerClass.prototype.getExtraData = function () {
        var extraData = new ExtraData();
        extraData.type = this._type;
        extraData.index = this._playIndex;
        extraData.result = this.getResultData(true);
        extraData.gameOver = this.getGameOverData(true);
        return extraData;
    };
    ReportManagerClass.prototype.getReportData = function () {
        var reportData = new ReportData();
        reportData.type = this._type;
        reportData.index = this._playIndex;
        reportData.result = this.getResultData(false);
        reportData.gameOver = this.getGameOverData(false);
        reportData.ext = this.getExtraData();
        return reportData;
    };
    /**
     * 获取星数
     */
    ReportManagerClass.prototype.getStarCount = function () {
        var gameOverData = this.getGameOverData(false);
        var starCount = 0;
        /** 计算星级 */
        if (gameOverData.percentage >= this._startLevelConfig[0]) {
            starCount = 3;
        }
        else if (gameOverData.percentage >= this._startLevelConfig[1]) {
            starCount = 2;
        }
        else if (gameOverData.percentage > this._startLevelConfig[2]) {
            starCount = 1;
        }
        else {
            starCount = 0;
        }
        return starCount;
    };
    /**
     * 需要同步的数据
     *
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.getSyncData = function () {
        var _data = {
            bReportedGameOver: this._isReportedGameOver,
            playCount: this._playIndex,
            startTime: this._levelStartTime,
            coastTimes: this.getCoastTimes(),
            tryCounts: this.getTryCounts(),
            correctCounts: this.getCorrectCounts(),
            curLevelId: this._curLevelId,
            bFinished: this.isAllOver,
            answerResults: this.getAnswerResults(),
        };
        return _data;
    };
    /**
     * 设置接收到的作答状态到本地
     *
     * @param {*} data
     * @memberof DataReportMgr
     */
    ReportManagerClass.prototype.setSyncData = function (data) {
        this._isReportedGameOver = data.bReportedGameOver;
        this._playIndex = data.playCount;
        this._levelStartTime = data.startTime;
        this.setCoastTimes(data.coastTimes);
        this.setTryCounts(data.tryCounts);
        this.setCorrectCounts(data.correctCounts);
        this._curLevelId = data.curLevelId;
        this.isAllOver = data.bFinished;
        this.setAnswerResults(data.answerResults);
        GameMsg_1.default.request_level_info({ levelCount: this._levelCount, curLevel: this._curLevelId + 1 });
    };
    ReportManagerClass._instance = null;
    return ReportManagerClass;
}());
exports.ReportManager = ReportManagerClass.getInstance();
var AnswerResult;
(function (AnswerResult) {
    AnswerResult["AnswerError"] = "answer_error";
    AnswerResult["AnswerRight"] = "answer_right";
    AnswerResult["AnswerHalf"] = "answer_half";
    AnswerResult["NoAnswer"] = "no_answer";
})(AnswerResult = exports.AnswerResult || (exports.AnswerResult = {}));
/**
 * 单关作答数据
 */
var LevelData = /** @class */ (function () {
    function LevelData() {
        /** 关卡ID */
        this.id = 0;
        /** 题目信息 */
        this.question_info = '';
        /** 关卡作答结果  answer_error/answer_right/answer_half/no_answer */
        this.answer_res = AnswerResult.NoAnswer;
        /** 关卡作答次数 */
        this.answer_num = 0;
        /** 关卡作答时间 */
        this.answer_time = 0;
    }
    return LevelData;
}());
exports.LevelData = LevelData;
/**
 * 单关作答数据(额外上报)
 */
var ExtraLevelData = /** @class */ (function (_super) {
    __extends(ExtraLevelData, _super);
    function ExtraLevelData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 关卡作答正确步数 */
        _this.correct_num = 0;
        /** 关卡作答错误步数 */
        _this.wrong_num = 0;
        return _this;
    }
    return ExtraLevelData;
}(LevelData));
exports.ExtraLevelData = ExtraLevelData;
/**
 * gameOver字段内容
 * 其中 percentage 字段在 未通关 的时候，数值为0
 */
var GameOverData = /** @class */ (function () {
    function GameOverData() {
        /** 正确率 */
        this.percentage = 0;
        /** 总作答状态 */
        this.answer_all_state = AnswerResult.NoAnswer;
        /** 总作答时间 */
        this.answer_all_time = 0;
        /** 完成度 */
        this.complete_degree = 0;
    }
    return GameOverData;
}());
exports.GameOverData = GameOverData;
/**
 * gameOver字段内容(额外上报)
 */
var ExtraGameOverData = /** @class */ (function (_super) {
    __extends(ExtraGameOverData, _super);
    function ExtraGameOverData() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 总作答正确步数 */
        _this.game_correct_num = 0;
        /** 总作答错误步数 */
        _this.game_wrong_num = 0;
        /** 当前关卡id */
        _this.cur_level_id = 1;
        /** 总关卡数 */
        _this.total_level_num = 0;
        /** 星级 */
        _this.star_num = 0;
        /** 总步数 */
        _this.step_count = 0;
        return _this;
    }
    return ExtraGameOverData;
}(GameOverData));
exports.ExtraGameOverData = ExtraGameOverData;
/**
 * 额外数据上报
 * */
var ExtraData = /** @class */ (function () {
    function ExtraData() {
        /** 格式类型 */
        this.type = 'txt';
        /** 第几次作答 */
        this.index = 1;
        /** 关卡作答结果 */
        this.result = [];
        /** gameOver数据 */
        this.gameOver = new ExtraGameOverData();
    }
    return ExtraData;
}());
exports.ExtraData = ExtraData;
var ReportData = /** @class */ (function () {
    function ReportData() {
        /** 格式类型 */
        this.type = 'txt';
        /** 第几次作答 */
        this.index = 1;
        /** 关卡作答结果 */
        this.result = [];
        /** gameOver数据 */
        this.gameOver = new GameOverData();
        /** 额外数据上报 */
        this.ext = new ExtraData();
    }
    return ReportData;
}());
exports.ReportData = ReportData;

cc._RF.pop();