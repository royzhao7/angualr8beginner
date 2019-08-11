import { IEmployee } from './employee';
import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { Observable , throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
// tslint:disable-next-line: variable-name
private _url = '/assets/data/employees1.json';
  constructor(private http: HttpClient) { }

  getBOBO(): Observable<IEmployee[]> {
  return  this.http.get<IEmployee[]>(this._url).pipe(catchError((err: HttpErrorResponse) => {

    // tslint:disable-next-line: deprecation
    return throwError(err.message);
  }));

}
}
