// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    // Implement your login logic here
    this.router.navigate(['/dashboard']);
    console.log('Login attempt with:', this.username, this.password);
  }
  resetForm() {
    this.username = '';
    this.password = '';
  }
}
