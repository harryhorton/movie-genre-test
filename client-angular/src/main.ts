import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { AppComponent } from './app/app.component';

import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { MovieListPageComponent } from './pages/movie-list-page/movie-list-page.component';
import { MovieService } from './services/movie.service';

const routes: Routes = [
  {
    path: 'movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '',
    component: MovieListPageComponent,
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), MovieService],
});

// platformBrowserDynamic()
//   .bootstrapModule(AppModule)
//   .catch((err) => console.error(err));
