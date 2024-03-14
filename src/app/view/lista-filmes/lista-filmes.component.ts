import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filme } from 'src/app/models/interfaces';
import { FilmesService } from 'src/app/services/filmes.service';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit, OnDestroy{

  mensagemErro: string = '';
  subscription!: Subscription;
  listaFilmes!: Filme[];

  constructor(private service: FilmesService){}

  ngOnInit(): void {
    // this.service.obterEmCartaz().subscribe({
    //   next: result => {
    //     this.listaFilmes = result?.results;
    //   }
    //   , error: erro => {
    //     this.mensagemErro = 'Alguma coisa deu errado. Por favor tente novamente'
    //   }
    // });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
