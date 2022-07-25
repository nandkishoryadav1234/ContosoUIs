import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AuthGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';
import { EventComponent } from './event/event.component';
import { AllEventsComponent } from './event/all-events/all-events.component';
import { EventDashboardComponent } from './event/event-dashboard/event-dashboard.component';
import { DetailViewEventComponent } from './event/detail-view-event/detail-view-event.component';
import { AdminDetailsComponent } from './event/admin-details/admin-details.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { UpdateEventsComponent } from './event/update-events/update-events.component';
import { BookingComponent } from './booking/booking.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { ListViewBookingComponent } from './booking/list-view-booking/list-view-booking.component';
import { DetailViewBookingComponent } from './booking/detail-view-booking/detail-view-booking.component';

const routes: Routes = [
  {path:'',redirectTo:'/user/login',pathMatch:'full'},
  {
    path: 'user', component: UserComponent,
    children: [
      {path:'registration', component:RegistrationComponent},
      {path:'login', component:LoginComponent}
    ]
  },
  {path: 'home',component:HomeComponent, canActivate:[AuthGuard]},
  {path: 'forbidden',component:ForbiddenComponent},
  {path: 'adminpanel',component:AdminPanelComponent, canActivate:[AuthGuard],data: {permittedRoles:['Admin']}},
  {
    path: 'event',
    component: EventComponent,
    children: [
      { path: '', component: AllEventsComponent },
      { path: 'admin/list', component: EventDashboardComponent },
      { path: 'view/:eventId', component: DetailViewEventComponent },
      { path: 'admin/details/:eventId', component: AdminDetailsComponent },
      { path: 'add', component: CreateEventComponent },
      { path: 'update/:eventId', component: UpdateEventsComponent },
    ],
  },
  {
    path: 'booking',
    component: BookingComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: ListViewBookingComponent },
      { path: 'view/:bookingId', component: DetailViewBookingComponent },
      { path: 'add/:showId', component: CreateBookingComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
