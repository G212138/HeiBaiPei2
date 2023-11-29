
(function () {
var scripts = [{"deps":{"./assets/game/scripts/Data/CustomSyncData":46,"./assets/game/scripts/Manager/GameManager":41,"./assets/game/scripts/Manager/EditorManager":48,"./assets/game/scripts/SkeletonExt":4,"./assets/game/scripts/UI/Item/GeziArea":52,"./assets/game/scripts/UI/Item/SoundConfig":40,"./assets/game/scripts/UI/Item/GameUI":47,"./assets/game/scripts/UI/Item/IconDrag":51,"./assets/game/scripts/UI/panel/TeacherPanel":50,"./assets/game/scripts/UI/panel/GamePanel":42,"./assets/game/scripts/UI/Components/ButtonSync":44,"./assets/game/scripts/Data/ConstValue":2,"./assets/frame/scripts/Data/FrameConstValue":49,"./assets/frame/scripts/Manager/ReportManager":11,"./assets/frame/scripts/Manager/SoundManager":3,"./assets/frame/scripts/Manager/UIManager":12,"./assets/frame/scripts/Manager/SyncDataManager":10,"./assets/frame/scripts/Manager/ListenerManager":9,"./assets/frame/scripts/Http/NetWork":43,"./assets/frame/scripts/SDK/T2M":5,"./assets/frame/scripts/SDK/GameMsg":14,"./assets/frame/scripts/UI/AdaptiveScreen":13,"./assets/frame/scripts/UI/BindNode":15,"./assets/frame/scripts/UI/BaseFrameUI":19,"./assets/frame/scripts/UI/GameMain":17,"./assets/frame/scripts/UI/BaseUI":16,"./assets/frame/scripts/UI/Item/MaskGlobal":25,"./assets/frame/scripts/UI/Item/MaskRecover":18,"./assets/frame/scripts/UI/Item/replayBtn":22,"./assets/frame/scripts/UI/Item/Tip":20,"./assets/frame/scripts/UI/Item/TitleNode":1,"./assets/frame/scripts/UI/Item/TeacherPanelLoading":21,"./assets/frame/scripts/UI/Panel/BaseTeacherPanel":26,"./assets/frame/scripts/UI/Panel/BaseGamePanel":30,"./assets/frame/scripts/UI/Panel/LoadingUI":23,"./assets/frame/scripts/UI/Panel/ErrorPanel":6,"./assets/frame/scripts/UI/Panel/OverTips":24,"./assets/frame/scripts/UI/Panel/StarCount":28,"./assets/frame/scripts/UI/Panel/UploadAndReturnPanel":33,"./assets/frame/scripts/UI/Panel/SubmissionPanel":27,"./assets/frame/scripts/UI/Panel/TipUI":29,"./assets/frame/scripts/UI/Panel/AffirmTips":32,"./assets/frame/scripts/Utils/BoundingBoxHelp":34,"./assets/frame/scripts/Utils/AudioPlayExtension":31,"./assets/frame/scripts/Utils/HitTest":7,"./assets/frame/scripts/Utils/Tools":35,"./assets/frame/scripts/Utils/UIHelp":39,"./assets/frame/scripts/Utils/MathUtils":36,"./assets/frame/scripts/Utils/BoundingBoxDemo":38,"./assets/frame/scripts/Data/FrameMsgType":37,"./assets/frame/scripts/Data/FrameSyncData":8,"./assets/game/scripts/Data/EventType":45},"path":"preview-scripts/__qc_index__.js"},{"deps":{"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":9},"path":"preview-scripts/assets/frame/scripts/UI/Item/TitleNode.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/ConstValue.js"},{"deps":{"../Data/FrameConstValue":49,"../SDK/GameMsg":14,"../Http/NetWork":43,"../Data/FrameMsgType":37,"./ListenerManager":9,"./UIManager":12},"path":"preview-scripts/assets/frame/scripts/Manager/SoundManager.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/SkeletonExt.js"},{"deps":{"../Data/FrameMsgType":37,"../Http/NetWork":43,"../Manager/ListenerManager":9,"../Manager/SyncDataManager":10,"./GameMsg":14,"../Utils/UIHelp":39},"path":"preview-scripts/assets/frame/scripts/SDK/T2M.js"},{"deps":{"../../Utils/UIHelp":39,"./../BaseFrameUI":19,"./../../Manager/SoundManager":3,"./../../SDK/GameMsg":14},"path":"preview-scripts/assets/frame/scripts/UI/Panel/ErrorPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/HitTest.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameSyncData.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Manager/ListenerManager.js"},{"deps":{"../../../frame/scripts/Data/FrameSyncData":8,"../../../frame/scripts/Manager/ReportManager":11,"../../../game/scripts/Data/CustomSyncData":46},"path":"preview-scripts/assets/frame/scripts/Manager/SyncDataManager.js"},{"deps":{"../../../game/scripts/Data/ConstValue":2,"../SDK/GameMsg":14,"../../../game/scripts/Manager/EditorManager":48},"path":"preview-scripts/assets/frame/scripts/Manager/ReportManager.js"},{"deps":{"../UI/BaseUI":16},"path":"preview-scripts/assets/frame/scripts/Manager/UIManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/AdaptiveScreen.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/SDK/GameMsg.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/BindNode.js"},{"deps":{"../Data/FrameConstValue":49,"../Manager/ListenerManager":9,"./BindNode":15},"path":"preview-scripts/assets/frame/scripts/UI/BaseUI.js"},{"deps":{"../../../game/scripts/Manager/EditorManager":48,"../Manager/ListenerManager":9,"../Data/FrameMsgType":37,"../Manager/ReportManager":11,"../Http/NetWork":43,"../Manager/SoundManager":3,"../SDK/GameMsg":14,"../Manager/SyncDataManager":10,"../Manager/UIManager":12,"../Utils/UIHelp":39,"../SDK/T2M":5},"path":"preview-scripts/assets/frame/scripts/UI/GameMain.js"},{"deps":{"../../Data/FrameMsgType":37,"../BindNode":15,"../../Manager/ListenerManager":9,"../../Manager/UIManager":12},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskRecover.js"},{"deps":{"./BaseUI":16,"../Data/FrameConstValue":49},"path":"preview-scripts/assets/frame/scripts/UI/BaseFrameUI.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/UI/Item/Tip.js"},{"deps":{"../../Data/FrameMsgType":37,"../BindNode":15,"../../Manager/ListenerManager":9},"path":"preview-scripts/assets/frame/scripts/UI/Item/TeacherPanelLoading.js"},{"deps":{"../../SDK/T2M":5,"../../Data/FrameMsgType":37},"path":"preview-scripts/assets/frame/scripts/UI/Item/replayBtn.js"},{"deps":{"../../../../game/scripts/UI/panel/GamePanel":42,"../../Manager/SoundManager":3,"../../../../game/scripts/UI/panel/TeacherPanel":50,"../../Http/NetWork":43,"../../../../game/scripts/Data/ConstValue":2,"../../SDK/GameMsg":14,"../../Manager/UIManager":12,"../BaseFrameUI":19},"path":"preview-scripts/assets/frame/scripts/UI/Panel/LoadingUI.js"},{"deps":{"./../../Manager/SoundManager":3,"../../Utils/Tools":35,"../BaseFrameUI":19,"../../Utils/UIHelp":39,"../../Manager/UIManager":12,"../../../../game/scripts/Data/ConstValue":2,"../../SDK/T2M":5,"../../Data/FrameMsgType":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/OverTips.js"},{"deps":{"../../Manager/ListenerManager":9,"../../Data/FrameMsgType":37,"../../Manager/UIManager":12,"../../Utils/UIHelp":39,"../BindNode":15},"path":"preview-scripts/assets/frame/scripts/UI/Item/MaskGlobal.js"},{"deps":{"../../../../game/scripts/Data/ConstValue":2,"../../../../game/scripts/Manager/EditorManager":48,"../../Http/NetWork":43,"../../Utils/UIHelp":39,"../BaseUI":16},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseTeacherPanel.js"},{"deps":{"../../Http/NetWork":43,"../../../../game/scripts/Manager/EditorManager":48,"../BaseFrameUI":19,"../../../../game/scripts/Data/ConstValue":2,"../../Utils/UIHelp":39},"path":"preview-scripts/assets/frame/scripts/UI/Panel/SubmissionPanel.js"},{"deps":{"./../../Manager/SoundManager":3,"../../Utils/Tools":35,"../../Utils/UIHelp":39,"../../../../game/scripts/Data/ConstValue":2,"../../../../game/scripts/Manager/EditorManager":48,"../../Manager/ReportManager":11,"../BaseFrameUI":19},"path":"preview-scripts/assets/frame/scripts/UI/Panel/StarCount.js"},{"deps":{"../BaseFrameUI":19,"../Item/Tip":20},"path":"preview-scripts/assets/frame/scripts/UI/Panel/TipUI.js"},{"deps":{"../../../../game/scripts/Manager/EditorManager":48,"../../../../game/scripts/Data/ConstValue":2,"../../Http/NetWork":43,"../../Data/FrameMsgType":37,"../../Manager/ListenerManager":9,"../../Manager/SoundManager":3,"../../Manager/ReportManager":11,"../../Manager/SyncDataManager":10,"../../Manager/UIManager":12,"../../SDK/GameMsg":14,"../BaseUI":16,"../../Utils/UIHelp":39,"../../SDK/T2M":5},"path":"preview-scripts/assets/frame/scripts/UI/Panel/BaseGamePanel.js"},{"deps":{"./../Manager/SoundManager":3},"path":"preview-scripts/assets/frame/scripts/Utils/AudioPlayExtension.js"},{"deps":{"../../Utils/UIHelp":39,"../../SDK/T2M":5,"../BaseFrameUI":19,"../../Data/FrameMsgType":37},"path":"preview-scripts/assets/frame/scripts/UI/Panel/AffirmTips.js"},{"deps":{"../../Data/FrameMsgType":37,"../BaseFrameUI":19,"./../../Manager/ListenerManager":9,"../../Utils/UIHelp":39,"../../SDK/T2M":5,"../../Manager/SoundManager":3,"../../../../game/scripts/Manager/EditorManager":48,"../../Manager/ReportManager":11},"path":"preview-scripts/assets/frame/scripts/UI/Panel/UploadAndReturnPanel.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxHelp.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/Tools.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Utils/MathUtils.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameMsgType.js"},{"deps":{"./BoundingBoxHelp":34},"path":"preview-scripts/assets/frame/scripts/Utils/BoundingBoxDemo.js"},{"deps":{"../Data/FrameMsgType":37,"../../../game/scripts/UI/panel/GamePanel":42,"../../../game/scripts/UI/panel/TeacherPanel":50,"../Manager/ListenerManager":9,"../UI/Panel/AffirmTips":32,"../UI/Panel/ErrorPanel":6,"../Manager/UIManager":12,"../UI/Panel/OverTips":24,"../UI/Panel/StarCount":28,"../UI/Panel/SubmissionPanel":27,"../UI/Panel/TipUI":29,"../UI/Panel/UploadAndReturnPanel":33},"path":"preview-scripts/assets/frame/scripts/Utils/UIHelp.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/UI/Item/SoundConfig.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/GameManager.js"},{"deps":{"../../../../frame/scripts/Manager/ListenerManager":9,"../../../../frame/scripts/UI/Panel/BaseGamePanel":30,"../../../../frame/scripts/Manager/SyncDataManager":10,"../../Data/EventType":45},"path":"preview-scripts/assets/game/scripts/UI/panel/GamePanel.js"},{"deps":{"../Manager/UIManager":12,"../SDK/GameMsg":14,"../Utils/UIHelp":39,"../../../game/scripts/Data/ConstValue":2},"path":"preview-scripts/assets/frame/scripts/Http/NetWork.js"},{"deps":{"../../../../frame/scripts/SDK/T2M":5},"path":"preview-scripts/assets/game/scripts/UI/Components/ButtonSync.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/EventType.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Data/CustomSyncData.js"},{"deps":{"../../Manager/EditorManager":48,"../../Data/EventType":45,"../../../../frame/scripts/Manager/ListenerManager":9},"path":"preview-scripts/assets/game/scripts/UI/Item/GameUI.js"},{"deps":{},"path":"preview-scripts/assets/game/scripts/Manager/EditorManager.js"},{"deps":{},"path":"preview-scripts/assets/frame/scripts/Data/FrameConstValue.js"},{"deps":{"./GamePanel":42,"../../Data/EventType":45,"../Item/IconDrag":51,"../Item/GeziArea":52,"../../Manager/EditorManager":48,"../../../../frame/scripts/Manager/ListenerManager":9,"../../../../frame/scripts/Data/FrameMsgType":37,"../../../../frame/scripts/Manager/ReportManager":11,"../../../../frame/scripts/Utils/UIHelp":39,"../../../../frame/scripts/UI/Panel/BaseTeacherPanel":26,"../../../../frame/scripts/Manager/UIManager":12},"path":"preview-scripts/assets/game/scripts/UI/panel/TeacherPanel.js"},{"deps":{"../../Data/EventType":45,"../../Manager/EditorManager":48,"./GeziArea":52,"../../../../frame/scripts/Manager/ListenerManager":9},"path":"preview-scripts/assets/game/scripts/UI/Item/IconDrag.js"},{"deps":{"../../Data/EventType":45,"../../../../frame/scripts/Utils/HitTest":7,"../../../../frame/scripts/Manager/ListenerManager":9},"path":"preview-scripts/assets/game/scripts/UI/Item/GeziArea.js"}];
var entries = ["preview-scripts/__qc_index__.js"];
var bundleScript = 'preview-scripts/__qc_bundle__.js';

/**
 * Notice: This file can not use ES6 (for IE 11)
 */
var modules = {};
var name2path = {};

// Will generated by module.js plugin
// var scripts = ${scripts};
// var entries = ${entries};
// var bundleScript = ${bundleScript};

if (typeof global === 'undefined') {
    window.global = window;
}

var isJSB = typeof jsb !== 'undefined';

function getXMLHttpRequest () {
    return window.XMLHttpRequest ? new window.XMLHttpRequest() : new ActiveXObject('MSXML2.XMLHTTP');
}

function downloadText(url, callback) {
    if (isJSB) {
        var result = jsb.fileUtils.getStringFromFile(url);
        callback(null, result);
        return;
    }

    var xhr = getXMLHttpRequest(),
        errInfo = 'Load text file failed: ' + url;
    xhr.open('GET', url, true);
    if (xhr.overrideMimeType) xhr.overrideMimeType('text\/plain; charset=utf-8');
    xhr.onload = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200 || xhr.status === 0) {
                callback(null, xhr.responseText);
            }
            else {
                callback({status:xhr.status, errorMessage:errInfo + ', status: ' + xhr.status});
            }
        }
        else {
            callback({status:xhr.status, errorMessage:errInfo + '(wrong readyState)'});
        }
    };
    xhr.onerror = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(error)'});
    };
    xhr.ontimeout = function(){
        callback({status:xhr.status, errorMessage:errInfo + '(time out)'});
    };
    xhr.send(null);
};

function loadScript (src, cb) {
    if (typeof require !== 'undefined') {
        require(src);
        return cb();
    }

    // var timer = 'load ' + src;
    // console.time(timer);

    var scriptElement = document.createElement('script');

    function done() {
        // console.timeEnd(timer);
        // deallocation immediate whatever
        scriptElement.remove();
    }

    scriptElement.onload = function () {
        done();
        cb();
    };
    scriptElement.onerror = function () {
        done();
        var error = 'Failed to load ' + src;
        console.error(error);
        cb(new Error(error));
    };
    scriptElement.setAttribute('type','text/javascript');
    scriptElement.setAttribute('charset', 'utf-8');
    scriptElement.setAttribute('src', src);

    document.head.appendChild(scriptElement);
}

function loadScripts (srcs, cb) {
    var n = srcs.length;

    srcs.forEach(function (src) {
        loadScript(src, function () {
            n--;
            if (n === 0) {
                cb();
            }
        });
    })
}

function formatPath (path) {
    let destPath = window.__quick_compile_project__.destPath;
    if (destPath) {
        let prefix = 'preview-scripts';
        if (destPath[destPath.length - 1] === '/') {
            prefix += '/';
        }
        path = path.replace(prefix, destPath);
    }
    return path;
}

window.__quick_compile_project__ = {
    destPath: '',

    registerModule: function (path, module) {
        path = formatPath(path);
        modules[path].module = module;
    },

    registerModuleFunc: function (path, func) {
        path = formatPath(path);
        modules[path].func = func;

        var sections = path.split('/');
        var name = sections[sections.length - 1];
        name = name.replace(/\.(?:js|ts|json)$/i, '');
        name2path[name] = path;
    },

    require: function (request, path) {
        var m, requestScript;

        path = formatPath(path);
        if (path) {
            m = modules[path];
            if (!m) {
                console.warn('Can not find module for path : ' + path);
                return null;
            }
        }

        if (m) {
            let depIndex = m.deps[request];
            // dependence script was excluded
            if (depIndex === -1) {
                return null;
            }
            else {
                requestScript = scripts[ m.deps[request] ];
            }
        }
        
        let requestPath = '';
        if (!requestScript) {
            // search from name2path when request is a dynamic module name
            if (/^[\w- .]*$/.test(request)) {
                requestPath = name2path[request];
            }

            if (!requestPath) {
                if (CC_JSB) {
                    return require(request);
                }
                else {
                    console.warn('Can not find deps [' + request + '] for path : ' + path);
                    return null;
                }
            }
        }
        else {
            requestPath = formatPath(requestScript.path);
        }

        let requestModule = modules[requestPath];
        if (!requestModule) {
            console.warn('Can not find request module for path : ' + requestPath);
            return null;
        }

        if (!requestModule.module && requestModule.func) {
            requestModule.func();
        }

        if (!requestModule.module) {
            console.warn('Can not find requestModule.module for path : ' + path);
            return null;
        }

        return requestModule.module.exports;
    },

    run: function () {
        entries.forEach(function (entry) {
            entry = formatPath(entry);
            var module = modules[entry];
            if (!module.module) {
                module.func();
            }
        });
    },

    load: function (cb) {
        var self = this;

        var srcs = scripts.map(function (script) {
            var path = formatPath(script.path);
            modules[path] = script;

            if (script.mtime) {
                path += ("?mtime=" + script.mtime);
            }
            return path;
        });

        console.time && console.time('load __quick_compile_project__');
        // jsb can not analysis sourcemap, so keep separate files.
        if (bundleScript && !isJSB) {
            downloadText(formatPath(bundleScript), function (err, bundleSource) {
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                if (err) {
                    console.error(err);
                    return;
                }

                let evalTime = 'eval __quick_compile_project__ : ' + srcs.length + ' files';
                console.time && console.time(evalTime);
                var sources = bundleSource.split('\n//------QC-SOURCE-SPLIT------\n');
                for (var i = 0; i < sources.length; i++) {
                    if (sources[i]) {
                        window.eval(sources[i]);
                        // not sure why new Function cannot set breakpoints precisely
                        // new Function(sources[i])()
                    }
                }
                self.run();
                console.timeEnd && console.timeEnd(evalTime);
                cb();
            })
        }
        else {
            loadScripts(srcs, function () {
                self.run();
                console.timeEnd && console.timeEnd('load __quick_compile_project__');
                cb();
            });
        }
    }
};

// Polyfill for IE 11
if (!('remove' in Element.prototype)) {
    Element.prototype.remove = function () {
        if (this.parentNode) {
            this.parentNode.removeChild(this);
        }
    };
}
})();
    