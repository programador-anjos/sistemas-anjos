import {Endereco} from './classes/Endereco';
import {Contato} from './classes/Contato';
import {Identificacao} from './classes/Identificacao';
import {Produto} from './classes/Produto';
import {Pagamento} from './classes/Pagamento';

export class Venda {
  _id?: string;
  dataVenda: Date = new Date();

  identificacao: Identificacao = new Identificacao({});
  endereco: Endereco = new Endereco({});
  contato: Contato = new Contato({});

  produto: Produto = new Produto({});

  pagamento: Pagamento = new Pagamento({});

  constructor(dados: Partial<Venda>) {
    if (dados) {
      Object.assign(this, dados);
    }
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}


