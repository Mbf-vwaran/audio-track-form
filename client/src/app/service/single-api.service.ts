import {HttpClient} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
// import Single from '../model/singleModel'



@Injectable({
  providedIn: 'root'
})
export class SingleApiService {
  private API_URL= environment.API_URL;
  httpClient=inject(HttpClient);
  
constructor(private http: HttpClient) {}


singlesForm(formData: FormData) {
  return this.http.post(`${this.API_URL}/create`, formData);
}


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




