import {Component} from '@angular/core';

@Component({
    selector: 'app-planos',
    templateUrl: './planos.component.html',
    standalone: false
})
export class PlanosComponent {

  planos: any[] = [
    {
      plano: 'Sistema básico',
      descricao: 'Plano arcanjo',
      preco: 'R$40,00',
      precoPromocional: 'R$30,00',
      lista: [
        '7 dias de uso gratuito',
        'Registre os pagamentos efetuados e gerencie suas vendas',
        'Gerencie seus clientes e mantenha contato para eventuais promoções',
        'Visualize quais de seus clientes farão aniversário no mês',
        'Personalize seu sistema com os temas claro ou escuro',
      ]
    },
    {
      plano: 'Sistema completo',
      descricao: 'Plano querubim',
      preco: 'R$80,00',
      precoPromocional: 'R$60,00',
      lista: [
        'Todos os recursos do plano arcanjo e mais...',
        // 'Personalize seu sistema com qualquer cor',
        'Cadastre até 4 usuários para acessar seu sistema, além do administrador',
        'Painel com gráficos e estatísticas para você ter uma visão geral do seu negócio',
      ]
    },
  ];

  constructor() {
  }

}
