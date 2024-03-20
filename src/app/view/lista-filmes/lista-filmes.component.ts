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
  listaEmCartaz!: Filme[];
  listaHypados!: Filme[];
  listaMelhoresAvaliados!: Filme[];
  listaCarrossel!: Filme[];

  constructor(private service: FilmesService) { }

  ngOnInit(): void {
    this.emCartaz();
    this.noHype();
    this.melhoresAvaliados();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private emCartaz(){
    this.subscription.add(
      this.service.obterEmCartaz().subscribe({
        next: result => {
          this.listaEmCartaz = result?.results;
  
          this.listaCarrossel = this.listaEmCartaz.slice(0, 4);
        }
      })
    );
  }

  private noHype(){
    this.subscription.add(
      this.service.obterPopulares().subscribe({
        next: result => {
          this.listaHypados = result?.results;
        }
      })
    );
  }

  private melhoresAvaliados(){
    this.subscription.add(
      this.service.obterMelhoresAvaliados().subscribe({
        next: result => {
          this.listaMelhoresAvaliados = result?.results;
        }
      })
    );
  }
}
