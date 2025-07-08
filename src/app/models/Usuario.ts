export class Usuario {
  nome: string = '';
  codigo: string = '';
  telefone: string = '';
  desativado: boolean = false;
  permissaoAlterarDados: boolean = false;
  permissaoVerDashboard: boolean = false;
  perfil: PERFIL = PERFIL.ADMINISTRADOR;
  tema: TEMA = TEMA.CLARO;
  cadastro: string = new Date().toLocaleString().substring(0, 10);

  constructor(model?: Partial<Usuario>) {
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
  CRIADOR = 3
}

export enum TEMA {
  CLARO = 1,
  ESCURO = 2,
  PERSONALIZADO = 3
}
