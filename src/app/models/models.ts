export interface Crop {
    name: string;
    harvestTime: number;
    regrowthTime?: number;
    imgUrl: string;
    seedImgUrl: string;
}

export enum Season {
    SPRING = "SPRING",
    SUMMER = "SUMMER",
    AUTUMN = "AUTUMN",
    WINTER = "WINTER",
}

export enum WeekDay {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY",
}

export interface StardewDate {
    day: number;
    season: Season;
    year: number;
}