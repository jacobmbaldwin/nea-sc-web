import { Component } from '@angular/core';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { EventModel } from '../../../models/event.model';
import { CalendarService } from '../../../service/calendar.service';

@Component({
  selector: 'app-add-event',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDividerModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  templateUrl: './add-event.component.html',
  styleUrl: './add-event.component.css'
})
export class AddEventComponent {

  eventForm: FormGroup;

  constructor(
    private calendarService: CalendarService,
  ) {

    this.eventForm = new FormGroup({
      date: new FormControl<Date | null>(null, Validators.required),
      title: new FormControl<string>('', Validators.required),
      description: new FormControl<string>(''),
      location: new FormControl<string>('', Validators.required),
      time: new FormControl<string>(''),
    });

  }

  onSubmit(): void {
    const request: EventModel = {
      date: this.eventForm.controls['date'].value,
      title: this.eventForm.controls['title'].value,
      description: this.eventForm.controls['description'].value,
      location: this.eventForm.controls['location'].value,
      time: this.eventForm.controls['time'].value,
    }

    this.calendarService.postEvent(request).subscribe({
      next: (response) => {
        console.log('Event successfully posted:', response);
        this.eventForm.reset();
      },
      error: (error) => {
        console.error('Error posting event:', error);
      }
    });

  }

}
