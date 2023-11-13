// src/app/login/login.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  login() {
    // Implement your login logic here
    console.log('Login attempt with:', this.username, this.password);
  }
  resetForm() {
    this.username = '';
    this.password = '';
  }
}
