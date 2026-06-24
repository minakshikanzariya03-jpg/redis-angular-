import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DepartmentService } from '../services/department.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.css'
})
export class AddDepartmentComponent {

  departmentForm: FormGroup;

  constructor(private fb: FormBuilder, private departmentService: DepartmentService,private router: Router) {

    this.departmentForm = this.fb.group({
      department_code: [{ value: this.generateDepartmentCode(), disabled: true }],
      department_name: ['', Validators.required]
    });

  }
  generateDepartmentCode(): string {
    return 'DEPT-' + Math.floor(1000 + Math.random() * 9000);
  }

  onSubmit() {

    if (this.departmentForm.invalid) {
      return;
    }

    this.departmentService
      .addDepartment(this.departmentForm.getRawValue())
      .subscribe({

        next: (res) => {
          console.log(res);
          if(res.success == true){
            this.router.navigate(['/department']);
          }
        },

        error: (err) => {
          console.log(err);
        }

      });

  }

  resetForm() {

    this.departmentForm.reset({
      department_code: this.generateDepartmentCode(),
      department_name: ''
    });

  }
}
