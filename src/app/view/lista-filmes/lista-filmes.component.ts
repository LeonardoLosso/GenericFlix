import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filme } from 'src/app/models/interfaces';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  listaFilmes!: Filme[];
  listaCarrossel!: Filme[];

  constructor(private service: FilmesService) { }

  ngOnInit(): void {
    this.emCartaz();
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private emCartaz(){
    this.subscription.add(
      this.service.obterEmCartaz().subscribe({
        next: result => {
          this.listaFilmes = result?.results;
  
          this.listaCarrossel = this.listaFilmes.slice(0, 4);
        }
      })
    );
  }
}
