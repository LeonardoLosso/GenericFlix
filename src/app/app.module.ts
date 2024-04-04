import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilmeComponent } from './components/filme/filme.component';
import { ListaFilmesComponent } from './view/lista-filmes/lista-filmes.component';
import { CarrosselFilmesComponent } from './view/carrossel-filmes/carrossel-filmes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilmeDetalheComponent } from './view/filme-detalhe/filme-detalhe.component';
import { BuscarFilmeComponent } from './view/buscar-filme/buscar-filme.component';
import { MinutosParaHorasPipe } from './pipes/minutos-para-horas.pipe';
import { ElencoComponent } from './components/elenco/elenco.component';
import { TrailerComponent } from './components/trailer/trailer.component';
import { FilmeSliderComponent } from './components/filme-slider/filme-slider.component';
import { ModalTrailerComponent } from './view/modal-trailer/modal-trailer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideBarComponent,
    FooterComponent,
    FilmeComponent,
    ListaFilmesComponent,
    CarrosselFilmesComponent,
    FilmeDetalheComponent,
    BuscarFilmeComponent,
    MinutosParaHorasPipe,
    ElencoComponent,
    TrailerComponent,
    FilmeSliderComponent,
    ModalTrailerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
