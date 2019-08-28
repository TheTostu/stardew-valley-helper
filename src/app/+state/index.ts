import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';

import { environment } from '../../environments/environment';
import {
  datePickerReducer,
  DatePickerState,
} from './date-picker/date-picker.reducer';

export interface StardewReducers {
  datePicker: DatePickerState;
}

export const stardewReducers: ActionReducerMap<StardewReducers, any> = {
  datePicker: datePickerReducer,
};
