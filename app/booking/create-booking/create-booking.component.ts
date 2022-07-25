import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.css'],
})


export class CreateBookingComponent implements OnInit {
  bookingForm: FormGroup;
  errorMessage: string;
 
  constructor(
    private fb: FormBuilder,
    private bService: BookingService,
    private router: Router,
    
  ) {}

  ngOnInit(): void {
    
    this.bookingForm = this.fb.group({
      bookingId:[''],
      userId:[''],
      eventId:[''],
      totalTickets:[''],
      totalCost:[''],
      bookingDate: [''],
    });
  }

  addBooking() {
    this.bService.addBooking(this.bookingForm.value).subscribe(
      (res: any) => {
       
        this.router.navigate(['/booking/list']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}
