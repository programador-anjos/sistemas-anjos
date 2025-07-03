import {Component, OnInit} from '@angular/core';
import {Usuario} from "../../../models/Usuario";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";

@Component({
    selector: 'app-conta',
    templateUrl: './conta.component.html',
    standalone: false
})
export class ContaComponent implements OnInit {

  conta: Usuario = new Usuario();

  constructor(private armazenamentoService: ArmazenamentoService) {
  }

  ngOnInit(): void {
    let logado = this.armazenamentoService.usuario();
    if (logado) {
      this.conta = logado;
    }
  }

}
