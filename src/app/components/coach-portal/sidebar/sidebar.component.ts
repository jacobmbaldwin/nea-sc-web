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

  protected onAddEvent(): void {
    this.isActiveChange.emit('addEvent');
  }

  protected onScholarshipRequests(): void {
    this.isActiveChange.emit('scholarshipRequests');
  }

  protected onViewDocuments(): void {
    this.isActiveChange.emit('viewDocuments');
  }

  protected onViewRosters(): void {
    this.isActiveChange.emit('viewRosters');
  }

  onClubContacts(): void {
    this.isActiveChange.emit('clubContacts');
  }

}
