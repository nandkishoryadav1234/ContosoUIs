import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserService } from './shared/user.service';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { EventComponent } from './event/event.component';
import { AdminDetailsComponent } from './event/admin-details/admin-details.component';
import { AllEventsComponent } from './event/all-events/all-events.component';
import { CreateEventComponent } from './event/create-event/create-event.component';
import { DetailViewEventComponent } from './event/detail-view-event/detail-view-event.component';
import { EventDashboardComponent } from './event/event-dashboard/event-dashboard.component';
import { UpdateEventsComponent } from './event/update-events/update-events.component';
import { SearchEventPipe } from './event/search-event.pipe';
import { BookingComponent } from './booking/booking.component';
import { CreateBookingComponent } from './booking/create-booking/create-booking.component';
import { DetailViewBookingComponent } from './booking/detail-view-booking/detail-view-booking.component';
import { ListViewBookingComponent } from './booking/list-view-booking/list-view-booking.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RegistrationComponent,
    LoginComponent,
    HomeComponent,
    AdminPanelComponent,
    ForbiddenComponent,
    EventComponent,
    AdminDetailsComponent,
    AllEventsComponent,
    CreateEventComponent,
    DetailViewEventComponent,
    EventDashboardComponent,
    UpdateEventsComponent,
    SearchEventPipe,
    BookingComponent,
    CreateBookingComponent,
    DetailViewBookingComponent,
    ListViewBookingComponent,
    NavbarComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      progressBar:true
    }),
    FormsModule
  ],
  providers: [UserService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
