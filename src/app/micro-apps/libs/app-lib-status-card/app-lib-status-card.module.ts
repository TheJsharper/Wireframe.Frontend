import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCardModule } from "@angular/material/card";
import { MatIconModule } from "@angular/material/icon";
import { AppLibStatusCardComponent } from "./components/app-lib-status-card.component";
import { MatButtonModule } from "@angular/material/button";

@NgModule({
    declarations:[AppLibStatusCardComponent],
    imports:[MatCardModule, MatIconModule, MatButtonModule, CommonModule],
    exports:[AppLibStatusCardComponent],
    providers:[]
})
export class AppLibStatusCardModule{}