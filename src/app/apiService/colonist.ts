import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Colonist, NewColonist } from '../model';
import { COLONISTS_URL } from '../model/API';

@Injectable()

export class ColonistAPIService {
    constructor(private http: Http) {
    }

    saveColonist(newColonist: NewColonist): Observable<Colonist>{
    const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(COLONISTS_URL, newColonist, { headers })
                        .map((res: Response) => res.json().encounter);
    }
}