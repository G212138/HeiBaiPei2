import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { HitTest } from "../../../../frame/scripts/Utils/HitTest";
import { EventType } from "../../Data/EventType";
import IconDrag from "./IconDrag";

const {ccclass, property} = cc._decorator;

@ccclass
export default class GeziArea extends cc.Component {

    //行数
    public row: number = 0;
    //列数
    public col: number = 0;

    onLoad() {
        ListenerManager.on(EventType.DRAG_ICON, this.onDragMaozi, this);
    }
    onDestroy() {
        ListenerManager.off(EventType.DRAG_ICON, this.onDragMaozi, this);
    }

    private onDragMaozi(pos: cc.Vec2) {
        if (HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node)) {
            
        } else {
            
        }
    }

    public isPosInRect(pos: cc.Vec2): boolean {
        return HitTest.posInRect(new cc.Vec2(pos.x, pos.y), this.node);
    }

    public fill(item: cc.Node) {
        if (this.node.getChildByName("icon_node").childrenCount > 0) {
            this.node.getChildByName("icon_node").removeAllChildren();
        }
        this.node.color = cc.Color.WHITE;
        item.parent = this.node.getChildByName("icon_node");
        item.position = cc.v3(0, 0);
    }
}
