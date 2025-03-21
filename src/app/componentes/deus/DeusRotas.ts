import {Routes} from '@angular/router';
import {AparenciaComponent} from "../sistema/aparencia/aparencia.component";
import {ProtecaoRotasPrivadas} from "../../protecao/ProtecaoRotasPrivadas";
import {ProtecaoRotasCriador} from "../../protecao/ProtecaoRotasCriador";
import {DeusComponent} from "./deus.component";
import {EstatisticasComponent} from "./estatisticas/estatisticas.component";
import {SistemasComponent} from "./sistemas/sistemas.component";
import {AtendimentosComponent} from "./atendimentos/atendimentos.component";
import {FinancasComponent} from "./financas/financas.component";
import {AcessosComponent} from "./acessos/acessos.component";
import {ContasComponent} from "./contas/contas.component";
import {TemasComponent} from "./temas/temas.component";

export const DeusRotas: Routes = [
  {
    path: "deus",
    component: DeusComponent,
    canActivate: [ProtecaoRotasPrivadas, ProtecaoRotasCriador],
    canActivateChild: [ProtecaoRotasPrivadas, ProtecaoRotasCriador],
    children: [
      {
        path: 'estatisticas',
        component: EstatisticasComponent,
      },
      {
        path: 'sistemas',
        component: SistemasComponent,
      },
      {
        path: 'contas',
        component: ContasComponent,
      },
      {
        path: 'acessos',
        component: AcessosComponent,
      },
      {
        path: 'temas',
        component: TemasComponent,
      },
      {
        path: 'financas',
        component: FinancasComponent,
      },
      {
        path: 'atendimentos',
        component: AtendimentosComponent,
      }
    ]
  },
  // {path: "**", redirectTo: "/deus", pathMatch: "full"}
];

