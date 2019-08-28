import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CropsListComponent } from './components/crops-list/crops-list.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FilterSeasonPipe } from './pipes/filter-season.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { WeekDayPipe } from './pipes/week-day.pipe';
import { metaReducers, reducers } from './reducers';

@NgModule({
  declarations: [
    AppComponent,
    DatePickerComponent,
    CropsListComponent,
    FilterSeasonPipe,
    FormatDatePipe,
    WeekDayPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
