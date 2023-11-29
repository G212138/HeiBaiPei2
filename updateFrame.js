/**
 * 更新frame
 */

const path = require('path');
const fs = require('fs');
const child_process = require('child_process');

const curPath = __dirname;
const curFileName = __filename;
const CD = process.platform === 'darwin' ? 'cd' : 'cd /d';
const frameGitUrl = 'git@git.100tal.com:peiyou_jiaohuyouxi_shuangshi/FrameWork.git'; // frameWork的git地址
const frameName = 'baseFrameWork';
const updateDirList = ['assets/frame', 'build-templates', 'preview-templates', 'updateFrame.js', 'buildProject.js', 'package.json', '.gitignore']; // 需要更新的目录列表
const arg = process.argv[2];
const isSame = '-a' === arg || '-A' === arg || '-all' === arg || '-ALL' === arg; // 是否使frame完全一致(是：本地frame多余文件会被删除；否：覆盖逻辑，本地多余文件不会被删除)
const frameBranch = 'master';

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

// 输入
function inputConfirm(txt, defaultValue) {
    return new Promise((resolve, reject) => {
        process.stdout.write('\n' + txt);

        process.stdin.on('data', (input) => {
            input = input.toString().trim();
            resolve(input || defaultValue);
        });
    });
}

// 克隆工程
async function gitClone(curPath, url, curBranch) {
    if (fs.existsSync(curPath)) {
        console.log(`改目录下存在同名工程：${curPath}`);
        process.exit(-1);
    }

    let projectName = curPath.substring(curPath.lastIndexOf('/') + 1);
    let cmd = `git clone -b ${curBranch} ${url} ${projectName}`;
    await runExec(cmd);
}

// 递归文件夹，将所有文件拷贝到目标文件夹下
function deepDirAndCopyFiles(sourcePath, targetPath) {
    if (fs.statSync(sourcePath).isDirectory()) {
        if (!fs.existsSync(targetPath)) {
            fs.mkdirSync(targetPath);
        }

        let files = fs.readdirSync(sourcePath);
        files.forEach((file) => {
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
            files.forEach((file) => {
                let curPath = path.join(rmPath, file);
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
    } else {
        fs.copyFileSync(sourcePath, targetPath);
    }
}

(async () => {
    // 克隆frameWork
    const cloneFramePath = path.join(curPath, frameName);
    await gitClone(cloneFramePath, frameGitUrl, frameBranch);
    console.log('模板工程克隆成功');

    //如果updateFrame.js有更新，则执行最新的updateFrame.js脚本
    const updateFrameName = path.basename(curFileName);
    if (updateDirList.includes(updateFrameName)) {
        const oldPath = path.join(curPath, updateFrameName);
        const newPath = path.join(cloneFramePath, updateFrameName);
        if (fs.existsSync(oldPath) && fs.existsSync(newPath)) {
            const oldScript = fs.readFileSync(oldPath, 'utf8');
            const newScript = fs.readFileSync(newPath, 'utf8');
            if (oldScript != newScript) {
                console.log('********* updateFrame.js 有更新 **********');
                let testPath = path.join(curPath, 'updateFrame_temp.js');
                fs.writeFileSync(testPath, newScript);
                rmDirAndFiles(cloneFramePath);
                await runExec(`node ${testPath}`);
                rmDirAndFiles(testPath);
                process.exit();
            }
        }
    }

    // 遍历更新目录列表，替换成最新的frameWork文件
    for (let i = 0; i < updateDirList.length; ++i) {
        const needUpdatePath = path.join(curPath, updateDirList[i]);
        const frameUpdatePath = path.join(cloneFramePath, updateDirList[i]);

        if (isSame) {
            rmDirAndFiles(needUpdatePath);
        }
        deepDirAndCopyFiles(frameUpdatePath, needUpdatePath);
    }
    if (updateDirList.includes('assets/frame')) {
        updateBySubject();
    }
    console.log('frame文件替换成功');

    // 删除克隆的frameWork
    rmDirAndFiles(cloneFramePath);
    console.log('删除frameWork成功');
    console.log('********* 【frame】更新完成 **********');
    process.exit(0);
})();

// 根据学科更新资源
function updateBySubject() {
    const overTipsPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips.prefab');
    const overTipsMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips.prefab.meta');
    const starPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount.prefab');
    const starMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount.prefab.meta');

    const likeOverTipsPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips_like.prefab');
    const likeOverTipsMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips_like.prefab.meta');
    const likeStarPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount_like.prefab');
    const likeStarMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount_like.prefab.meta');

    const yuwenOverTipsPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips_yuwen.prefab');
    const yuwenOverTipsMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips_yuwen.prefab.meta');
    const yuwenStarPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount_yuwen.prefab');
    const yuwenStarMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount_yuwen.prefab.meta');

    const yingyuOverTipsPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips_yingyu.prefab');
    const yingyuOverTipsMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/OverTips_yingyu.prefab.meta');
    const yingyuStarPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount_yingyu.prefab');
    const yingyuStarMetaPath = path.join(curPath, 'assets/frame/frameRes/prefab/panel/StarCount_yingyu.prefab.meta');

    const likeResPath = path.join(curPath, 'assets/frame/frameRes/subject/like');
    const likeResMetaPath = path.join(curPath, 'assets/frame/frameRes/subject/like.meta');
    const yuwenResPath = path.join(curPath, 'assets/frame/frameRes/subject/yuwen');
    const yuwenResMetaPath = path.join(curPath, 'assets/frame/frameRes/subject/yuwen.meta');
    const yingyuResPath = path.join(curPath, 'assets/frame/frameRes/subject/yingyu');
    const yingyuResMetaPath = path.join(curPath, 'assets/frame/frameRes/subject/yingyu.meta');

    rmOneFile(overTipsPath);
    rmOneFile(overTipsMetaPath);
    rmOneFile(starPath);
    rmOneFile(starMetaPath);

    let targetOverTipsPath = '';
    let targetOverTipsMetaPath = '';
    let targetStarPath = '';
    let targetStarMetaPath = '';
    const subject = getSubject();
    if (1 === subject) {
        targetOverTipsPath = likeOverTipsPath;
        targetOverTipsMetaPath = likeOverTipsMetaPath;
        targetStarPath = likeStarPath;
        targetStarMetaPath = likeStarMetaPath;

        rmOneFile(yuwenOverTipsPath);
        rmOneFile(yuwenOverTipsMetaPath);
        rmOneFile(yuwenStarPath);
        rmOneFile(yuwenStarMetaPath);
        rmOneFile(yingyuOverTipsPath);
        rmOneFile(yingyuOverTipsMetaPath);
        rmOneFile(yingyuStarPath);
        rmOneFile(yingyuStarMetaPath);
        rmDirAndFiles(yuwenResPath);
        rmDirAndFiles(yingyuResPath);
        rmOneFile(yuwenResMetaPath);
        rmOneFile(yingyuResMetaPath);
    }
    else if (2 === subject) {
        targetOverTipsPath = yuwenOverTipsPath;
        targetOverTipsMetaPath = yuwenOverTipsMetaPath;
        targetStarPath = yuwenStarPath;
        targetStarMetaPath = yuwenStarMetaPath;

        rmOneFile(likeOverTipsPath);
        rmOneFile(likeOverTipsMetaPath);
        rmOneFile(likeStarPath);
        rmOneFile(likeStarMetaPath);
        rmOneFile(yingyuOverTipsPath);
        rmOneFile(yingyuOverTipsMetaPath);
        rmOneFile(yingyuStarPath);
        rmOneFile(yingyuStarMetaPath);
        rmDirAndFiles(likeResPath);
        rmDirAndFiles(yingyuResPath);
        rmOneFile(likeResMetaPath);
        rmOneFile(yingyuResMetaPath);
    } else if (3 === subject) {
        targetOverTipsPath = yingyuOverTipsPath;
        targetOverTipsMetaPath = yingyuOverTipsMetaPath;
        targetStarPath = yingyuStarPath;
        targetStarMetaPath = yingyuStarMetaPath;

        rmOneFile(likeOverTipsPath);
        rmOneFile(likeOverTipsMetaPath);
        rmOneFile(likeStarPath);
        rmOneFile(likeStarMetaPath);
        rmOneFile(yuwenOverTipsPath);
        rmOneFile(yuwenOverTipsMetaPath);
        rmOneFile(yuwenStarPath);
        rmOneFile(yuwenStarMetaPath);
        rmDirAndFiles(likeResPath);
        rmDirAndFiles(yuwenResPath);
        rmOneFile(likeResMetaPath);
        rmOneFile(yuwenResMetaPath);
    }

    fs.renameSync(targetOverTipsPath, overTipsPath);
    fs.renameSync(targetOverTipsMetaPath, overTipsMetaPath);
    fs.renameSync(targetStarPath, starPath);
    fs.renameSync(targetStarMetaPath, starMetaPath);
}

// 获取当前工程的学科
function getSubject() {
    const valuePath = path.join(curPath, 'assets/game/scripts/Data/ConstValue.ts');
    const constValueStr = fs.readFileSync(valuePath, 'utf8');
    const subjectStr = 'Subject = ';
    const subjectIndex = constValueStr.indexOf(subjectStr);
    if (subjectIndex < 0) {
        return 1;
    }

    const subjectEndIndex = constValueStr.indexOf(';', subjectIndex);
    const value = constValueStr.substring(subjectIndex + subjectStr.length, subjectEndIndex);
    if (isNaN(value)) {
        return 1;
    }
    else {
        return parseInt(value);
    }
}
