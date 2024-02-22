import { Component, ElementRef, ViewChild } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'search-input',
  template: `<input type="text" class="form-control" placeholder="Buscar pelicula" 
  (keyup.enter)="searchMovie()" #txtMovie>`,
})
export class SearchInputComponent {

  @ViewChild('txtMovie')
  public inputMovie!: ElementRef<HTMLInputElement>;

  constructor(private serviceMovie: MoviesService) { }

  searchMovie(): void {
    const movie = this.inputMovie.nativeElement.value;
    this.serviceMovie.search(movie);
    this.inputMovie.nativeElement.value = '';
  }

}
