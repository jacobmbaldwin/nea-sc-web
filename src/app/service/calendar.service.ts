import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventModel } from '../models/event.model';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private readonly eventsDataUrl: string;

  constructor(
    private http: HttpClient,
    private environmentService: EnvironmentService
  ) {

    this.eventsDataUrl = this.environmentService.ROOT_URL + '/events';

  }

  getEvents(): Observable<EventModel[]> {
    return this.http.get<EventModel[]>(this.eventsDataUrl);
  }

  postEvent(event: EventModel): Observable<EventModel> {
    return this.http.post<EventModel>(this.eventsDataUrl, event)
  }

  formatDate(date: Date): string {
    if (!date) return '';

    const parsedDate = date instanceof Date ? date : new Date(date); // Ensure it's a Date object
  
    if (isNaN(parsedDate.getTime())) return ''; // Handle invalid date
  
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0');
    const day = parsedDate.getDate().toString().padStart(2, '0');
    const year = parsedDate.getFullYear().toString();
  
    return `${month}/${day}/${year}`;
  }
  
  
}
