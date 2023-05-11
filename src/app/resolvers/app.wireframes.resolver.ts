import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { WireframeModel } from "../micro-apps/wireframes/models/app.wireframes.model";
import { AppWireframesService } from "../micro-apps/wireframes/services/app.wireframes.services";
import { Observable, combineLatest, filter, mergeMap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppWireframeResolver implements Resolve<WireframeModel[]>{
    constructor(private appWireframesService: AppWireframesService) {
        console.log("Resolver")
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WireframeModel[]> | Promise<WireframeModel[]> | WireframeModel[] {

        const data: WireframeModel = this.appWireframesService.data();

        const uploadOperation: Observable<WireframeModel> = this.appWireframesService.uploadWireframeModel(data);

        const wireframes: Observable<WireframeModel[]> = this.appWireframesService.getAllWireframes();

        const result: Observable<WireframeModel[]> = uploadOperation.pipe(
            filter((value: WireframeModel) => value && value.devices.length > 0),
            mergeMap((_: WireframeModel) => wireframes
            ));

        return result;

    }

}