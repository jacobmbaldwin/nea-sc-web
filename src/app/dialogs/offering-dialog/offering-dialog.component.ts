import {Component, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {OfferingModel} from "../../models/offering.model";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-offering-dialog',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './offering-dialog.component.html',
  styleUrl: './offering-dialog.component.css'
})
export class OfferingDialogComponent {

  constructor(
    private dialogRef: MatDialogRef<OfferingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: OfferingModel
  ) {
  }


  protected onClose(): void {
    this.dialogRef.close();
  }
}
