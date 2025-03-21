import {GenericModel} from "./GenericModel";

export class Acesso extends GenericModel<Acesso> {
  sistema?: string;
  email?: string;
  resultado?: RESULTADO;
  data?: string = new Date().toLocaleString().substring(0, 17);

  constructor(model?: Partial<Acesso>) {
    super(model);
  }

}

export enum RESULTADO {
  SUCESSO = 1,
  FALHA = 2
}
