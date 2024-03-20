import { Component, Input } from '@angular/core';
import { Elenco } from 'src/app/models/interfaces';

@Component({
  selector: 'app-elenco',
  templateUrl: './elenco.component.html',
  styleUrls: ['./elenco.component.css']
})
export class ElencoComponent {
  @Input() pessoa!: Elenco;
}
