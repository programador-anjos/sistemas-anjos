import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {ArmazenamentoService} from "../services/ArmazenamentoService";

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RotaComponent implements OnInit {

  items: MenuItem[] = [
    {
      label: 'Painel',
      icon: 'pi pi-chart-bar',
      routerLink: '/demonstracao/painel'
    },
    {
      label: 'Clientes',
      icon: 'pi pi-users',
      routerLink: '/demonstracao/clientes'
    },
    {
      label: 'Produtos',
      icon: 'pi pi-box',
      routerLink: '/demonstracao/produtos'
    },
    {
      label: 'Registros',
      icon: 'pi pi-list-check',
      routerLink: '/demonstracao/registros'
    },
  ];

  temaEscuro = false;

  router = inject(Router);

  armazenamentoService = inject(ArmazenamentoService);

  ngOnInit(): void {
    // this.temaEscuro = this.armazenamentoService.usuario()?.temaEscuro ?? false;
  }

  abrirConfiguracoes() {
    this.router.navigate(['/demonstracao/configuracoes']);
  }

  trocarTema() {
    this.temaEscuro = !this.temaEscuro;
    this.armazenamentoService.alterarTema(this.temaEscuro);
    const element = document.getElementById('tema');
    // @ts-ignore
    element.classList.toggle('dark');
  }

  alterarTela(): void {
    if (!document.fullscreenElement) {
      let element = document.documentElement;
      // If not in fullscreen, request fullscreen for the specified element
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if ((element as any).webkitRequestFullscreen) { // Safari
        (element as any).webkitRequestFullscreen();
      } else if ((element as any).msRequestFullscreen) { // IE11
        (element as any).msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if ((document as any).webkitExitFullscreen) { // Safari
        (document as any).webkitExitFullscreen();
      } else if ((document as any).msExitFullscreen) { // IE11
        (document as any).msExitFullscreen();
      }
    }
  }

  sair() {
    this.router.navigate(["/"]);
  }

}
