import {MODELO, PLANO, Sistema} from "../../../../models/Sistema";
import {PERFIL, Usuario} from "../../../../models/Usuario";

export const SistemaUsuariosMock: Sistema = new Sistema({
  titulo: '(Titulo do sistema)',
  modelo: MODELO.PADRAO,
  plano: PLANO.QUERUBIM,
  usuarios: [
    new Usuario({
      senha: '123456',
      nome: 'Paulo',
      telefone: '(11) 98765-4321',
      ativo: true,
      temaEscuro: true,
      perfil: PERFIL.ADMINISTRADOR,
      permissoes: [
        'VER_CLIENTES',
        'CADASTRAR_CLIENTES',
        'ALTERAR_CLIENTES',
        'DELETAR_CLIENTES',
        'VER_PRODUTOS',
        'CADASTRAR_PRODUTOS',
        'ALTERAR_PRODUTOS',
        'DELETAR_PRODUTOS',
        'VER_VENDAS',
        'CADASTRAR_VENDAS',
        'ALTERAR_VENDAS',
        'DELETAR_VENDAS',
        'VER_PAINEL',
        'CONFIGURAR_CLIENTES',
        'CONFIGURAR_PRODUTOS'
      ]
    }),
    new Usuario({
      senha: '123456',
      nome: 'Ana',
      telefone: '(21) 98765-4321',
      ativo: true,
      perfil: PERFIL.USUARIO,
    }),
    new Usuario({
      senha: '123456',
      nome: 'Carlos',
      telefone: '(31) 98765-4321',
      ativo: true,
      perfil: PERFIL.USUARIO,
    }),
    new Usuario({
      senha: '123456',
      nome: 'Fernanda',
      telefone: '(41) 98765-4321',
      ativo: true,
      perfil: PERFIL.USUARIO,
    }),
    new Usuario({
      senha: '123456',
      nome: 'João',
      telefone: '(51) 98765-4321',
      ativo: false,
      perfil: PERFIL.USUARIO,
    })
  ]
});
