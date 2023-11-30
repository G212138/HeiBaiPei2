
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/game/scripts/Data/EventType.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9d48b48sqpEdozOnbOcVCAB', 'EventType');
// game/scripts/Data/EventType.ts

"use strict";
/**
 * 自定义事件类型
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventType = void 0;
var EventType;
(function (EventType) {
    // examp
    EventType["ON_BUTTON_CLICKED"] = "ON_BUTTON_CLICKED";
    EventType["ENTER_GAME"] = "ENTER_GAME";
    EventType["GAME_RECONNECT"] = "GAME_RECONNECT";
    EventType["GAME_OVER"] = "GAME_OVER";
    EventType["SUBMIT"] = "SUBMIT";
    EventType["GAME_REPLAY"] = "GAME_REPLAY";
    EventType["DRAG_ICON"] = "DRAG_ICON";
    EventType["DRAG_ICON_END"] = "DRAG_ICON_END";
    EventType["CLICK_ICON"] = "CLICK_ICON";
    //game
    EventType["CLICK_ROLE"] = "CLICK_ROLE";
})(EventType = exports.EventType || (exports.EventType = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZ2FtZVxcc2NyaXB0c1xcRGF0YVxcRXZlbnRUeXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRzs7O0FBRUgsSUFBWSxTQWdCWDtBQWhCRCxXQUFZLFNBQVM7SUFDakIsUUFBUTtJQUNSLG9EQUF1QyxDQUFBO0lBRXZDLHNDQUF5QixDQUFBO0lBQ3pCLDhDQUFpQyxDQUFBO0lBQ2pDLG9DQUF1QixDQUFBO0lBQ3ZCLDhCQUFpQixDQUFBO0lBQ2pCLHdDQUEyQixDQUFBO0lBRTNCLG9DQUF1QixDQUFBO0lBQ3ZCLDRDQUErQixDQUFBO0lBQy9CLHNDQUF5QixDQUFBO0lBRXpCLE1BQU07SUFDTixzQ0FBeUIsQ0FBQTtBQUM3QixDQUFDLEVBaEJXLFNBQVMsR0FBVCxpQkFBUyxLQUFULGlCQUFTLFFBZ0JwQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICog6Ieq5a6a5LmJ5LqL5Lu257G75Z6LXG4gKi9cblxuZXhwb3J0IGVudW0gRXZlbnRUeXBlIHtcbiAgICAvLyBleGFtcFxuICAgIE9OX0JVVFRPTl9DTElDS0VEID0gJ09OX0JVVFRPTl9DTElDS0VEJyxcblxuICAgIEVOVEVSX0dBTUUgPSAnRU5URVJfR0FNRScsXG4gICAgR0FNRV9SRUNPTk5FQ1QgPSBcIkdBTUVfUkVDT05ORUNUXCIsXG4gICAgR0FNRV9PVkVSID0gXCJHQU1FX09WRVJcIixcbiAgICBTVUJNSVQgPSBcIlNVQk1JVFwiLFxuICAgIEdBTUVfUkVQTEFZID0gXCJHQU1FX1JFUExBWVwiLFxuXG4gICAgRFJBR19JQ09OID0gXCJEUkFHX0lDT05cIixcbiAgICBEUkFHX0lDT05fRU5EID0gXCJEUkFHX0lDT05fRU5EXCIsXG4gICAgQ0xJQ0tfSUNPTiA9IFwiQ0xJQ0tfSUNPTlwiLFxuXG4gICAgLy9nYW1lXG4gICAgQ0xJQ0tfUk9MRSA9IFwiQ0xJQ0tfUk9MRVwiLFxufVxuIl19