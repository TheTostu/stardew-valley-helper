import { Pipe, PipeTransform } from '@angular/core';

import { StardewDate, WeekDay } from '../models/models';

@Pipe({
  name: 'weekDay',
})
export class WeekDayPipe implements PipeTransform {
  transform(date: StardewDate, ...args: any[]): any {
    const weekDays = [
      WeekDay.MONDAY,
      WeekDay.TUESDAY,
      WeekDay.WEDNESDAY,
      WeekDay.THURSDAY,
      WeekDay.FRIDAY,
      WeekDay.SATURDAY,
      WeekDay.SUNDAY,
    ];

    return weekDays[(date.day - 1) % 7];
  }
}
