import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {
// tslint:disable-next-line: variable-name
private _url = '/assets/data/employees.json';
  constructor(private http: HttpClient) { }

  getBOBO(): Observable<IEmployee[]> {
  return  this.http.get<IEmployee[]>(this._url);
  }
}
