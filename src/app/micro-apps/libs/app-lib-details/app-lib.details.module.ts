import { NgModule } from "@angular/core";
import { AppLibDetailsComponent } from "./components/app-lib-details.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import {MatListModule} from '@angular/material/list';

@NgModule({
    declarations: [AppLibDetailsComponent],
    imports: [

        RouterModule.forChild([
            { path: '', component: AppLibDetailsComponent }
        ]),

        CommonModule,
        MatListModule
        
    ],
    exports: [AppLibDetailsComponent, RouterModule]
})
export class AppLibDetailsModule { }