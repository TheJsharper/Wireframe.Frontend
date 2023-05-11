import { Injectable } from "@angular/core";
import { AppLibHomeModule } from "../app-lib.home.module";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: AppLibHomeModule
})
export class AppLibHomeService {
    constructor(private httpClient: HttpClient) {  }

    

}