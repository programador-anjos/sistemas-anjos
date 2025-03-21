
export class Formulario {
  colunas: Coluna[] = [];

  constructor(model?: Partial<Formulario>) {
    Object.assign(this, model);
  }

}

export class Coluna {
  ordem: number = 0;
  campos: Campo[] = [];

  constructor(model?: Partial<Coluna>) {
    Object.assign(this, model);
  }

}

export class Campo {
  rotulo: string = '';
  tipo: string = '';

  constructor(model?: Partial<Campo>) {
    Object.assign(this, model);
  }

}

