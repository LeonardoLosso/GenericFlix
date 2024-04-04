import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-modal-trailer',
  templateUrl: './modal-trailer.component.html',
  styleUrls: ['./modal-trailer.component.css']
})
export class ModalTrailerComponent {
  @Input() key!: string;
  statusModal: boolean = true;
  @Output() mudouModal = new EventEmitter();

  @HostListener('document:keydown.escape', ['$event']) 
  handleEscape(event: KeyboardEvent) {
    this.fecharModal();
  }

  constructor(private sanitizer: DomSanitizer){}

  fecharModal() {
    this.statusModal = false;
    this.mudouModal.emit(this.statusModal);
  }

  retornaLink(): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${this.key}?autoplay=0`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
