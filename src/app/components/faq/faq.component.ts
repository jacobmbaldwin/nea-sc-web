import { Component } from '@angular/core';
import { SmallHeaderBannerComponent } from "../shared/small-header-banner/small-header-banner.component";
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FaqModel } from '../../models/faq.model';
import { FaqService } from '../../service/faq.service';


@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    SmallHeaderBannerComponent,
    MatExpansionModule,
    MatIconModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {
  faqs: FaqModel[];

  constructor(
    faqService: FaqService,
  ) {

    this.faqs = faqService.getFaqs();

  }

}
