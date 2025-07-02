import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService, SelectItem} from "primeng/api";
import {Conta} from "../../../models/Conta";
import {ContasService} from "../../../services/firebase/ContasService";
import {ArmazenamentoService} from "../../../services/ArmazenamentoService";
import {ToastService} from "../../../services/ToastService";
import {Utils} from "../../../utils/Utils";
import {Sistema} from "../../../models/Sistema";

@Component({
    selector: 'app-usuarios',
    templateUrl: './usuarios.component.html',
    standalone: false
})
export class UsuariosComponent implements OnInit {

  logado: Conta | null = null;

  conta: Conta = new Conta();
  sistema: Sistema = new Sistema();

  lista: Conta[] = [];

  janelaAberta = false;
  carregando = false;

  perfis: SelectItem[] = [
    {label: 'Usuario', value: 1},
    {label: 'Administrador', value: 2}
  ];

  constructor(private toastService: ToastService,
              private armazenamentoService: ArmazenamentoService,
              private confirmationService: ConfirmationService,
              private contasService: ContasService) { }

  ngOnInit(): void {
    this.logado = this.armazenamentoService.logado();
    this.pesquisar();
  }

  private pesquisar() {
    this.lista = [];
    this.carregando = true;
    this.contasService.get().then(contas => {
      this.lista = contas;
      this.carregando = false;
    })
  }

  abrir() {
    this.conta = new Conta;
    this.janelaAberta = true;
  }

  passar(c: Conta) {
    Object.assign(this.conta, c);
    this.janelaAberta = true;
  }

  salvar() {
    // if (this.conta.id) {
      this.alterar();
    // } else {
      this.cadastrar();
    // }
  }

  private cadastrar() {
    this.configurarCampos();
    this.contasService.post(this.conta)
      .then(() => {
        this.janelaAberta = false;
        this.pesquisar();
        this.toastService.sucesso('Conta criada');
      })
      .catch(erro => {
        this.toastService.erro('Veja o console para mais informações');
        console.error(erro);
      });
  }

  private configurarCampos() {
    // this.conta.id = Utils.gerarId();
  }

  private alterar() {
    this.contasService.put(this.conta)
      .then(() => {
        this.janelaAberta = false;
        this.pesquisar();
        this.toastService.sucesso('Conta alterada');
      })
      .catch(erro => {
        this.toastService.erro('Veja o console para mais informações');
        console.error(erro);
      });
  }

  deletar(conta: Conta) {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar ?',
      header: 'Deleção',
      icon: 'pi pi-trash',
      accept: () => {
        this.lista = [];
        this.contasService.delete(conta)
          .then(() => {
            this.pesquisar();
            this.toastService.sucesso('Conta deletada');
          })
          .catch(erro => {
            this.toastService.erro('Veja o console para mais informações');
            console.error(erro);
          });
      }
    })
  }

}
