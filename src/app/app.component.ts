import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GenericFlix';
  modalAberto: boolean = false;

  verificarMenu(evento: boolean) {
    this.modalAberto = evento;
  }
}
