import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, iif, mergeMap, of } from "rxjs";
import { WireframeModel } from "../micro-apps/wireframes/models/app.wireframes.model";
import { AppWireframesService } from "../micro-apps/wireframes/services/app.wireframes.services";

@Injectable({ providedIn: 'root' })
export class AppWireframeResolver implements Resolve<WireframeModel[]>{
    constructor(private appWireframesService: AppWireframesService) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WireframeModel[]> | Promise<WireframeModel[]> | WireframeModel[] {


        const data: WireframeModel = this.appWireframesService.data();

        const uploadOperation: Observable<WireframeModel> = this.appWireframesService.uploadWireframeModel(data);

        const wireframes: Observable<WireframeModel[]> = this.appWireframesService.getAllWireframes();

        const updloadJson: Observable<WireframeModel[]> = uploadOperation.pipe(
            mergeMap((_: WireframeModel) => wireframes
            ));
        const result: Observable<WireframeModel[]> = this.appWireframesService.getAllWireframes().pipe(
            mergeMap((values: WireframeModel[]) => iif(() => values.length > 0, of(values), updloadJson)
            ));

        return result;

    }

}