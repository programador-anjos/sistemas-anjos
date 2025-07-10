import {Component, Input} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {ToastService} from "../../../../../services/ToastService";
import {Pagamento} from "../../models/classes/Pagamento";
import {GeradorDeCondicoes} from "../../models/classes/GeradorDeCondicoes";
import {FormaDePagamento} from "../../models/enums/FormaDePagamento";
import {Parcela} from "../../models/classes/Parcela";
import {Condicao} from "../../models/classes/Condicao";

@Component({
  selector: 'app-formulario-pagamento',
  templateUrl: './formulario-pagamento.component.html',
  standalone: false,
})
export class FormularioPagamentoComponent {
  @Input() pagamento: Pagamento = new Pagamento({});
  @Input() modoEdicao: boolean = false;

  valorTotalPago: number = 0;
  valorTotalNaoPago: number = 0;

  telaPagamento: boolean = false;

  geradorDeCondicoes: GeradorDeCondicoes[] = [];

  formasDePagamento: SelectItem[] = [
    {label: 'Dinheiro', value: FormaDePagamento.DINHEIRO},
    {label: 'PIX', value: FormaDePagamento.PIX},
    {label: 'Cartão de débito', value: FormaDePagamento.DEBITO},
    {label: 'Cartão de crédito', value: FormaDePagamento.CREDITO},
  ];

  constructor(private toastService: ToastService) {
  }

  espelharValor(): void {
    if (this.geradorDeCondicoes.length === 1 && this.pagamento.valorTotal > 0) {
      this.geradorDeCondicoes[0].valor = this.pagamento.valorTotal;
      this.geradorDeCondicoes[0].gerarParcelamentosParaSelecao();
    }
  }

  criarFormaDePagamento(): void {
    if (!this.modoEdicao) {
      let condicao = new GeradorDeCondicoes({valor: this.pagamento.valorTotal});
      condicao.gerarParcelamentosParaSelecao();
      this.geradorDeCondicoes.push(condicao);
    }
  }

  btnGerarParcelasDisabled(): boolean {
    return this.geradorDeCondicoes.length == 0 || !this.pagamento.valorTotal || this.pagamento.valorTotal === 0 ||
      this.geradorDeCondicoes.some(c => c.valor == 0 || c.parcelamento == '');
  }

  salvarFormasDePagamento(): void {
    if (this.validarValores()) {
      this.gerarParcelasParaPagamento();
      this.calcularValores();
      this.telaPagamento = true;
    } else {
      this.toastService.erro('Valor total e soma das parcelas não coincidem');
    }
  }

  gerarParcelasParaPagamento(): void {
    this.geradorDeCondicoes.forEach(condicao => {
      let posicaoQuantidade: number = condicao.parcelamento.indexOf('x');
      let quantidade: number = Number(condicao.parcelamento.substring(0, posicaoQuantidade));
      let posicaoValor: number = condicao.parcelamento.indexOf('$');
      let valor: string = condicao.parcelamento.substring(posicaoValor + 2);
      let parcelas: Parcela[] = [];
      for (let i: number = 1; i <= quantidade; i++) {
        let number: number = Number(valor.replace('.', '').replace(',', '.'));
        parcelas.push(new Parcela({
          valorParcela: number,
          dataParcela: new Date(),
          parcelaPaga: false
        }));
      }
      let condicaoComParcelas = new Condicao({
          formaDePagamento: condicao.formaDePagamento,
          valor: condicao.valor,
          parcelamento: condicao.parcelamento,
          parcelas: parcelas
        }
      );
      this.pagamento.condicoes.push(condicaoComParcelas);
    });
  }

  validarValores() {
    let valorSomado: number = this.geradorDeCondicoes.map(i => i.valor)
      .reduce((anterior, atual) => anterior += atual);
    return valorSomado === this.pagamento.valorTotal;
  }

  pagar(parcela: any): void {
    parcela.parcelaPaga = true;
    this.calcularValores();
  }

  calcularValores(): void {
    this.valorTotalPago = 0;
    this.valorTotalNaoPago = 0;
    this.pagamento.condicoes.forEach((pagamento: Condicao) => {
      pagamento.parcelas.forEach((parcela: Parcela) => {
        if (parcela.parcelaPaga) {
          this.valorTotalPago += parcela.valorParcela ?? 0;
        } else {
          this.valorTotalNaoPago += parcela.valorParcela ?? 0;
        }
      })
    })
  }

}
