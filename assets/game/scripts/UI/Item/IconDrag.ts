import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";
import GeziArea from "./GeziArea";


const {ccclass, property} = cc._decorator;

@ccclass
export default class IconDrag extends cc.Component {

    @property(cc.Node)
    private rootNode: cc.Node = null;
    @property(cc.Integer)
    private index: number = 0;
    @property(cc.Node)
    private gezi_1: cc.Node = null;
    @property(cc.Node)
    private gezi_2: cc.Node = null;

    public isRoot: boolean = true;
    private initPos: cc.Vec3 = null;

    //根据触摸时间判断是否为点击事件
    private touchStartTime: any = null;
    private touchStartPos: cc.Vec2 = null;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.touchEnd, this);

        this.initPos = this.node.position;
    }

    private touchStart(event: cc.Event.EventTouch) {
        this.touchStartTime = new Date().getTime();
        this.touchStartPos = event.getLocation();
        if (this.node.getComponent(IconDrag).isRoot) {
            let newNode = this.clone();
            newNode.getComponent(IconDrag).isRoot = true;
            this.node.getComponent(IconDrag).isRoot = false;
        }
        
        let pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.parent = this.rootNode;
        this.node.position = cc.v3(pos.x, pos.y);
        let pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager.dispatch(EventType.DRAG_ICON, pos2);
    }

    private touchMove(event: cc.Event.EventTouch) {
        let pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        this.node.position = cc.v3(pos.x, pos.y);
        let pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        ListenerManager.dispatch(EventType.DRAG_ICON, pos2);
    }

    private touchEnd(event: cc.Event.EventTouch) {
        let pos = this.rootNode.convertToNodeSpaceAR(event.getLocation());
        let pos2 = this.node.parent.convertToWorldSpaceAR(cc.v2(pos.x, pos.y));
        this.node.position = cc.v3(pos.x, pos.y);
        let isInRect: boolean = false;
        let geziNode = EditorManager.editorData.geziSize === 0 ? this.gezi_1 : this.gezi_2;
        geziNode.children.forEach(gezi => {
            if (gezi.getComponent(GeziArea).isPosInRect(cc.v2(pos2.x, pos2.y))) {
                isInRect = true;
                gezi.getComponent(GeziArea).fill(this.node);
            }
        });
        if (!isInRect) {
            this.node.destroy();
        }
        ListenerManager.dispatch(EventType.DRAG_ICON_END);
        if (new Date().getTime() - this.touchStartTime < 200 && this.touchStartPos.sub(event.getLocation()).mag() < 10) {
            if (this.node.parent.name == "icon_node") {
                let row = this.node.parent.parent.getComponent(GeziArea).row;
                let col = this.node.parent.parent.getComponent(GeziArea).col;
                this.node.parent.parent.getChildByName("highLight").active = !this.node.parent.parent.getChildByName("highLight").active;  
                ListenerManager.dispatch(EventType.CLICK_ICON, {row: row, col: col});
            }            
        }
    }

    //克隆一个新的节点
    private clone(): cc.Node {
        let node = cc.instantiate(this.node);
        node.parent = this.node.parent;
        node.position = this.initPos;
        node.zIndex = this.node.zIndex -1;
        return node;
    }

    public reset() {
        this.node.parent = this.rootNode;
        this.node.position = this.initPos;
    }

    public getIndex(): number {
        return this.index;
    }

    public showHighLight(show: boolean) {
        this.node.parent.parent.getChildByName("highLight").active = show;
    }
}
