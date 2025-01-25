import { Injectable } from '@angular/core';
import { Firestore,collection, addDoc, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface EventData {
  date: string;
  venue: string;
  city: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class EventService {
    constructor(private firestore: Firestore) {}
  
    addEvent(event: { date: string; venue: string; city: string; time: string }) {
      const eventsCollection = collection(this.firestore, 'events');
      return addDoc(eventsCollection, event);
    }
  
    getEvents(): Observable<any[]> {
      const eventsCollection = collection(this.firestore, 'events');
      return collectionData(eventsCollection, { idField: 'id' });
    }
  }
  