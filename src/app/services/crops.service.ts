import { Injectable } from '@angular/core';

import { CROPS_LIST } from '../data/crops';
import { Crop, CropStatus, Season } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CropsService {
  constructor() {}

  getCrops(): Crop[] {
    return CROPS_LIST.map(crop => ({ ...crop, status: CropStatus.UNAQUIRED }));
  }
}
