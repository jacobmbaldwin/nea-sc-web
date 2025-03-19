import { Component } from '@angular/core';
import { OfferingsService } from '../../../service/offerings.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

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
  protected offerings: {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];

  constructor(
    protected offeringsService: OfferingsService,
  ) {

    this.offerings = this.offeringsService.getOfferings();

  }

  protected onMoreDetails(url: string): void {
    console.log(url);
  }
}
