import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";
import {Usuario} from "../../../models/Usuario";
import {SistemaService} from "../../../services/firebase/SistemaService";
import {MessageService} from "primeng/api";
import {AcessosService} from "../../../services/firebase/AcessosService";
import {RegistroDeAcesso, RESULTADO} from "../../../models/RegistroDeAcesso";
import {Sistema} from "../../../models/Sistema";
import {ToastService} from "../../../services/ToastService";
import {v4 as uuidv4} from "uuid";

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  standalone: false
})
export class AcessoComponent implements OnInit {

  sistemas: Sistema[] = [];
  sistema: Sistema = new Sistema({});

  codigoSistema: string = '';
  codigoUsuario: string = '';

  carregando: boolean = false;
  sistemaEncontrado: boolean = false;

  constructor(private router: Router,
              private acessosService: AcessosService,
              private messageService: MessageService,
              private armazenamentoService: ArmazenamentoService,
              private sistemaService: SistemaService,
              private toastService: ToastService) {
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
      if (sistema.codigo === this.codigoSistema) {
        this.sistema = sistema;
        this.sistemaEncontrado = true;
        this.armazenamentoService.armazenarSistema(this.sistema);
        this.entrarComUsuario();
      }
    });
    if (!this.sistemaEncontrado) {
      this.toastService.erro("Sistema não encontrado");
      this.carregando = false;
    }
  }

  entrarComUsuario() {
    this.carregando = true;
    this.sistema.usuarios.filter(usu => {
      let usuario = new Usuario(usu);
      if (usuario.senha === this.codigoUsuario) {
        this.armazenamentoService.armazenarUsuario(usuario);
        this.router.navigate([this.obterRota(usuario)])
          .catch(e => {
            this.toastService.erro(e.code, e, 5000);
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
      rota = `/${this.sistema.codigo}`;
    }
    return rota;
  }

  private sucesso() {
    // let registro = { _id: uuidv4(), sistema: this.sistema.codigo, usuario: this.codigoUsuario, resultado: RESULTADO.SUCESSO};
    // let acesso = new RegistroDeAcesso(registro);
    // this.acessosService.post(acesso).catch(e => console.error(e.message));
  }

  private falha(causa?: string) {
    let acesso = new RegistroDeAcesso({ _id: uuidv4(), sistema: '', usuario: this.codigoSistema, resultado: RESULTADO.FALHA});
    this.acessosService.post(acesso)
      .then(res => this.messageService.add({severity: 'error', summary: causa, life: 4000}))
      .catch(e => console.error(e.message));
  }

}
