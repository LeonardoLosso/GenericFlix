import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RetornoAPILista } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  constructor(private http: HttpClient) { }

  private readonly API = {
    URL: 'https://api.themoviedb.org/3/movie'
    , TOKEN: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDY0ZThkZTBmMGM1ZjRkODkwZGI4ZDljNTQwMDQxMCIsInN1YiI6IjY1ZTg4ZmQ2MzQ0YThlMDE3ZDNmOThiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5xNRmrqx9uGC4rqmntnomQQBtP4GlMauf5aIQUKIHi8'
    , KEY: 'd464e8de0f0c5f4d890db8d9c5400410'
  };

  obterEmCartaz(): Observable<RetornoAPILista> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams()
      .append('language', 'pt-BR')
      .append('page', 1);

    return this.http.get<RetornoAPILista>(`${this.API.URL}/now_playing`, { headers, params });
  }
}
