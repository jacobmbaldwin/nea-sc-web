import { Component } from '@angular/core';
import { AddEventComponent } from "./add-event/add-event.component";
import { SmallHeaderBannerComponent } from '../shared/small-header-banner/small-header-banner.component';
import { SidebarComponent } from "./sidebar/sidebar.component";

@Component({
  selector: 'app-coach-portal',
  standalone: true,
  imports: [AddEventComponent, SmallHeaderBannerComponent, SidebarComponent],
  templateUrl: './coach-portal.component.html',
  styleUrl: './coach-portal.component.css'
})
export class CoachPortalComponent {

}
