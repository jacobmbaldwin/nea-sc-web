import { Component } from '@angular/core';
import { AddEventComponent } from "./add-event/add-event.component";
import { SmallHeaderBannerComponent } from '../shared/small-header-banner/small-header-banner.component';
import { SidebarComponent } from "./sidebar/sidebar.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ScholarshipRequestsComponent} from "./scholarship-requests/scholarship-requests.component";
import {CoachDocumentsComponent} from "./coach-documents/coach-documents.component";
import {ViewRostersComponent} from "./view-rosters/view-rosters.component";
import {ClubContactsComponent} from "./club-contacts/club-contacts.component";

@Component({
  selector: 'app-coach-portal',
  standalone: true,
  imports: [AddEventComponent, SmallHeaderBannerComponent, SidebarComponent, DashboardComponent, ScholarshipRequestsComponent, CoachDocumentsComponent, ViewRostersComponent, ClubContactsComponent],
  templateUrl: './coach-portal.component.html',
  styleUrl: './coach-portal.component.css'
})
export class CoachPortalComponent {

  isActive: string;

  constructor() {
    this.isActive = 'default';
  }

  handleActiveChange(event: string): void {
    this.isActive = event;
  }

}
