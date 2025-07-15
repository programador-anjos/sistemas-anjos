import {Routes} from '@angular/router';
import {PortalComponent} from "./portal/portal.component";
import {AcessoComponent} from "./acesso/acesso.component";
import {CadastroComponent} from "./cadastro/cadastro.component";
import {DemonstracaoRegistrosComponent} from "./demonstracao/demonstracao-registros.component";
import {DemonstracaoPainelComponent} from "./demonstracao/painel/demonstracao-painel.component";
import {RotaComponent} from "../rota.component";
import {DemonstracaoClientesComponent} from "./demonstracao/clientes/demonstracao-clientes.component";
import {DemonstracaoProdutosComponent} from "./demonstracao/produtos/demonstracao-produtos.component";
import {ConfiguracoesComponent} from "./demonstracao/configuracoes/configuracoes.component";

export const PublicasRotas: Routes = [
    {
      path: '',
      component: PortalComponent,
    },
    {
      path: 'demonstracao',
      component: RotaComponent,
      children: [
        {
          path: 'registros',
          component: DemonstracaoRegistrosComponent
        },
        {
          path: 'painel',
          component: DemonstracaoPainelComponent
        },
        {
          path: 'clientes',
          component: DemonstracaoClientesComponent
        },
        {
          path: 'produtos',
          component: DemonstracaoProdutosComponent
        },
        {
          path: 'configuracoes',
          component: ConfiguracoesComponent
        },
        {
          path: "**",
          redirectTo: "registros",
          pathMatch: "full"
        }
      ]
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
  ]
;

