import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { CROPS_LIST } from '../data/crops';
import { Crop, CropStatus } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class CropsService {
  constructor() {}

  getCrops(): Observable<Crop[]> {
    return of(
      CROPS_LIST.map(crop => ({ ...crop, status: CropStatus.UNAQUIRED }))
    );
  }
}
