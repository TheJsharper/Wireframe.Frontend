import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppLibDetailsComponent } from "../app-lib-details/components/app-lib-details.component";
import { AppLibStatusCardModule } from "../app-lib-status-card/app-lib-status-card.module";
import { AppLibHomeComponent } from "./components/app-lib-home.component";
import { AppLibDetailsModule } from "../app-lib-details/app-lib.details.module";

@NgModule({
    declarations:[AppLibHomeComponent],
    imports:[CommonModule, RouterModule.forChild([
        {path:"", redirectTo:"home", pathMatch:'full'},
        {path:'', component: AppLibHomeComponent,
            /*children:[
               // {path:"", redirectTo:"details", pathMatch:'full'},
                {path:'details', component:AppLibDetailsComponent},
            ]*/
        },
        {path:'details', component:AppLibDetailsComponent},
    ]),  AppLibStatusCardModule, CommonModule,/* AppLibDetailsModule*/],
    exports:[AppLibHomeComponent]
})
export class AppLibHomeModule{
}