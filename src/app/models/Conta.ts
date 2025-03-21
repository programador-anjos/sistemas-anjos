import {Sistema} from "./Sistema";

export class Conta {
  email: string = '';
  senha: string = '';
  perfil: PERFIL = PERFIL.ADMINISTRADOR;
  sistema?: Sistema = new Sistema();
  cadastro: string = new Date().toLocaleString().substring(0, 10);

  constructor(model?: Partial<Conta>) {
    Object.assign(this, model);
  }

  eUsuario(): boolean {
    return this.perfil === PERFIL.USUARIO
  }

  eAdministrador(): boolean {
    return this.perfil === PERFIL.ADMINISTRADOR
  }

  eCriador(): boolean {
    return this.perfil === PERFIL.CRIADOR
  }

  json(): any {
    return JSON.parse(JSON.stringify(this));
  }

}

export enum PERFIL {
  USUARIO = 1,
  ADMINISTRADOR = 2,
  CRIADOR = 9
}
