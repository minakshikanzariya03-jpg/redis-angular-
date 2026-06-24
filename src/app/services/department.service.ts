import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
 apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

   addDepartment(data: any): Observable<any> {
    return this.http.post(
      `${this.apiUrl}/api/addDepartment`,
      data
    );
  }
  getDepartments(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/api/departments`,);
  }
}
