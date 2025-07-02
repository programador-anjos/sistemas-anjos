import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {ArmazenamentoService} from "../../services/ArmazenamentoService";
import {Conta} from "../../models/Conta";
import {AutenticacaoService} from "../../services/firebase/AutenticacaoService";
import { Sistema } from '../../models/Sistema';
import {AparenciaService} from "../../services/AparenciaService";

@Component({
    selector: 'app-sistema',
    templateUrl: './sistema.component.html',
    standalone: false
})
export class SistemaComponent implements OnInit {

  menuPrincipal: MenuItem[] = [];
  menuSecundario: MenuItem[] = [];

  logado: Conta | null = null;
  rotaSistema: string | undefined = '';

  constructor(private autenticacaoService: AutenticacaoService,
              private armazenamentoService: ArmazenamentoService,
              private aparenciaService: AparenciaService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.aparenciaService.carregarAparencia();
    this.logado = this.armazenamentoService.logado();
    this.carregarMenus();
    // this.armazenamentoService.events.subscribe((logado: Conta | null) => this.carregarMenus(logado));
  }

  private carregarMenus(): void {
    this.menuPrincipal = [];
    this.menuSecundario = [];
    if (this.logado) {
      this.rotaSistema = "/" + this.logado.sistema?.rota;
      if(this.logado.eAdministrador()) {
        this.obterMenuAdministrador();
      }
      else if(this.logado.eUsuario()) {
        this.obterMenuUsuario();
      }
    }
  }

  private obterMenuAdministrador(): void {
    this.menuPrincipal = [
      {label: 'Painel', icon: 'pi pi-chart-bar', routerLink: `${this.rotaSistema}/painel`},
      {label: 'Registros', icon: 'pi pi-book', routerLink: `${this.rotaSistema}/registros`}
    ];
    this.menuSecundario = [
      {label: 'Usuários', icon: 'pi pi-users', routerLink: [`${this.rotaSistema}/usuarios`], },
      {label: 'Aparencia', icon: 'pi pi-palette', routerLink: [`${this.rotaSistema}/aparencia`]},
      {label: 'Pagamentos', icon: 'pi pi-dollar', routerLink: [`${this.rotaSistema}/pagamentos`]},
      {label: 'Ajuda', icon: 'pi pi-comments', routerLink: [`${this.rotaSistema}/ajuda`]},
      {label: 'Sobre', icon: 'pi pi-id-card', routerLink: [`${this.rotaSistema}/sobre`]},
      {separator: true},
      {label: 'Sair', icon: 'pi pi-sign-out', command: () => this.sair()}
    ];
  }

  private obterMenuUsuario(): void {
    this.menuPrincipal = [
      {label: 'Registros', icon: 'pi pi-book', routerLink: `${this.rotaSistema}/registros`}
    ];
    this.menuSecundario = [
      {label: 'Aparência', icon: 'pi pi-palette', routerLink: [`${this.rotaSistema}/aparencia`]},
      {label: 'Sobre', icon: 'pi pi-id-card', routerLink: [`${this.rotaSistema}/sobre`]},
      {separator: true},
      {label: 'Sair', icon: 'pi pi-sign-out', command: () => this.sair()}
    ];
  }

  irConta(): void {
    this.router.navigateByUrl(`${this.rotaSistema}/conta`).then(() => true);
  }

  sair(): void {
    this.autenticacaoService.signOut().then(() => {
      this.armazenamentoService.sair();
      this.router.navigateByUrl('/acesso').then(() => true);
    });
  }

}
