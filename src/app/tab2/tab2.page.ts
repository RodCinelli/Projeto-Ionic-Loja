import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { CarrinhoService } from '../carrinho.service'; // Ajuste o caminho conforme necessário
import { ProdutoTab2 } from '../models/produtotab2.model';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  produtos: ProdutoTab2[] = [
    {
      nome: 'Camisa Social Manga Longa Masculina Lisa Slim',
      imagem: 'assets/images/produto1.png',
      preco: 90.99,
      quantidade: 0
    },

    {
      nome: 'Camisa Social Slim Empório Colombo',
      imagem: 'assets/images/produto2.png',
      preco: 79.90,
      quantidade: 0
    },

    {
      nome: 'Camisa Social Slim Fit Masculina',
      imagem: 'assets/images/produto3.png',
      preco: 78.99,
      quantidade: 0
    },

    {
      nome: 'Camisa Social Slim Premium 4% Lycra',
      imagem: 'assets/images/produto4.png',
      preco: 78.99,
      quantidade: 0
    },

    {
      nome: 'Camisa Polo Masculina Básica Alta Qualidade',
      imagem: 'assets/images/produto5.png',
      preco: 37.80,
      quantidade: 0
    },

    {
      nome: 'Camisa Polo Masculina Básica Alta Qualidade',
      imagem: 'assets/images/produto6.png',
      preco: 49.99,
      quantidade: 0
    },

    {
      nome: 'Camiseta Polo Basica Masculina Malwee',
      imagem: 'assets/images/produto7.png',
      preco: 69.99,
      quantidade: 0
    },

    {
      nome: 'Camisa Gola Polo Red Bull F1 Malha Piquet',
      imagem: 'assets/images/produto8.png',
      preco: 69.90,
      quantidade: 0
    },

    {
      nome: 'Camisa Térmica Voker Academia Proteção Solar Uv Dry Fit',
      imagem: 'assets/images/produto9.png',
      preco: 33.90,
      quantidade: 0
    },

    {
      nome: 'Camisa Poliéster Masculina P/ Academia Exercícios',
      imagem: 'assets/images/produto10.png',
      preco: 45.90,
      quantidade: 0
    },

    {
      nome: 'Camisa Dry Fit Academia Com Proteção Uv',
      imagem: 'assets/images/produto11.png',
      preco: 56.30,
      quantidade: 0
    },

    {
      nome: 'Camisa Dry Fit Camuflada Esportiva Com Proteção Uv',
      imagem: 'assets/images/produto12.png',
      preco: 56.90,
      quantidade: 0
    },

    {
      nome: 'Regata Oversized Masculina Brooklyn Bronx New York',
      imagem: 'assets/images/produto13.png',
      preco: 69.90,
      quantidade: 0
    },

    {
      nome: 'Longline Masculina Regata Kings Rei Rainha Mcd Cartas Swag',
      imagem: 'assets/images/produto14.png',
      preco: 78.90,
      quantidade: 0
    },

    {
      nome: 'Camisa Regata Longline Floral Naipe Carta Mcd Poker',
      imagem: 'assets/images/produto15.png',
      preco: 69.90,
      quantidade: 0
    },

    {
      nome: 'Regata Estampada Hombre Caveira Mexicana',
      imagem: 'assets/images/produto16.png',
      preco: 44.90,
      quantidade: 0
    },

    {
      nome: 'Calça Ogochi Masculina Bolso Slim Fit',
      imagem: 'assets/images/produto17.png',
      preco: 220.00,
      quantidade: 0
    },

    {
      nome: 'Calça Masculina Alfaiataria Em Oxford Sem Elastano',
      imagem: 'assets/images/produto18.png',
      preco: 70.00,
      quantidade: 0
    },

    {
      nome: 'Calça Cargo Dazzling Masculina',
      imagem: 'assets/images/produto19.png',
      preco: 130.00,
      quantidade: 0
    },

    {
      nome: 'Calça Jeans Masculina 8 Bolsos Command Ártico',
      imagem: 'assets/images/produto20.png',
      preco: 170.00,
      quantidade: 0
    },

    {
      nome: 'Bermuda Cargo Dragon Tática Masculina 8 Bolsos Rip Stop',
      imagem: 'assets/images/produto21.png',
      preco: 164.50,
      quantidade: 0
    },

    {
      nome: 'Bermuda Short Masculino Cargo Sarja Brim Camuflada Militar',
      imagem: 'assets/images/produto22.png',
      preco: 78.90,
      quantidade: 0
    },

    {
      nome: 'Bermuda Xadrez Masculina Bolsos Lateral Cargo',
      imagem: 'assets/images/produto23.png',
      preco: 98.00,
      quantidade: 0
    },

    {
      nome: 'Bermuda Cargo Jeans Masculina Elástico E Cordão',
      imagem: 'assets/images/produto24.png',
      preco: 118.50,
      quantidade: 0
    },

    {
      nome: 'Sapatenis Masculino Polo Plus Original',
      imagem: 'assets/images/produto25.png',
      preco: 97.90,
      quantidade: 0
    },

    {
      nome: 'Sapatênis Olimp Masculino Original Tecido',
      imagem: 'assets/images/produto26.png',
      preco: 55.90,
      quantidade: 0
    },

    {
      nome: 'Sapato Casual Casamento Amarrar Oxford',
      imagem: 'assets/images/produto27.png',
      preco: 132.99,
      quantidade: 0
    },

    {
      nome: 'Sapato Social Masculino De Amarrar Café',
      imagem: 'assets/images/produto28.png',
      preco: 69.90,
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

  async adicionarAoCarrinho(produto: ProdutoTab2) {
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
