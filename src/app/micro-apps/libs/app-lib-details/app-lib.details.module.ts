import { NgModule } from "@angular/core";
import { AppLibDetailsComponent } from "./components/app-lib-details.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [AppLibDetailsComponent],
    imports: [

        RouterModule.forChild([
            { path: '', component: AppLibDetailsComponent }
        ]),

        CommonModule
    ],
    exports: [AppLibDetailsComponent, RouterModule]
})
export class AppLibDetailsModule { }