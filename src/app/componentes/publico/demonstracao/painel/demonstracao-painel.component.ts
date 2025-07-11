import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-demonstracao-painel',
    templateUrl: './demonstracao-painel.component.html',
    standalone: false
})
export class DemonstracaoPainelComponent implements OnInit {

  carregando = true;

  mesSelecionado: Date[] | undefined;

  clientesCadastradosNoMes: number = 123;
  servicosFeitosNoMes: number = 123;
  valorDoMes: number = 123;

  clientesNoTotal: number = 1234;
  servicosNoTotal: number = 1234;
  valorNoTotal: number = 12345;

  constructor() {}

  ngOnInit(): void {
  }

}
