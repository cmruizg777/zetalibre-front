import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = environment.urlServer;

  constructor(private http: HttpClient) { }

  post(endpoint: string, body: any): Observable<Object> {
    return this.http.post(this.url + endpoint, body);
  }

  patch(endpoint: string, body: any) {
    const uri = this.url + "" + endpoint;
    return this.http.patch(this.url + "" + endpoint, body);
  }

  get(endpoint: string, params?: any, reqOpts?: any): Observable<any> {
    return this.http.get(this.url + endpoint);
  }
  put(endpoint: string, body: any) {
    const uri = this.url + "" + endpoint;
    return this.http.put(this.url + "" + endpoint, body);
  }
}
