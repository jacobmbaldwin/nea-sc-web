import { Component } from '@angular/core';
import { SmallHeaderBannerComponent } from "../shared/small-header-banner/small-header-banner.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SmallHeaderBannerComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
