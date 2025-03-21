import {Component, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from "primeng/api";
import {ToastService} from "./services/ToastService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig,
              private toastService: ToastService,
              private messageService: MessageService) {
  }

  ngOnInit(): void {

    this.toastService.events.subscribe(m => this.messageService.add(m));

    this.primengConfig.ripple = true;

    this.primengConfig.setTranslation({
      accept: 'sim',
      reject: 'não',
      "emptyMessage": "Sem registros",
      "dayNames": ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
      "dayNamesShort": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
      "dayNamesMin": ["Do", "Se", "Te", "Qu", "Qu", "Se", "Sa"],
      "monthNames": ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      "monthNamesShort": ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"]
    });

    //optional configuration with the default configuration
    // const config: AppConfig = {
    //   ripple: false,                      //toggles ripple on and off
    //   inputStyle: 'outlined',             //default style for input elements
    //   menuMode: 'static',                 //layout mode of the menu, valid values are "static" and "overlay"
    //   colorScheme: 'light',               //color scheme of the template, valid values are "light" and "dark"
    //   theme: 'lara-light-indigo',         //default component theme for PrimeNG
    //   scale: 14                           //size of the body font size to scale the whole application
    // };
    // this.layoutService.config.set(config);
  }

}
