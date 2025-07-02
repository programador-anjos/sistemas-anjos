import {Component, OnInit} from '@angular/core';
import {Conta} from "../../../models/Conta";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";

@Component({
    selector: 'app-conta',
    templateUrl: './conta.component.html',
    standalone: false
})
export class ContaComponent implements OnInit {

  conta: Conta = new Conta();

  constructor(private armazenamentoService: ArmazenamentoService) {
  }

  ngOnInit(): void {
    let logado = this.armazenamentoService.logado();
    if (logado) {
      this.conta = logado;
    }
  }

}
