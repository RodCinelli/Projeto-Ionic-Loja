import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  currentImageIndex: number = 0;
  images: NodeListOf<HTMLImageElement> = null!; // Inicialização defensiva
  likes: number = 0;


  ngOnInit() {
    this.images = document.querySelectorAll('.gallery-image');
    this.images[this.currentImageIndex].style.display = 'block'; // Mostrar a primeira imagem
  }

  nextImage() {
    this.images[this.currentImageIndex].style.display = 'none'; // Ocultar imagem atual
    this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
    this.images[this.currentImageIndex].style.display = 'block'; // Mostrar próxima imagem
  }

  addlikes() {
    this.likes++; // Incrementar likes
  }
}
