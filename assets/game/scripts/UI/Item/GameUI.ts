import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { EventType } from "../../Data/EventType";
import { EditorManager } from "../../Manager/EditorManager";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameUI extends cc.Component {
    

    onLoad() {
        ListenerManager.on(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.on(EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager.on(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    onDestroy() {
        ListenerManager.off(EventType.ENTER_GAME, this.handleEnterGame, this);
        ListenerManager.off(EventType.GAME_RECONNECT, this.initUI, this);
        ListenerManager.off(EventType.GAME_REPLAY, this.handleEnterGame, this);
    }

    private handleEnterGame() {
        console.log("handleEnterGame EditorManager.editorData.answerArr", EditorManager.editorData.answerArr);
        this.initUI();
    }

    private initUI() {
    }


    private onClickSubmit() {
        
    }

    private gameOver() {
        ListenerManager.dispatch(EventType.GAME_OVER);
    }

}
