import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/events.model';
import {User}    from '../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class EventService {

 // private apiUrl = 'http://localhost:8097/events';

  private apiUrl = 'http://localhost:8097';
  constructor(private http: HttpClient) { }
/*
  getAllEvents(headers: HttpHeaders): Observable<Event[]> {
    return this.http.get<Event[]>(`${this.apiUrl}/events`);
  }
*/
  getAllEvents() {
    return this.http.get(`${this.apiUrl}/events`);
  }
  getEventById(eventId: number): Observable<Event> {
    return this.http.get<Event>(`${this.apiUrl}/${eventId}`);
  }

  createEvent(event: Event): Observable<Event> {
    return this.http.post<Event>(`${this.apiUrl}/Post`, event);
  }
  addEvent(event : any) {
    return this.http.post(`${this.apiUrl}/Post`, event);
  }
  updateEvent(event: Event): Observable<Event> {
    return this.http.put<Event>(`${this.apiUrl}/${event.idEvents}`, event);
  }

  deleteEvent(eventId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${eventId}`);
  }
  registerUserForEvent(eventId: number, userId: number): Observable<string> {
    const url = `${this.apiUrl}/events/${eventId}/register/${userId}`;
    return this.http.post<string>(url, null);
  }
  getStatisticsAsPdf(): Observable<HttpResponse<Blob>> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/pdf'
    });
    return this.http.get<Blob>(this.apiUrl, {
      headers: headers,
      responseType: 'blob' as 'json',
      observe: 'response'
    });
  }
}
