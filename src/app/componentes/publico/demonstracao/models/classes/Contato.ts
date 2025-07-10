export class Contato {
  telefone?: string;
  email?: string;

  constructor(dados: Partial<Contato>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
