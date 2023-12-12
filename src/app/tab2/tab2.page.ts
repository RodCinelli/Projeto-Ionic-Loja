import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CarrinhoService } from '../carrinho.service'; // Ajuste o caminho conforme necessário
import { Produto } from '../models/produto.model';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  produtos: Produto[] = [
    {
      nome: 'Camiseta Polo Camisa Polo Masculina Básica Alta Qualidade',
      imagem: 'assets/images/produto1.png',
      preco: 79.99,
      quantidade: 0
    },

    {
      nome: 'Kit 3 Camisetas Parvori Roupa Academia Masculina Dry Fit',
      imagem: 'assets/images/produto2.png',
      preco: 69.99,
      quantidade: 0
    },
  ];

  constructor(
    private carrinhoService: CarrinhoService,
    private toastController: ToastController
  ) {}

  incrementarProduto(index: number) {
    this.produtos[index].quantidade++;
  }

  decrementarProduto(index: number) {
    if (this.produtos[index].quantidade > 0) {
      this.produtos[index].quantidade--;
    }
  }

  async adicionarAoCarrinho(produto: Produto) {
    if (produto.quantidade > 0) {
      this.carrinhoService.adicionarAoCarrinho(produto);
      const toast = await this.toastController.create({
        message: 'Item adicionado ao carrinho!',
        duration: 2000,
        position: 'top',
        color: 'success'
      });
      toast.present();
    } else {
      const toast = await this.toastController.create({
        message: 'Selecione ao menos uma quantidade antes de adicionar ao carrinho',
        duration: 2000,
        position: 'top',
        color: 'warning' // Cor de aviso para indicar que uma ação é necessária
      });
      toast.present();
    }
  }
}  
