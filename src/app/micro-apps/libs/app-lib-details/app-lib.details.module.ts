import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import { RouterModule } from "@angular/router";
import { AppLibDetailsComponent } from "./components/app-lib-details.component";

@NgModule({
    declarations: [AppLibDetailsComponent],
    imports: [

        RouterModule.forChild([
            { path: '', component: AppLibDetailsComponent }
        ]),

        CommonModule,
        MatListModule,
        MatButtonModule
        
    ],
    exports: [AppLibDetailsComponent, RouterModule]
})
export class AppLibDetailsModule { }