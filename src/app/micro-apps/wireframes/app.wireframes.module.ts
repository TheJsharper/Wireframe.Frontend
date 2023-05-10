import { NgModule } from "@angular/core";
import { AppWireframesComponent } from "./app.wireframes.component";
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { RouterModule } from "@angular/router";
import { AppLibStatusCardModule } from "../libs/app-lib-status-card/app-lib-status-card.module";
import { AppWireframesService } from "./services/app.wireframes.services";
import { CommonModule } from "@angular/common";


@NgModule({
    declarations:[AppWireframesComponent],
    exports:[],
    imports:[
        MatCardModule,
        MatRadioModule,
        MatCheckboxModule,
        FormsModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatButtonModule, MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        RouterModule.forChild([
            {path:'' , component:AppWireframesComponent}
        ]),
        AppLibStatusCardModule,
        CommonModule
    ],
    providers: [MatIconRegistry, AppWireframesService],
})
export class AppWireframesModule{}