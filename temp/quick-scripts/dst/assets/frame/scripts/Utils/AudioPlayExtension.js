
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f5171dGpWFGFZGEuFaQdUkt', 'AudioPlayExtension');
// frame/scripts/Utils/AudioPlayExtension.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayExtension = void 0;
var SoundManager_1 = require("./../Manager/SoundManager");
/**期望发音与'resources/audio'文件夹下资源名称的对应配置 */
var AudioConfig = {
    例: 'sfx_buttn',
    子: 'sfx_error',
};
/**音频播放扩展方法 */
var AudioPlayExtension = /** @class */ (function () {
    function AudioPlayExtension() {
    }
    /**
     * 播放多个音频资源组成的一段内容
     * @param content AudioConfig中的key组成的内容, eg: '例子例子'
     * @param finish 完成回调
     */
    AudioPlayExtension.playJoinAudio = function (content, finish) {
        if (content.length == 0) {
            console.warn('playJoinAudio : 内容为空!');
            finish();
            return;
        }
        var idx = 0;
        function next() {
            if (idx > content.length - 1) {
                console.log("'" + content + "' \u64AD\u653E\u5B8C\u6210.");
                finish();
                return;
            }
            SoundManager_1.SoundManager.playEffect(AudioConfig[content[idx]], false, false, false, next);
            idx++;
        }
        next();
    };
    return AudioPlayExtension;
}());
exports.AudioPlayExtension = AudioPlayExtension;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcZnJhbWVcXHNjcmlwdHNcXFV0aWxzXFxBdWRpb1BsYXlFeHRlbnNpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXlEO0FBRXpELHlDQUF5QztBQUN6QyxJQUFJLFdBQVcsR0FBRztJQUNkLENBQUMsRUFBRSxXQUFXO0lBQ2QsQ0FBQyxFQUFFLFdBQVc7Q0FDakIsQ0FBQztBQUVGLGNBQWM7QUFDZDtJQUFBO0lBMEJBLENBQUM7SUF6Qkc7Ozs7T0FJRztJQUNXLGdDQUFhLEdBQTNCLFVBQTRCLE9BQWUsRUFBRSxNQUFnQjtRQUN6RCxJQUFJLE9BQU8sQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQztZQUN0QyxNQUFNLEVBQUUsQ0FBQztZQUNULE9BQU87U0FDVjtRQUVELElBQUksR0FBRyxHQUFXLENBQUMsQ0FBQztRQUNwQixTQUFTLElBQUk7WUFDVCxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFJLE9BQU8sZ0NBQVMsQ0FBQyxDQUFDO2dCQUNsQyxNQUFNLEVBQUUsQ0FBQztnQkFDVCxPQUFPO2FBQ1Y7WUFFRCwyQkFBWSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDOUUsR0FBRyxFQUFFLENBQUM7UUFDVixDQUFDO1FBQ0QsSUFBSSxFQUFFLENBQUM7SUFDWCxDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQTFCQSxBQTBCQyxJQUFBO0FBMUJZLGdEQUFrQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNvdW5kTWFuYWdlciB9IGZyb20gJy4vLi4vTWFuYWdlci9Tb3VuZE1hbmFnZXInO1xuXG4vKirmnJ/mnJvlj5Hpn7PkuI4ncmVzb3VyY2VzL2F1ZGlvJ+aWh+S7tuWkueS4i+i1hOa6kOWQjeensOeahOWvueW6lOmFjee9riAqL1xubGV0IEF1ZGlvQ29uZmlnID0ge1xuICAgIOS+izogJ3NmeF9idXR0bicsXG4gICAg5a2QOiAnc2Z4X2Vycm9yJyxcbn07XG5cbi8qKumfs+mikeaSreaUvuaJqeWxleaWueazlSAqL1xuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheUV4dGVuc2lvbiB7XG4gICAgLyoqXG4gICAgICog5pKt5pS+5aSa5Liq6Z+z6aKR6LWE5rqQ57uE5oiQ55qE5LiA5q615YaF5a65XG4gICAgICogQHBhcmFtIGNvbnRlbnQgQXVkaW9Db25maWfkuK3nmoRrZXnnu4TmiJDnmoTlhoXlrrksIGVnOiAn5L6L5a2Q5L6L5a2QJ1xuICAgICAqIEBwYXJhbSBmaW5pc2gg5a6M5oiQ5Zue6LCDXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBwbGF5Sm9pbkF1ZGlvKGNvbnRlbnQ6IHN0cmluZywgZmluaXNoOiBGdW5jdGlvbikge1xuICAgICAgICBpZiAoY29udGVudC5sZW5ndGggPT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdwbGF5Sm9pbkF1ZGlvIDog5YaF5a655Li656m6IScpO1xuICAgICAgICAgICAgZmluaXNoKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaWR4OiBudW1iZXIgPSAwO1xuICAgICAgICBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgICAgaWYgKGlkeCA+IGNvbnRlbnQubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAnJHtjb250ZW50fScg5pKt5pS+5a6M5oiQLmApO1xuICAgICAgICAgICAgICAgIGZpbmlzaCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgU291bmRNYW5hZ2VyLnBsYXlFZmZlY3QoQXVkaW9Db25maWdbY29udGVudFtpZHhdXSwgZmFsc2UsIGZhbHNlLCBmYWxzZSwgbmV4dCk7XG4gICAgICAgICAgICBpZHgrKztcbiAgICAgICAgfVxuICAgICAgICBuZXh0KCk7XG4gICAgfVxufVxuIl19