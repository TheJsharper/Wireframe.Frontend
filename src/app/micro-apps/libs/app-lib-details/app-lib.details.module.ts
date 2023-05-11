import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatListModule } from '@angular/material/list';
import { RouterModule } from "@angular/router";
import { AppLibDetailsComponent } from "./components/app-lib-details.component";

@NgModule({
    declarations: [AppLibDetailsComponent],
    imports: [CommonModule,
        MatListModule,
        MatButtonModule,
        CommonModule

    ],
    exports: [AppLibDetailsComponent, RouterModule]
})
export class AppLibDetailsModule { }