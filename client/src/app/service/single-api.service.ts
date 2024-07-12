import {HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import Single from '../model/singleModel'
// import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class SingleApiService {
 
  apiUrl="http://localhost:3000"
  httpClient=inject(HttpClient);
  
constructor(private http: HttpClient) {}

singlesForm(model: Single) {
  return this.http.post(`${this.apiUrl}/create`, model);
}
  // constructor() { }


  // singlesForm(model: Single): Observable<Single> {
  //   return this.httpClient.post<Single>(`${this.apiUrl}/create`, model);
  // }

    // getUsers(): Observable<User[]>{
  //   return this.httpClient.get<User[]>(this.apiUrl);
  // }

  // createUser(model:User) :Observable<void> {
  //   return this.httpClient.post<void>(this.apiUrl+'/create', model);
  // }

}



