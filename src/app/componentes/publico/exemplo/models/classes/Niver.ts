export class Niver {
  _id?: string;
  nome?: string;
  telefone?: string;
  dia?: number;
  mes?: number;
  data?: string;
  idade?: number;
  hoje?: boolean;

  constructor(dados: Partial<Niver>) {
    Object.assign(this, dados);
  }

}
