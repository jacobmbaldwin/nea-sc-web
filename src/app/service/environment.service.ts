import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
  export class EnvironmentService {
    public ROOT_URL = 'http://localhost:3000'
  }