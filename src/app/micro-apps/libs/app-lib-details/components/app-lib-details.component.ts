import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Component({
    selector: 'app-lib-details',
    templateUrl: './app-lib-details.component.html',
    styleUrls: ['./app-lib-details.component.scss']
})
export class AppLibDetailsComponent implements OnInit {

    device!: Promise<Device>;

    map!: Map<string, any>;

    name!: string;

    keys!: Array<string>;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {

                const data = this.router.getCurrentNavigation()?.extras?.state!['selected'];
                
                this.device = Promise.resolve(data);
            }
        }, (error) => this.device = Promise.reject(error), () => console.log("completead"));


    }


    async ngOnInit(): Promise<void> {
        if (this.device != undefined) {

            const device = await this.device

            this.map = this.getDataTransformtionToMap(device);

            this.name = device.name;

            this.keys = Array.from(this.map.keys());

        }
    }

    public getDisplayValueGerman(value: any) {
        if (typeof (value) === "boolean") {
            return value ? 'Ja' : 'Nein';
        } else {
            return value;
        }
    }

    public async goBack(): Promise<void> {
        this.router.navigate(['../'], { relativeTo: this.route });
    }

    private getDataTransformtionToMap(value: Device): Map<string, any> {
        return Object.entries(value).reduce((prev: Map<string, any>, cur: [string, any]) => {
            prev.set(cur[0], cur[1]);
            return prev;
        }, new Map<string, any>());
    }
}