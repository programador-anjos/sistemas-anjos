import {Component} from '@angular/core';

@Component({
    selector: 'app-planos',
    templateUrl: './planos.component.html',
    standalone: false
})
export class PlanosComponent {

  planos: any[] = [
    {
      plano: 'Plano anjo',
      descricao: 'Sistema básico',
      preco: 'R$40,00',
      lista: [
        '7 dias de uso gratuito',
        'Registre os pagamentos efetuados e gerencie suas vendas',
        'Gerencie seus clientes e mantenha contato para eventuais promoções',
        'Visualize quais de seus clientes farão aniversário no mês',
        'Personalize seu sistema com os temas claro ou escuro',
      ]
    },
    {
      plano: 'Plano arcanjo',
      descricao: 'Sistema completo',
      preco: 'R$80,00',
      lista: [
        'Todos os recursos do plano anjo',
        // 'Temas claro, escuro ou personalizado',
        'Cadastre até 4 usuários para acessar seu sistema, além do administrador',
        'Painel com gráficos e estatísticas para você ter uma visão geral de como está indo o seu negócio',
      ]
    },
  ];

  constructor() {
  }

}
