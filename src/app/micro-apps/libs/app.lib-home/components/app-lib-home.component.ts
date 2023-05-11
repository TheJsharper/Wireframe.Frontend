import { AfterContentChecked, ChangeDetectorRef, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, map } from "rxjs";
import { Device, WireframeModel } from "src/app/micro-apps/wireframes/models/app.wireframes.model";

@Component({
  selector: 'app-lib-details',
  templateUrl: './app-lib-home.component.html',
  styleUrls: ['./app-lib-home.component.scss']
})
export class AppLibHomeComponent implements AfterContentChecked {
  devices$!: Observable<Device[]>;

  wireframes$!:Observable<WireframeModel[]>;

  step = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private changeDetector: ChangeDetectorRef) { }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit(): void {
    this.wireframes$ = this.activatedRoute.data.pipe(map(({ wireframes }) => wireframes));
  }



  async onSelect(device: Device): Promise<void> {
    console.log("Selected", device);

    const result = await this.router.navigate(['details'], { state: { selected: device }, relativeTo: this.activatedRoute });
    console.log("==Y", result, this.activatedRoute.url, this.router)
  }
}