import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';

export const routes: Routes = [
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent
  }
];