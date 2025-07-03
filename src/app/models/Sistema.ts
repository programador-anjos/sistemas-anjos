import {Usuario} from "./Usuario";

export class Sistema {
  nome: string = '';
  rota: string = '';
  // TODO: formulario
  modelo: MODELO = MODELO.PADRAO;
  plano: PLANO = PLANO.GRATUITO;
  usuarios: Usuario[] = [];

  constructor(model?: Partial<Sistema>) {
    Object.assign(this, model);
  }

  json(): any {
    return JSON.parse(JSON.stringify(this));
  }

  eGratuito(): boolean {
    return this.plano === PLANO.GRATUITO
  }

  eAnjo(): boolean {
    return this.plano === PLANO.ANJO
  }

  eArcanjo(): boolean {
    return this.plano === PLANO.ARCANJO
  }

}

export enum MODELO {
  PADRAO = 1,
}

export enum PLANO {
  GRATUITO = 1,
  ANJO = 2,
  ARCANJO = 3,
}
