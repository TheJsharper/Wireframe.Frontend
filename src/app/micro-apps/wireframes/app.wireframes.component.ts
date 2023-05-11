import { Component, OnInit } from "@angular/core";
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
      this.activatedRoute.data.subscribe(({ wireframes }) => {
        console.log("====> ", wireframes);
      })
    }
}
