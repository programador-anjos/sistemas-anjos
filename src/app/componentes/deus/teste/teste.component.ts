import {Component, OnInit} from '@angular/core';
import {Campo, Coluna, Formulario} from "../../../models/Formulario";

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css'
})
export class TesteComponent implements OnInit {

  formulario: Formulario = new Formulario({colunas: [{ordem: 0, campos: []}]});
  tipo: string = '';

  constructor() {
  }

  ngOnInit() {
  }

  dragStart(tipo: any) {
    this.tipo = tipo;
  }

  drop(coluna: any) {
    if (this.tipo) {
      this.formulario.colunas.forEach(c => {
        if (c === coluna) {
          c.campos.push(({rotulo: '', tipo: this.tipo}));
        }
      });
    }
  }

  dragEnd() {
    this.tipo = '';
  }

  novaColuna() {
    this.formulario.colunas.push({ordem: this.formulario.colunas.length, campos: [] as Campo[]} as Coluna);
  }

}
