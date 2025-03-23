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
  
  
}
