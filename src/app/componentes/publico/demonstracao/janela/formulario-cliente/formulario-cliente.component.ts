import {Component, Input} from '@angular/core';
import {SelectItem} from 'primeng/api';
import {Genero} from "../../models/enums/Genero";
import {Identificacao} from "../../models/classes/Identificacao";
import {Endereco} from "../../models/classes/Endereco";
import {Contato} from "../../models/classes/Contato";
import {DemonstracaoService} from "../../service/demonstracao.service";

@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  standalone: false
})
export class FormularioClienteComponent {
  @Input() identificacao: Identificacao = new Identificacao({});
  @Input() endereco: Endereco  = new Endereco({});
  @Input() contato: Contato  = new Contato({});

  exibirBotoes: boolean = false;

  generos: SelectItem[] = [
    {label: 'Masculino', value: Genero.MASCULINO},
    {label: 'Feminino', value: Genero.FEMININO}
  ];

  constructor(private registroService: DemonstracaoService) {
  }

  buscarEnderecoPorCEP(): void {
    if (this.endereco.cep && this.endereco.cep.length > 7) {
      this.registroService.buscarEndereco(this.endereco.cep).subscribe((cep: any) => {
        this.endereco.cidade = cep.localidade;
        this.endereco.logradouro = cep.logradouro;
        this.endereco.numero = cep.numero;
        this.endereco.estado = cep.uf;
        this.endereco.bairro = cep.bairro;
      });
    }
  }

  abrirWhatsapp(): void {
    window.open('https://wa.me/send?phone=55' + this.contato.telefone?.replace(/\D/g, ''));
  }

  abrirEmail(): void {
    window.open('mailto:' + this.contato.email);
  }

}
