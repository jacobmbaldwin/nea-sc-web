import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [RouterModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.css'
})
export class NavigationBarComponent {

  isMenuOpen: boolean = false;

  constructor(
    
  ) {

  }
  
  protected toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

}
