import { Action, createReducer, on } from '@ngrx/store';

import { Season, StardewDate } from '../../models/models';
import { changeDateAction } from './date-picker.actions';

export interface DatePickerState {
  date: StardewDate;
}

export const initialState: DatePickerState = {
  date: { day: 1, season: Season.SPRING, year: 1 },
};

const reducer = createReducer(
  initialState,
  on(changeDateAction, (state, { date }) => ({ ...state, date }))
);

export function datePickerReducer(
  state: DatePickerState | undefined,
  action: Action
) {
  return reducer(state, action);
}
