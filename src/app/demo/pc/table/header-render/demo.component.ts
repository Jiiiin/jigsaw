import {Component, TemplateRef, ViewChild} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {TableData} from "jigsaw/common/core/data/table-data";
import {ColumnDefine} from "jigsaw/pc-components/table/table-typings";


@Component({
    templateUrl: './demo.component.html'
})
export class TableSetHeaderRenderDemoComponent {

    @ViewChild("headerRender") headerRender: TemplateRef<any>;

    tableData: TableData;

    constructor(http: HttpClient) {
        this.tableData = new TableData();
        this.tableData.http = http;
        this.tableData.fromAjax('mock-data/hr-list');
    }

    columns: ColumnDefine[] = [
        {
            target: ['name', 'position'],
            header: {
                // 通过ViewChild获取的TemplateRef,在AfterViewInit之后才能拿到,这边必须采用异步获取。
                renderer: () => this.headerRender
            }
        }
    ];

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawTable.columnDefines',
        'ColumnDefine',
        'TableHeader.renderer'
    ];
}



