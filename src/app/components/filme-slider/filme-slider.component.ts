import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Filme } from 'src/app/models/interfaces';

@Component({
  selector: 'app-filme-slider',
  templateUrl: './filme-slider.component.html',
  styleUrls: ['./filme-slider.component.css']
})
export class FilmeSliderComponent {
  @Input() listaFilmes!: Filme[];
  @Input() agrupador!: string;
  slideAtual: number = 0;
  slideWidth: number = 0;

  @ViewChild('slideContainer') slideContainer!: ElementRef;

  ngAfterViewInit() {
    this.calculateSlideWidth();
  }

  nextSlide() {
    this.slideAtual += 6;

    if (this.slideAtual > 16) { this.slideAtual = 17; }

  }

  prevSlide() {
    this.slideAtual -= 6;
    if (this.slideAtual < 0) { this.slideAtual = 0 }
  }
  verificaPrev():string {
    return this.slideAtual === 0 ? 'hidden' : '';
  }
  verificaNext():string {
    return this.slideAtual === 17 ? 'hidden' : '';
  }
  private calculateSlideWidth() {
    if (this.slideContainer) {
      const slideElement = this.slideContainer.nativeElement.firstChild;
      if (slideElement) {
        this.slideWidth = slideElement.offsetWidth;
      }
    }
  }
}
