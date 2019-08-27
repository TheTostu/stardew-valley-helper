import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { StardewDate, Season, WeekDay } from 'src/app/models/models';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  @ViewChild('dateForm', { static: true }) dateForm: NgForm;
  @Output() dateChanged = new EventEmitter<StardewDate>();

  date: StardewDate;

  weekDay$: Observable<string>;
  stringDate$: Observable<string>;

  getStringDate(): string {
    return `Day ${this.date.day} of ${this.date.season} Year ${this.date.year}.`;
  }

  getWeekDay(): string {
    const weekDays = [
      WeekDay.MONDAY,
      WeekDay.TUESDAY,
      WeekDay.WEDNESDAY,
      WeekDay.THURSDAY,
      WeekDay.FRIDAY,
      WeekDay.SATURDAY,
      WeekDay.SUNDAY
    ];

    return weekDays[(this.date.day - 1) % 7];
  }

  ngOnInit() {
    this.date = { day: 1, season: Season.SPRING, year: 1 };

    this.dateForm.valueChanges.forEach(() => {
      this.dateChanged.emit(this.date);
    });

    this.stringDate$ = this.dateForm.valueChanges.pipe(
      map(x => this.getStringDate())
    );

    this.weekDay$ = this.dateForm.valueChanges.pipe(
      map(x => this.getWeekDay())
    );
  }
}
