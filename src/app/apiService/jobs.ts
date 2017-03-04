import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Job } from '../model';
import { JOBS_URL } from '../model/API'

@Injectable()
export class JobsAPIService {
    constructor(private http: Http){}

    getMarsJobs(): Observable<Job[]>{
        return this.http.get(JOBS_URL)
                        .map((res: Response) => res.json().jobs);
    }
}