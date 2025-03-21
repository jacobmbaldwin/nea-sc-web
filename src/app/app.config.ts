import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getAnalytics, provideAnalytics, ScreenTrackingService, UserTrackingService } from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getPerformance, providePerformance } from '@angular/fire/performance';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimations(),
    provideClientHydration(), 
    provideFirebaseApp(() => 
      initializeApp({
        "projectId":"nea-soccer-club",
        "appId":"1:758793269053:web:f75b33ca373bebeee9df54",
        "databaseURL":"https://nea-soccer-club-default-rtdb.firebaseio.com",
        "storageBucket":"nea-soccer-club.firebasestorage.app",
        "apiKey":"AIzaSyAOWPVM797P5Y67kHVUcMJ13wqkqneEEhY",
        "authDomain":"nea-soccer-club.firebaseapp.com",
        "messagingSenderId":"758793269053",
        "measurementId":"G-9LG4NF34TM"})), 
        provideAuth(() => getAuth()), 
        provideAnalytics(() => getAnalytics()), 
        ScreenTrackingService, 
        UserTrackingService, 
        provideFirestore(() => getFirestore()), 
        provideDatabase(() => getDatabase()), 
        providePerformance(() => getPerformance())]
};
