import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaFilmesComponent } from './view/lista-filmes/lista-filmes.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
