import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // Inject the Router in the constructor
  constructor(private router: Router) {}

  logout() {
    // Here you should implement the logic for logging out
    // For example, if you're using a service to manage the authentication state:
    // this.authService.logout();

    // For now, we will just clear the local storage and navigate to the login page
    localStorage.clear(); // Or however you're managing the session/state
    this.router.navigate(['/login']); // Assuming '/login' is the route for your login page
  }
}
