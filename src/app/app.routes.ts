import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FaqComponent } from './components/faq/faq.component';
import { ScholarshipsComponent } from './components/scholarships/scholarships.component';
import { CoachPortalComponent } from './components/coach-portal/coach-portal.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', redirectTo: '', data: { pageHeading: 'NEA Soccer Club', title: 'NEA Soccer Club' } },
    { path: 'about', component: AboutComponent, data: { pageHeading: 'About NEA Soccer Club', title: 'About | NEA Soccer Club' } },
    { path: 'documents', component: DocumentsComponent, data: { pageHeading: 'Documents', title: 'Documents | NEA Soccer Club' } },
    { path: 'calendar', component: CalendarComponent, data: { pageHeading: 'Calendar', title: 'Calendar | NEA Soccer Club' } },
    { path: 'faq', component: FaqComponent, data: { pageHeading: 'Frequently Asked Questions', title: 'FAQ | NEA Soccer Club' } },
    { path: 'scholarships', component: ScholarshipsComponent, data: { pageHeading: 'Scholarships', title: 'Scholarships | NEA Soccer Club' } },
    { path: 'coach-portal', component: CoachPortalComponent, data: { pageHeading: "Coach's Portal", title: "Coach's Portal | NEA Soccer Club" } },
];
