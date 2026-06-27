import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {
apiUrl = 'http://192.168.0.34:3000';
//  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

   signin(data: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/api/login`,
      data
    );
  }
  getDepartments(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/departments`,);
  }
}
