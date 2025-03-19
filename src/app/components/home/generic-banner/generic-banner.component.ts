import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-generic-banner',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './generic-banner.component.html',
  styleUrl: './generic-banner.component.css'
})
export class GenericBannerComponent {


  protected onRegister() {
    console.log('Woohoo!')
  }
}
