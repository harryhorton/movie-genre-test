import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppLayout } from '../layouts/app-layout/app-layout.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, AppLayout],
  styles: [``],
  template: ` <div>
    <app-layout>
      <router-outlet></router-outlet>
    </app-layout>
  </div>`,
})
export class AppComponent {
  title = 'movie-genre-test';
}
