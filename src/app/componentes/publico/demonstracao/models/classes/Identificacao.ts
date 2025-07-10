export class Identificacao {
  nome?: string;
  nascimento?: Date;
  identidade?: string;
  cpf?: string;
  genero?: string;

  constructor(dados: Partial<Identificacao>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}
