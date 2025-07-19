import {Component, inject, OnInit} from '@angular/core';
import {Produto} from "../models/classes/Produto";
import {DemonstracaoService} from "../service/demonstracao.service";
import {ToastService} from "../../../../services/ToastService";

@Component({
    selector: 'app-produtos',
    templateUrl: './demonstracao-produtos.component.html',
    standalone: false
})
export class DemonstracaoProdutosComponent implements OnInit {

  produto: Produto = new Produto({});
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];
  palavraChave: string = '';
  exibirJanela = false;
  carregando = false;

  demonstracaoService = inject(DemonstracaoService);
  toastService = inject(ToastService);

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.produtosFiltrados = [];
    this.carregando = true;
    // window.setTimeout(() => {
    this.demonstracaoService.readProdutos()
      .then((array: any[]) => {
        this.produtos = array;
        this.filtrar();
      })
      .catch((error: any): void => this.toastService.erro(error))
      .finally((): void => {
        this.carregando = false
      });
    // }, 1000);
  }

  filtrar(): void {
    this.produtosFiltrados = this.produtos
      .filter((produto: Produto) => produto.produto?.toLowerCase().includes(this.palavraChave.toLowerCase()))
  }

  passar(produto: any): void {
    this.produto = new Produto(produto);
    this.exibirJanela = true;
  }

}
