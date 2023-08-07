import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TmdbService } from '../tmdb.service';
import { MovieDetailsModule } from './movie-details.module';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  movieId!: number;
  movieDetails: any; // Update with the actual type of movie details

  constructor(
    private route: ActivatedRoute,
    private tmdbService: TmdbService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.movieId = params['id'];
      this.tmdbService
        .getMovieDetails(this.movieId)
        .subscribe((details: any) => {
          this.movieDetails = details;
        });
    });
  }

  getGenres(genres: any[]): string {
    return genres.map((genre) => genre.name).join(', ');
  }
}
