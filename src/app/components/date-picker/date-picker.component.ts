import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { debounceTime, distinct, distinctUntilChanged } from 'rxjs/operators';
import { Season, StardewDate } from 'src/app/models/models';

import { StardewState } from '../../+state';
import { changeDateAction } from '../../+state/date-picker/date-picker.actions';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
})
export class DatePickerComponent implements OnInit {
  constructor(private store: Store<StardewState>) {}
  readonly Season = Season;

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

  ngOnInit() {
    this.dateForm.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe(next => {
        this.store.dispatch(changeDateAction({ date: this.dateForm.value }));
      });
  }
}
