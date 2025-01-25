import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EventService, EventData } from '../../../service/events.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  eventForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private eventService: EventService,
  ) {

    this.eventForm = this.formBuilder.group({
      date: [''],
      venue: [''],
      city: [''],
      time: ['']
    });

  }

  onSubmit(): void {
    if (this.eventForm.valid) {
      const newEvent: EventData = this.eventForm.value;
      this.eventService.addEvent(newEvent).then(()=> {
        console.log('Event added!');
      })
    }
  }

}
