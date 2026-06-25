import { Routes } from '@angular/router';
import { DepartmentComponent } from './department/department.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AdminLoginComponent
  },
  {
    path: 'department',
    component: DepartmentComponent
  },
  {
    path: 'add-department',
    component: AddDepartmentComponent
  },
 
];