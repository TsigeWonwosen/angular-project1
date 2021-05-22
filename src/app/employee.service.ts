import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import {catchError} from 'rxjs/operators'
// import 'rxjs/add/operator/catch'
// import 'rxjs/add/observable/throw'

import {IEmployee} from './employee'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employee.json"
// errorHandler:string;
  constructor(private http: HttpClient) { }

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url).pipe(

      catchError(this.errorHandler)
    )
  }

  errorHandler(error: HttpErrorResponse){
return throwError(error.message || "Server Error")
  }
}
