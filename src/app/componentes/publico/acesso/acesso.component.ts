import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {ToastService} from "../../../services/ToastService";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";
import {Conta, PERFIL} from "../../../models/Conta";
import {ContasService} from "../../../services/firebase/ContasService";
import {MessageService} from "primeng/api";
import {AcessosService} from "../../../services/firebase/AcessosService";
import {Acesso, RESULTADO} from "../../../models/Acesso";
import {Utils} from "../../../utils/Utils";
import {AutenticacaoService} from "../../../services/firebase/AutenticacaoService";

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html'
})
export class AcessoComponent {

  email: string = '';
  senha: string = '';

  carregando: boolean = false;

  constructor(private router: Router,
              private acessosService: AcessosService,
              private messageService: MessageService,
              private toastService: ToastService,
              private autenticacaoService: AutenticacaoService,
              private armazenamentoService: ArmazenamentoService,
              private contasService: ContasService) {
  }

  entrar() {
    this.carregando = true;
    this.autenticacaoService.signIn(this.email, this.senha)
      .then(user => {
        if (user.user && user.user.email) {
          this.contasService.getPath(user.user.email)
            .then(logado => {
              this.autenticado(logado);
              this.sucesso();
            })
            .catch(e => {
              this.falha(e.code)
            });
        }
      })
      .catch(error => this.tratarErro(error)
    ).finally(() => this.carregando = false);
  }

  private autenticado(conta: Conta) {
    this.armazenamentoService.armazenar(conta);
    this.router.navigate([AcessoComponent.obterRota(conta)])
      .catch(e => {
        this.falha('Erro interno');
        console.error('Erro no redirecionamento: ' + e.message);
      });
  }

  static obterRota(logado: Conta) {
    let rota = '';
    if (logado.perfil === PERFIL.CRIADOR) {
      rota = '/deus/estatisticas';
    }
    else if (logado.perfil === PERFIL.ADMINISTRADOR) {
      rota = `/${logado.sistema?.rota}/registros`;
    }
    else if (logado.perfil === PERFIL.USUARIO) {
      rota = `/${logado.sistema?.rota}/registros`;
    }
    return rota;
  }

  private sucesso() {
    let acesso = new Acesso({id: Utils.gerarId(), sistema: 'sistema', email: this.email, resultado: RESULTADO.SUCESSO});
    this.acessosService.post(acesso).catch(e => console.error(e.message));
  }

  private falha(causa?: string) {
    let acesso = new Acesso({id: Utils.gerarId(), sistema: '', email: this.email, resultado: RESULTADO.FALHA});
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
