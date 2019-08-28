import { createSelector } from '@ngrx/store';

import { Season } from '../../models/models';
import { selectSeason } from '../date-picker/date-picker.selector';
import { StardewState } from '../index';
import { CropsListState } from './crops-list.reducer';

export const selectCropsList = (state: StardewState) => state.cropsList;

export const selectCropsBySeason = createSelector(
  selectCropsList,
  selectSeason,
  (state: CropsListState, season: Season) =>
    state.crops.filter(crop => crop.seasons.includes(season))
);
