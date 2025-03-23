import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  ) {

    this.eventForm = this.formBuilder.group({
      date: [''],
      venue: [''],
      city: [''],
      time: ['']
    });

  }

  onSubmit(): void {
    
  }

}
