export class Parcela {
  valorParcela: number = 0;
  dataParcela?: Date;
  parcelaPaga: boolean = false;

  constructor(dados: Partial<Parcela>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
