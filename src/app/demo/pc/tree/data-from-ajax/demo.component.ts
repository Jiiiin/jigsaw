import {Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";


import {ZTreeSettingSetting} from "jigsaw/pc-components/tree/ztree-types"
import {TreeData} from "jigsaw/common/core/data/tree-data";

@Component({
    templateUrl: './demo.component.html'
})
export class ZtreeDemoDataFromAjaxComponent {
    data: TreeData;

    setting: ZTreeSettingSetting = {
        data: {
            key: {
                children: 'nodes',
                name: 'label'
            }
        }
    };

    constructor(public http: HttpClient) {
        this.data = new TreeData();
        this.data.http = http;
        this.data.fromAjax("mock-data/tree-data");
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawTreeExt.data',
        'JigsawTreeExt.setting',
    ];
}

