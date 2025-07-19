import {Component, inject, OnInit} from '@angular/core';
import {Usuario} from "../../../../../models/Usuario";
import {SelectItem} from "primeng/api";
import {ArmazenamentoService} from "../../../../../services/ArmazenamentoService";
import {Sistema} from "../../../../../models/Sistema";

@Component({
  selector: 'app-configuracao-acessos',
  templateUrl: './configuracao-acessos.component.html',
  standalone: false
})
export class ConfiguracaoAcessosComponent implements OnInit {

  sistema: Sistema = new Sistema();

  permissoes: SelectItem[] = [
    {label: 'Visualizar painel', value: 'VER_PAINEL'},
    {label: 'Cadastrar cliente', value: 'CADASTRAR_CLIENTE'},
  ];

  armazenamentoService = inject(ArmazenamentoService);

  ngOnInit(): void {
    this.sistema = this.armazenamentoService.sistema();
  }

  salvar() {
    this.armazenamentoService.armazenarSistema(this.sistema);
    this.armazenamentoService.armazenarUsuario(this.sistema.usuarios[0])
  }

}
