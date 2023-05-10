import { NgModule } from "@angular/core";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule } from "@angular/router";
import { AppMdComponent } from "./app.md.component";


@NgModule({
    declarations:[AppMdComponent],
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
            {path:'', component:AppMdComponent}
        ])
    ],
    providers: [MatIconRegistry],
})
export class AppMdModule{}