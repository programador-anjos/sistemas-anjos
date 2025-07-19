import {Component} from '@angular/core';

@Component({
    selector: 'app-funcionalidades',
    templateUrl: './funcionalidades.component.html',
    standalone: false
})
export class FuncionalidadesComponent {

  lista: any[] = [
    {
      icone: 'pi pi-users',
      titulo: 'Gerencie seus clientes',
      descricao: 'Cadastre e gerencie seus clientes e mantenha contato para eventuais promoções'
    },
    {
      icone: 'pi pi-tags',
      titulo: 'Gerencie seus produtos',
      descricao: 'Cadastre e gerencie seus produtos para registrar suas vendas rapidamente'
    },
    {
      icone: 'pi pi-dollar',
      titulo: 'Gerencie suas vendas',
      descricao: 'Registre suas vendas e seja notificado dos pagamentos atrasados'
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
