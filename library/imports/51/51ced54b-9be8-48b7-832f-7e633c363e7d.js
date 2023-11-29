"use strict";
cc._RF.push(module, '51cedVLm+hIt4MvfmM8Nj59', 'GameManager');
// game/scripts/Manager/GameManager.ts

"use strict";
/**
 * 游戏逻辑类
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameManager = void 0;
var GameManagerClass = /** @class */ (function () {
    function GameManagerClass() {
    }
    GameManagerClass.getInstance = function () {
        if (null === this._instance) {
            this._instance = new GameManagerClass();
        }
        return this._instance;
    };
    GameManagerClass._instance = null;
    return GameManagerClass;
}());
exports.GameManager = GameManagerClass.getInstance();

cc._RF.pop();