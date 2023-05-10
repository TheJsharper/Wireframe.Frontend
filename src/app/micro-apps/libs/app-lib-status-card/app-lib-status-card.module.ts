import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { AppLibStatusCardComponent } from "./components/app-lib-status-card.component";
import { RouterModule } from "@angular/router";
import { AppLibStatusCardHomeComponent } from "./components/app-lib-status-card-home.component";

@NgModule({
    declarations:[AppLibStatusCardComponent],
    imports:[MatCardModule, MatIconModule, CommonModule],
    exports:[AppLibStatusCardComponent],
    providers:[]
})
export class AppLibStatusCardModule{}