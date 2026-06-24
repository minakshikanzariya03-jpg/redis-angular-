import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentService } from '../services/department.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {

  departments: any[] = [];

  constructor(private departmentService: DepartmentService,private router:Router ) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getDepartments().subscribe({
      next: (res: any) => {
        console.log('Departments:', res);
        this.departments = res;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  addDepartment(){
    this.router.navigate(['/add-department']);
  }
}