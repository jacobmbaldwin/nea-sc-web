import { Component } from '@angular/core';
import { OfferingCardsComponent } from "./offering-cards/offering-cards.component";
import { HeroComponent } from "./hero/hero.component";
import { GenericBannerComponent } from "./generic-banner/generic-banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [OfferingCardsComponent, HeroComponent, GenericBannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(){

  }

  
}
