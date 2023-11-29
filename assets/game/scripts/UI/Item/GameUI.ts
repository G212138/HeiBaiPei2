import { ListenerManager } from "../../../../frame/scripts/Manager/ListenerManager";
import { SoundManager } from "../../../../frame/scripts/Manager/SoundManager";
import { SyncDataManager } from "../../../../frame/scripts/Manager/SyncDataManager";
import { Tools } from "../../../../frame/scripts/Utils/Tools";
import { UIHelp } from "../../../../frame/scripts/Utils/UIHelp";
import { EventType } from "../../Data/EventType";
import { SoundConfig } from "./SoundConfig";

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
