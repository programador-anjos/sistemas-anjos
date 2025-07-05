import {Parcela} from './Parcela';
import {FormaDePagamento} from '../enums/FormaDePagamento';

export class Condicao {
  formaDePagamento: FormaDePagamento = FormaDePagamento.DINHEIRO;
  valor: number = 0;
  parcelamento: string = '';
  parcelas: Parcela[] = [];

  constructor(dados: Partial<Condicao>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
