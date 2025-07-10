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
