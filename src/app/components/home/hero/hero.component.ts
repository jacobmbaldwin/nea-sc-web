import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

}
