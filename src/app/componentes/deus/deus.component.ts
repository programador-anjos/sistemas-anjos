import {Component} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {ArmazenamentoService} from "../../services/ArmazenamentoService";
import {AutenticacaoService} from "../../services/firebase/AutenticacaoService";

@Component({
  selector: 'app-deus',
  templateUrl: './deus.component.html'
})
export class DeusComponent {

  menuPrincipal: MenuItem[] = [
    {label: 'Estatísticas', icon: 'pi pi-chart-bar', routerLink: '/deus/estatisticas'},
    {label: 'Sistemas', icon: 'pi pi-desktop', routerLink: '/deus/sistemas'},
    {label: 'Contas', icon: 'pi pi-users', routerLink: '/deus/contas'},
    {label: 'Acessos', icon: 'pi pi-key', routerLink: '/deus/acessos'},
    {label: 'Temas', icon: 'pi pi-palette', routerLink: ['/deus/temas']},
    {label: 'Finanças', icon: 'pi pi-dollar', routerLink: ['/deus/financas']},
    {label: 'Atendimentos', icon: 'pi pi-comments', routerLink: ['/deus/atendimentos']}
  ];

  constructor(private autenticacaoService: AutenticacaoService,
              private armazenamentoService: ArmazenamentoService,
              private router: Router) {
  }

  sair(): void {
    this.autenticacaoService.signOut().then(() => {
      this.armazenamentoService.sair();
      this.router.navigateByUrl('/acesso').then(() => true);
    });
  }

}
