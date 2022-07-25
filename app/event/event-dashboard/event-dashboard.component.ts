import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-event-dashboard',
  templateUrl: './event-dashboard.component.html',
  styleUrls: ['./event-dashboard.component.css'],
})
export class EventDashboardComponent implements OnInit {
  events: any[];
  constructor(private eService: EventService) {}

  ngOnInit(): void {
    this.eService.getAllEvent().subscribe((data: Event[]) => {
      this.events = data;
    });
  }

  removeEvent(eventId: number) {
    this.eService.deleteEvent(eventId).subscribe((data: Event) => {
      this.ngOnInit();
      console.log(data);
    });
  }
}
