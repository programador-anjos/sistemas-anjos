import {isPlatformBrowser} from '@angular/common';
import {ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID} from '@angular/core';
import {ChartModule} from 'primeng/chart';
import {ArmazenamentoService} from "../../../../../services/ArmazenamentoService";

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  standalone: false
})
export class BarChartComponent implements OnInit {
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
      const textColor = documentStyle.getPropertyValue('--p-text-color');
      const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');
      const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

      this.data = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
          'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
        datasets: [
          {
            label: 'Pendentes',
            backgroundColor: documentStyle.getPropertyValue('--p-red-500'),
            borderColor: documentStyle.getPropertyValue('--p-red-500'),
            data: [65, 59, 80, 81, 56, 55, 65, 59, 80, 81, 56, 55]
          },
          {
            label: 'Recebidos',
            backgroundColor: documentStyle.getPropertyValue('--p-green-500'),
            borderColor: documentStyle.getPropertyValue('--p-green-500'),
            data: [28, 48, 40, 19, 86, 27, 28, 48, 40, 19, 86, 27]
          }
        ]
      };
      this.alterarOpcoes(false);
      this.cd.markForCheck()
    }
  }


  private alterarOpcoes(temaEscuro: boolean) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue(temaEscuro ? '--p-sky-50' : '--p-sky-950');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    this.options = {
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: textColor,
            font: {
              weight: 500
            }
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        y: {
          ticks: {
            color: textColor
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

  }

}
