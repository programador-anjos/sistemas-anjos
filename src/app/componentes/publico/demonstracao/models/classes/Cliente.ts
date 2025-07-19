export class Cliente {
  _id?: string;
  identificacao: Identificacao = new Identificacao({});
  endereco: Endereco = new Endereco({});
  contato: Contato = new Contato({});

  constructor(dados: Partial<Cliente>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}

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

export class Endereco {
  cep?: string;
  logradouro?: string;
  numero?: string;
  bairro?: string;
  cidade?: string;
  estado?: string;

  constructor(dados: Partial<Endereco>) {
    Object.assign(this, dados);
  }

  json() {
    return JSON.parse(JSON.stringify(this));
  }

}

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
