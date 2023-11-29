import { NetWork } from '../../Http/NetWork';
import BaseFrameUI from '../BaseFrameUI';
import { UIHelp } from '../../Utils/UIHelp';
import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';

const { ccclass, property } = cc._decorator;

@ccclass
export default class SubmissionPanel extends BaseFrameUI {
    public static className = 'SubmissionPanel';
    start() {}

    onQueDingBtnClick(event) {
        this.DetectionNet();
    }

    onQuXiaoBtnClick(event) {
        UIHelp.closeSubmissionPanel();
    }

    //提交或者修改答案
    DetectionNet() {
        if (!NetWork.titleId) {
            UIHelp.showErrorPanel('titleId为空,请联系技术老师解决！\ntitleId=' + NetWork.titleId, '', '', '确定');
            return;
        }
        let data = JSON.stringify({
            CoursewareKey: ConstValue.CoursewareKey,
            data: EditorManager.getData(),
        });
        NetWork.httpRequest(
            NetWork.GET_TITLE + '?title_id=' + NetWork.titleId,
            'GET',
            'application/json;charset=utf-8',
            (err, response) => {
                if (!err) {
                    if (response.data.courseware_content == null || response.data.courseware_content == '') {
                        this.AddNet(data);
                    } else {
                        NetWork.coursewareId = response.data.courseware_id;
                        let res = JSON.parse(response.data.courseware_content);
                        if (!NetWork.empty) {
                            if (res.CoursewareKey == ConstValue.CoursewareKey) {
                                this.ModifyNet(data);
                            } else {
                                UIHelp.showErrorPanel(
                                    '该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork.titleId,
                                    '',
                                    '',
                                    '确定',
                                );
                            }
                        }
                    }
                }
            },
            null,
        );
    }

    //添加答案信息
    AddNet(gameDataJson) {
        let data = {
            title_id: NetWork.titleId,
            courseware_content: gameDataJson,
            is_result: 1,
            is_lavel: 1,
            lavel_num: EditorManager.getLevelCount(),
        };
        NetWork.httpRequest(
            NetWork.ADD,
            'POST',
            'application/json;charset=utf-8',
            (err, response) => {
                if (!err) {
                    UIHelp.showTip('答案提交成功');
                    UIHelp.closeSubmissionPanel();
                }
            },
            JSON.stringify(data),
        );
    }

    //修改课件
    ModifyNet(gameDataJson) {
        let jsonData = {
            courseware_id: NetWork.coursewareId,
            courseware_content: gameDataJson,
            is_result: 1,
            is_lavel: 1,
            lavel_num: EditorManager.getLevelCount(),
        };
        NetWork.httpRequest(
            NetWork.MODIFY,
            'POST',
            'application/json;charset=utf-8',
            (err, response) => {
                if (!err) {
                    UIHelp.showTip('答案修改成功');
                    UIHelp.closeSubmissionPanel();
                }
            },
            JSON.stringify(jsonData),
        );
    }
}
