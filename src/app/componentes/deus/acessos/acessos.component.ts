import {Component, OnInit } from "@angular/core";
import {Acesso} from "../../../models/Acesso";
import {AcessosService} from "../../../services/firebase/AcessosService";

@Component({
    selector: 'app-acessos',
    templateUrl: './acessos.component.html',
    standalone: false
})
export class AcessosComponent implements OnInit {

  lista: Acesso[] = [];
  carregando = false;

  constructor(private acessosService: AcessosService) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  private pesquisar() {
    this.lista = [];
    this.carregando = true;
    this.acessosService.get().then(acessos => {
      this.lista = acessos;
      this.carregando = false;
    })
  }

  obterBackgroundColor(resultado: any): string {
    if (resultado == 'Sucesso') {
      return 'var(--green-100)';
    }
    else if (resultado == 'Falha') {
      return 'var(--red-100)';
    }
    return '';
  }

}
