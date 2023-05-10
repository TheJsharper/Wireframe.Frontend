import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { Observable, from } from "rxjs";
import { filter, map } from "rxjs/operators";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Component({
    selector: 'app-lib-details',
    templateUrl: './app-lib-details.component.html',
    styleUrls: ['./app-lib-details.component.scss']
})
export class AppLibDetailsComponent implements OnInit {
    device$!: Observable<Device>;
    data!: Device;
    dataPromised!: Promise<Device>;
    mapData!: Promise<void | Map<string, any>>;
    name!: Promise<string>;

    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {
                this.data = this.router.getCurrentNavigation()?.extras?.state!['selected'];
                this.dataPromised = Promise.resolve(this.data);
            }
        }, (error) => this.dataPromised = Promise.reject(error), () => console.log("completead"));


    }
    ngOnInit(): void {
        if (this.dataPromised != undefined) {
            this.mapData = this.dataPromised
                .then(this.getDataTransformtionToMap)
                .catch(console.error);
            this.name = this.getDeviceName();
        }
    }

    public getDisplayValueGerman(value: any) {
        if (typeof (value) === "boolean") {
            return value ? 'Ja' : 'Nein';
        } else {
            return value;
        }
    }

    public async getDeviceName(): Promise<string> {
        const name = (await this.dataPromised).name;
        return name;
    }

    private getDataTransformtionToMap(value: Device): Map<string, any> {
        return Object.entries(value).reduce((prev: Map<string, any>, cur: [string, any]) => {
            prev.set(cur[0], cur[1]);
            return prev;
        }, new Map<string, any>());
    }
}