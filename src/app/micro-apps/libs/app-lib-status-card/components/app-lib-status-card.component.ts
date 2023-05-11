import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Component({
    selector: 'app-lib-status-card',
    templateUrl: './app-lib-status-card.component.html',
    styleUrls: ['app-lib-status-card.component.scss']
})
export class AppLibStatusCardComponent {


    @Input({ required: true }) device!: Device;

    @Output("OnSelectedToRemove") target: EventEmitter<Device> = new EventEmitter<Device>();


    onRemove(): void {
        this.target.emit(this.device)
    }
}