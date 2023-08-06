import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TmdbService {
  private apiKey = '1cc56bc9d50920a251a95dba4076f4a9';
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  getPopularMovies() {
    return this.http.get(`${this.apiUrl}/movie/popular?api_key=${this.apiKey}`);
  }
  searchMovies(query: string) {
    return this.http.get(
      `${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`
    );
  }
}
