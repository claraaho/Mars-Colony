import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { NewEncounter, Encounter } from '../model';
import { ENCOUNTERS_URL } from '../model/API'


interface EncounterPostRequest {
     encounter: NewEncounter;
}

@Injectable()
export class EncountersAPIService {
    constructor(private http: Http){}

    getEncounters(): Observable<Encounter> {
        return this.http.get(ENCOUNTERS_URL)
                        .map((res: Response) => res.json().encounters);
    }

    saveNewEncounter(newEncounter: EncounterPostRequest): Observable<Encounter> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
            return this.http.post(ENCOUNTERS_URL, newEncounter, { headers })
                        .map((res: Response) => res.json().encounter);
    }
}