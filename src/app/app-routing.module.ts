import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from './view/lista-filmes/lista-filmes.component';
import { BuscarFilmeComponent } from './view/buscar-filme/buscar-filme.component';
import { FilmeDetalheComponent } from './view/filme-detalhe/filme-detalhe.component';

const routes: Routes = [
  {
    path: ''
    , redirectTo: 'home'
    , pathMatch: 'full'
  }
  , {
    path: 'home'
    , component: ListaFilmesComponent
  }
  , {
    path: 'search'
    , component: BuscarFilmeComponent
  }
  , {
    path: 'detail/:id'
    , component: FilmeDetalheComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
