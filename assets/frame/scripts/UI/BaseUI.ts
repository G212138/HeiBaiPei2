import { FrameConstValue } from '../Data/FrameConstValue';
import { ListenerManager } from '../Manager/ListenerManager';
import BindNode from './BindNode';

export interface UIClass<T extends BaseUI> {
    new (): T;
    getUrl(): string;
    isFramePanel: boolean;
    className: string;
}

const { ccclass, property } = cc._decorator;
@ccclass
export abstract class BaseUI extends BindNode {
    public static className = 'BaseUI';
    public static isFramePanel: boolean = false;
    protected mData: any;
    public get data(): any {
        return this.mData;
    }

    public set data(value: any) {
        this.mData = value;
    }
    protected mTag: any;
    public get tag(): any {
        return this.mTag;
    }
    public set tag(value: any) {
        this.mTag = value;
    }

    public static getUrl(): string {
        cc.log(this.className);
        return FrameConstValue.PREFAB_PANEL_DIR + this.className;
    }

    onDestroy(): void {
        ListenerManager.removeAll(this);
    }

    onShow() {
        cc.log('BaseUI onShow');
    }
}
