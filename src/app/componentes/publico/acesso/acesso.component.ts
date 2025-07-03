import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";
import {Usuario} from "../../../models/Usuario";
import {SistemaService} from "../../../services/firebase/SistemaService";
import {MessageService} from "primeng/api";
import {AcessosService} from "../../../services/firebase/AcessosService";
import {RegistroDeAcesso, RESULTADO} from "../../../models/RegistroDeAcesso";
import {Sistema} from "../../../models/Sistema";

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  standalone: false
})
export class AcessoComponent implements OnInit {

  sistemas: Sistema[] = [];
  sistema: Sistema = new Sistema({});

  nomeSistema: string = '';
  codigoUsuario: string = '';

  carregando: boolean = false;
  sistemaEncontrado: boolean = false;

  constructor(private router: Router,
              private acessosService: AcessosService,
              private messageService: MessageService,
              // private autenticacaoService: AutenticacaoService,
              private armazenamentoService: ArmazenamentoService,
              private sistemaService: SistemaService) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar() {
    this.carregando = false;
    this.sistemaService.get().then(sistemas => {
      this.sistemas = sistemas;
      this.carregando = false;
    });
  }

  entrar() {
    this.carregando = true;
    this.sistemas.filter(sistema => {
      if (sistema.nome === this.nomeSistema) {
        this.sistema = sistema;
        this.sistemaEncontrado = true;
        this.armazenamentoService.armazenarSistema(this.sistema);
      }
    });
    if (!this.sistemaEncontrado) {
      alert('Sistema não encontrado')
    }
  }

  entrarComUsuario() {
    this.carregando = true;
    this.sistema.usuarios.filter(usuario => {
      if (usuario.codigo === this.codigoUsuario) {
        this.armazenamentoService.armazenarUsuario(usuario);
        this.router.navigate([this.obterRota(usuario)])
          .catch(e => {
            this.falha('Erro interno');
            console.error('Erro no redirecionamento: ' + e.message);
          });
        this.sucesso();
      }
    })
  }

  private obterRota(logado: Usuario) {
    let rota = '';
    if (logado.eCriador()) {
      rota = '/deus/estatisticas';
    }
    else {
      rota = `/${this.sistema.rota}`;
    }
    return rota;
  }

  private sucesso() {
    let acesso = new RegistroDeAcesso({sistema: 'sistema', usuario: this.nomeSistema, resultado: RESULTADO.SUCESSO});
    this.acessosService.post(acesso).catch(e => console.error(e.message));
  }

  private falha(causa?: string) {
    let acesso = new RegistroDeAcesso({sistema: '', usuario: this.nomeSistema, resultado: RESULTADO.FALHA});
    this.acessosService.post(acesso)
      .then(res => this.messageService.add({severity: 'error', summary: causa, life: 4000}))
      .catch(e => console.error(e.message));
  }

  private tratarErro(error: any) {
    if ("auth/invalid-email" == error.code) {
      this.falha('Email inválido');
    } else if ("auth/invalid-credential" == error.code) {
      this.falha('Dados inválidos');
    } else if ("auth/too-many-requests" == error.code) {
      this.falha('Muitas tentativas, tente novamente mais tarde');
    } else {
      this.falha('Erro interno');
      console.error('Erro ao entrar: ' + error.code);
    }
  }

}
