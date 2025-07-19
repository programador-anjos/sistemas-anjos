import {Component, inject, Input, OnInit} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Genero} from "../../models/enums/Genero";
import {DemonstracaoService} from "../../service/demonstracao.service";
import {Cliente, Identificacao} from "../../models/classes/Cliente";
import {AutoCompleteCompleteEvent} from "primeng/autocomplete";

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  standalone: false
})
export class FormularioClienteComponent implements OnInit {
  @Input() cliente: Cliente = new Cliente({});
  clientes: Cliente[] = [];
  clientesFiltrados: Cliente[] = [];

  generos: SelectItem[] = [
    {label: 'Masculino', value: Genero.MASCULINO},
    {label: 'Feminino', value: Genero.FEMININO}
  ];

  demonstracaoService = inject(DemonstracaoService);

  ngOnInit(): void {
    this.demonstracaoService.readClientes().then(clientes => this.clientes = clientes);
  }

  selecionarCliente(event: any) {
    this.cliente = event.value;
  }

  filtrar(event: any) {
    this.clientesFiltrados = this.clientes.filter(item => item.identificacao.nome?.includes(event.query));
  }

  buscarEnderecoPorCEP(): void {
    if (this.cliente.endereco.cep && this.cliente.endereco.cep.length > 7) {
      this.demonstracaoService.buscarEndereco(this.cliente.endereco.cep).subscribe((cep: any) => {
        this.cliente.endereco.cidade = cep.localidade;
        this.cliente.endereco.logradouro = cep.logradouro;
        this.cliente.endereco.numero = cep.numero;
        this.cliente.endereco.estado = cep.uf;
        this.cliente.endereco.bairro = cep.bairro;
      });
    }
  }

  abrirWhatsapp(): void {
    window.open('https://wa.me/send?phone=55' + this.cliente.contato.telefone?.replace(/\D/g, ''));
  }

  abrirEmail(): void {
    window.open('mailto:' + this.cliente.contato.email);
  }

}
