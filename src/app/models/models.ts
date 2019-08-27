export interface CropObject {
  name: string;
  harvestTime: number;
  regrowthTime?: number;
  imgUrl: string;
  seedImgUrl: string;
  seasons: Season[];
}

export interface Crop extends CropObject {
  status: CropStatus;
}

export enum CropStatus {
  UNAQUIRED = 'UNAQUIRED',
  SEED = 'SEED',
  PLANTED = 'PLANTED',
  HARVESTED = 'HARVESTED',
  COMPLETED = 'COMPLETED',
}

export enum Season {
  SPRING = 'SPRING',
  SUMMER = 'SUMMER',
  AUTUMN = 'AUTUMN',
  WINTER = 'WINTER',
}

export enum WeekDay {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

export interface StardewDate {
  day: number;
  season: Season;
  year: number;
}
