import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  getProfiles(): Observable<Profile[]> {
    return this.http.get<Profile[]>('../assets/mock-data.json')
  }
}

export interface Profile {
  id:number
  first_name: string
  last_name: string
  email: string 
  gender: string
  image: string
}
