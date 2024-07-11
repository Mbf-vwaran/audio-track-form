import {HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import User from '../types/user';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SingleApiService {
 
  apiUrl="http://localhost:3030"
  httpClient=inject(HttpClient);
  constructor() { }

  getUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl);
  }

  // createUser(model:User) :Observable<void> {
  //   return this.httpClient.post<void>(this.apiUrl+'/create', model);
  // }
  addUser(model: User): Observable<User> {
    return this.httpClient.post<User>(`${this.apiUrl}/create`, model);
  }
  

}

