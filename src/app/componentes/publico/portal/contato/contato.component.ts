import {Component} from '@angular/core';
import emailjs, {EmailJSResponseStatus} from '@emailjs/browser';
import {ToastService} from "../../../../services/ToastService";

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  standalone: false
})
export class ContatoComponent {

  contato: { nome: string; email: string; assunto: string; mensagem: string; } =
    {nome: '', email: '', assunto: '', mensagem: ''};

  constructor(private toastService: ToastService) {
  }

  limpar() {
    this.contato = {nome: '', email: '', assunto: '', mensagem: ''};
  }

  async enviar() {
    if (!this.contato.nome || !this.contato.email || !this.contato.assunto || !this.contato.mensagem) {
      this.toastService.erro('Preencha todos os campos');
      return;
    }
    try {
      await emailjs.send(
        'service_4rtfmta',
        'template_5ccguuc',
        this.contato,
        {publicKey: 'PAshG64CnbqOfY6wa'},
      );
      this.toastService.sucesso('Em breve responderemos', 'Mensagem recebida com sucesso', 5000);
      this.limpar();
    } catch (err) {
      if (err instanceof EmailJSResponseStatus) {
        console.log('EMAILJS FAILED...', err);
        return;
      }
      this.toastService.erro(String(err));
      console.log('ERROR', err);
    }
  }

}
