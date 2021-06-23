import { Injectable } from '@angular/core';

import {HttpClient,HttpParams} from '@angular/common/http'

export interface UserInterface{
    user: string;
    email: string;
    role: string;
}

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http:HttpClient) { }

  getBeer(){
    return this.http.get('https://api.openbrewerydb.org/breweries')
  }

  getBeerByParams(id:string){
    return this.http.get(`https://api.openbrewerydb.org/breweries/${id}`)


  }

  myMethod(){
    return {user:"Wonde" , email:"wonde@gmail.com", role:"Admin"}
  }
}
