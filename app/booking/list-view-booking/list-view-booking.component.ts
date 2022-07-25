import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-list-view-booking',
  templateUrl: './list-view-booking.component.html',
  styleUrls: ['./list-view-booking.component.css'],
})


export class ListViewBookingComponent implements OnInit {
  bookings: any[];
  event:any;
  totalCost:any;
  

// selected:any;
// public selectedname:any[] ;

 
// NAMES=[1,2,3,4,5]


//   onChangeName($event:any) {

// console.log(this.selectedname);

//   }
  

  constructor(private bService: BookingService) {}

  ngOnInit(): void {
    this.bService.getAllBookings().subscribe((data: any[]) => {
      this.bookings = data;
    });
  
  }
}