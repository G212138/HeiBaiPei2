import { BaseUI, UIClass } from '../UI/BaseUI';

class UIManagerClass {
    private static _instance: UIManagerClass = null;
    private uiList: BaseUI[] = [];
    private uiRoot: cc.Node = null;
    private stateList = new Object();
    public isGameShowing: boolean = true;

    public static getInstance(): UIManagerClass {
        if (null === this._instance) {
            this._instance = new UIManagerClass();
        }
        return this._instance;
    }

    constructor() {
        // this.uiRoot = cc.find("Canvas");
    }

    public loadUI<T extends BaseUI>(uiClass: UIClass<T>, callback?: Function, onProgress?: Function, ...args: any[]) {
        return new Promise<cc.Prefab>((resolve, reject) => {
            let progressFunc = (completedCount: number, totalCount: number, item: any) => {
                if (onProgress) {
                    onProgress(completedCount, totalCount, item);
                }
            };

            let completeFunc = (error: Error, asset: cc.Prefab) => {
                if (error) {
                    cc.log(error);
                    return reject(null);
                }
                if (callback) {
                    callback(asset);
                }
                return resolve(asset);
            };

            if (uiClass.isFramePanel) {
                cc.assetManager.loadBundle('frameRes', (err: Error, bundle: cc.AssetManager.Bundle) => {
                    if (err) {
                        cc.error(err);
                        return reject(null);
                    }
                    bundle.load(uiClass.getUrl(), progressFunc, completeFunc);
                });
            } else {
                cc.resources.load(uiClass.getUrl(), progressFunc, completeFunc);
            }
        });
    }

    public async openUI<T extends BaseUI>(
        uiClass: UIClass<T>,
        data?: any,
        zOrder?: number,
        callback?: Function,
        onProgress?: Function,
        ...args: any[]
    ) {
        if (!this.uiRoot) {
            this.uiRoot = cc.find('Canvas');
        }

        if (this.getUI(uiClass)) {
            return true;
        }

        this.stateList[uiClass.className] = true;

        let prefab = await this.loadUI(uiClass, (asset: cc.Prefab) => {}, onProgress);
        if (prefab) {
            if (this.getUI(uiClass)) {
                return true;
            }
            if (!this.stateList[uiClass.className]) {
                return false;
            }

            let uiNode: cc.Node = cc.instantiate(prefab);
            uiNode.parent = this.uiRoot;
            if (zOrder) {
                uiNode.zIndex = zOrder;
            }
            let ui = uiNode.getComponent(BaseUI);
            ui.data = data;
            ui.tag = uiClass;
            this.uiList.push(ui);
            if (callback) {
                callback(args);
            }
            return true;
        } else {
            return false;
        }
    }

    public closeUI<T extends BaseUI>(uiClass: UIClass<T>) {
        this.stateList[uiClass.className] = false;
        for (let i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                this.uiList[i].node.destroy();
                this.uiList.splice(i, 1);
                return;
            }
        }
    }

    public closeAllUI() {
        for (let i = 0; i < this.uiList.length; ++i) {
            let uiClass = this.uiList[i];
            this.stateList[uiClass.name] = false;
            uiClass.node.destroy();
        }
        this.uiList = [];
    }

    public async showUI<T extends BaseUI>(uiClass: UIClass<T>, data?: any, zOrder?: number, callback?: Function) {
        let ui = this.getUI(uiClass);
        if (ui) {
            this.stateList[uiClass.className] = true;
            ui.data = data;
            ui.node.active = true;
            ui.onShow();
            if (callback) {
                callback();
            }
            return true;
        } else {
            const isOpen = await this.openUI(uiClass, data, zOrder);
            if (isOpen) {
                callback && callback();
                let ui = this.getUI(uiClass);
                ui.onShow();
            }
            return isOpen;
        }
    }

    public hideUI<T extends BaseUI>(uiClass: UIClass<T>) {
        let ui = this.getUI(uiClass);
        if (ui) {
            this.stateList[uiClass.className] = false;
            ui.node.active = false;
        }
    }

    public getUI<T extends BaseUI>(uiClass: UIClass<T>): T {
        for (let i = 0; i < this.uiList.length; ++i) {
            if (this.uiList[i].tag === uiClass) {
                return this.uiList[i] as T;
            }
        }
        return null;
    }

    /**
     * 动态加载并获取resources目录中的资源
     * @param path resources下的资源路径
     * @param type
     * @param callback
     * @returns asset
     */
    public getRes<T extends cc.Asset>(path: string, type: typeof cc.Asset, callback?: (asset: T) => void) {
        return new Promise<T>((resolve, reject) => {
            cc.resources.load(path, type, (error: Error, asset: T) => {
                if (error) {
                    cc.log(error);
                    return reject(error);
                } else {
                    callback && callback(asset);
                    return resolve(asset);
                }
            });
        });
    }

    /**
     * 动态加载并获取自定义bundle目录中的资源
     * @param bundleName 自定义bundle名字
     * @param path bundle下的资源路径
     * @param type
     * @param callback
     * @returns asset
     */
    public getBundleRes<T extends cc.Asset>(
        bundleName: string,
        path: string,
        type: typeof cc.Asset,
        callback?: (asset: T) => void,
    ) {
        return new Promise<T>((resolve, reject) => {
            cc.assetManager.loadBundle(bundleName, (err: Error, bundle: cc.AssetManager.Bundle) => {
                if (err) {
                    cc.error(err);
                    return reject(err);
                }
                bundle.load(path, type, (error: Error, asset: T) => {
                    if (error) {
                        cc.log(error);
                        return reject(error);
                    } else {
                        callback && callback(asset);
                        return resolve(asset);
                    }
                });
            });
        });
    }
}

export const UIManager = UIManagerClass.getInstance();

export enum EPANEL_ZORDER {
    NORMAL = 1, //游戏界面
    POPUP = 10, //弹窗
    MASK = 15, //遮罩
    TIPS = 20, //提示框
    ERROR = 30, //错误提示
    SUBMISSION = 40, //提交答案
}
