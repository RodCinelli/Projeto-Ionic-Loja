import { Injectable } from '@angular/core';
import { Produto } from './models/produto.model';

interface ProdutoCarrinho {
  produto: Produto;
  quantidade: number;
}

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itensCarrinho: ProdutoCarrinho[] = [];

  constructor() { }

  adicionarAoCarrinho(produto: Produto) {
    const itemExistente = this.itensCarrinho.find(item => item.produto.nome === produto.nome);
    if (itemExistente) {
      itemExistente.quantidade += 1;
    } else {
      this.itensCarrinho.push({ produto, quantidade: 1 });
    }
  }

  removerItem(index: number) {
    this.itensCarrinho.splice(index, 1);
  }

  getItensCarrinho() {
    return this.itensCarrinho;
  }

  // Aqui você pode adicionar outros métodos que achar necessário
}
