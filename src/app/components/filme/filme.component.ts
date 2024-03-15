import { Component, Input } from '@angular/core';
import { Filme } from 'src/app/models/interfaces';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent {
  @Input() filme!: Filme
}

