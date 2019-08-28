import { ActionReducerMap } from '@ngrx/store';

import {
  cropsListReducer,
  CropsListState,
} from './crops-list/crops-list.reducer';
import {
  datePickerReducer,
  DatePickerState,
} from './date-picker/date-picker.reducer';

export interface StardewState {
  datePicker: DatePickerState;
  cropsList: CropsListState;
}

export const stardewReducers: ActionReducerMap<StardewState, any> = {
  datePicker: datePickerReducer,
  cropsList: cropsListReducer,
};
