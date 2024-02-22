import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';



@NgModule({
  declarations: [
    HomeComponent,
    SearchInputComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class MoviesModule { }
