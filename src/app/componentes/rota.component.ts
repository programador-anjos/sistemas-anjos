import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rota',
  templateUrl: './rota.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RotaComponent {

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
      icon: 'pi pi-pen-to-square',
      routerLink: '/demonstracao/registros'
    },
  ];

  temaDark = false;

  constructor(private router: Router) {
  }

  alterarTema() {
    this.temaDark = !this.temaDark;
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
