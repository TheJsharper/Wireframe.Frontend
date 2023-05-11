import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { WireframeModel } from "../micro-apps/wireframes/models/app.wireframes.model";
import { AppWireframesService } from "../micro-apps/wireframes/services/app.wireframes.services";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AppWireframeResolver implements Resolve<WireframeModel>{
    constructor(private appWireframesService: AppWireframesService) {
            console.log("Resolver")
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<WireframeModel> | Promise<WireframeModel> | WireframeModel {
        const data = this.appWireframesService.data();

        //return this.appWireframesService.getWireFrameModel();
        return this.appWireframesService.uploadWireframeModel(data);
    }

}