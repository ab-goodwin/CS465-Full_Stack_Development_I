import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TripListing } from './trip-listing/trip-listing';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, TripListing],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  title = 'Travlr Getaways Admin';
}
