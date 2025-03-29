import { Component } from '@angular/core';
import { SmallHeaderBannerComponent } from "../shared/small-header-banner/small-header-banner.component";
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Validators, FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { ScholarshipRequestModel } from '../../models/scholarship-request.model';
import { ScholarshipsService } from '../../service/scholarships.service';

@Component({
  selector: 'app-scholarships',
  standalone: true,
  imports: [
    SmallHeaderBannerComponent,
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
  templateUrl: './scholarships.component.html',
  styleUrl: './scholarships.component.css'
})
export class ScholarshipsComponent {
  scholarshipForm: FormGroup;

  constructor(
    private scholarshipsService: ScholarshipsService
  ) { 

    this.scholarshipForm = new FormGroup({
      identity: new FormGroup({
        firstName: new FormControl<string>('', Validators.required),
        lastName: new FormControl<string>('', Validators.required),
        birthDate: new FormControl<Date | null>(null, Validators.required),
        gender: new FormControl<string>('', Validators.required)
      }),
      address: new FormGroup({
        street: new FormControl<string>('', Validators.required),
        city: new FormControl<string>('', Validators.required),
        state: new FormControl<string>('', Validators.required),
        zip: new FormControl<number | null>(null, Validators.pattern('^[0-9]{5}$')),
      }),
      contact: new FormGroup({
        email: new FormControl<string>('', Validators.email),
        phone: new FormControl<number | null>(null, Validators.pattern('^[0-9]{10,15}$'),),
        parentName: new FormControl<string>('', Validators.required),
      }),
      reasons: new FormGroup({
        timePlayed: new FormControl<string>('', Validators.required),
        clubHistory: new FormControl<string>('', Validators.required),
        positionsPlayed: new FormControl<string>('', Validators.required),
        tournamentHistory: new FormControl<string>('', Validators.required),
        whySoccer: new FormControl<string>('', Validators.required),
      }),
      household: new FormGroup({
        householdIncome: new FormControl<number | null>(null, Validators.required),
        householdSize: new FormControl<number | null>(null, Validators.required),
        financialChallenges: new FormControl<string>('', Validators.required),
      }),
    });

  }

  getFormGroup(name: string): FormGroup {
    return this.scholarshipForm.get(name) as FormGroup;
  }

  onSubmit() {
    if (
      this.scholarshipForm.valid
    ) {
      const scholarshipRequest: ScholarshipRequestModel = {
        ...this.scholarshipForm.get('identity')!.value,
        ...this.scholarshipForm.get('address')!.value,
        ...this.scholarshipForm.get('contact')!.value,
        ...this.scholarshipForm.get('reasons')!.value,
        ...this.scholarshipForm.get('household')!.value,
      };
      console.log(scholarshipRequest)

      this.scholarshipsService.postScholarshipRequests(scholarshipRequest).subscribe({
        next: (response) => {
          console.log('Scholarship Request Successful')
        },
        error: (error) => {
          console.error('Error posting request:', error);
        }
      });
  }

}

}
