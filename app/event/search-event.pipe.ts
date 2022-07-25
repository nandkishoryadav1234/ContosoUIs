import { Pipe, PipeTransform } from '@angular/core';
import { Event } from './event';

@Pipe({
  name: 'searchEvent',
})
export class SearchEventPipe implements PipeTransform {

  transform(events: Event[], searchFilter: string): Event[] {
    if (!events || !searchFilter) {
      return events;
    } else {
      return events.filter((event) =>
        event.eventName
          .toLocaleLowerCase()
          .includes(searchFilter.toLocaleLowerCase())
      );
    }
  }
}