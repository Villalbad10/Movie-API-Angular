import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'movie-home',
  templateUrl: `./home.component.html`,
})
export class HomeComponent {
  constructor(private movieService: MoviesService) { }

  get movies(): Movies[] {
    return this.movieService.movies;
  }
}
