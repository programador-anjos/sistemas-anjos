
export class Sistema {
  nome: string = '';
  rota: string = '';
  aparencia: string = '';
  modelo?: MODELO = MODELO.PADRAO;
  plano?: PLANO = PLANO.GRATUITO;

  constructor(model?: Partial<Sistema>) {
    Object.assign(this, model);
  }

  eGratuito(): boolean {
    return this.plano === PLANO.GRATUITO
  }

  eAnjo(): boolean {
    return this.plano === PLANO.ANJO
  }

  eQuerubim(): boolean {
    return this.plano === PLANO.QUERUBIM
  }

  eArcanjo(): boolean {
    return this.plano === PLANO.ARCANJO
  }

  eDeus(): boolean {
    return this.plano === PLANO.DEUS
  }

}

export enum MODELO {
  PADRAO = 1,
}

export enum PLANO {
  GRATUITO = 1,
  ANJO = 2,
  QUERUBIM = 3,
  ARCANJO = 4,
  DEUS = 9
}
