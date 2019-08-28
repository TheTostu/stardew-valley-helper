import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Crop, CropStatus, StardewDate } from 'src/app/models/models';
import { CropsService } from 'src/app/services/crops.service';

import { StardewState } from '../../+state';
import { addItems } from '../../+state/crops-list/crops-list.action';
import {
  selectCropsBySeason,
  selectCropsList,
} from '../../+state/crops-list/crops-list.selector';

@Component({
  selector: 'app-crops-list',
  templateUrl: './crops-list.component.html',
  styleUrls: ['./crops-list.component.scss'],
})
export class CropsListComponent implements OnInit {
  constructor(
    private cropsService: CropsService,
    private store: Store<StardewState>
  ) {}

  readonly CropStatus = CropStatus;

  selectCropsBySeason$ = this.store.select(selectCropsBySeason);

  ngOnInit() {
    this.store.dispatch(addItems({ crops: this.cropsService.getCrops() }));
  }
}
