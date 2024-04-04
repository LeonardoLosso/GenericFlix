import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() mudouModal = new EventEmitter<boolean>();
  private menuAberto = false;
  private isHomePage: boolean = true;

  constructor(private router: Router){}

  irParaTelaInicial(){
    this.isHomePage = true;
    this.router.navigate(['']);
  }

  irParaBusca(){
    this.isHomePage = false;
    this.router.navigate(['/search']);
  }

  isSearch(): string {
    return !this.isHomePage ? 'search-page' : '';
  }
  isMenu(): string {
    return this.menuAberto ? 'search-page' : '';
  }

  irParaMenu(){
    this.menuAberto = !this.menuAberto;
    this.mudouModal.emit(this.menuAberto);
  }
}
