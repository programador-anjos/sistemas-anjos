import {Routes} from '@angular/router';
import {PortalComponent} from "./portal/portal.component";
import {AcessoComponent} from "./acesso/acesso.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {ExemploComponent} from "./exemplo/exemplo.component";
import {ExemploPainelComponent} from "./exemplo/exemplo-painel/exemplo-painel.component";

export const PublicasRotas: Routes = [
  {
    path: '',
    component: PortalComponent,
  },
  // children: [
  {
    path: 'painel',
    component: ExemploPainelComponent
  },
  {
    path: 'exemplo',
    component: ExemploComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'acesso',
    component: AcessoComponent
  }
// {
//   path: 'recuperar-senha',
//   component: RecuperarSenhaComponent
// },
// ]
]
;

