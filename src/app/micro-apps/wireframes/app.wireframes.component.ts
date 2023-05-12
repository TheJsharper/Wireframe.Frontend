import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-wireframes',
    template: '<router-outlet></router-outlet>'
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
