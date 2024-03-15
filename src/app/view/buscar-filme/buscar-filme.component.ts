import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription, catchError, debounceTime, distinctUntilChanged, map, switchMap, throwError } from 'rxjs';
import { Filme } from 'src/app/models/interfaces';
import { FilmesService } from 'src/app/services/filmes.service';

const PAUSA = 300;
@Component({
  selector: 'app-buscar-filme',
  templateUrl: './buscar-filme.component.html',
  styleUrls: ['./buscar-filme.component.css']
})
export class BuscarFilmeComponent implements OnInit, OnDestroy {

  private subscription!: Subscription;
  private barraFoco: boolean = false;
  valorBusca: FormControl = new FormControl();
  mensagemErro: string = '';
  filmes!: Filme[];
  filmesBusca!: Filme[];

  constructor(private service: FilmesService) { }

  filmesPesquisados$ = this.valorBusca.valueChanges.pipe(
    debounceTime(PAUSA)
    , distinctUntilChanged()
    , switchMap((valor) => this.service.buscarFilme(valor))
    , map((result) => this.filmesBusca = result?.results)
    , catchError((erro) => {
      return throwError(() => new Error(
        this.mensagemErro = 'Alguma coisa deu errado. Por favor tente novamente'
      ));
    })
  );


  ngOnInit(): void {
    this.subscription = this.populares();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  populares(): Subscription {
    return this.service.obterPopulares().subscribe({
      next: result => {
        this.filmes = result?.results;
      }
      , error: erro => {
        this.mensagemErro = 'Alguma coisa deu errado. Por favor tente novamente';
      }
    });
  }

  inverteFoco() {
    this.barraFoco = !this.barraFoco;
  }

  retornaOutline(): string {
    return this.barraFoco ? 'focus' : '';
  }

}