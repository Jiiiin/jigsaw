import {NgModule} from "@angular/core";
import {JigsawGraphModule} from "jigsaw/component/graph/index";
import {GlGraphComponent} from "./demo.component";
import {JigsawDemoDescriptionModule} from "app/demo-description/demo-description";

@NgModule({
    declarations: [GlGraphComponent],
    exports: [GlGraphComponent],
    imports: [JigsawGraphModule, JigsawDemoDescriptionModule]
})
export class GlGraphModule {

}
