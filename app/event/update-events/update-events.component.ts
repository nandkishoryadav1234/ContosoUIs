import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from '../event';
import { EventService } from '../event.service';

@Component({
  selector: 'app-update-events',
  templateUrl: './update-events.component.html',
  styleUrls: ['./update-events.component.css'],
})
export class UpdateEventsComponent implements OnInit {
  eventId: number;
  event: Event;
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private eService: EventService
  ) {}

  ngOnInit(): void {
    this.event = new Event();
    this.eventId = this.actRouter.snapshot.params['eventId'];
    this.eService.getEventById(this.eventId).subscribe((data) => {
      this.event = data;
    });
  }
  updateEvent() {
    this.eService.updateEvent(this.event).subscribe((res) => {
      this.router.navigate(['/event/admin/details', this.eventId]);
    });
  }
}
