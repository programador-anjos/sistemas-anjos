import {Usuario} from "./Usuario";

export class Sistema {
  nome: string = '';
  codigo: string = '';
  rota: string = '';
  // TODO: formulario
  modelo: MODELO = MODELO.PADRAO;
  plano: PLANO = PLANO.ANJO;
  usuarios: Usuario[] = [];

  constructor(model?: Partial<Sistema>) {
    Object.assign(this, model);
  }

  json(): any {
    return JSON.parse(JSON.stringify(this));
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
  ANJO = 1,
  ARCANJO = 2,
}
