
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Manager/ReportManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXE1hbmFnZXJcXFJlcG9ydE1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9FQUFtRTtBQUNuRSw2RUFBNEU7QUFDNUUsMENBQXFDO0FBRXJDOztHQUVHO0FBQ0g7SUFBQTtRQVNJLFdBQVc7UUFDSixzQkFBaUIsR0FBYSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDakQsaUVBQWlFO1FBQzFELFVBQUssR0FBVyxLQUFLLENBQUM7UUFDdEIsWUFBTyxHQUEwQixFQUFFLENBQUM7UUFDM0MseUNBQXlDO1FBQ3pDLFlBQVk7UUFDTCxlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBRTlCLGlFQUFpRTtRQUNqRSxhQUFhO1FBQ04sb0JBQWUsR0FBVyxDQUFDLENBQUM7UUFFbkMsYUFBYTtRQUNOLGtCQUFhLEdBQWEsRUFBRSxDQUFDO1FBZXBDLGFBQWE7UUFDTixlQUFVLEdBQWEsRUFBRSxDQUFDO1FBU2pDLGVBQWU7UUFDUixtQkFBYyxHQUFhLEVBQUUsQ0FBQztRQVFyQyxhQUFhO1FBQ04sbUJBQWMsR0FBbUIsRUFBRSxDQUFDO1FBWTNDLFlBQVk7UUFDTCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUUvQixrQkFBa0I7UUFDWCxnQkFBVyxHQUFXLENBQUMsQ0FBQztRQUUvQixlQUFlO1FBQ2Ysb0NBQW9DO1FBRXBDLGVBQWU7UUFDUixjQUFTLEdBQVksS0FBSyxDQUFDO1FBRWxDLGNBQWM7UUFDZCxrQ0FBa0M7UUFFbEM7OzthQUdLO1FBQ0wsMENBQTBDO1FBRTFDLHVCQUF1QjtRQUNoQix3QkFBbUIsR0FBWSxLQUFLLENBQUM7UUFFNUMsaUJBQWlCO1FBQ1YsZUFBVSxHQUFXLENBQUMsQ0FBQztJQTBTbEMsQ0FBQztJQXZZaUIsOEJBQVcsR0FBekI7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZ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YUFBYTtRQUNiLFdBQU0sR0FBZ0IsRUFBRSxDQUFDO1FBQ3pCLGlCQUFpQjtRQUNqQixhQUFRLEdBQWlCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDNUMsYUFBYTtRQUNiLFFBQUcsR0FBYyxJQUFJLFNBQVMsRUFBRSxDQUFDO0lBQ3JDLENBQUM7SUFBRCxpQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdFZhbHVlIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL0RhdGEvQ29uc3RWYWx1ZSc7XG5pbXBvcnQgeyBFZGl0b3JNYW5hZ2VyIH0gZnJvbSAnLi4vLi4vLi4vZ2FtZS9zY3JpcHRzL01hbmFnZXIvRWRpdG9yTWFuYWdlcic7XG5pbXBvcnQgR2FtZU1zZyBmcm9tICcuLi9TREsvR2FtZU1zZyc7XG5cbi8qKlxuICog5L2c562U5pWw5o2u566h55CG57G7XG4gKi9cbmNsYXNzIFJlcG9ydE1hbmFnZXJDbGFzcyB7XG4gICAgcHVibGljIHN0YXRpYyBfaW5zdGFuY2U6IFJlcG9ydE1hbmFnZXJDbGFzcyA9IG51bGw7XG4gICAgcHVibGljIHN0YXRpYyBnZXRJbnN0YW5jZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UgPSBuZXcgUmVwb3J0TWFuYWdlckNsYXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlO1xuICAgIH1cblxuICAgIC8qKiDmmJ/nuqfmoIflh4YgKi9cbiAgICBwdWJsaWMgX3N0YXJ0TGV2ZWxDb25maWc6IG51bWJlcltdID0gWzgwLCA1MCwgMF07XG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeW/hemcgOWPguaVsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIHB1YmxpYyBfdHlwZTogc3RyaW5nID0gJ3R4dCc7XG4gICAgcHVibGljIF9yZXN1bHQ6IEFycmF5PEV4dHJhTGV2ZWxEYXRhPiA9IFtdO1xuICAgIC8vIHB1YmxpYyBfZ2FtZU92ZXI6IEdhbWVPdmVyRGF0YSA9IG51bGw7XG4gICAgLyoqIOesrOWHoOasoeS9nOetlCAqL1xuICAgIHB1YmxpYyBfcGxheUluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLei+heWKqeWPguaVsC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuICAgIC8qKiDmr4/lhbPlvIDlp4vml7bpl7QgKi9cbiAgICBwdWJsaWMgX2xldmVsU3RhcnRUaW1lOiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOavj+WFs+S9nOetlOiAl+aXtiAqL1xuICAgIHB1YmxpYyBfY29hc3RUaW1lQXJyOiBudW1iZXJbXSA9IFtdO1xuICAgIC8qKiDmt7vliqAg5YWzL+atpemqpCDml7bpl7QgKi9cbiAgICBwdWJsaWMgYWRkQ29hc3RUaW1lKHRtOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRpbWUgPSB0bSAtIHRoaXMuX2xldmVsU3RhcnRUaW1lO1xuICAgICAgICB0aW1lID0gTWF0aC5jZWlsKHRpbWUgLyAxMDAwKSAqIDEwMDA7IC8v5pe26Ze05Y+W5pW0XG4gICAgICAgIHRoaXMuX2NvYXN0VGltZUFyclt0aGlzLl9jdXJMZXZlbElkXSA9IHRpbWU7XG4gICAgfVxuICAgIC8qKiDojrflj5bmgLvogJfml7YgKi9cbiAgICBwdWJsaWMgZ2V0Q29hc3RUaW1lcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvYXN0VGltZUFycjtcbiAgICB9XG4gICAgcHVibGljIHNldENvYXN0VGltZXMoYXJyOiBudW1iZXJbXSkge1xuICAgICAgICB0aGlzLl9jb2FzdFRpbWVBcnIgPSBhcnI7XG4gICAgfVxuXG4gICAgLyoqIOavj+WFs+S9nOetlOasoeaVsCAqL1xuICAgIHB1YmxpYyBfdHJ5Q291bnRzOiBudW1iZXJbXSA9IFtdO1xuICAgIC8qKiDojrflj5bmgLvmrKHmlbAgKi9cbiAgICBwdWJsaWMgZ2V0VHJ5Q291bnRzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJ5Q291bnRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0VHJ5Q291bnRzKGFycjogbnVtYmVyW10pIHtcbiAgICAgICAgdGhpcy5fdHJ5Q291bnRzID0gYXJyO1xuICAgIH1cblxuICAgIC8qKiDlrp7pmYXkvZznrZTmraPnoa7mrKHmlbAgKi9cbiAgICBwdWJsaWMgX2NvcnJlY3RDb3VudHM6IG51bWJlcltdID0gW107XG4gICAgcHVibGljIGdldENvcnJlY3RDb3VudHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb3JyZWN0Q291bnRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0Q29ycmVjdENvdW50cyhhcnI6IG51bWJlcltdKSB7XG4gICAgICAgIHRoaXMuX2NvcnJlY3RDb3VudHMgPSBhcnI7XG4gICAgfVxuXG4gICAgLyoqIOavj+WFs+S9nOetlOeKtuaAgSAqL1xuICAgIHB1YmxpYyBfQW5zd2VyUmVzdWx0czogQW5zd2VyUmVzdWx0W10gPSBbXTtcbiAgICAvKiog6I635Y+W5oC75qyh5pWwICovXG4gICAgcHVibGljIGdldEFuc3dlclJlc3VsdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9BbnN3ZXJSZXN1bHRzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0QW5zd2VyUmVzdWx0cyhhcnI6IEFuc3dlclJlc3VsdFtdKSB7XG4gICAgICAgIHRoaXMuX0Fuc3dlclJlc3VsdHMgPSBhcnI7XG4gICAgfVxuICAgIHB1YmxpYyBzZXRBbnN3ZXJSZXN1bHRCeUxldmVsKGxldmVsOiBudW1iZXIsIGFuc3dlcjogQW5zd2VyUmVzdWx0KSB7XG4gICAgICAgIHRoaXMuX0Fuc3dlclJlc3VsdHNbbGV2ZWxdID0gYW5zd2VyO1xuICAgIH1cblxuICAgIC8qKiDmgLvlhbPljaHmlbDnm64gKi9cbiAgICBwdWJsaWMgX2xldmVsQ291bnQ6IG51bWJlciA9IDA7XG5cbiAgICAvKiog5b2T5YmN5YWz5Y2haWQgIOS7jjDlvIDlp4sqL1xuICAgIHB1YmxpYyBfY3VyTGV2ZWxJZDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDlrp7pmYXkvZznrZTmraPnoa7mrKHmlbAgKi9cbiAgICAvLyBwdWJsaWMgX2NvcnJlY3RDb3VudDogbnVtYmVyID0gMDtcblxuICAgIC8qKiDmmK/lkKblhajpg6jlhbPljaHpgJrlhbMgKi9cbiAgICBwdWJsaWMgaXNBbGxPdmVyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAvKiog5piv5ZCm5pW05L2T5pyq5pON5L2cICovXG4gICAgLy8gcHVibGljIF9pc1VuZG86IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgLyoqXG4gICAgICog5piv5ZCmIOW9k+WJjeatpemqpC/lhbPljaEg5pyq5pON5L2c77yMXG4gICAgICog5Y+q6KaB55So5oi35pyJ5pON5L2c5bCx5L+u5pS55q2k5YC8XG4gICAgICogKi9cbiAgICAvLyBwdWJsaWMgX2lzQ3VyTGV2ZWxVbmRvOiBib29sZWFuID0gdHJ1ZTtcblxuICAgIC8qKiDmmK/lkKblt7Lnu4/kuIrmiqXov4dnYW1lX292ZXIgKi9cbiAgICBwdWJsaWMgX2lzUmVwb3J0ZWRHYW1lT3ZlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgLyoqIOmcgOimgeWIpOaWreato+ivr+eahOaAu+atpeaVsCAqL1xuICAgIHB1YmxpYyBfc3RlcENvdW50OiBudW1iZXIgPSAwO1xuXG4gICAgLyoqIOa3u+WKoCDlhbMv5q2l6aqkIOasoeaVsCAqL1xuICAgIHB1YmxpYyBhZGRUcnlDb3VudChiQ29ycmVjdDogYm9vbGVhbikge1xuICAgICAgICBpZiAodGhpcy5fdHJ5Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl90cnlDb3VudHNbdGhpcy5fY3VyTGV2ZWxJZF0gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3RyeUNvdW50c1t0aGlzLl9jdXJMZXZlbElkXSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodm9pZCAwID09PSB0aGlzLl9jb3JyZWN0Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdKSB7XG4gICAgICAgICAgICB0aGlzLl9jb3JyZWN0Q291bnRzW3RoaXMuX2N1ckxldmVsSWRdID0gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NvcnJlY3RDb3VudHNbdGhpcy5fY3VyTGV2ZWxJZF0gKz0gMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluimgeS4iuaKpeeahOaVsOaNrlxuICAgICAqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsQ291bnQg5YWz5Y2h5oC75pWwXG4gICAgICovXG4gICAgcHVibGljIGluaXRSZXBvcnREYXRhKGxldmVsQ291bnQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wbGF5SW5kZXggPSAxO1xuICAgICAgICB0aGlzLl9jdXJMZXZlbElkID0gMDtcbiAgICAgICAgdGhpcy5pc0FsbE92ZXIgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fbGV2ZWxDb3VudCA9IGxldmVsQ291bnQ7XG4gICAgICAgIHRoaXMuX3Jlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2xldmVsQ291bnQ7IGkrKykge1xuICAgICAgICAgICAgbGV0IGxldmVsSW5mbyA9IHRoaXMuX2xldmVsQ291bnQgPiAxID8gYCR7Q29uc3RWYWx1ZS5HYW1lTmFtZX1f56ysJHtpICsgMX3lhbNgIDogQ29uc3RWYWx1ZS5HYW1lTmFtZTtcbiAgICAgICAgICAgIGxldCBfbGV2ZWxEYXRhID0gbmV3IEV4dHJhTGV2ZWxEYXRhKCk7XG4gICAgICAgICAgICBfbGV2ZWxEYXRhLmlkID0gaSArIDE7XG4gICAgICAgICAgICBfbGV2ZWxEYXRhLnF1ZXN0aW9uX2luZm8gPSBsZXZlbEluZm87XG4gICAgICAgICAgICB0aGlzLl9yZXN1bHQucHVzaChfbGV2ZWxEYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9sZXZlbFN0YXJ0VGltZSA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuc2V0VHJ5Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRDb3JyZWN0Q291bnRzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRDb2FzdFRpbWVzKFtdKTtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJSZXN1bHRzKFtdKTtcblxuICAgICAgICBpZiAoRWRpdG9yTWFuYWdlclsnZ2V0U3RlcENvdW50J10pIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBDb3VudCA9IEVkaXRvck1hbmFnZXJbJ2dldFN0ZXBDb3VudCddKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9zdGVwQ291bnQgPSBsZXZlbENvdW50O1xuICAgICAgICB9XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9sZXZlbF9pbmZvKHsgbGV2ZWxDb3VudDogdGhpcy5fbGV2ZWxDb3VudCwgY3VyTGV2ZWw6IHRoaXMuX2N1ckxldmVsSWQgKyAxIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmAmuWFs+S5i+WQjueahOmHjeeOqVxuICAgICAqICDlj6rmnInlpJblsYJpbmRleOiHquWiniAgIOWFtuS9meaVsOaNruaBouWkjeWIneWni+eKtuaAgVxuICAgICAqXG4gICAgICogQG1lbWJlcm9mIERhdGFSZXBvcnRNZ3JcbiAgICAgKi9cbiAgICBwdWJsaWMgcmVwbGF5R2FtZSgpIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0ID0gW107XG5cbiAgICAgICAgKyt0aGlzLl9wbGF5SW5kZXg7XG4gICAgICAgIHRoaXMuaXNBbGxPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9jdXJMZXZlbElkID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9sZXZlbENvdW50OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBsZXZlbEluZm8gPSB0aGlzLl9sZXZlbENvdW50ID4gMSA/IGAke0NvbnN0VmFsdWUuR2FtZU5hbWV9X+esrCR7aSArIDF95YWzYCA6IENvbnN0VmFsdWUuR2FtZU5hbWU7XG4gICAgICAgICAgICBsZXQgX2xldmVsRGF0YSA9IG5ldyBFeHRyYUxldmVsRGF0YSgpO1xuICAgICAgICAgICAgX2xldmVsRGF0YS5pZCA9IGkgKyAxO1xuICAgICAgICAgICAgX2xldmVsRGF0YS5xdWVzdGlvbl9pbmZvID0gbGV2ZWxJbmZvO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0LnB1c2goX2xldmVsRGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fbGV2ZWxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnNldFRyeUNvdW50cyhbXSk7XG4gICAgICAgIHRoaXMuc2V0Q29ycmVjdENvdW50cyhbXSk7XG4gICAgICAgIHRoaXMuc2V0Q29hc3RUaW1lcyhbXSk7XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyUmVzdWx0cyhbXSk7XG4gICAgICAgIEdhbWVNc2cucmVxdWVzdF9sZXZlbF9pbmZvKHsgbGV2ZWxDb3VudDogdGhpcy5fbGV2ZWxDb3VudCwgY3VyTGV2ZWw6IHRoaXMuX2N1ckxldmVsSWQgKyAxIH0pO1xuICAgIH1cblxuICAgIC8vIHB1YmxpYyBzZXRGaXJzdFRvdWNoKCkge1xuICAgIC8vICAgICB0aGlzLl9pc0N1ckxldmVsVW5kbyA9IGZhbHNlO1xuICAgIC8vICAgICB0aGlzLl9pc1VuZG8gPSBmYWxzZTtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiDmm7TmlrDlhbPljaHkvZznrZTmlbDmja5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYkNvcnJlY3Qg5piv5ZCm5L2c562U5q2j56GuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBiQ3VyTGV2ZWxGaW5pc2gg5b2T5YmN5YWz5Y2h5piv5ZCm5bey5a6M5oiQIOeUqOS6juaMieatpemqpOS4iuaKpeaXtueKtuaAgeiuvue9ruS4umhhbGbvvIzpu5jorqTkuLp0cnVlXG4gICAgICovXG4gICAgcHVibGljIHJlcG9ydExldmVsUmVzdWx0KGJDb3JyZWN0OiBib29sZWFuLCBiQ3VyTGV2ZWxGaW5pc2g6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHRoaXMuX3Jlc3VsdFt0aGlzLl9jdXJMZXZlbElkXSkgcmV0dXJuO1xuXG4gICAgICAgIGxldCBjdXJUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hZGRDb2FzdFRpbWUoY3VyVGltZSk7XG4gICAgICAgIHRoaXMuYWRkVHJ5Q291bnQoYkNvcnJlY3QpO1xuICAgICAgICBsZXQgYW5zd2VyUmVzID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgICAgICBpZiAoYkNvcnJlY3QpIHtcbiAgICAgICAgICAgIGFuc3dlclJlcyA9IGJDdXJMZXZlbEZpbmlzaCA/IEFuc3dlclJlc3VsdC5BbnN3ZXJSaWdodCA6IEFuc3dlclJlc3VsdC5BbnN3ZXJIYWxmO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYW5zd2VyUmVzID0gQW5zd2VyUmVzdWx0LkFuc3dlckVycm9yO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyUmVzdWx0QnlMZXZlbCh0aGlzLl9jdXJMZXZlbElkLCBhbnN3ZXJSZXMpO1xuXG4gICAgICAgIGxldCBfcmVwb3J0RGF0YSA9IHRoaXMuZ2V0UmVwb3J0RGF0YSgpO1xuICAgICAgICBfcmVwb3J0RGF0YS5nYW1lT3ZlciA9IG51bGw7XG4gICAgICAgIGNvbnNvbGUubG9nKF9yZXBvcnREYXRhKTtcbiAgICAgICAgR2FtZU1zZy5hbnN3ZXJTeW5jU2VuZChfcmVwb3J0RGF0YSk7XG5cbiAgICAgICAgaWYgKGJDdXJMZXZlbEZpbmlzaCkge1xuICAgICAgICAgICAgKyt0aGlzLl9jdXJMZXZlbElkO1xuICAgICAgICAgICAgdGhpcy5fbGV2ZWxTdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1ckxldmVsSWQgPT09IHRoaXMuX2xldmVsQ291bnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQWxsT3ZlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRHYW1lT3ZlcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBHYW1lTXNnLnJlcXVlc3RfbGV2ZWxfaW5mbyh7IGxldmVsQ291bnQ6IHRoaXMuX2xldmVsQ291bnQsIGN1ckxldmVsOiB0aGlzLl9jdXJMZXZlbElkICsgMSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOS9nOetlOe7k+adny/nq6/kuIrmlLbpopgg5pWw5o2u5LiK5oqlXG4gICAgICpcbiAgICAgKiBAbWVtYmVyb2YgRGF0YVJlcG9ydE1nclxuICAgICAqL1xuICAgIHB1YmxpYyByZXBvcnRHYW1lT3ZlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3Zlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9yZXBvckdhbWVPdmVydERhdGEgPSB0aGlzLmdldFJlcG9ydERhdGEoKTtcbiAgICAgICAgY29uc29sZS5sb2coX3JlcG9yR2FtZU92ZXJ0RGF0YSk7XG4gICAgICAgIEdhbWVNc2cuZ2FtZU92ZXIoX3JlcG9yR2FtZU92ZXJ0RGF0YSk7XG4gICAgICAgIEdhbWVNc2cuZ2FtZVN0YXRpc3RpY0RhdGEoX3JlcG9yR2FtZU92ZXJ0RGF0YS5leHQpO1xuXG4gICAgICAgIC8qKiDkuIrmiqVnYW1lX292ZXLmlbDmja7kuYvlkI7kv67mlLnnirbmgIEgKi9cbiAgICAgICAgdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5blhbPljaHmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0UmVzdWx0RGF0YShpc0V4dHJhOiBib29sZWFuKTogTGV2ZWxEYXRhW10gfCBFeHRyYUxldmVsRGF0YVtdIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9yZXN1bHQubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBsZXZlbERhdGEgPSB0aGlzLl9yZXN1bHRbaV07XG4gICAgICAgICAgICBjb25zdCBsZXZlbEluZGV4ID0gbGV2ZWxEYXRhLmlkIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlclJlc3VsdCA9IHRoaXMuZ2V0QW5zd2VyUmVzdWx0cygpW2xldmVsSW5kZXhdIHx8IEFuc3dlclJlc3VsdC5Ob0Fuc3dlcjtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlck51bSA9IHRoaXMuZ2V0VHJ5Q291bnRzKClbbGV2ZWxJbmRleF0gfHwgMDtcbiAgICAgICAgICAgIGNvbnN0IGFuc3dlckNvcnJlY3QgPSB0aGlzLmdldENvcnJlY3RDb3VudHMoKVtsZXZlbEluZGV4XSB8fCAwO1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyV3JvbmcgPSBhbnN3ZXJOdW0gLSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgY29uc3QgYW5zd2VyVGltZSA9IE1hdGguY2VpbCgodGhpcy5nZXRDb2FzdFRpbWVzKClbbGV2ZWxJbmRleF0gfHwgMCkgLyAxMDAwKTtcbiAgICAgICAgICAgIGxldmVsRGF0YS5hbnN3ZXJfcmVzID0gYW5zd2VyUmVzdWx0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl9udW0gPSBhbnN3ZXJOdW07XG4gICAgICAgICAgICBsZXZlbERhdGEuY29ycmVjdF9udW0gPSBhbnN3ZXJDb3JyZWN0O1xuICAgICAgICAgICAgbGV2ZWxEYXRhLndyb25nX251bSA9IGFuc3dlcldyb25nO1xuICAgICAgICAgICAgbGV2ZWxEYXRhLmFuc3dlcl90aW1lID0gYW5zd2VyVGltZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0V4dHJhKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVzdWx0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgdGhpcy5fcmVzdWx0LmZvckVhY2goKGluZm8pID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZXh0cmFMZXZlbERhdGEgPSBuZXcgTGV2ZWxEYXRhKCk7XG4gICAgICAgICAgICAgICAgZXh0cmFMZXZlbERhdGEuaWQgPSBpbmZvLmlkO1xuICAgICAgICAgICAgICAgIGV4dHJhTGV2ZWxEYXRhLnF1ZXN0aW9uX2luZm8gPSBpbmZvLnF1ZXN0aW9uX2luZm87XG4gICAgICAgICAgICAgICAgZXh0cmFMZXZlbERhdGEuYW5zd2VyX3JlcyA9IGluZm8uYW5zd2VyX3JlcztcbiAgICAgICAgICAgICAgICBleHRyYUxldmVsRGF0YS5hbnN3ZXJfbnVtID0gaW5mby5hbnN3ZXJfbnVtO1xuICAgICAgICAgICAgICAgIGV4dHJhTGV2ZWxEYXRhLmFuc3dlcl90aW1lID0gaW5mby5hbnN3ZXJfdGltZTtcblxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGV4dHJhTGV2ZWxEYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog6I635Y+WZ2FtZU92ZXLmlbDmja5cbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0R2FtZU92ZXJEYXRhKGlzRXh0cmE6IGJvb2xlYW4pOiBHYW1lT3ZlckRhdGEgfCBFeHRyYUdhbWVPdmVyRGF0YSB7XG4gICAgICAgIGxldCB0b3RhbFRyeUNvdW50ID0gZXZhbCh0aGlzLmdldFRyeUNvdW50cygpLmpvaW4oJysnKSk7XG4gICAgICAgIHRvdGFsVHJ5Q291bnQgPSB0b3RhbFRyeUNvdW50ID8gdG90YWxUcnlDb3VudCA6IDA7XG4gICAgICAgIGxldCB0b3RhbENvcnJlY3RDb3VudCA9IGV2YWwodGhpcy5nZXRDb3JyZWN0Q291bnRzKCkuam9pbignKycpKTtcbiAgICAgICAgdG90YWxDb3JyZWN0Q291bnQgPSB0b3RhbENvcnJlY3RDb3VudCA/IHRvdGFsQ29ycmVjdENvdW50IDogMDtcbiAgICAgICAgY29uc3QgdG90YWxXcm9uZ0NvdW50ID0gdG90YWxUcnlDb3VudCAtIHRvdGFsQ29ycmVjdENvdW50O1xuICAgICAgICBsZXQgdG90YWxUaW1lcyA9IGV2YWwodGhpcy5nZXRDb2FzdFRpbWVzKCkuam9pbignKycpKTtcbiAgICAgICAgdG90YWxUaW1lcyA9IHRvdGFsVGltZXMgPyB0b3RhbFRpbWVzIDogMDtcblxuICAgICAgICBsZXQgZ2FtZU92ZXI6IEdhbWVPdmVyRGF0YSB8IEV4dHJhR2FtZU92ZXJEYXRhID0gbnVsbDtcbiAgICAgICAgaWYgKGlzRXh0cmEpIHtcbiAgICAgICAgICAgIGdhbWVPdmVyID0gbmV3IEV4dHJhR2FtZU92ZXJEYXRhKCk7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLmdhbWVfY29ycmVjdF9udW0gPSB0b3RhbENvcnJlY3RDb3VudDtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkuZ2FtZV93cm9uZ19udW0gPSB0b3RhbFdyb25nQ291bnQ7XG4gICAgICAgICAgICAoZ2FtZU92ZXIgYXMgRXh0cmFHYW1lT3ZlckRhdGEpLmN1cl9sZXZlbF9pZCA9IE1hdGgubWluKHRoaXMuX2N1ckxldmVsSWQgKyAxLCB0aGlzLl9sZXZlbENvdW50KTtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkudG90YWxfbGV2ZWxfbnVtID0gdGhpcy5fbGV2ZWxDb3VudDtcbiAgICAgICAgICAgIChnYW1lT3ZlciBhcyBFeHRyYUdhbWVPdmVyRGF0YSkuc3Rhcl9udW0gPSB0aGlzLmdldFN0YXJDb3VudCgpO1xuICAgICAgICAgICAgKGdhbWVPdmVyIGFzIEV4dHJhR2FtZU92ZXJEYXRhKS5zdGVwX2NvdW50ID0gdGhpcy5fc3RlcENvdW50O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZ2FtZU92ZXIgPSBuZXcgR2FtZU92ZXJEYXRhKCk7XG4gICAgICAgIH1cblxuICAgICAgICBnYW1lT3Zlci5wZXJjZW50YWdlID0gdGhpcy5pc0FsbE92ZXIgPyBNYXRoLnJvdW5kKCh0b3RhbENvcnJlY3RDb3VudCAvIHRvdGFsVHJ5Q291bnQpICogMTAwKSA6IDA7XG4gICAgICAgIGdhbWVPdmVyLmFuc3dlcl9hbGxfdGltZSA9IE1hdGguY2VpbCh0b3RhbFRpbWVzIC8gMTAwMCk7XG4gICAgICAgIGdhbWVPdmVyLmNvbXBsZXRlX2RlZ3JlZSA9IHRoaXMuaXNBbGxPdmVyID8gMTAwIDogTWF0aC5jZWlsKCh0b3RhbENvcnJlY3RDb3VudCAvIHRoaXMuX3N0ZXBDb3VudCkgKiAxMDApO1xuICAgICAgICBnYW1lT3Zlci5hbnN3ZXJfYWxsX3N0YXRlID1cbiAgICAgICAgICAgIDAgPT09IHRvdGFsVHJ5Q291bnRcbiAgICAgICAgICAgICAgICA/IEFuc3dlclJlc3VsdC5Ob0Fuc3dlclxuICAgICAgICAgICAgICAgIDogdGhpcy5pc0FsbE92ZXJcbiAgICAgICAgICAgICAgICA/IEFuc3dlclJlc3VsdC5BbnN3ZXJSaWdodFxuICAgICAgICAgICAgICAgIDogQW5zd2VyUmVzdWx0LkFuc3dlckhhbGY7XG5cbiAgICAgICAgcmV0dXJuIGdhbWVPdmVyO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRFeHRyYURhdGEoKTogRXh0cmFEYXRhIHtcbiAgICAgICAgbGV0IGV4dHJhRGF0YTogRXh0cmFEYXRhID0gbmV3IEV4dHJhRGF0YSgpO1xuICAgICAgICBleHRyYURhdGEudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgICAgIGV4dHJhRGF0YS5pbmRleCA9IHRoaXMuX3BsYXlJbmRleDtcbiAgICAgICAgZXh0cmFEYXRhLnJlc3VsdCA9IHRoaXMuZ2V0UmVzdWx0RGF0YSh0cnVlKSBhcyBFeHRyYUxldmVsRGF0YVtdO1xuICAgICAgICBleHRyYURhdGEuZ2FtZU92ZXIgPSB0aGlzLmdldEdhbWVPdmVyRGF0YSh0cnVlKSBhcyBFeHRyYUdhbWVPdmVyRGF0YTtcblxuICAgICAgICByZXR1cm4gZXh0cmFEYXRhO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZXRSZXBvcnREYXRhKCk6IFJlcG9ydERhdGEge1xuICAgICAgICBsZXQgcmVwb3J0RGF0YTogUmVwb3J0RGF0YSA9IG5ldyBSZXBvcnREYXRhKCk7XG4gICAgICAgIHJlcG9ydERhdGEudHlwZSA9IHRoaXMuX3R5cGU7XG4gICAgICAgIHJlcG9ydERhdGEuaW5kZXggPSB0aGlzLl9wbGF5SW5kZXg7XG4gICAgICAgIHJlcG9ydERhdGEucmVzdWx0ID0gdGhpcy5nZXRSZXN1bHREYXRhKGZhbHNlKSBhcyBMZXZlbERhdGFbXTtcbiAgICAgICAgcmVwb3J0RGF0YS5nYW1lT3ZlciA9IHRoaXMuZ2V0R2FtZU92ZXJEYXRhKGZhbHNlKSBhcyBHYW1lT3ZlckRhdGE7XG4gICAgICAgIHJlcG9ydERhdGEuZXh0ID0gdGhpcy5nZXRFeHRyYURhdGEoKTtcblxuICAgICAgICByZXR1cm4gcmVwb3J0RGF0YTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDojrflj5bmmJ/mlbBcbiAgICAgKi9cbiAgICBwdWJsaWMgZ2V0U3RhckNvdW50KCkge1xuICAgICAgICBjb25zdCBnYW1lT3ZlckRhdGEgPSB0aGlzLmdldEdhbWVPdmVyRGF0YShmYWxzZSk7XG5cbiAgICAgICAgbGV0IHN0YXJDb3VudCA9IDA7XG4gICAgICAgIC8qKiDorqHnrpfmmJ/nuqcgKi9cbiAgICAgICAgaWYgKGdhbWVPdmVyRGF0YS5wZXJjZW50YWdlID49IHRoaXMuX3N0YXJ0TGV2ZWxDb25maWdbMF0pIHtcbiAgICAgICAgICAgIHN0YXJDb3VudCA9IDM7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2FtZU92ZXJEYXRhLnBlcmNlbnRhZ2UgPj0gdGhpcy5fc3RhcnRMZXZlbENvbmZpZ1sxXSkge1xuICAgICAgICAgICAgc3RhckNvdW50ID0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChnYW1lT3ZlckRhdGEucGVyY2VudGFnZSA+IHRoaXMuX3N0YXJ0TGV2ZWxDb25maWdbMl0pIHtcbiAgICAgICAgICAgIHN0YXJDb3VudCA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFyQ291bnQgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHN0YXJDb3VudDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDpnIDopoHlkIzmraXnmoTmlbDmja5cbiAgICAgKlxuICAgICAqIEBtZW1iZXJvZiBEYXRhUmVwb3J0TWdyXG4gICAgICovXG4gICAgcHVibGljIGdldFN5bmNEYXRhKCkge1xuICAgICAgICBsZXQgX2RhdGEgPSB7XG4gICAgICAgICAgICBiUmVwb3J0ZWRHYW1lT3ZlcjogdGhpcy5faXNSZXBvcnRlZEdhbWVPdmVyLCAvL+aYr+WQpuW3sue7j+S4iuaKpei/h2dhbWVfb3ZlclxuICAgICAgICAgICAgcGxheUNvdW50OiB0aGlzLl9wbGF5SW5kZXgsIC8v57uf6K6h5L2c562U5qyh5pWwICDku6XpgJrlhbPkuLrnu7TluqZcbiAgICAgICAgICAgIHN0YXJ0VGltZTogdGhpcy5fbGV2ZWxTdGFydFRpbWUsIC8v5q+P5YWz5byA5aeL5pe26Ze0XG4gICAgICAgICAgICBjb2FzdFRpbWVzOiB0aGlzLmdldENvYXN0VGltZXMoKSwgLy/mr4/lhbPkvZznrZTogJfml7ZcbiAgICAgICAgICAgIHRyeUNvdW50czogdGhpcy5nZXRUcnlDb3VudHMoKSwgLy/mr4/lhbPlsJ3or5XmrKHmlbBcbiAgICAgICAgICAgIGNvcnJlY3RDb3VudHM6IHRoaXMuZ2V0Q29ycmVjdENvdW50cygpLCAvL+avj+WFs+S9nOetlOato+ehruasoeaVsFxuICAgICAgICAgICAgY3VyTGV2ZWxJZDogdGhpcy5fY3VyTGV2ZWxJZCwgLy/lvZPliY3lhbPljaFcbiAgICAgICAgICAgIGJGaW5pc2hlZDogdGhpcy5pc0FsbE92ZXIsXG4gICAgICAgICAgICBhbnN3ZXJSZXN1bHRzOiB0aGlzLmdldEFuc3dlclJlc3VsdHMoKSwgLy/mr4/lhbPkvZznrZTnirbmgIFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIF9kYXRhO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOiuvue9ruaOpeaUtuWIsOeahOS9nOetlOeKtuaAgeWIsOacrOWcsFxuICAgICAqXG4gICAgICogQHBhcmFtIHsqfSBkYXRhXG4gICAgICogQG1lbWJlcm9mIERhdGFSZXBvcnRNZ3JcbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0U3luY0RhdGEoZGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuX2lzUmVwb3J0ZWRHYW1lT3ZlciA9IGRhdGEuYlJlcG9ydGVkR2FtZU92ZXI7XG4gICAgICAgIHRoaXMuX3BsYXlJbmRleCA9IGRhdGEucGxheUNvdW50O1xuICAgICAgICB0aGlzLl9sZXZlbFN0YXJ0VGltZSA9IGRhdGEuc3RhcnRUaW1lO1xuICAgICAgICB0aGlzLnNldENvYXN0VGltZXMoZGF0YS5jb2FzdFRpbWVzKTtcbiAgICAgICAgdGhpcy5zZXRUcnlDb3VudHMoZGF0YS50cnlDb3VudHMpO1xuICAgICAgICB0aGlzLnNldENvcnJlY3RDb3VudHMoZGF0YS5jb3JyZWN0Q291bnRzKTtcbiAgICAgICAgdGhpcy5fY3VyTGV2ZWxJZCA9IGRhdGEuY3VyTGV2ZWxJZDtcbiAgICAgICAgdGhpcy5pc0FsbE92ZXIgPSBkYXRhLmJGaW5pc2hlZDtcbiAgICAgICAgdGhpcy5zZXRBbnN3ZXJSZXN1bHRzKGRhdGEuYW5zd2VyUmVzdWx0cyk7XG5cbiAgICAgICAgR2FtZU1zZy5yZXF1ZXN0X2xldmVsX2luZm8oeyBsZXZlbENvdW50OiB0aGlzLl9sZXZlbENvdW50LCBjdXJMZXZlbDogdGhpcy5fY3VyTGV2ZWxJZCArIDEgfSk7XG4gICAgfVxufVxuZXhwb3J0IGNvbnN0IFJlcG9ydE1hbmFnZXIgPSBSZXBvcnRNYW5hZ2VyQ2xhc3MuZ2V0SW5zdGFuY2UoKTtcblxuZXhwb3J0IGVudW0gQW5zd2VyUmVzdWx0IHtcbiAgICBBbnN3ZXJFcnJvciA9ICdhbnN3ZXJfZXJyb3InLCAvL+etlOmUmVxuICAgIEFuc3dlclJpZ2h0ID0gJ2Fuc3dlcl9yaWdodCcsIC8v562U5a+5XG4gICAgQW5zd2VySGFsZiA9ICdhbnN3ZXJfaGFsZicsIC8v5pyq562U5a6MXG4gICAgTm9BbnN3ZXIgPSAnbm9fYW5zd2VyJywgLy/mnKrkvZznrZRcbn1cblxuLyoqXG4gKiDljZXlhbPkvZznrZTmlbDmja5cbiAqL1xuZXhwb3J0IGNsYXNzIExldmVsRGF0YSB7XG4gICAgLyoqIOWFs+WNoUlEICovXG4gICAgaWQ6IG51bWJlciA9IDA7XG4gICAgLyoqIOmimOebruS/oeaBryAqL1xuICAgIHF1ZXN0aW9uX2luZm86IHN0cmluZyA9ICcnO1xuICAgIC8qKiDlhbPljaHkvZznrZTnu5PmnpwgIGFuc3dlcl9lcnJvci9hbnN3ZXJfcmlnaHQvYW5zd2VyX2hhbGYvbm9fYW5zd2VyICovXG4gICAgYW5zd2VyX3JlczogQW5zd2VyUmVzdWx0ID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgIC8qKiDlhbPljaHkvZznrZTmrKHmlbAgKi9cbiAgICBhbnN3ZXJfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDlhbPljaHkvZznrZTml7bpl7QgKi9cbiAgICBhbnN3ZXJfdGltZTogbnVtYmVyID0gMDtcbn1cblxuLyoqXG4gKiDljZXlhbPkvZznrZTmlbDmja4o6aKd5aSW5LiK5oqlKVxuICovXG5leHBvcnQgY2xhc3MgRXh0cmFMZXZlbERhdGEgZXh0ZW5kcyBMZXZlbERhdGEge1xuICAgIC8qKiDlhbPljaHkvZznrZTmraPnoa7mraXmlbAgKi9cbiAgICBjb3JyZWN0X251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5YWz5Y2h5L2c562U6ZSZ6K+v5q2l5pWwICovXG4gICAgd3JvbmdfbnVtOiBudW1iZXIgPSAwO1xufVxuXG4vKipcbiAqIGdhbWVPdmVy5a2X5q615YaF5a65XG4gKiDlhbbkuK0gcGVyY2VudGFnZSDlrZfmrrXlnKgg5pyq6YCa5YWzIOeahOaXtuWAme+8jOaVsOWAvOS4ujBcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWVPdmVyRGF0YSB7XG4gICAgLyoqIOato+ehrueOhyAqL1xuICAgIHBlcmNlbnRhZ2UgPSAwO1xuICAgIC8qKiDmgLvkvZznrZTnirbmgIEgKi9cbiAgICBhbnN3ZXJfYWxsX3N0YXRlID0gQW5zd2VyUmVzdWx0Lk5vQW5zd2VyO1xuICAgIC8qKiDmgLvkvZznrZTml7bpl7QgKi9cbiAgICBhbnN3ZXJfYWxsX3RpbWUgPSAwO1xuICAgIC8qKiDlrozmiJDluqYgKi9cbiAgICBjb21wbGV0ZV9kZWdyZWUgPSAwO1xufVxuXG4vKipcbiAqIGdhbWVPdmVy5a2X5q615YaF5a65KOmineWkluS4iuaKpSlcbiAqL1xuZXhwb3J0IGNsYXNzIEV4dHJhR2FtZU92ZXJEYXRhIGV4dGVuZHMgR2FtZU92ZXJEYXRhIHtcbiAgICAvKiog5oC75L2c562U5q2j56Gu5q2l5pWwICovXG4gICAgZ2FtZV9jb3JyZWN0X251bTogbnVtYmVyID0gMDtcbiAgICAvKiog5oC75L2c562U6ZSZ6K+v5q2l5pWwICovXG4gICAgZ2FtZV93cm9uZ19udW06IG51bWJlciA9IDA7XG4gICAgLyoqIOW9k+WJjeWFs+WNoWlkICovXG4gICAgY3VyX2xldmVsX2lkOiBudW1iZXIgPSAxO1xuICAgIC8qKiDmgLvlhbPljaHmlbAgKi9cbiAgICB0b3RhbF9sZXZlbF9udW06IG51bWJlciA9IDA7XG4gICAgLyoqIOaYn+e6pyAqL1xuICAgIHN0YXJfbnVtOiBudW1iZXIgPSAwO1xuICAgIC8qKiDmgLvmraXmlbAgKi9cbiAgICBzdGVwX2NvdW50OiBudW1iZXIgPSAwO1xufVxuXG4vKipcbiAqIOmineWkluaVsOaNruS4iuaKpVxuICogKi9cbmV4cG9ydCBjbGFzcyBFeHRyYURhdGEge1xuICAgIC8qKiDmoLzlvI/nsbvlnosgKi9cbiAgICB0eXBlOiBzdHJpbmcgPSAndHh0JztcbiAgICAvKiog56ys5Yeg5qyh5L2c562UICovXG4gICAgaW5kZXg6IG51bWJlciA9IDE7XG4gICAgLyoqIOWFs+WNoeS9nOetlOe7k+aenCAqL1xuICAgIHJlc3VsdDogRXh0cmFMZXZlbERhdGFbXSA9IFtdO1xuICAgIC8qKiBnYW1lT3ZlcuaVsOaNriAqL1xuICAgIGdhbWVPdmVyOiBFeHRyYUdhbWVPdmVyRGF0YSA9IG5ldyBFeHRyYUdhbWVPdmVyRGF0YSgpO1xufVxuXG5leHBvcnQgY2xhc3MgUmVwb3J0RGF0YSB7XG4gICAgLyoqIOagvOW8j+exu+WeiyAqL1xuICAgIHR5cGU6IHN0cmluZyA9ICd0eHQnO1xuICAgIC8qKiDnrKzlh6DmrKHkvZznrZQgKi9cbiAgICBpbmRleDogbnVtYmVyID0gMTtcbiAgICAvKiog5YWz5Y2h5L2c562U57uT5p6cICovXG4gICAgcmVzdWx0OiBMZXZlbERhdGFbXSA9IFtdO1xuICAgIC8qKiBnYW1lT3ZlcuaVsOaNriAqL1xuICAgIGdhbWVPdmVyOiBHYW1lT3ZlckRhdGEgPSBuZXcgR2FtZU92ZXJEYXRhKCk7XG4gICAgLyoqIOmineWkluaVsOaNruS4iuaKpSAqL1xuICAgIGV4dDogRXh0cmFEYXRhID0gbmV3IEV4dHJhRGF0YSgpO1xufVxuIl19