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
    constructor(private route: ActivatedRoute, private router: Router) {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {
                this.device$ = this.router.getCurrentNavigation()?.extras?.state!['selected'];
            }
        });


    }
    ngOnInit(): void {

        this.device$ = this.route.queryParams.pipe(
            filter((value: Params) => (this.router.getCurrentNavigation()?.extras.state == null &&
                this.router.getCurrentNavigation()?.extras.state == undefined
            )),
            map<Params, Device>((value: Params) => (this.router.getCurrentNavigation()?.extras?.state!['selected']))
        );

    }
}