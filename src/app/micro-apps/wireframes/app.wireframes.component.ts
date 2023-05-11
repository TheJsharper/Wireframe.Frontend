import { Component, OnInit } from "@angular/core";
import { AppWireframesService } from "./services/app.wireframes.services";
import { Device, WireframeModel } from "./models/app.wireframes.model";
import { Observable, map } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-wireframes',
    templateUrl: './app.wireframes.component.html',
    styleUrls:['./app.wireframes.component.scss']
})
export class AppWireframesComponent implements OnInit{
    
    constructor(private activatedRoute: ActivatedRoute) {}

    ngOnInit() {
      console.log("====")
      this.activatedRoute.data.subscribe(({ hero }) => {
        console.log("====> ", hero);
      })
    }
}
