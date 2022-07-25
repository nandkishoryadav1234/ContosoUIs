import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, pipe, throwError } from 'rxjs';
import { Event } from './event';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class EventService {
  private url = 'http://localhost:46763/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private httpClient: HttpClient) {}

  getAllEvent(): Observable<Event[]> {
    return this.httpClient
      .get<Event[]>(this.url + '/Events')
      .pipe(catchError(this.handleError));
  }

  deleteEvent(eventId: number): Observable<Event> {
    return this.httpClient
      .delete<Event>(this.url + '/Events/' + eventId)
      .pipe(catchError(this.handleError));
  }

  addEvent(event: any): Observable<any> {
    return this.httpClient
      .post<Event>(
        this.url + '/Events',
        JSON.stringify(event),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  updateEvent(event: any): Observable<any> {
    console.log(event);
    return this.httpClient
      .put<Event>(
        this.url + '/Events/'+ event.id,
        JSON.stringify(event),
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  

  getEventById(id: any): Observable<Event> {
    return this.httpClient
      .get<Event>(this.url + '/Events/' + id)
      .pipe(catchError(this.handleError));
  }

  handleError(eResponse: HttpErrorResponse) {
    if (eResponse.error instanceof ErrorEvent) {
      console.log('Client Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    } else {
      console.log('Server Side Error =' + eResponse.error.message);
      console.log('Status Code=' + eResponse.status);
    }
    return throwError(eResponse.error.message);
  }
}
