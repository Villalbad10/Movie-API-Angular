import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movies, SearchResponse } from '../interfaces/movies.interfaces';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private urlServer: string = 'https://api.themoviedb.org/3';
  private token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZTg0YzEyZDc5MTIxNjAxMjkyZDc3MTk5ZWUwOTMzNyIsInN1YiI6IjY1ZDY4MWFlNWNhNzA0MDE3YzBlMjcyNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XhXWBypOEuhSHuy28HZK5XyrZ1mPQBlZuGn_6a1UG4U';

  public movies: Movies[] = [];
  constructor(private http: HttpClient) { }

  public search(movie: string): void {
    const params = new HttpParams()
      .set('query', movie)
      .set('include_adult', false)
      .set('language', 'en-US')
      .set('page', 1);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const options = {
      headers, params
    };

    this.http.get<SearchResponse>(`${this.urlServer}/search/collection`, options)
      .subscribe(({ results }) => this.movies = results)
  }

}
