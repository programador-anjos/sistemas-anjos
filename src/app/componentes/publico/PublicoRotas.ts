import {Routes} from '@angular/router';
import {PortalComponent} from "./portal/portal.component";
import {PlanosComponent} from "./planos/planos.component";
import {PainelTestesComponent} from "./painel-testes/painel-testes.component";
import {RegistrosTestesComponent} from "./registros-testes/registros-testes.component";
import {AcessoComponent} from "./acesso/acesso.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {RecuperarSenhaComponent} from "./recuperar-senha/recuperar-senha.component";

export const PublicoRotas: Routes = [
  {
    path: '',
    component: PortalComponent
  },
  {
    path: 'acesso',
    component: AcessoComponent
  },
  {
    path: 'recuperar-senha',
    component: RecuperarSenhaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'planos',
    component: PlanosComponent
  },
  {
    path: 'painel',
    component: PainelTestesComponent
  },
  {
    path: 'registros',
    component: RegistrosTestesComponent
  }
];

