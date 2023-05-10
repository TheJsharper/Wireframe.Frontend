import { NgModule } from "@angular/core";
import { AppLibStatusCardComponent } from "./components/app-lib-status-card.component";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { CommonModule } from "@angular/common";
import { AppLibDetailsComponent } from "../app-lib-details/app-lib-details.component";

@NgModule({
    declarations:[AppLibStatusCardComponent, AppLibDetailsComponent],
    imports:[MatCardModule, MatIconModule, CommonModule],
    exports:[AppLibStatusCardComponent, AppLibDetailsComponent],
    providers:[]
})
export class AppLibStatusCardModule{}