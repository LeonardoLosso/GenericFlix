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

  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
