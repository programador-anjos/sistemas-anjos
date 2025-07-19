import {ChangeDetectionStrategy, Component, inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MenuItem} from "primeng/api";
import {Router} from "@angular/router";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";
import {Sistema} from "../../../models/Sistema";
import {DemonstracaoService} from "./service/demonstracao.service";
import {Usuario} from "../../../models/Usuario";

@Component({
  selector: 'app-pagina',
  templateUrl: './demonstracao.component.html',
  standalone: false,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemonstracaoComponent implements OnInit {

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
      label: 'Vendas',
      icon: 'pi pi-dollar',
      routerLink: '/demonstracao/vendas'
    },
  ];

  titulo = '(Titulo do sistema)';
  temaEscuro = false;

  sistema: Sistema = new Sistema();
  usuario: Usuario = new Usuario();

  router = inject(Router);
  armazenamentoService = inject(ArmazenamentoService);
  demonstracaoService = inject(DemonstracaoService);

  ngOnInit(): void {
    this.demonstracaoService.readSistemaUsuario().then((sistema: Sistema) => {
      this.sistema = sistema;
      this.armazenamentoService.armazenarSistema(sistema);
      let usuario = sistema.usuarios[0];
      this.usuario = usuario;
      this.armazenamentoService.armazenarUsuario(usuario);
      this.titulo = sistema.titulo;
      this.temaEscuro = usuario.temaEscuro;
      if (this.temaEscuro) {
        this.trocarTema();
      }
    })
  }

  abrirConfiguracoes() {
    this.router.navigate(['/demonstracao/configuracoes']);
  }

  alternarTema() {
    this.temaEscuro = !this.temaEscuro;
    this.trocarTema();
  }

  trocarTema() {
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
