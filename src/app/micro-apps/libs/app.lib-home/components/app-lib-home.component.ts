import { AfterContentChecked, ChangeDetectorRef, Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Observable, filter, map, mergeMap } from "rxjs";
import { Device, WireframeModel } from "src/app/micro-apps/wireframes/models/app.wireframes.model";
import { AppLibHomeService } from "../services/app-lib-home.service";
import { AppWireframesService } from "src/app/micro-apps/wireframes/services/app.wireframes.services";

@Component({
  selector: 'app-lib-details',
  templateUrl: './app-lib-home.component.html',
  styleUrls: ['./app-lib-home.component.scss']
})
export class AppLibHomeComponent implements AfterContentChecked {
  devices$!: Observable<Device[]>;

  wireframes$!: Observable<WireframeModel[]>;

  step = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
    private appLibHomeService: AppLibHomeService,
    private appWireframesService: AppWireframesService
  ) { }

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

  onRemove(parentId: string, d: Device): void {
    const wireframesModel: Observable<WireframeModel[]> = this.appWireframesService.getAllWireframes();

    const result: Observable<WireframeModel[]> = this.appLibHomeService.deleteDeviceFromContainer(parentId, d).pipe(
      filter((value: Device) => value && value.id == d.id),
      mergeMap((value: Device) => wireframesModel)
    );
    this.wireframes$ = result;
  }

  async onSelect(device: Device): Promise<void> {

    const result = await this.router.navigate(['details'], { state: { selected: device }, relativeTo: this.activatedRoute });

    if (result) console.log("successfully navigated"); else console.error("something was wrong by navigation")
  }
}