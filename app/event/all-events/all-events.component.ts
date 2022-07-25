import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-all-events',
  templateUrl: './all-events.component.html',
  styleUrls: ['./all-events.component.css'],
})
export class AllEventsComponent implements OnInit {
  events: any[];
  genre: string;
  searchArray: any[];
  sortArray: any[];
  eventFilterValue: string;
  constructor(private eService: EventService) {}

  ngOnInit(): void {
    this.eService.getAllEvent().subscribe((data: Event[]) => {
      this.events = data;
      this.searchArray = data;
      this.sortArray = data;
    });
  }

  removeEvent(eventId: number) {
    this.eService.deleteEvent(eventId).subscribe((data: Event) => {
      this.ngOnInit();
      console.log(data);
    });
  }

  searchByEventName() {
    this.events = this.searchArray.filter(
      (data) => data.eventGenre == this.genre
    );
  }

  topRated() {
    this.events = this.sortArray
      .sort((a, b) => (a.eventRating > b.eventRating ? -1 : 1))
      .slice(0, 4);
  }

  latestEvents() {
    this.events = this.sortArray.sort((a, b) =>
      a.eventDate > b.eventDate ? -1 : 1
    );
  }
  allEvents() {
    this.ngOnInit();
  }
}
