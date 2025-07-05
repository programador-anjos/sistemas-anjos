import {Routes} from '@angular/router';
import {RegistrosComponent} from "./registros/registros.component";
import {PainelComponent} from "./painel/painel.component";
import {AparenciaComponent} from "./aparencia/aparencia.component";
import {UsuariosComponent} from "./usuarios/usuarios.component";
import {PagamentosComponent} from "./pagamentos/pagamentos.component";
import {AjudaComponent} from "./ajuda/ajuda.component";
import {ContaComponent} from "./conta/conta.component";
import {ProtecaoRotasPrivadas} from "../../protecao/ProtecaoRotasPrivadas";
import {ProtecaoRotasArcanjo} from "../../protecao/ProtecaoRotasArcanjo";
import {SobreComponent} from "./sobre/sobre.component";
import {SistemaComponent} from "./sistema.component";

export const SistemaRotas: Routes = [
  {
    path: ":sistema",
    component: SistemaComponent,
    canActivateChild: [ProtecaoRotasPrivadas],
    children: [
      {
        path: 'painel',
        component: PainelComponent,
        canActivate: [ProtecaoRotasArcanjo]
      },
      {
        path: 'registros',
        component: RegistrosComponent,
      },
      {
        path: 'conta',
        component: ContaComponent,
      },
      {
        path: 'aparencia',
        component: AparenciaComponent,
      },
      {
        path: 'usuarios',
        component: UsuariosComponent,
        canActivate: [ProtecaoRotasArcanjo]
      },
      {
        path: 'pagamentos',
        component: PagamentosComponent,
        canActivate: [ProtecaoRotasArcanjo]
      },
      {
        path: 'ajuda',
        component: AjudaComponent,
        canActivate: [ProtecaoRotasArcanjo]
      },
      {
        path: 'sobre',
        component: SobreComponent,
        canActivate: [ProtecaoRotasArcanjo]
      }
    ]
  },
  // {path: "**", redirectTo: "/:sistema", pathMatch: "full"}
];

