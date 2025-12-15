import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../services/authentication';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {

  constructor(private authneticationService: AuthenticationService) {}

  ngOnInit() {}

  public isLoggedIn(): boolean {
    return this.authneticationService.isLoggedIn();
  }

  public onLogout(): void {
    return this.authneticationService.logout();
  }
  
}

