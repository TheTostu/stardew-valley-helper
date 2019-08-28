import { createAction, props } from '@ngrx/store';

import { Crop } from '../../models/models';

export const addItems = createAction(
  '[Crops list] Add Items',
  props<{ crops: Crop[] }>()
);
