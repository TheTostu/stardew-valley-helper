import { Action, createReducer, on } from '@ngrx/store';

import { Crop } from '../../models/models';
import { addItems } from './crops-list.action';
export interface CropsListState {
  crops: Crop[];
}

export const initialState: CropsListState = {
  crops: [],
};

const reducer = createReducer(
  initialState,
  on(addItems, (state, { crops }) => ({ ...state, crops }))
);

export function cropsListReducer(
  state: CropsListState | undefined,
  action: Action
) {
  return reducer(state, action);
}
