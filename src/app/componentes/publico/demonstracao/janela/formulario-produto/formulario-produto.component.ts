import {Component, inject, Input, OnInit} from '@angular/core';
import {Produto} from "../../models/classes/Produto";
import {SelectItem} from "primeng/api";
import {DemonstracaoService} from "../../service/demonstracao.service";

@Component({
  selector: 'app-formulario-produto',
  templateUrl: './formulario-produto.component.html',
  standalone: false
})
export class FormularioProdutoComponent implements OnInit {
  @Input() produto: Produto = new Produto({});
  produtos: Produto[] = [];
  produtosFiltrados: Produto[] = [];

  categorias: SelectItem[] = [];

  demonstracaoService = inject(DemonstracaoService);

  ngOnInit(): void {
    this.demonstracaoService.readProdutos().then(produtos => this.produtos = produtos);
  }

  selecionarProduto(event: any) {
    this.produto = event.value;
  }

  filtrar(event: any) {
    this.produtosFiltrados = this.produtos.filter(item => item.produto?.includes(event.query));
  }

}
