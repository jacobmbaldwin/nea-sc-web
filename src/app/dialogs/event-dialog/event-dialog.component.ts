import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { EventModel } from '../../models/event.model';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-event-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
  templateUrl: './event-dialog.component.html',
  styleUrl: './event-dialog.component.css'
})
export class EventDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<EventDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: EventModel
  ) { }

  onClose(): void {
    this.dialogRef.close();
  }


}
