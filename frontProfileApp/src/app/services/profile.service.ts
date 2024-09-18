import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Profile } from '../models/profile';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private baseEndpoint = 'http://localhost:8090/api/perfiles';

  private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  public profilesList(): Observable<Profile[]> {
    return this.http.get<Profile[]>(this.baseEndpoint);
  }

  public profile(id: number): Observable<Profile> {
    return this.http.get<Profile>(`${this.baseEndpoint}/${id}`);
  }

  public createProfile(profile:Profile): Observable<Profile> {
    return this.http.post<Profile>(this.baseEndpoint, profile, {headers: this.headers});
  }

  public editProfile(profile:Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.baseEndpoint}/${profile.id}`, profile, {headers: this.headers})
  }

  public deleteProfile(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}
