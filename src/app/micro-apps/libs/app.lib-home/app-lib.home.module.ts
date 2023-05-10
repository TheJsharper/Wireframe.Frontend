import { NgModule } from "@angular/core";
import { AppLibHomeComponent } from "./components/app-lib-home.component";
import { CommonModule } from "@angular/common";
import { Router, RouterModule } from "@angular/router";
import { AppLibDetailsModule } from "../app-lib-details/app-lib.details.module";
import { AppLibStatusCardModule } from "../app-lib-status-card/app-lib-status-card.module";
import { Device } from "../../wireframes/models/app.wireframes.model";

@NgModule({
    declarations:[AppLibHomeComponent],
    imports:[CommonModule, RouterModule.forChild([
        {path:'', component: AppLibHomeComponent,
            children:[
                {path:'details', component:AppLibDetailsModule},
            ]
        },
     //   {path:'details', component:AppLibDetailsModule},
    ]),  AppLibStatusCardModule, CommonModule],
    exports:[AppLibHomeComponent]
})
export class AppLibHomeModule{
}