import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {MenuItem} from "primeng/api";
import {Usuario} from "../../../models/Usuario";
import {ToastService} from "../../../services/ToastService";
import {RegistrosService} from "../../../services/firebase/RegistrosService";

@Component({
    selector: 'app-sistemas',
    templateUrl: './sistemas.component.html',
    styleUrl: './sistemas.component.css',
    standalone: false
})
export class SistemasComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Update',
      icon: 'pi pi-refresh'
    },
    {
      label: 'Delete',
      icon: 'pi pi-times'
    }
  ];

  carregando: boolean = false;
  visivel: boolean = false;

  contas: Usuario[] = [];

  item: Usuario = new Usuario();

  constructor(private router: Router,
              private toastService: ToastService,
              private registrosService: RegistrosService) {
  }

  ngOnInit(): void {
    this.carregando = true;
    this.pesquisar();
  }

  pesquisar() {
    this.carregando = false;
    this.registrosService.get().then(Contas => {
      this.contas = Contas;
      this.carregando = false;
    });
  }

  passar(item: Usuario) {
    this.visivel = true;
    Object.assign(this.item, item);
  }

}
