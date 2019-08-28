import { createSelector } from '@ngrx/store';

import { StardewState } from '../index';
import { DatePickerState } from './date-picker.reducer';

export const selectDatePicker = (state: StardewState) => state.datePicker;

export const selectDay = createSelector(
  selectDatePicker,
  (state: DatePickerState) => state.date.day
);

export const selectSeason = createSelector(
  selectDatePicker,
  (state: DatePickerState) => state.date.season
);

export const selectYear = createSelector(
  selectDatePicker,
  (state: DatePickerState) => state.date.year
);
