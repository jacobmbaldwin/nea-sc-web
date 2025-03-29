import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ScholarshipsService } from '../../../service/scholarships.service';
import { ScholarshipRequestModel } from '../../../models/scholarship-request.model';
import { CalendarService } from '../../../service/calendar.service';

@Component({
  selector: 'app-scholarship-requests',
  standalone: true,
  imports: [
    MatTableModule,
    MatButtonModule
  ],
  templateUrl: './scholarship-requests.component.html',
  styleUrl: './scholarship-requests.component.css'
})

export class ScholarshipRequestsComponent {

  displayedColumns: string[] = ['firstName', 'lastName', 'birthDate', 'gender', 'viewMore'];
  dataSource: ScholarshipRequestModel[];

  constructor(
    private scholarshipsService: ScholarshipsService,
    protected calendarService: CalendarService
  ) {

    this.dataSource = [];
    this.loadScholarshipRequests();

  }

  loadScholarshipRequests(): void {
    this.scholarshipsService.getScholarshipRequests().subscribe(scholarshipRequests => {
      this.dataSource = scholarshipRequests
    })
  }

}
