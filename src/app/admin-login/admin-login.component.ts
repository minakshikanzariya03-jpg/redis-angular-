import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {
loginForm!: FormGroup;

  constructor(private fb: FormBuilder,private LoginService:LoginService,private router:Router) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rememberMe: [false]
    });
  }
onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.LoginService
      .loginUsers(this.loginForm.getRawValue())
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

}
