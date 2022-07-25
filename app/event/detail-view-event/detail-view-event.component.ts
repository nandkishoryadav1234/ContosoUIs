import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-detail-view-event',
  templateUrl: './detail-view-event.component.html',
  styleUrls: ['./detail-view-event.component.css'],
})
export class DetailViewEventComponent implements OnInit {
  event: Event;
  eventId: number;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private eService: EventService
  ) {}

  ngOnInit(): void {
    this.eventId = this.actRouter.snapshot.params['eventId'];
    this.eService.getEventById(this.eventId).subscribe((data: Event) => {
      this.event = data;
    });
  }

  removeEvent(eventId: number) {
    this.eService.deleteEvent(eventId).subscribe((data: Event) => {
      this.ngOnInit();
      console.log(data);
    });
  }
}
