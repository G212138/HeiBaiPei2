import { ConstValue } from '../../../../game/scripts/Data/ConstValue';
import { EditorManager } from '../../../../game/scripts/Manager/EditorManager';
import { NetWork } from '../../Http/NetWork';
import { UIHelp } from '../../Utils/UIHelp';
import { BaseUI } from '../BaseUI';

const { ccclass, property } = cc._decorator;

@ccclass
export default class BaseTeacherPanel extends BaseUI {
    public static className = 'BaseTeacherPanel';
    onLoad() {}

    start() {
        this.data.node.parent.removeChild(this.data.node);
        this.getNet();
        UIHelp.closeRecoverMask();
    }

    public setPanel() {}

    private getNet() {
        NetWork.httpRequest(
            NetWork.GET_TITLE + '?title_id=' + NetWork.titleId,
            'GET',
            'application/json;charset=utf-8',
            (err, response) => {
                console.log('消息返回' + response);
                if (!err) {
                    let res = response;
                    if (Array.isArray(res.data)) {
                        this.setPanel();
                        return;
                    }
                    let content = JSON.parse(res.data.courseware_content);
                    NetWork.coursewareId = res.data.courseware_id;
                    if (NetWork.empty) {
                        //如果URL里面带了empty参数 并且为true  就立刻清除数据
                        this.ClearNet();
                    } else {
                        if (content != null) {
                            if (content.CoursewareKey != ConstValue.CoursewareKey) {
                                UIHelp.showErrorPanel(
                                    '该titleId已被使用,请联系技术老师解决！\ntitleId=' + NetWork.titleId,
                                    '',
                                    '',
                                    '确定',
                                );
                                return;
                            }
                            // 如果编辑器数据修改 先注释掉此行
                            EditorManager.setData(content.data);
                            this.setPanel();
                        } else {
                            this.setPanel();
                        }
                    }
                }
            },
            null,
        );
    }

    //删除课件数据  一般为脏数据清理
    ClearNet() {
        let jsonData = { courseware_id: NetWork.coursewareId };
        NetWork.httpRequest(
            NetWork.CLEAR,
            'POST',
            'application/json;charset=utf-8',
            (err, response) => {
                if (!err) {
                    UIHelp.showTip('答案删除成功');
                }
            },
            JSON.stringify(jsonData),
        );
    }
    // update (dt) {}
}
