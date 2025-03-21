import { Component, OnInit } from '@angular/core';
import { CalendarService } from '../../../service/calendar.service'; 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { EventModel } from '../../../models/event.model';

interface CalendarDay {
  date: number;
  events: EventModel[];
  isPrevMonth?: boolean;
  isCurrentMonth?: boolean;
  isNextMonth?: boolean;
}

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, MatIconModule, MatCardModule, CommonModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css'
})
export class CalendarComponent implements OnInit {
  month: number = new Date().getMonth() + 1;
  year: number = new Date().getFullYear();
  monthName: string = '';
  days: CalendarDay[] = [];
  weekDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.updateCalendar();
  }

  updateCalendar() {
    const firstDayOfMonth = new Date(this.year, this.month - 1, 1);
    const lastDayOfMonth = new Date(this.year, this.month, 0);
    const firstDayIndex = firstDayOfMonth.getDay();
    const numDays = lastDayOfMonth.getDate();
  
    this.monthName = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(firstDayOfMonth);
  
    let tempDays: CalendarDay[] = [];
  
    // 🔹 1. Get Previous Month Days
    const prevMonth = this.month === 1 ? 12 : this.month - 1;
    const prevYear = this.month === 1 ? this.year - 1 : this.year;
    const prevMonthLastDate = new Date(this.year, this.month - 1, 0).getDate();
    
    for (let i = prevMonthLastDate - firstDayIndex + 1; i <= prevMonthLastDate; i++) {
      tempDays.push({ date: i, events: [], isPrevMonth: true });
    }
  
    // 🔹 2. Get Current Month Days
    for (let i = 1; i <= numDays; i++) {
      tempDays.push({ date: i, events: [], isCurrentMonth: true });
    }
  
    // 🔹 3. Get Next Month Days (to fill full 6 rows)
    const remainingDays = 42 - tempDays.length; // Ensure a 6-row grid
    for (let i = 1; i <= remainingDays; i++) {
      tempDays.push({ date: i, events: [], isNextMonth: true });
    }

    // 🔹 4. Fetch Events for Current, Previous, and Next Month
    this.calendarService.getEvents(this.month, this.year).subscribe(events => {
      this.assignEvents(tempDays, events, true);
    });

    this.calendarService.getEvents(prevMonth, prevYear).subscribe(events => {
      this.assignEvents(tempDays, events, false, true);
    });

    this.calendarService.getEvents(this.month === 12 ? 1 : this.month + 1, this.month === 12 ? this.year + 1 : this.year).subscribe(events => {
      this.assignEvents(tempDays, events, false, false, true);
    });

    this.days = tempDays;
  }

  assignEvents(days: CalendarDay[], events: EventModel[], isCurrent = false, isPrev = false, isNext = false) {
    events.forEach(event => {
      const day = days.find(d => d.date === event.day && (
        (isCurrent && d.isCurrentMonth) ||
        (isPrev && d.isPrevMonth) ||
        (isNext && d.isNextMonth)
      ));
      if (day) day.events.push(event);
    });
  }

  prevMonth() {
    if (this.month === 1) {
      this.month = 12;
      this.year--;
    } else {
      this.month--;
    }
    this.updateCalendar();
  }

  nextMonth() {
    if (this.month === 12) {
      this.month = 1;
      this.year++;
    } else {
      this.month++;
    }
    this.updateCalendar();
  }
}
