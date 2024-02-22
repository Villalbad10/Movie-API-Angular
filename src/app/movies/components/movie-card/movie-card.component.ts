import { Component, Input } from '@angular/core';
import { Movies } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'movie-card',
  templateUrl: `./movie-card.component.html`,
})
export class MovieCardComponent {

  @Input()
  public moviesEnter: Movies[] = [];
}
