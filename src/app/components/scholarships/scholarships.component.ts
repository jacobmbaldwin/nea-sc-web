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
  identityGroupForm: FormGroup;
  addressGroupForm: FormGroup;
  contactGroupForm: FormGroup;
  reasonsGroupForm: FormGroup;
  householdGroupForm: FormGroup;

  constructor(
  ) { 

    this.identityGroupForm = new FormGroup({
      firstName: new FormControl<string>('', Validators.required),
      lastName: new FormControl<string>('', Validators.required),
      birthDate: new FormControl<Date | null>(null, Validators.required),
      gender: new FormControl<string>('', Validators.required)
    });

    this.addressGroupForm = new FormGroup({
      street: new FormControl<string>('', Validators.required),
      city: new FormControl<string>('', Validators.required),
      state: new FormControl<string>('', Validators.required),
      zip: new FormControl<number | null>(null, Validators.required),
    });

    this.contactGroupForm = new FormGroup({
      email: new FormControl<string>('', Validators.required),
      phone: new FormControl<number | null>(null, Validators.required,),
      parentName: new FormControl<string>('', Validators.required),
    });

    this.reasonsGroupForm = new FormGroup({
      timePlayed: new FormControl<string>('', Validators.required),
      clubHistory: new FormControl<string>('', Validators.required),
      positionsPlayed: new FormControl<string>('', Validators.required),
      tournamentHistory: new FormControl<string>('', Validators.required),
      whySoccer: new FormControl<string>('', Validators.required),
    });

    this.householdGroupForm = new FormGroup({
      householdIncome: new FormControl<number | null>(null, Validators.required),
      householdSize: new FormControl<number | null>(null, Validators.required),
      financialChallenges: new FormControl<string>('', Validators.required),
    });

  }

}
