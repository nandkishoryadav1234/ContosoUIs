


import { Component, OnInit } from '@angular/core';
import { Event } from '@angular/router';
import { EventService } from '../event/event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topRatedEvents: Event[];
  latestEvents: Event[];
  constructor(private eService: EventService) {}
  

   ngOnInit(): void {

  //   this.eService.getAllEvent().subscribe((data: Event[]) => {
  //     this.topRatedEvents = data
  //       .sort((a, b) => (a.eventRating > b.eventRating ? -1 : 1))
  //       .slice(0, 8);
  //   });
  //   this.eService.getAllEvent().subscribe((data: Event[]) => {
  //     this.latestEvents = data
  //       .sort((a, b) => (a.eventDate > b.eventDate ? -1 : 1))
  //       .slice(0, 3);
  //   });
  }
}





// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { UserService } from '../shared/user.service';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styles: []
  
// })
// export class HomeComponent implements OnInit {
//   userDetails: any;

//   constructor(private router:Router, private service:UserService) { }

//   ngOnInit() {
// this.service.getUserProfile().subscribe(
//   res => { 
//     this.userDetails =res;
//   },
//   err =>{
//     console.log(err);
//   },
// );

//   }
//   onLogout(){
//     localStorage.removeItem('token');
//     this.router.navigate(['/user/login']);
//   }

// }
