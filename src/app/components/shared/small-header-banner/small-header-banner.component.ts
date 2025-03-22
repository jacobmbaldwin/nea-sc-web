import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-small-header-banner',
  standalone: true,
  imports: [],
  templateUrl: './small-header-banner.component.html',
  styleUrl: './small-header-banner.component.css'
})
export class SmallHeaderBannerComponent {
  @Input() imagePath: string;
  @Input() heading: string;

  constructor() {
    this.imagePath = '';
    this.heading = '';
  }

}
