import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Injectable()
export class AppLibHomeService {
    constructor(private httpClient: HttpClient) {  }

    deleteDeviceFromContainer(parentId:string, device:Device):Observable<Device>{

        const endpoint:string = `http://localhost:5207/Wireframe/ModifyDevice/${parentId}/${device.id}`;
        
        return this.httpClient.delete<Device>(endpoint)
    }
    

}