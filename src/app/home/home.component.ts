import { Component, OnInit } from '@angular/core';
import { TmdbService } from '../tmdb.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  movies: any[] = [];
  searchQuery: string = '';

  constructor(private tmdbService: TmdbService) {}

  ngOnInit() {
    this.searchMovies(); // To load popular movies initially
  }

  searchMovies() {
    if (this.searchQuery.trim() === '') {
      // If the search query is empty, show popular movies
      this.tmdbService.getPopularMovies().subscribe((data: any) => {
        this.movies = data.results;
      });
    } else {
      // Fetch movies by name using the search query
      this.tmdbService.searchMoviesByName(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
}

