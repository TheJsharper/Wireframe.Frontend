import { Component, Input } from "@angular/core";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Component({
    selector: 'app-lib-status-card',
    templateUrl: './app-lib-status-card.component.html',
    styleUrls: ['app-lib-status-card.component.scss']
})
export class AppLibStatusCardComponent { 

    @Input({required:true}) device!:Device;
}