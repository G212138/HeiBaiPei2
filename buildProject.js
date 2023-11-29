'use strict';
const fs = require('fs');
const path = require('path');
const child_process = require('child_process');
const https = require('https');
const crypto = require('crypto');
const { URL } = require('url');
const zipper = require("zip-local");
const curPath = __dirname;
const openDir = process.platform === 'darwin' ? 'open' : 'start';

const coverPath = path.join(curPath, 'cover.jpg');
const cocosVer = '2.4.5';
const sceneFile = path.join(curPath, 'assets/frame/scene');
const constValueFile = 'assets/game/scripts/Data/ConstValue.ts';

let oldConstValue = '';

const options = {
    method: 'POST',
    hostname: 'tinypng.com',
    path: '/web/shrink',
    headers: {
        rejectUnauthorized: false,
        'Postman-Token': Date.now(),
        'Cache-Control': 'no-cache',
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent':
            'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
    }
};

// 执行命令
function runExec(command, needExit = true, options = { cwd: curPath }) {
    return new Promise((resolve, reject) => {
        console.log('cmd: ', command);
        let workerProcess = child_process.exec(command, options, (error, stdout, stderr) => {
            if (!error) {
                // console.log('成功', stdout);
                return resolve(stdout);
            } else {
                console.log('失败:::', command, error, stdout, stderr);
                if (needExit) process.exit(-1);
                else return resolve(null);
            }
        });

        workerProcess.stdout.on('data', function (data) {
            // console.log('stdout: ' + data);
        });

        workerProcess.stderr.on('data', function (data) {
            // console.log('stderr: ' + data);
        });
    });
}

async function main() {
    await checkCover();
    await build();
    writeBaseConstValue();
    console.log('********** 打包完成 **********');
    await openBuildDir();
}

/**
 * 检测是否有预览图
 */
async function checkCover() {
    // 检测是否存在预览图
    if (!fs.existsSync(coverPath)) {
        console.log('未找到预览图！请将预览图命名为cover.jpg，放在项目根目录下。');
        process.exit(-1);
    }

    let states = fs.statSync(coverPath);
    if (states.size > 200 * 1024) {  // 预览图超过200KB则进行压缩
        // 将预览图进行压缩
        await compressImage(coverPath);
        console.log('预览图压缩完成!');
    }
}

/**
 * 打包
 */
async function build() {
    // 先删除旧包
    const buildPath = path.join(curPath, 'build');
    if (fs.existsSync(buildPath)) {
        rmDirAndFiles(buildPath);
    }

    // 打包教师端
    await buildByRore(true);
    // 打包学生端
    await buildByRore(false);
    // 压缩
    await compressZip();
}

async function openBuildDir() {
    const buildPath = path.join(curPath, "build");
    const command = `${openDir} ${buildPath}`;
    await runExec(command);
}

/**
 * 根据角色打包
 * @param {boolean} isTeacher 是否是老师
 */
async function buildByRore(isTeacher) {
    modifyScript(isTeacher);  // 修改配置文件
    await buildWebMobile(isTeacher);
}

/**
 * 压缩图片
 */
async function compressImage(img) {
    if (!img) return;
    let obj = await fileUpload(img);
    await fileUpdate(img, obj);
}

// 压缩图片
async function fileUpload(img) {
    return new Promise((resolve, reject) => {
        var req = https.request(options, function (res) {
            res.on('data', buf => {
                let obj = JSON.parse(buf.toString());
                if (obj.error) {
                    reject(`[${img}]：压缩失败！报错：${obj.message}`);
                } else {
                    resolve(obj);
                }
            });
        });

        req.write(fs.readFileSync(img), 'binary');
        req.on('error', e => {
            reject(e);
        });
        req.end();
    });
}

// 获取压缩后的图片
async function fileUpdate(imgpath, obj) {
    return new Promise((resolve, reject) => {
        let options = new URL(obj.output.url);
        let req = https.request(options, res => {
            let body = '';
            res.setEncoding('binary');
            res.on('data', function (data) {
                body += data;
            });

            res.on('end', function () {
                fs.writeFile(imgpath, body, 'binary', err => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve();
                    }
                });
            });
        });
        req.on('error', e => {
            console.error(e);
            reject(e);
        });
        req.end();
    });
}


/**
 * 修改配置文件
 * @param {boolean} isTeacher 是否是老师
 */
function modifyScript(isTeacher) {
    // 修改 ConstValue.ts
    const scriptPath = path.join(curPath, constValueFile);
    let script = fs.readFileSync(scriptPath, 'utf8');

    if (!oldConstValue) {
        oldConstValue = script;
    }

    script = script.replace('IS_EDITIONS = false', 'IS_EDITIONS = true');
    if (isTeacher) {
        script = script.replace('IS_TEACHER = false', 'IS_TEACHER = true');
    } else {
        script = script.replace('IS_TEACHER = true', 'IS_TEACHER = false');
    }
    fs.writeFileSync(scriptPath, script);

    // 修改 builder.json
    const builderPath = path.join(curPath, 'settings/builder.json');
    if (fs.existsSync(builderPath)) {
        let builderScript = fs.readFileSync(builderPath, 'utf8');
        let builderData = JSON.parse(builderScript);
        builderData.excludeScenes = [];
        fs.writeFileSync(builderPath, JSON.stringify(builderData));
    }
}

function writeBaseConstValue() {
    const scriptPath = path.join(curPath, constValueFile);
    fs.writeFileSync(scriptPath, oldConstValue);
}

// 递归文件夹，将所有文件拷贝到目标文件夹下
function deepDirAndCopyFiles(sourcePath, targetPath) {
    if (fs.statSync(sourcePath).isDirectory()) {
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath);
        }

        let files = fs.readdirSync(sourcePath);
        files.forEach(file => {
            let curSourcePath = path.join(sourcePath, file);
            let curTargetPath = path.join(targetPath, file);
            let fileState = fs.statSync(curSourcePath);
            if (fileState.isFile()) {
                copyFile(curSourcePath, curTargetPath);
            } else if (fileState.isDirectory()) {
                deepDirAndCopyFiles(curSourcePath, curTargetPath);
            }
        });
    } else {
        copyFile(sourcePath, targetPath);
    }
}

// 删除文件夹及文件夹内所有文件
function rmDirAndFiles(rmPath) {
    if (fs.existsSync(rmPath)) {
        if (fs.statSync(rmPath).isDirectory()) {
            let files = fs.readdirSync(rmPath);
            files.forEach(file => {
                let curPath = path.join(rmPath, file)
                if (fs.statSync(curPath).isDirectory()) {
                    rmDirAndFiles(curPath);
                } else {
                    fs.unlinkSync(curPath);
                }
            });
        }
        rmOneFile(rmPath);
    }
}

// 删除单一文件夹或文件
function rmOneFile(rmPath) {
    if (fs.existsSync(rmPath)) {
        if (fs.statSync(rmPath).isDirectory()) {
            fs.rmdirSync(rmPath);
        } else {
            fs.unlinkSync(rmPath);
        }
    }
}

// 复制文件到指定目录
function copyFile(sourcePath, targetPath) {
    if (fs.statSync(sourcePath).isDirectory()) {
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath);
        }
    }
    else {
        fs.copyFileSync(sourcePath, targetPath);
    }
}

async function buildWebMobile(isTeacher) {
    console.log('构建 ...', isTeacher ? '教师端' : '学生端');

    const buildPath = path.join(curPath, "build");
    const startScene = isTeacher ? path.join(sceneFile, 'Teacher.fire') : path.join(sceneFile, 'Student.fire');
    const startSceneUuid = getSceneUUid(startScene);
    let enginePath = '';
    if ('darwin' === process.platform) {
        enginePath = `/Applications/CocosCreator/Creator/${cocosVer}/CocosCreator.app/Contents/MacOS/CocosCreator`;
    }
    else {
        enginePath = `Creator/${cocosVer}/CocosCreator.exe`;
    }

    const params = `--path ${curPath} --build "platform=web-mobile;debug=false;md5Cache=true;buildPath=${buildPath};startScene=${startSceneUuid}"`;
    const command = `${enginePath} ${params}`;
    await runExec(command);

    const baseName = path.join(buildPath, "web-mobile");
    const outputName = isTeacher ? path.join(buildPath, "teacher") : path.join(buildPath, "student");
    fs.renameSync(baseName, outputName);
    copyFile(coverPath, path.join(outputName, 'cover.jpg'));

    console.log(isTeacher ? '教师端' : '学生端', '构建完成',);
};

async function compressZip() {
    const buildPath = path.join(curPath, "build");
    const projectName = path.basename(curPath);
    var projectNamePath = path.join(buildPath, projectName);

    if (fs.existsSync(projectNamePath)) {
        rmDirAndFiles(projectNamePath);
    }

    //创建一个文件夹
    var destFile = path.join(buildPath, projectName, projectName);// `${src}\\build\\${projectName}\\${projectName}`;
    var studentFile = path.join(buildPath, projectName, projectName + "student");
    var destFile1 = path.join(studentFile, projectName);
    mkdir(destFile);
    mkdir(destFile1);

    //文件夹copy
    var studentFilePath = path.join(buildPath, 'student'); //src + '\\build\\teacher';
    var teacherFilePath = path.join(buildPath, 'teacher');// src + '\\build\\student';

    copyDirectory(studentFilePath, path.join(destFile, "student"));
    copyDirectory(teacherFilePath, path.join(destFile, "teacher"));
    copyDirectory(studentFilePath, path.join(destFile1, "student"));


    // //文件压缩
    packZip(studentFile, destFile + '.zip');
    rmDirAndFiles(studentFile);

    packZip(projectNamePath, projectNamePath + '.zip');
    rmDirAndFiles(projectNamePath);

    rmDirAndFiles(studentFilePath);
    rmDirAndFiles(teacherFilePath);
}

/**
 * 
 * @param {string} scenePath 场景文件
 */
function getSceneUUid(scenePath) {
    const metaPath = scenePath + '.meta';
    console.log(metaPath)
    if (fs.existsSync(metaPath)) {
        let metaContent = fs.readFileSync(metaPath, 'utf8');
        metaContent = JSON.parse(metaContent);
        // console.log(`metaContent: ${metaContent}`);
        return metaContent.uuid;
    }
}

//使用时第二个参数可以忽略 文件夹创建
function mkdir(dirpath, dirname) {
    //判断是否是第一次调用
    if (typeof dirname === "undefined") {
        //检查路径是否存在 同步
        if (fs.existsSync(dirpath)) {
            return;
        } else {
            mkdir(dirpath, path.dirname(dirpath));
        }
    } else {
        //判断第二个参数是否正常，避免调用时传入错误参数
        if (dirname !== path.dirname(dirpath)) {
            mkdir(dirpath);
            return;
        }
        if (fs.existsSync(dirname)) {
            //创建一个文件夹 同步
            fs.mkdirSync(dirpath)
        } else {
            mkdir(dirname, path.dirname(dirname));
            fs.mkdirSync(dirpath);
        }
    }
};

//文件压缩 projectName:文件保存的位置
function packZip(path, projectName, callBack) {
    zipper.sync.zip(path).compress().save(projectName);
};

// 文件夹copy
function copyDirectory(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest);
    }
    if (fs.existsSync(src) == false) {
        return false;
    }
    // console.log("src:" + src + ", dest:" + dest);
    // 拷贝新的内容进去
    var dirs = fs.readdirSync(src);
    dirs.forEach(function (item) {
        var item_path = path.join(src, item);
        var temp = fs.statSync(item_path);
        if (temp.isFile()) { // 是文件
            // console.log("Item Is File:" + item);
            fs.copyFileSync(item_path, path.join(dest, item));
        } else if (temp.isDirectory()) { // 是目录
            // console.log("Item Is Directory:" + item);
            copyDirectory(item_path, path.join(dest, item));
        }
    });
};

main();