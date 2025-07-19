import {Component, inject, OnInit} from '@angular/core';
import {DemonstracaoService} from "../service/demonstracao.service";
import {ToastService} from "../../../../services/ToastService";
import {Cliente} from "../models/classes/Cliente";

@Component({
    selector: 'app-clientes',
    templateUrl: './demonstracao-clientes.component.html',
    standalone: false
})
export class DemonstracaoClientesComponent implements OnInit {

  cliente: Cliente = new Cliente({});
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];
  palavraChave: string = '';
  exibirJanela = false;
  carregando = false;

  demonstracaoService = inject(DemonstracaoService);
  toastService = inject(ToastService);

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.clientesFiltrados = [];
    this.carregando = true;
    // window.setTimeout(() => {
    this.demonstracaoService.readClientes()
      .then((array: any[]) => {
        this.clientes = array;
        this.filtrar();
      })
      .catch((error: any): void => this.toastService.erro(error))
      .finally((): void => {
        this.carregando = false
      });
    // }, 1000);
  }

  filtrar(): void {
    this.clientesFiltrados = this.clientes
      .filter((cliente: Cliente) => cliente.identificacao.nome?.toLowerCase().includes(this.palavraChave.toLowerCase()))
  }

  passar(cliente: any): void {
    this.cliente = new Cliente(cliente);
    this.exibirJanela = true;
  }
}
