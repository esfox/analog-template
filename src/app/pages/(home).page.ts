import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './(home).page.html',
  styleUrl: './(home).page.scss',
})
export default class HomePageComponent {
  count = 0;

  increment() {
    this.count++;
  }
}
