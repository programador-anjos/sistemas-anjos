import {Component, Input, OnInit} from '@angular/core';
import {Produto} from "../models/classes/Produto";
import {Usuario} from "../../../../models/Usuario";

@Component({
  selector: 'app-configuracoes-component',
  templateUrl: './configuracoes.component.html',
  standalone: false
})
export class ConfiguracoesComponent implements OnInit {
  @Input() produto: Produto = new Produto({});

  ngOnInit(): void {
  }

}
