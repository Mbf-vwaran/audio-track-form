import {HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Model from '../model/singleModel'
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SingleApiService {
 
  apiUrl="http://localhost:3030/api"
  httpClient=inject(HttpClient);
  constructor() { }

  // getUsers(): Observable<User[]>{
  //   return this.httpClient.get<User[]>(this.apiUrl);
  // }

  // createUser(model:User) :Observable<void> {
  //   return this.httpClient.post<void>(this.apiUrl+'/create', model);
  // }
  singlesForm(model: Model): Observable<Model> {
    return this.httpClient.post<Model>(`${this.apiUrl}/create`, model);
  }
  

}

