import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { EventType } from "../../Data/EventType";


const { ccclass, property } = cc._decorator;

@ccclass
export default class Role extends cc.Component {

    @property(sp.Skeleton)
    private role_skeleton: sp.Skeleton = null;

    public type: number = 0;
    public geziIndex: number = 0;

    private onClickRole() {
        ListenerManager.dispatch(EventType.CLICK_ROLE, this.geziIndex);
    }

    public showInit() {
        Tools.playSpine(this.role_skeleton, "eft_smoke", false, () => {
            this.initRole();
        });
    }

    public initRole() {
        let aniName = "";
        if (this.type == 5) {
            aniName = "3";
        } else if (this.type == 6) {
            aniName = "4";
        } else if (this.type == 7) {
            aniName = "7";
        } else {
            aniName = "role" + this.type + "_stand";
        }
        Tools.playSpine(this.role_skeleton, aniName, true);
    }

    public showClick() {
        let aniName = "";
        if (this.type == 5) {
            aniName = "3";
        } else if (this.type == 6) {
            aniName = "4";
        } else if (this.type == 7) {
            aniName = "7";
        } else {
            aniName = "role" + this.type + "_yihuo";
        }
        Tools.playSpine(this.role_skeleton, aniName, true);
    }

    public showChange() {
        Tools.playSpine(this.role_skeleton, "eft_smoke", false, () => {
            let aniName = "1";
            if (this.type == 2) {
                aniName = "6";
            } else if (this.type == 4) {
                aniName = "5";
            } else if (this.type == 6) {
                aniName = "1";
            } else if (this.type == 7) {
                aniName = "2";
            }
            SoundManager.playEffect("图案变身视频的音效", false);
            Tools.playSpine(this.role_skeleton, aniName, true);
        });
    }
}
