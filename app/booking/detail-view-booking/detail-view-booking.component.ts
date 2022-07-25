import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from '../booking';

@Component({
  selector: 'app-detail-view-booking',
  templateUrl: './detail-view-booking.component.html',
  styleUrls: ['./detail-view-booking.component.css']
})
export class DetailViewBookingComponent implements OnInit {
  booking: Booking;
  bookingId: number;
  
  constructor(
    private actRouter: ActivatedRoute,
    private router: Router,
    private bService: BookingService
  ) {}

  ngOnInit(): void {
    this.bookingId = this.actRouter.snapshot.params['bookingId'];
     this.bService.getTotalCost(this.bookingId);
    this.bService.getBookingById(this.bookingId).subscribe((data: Booking) => {
      this.booking = data;
     
    });
  }
}