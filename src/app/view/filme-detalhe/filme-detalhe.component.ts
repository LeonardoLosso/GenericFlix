import { ExtratorDeCor } from '../../utils/utils';
import { Subscription } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FilmesService } from 'src/app/services/filmes.service';
import { ActivatedRoute } from '@angular/router';
import { Elenco, FilmeDetalhe, TipoPlataforma, Trailer } from 'src/app/models/interfaces';

@Component({
  selector: 'app-filme-detalhe',
  templateUrl: './filme-detalhe.component.html',
  styleUrls: ['./filme-detalhe.component.css']
})
export class FilmeDetalheComponent implements OnInit, OnDestroy {

  private subscription = new Subscription();
  rgbPredominante!: number[];
  filme!: FilmeDetalhe;
  elenco!: Elenco[];
  trailers!: Trailer[];
  tipoPlataforma!: TipoPlataforma;
  gradient = 'is-faded'; 
  trailerGradient = 'is-faded';
  modalAberto: boolean = false;

  constructor(
    private service: FilmesService
    , private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.obterFilme(id);
      this.obterElenco(id);
      this.obterTrailers(id);
      this.obterPlataformas(id);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onModalChange(evento: boolean){
    this.modalAberto = evento;
  }

  retornaAvaliacao(): string {
    if (this.filme.vote_average > 6.5) {
      return 'verde';
    }
    if (this.filme.vote_average < 5) {
      return 'vermelho';
    }
    return 'amarelo';
  }

  scrollerElencoGradient(event: Event){
    const scroll = event.target as HTMLElement;

    this.gradient = scroll.scrollLeft > 100 ? 'is-hidden' : 'is-faded';
  }

  scrollerTrailerGradient(event: Event){
    const scroll = event.target as HTMLElement;

    this.trailerGradient = scroll.scrollLeft > 100 ? 'is-hidden' : 'is-faded';
  }
  
  private extrairCorPredominante() {
    const url = `https://media.themoviedb.org/t/p/w300_and_h450_bestv2${this.filme.poster_path}`;
    ExtratorDeCor.analizarImagem(url)
      .then((rgb) => {
        this.rgbPredominante = rgb;
      })
      .catch((erro) => {
        console.error(erro);
      });
  }

  private obterFilme(id: string) {

    this.subscription.add(

      this.service.obterPorID(parseInt(id)).subscribe({
        next: result => {
          this.filme = result;
          this.extrairCorPredominante();
        }
        , error: () => {
          console.log('DEU RUIM MLK');
        }
      })
    );
  }

  private obterElenco(id: string) {

    this.subscription.add(

      this.service.obterCreditos(parseInt(id)).subscribe({
        next: result => {
          this.elenco = result?.cast;
          if (this.elenco) {
            this.elenco = this.elenco.slice(0, 9);
          }
        }
        , error: () => {
          console.log('DEU RUIM MLK');
        }
      })
    );
  }

  private obterTrailers(id: string){
    
    this.subscription.add(

      this.service.obterVideos(parseInt(id)).subscribe({
        next: result => {
          this.trailers = result?.results;
          this.trailerGradient = this.trailers.length === 1 ? 'is-hidden' : 'is-faded';
        }
        , error: () => {
          console.log('DEU RUIM MLK');
        }
      })
    );
  }

  private obterPlataformas(id: string){
    
    this.subscription.add(

      this.service.obterPlataformas(parseInt(id)).subscribe({
        next: result => {
          this.tipoPlataforma = result?.results?.BR;
          this.trailerGradient = this.trailers.length === 1 ? 'is-hidden' : 'is-faded';

          console.log(this.tipoPlataforma);
        }
        , error: () => {
          console.log('DEU RUIM MLK');
        }
      })
    );
  }
}
