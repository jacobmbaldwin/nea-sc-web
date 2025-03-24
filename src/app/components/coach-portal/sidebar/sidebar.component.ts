import {Component, EventEmitter, Output} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatIconModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  @Output() isActiveChange: EventEmitter<string> = new EventEmitter<string>();

  addEventIsActive: boolean = false;
  scholarshipRequestsIsActive: boolean = false;
  viewDocumentsIsActive: boolean = false;
  viewRostersIsActive: boolean = false;
  clubContactsIsActive: boolean = false;

  protected onAddEvent(): void {
    this.isActiveChange.emit('addEvent');
    this.addEventIsActive = true;
    this.scholarshipRequestsIsActive = false;
    this.clubContactsIsActive = false;
    this.viewDocumentsIsActive = false;
    this.viewRostersIsActive = false;
  }

  protected onScholarshipRequests(): void {
    this.isActiveChange.emit('scholarshipRequests');
    this.scholarshipRequestsIsActive = true;
    this.addEventIsActive = false;
    this.clubContactsIsActive = false;
    this.viewDocumentsIsActive = false;
    this.viewRostersIsActive = false;
  }

  protected onViewDocuments(): void {
    this.isActiveChange.emit('viewDocuments');
    this.viewDocumentsIsActive = true;
    this.addEventIsActive = false;
    this.scholarshipRequestsIsActive = false;
    this.clubContactsIsActive = false;
    this.viewRostersIsActive = false;
  }

  protected onViewRosters(): void {
    this.isActiveChange.emit('viewRosters');
    this.viewRostersIsActive = true;
    this.addEventIsActive = false;
    this.scholarshipRequestsIsActive = false;
    this.clubContactsIsActive = false;
    this.viewDocumentsIsActive = false
  }

  protected onClubContacts(): void {
    this.isActiveChange.emit('clubContacts');
    this.clubContactsIsActive = true;
    this.addEventIsActive = false;
    this.scholarshipRequestsIsActive = false;
    this.viewDocumentsIsActive = false;
    this.viewRostersIsActive = false;
  }

}
