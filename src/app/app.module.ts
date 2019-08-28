import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CropsListComponent } from './components/crops-list/crops-list.component';
import { FilterSeasonPipe } from './pipes/filter-season.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { WeekDayPipe } from './pipes/week-day.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    CropsListComponent,
    FilterSeasonPipe,
    FormatDatePipe,
    WeekDayPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
