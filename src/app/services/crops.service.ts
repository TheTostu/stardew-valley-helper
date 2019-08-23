import { Injectable } from "@angular/core";
import { Crop } from "../models/models";
import { CROPS_LIST } from "../data/crops";
import { of, Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class CropsService {

  constructor() { }

  getCrops(): Observable<Crop[]> {
    return of(CROPS_LIST);
  }
}
