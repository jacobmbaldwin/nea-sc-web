import { Component } from '@angular/core';
import { CalendarService } from '../../../service/calendar.service';
import { EventModel } from '../../../models/event.model';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DatePipe } from '@angular/common';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { EventDialogComponent } from '../../../dialogs/event-dialog/event-dialog.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatCardModule, MatToolbarModule, MatDialogModule, DatePipe],
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  currentDate: Date = new Date();
  events: EventModel[] = [];
  daysInMonth: number[] = [];
  weekDays: string[] = ['SUN', 'MON', 'TUES', 'WED', 'THURS', 'FRI', 'SAT'];
  emptyCells: number;

  constructor(
    private eventService: CalendarService,
    private dialog: MatDialog
  ) {
    this.loadEvents();
    this.generateCalendar();
    this.emptyCells = 0;
    
  }

  loadEvents(): void {
    this.eventService.getEvents().subscribe(events => {
      this.events = events;
    });
  }

  generateCalendar(): void {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();

    // Get the number of days in the month
    const days = new Date(year, month + 1, 0).getDate();
    this.daysInMonth = Array.from({ length: days }, (_, i) => i + 1);

    // Get the weekday of the 1st day of the month
    const firstDay = new Date(year, month, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.

    // Calculate the number of empty cells before the first day of the month
    this.emptyCells = firstDay;
  }
  
  isEmptyCell(index: number): boolean {
    return index < this.emptyCells;
  }

  changeMonth(offset: number): void {
    this.currentDate = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + offset, 1);
    this.generateCalendar();
  }

  getEventsForDate(day: number): EventModel[] {
    const dateString = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth(), day).toDateString();
    return this.events.filter(event => new Date(event.date).toDateString() === dateString);
  }

  protected onOpenEvent(event: EventModel) {
    
        const config: MatDialogConfig = {
          data: event,
          width: '90%',
          maxWidth: '500px',
          disableClose: false,
          autoFocus: true,
          hasBackdrop: true
        };
    
        this.dialog.open(EventDialogComponent, config);
        
      }

      trackByEvent(index: number, event: EventModel): string {
        return `${event.title}-${event.date}`;
      }
}
