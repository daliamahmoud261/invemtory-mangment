import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from "./components/home/home-page/home-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'inventory-project';
}
