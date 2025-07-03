import {Inject, Injectable, DOCUMENT} from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AparenciaService {

  constructor(@Inject(DOCUMENT) private document: Document) {}

  carregarAparencia() {
    let aparencia = localStorage.getItem('aparencia');
    if (aparencia) {
      this.alterarAparencia(aparencia);
    }
  }

  alterarAparencia(theme: string) {
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      localStorage.setItem('aparencia', theme);
      themeLink.href = '/assets/layout/styles/theme/'+theme+'/theme.css';
    }
  }


}
