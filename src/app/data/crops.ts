import { Crop, Season } from '../models/models';

export const CROPS_LIST: Crop[] = [
  // SPRING
    {
        name: 'Blue Jazz',
        harvestTime: 7,
        imgUrl: 'assets/Blue_Jazz.png',
        seedImgUrl: 'assets/Jazz_Seeds.png',
        seasons: [Season.SPRING],
    },
  // SUMMER
    {
      name: 'Tomato',
      harvestTime: 11,
      imgUrl: 'assets/Tomato.png',
      seedImgUrl: 'assets/Tomato_Seeds.png',
      seasons: [Season.SUMMER],
    }
];
