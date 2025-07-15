export class Produto {
  produto?: string;
  preco?: string;

  marca?: string;
  modelo?: string;

  quantidade?: string;
  categoria?: string;

  estoque?: string;
  vencimento: Date = new Date();

  descricao?: string;

  constructor(dados: Partial<Produto>) {
    Object.assign(this, dados);
    this.vencimento.setFullYear(this.vencimento.getFullYear() + 1);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
