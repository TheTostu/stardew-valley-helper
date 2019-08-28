import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Season, StardewDate } from 'src/app/models/models';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  constructor() {}

  readonly Season = Season;

  @Output() dateChanged = new EventEmitter<StardewDate>();

  dateForm = new FormGroup({
    day: new FormControl(1, [
      Validators.required,
      Validators.min(1),
      Validators.max(28),
    ]),
    season: new FormControl(Season.SPRING),
    year: new FormControl(1, [Validators.required, Validators.min(1)]),
  });

  date: StardewDate;

  ngOnInit() {}
}
