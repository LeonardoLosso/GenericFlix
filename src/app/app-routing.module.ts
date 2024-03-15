import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from './view/lista-filmes/lista-filmes.component';
import { BuscarFilmeComponent } from './view/buscar-filme/buscar-filme.component';

const routes: Routes = [
  {
    path: ''
    , redirectTo: 'listaFilmes'
    , pathMatch: 'full'
  }
  , {
    path: 'listaFilmes'
    , component: ListaFilmesComponent
  }
  , {
    path: 'search'
    , component: BuscarFilmeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
