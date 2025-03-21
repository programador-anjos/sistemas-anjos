import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html'
})
export class EstatisticasComponent implements OnInit {

  // carregando = true;
  //
  // mesSelecionado: any;
  //
  // clientesCadastradosNoMes: number = 0;
  // servicosFeitosNoMes: number = 0;
  // valorDoMes: number = 0;
  //
  // clientesNoTotal: number = 0;
  // servicosNoTotal: number = 0;
  // valorNoTotal: number = 0;
  //
  // clientes: Cliente[] = [];
  // servicos: Servico[] = [];
  // registros: Registro[] = [];
  //
  // data1: any;
  // options1: any;
  //
  // data2: any;
  // options2: any;
  //
  // data3: any;
  // options3: any;
  //
  // data4: any;
  // options4: any;
  //
  // basicData: any;
  // horizontalOptions: any;

  constructor() {}

  ngOnInit(): void {
    // this.mesSelecionado = new Date();
    // this.carregarValores();
    // this.options1 = this.graficoService.montarOptions1();
    // this.options2 = this.graficoService.montarOptions2();
    // this.options2 = this.graficoService.montarOptions3();
  }

  // carregarValores() {
  //   this.clienteService.obter().then(clientes => {
  //     this.clientesCadastradosNoMes = clientes.filter(cli => Number(cli.cadastro.substring(3, 5)) === (this.mesSelecionado.getMonth() + 1)).length;
  //     this.clientesNoTotal = clientes.length;
  //   });
  //
  //   // this.servicoService.obter().then(servicos => {
  //   // });
  //
  //   this.registroService.obter()
  //     .then(registros => {
  //       this.data3 = this.graficoService.montarData3(registros);
  //       this.data4 = this.graficoService.montarData4(registros);
  //       this.servicosNoTotal = registros.length;
  //       let soma = 0;
  //       let listaFiltrada = registros.filter(reg => {
  //         soma += reg.servico.valor
  //         return Number(reg.cadastro.substring(3, 5)) === (this.mesSelecionado.getMonth() + 1);
  //       });
  //       this.valorNoTotal = soma;
  //       this.servicosFeitosNoMes = listaFiltrada.length;
  //       soma = 0;
  //       listaFiltrada.forEach(r => soma += r.servico.valor);
  //       this.valorDoMes = soma;
  //       return listaFiltrada;
  //     })
  //     .then((registros: Registro[]) => {
  //       this.data1 = this.graficoService.montarData1(registros);
  //       return registros;
  //     })
  //     .then((registros: Registro[]) => {
  //       this.data2 = this.graficoService.montarData2(registros);
  //       return registros;
  //     });
  // }

}
