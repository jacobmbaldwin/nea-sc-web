import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ScholarshipRequestModel } from '../models/scholarship-request.model';
import { HttpClient } from '@angular/common/http';
import { EnvironmentService } from './environment.service';

@Injectable({
    providedIn: 'root'
  })
export class ScholarshipsService {
    private readonly scholarshipsDataUrl: string;

    constructor(
        private http: HttpClient,
        private environmentService: EnvironmentService
    ) {

        this.scholarshipsDataUrl = this.environmentService.ROOT_URL + '/scholarshipRequests'

    }

    public getScholarshipRequests(): Observable<ScholarshipRequestModel[]> {
        return this.http.get<ScholarshipRequestModel[]>(this.scholarshipsDataUrl);
    }

    public postScholarshipRequests(scholarshipRequest: ScholarshipRequestModel): Observable<ScholarshipRequestModel> {
        return this.http.post<ScholarshipRequestModel>(this.scholarshipsDataUrl, scholarshipRequest);
    }
}