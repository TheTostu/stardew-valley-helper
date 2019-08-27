import { Component, OnInit } from '@angular/core';
import { CropsService } from './services/crops.service';
import { Crop, StardewDate, Season } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  date: StardewDate = {
    day: 1,
    season: Season.SPRING,
    year: 1,
  };

  onDateChanged(date: StardewDate) {
    this.date = date;
  }
}
