import { Component } from '@angular/core';
import { CalendarComponent } from "./calendar/calendar.component";
import { SmallHeaderBannerComponent } from '../shared/small-header-banner/small-header-banner.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CalendarComponent, SmallHeaderBannerComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css'
})
export class EventsComponent {

}
