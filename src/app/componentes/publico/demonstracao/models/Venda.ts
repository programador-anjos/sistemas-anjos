import {Produto} from './classes/Produto';
import {Pagamento} from './classes/Pagamento';
import {Cliente} from "./classes/Cliente";

export class Venda {
  _id?: string;
  dataVenda: Date = new Date();

  cliente: Cliente = new Cliente({});

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


