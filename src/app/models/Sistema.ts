import {Usuario} from "./Usuario";
import {v4 as uuidv4} from "uuid";
import 'reflect-metadata';
import { Type } from 'class-transformer';


export class Sistema {
  codigo: string = uuidv4();
  titulo: string = '';
  modelo: MODELO = MODELO.PADRAO;
  plano: PLANO = PLANO.GRATUITO;

  @Type(() => Usuario)
  usuarios: Usuario[] = [];

  constructor(model?: Partial<Sistema>) {
    Object.assign(this, model);
  }

  json(): any {
    return JSON.parse(JSON.stringify(this));
  }

  eArcanjo(): boolean {
    return this.plano === PLANO.ARCANJO
  }

  eQuerubim(): boolean {
    return this.plano === PLANO.QUERUBIM
  }

}

export enum MODELO {
  PADRAO = 1,
}

export enum PLANO {
  GRATUITO = 1,
  ARCANJO = 2,
  QUERUBIM = 3,
}
