import {Component} from '@angular/core';
import {MessageService} from "primeng/api";
import {AutenticacaoService} from "../../../services/firebase/AutenticacaoService";

@Component({
    selector: 'app-recuperar-senha',
    templateUrl: './recuperar-senha.component.html',
    standalone: false
})
export class RecuperarSenhaComponent {

  email: string = '';

  constructor(private messageService: MessageService,
              private autenticacaoService: AutenticacaoService) {
  }

  recuperarSenha() {
    this.autenticacaoService.recuperarSenha(this.email)
      .then(user => {
        this.email = '';
        this.messageService.add({severity: 'success', summary: 'Um link para redefinição de senha será enviado para o email informado.'})
      })
      .catch(error => this.tratarErro(error))
  }

  private tratarErro(error: any) {
    if ("auth/invalid-email" == error.code) {
      this.messageService.add({severity: 'error', summary: 'Email inválido'});
    } else if ("auth/invalid-credential" == error.code) {
      this.messageService.add({severity: 'error', summary: 'Dados inválidos'});
    } else if ("auth/too-many-requests" == error.code) {
      this.messageService.add({severity: 'error', summary: 'Muitas tentativas, tente novamente mais tarde'});
    } else {
      this.messageService.add({severity: 'error', summary: 'Erro interno'});
      console.error('Erro ao entrar: ' + error.code);
    }
  }

}
