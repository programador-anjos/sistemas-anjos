import {FormaDePagamento} from '../enums/FormaDePagamento';
import {SelectItem} from 'primeng/api';

export class GeradorDeCondicoes {
  formaDePagamento: FormaDePagamento = FormaDePagamento.DINHEIRO;
  valor: number = 0;
  parcelamento: string = '';
  parcelas: SelectItem[] = [];

  constructor(dados: Partial<GeradorDeCondicoes>) {
    Object.assign(this, dados);
  }

  gerarParcelamentosParaSelecao(): void {
    this.parcelas = [];
    for (let i: number = 1; i <= 6; i++) {
      let valorCalculado: number = Number(this.valor / i);
      let valorArredondado: number = Math.round(valorCalculado * 100) / 100;
      let valorFormatado: string = (valorArredondado).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
      let valorFinal: string = i + 'x ' + valorFormatado;
      this.parcelas.push({label: valorFinal, value: valorFinal});
    }
    this.parcelamento = this.parcelas[0].label ?? '';
  }

}
