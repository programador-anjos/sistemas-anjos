import {isPlatformBrowser} from '@angular/common';
import {ChangeDetectorRef, Component, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ArmazenamentoService} from "../../../../../services/ArmazenamentoService";

// import { AppConfigService } from '@/service/appconfigservice';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  standalone: false
})
export class PieChartComponent implements OnInit {
  data: any;

  options: any;

  platformId = inject(PLATFORM_ID);

  // configService = inject(AppConfigService);

  // designerService = inject(DesignerService);

  constructor(private cd: ChangeDetectorRef) {}

  // themeEffect = effect(() => {
  //   if (this.configService.transitionComplete()) {
  //     if (this.designerService.preset()) {
  //       this.initChart();
  //     }
  //   }
  // });

  armazenamentoService = inject(ArmazenamentoService);

  ngOnInit() {
    this.carregarGrafico();
    this.armazenamentoService.observarTema.subscribe(temaEscuro => this.alterarOpcoes(temaEscuro));
  }

  carregarGrafico() {
    if (isPlatformBrowser(this.platformId)) {
      const documentStyle = getComputedStyle(document.documentElement);
      this.data = {
        labels: ['Produto 1', 'Produto 2', 'Produto 3', 'Produto 4', 'Produto 5'],
        datasets: [
          {
            data: [15, 20, 30, 40, 45],
            backgroundColor: [
              documentStyle.getPropertyValue('--p-amber-500'),
              documentStyle.getPropertyValue('--p-cyan-500'),
              documentStyle.getPropertyValue('--p-rose-500'),
              documentStyle.getPropertyValue('--p-lime-500'),
              documentStyle.getPropertyValue('--p-indigo-500')
            ],
            hoverBackgroundColor: [
              documentStyle.getPropertyValue('--p-amber-500'),
              documentStyle.getPropertyValue('--p-cyan-500'),
              documentStyle.getPropertyValue('--p-rose-500'),
              documentStyle.getPropertyValue('--p-lime-500'),
              documentStyle.getPropertyValue('--p-indigo-500')
            ]
          }
        ]
      };
      this.alterarOpcoes(false);
    }

  }

  private alterarOpcoes(temaEscuro: boolean) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue(temaEscuro ? '--p-sky-50' : '--p-sky-950');
    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }
}
