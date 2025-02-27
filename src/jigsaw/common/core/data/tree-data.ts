import {GeneralCollection} from "./general-collection";

/**
 * 用于处理树状关系的数据，目前只实现了最基础的功能，后续会增加子级数据懒加载等功能。
 *
 * 层次关系数据是Jigsaw数据体系中的一个分支，关于Jigsaw数据体系详细介绍，请参考`IComponentData`的说明
 */
export class TreeData extends GeneralCollection<any> {
    [index: string]: any;
    /**
     * 此属性的值一般用于显示在界面上
     */
    label: string;
    /**
     * 子级节点，`TreeData`是一个递归的结构。
     */
    nodes?: TreeData[];

    public fromObject(data: any): TreeData {
        if (!data) {
            return this;
        }
        if (data instanceof Array) {
            data = {nodes: data, label: this.label};
        }

        for (let key in data) {
            if (!data.hasOwnProperty(key)) {
                continue;
            }

            if (data[key] && key == 'nodes') {
                this.nodes = TreeData.fromArray(data[key]);
            } else {
                this[key] = data[key];
            }
            this.propList.push(key);
        }

        this.refresh();
        return this;
    }

    public static fromArray(nodes: any[]): TreeData[] {
        const result: TreeData[] = [];
        if (!nodes) {
            return result;
        }
        nodes.forEach(node => {
            const td: TreeData = new TreeData();
            td.fromObject(node);
            result.push(td);
        });
        return result;
    }
}

