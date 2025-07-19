import {Component, EventEmitter, inject, Input, Output, ViewChild} from '@angular/core';
import {ConfirmationService, MessageService} from "primeng/api";
import {v4 as uuidv4} from 'uuid';
import {ToastService} from "../../../../services/ToastService";
import {Venda} from "../models/Venda";
import {FormularioPagamentoComponent} from "./formulario-pagamento/formulario-pagamento.component";
import {DemonstracaoService} from "../service/demonstracao.service";

@Component({
  selector: 'app-exemplo-janela',
  templateUrl: './janela-formulario.component.html',
  standalone: false
})
export class JanelaFormularioComponent {

  @Input() venda: Venda = new Venda({});
  @Input() exibirJanela: boolean = false;
  @Output() fecharJanela = new EventEmitter<any>();
  @Output() atualizarTabela = new EventEmitter<any>();
  carregando: boolean = false;

  etapaAtiva: number = 1;

  @ViewChild('pagamentoComponent') pagamentoComponent!: FormularioPagamentoComponent;

  confirmationService = inject(ConfirmationService);
  vendaService = inject(DemonstracaoService);
  toastService = inject(ToastService);

  abrir() {
    this.etapaAtiva = 1;
    this.pagamentoComponent.criarFormaDePagamento();
    this.pagamentoComponent.calcularValores();
  }

  fechar(): void {
    this.limpar();
    this.pagamentoComponent.telaPagamento = false;
    this.pagamentoComponent.geradorDeCondicoes = [];
    this.fecharJanela.emit();
    this.atualizarTabela.emit();
  }

  limpar(): void {
    this.pagamentoComponent.valorTotalPago = 0;
    this.pagamentoComponent.valorTotalNaoPago = 0;
    this.venda = new Venda({});
  }

  salvar(): void {
    this.carregando = true;
    if (this.venda._id) {
      this.alterar();
    } else {
      this.venda._id = uuidv4();
      this.cadastrar();
    }
    this.exibirJanela = false;
  }

  cadastrar(): void {
    this.vendaService.create(this.venda.json())
      .then((): void => this.toastService.sucesso('Registro criado com sucesso.'))
      .catch((error: any): void => this.toastService.erro(error))
      .finally((): void => this.atualizarTabela.emit());
  }

  alterar(): void {
    this.vendaService.update(this.venda.json())
      .then((): void => this.toastService.sucesso('Registro alterado com sucesso.'))
      .catch((error: any): void => this.toastService.erro(error))
      .finally((): void => this.atualizarTabela.emit());
  }

  deletar(): void {
    this.confirmationService.confirm({
      message: 'Tem certeza que deseja deletar este registro de venda ?',
      header: 'Deletar',
      accept: (): void => {
        this.vendaService.delete(this.venda.json())
          .then((): void => this.toastService.sucesso('Registro deletado com sucesso.'))
          .catch((error: any): void => this.toastService.erro(error))
          .finally((): void => {
            this.fecharJanela.emit();
            this.atualizarTabela.emit();
          });
      }
    })
  }

}
