import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from '../event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css'],
})
export class CreateEventComponent implements OnInit {
  eventForm: FormGroup;
  errorMessage: string;
  constructor(
    private fb: FormBuilder,
    private eService: EventService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.eventForm = this.fb.group({
      eventName: ['', Validators.required],
      eventDetails: ['', Validators.required],
      eventStartDate: [''],
      eventEndDate: [''],
      eventLanguage: ['', Validators.required],
      eventLocaion: ['', Validators.required]
     
    });
  }

  addEvent() {
    this.eService.addEvent(this.eventForm.value).subscribe(
      (res: any) => {
        this.router.navigate(['/event/admin/list']);
      },
      (error: any) => {
        this.errorMessage = error;
      }
    );
  }
}
