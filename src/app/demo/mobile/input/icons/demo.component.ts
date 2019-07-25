import {Component, ViewChild} from "@angular/core";
import {JigsawMobileInput} from "jigsaw/mobile-components/input/input";

@Component({
    templateUrl: './demo.component.html'
})
export class InputPrefixIconDemoComponent {

    @ViewChild('myInput', {static: false}) myInput: JigsawMobileInput;

    click() {
        alert('你输入的值是 ' + this.myInput.value)
    }

    // ====================================================================
    // ignore the following lines, they are not important to this demo
    // ====================================================================
    summary: string = '左右侧可以有多个图标，并且有交互';
    description: string = '';
    tags: string[] = [
        'JigsawMobileInput',
    ];
}

