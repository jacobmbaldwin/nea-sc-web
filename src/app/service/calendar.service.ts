import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private mockEvents: EventModel[] = [
    { day: 16, month: 3, year: 2025, title: 'Tournament', location: 'Stadium' },
    { day: 18, month: 3, year: 2025, title: 'Farting Contest', location: 'Bathroom' },
    { day: 20, month: 3, year: 2025, title: 'Practice', location: 'Field' },
    { day: 20, month: 3, year: 2025, title: 'Friendly Match', location: 'Stadium' },
    { day: 28, month: 2, year: 2025, title: 'Leap Year Party', location: 'Club' }, // Example previous month event
    { day: 1, month: 4, year: 2025, time: '6pm', title: 'April Fool’s Joke', location: 'Office' } // Example next month event
  ];

  getEvents(month: number, year: number): Observable<EventModel[]> {
    const filteredEvents = this.mockEvents.filter(event => event.month === month && event.year === year);
    return of(filteredEvents);
  }
}
