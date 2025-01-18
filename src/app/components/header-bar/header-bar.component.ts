import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { Title } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'app-header-bar',
  standalone: true,
  imports: [MatButtonModule, RouterModule],
  templateUrl: './header-bar.component.html',
  styleUrl: './header-bar.component.css'
})
export class HeaderBarComponent implements OnInit {
  pageHeading: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
  ){
    this.pageHeading = 'NEA Soccer Club';
  }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        let route = this.activatedRoute;
        while (route.firstChild) {
          route = route.firstChild;
        }
        this.pageHeading = route.snapshot.data['pageHeading'] || 'NEA Soccer Club';
        this.titleService.setTitle(route.snapshot.data['title']);
      });
  }


}
