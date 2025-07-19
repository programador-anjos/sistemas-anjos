import {Genero} from "./../models/enums/Genero";
import {Cliente, Contato, Endereco, Identificacao} from "../models/classes/Cliente";

export const ClientesMock: Cliente[] = [
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 1',
      nascimento: new Date('1990-01-01'),
      identidade: 'ID0001',
      cpf: '000.000.000-01',
      genero: Genero.MASCULINO
    }),
    endereco: new Endereco({
      cep: '01000-000',
      logradouro: 'Rua 1',
      numero: '10',
      bairro: 'Bairro 1',
      cidade: 'Cidade 1',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-001',
      email: 'cliente1@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 2',
      nascimento: new Date('1990-01-02'),
      identidade: 'ID0002',
      cpf: '000.000.000-02',
      genero: Genero.FEMININO
    }),
    endereco: new Endereco({
      cep: '01000-001',
      logradouro: 'Rua 2',
      numero: '11',
      bairro: 'Bairro 2',
      cidade: 'Cidade 2',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-002',
      email: 'cliente2@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 3',
      nascimento: new Date('1990-01-03'),
      identidade: 'ID0003',
      cpf: '000.000.000-03',
      genero: Genero.MASCULINO
    }),
    endereco: new Endereco({
      cep: '01000-002',
      logradouro: 'Rua 3',
      numero: '12',
      bairro: 'Bairro 3',
      cidade: 'Cidade 3',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-003',
      email: 'cliente3@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 4',
      nascimento: new Date('1990-01-04'),
      identidade: 'ID0004',
      cpf: '000.000.000-04',
      genero: Genero.FEMININO
    }),
    endereco: new Endereco({
      cep: '01000-003',
      logradouro: 'Rua 4',
      numero: '13',
      bairro: 'Bairro 4',
      cidade: 'Cidade 4',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-004',
      email: 'cliente4@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 5',
      nascimento: new Date('1990-01-05'),
      identidade: 'ID0005',
      cpf: '000.000.000-05',
      genero: Genero.MASCULINO
    }),
    endereco: new Endereco({
      cep: '01000-004',
      logradouro: 'Rua 5',
      numero: '14',
      bairro: 'Bairro 5',
      cidade: 'Cidade 5',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-005',
      email: 'cliente5@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 6',
      nascimento: new Date('1990-01-06'),
      identidade: 'ID0006',
      cpf: '000.000.000-06',
      genero: Genero.FEMININO
    }),
    endereco: new Endereco({
      cep: '01000-005',
      logradouro: 'Rua 6',
      numero: '15',
      bairro: 'Bairro 6',
      cidade: 'Cidade 6',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-006',
      email: 'cliente6@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 7',
      nascimento: new Date('1990-01-07'),
      identidade: 'ID0007',
      cpf: '000.000.000-07',
      genero: Genero.MASCULINO
    }),
    endereco: new Endereco({
      cep: '01000-006',
      logradouro: 'Rua 7',
      numero: '16',
      bairro: 'Bairro 7',
      cidade: 'Cidade 7',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-007',
      email: 'cliente7@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 8',
      nascimento: new Date('1990-01-08'),
      identidade: 'ID0008',
      cpf: '000.000.000-08',
      genero: Genero.FEMININO
    }),
    endereco: new Endereco({
      cep: '01000-007',
      logradouro: 'Rua 8',
      numero: '17',
      bairro: 'Bairro 8',
      cidade: 'Cidade 8',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-008',
      email: 'cliente8@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 9',
      nascimento: new Date('1990-01-09'),
      identidade: 'ID0009',
      cpf: '000.000.000-09',
      genero: Genero.MASCULINO
    }),
    endereco: new Endereco({
      cep: '01000-008',
      logradouro: 'Rua 9',
      numero: '18',
      bairro: 'Bairro 9',
      cidade: 'Cidade 9',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-009',
      email: 'cliente9@email.com'
    }),
  }),
  new Cliente({
    identificacao: new Identificacao({
      nome: 'Cliente 10',
      nascimento: new Date('1990-01-10'),
      identidade: 'ID0010',
      cpf: '000.000.000-10',
      genero: Genero.FEMININO
    }),
    endereco: new Endereco({
      cep: '01000-009',
      logradouro: 'Rua 10',
      numero: '19',
      bairro: 'Bairro 10',
      cidade: 'Cidade 10',
      estado: 'SP'
    }),
    contato: new Contato({
      telefone: '(11) 90000-0010',
      email: 'cliente10@email.com'
    })
  })

];
