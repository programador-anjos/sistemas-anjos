export class RegistroDeAcesso {
  _id?: string;
  sistema?: string;
  usuario?: string;
  resultado?: RESULTADO;
  data?: string = new Date().toLocaleString().substring(0, 17);

  constructor(model?: Partial<RegistroDeAcesso>) {
    Object.assign(this, model);
  }

  json(): any {
    return JSON.parse(JSON.stringify(this));
  }

}

export enum RESULTADO {
  SUCESSO = 1,
  FALHA = 2
}
