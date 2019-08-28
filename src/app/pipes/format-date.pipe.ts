import { Pipe, PipeTransform } from '@angular/core';
import { StardewDate } from '../models/models';

@Pipe({
  name: 'formatDate',
})
export class FormatDatePipe implements PipeTransform {
  transform(date: StardewDate, ...args: any[]): any {
    return `Day ${date.day} of ${date.season} Year ${date.year}.`;
  }
}
