import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Creditos, FilmeDetalhe, RetornoAPILista, Videos } from '../models/interfaces';

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
      .append('page', 1)
      .append('region', 'BR');

    return this.http.get<RetornoAPILista>(`${this.API.URL}/now_playing`, { headers, params });
  }

  obterPopulares(): Observable<RetornoAPILista> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams()
      .append('language', 'pt-BR')
      .append('page', 1)
      .append('region', 'BR');

    return this.http.get<RetornoAPILista>(`${this.API.URL}/popular`, { headers, params });
  }

  obterMelhoresAvaliados(): Observable<RetornoAPILista> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams()
      .append('language', 'pt-BR')
      .append('page', 1)
      .append('region', 'BR');

    return this.http.get<RetornoAPILista>(`${this.API.URL}/top_rated`, { headers, params });
  }

  buscarFilme(valor: string): Observable<RetornoAPILista> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams()
      .append('query', valor)
      .append('language', 'pt-BR')
      .append('page', 1)
      .append('region', 'BR');

    return this.http.get<RetornoAPILista>('https://api.themoviedb.org/3/search/movie', { headers, params });
  }

  obterPorID(id: number): Observable<FilmeDetalhe> {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams().append('language', 'pt-BR');

    return this.http.get<FilmeDetalhe>(`${this.API.URL}/${id}`, { headers, params });
  }

  obterCreditos(id: number): Observable<Creditos>{

    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams()
      .append('language', 'pt-BR');

    return this.http.get<Creditos>(`${this.API.URL}/${id}/credits`, { headers, params });
  }

  obterVideos(id: number): Observable<Videos>{
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Authorization', `Bearer ${this.API.TOKEN}`);

    const params = new HttpParams()
      .append('language', 'pt-BR');

    return this.http.get<Videos>(`${this.API.URL}/${id}/videos`, { headers, params });
  }
}
