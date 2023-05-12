import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from "@angular/material/button";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";
import { AppLibDetailsModule } from "../app-lib-details/app-lib.details.module";
import { AppLibDetailsComponent } from "../app-lib-details/components/app-lib-details.component";
import { AppLibStatusCardModule } from "../app-lib-status-card/app-lib-status-card.module";
import { AppLibHomeComponent } from "./components/app-lib-home.component";
import { AppLibHomeService } from "./services/app-lib-home.service";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
    declarations: [AppLibHomeComponent],
    imports: [CommonModule,
        RouterModule.forChild([
            { path: "", redirectTo: "home", pathMatch: 'full' },
            { path: '', component: AppLibHomeComponent },
            { path: 'details', component: AppLibDetailsComponent },
        ]),
        CommonModule,
        MatExpansionModule,
        MatIconModule,
        MatFormFieldModule,
        MatDatepickerModule,
        FormsModule,
        MatNativeDateModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        
        AppLibStatusCardModule,
        AppLibDetailsModule],
    exports: [AppLibHomeComponent],
    providers:[AppLibHomeService]
})
export class AppLibHomeModule {
}