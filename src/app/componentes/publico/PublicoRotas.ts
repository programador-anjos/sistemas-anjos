import {Routes} from '@angular/router';
import {PortalComponent} from "./portal/portal.component";
import {PainelTestesComponent} from "./painel-testes/painel-testes.component";
import {AcessoComponent} from "./acesso/acesso.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {PlanosComponent} from "./portal/planos/planos.component";

export const PublicoRotas: Routes = [
  {
    path: '',
    component: PortalComponent,
    children: [
      // {
      //   path: 'recuperar-senha',
      //   component: RecuperarSenhaComponent
      // },
      // {
      //   path: 'planos',
      //   component: PlanosComponent
      // },
      {
        path: 'painel',
        component: PainelTestesComponent
      },
      // {
      //   path: 'registros',
      //   component: RegistrosTestesComponent
      // },
      {
        path: 'cadastro',
        component: CadastroComponent
      },
      {
        path: 'acesso',
        component: AcessoComponent
      },
    ]
  },
];

