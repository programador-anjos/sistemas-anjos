import { Venda } from './../models/Venda';
import {Identificacao} from "./../models/classes/Identificacao";
import {Genero} from "./../models/enums/Genero";
import {Endereco} from "./../models/classes/Endereco";
import {Produto} from "./../models/classes/Produto";
import {Contato} from "./../models/classes/Contato";
import {Pagamento} from "./../models/classes/Pagamento";
import {FormaDePagamento} from "./../models/enums/FormaDePagamento";
import {StatusPagamento} from "./../models/enums/StatusPagamento";
import {Parcela} from "./../models/classes/Parcela";
import {Condicao} from "./../models/classes/Condicao";
import moment from "moment/moment";

export const VendasMock: Venda[] = [

  new Venda({
    _id: 'v001',
    dataVenda: new Date('2025-07-01'),
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
    produto: new Produto({
      produto: 'Produto 1',
      preco: '1000',
      marca: 'Marca 1',
      modelo: 'Modelo 1',
      quantidade: '1',
      categoria: 'Categoria 1',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 1'
    }),
    pagamento: new Pagamento({
      valorTotal: 1000,
      valorFaltando: 0,
      formaPagamento: FormaDePagamento.DINHEIRO,
      statusPagamento: StatusPagamento.PAGO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: true,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.DINHEIRO,
          valor: 1000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 333.33, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 333.33, dataParcela: new Date('2025-08-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 333.33, dataParcela: new Date('2025-09-01'), parcelaPaga: true })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v002',
    dataVenda: new Date('2025-07-02'),
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
    produto: new Produto({
      produto: 'Produto 2',
      preco: '2000',
      marca: 'Marca 2',
      modelo: 'Modelo 2',
      quantidade: '1',
      categoria: 'Categoria 2',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 2'
    }),
    pagamento: new Pagamento({
      valorTotal: 2000,
      valorFaltando: 666.6666666666666,
      formaPagamento: FormaDePagamento.PIX,
      statusPagamento: StatusPagamento.ATRASADO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: false,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.PIX,
          valor: 2000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 666.67, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 666.67, dataParcela: new Date('2026-08-01'), parcelaPaga: false }),
            new Parcela({ valorParcela: 666.67, dataParcela: new Date('2026-09-01'), parcelaPaga: false })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v003',
    dataVenda: new Date('2025-07-03'),
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
    produto: new Produto({
      produto: 'Produto 3',
      preco: '3000',
      marca: 'Marca 3',
      modelo: 'Modelo 3',
      quantidade: '1',
      categoria: 'Categoria 3',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 3'
    }),
    pagamento: new Pagamento({
      valorTotal: 3000,
      valorFaltando: 1000.0,
      formaPagamento: FormaDePagamento.CREDITO,
      statusPagamento: StatusPagamento.ATRASADO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: false,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.CREDITO,
          valor: 3000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 1000.00, dataParcela: new Date('2025-02-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 1000.00, dataParcela: new Date('2025-03-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 1000.00, dataParcela: new Date('2025-04-01'), parcelaPaga: false })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v004',
    dataVenda: new Date('2025-07-04'),
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
    produto: new Produto({
      produto: 'Produto 4',
      preco: '4000',
      marca: 'Marca 4',
      modelo: 'Modelo 4',
      quantidade: '1',
      categoria: 'Categoria 4',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 4'
    }),
    pagamento: new Pagamento({
      valorTotal: 4000,
      valorFaltando: 0,
      formaPagamento: FormaDePagamento.DEBITO,
      statusPagamento: StatusPagamento.PAGO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: true,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.DEBITO,
          valor: 4000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 1333.33, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 1333.33, dataParcela: new Date('2025-08-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 1333.33, dataParcela: new Date('2025-09-01'), parcelaPaga: true })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v005',
    dataVenda: new Date('2025-07-05'),
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
    produto: new Produto({
      produto: 'Produto 5',
      preco: '5000',
      marca: 'Marca 5',
      modelo: 'Modelo 5',
      quantidade: '1',
      categoria: 'Categoria 5',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 5'
    }),
    pagamento: new Pagamento({
      valorTotal: 5000,
      valorFaltando: 1666.6666666666667,
      formaPagamento: FormaDePagamento.DINHEIRO,
      statusPagamento: StatusPagamento.ATRASADO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: false,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.DINHEIRO,
          valor: 5000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 1666.67, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 1666.67, dataParcela: new Date('2025-08-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 1666.67, dataParcela: new Date('2026-09-01'), parcelaPaga: false })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v006',
    dataVenda: new Date('2025-07-06'),
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
    produto: new Produto({
      produto: 'Produto 6',
      preco: '6000',
      marca: 'Marca 6',
      modelo: 'Modelo 6',
      quantidade: '1',
      categoria: 'Categoria 6',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 6'
    }),
    pagamento: new Pagamento({
      valorTotal: 6000,
      valorFaltando: 2000.0,
      formaPagamento: FormaDePagamento.PIX,
      statusPagamento: StatusPagamento.AGUARDANDO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: false,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.PIX,
          valor: 6000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 2000.00, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 2000.00, dataParcela: new Date('2026-08-01'), parcelaPaga: false }),
            new Parcela({ valorParcela: 2000.00, dataParcela: new Date('2026-09-01'), parcelaPaga: false })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v007',
    dataVenda: new Date('2025-07-07'),
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
    produto: new Produto({
      produto: 'Produto 7',
      preco: '7000',
      marca: 'Marca 7',
      modelo: 'Modelo 7',
      quantidade: '1',
      categoria: 'Categoria 7',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 7'
    }),
    pagamento: new Pagamento({
      valorTotal: 7000,
      valorFaltando: 0,
      formaPagamento: FormaDePagamento.CREDITO,
      statusPagamento: StatusPagamento.PAGO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: true,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.CREDITO,
          valor: 7000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 2333.33, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 2333.33, dataParcela: new Date('2025-08-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 2333.33, dataParcela: new Date('2025-09-01'), parcelaPaga: true })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v008',
    dataVenda: new Date('2025-07-08'),
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
    produto: new Produto({
      produto: 'Produto 8',
      preco: '8000',
      marca: 'Marca 8',
      modelo: 'Modelo 8',
      quantidade: '1',
      categoria: 'Categoria 8',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 8'
    }),
    pagamento: new Pagamento({
      valorTotal: 8000,
      valorFaltando: 2666.6666666666665,
      formaPagamento: FormaDePagamento.DEBITO,
      statusPagamento: StatusPagamento.HOJE,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: false,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.DEBITO,
          valor: 8000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 2666.67, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 2666.67, dataParcela: moment().startOf('date').toDate(), parcelaPaga: false }),
            new Parcela({ valorParcela: 2666.67, dataParcela: moment().startOf('date').toDate(), parcelaPaga: false })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v009',
    dataVenda: new Date('2025-07-09'),
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
    produto: new Produto({
      produto: 'Produto 9',
      preco: '9000',
      marca: 'Marca 9',
      modelo: 'Modelo 9',
      quantidade: '1',
      categoria: 'Categoria 9',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 9'
    }),
    pagamento: new Pagamento({
      valorTotal: 9000,
      valorFaltando: 3000.0,
      formaPagamento: FormaDePagamento.DINHEIRO,
      statusPagamento: StatusPagamento.AGUARDANDO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: false,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.DINHEIRO,
          valor: 9000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 3000.00, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 3000.00, dataParcela: new Date('2025-08-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 3000.00, dataParcela: new Date('2026-09-01'), parcelaPaga: false })
          ]
        })
      ]
    })
  }),

  new Venda({
    _id: 'v010',
    dataVenda: new Date('2025-07-10'),
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
    }),
    produto: new Produto({
      produto: 'Produto 10',
      preco: '10000',
      marca: 'Marca 10',
      modelo: 'Modelo 10',
      quantidade: '1',
      categoria: 'Categoria 10',
      estoque: '10',
      vencimento: new Date('2026-01-01'),
      descricao: 'Descrição do produto 10'
    }),
    pagamento: new Pagamento({
      valorTotal: 10000,
      valorFaltando: 0,
      formaPagamento: FormaDePagamento.PIX,
      statusPagamento: StatusPagamento.PAGO,
      dataProximoPagamento: new Date('2025-08-01'),
      tudoPago: true,
      condicoes: [
        new Condicao({
          formaDePagamento: FormaDePagamento.PIX,
          valor: 10000,
          parcelamento: '3x',
          parcelas: [
            new Parcela({ valorParcela: 3333.33, dataParcela: new Date('2025-07-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 3333.33, dataParcela: new Date('2025-08-01'), parcelaPaga: true }),
            new Parcela({ valorParcela: 3333.33, dataParcela: new Date('2025-09-01'), parcelaPaga: true })
          ]
        })
      ]
    })
  })
];
