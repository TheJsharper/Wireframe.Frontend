import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { Device } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Component({
  selector: 'app-lib-details',
  templateUrl: './app-lib-home.component.html',
  styleUrls: ['./app-lib-home.component.scss']
})
export class AppLibHomeComponent {
  devices$!: Observable<Device[]>
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.devices$ = this.activatedRoute.data.pipe(map(({ hero }) => hero.devices));
    this.activatedRoute.data.subscribe(({ hero }) => {
      console.log("Router Listener", hero);
    })


    //this.devices$= this.appWireframesService.getWireFrameModel().pipe(map((value:WireframeModel)=> value.devices));

  }



  async onSelect(device: Device): Promise<void> {
    console.log("Selected", device);

    const result = await this.router.navigate(['details'], { state: { selected: device }, relativeTo: this.activatedRoute });
    console.log("==Y", result, this.activatedRoute.url, this.router)
  }
}