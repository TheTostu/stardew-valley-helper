import { Component, OnInit, Input } from '@angular/core';
import { CropsService } from 'src/app/services/crops.service';
import { Crop, CropStatus, StardewDate } from 'src/app/models/models';


@Component({
  selector: 'app-crops-list',
  templateUrl: './crops-list.component.html',
  styleUrls: ['./crops-list.component.scss'],
})
export class CropsListComponent implements OnInit {
  constructor(private cropsService: CropsService) {}

  crops: Crop[];

  readonly CropStatus = CropStatus;

  @Input() date: StardewDate;

  ngOnInit() {
    this.cropsService.getCrops().subscribe(crops => (this.crops = crops));
  }
}
