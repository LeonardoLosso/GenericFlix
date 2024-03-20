import { Filme } from 'src/app/models/interfaces';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carrossel-filmes',
  templateUrl: './carrossel-filmes.component.html',
  styleUrls: ['./carrossel-filmes.component.css']
})
export class CarrosselFilmesComponent implements OnInit, OnDestroy {

  @Input() filmes!: Filme[];
  timerSubs!: Subscription;
  private _cardSelecionado: number = 0;

  get cardSelecionado() {
    return this._cardSelecionado;
  }

  set cardSelecionado(value: number) {
    this._cardSelecionado =
      value < this.filmes.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }
  
  selecionarCard(index: number): string{
    return this.cardSelecionado === index ? 'select' : 'unselect';
  }

  private iniciarTimer(): void {
    this.timerSubs = timer(5000).subscribe(() => {
      this.ativarFilme(
        this.cardSelecionado + 1
      );
    });
  }

  private pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  private ativarFilme(index: number): void {
    this.cardSelecionado = index;
    this.iniciarTimer();
  }

}
