import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import { stardewReducers } from './+state';
import { AppComponent } from './app.component';
import { CropsListComponent } from './components/crops-list/crops-list.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FilterSeasonPipe } from './pipes/filter-season.pipe';
import { FormatDatePipe } from './pipes/format-date.pipe';
import { WeekDayPipe } from './pipes/week-day.pipe';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DatePickerComponent,
        CropsListComponent,
        FilterSeasonPipe,
        FormatDatePipe,
        WeekDayPipe,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        StoreModule.forRoot(stardewReducers, {
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true,
          },
        }),
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
