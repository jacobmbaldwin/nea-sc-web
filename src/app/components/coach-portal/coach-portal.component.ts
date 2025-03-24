import { Component } from '@angular/core';
import { AddEventComponent } from "./add-event/add-event.component";
import { SmallHeaderBannerComponent } from '../shared/small-header-banner/small-header-banner.component';

@Component({
  selector: 'app-coach-portal',
  standalone: true,
  imports: [AddEventComponent, SmallHeaderBannerComponent],
  templateUrl: './coach-portal.component.html',
  styleUrl: './coach-portal.component.css'
})
export class CoachPortalComponent {

}
