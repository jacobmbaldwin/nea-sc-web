import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CalendarComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
