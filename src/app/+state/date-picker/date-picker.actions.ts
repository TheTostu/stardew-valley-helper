import { createAction, props } from '@ngrx/store';

import { StardewDate } from '../../models/models';

export const changeDateAction = createAction(
  '[Date Picker] Change date',
  props<{ date: StardewDate }>()
);
