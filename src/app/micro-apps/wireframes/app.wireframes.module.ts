import { CommonModule } from "@angular/common";
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
import { AppWireframesComponent } from "./app.wireframes.component";


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
            {path:'home' , loadChildren: ()=> import('../libs/app.lib-home/app-lib.home.module').then(m=> m.AppLibHomeModule)}
        ]),
        CommonModule
    ],
providers: [MatIconRegistry/*, AppWireframesService*/],
})
export class AppWireframesModule{
   
}