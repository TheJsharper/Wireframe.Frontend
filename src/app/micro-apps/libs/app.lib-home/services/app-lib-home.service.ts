import { Injectable } from "@angular/core";
import { AppLibHomeModule } from "../app-lib.home.module";
import { HttpClient } from "@angular/common/http";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";
import { Observable } from "rxjs";

@Injectable()
export class AppLibHomeService {
    constructor(private httpClient: HttpClient) {  }

    deleteDeviceFromContainer(parentId:string, device:Device):Observable<Device>{

        const endpoint:string = `http://localhost:5207/Wireframe/ModifyDevice/${parentId}/${device.id}`;
        
        return this.httpClient.delete<Device>(endpoint)
    }
    

}