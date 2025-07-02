import {Component, HostListener} from '@angular/core';
import {AparenciaService} from "../../../services/AparenciaService";

@Component({
    selector: 'app-aparencia',
    templateUrl: './aparencia.component.html',
    styleUrls: ['./aparencia.component.css'],
    standalone: false
})
export class AparenciaComponent {

  constructor(private aparenciaService: AparenciaService) {
    this.getScreenSize();
  }

  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    // this.scrHeight = window.innerHeight;
    this.scrWidth = window.innerWidth;
  }

  states: any[] = [
    {label: 'Arizona', value: 'Arizona'},
    {label: 'California', value: 'California'},
    {label: 'Florida', value: 'Florida'},
    {label: 'Ohio', value: 'Ohio'},
    {label: 'Washington', value: 'Washington'}
  ];

  check: any = true;
  check2: any = false;
  radio: any = 'Exemplo';
  calendar: any;

  alterarAparencia(theme: string) {
    this.aparenciaService.alterarAparencia(theme.substring(0, theme.length - 4));
  }

  lista: {label: string, value: string}[] = [
    {label: 'lara-light-blue.png', value: 'lara-light-blue'},
    {label: 'lara-light-indigo.png', value: 'lara-light-indigo'},
    {label: 'lara-light-purple.png', value: 'lara-light-purple'},
    {label: 'lara-light-teal.png', value: 'lara-light-teal'},
    {label: 'lara-dark-blue.png', value: 'lara-dark-blue'},
    {label: 'lara-dark-indigo.png', value: 'lara-dark-indigo'},
    {label: 'lara-dark-purple.png', value: 'lara-dark-purple'},
    {label: 'lara-dark-teal.png', value: 'lara-dark-teal'},
    {label: 'bootstrap4-dark-blue.svg', value: 'bootstrap4-dark-blue'},
    {label: 'bootstrap4-dark-purple.svg', value: 'bootstrap4-dark-purple'},
    {label: 'bootstrap4-light-blue.svg', value: 'bootstrap4-light-blue'},
    {label: 'bootstrap4-light-purple.svg', value: 'bootstrap4-light-purple'},
    {label: 'md-dark-deeppurple.svg', value: 'md-dark-deeppurple'},
    {label: 'md-dark-indigo.svg', value: 'md-dark-indigo'},
    {label: 'md-light-deeppurple.svg', value: 'md-light-deeppurple'},
    {label: 'md-light-indigo.svg', value: 'md-light-indigo'},
    {label: 'arya-blue.png', value: 'arya-blue'},
    {label: 'arya-green.png', value: 'arya-green'},
    {label: 'arya-orange.png', value: 'arya-orange'},
    {label: 'arya-purple.png', value: 'arya-purple'},
    {label: 'saga-blue.png', value: 'saga-blue'},
    {label: 'saga-green.png', value: 'saga-green'},
    {label: 'saga-orange.png', value: 'saga-orange'},
    {label: 'saga-purple.png', value: 'saga-purple'},
    {label: 'vela-blue.png', value: 'vela-blue'},
    {label: 'vela-green.png', value: 'vela-green'},
    {label: 'vela-orange.png', value: 'vela-orange'},
    {label: 'vela-purple.png', value: 'vela-purple'},
    {label: 'fluent-light.png', value: 'fluent-light'},
    {label: 'tailwind-light.png', value: 'tailwind-light'},
  ];

}
