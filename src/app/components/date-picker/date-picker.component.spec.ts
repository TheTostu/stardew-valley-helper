import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerComponent } from './date-picker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { WeekDayPipe } from '../../pipes/week-day.pipe';

describe('DatePickerComponent', () => {
  let component: DatePickerComponent;
  let fixture: ComponentFixture<DatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DatePickerComponent, FormatDatePipe, WeekDayPipe],
      imports: [FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
