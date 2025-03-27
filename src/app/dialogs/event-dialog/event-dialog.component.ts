import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CalendarService } from '../../service/calendar.service';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatIconModule],
  templateUrl: './event-dialog.component.html',
  styleUrl: './event-dialog.component.css'
})
export class EventDialogComponent {
  formattedDate: string;

  constructor(
    private dialogRef: MatDialogRef<EventDialogComponent>,
    private calendarService: CalendarService,
    @Inject(MAT_DIALOG_DATA) public data: EventModel
  ) {
    this.formattedDate = calendarService.formatDate(data.date);
  }

  protected onClose(): void {
    this.dialogRef.close();
  }


}
