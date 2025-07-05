export class Produto {
  aro?: string;
  codigo?: string;
  lente?: string;

  l1c1?: string;
  l1c2?: string;
  l1c3?: string;
  l1c4?: string;
  l1c5?: string;

  l2c1?: string;
  l2c2?: string;
  l2c3?: string;
  l2c4?: string;
  l2c5?: string;

  l3c1?: string;
  l3c2?: string;
  l3c3?: string;
  l3c4?: string;
  l3c5?: string;

  l5c1?: string;
  l5c2?: string;
  l5c3?: string;
  l5c4?: string;
  l5c5?: string;

  adicao?: string;

  dataVencimentoReceita: Date = new Date();

  observacoes?: string;

  constructor(dados: Partial<Produto>) {
    Object.assign(this, dados);
    this.dataVencimentoReceita.setFullYear(this.dataVencimentoReceita.getFullYear() + 1);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
