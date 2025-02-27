/**
 * Created by 10177553 on 2017/3/29.
 */
import {Component, ViewChild} from '@angular/core';
import {JigsawMobileTab} from "jigsaw/mobile-components/tabs/tab";

@Component({
    templateUrl: "./demo.component.html"
})
export class JigsawShowTabComponent {

    @ViewChild('myTab') myTab: JigsawMobileTab;

    showTab() {
        this.myTab.showTab(1);
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '';
    description: string = '';
    tags: string[] = [
        'JigsawMobileTab.showTab',
    ];
}
