import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Alien } from '../model';
import { ALIENS_URL } from '../model/API'

@Injectable()
export class AliensAPIService {
    constructor(private http: Http){}

    getAliens(): Observable<Alien[]> {
        return this.http.get(ALIENS_URL)
                        .map((res: Response) => res.json().aliens);
    }
}