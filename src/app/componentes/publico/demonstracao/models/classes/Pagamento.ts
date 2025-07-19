import {Condicao} from './Condicao';
import {StatusPagamento} from '../enums/StatusPagamento';

export class Pagamento {
  _id?: string;

  valorTotal: number = 0;
  valorFaltando: number = 0;
  condicoes: Condicao[] = [];

  formaPagamento?: string;
  statusPagamento: StatusPagamento = StatusPagamento.AGUARDANDO;
  dataProximoPagamento: Date =  new Date();
  tudoPago = false;

  constructor(dados: Partial<Pagamento>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
