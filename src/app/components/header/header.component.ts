import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

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
}
