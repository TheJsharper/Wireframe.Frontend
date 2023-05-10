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
    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            const current = this.router.getCurrentNavigation();
            const extras = current?.extras;
            console.log(current, extras);
            if (this.router.getCurrentNavigation()?.extras.state) {
                this.data = this.router.getCurrentNavigation()?.extras?.state!['selected'];
                console.log("DATTTTTA", this.data);
                this.dataPromised = Promise.resolve(this.data);
            }
        }, (error)=>this.dataPromised = Promise.reject(error), ()=>console.log("completead"));


    }
    ngOnInit(): void {

        this.device$ = this.route.queryParams.pipe(
            /*filter((value: Params) => (this.router.getCurrentNavigation()?.extras.state != null &&
                this.router.getCurrentNavigation()?.extras.state != undefined
            )),*/
            map<Params, Device>((value: Params) => (this.router.getCurrentNavigation()?.extras?.state!['selected']))
        );
        this.device$.subscribe((value:Device)=> console.log("====>", value));
        if(this.dataPromised != undefined){
            this.dataPromised.then((value:Device)=>console.log("promising==> ", value))
            .catch(console.error)
        }

    }
}