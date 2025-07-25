import {Component, inject, OnInit} from '@angular/core';
import {SelectItem} from "primeng/api";
import moment from 'moment';
import {Venda} from "../models/Venda";
import {StatusPagamento} from "../models/enums/StatusPagamento";
import {DemonstracaoService} from "../service/demonstracao.service";
import {ToastService} from "../../../../services/ToastService";
import {Pagamento} from "../models/classes/Pagamento";
import {Parcela} from "../models/classes/Parcela";


@Component({
  selector: 'app-demonstracao-registros',
  templateUrl: './demonstracao-vendas.component.html',
  standalone: false
})
export class DemonstracaoVendasComponent implements OnInit {

  protected readonly ProximoPagamento = StatusPagamento;
  venda: Venda = new Venda({});
  exibirJanela = false;
  carregando = false;
  vendas: Venda[] = [];
  vendasFiltradas: Venda[] = [];

  palavraChave: string = '';

  filtrosStatus: SelectItem[] = [
    {label: 'Todos', value: StatusPagamento.TODOS},
    {label: 'Pagos', value: StatusPagamento.PAGO},
    {label: 'Atrasados', value: StatusPagamento.ATRASADO},
    {label: 'Hoje', value: StatusPagamento.HOJE},
    {label: 'Aguardando', value: StatusPagamento.AGUARDANDO},
  ];
  filtroStatus: StatusPagamento = StatusPagamento.TODOS;

  demonstracaoService = inject(DemonstracaoService);
  toastService = inject(ToastService);

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.vendasFiltradas = [];
    this.carregando = true;
    // window.setTimeout(() => {
    this.demonstracaoService.readVendas()
      .then((array: any[]) => {
        this.vendas = array;
        this.vendas.forEach(venda => {
          this.processarDatas(venda);
          this.configurarPagamento(venda.pagamento)
        });
        this.filtrar();
      })
      .catch((error: any): void => this.toastService.erro(error))
      .finally((): void => {
        this.carregando = false
      });
    // }, 1000);
  }

  processarDatas(venda: Venda): void {
    venda.produto.vencimento = moment(venda.produto.vencimento, "YYYY-MM-DD").toDate();
    venda.cliente.identificacao.nascimento = venda.cliente.identificacao.nascimento ?
      moment(venda.cliente.identificacao.nascimento, "YYYY-MM-DD").toDate() : undefined;
  }

  filtrar(): void {
    this.vendasFiltradas = this.vendas
      .filter((venda: Venda) => venda.cliente.identificacao.nome?.toLowerCase().includes(this.palavraChave.toLowerCase()) ||
        venda.produto.produto?.toLowerCase().includes(this.palavraChave.toLowerCase()))
      .filter((venda: Venda) => (StatusPagamento.TODOS === this.filtroStatus) || (venda.pagamento.statusPagamento === this.filtroStatus));
  }

  passar(venda: any): void {
    this.venda = new Venda(venda);
    this.exibirJanela = true;
  }

  configurarPagamento(pagamento: Pagamento) {
    let parcelasNaoPagas: Parcela[] = pagamento.condicoes.flatMap(
      condicao => condicao.parcelas.filter(parcela => {
        parcela.dataParcela = moment(parcela.dataParcela, "YYYY-MM-DD").toDate();
        return !parcela.parcelaPaga
      }));
    pagamento.formaPagamento = pagamento.condicoes.map(pagamento => pagamento.formaDePagamento).join(', ');
    if (parcelasNaoPagas.length === 0) {
      pagamento.valorFaltando = 0;
      pagamento.tudoPago = pagamento.condicoes.every(parcela => parcela.parcelas.every(p => p.parcelaPaga));
      pagamento.statusPagamento = StatusPagamento.PAGO;
      pagamento.valorFaltando = 0;
    } else {
      let datasParcelasNaoPagas = parcelasNaoPagas.map(parcela => moment(parcela.dataParcela, "YYYY-MM-DD"));
      let menorData = moment.min(datasParcelasNaoPagas);
      let hoje = moment().startOf('date');
      pagamento.dataProximoPagamento = menorData.toDate();
      pagamento.valorFaltando = parcelasNaoPagas.map(p => p.valorParcela)
        .reduce((v1, v2) => v1 += v2);
      if (menorData.isBefore(hoje)) {
        pagamento.statusPagamento = StatusPagamento.ATRASADO;
      } else if (menorData.isSame(hoje)) {
        pagamento.statusPagamento = StatusPagamento.HOJE;
      } else {
        pagamento.statusPagamento = StatusPagamento.AGUARDANDO;
      }
    }
  }

  abrirVendaDialog(): void {
    this.exibirJanela = true;
  }

  fecharVendaDialog(): void {
    this.exibirJanela = false;
  }

}
