import {Component, OnInit} from '@angular/core';
import {SelectItem} from "primeng/api";
import moment from 'moment';
import {ToastService} from "../../../services/ToastService";
import {StatusPagamento} from "./models/enums/StatusPagamento";
import {Venda} from "./models/Venda";
import {Pagamento} from "./models/classes/Pagamento";
import {Parcela} from "./models/classes/Parcela";
import {ExemploService} from "./service/exemplo.service";

@Component({
  selector: 'app-exemplo',
  templateUrl: './exemplo.component.html',
  standalone: false
})
export class ExemploComponent implements OnInit {

  protected readonly ProximoPagamento = StatusPagamento;

  venda: Venda = new Venda({});
  exibirJanela = false;
  carregando = false;
  vendas: Venda[] = [];
  vendasFiltradas: Venda[] = [];

  filtroNome: string = '';

  filtrosStatus: SelectItem[] = [
    {label: 'Todos', value: StatusPagamento.TODOS},
    {label: 'Pagos', value: StatusPagamento.PAGO},
    {label: 'Atrasados', value: StatusPagamento.ATRASADO},
    {label: 'Hoje', value: StatusPagamento.HOJE},
    {label: 'Aguardando', value: StatusPagamento.AGUARDANDO},
  ];
  filtroStatus: StatusPagamento = StatusPagamento.TODOS;

  constructor(private vendaService: ExemploService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.pesquisar();
  }

  pesquisar(): void {
    this.vendasFiltradas = [];
    this.carregando = true;
    // setTimeout(() => {
    this.vendaService.read()
      .then((array: any[]) => {
        this.vendas = array;
        this.vendas.forEach(venda => {
          this.processarDatas(venda);
          this.configurarPagamento(venda.pagamento)
        });
      })
      .catch((error: any): void => this.toastService.erro(error))
      .finally((): void => this.filtrar());
    // }, 5000)
  }

  processarDatas(venda: Venda): void {
    venda.produto.dataVencimentoReceita = moment(venda.produto.dataVencimentoReceita, "YYYY-MM-DD").toDate();
    venda.identificacao.nascimento = venda.identificacao.nascimento ?
      moment(venda.identificacao.nascimento, "YYYY-MM-DD").toDate() : undefined;
  }

  filtrar(): void {
    this.carregando = true;
    this.vendasFiltradas = this.vendas.filter((venda: Venda) => venda.identificacao.nome?.toLowerCase().includes(this.filtroNome.toLowerCase()))
      .filter((venda: Venda) => (StatusPagamento.TODOS === this.filtroStatus) || (venda.pagamento.statusPagamento === this.filtroStatus));
    this.carregando = false;
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
      }
      else if (menorData.isSame(hoje)) {
        pagamento.statusPagamento = StatusPagamento.HOJE;
      }
      else {
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
