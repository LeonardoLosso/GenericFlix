import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.css']
})
export class TrailerComponent {
  @Input() key!: string;
  modalAberto: boolean = false;

  onModalChange(evento: boolean){
    this.modalAberto = evento;
  }
}
