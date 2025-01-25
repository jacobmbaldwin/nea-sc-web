import { Component } from '@angular/core';
import { AddEventComponent } from "./add-event/add-event.component";

@Component({
  selector: 'app-coach-portal',
  standalone: true,
  imports: [AddEventComponent],
  templateUrl: './coach-portal.component.html',
  styleUrl: './coach-portal.component.css'
})
export class CoachPortalComponent {

}
