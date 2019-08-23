import { Component, OnInit } from '@angular/core';
import { CropsService } from './services/crops.service';
import { Crop } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private cropsService: CropsService) {}

  crops: Crop[];
  title = 'stardew-valley-helper';

  ngOnInit() {
    this.cropsService.getCrops().subscribe(heroes => (this.crops = heroes));
  }
}
