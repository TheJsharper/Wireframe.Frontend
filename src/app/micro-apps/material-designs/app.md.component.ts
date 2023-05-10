import { Component } from "@angular/core";

@Component({
    selector: 'app-md',
    templateUrl: './app.md.component.html'
})
export class AppMdComponent {
    checked = false;
    indeterminate = false;
    labelPosition: 'before' | 'after' = 'after';
    disabled = false;
    max = 100;
    min = 0;
    showTicks = false;
    step = 1;
    thumbLabel = false;
    value = 0;
}
