import { isPlatformBrowser } from '@angular/common';
import { ChangeDetectorRef, Component, effect, inject, OnInit, PLATFORM_ID } from '@angular/core';
// import { AppConfigService } from '@/service/appconfigservice';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  standalone: false
})
export class LineChartComponent implements OnInit {

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

  ngOnInit() {
    this.initChart();
  }

  initChart() {
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
            label: 'Recebidos',
            data: [65, 59, 80, 81, 56, 55, 40, 28, 48, 40, 19, 86],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-green-500'),
            tension: 0.4
          },
          {
            label: 'Pendentes',
            data: [28, 48, 40, 19, 86, 27, 90, 65, 59, 80, 81, 56],
            fill: false,
            borderColor: documentStyle.getPropertyValue('--p-red-500'),
            tension: 0.4
          }
        ]
      };

      this.options = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
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
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      };
      this.cd.markForCheck()
    }
  }
}
