import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-rodape',
    templateUrl: './rodape.component.html',
    standalone: false
})
export class RodapeComponent implements  OnInit {

  data: number = new Date().getFullYear();

  width: number | undefined;
  height: number | undefined;

  exibirResolucao = false;

  constructor() {
  }

  ngOnInit(): void {
    this.obterResolucao()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.obterResolucao();
  }

  obterResolucao() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.exibirResolucao = true;
    setTimeout(() => {
      this.exibirResolucao = false;
    }, 3000)
  }

}
