import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private apiUrl = environment.apiUrl;
// apiUrl = 'https://real-estate-b1.onrender.com';
//  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

   addDepartment(data: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/addDepartment`,
      data
    );
  }
  getDepartments(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/departments`,);
  }
}
