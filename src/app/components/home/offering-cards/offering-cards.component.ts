import { Component } from '@angular/core';
import { OfferingsService } from '../../../service/offerings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {OfferingModel} from "../../../models/offering.model";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {OfferingDialogComponent} from "../../../dialogs/offering-dialog/offering-dialog.component";

@Component({
  selector: 'app-offering-cards',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './offering-cards.component.html',
  styleUrl: './offering-cards.component.css'
})
export class OfferingCardsComponent {
  protected offerings: OfferingModel[];

  constructor(
    protected offeringsService: OfferingsService,
    private dialog: MatDialog
  ) {

    this.offerings = this.offeringsService.getOfferings();

  }

  protected onMoreDetails(offering: OfferingModel): void {
    // Open a dialog with more details about the offering
    const config: MatDialogConfig = {
      data: offering,
      width: '90%',
      maxWidth: '800px',
      disableClose: false,
      autoFocus: true,
      hasBackdrop: true
    };

    this.dialog.open(OfferingDialogComponent, config);

  }
}
