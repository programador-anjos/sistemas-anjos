import {Component} from '@angular/core';

@Component({
    selector: 'app-funcionalidades',
    templateUrl: './funcionalidades.component.html',
    standalone: false
})
export class FuncionalidadesComponent {

  lista: any[] = [
    {
      icone: 'pi pi-dollar',
      titulo: 'Gerencie suas vendas',
      descricao: 'Registre os pagamentos efetuados e gerencie suas vendas'
    },
    {
      icone: 'pi pi-users',
      titulo: 'Gerencie seus clientes',
      descricao: 'Gerencie seus clientes e mantenha contato para eventuais promoções'
    },
    {
      icone: 'pi pi-gift',
      titulo: 'Mantenha contato com seus clientes',
      descricao: 'Visualize quais de seus clientes farão aniversário no mês'
    },
    {
      icone: 'pi pi-palette',
      titulo: 'Personalize seu sistema',
      descricao: 'Personalize seu sistema com os temas claro ou escuro'
    },
    {
      icone: 'pi pi-lock',
      titulo: 'Gerencie os acessos',
      descricao: 'Cadastre até 4 usuários para acessar seu sistema, além do administrador'
    },
    {
      icone: 'pi pi-chart-bar',
      titulo: 'Painel com gráficos e estatísticas',
      descricao: 'Painel com gráficos e estatísticas para você ter uma visão geral do seu negócio'
    },
  ];

  constructor() {
  }

}
