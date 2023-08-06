import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-home',
  template: `
    <h2>Popular Movies</h2>
    <ul>
      <li *ngFor="let movie of movies">{{ movie.title }}</li>
    </ul>
  `
})
export class HomeComponent implements OnInit {
  movies: any[] = [];

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.tmdbService.getPopularMovies().subscribe((data: any) => {
      this.movies = data.results;
      console.log(this.movies);
    });
  }
}
