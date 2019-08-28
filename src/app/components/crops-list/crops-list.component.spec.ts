import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CropsListComponent } from './crops-list.component';
import { FilterSeasonPipe } from 'src/app/pipes/filter-season.pipe';
import { Season } from 'src/app/models/models';
import {FormatDatePipe} from '../../pipes/format-date.pipe';
import {WeekDayPipe} from '../../pipes/week-day.pipe';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

describe('CropsListComponent', () => {
  let component: CropsListComponent;
  let fixture: ComponentFixture<CropsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CropsListComponent, FilterSeasonPipe, FormatDatePipe, WeekDayPipe],
      imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CropsListComponent);
    component = fixture.componentInstance;
    component.date = { day: 1, season: Season.SPRING, year: 1 };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
