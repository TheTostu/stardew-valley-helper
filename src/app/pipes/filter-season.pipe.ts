import { Pipe, PipeTransform } from '@angular/core';
import { Crop, Season } from '../models/models';

@Pipe({
  name: 'filterSeason',
})
export class FilterSeasonPipe implements PipeTransform {
  transform(crops: Crop[], season: Season): any {
    return crops.filter(crop => crop.seasons.includes(season));
  }
}
