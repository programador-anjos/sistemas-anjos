import {Component} from '@angular/core';

@Component({
  selector: 'app-planos',
  templateUrl: './planos.component.html'
})
export class PlanosComponent {

  planos: any[] = [
    {
      plano: 'Plano anjo',
      descricao: 'Básico',
      preco: 'R$100,00',
      lista: [
        'teste 1', 'teste 2', 'teste 3'
      ]
    },
    {
      plano: 'Plano querubim',
      descricao: 'Intermediário',
      preco: 'R$150,00',
      lista: [
        'Gerenciador de contas de acesso do seu sistema',
        'Gerenciador de clientes, produtos e vendas'
      ]
    },
    {
      plano: 'Plano arcanjo',
      descricao: 'Avançado',
      preco: 'R$200,00',
      lista: [
        'Gerenciador de contas de acesso do seu sistema',
        'Gerenciador de clientes, produtos e vendas',
        'Painel com gráficos e estatísticas (acessível apenas para administradores)'
      ]
    },
  ];

  constructor() {
  }

}
