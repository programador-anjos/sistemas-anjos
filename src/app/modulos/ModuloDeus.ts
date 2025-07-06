import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {DeusRotas} from "../componentes/deus/deus.rotas";
import {ModuloPrimeng} from "./ModuloPrimeng";
import {EstatisticasComponent} from "../componentes/deus/estatisticas/estatisticas.component";
import {SistemasComponent} from "../componentes/deus/sistemas/sistemas.component";
import {FinancasComponent} from "../componentes/deus/financas/financas.component";
import {AtendimentosComponent} from "../componentes/deus/atendimentos/atendimentos.component";
import {DeusComponent} from "../componentes/deus/deus.component";
import {ModuloAngular} from "./ModuloAngular";
import {AcessosComponent} from "../componentes/deus/acessos/acessos.component";
import {ContasComponent} from "../componentes/deus/contas/contas.component";
import {TemasComponent} from "../componentes/deus/temas/temas.component";
import {TesteComponent} from "../componentes/deus/teste/teste.component";

@NgModule({
  imports: [
    RouterModule.forRoot(DeusRotas),
    ModuloAngular,
    ModuloPrimeng,
  ],
  declarations: [
    EstatisticasComponent,
    SistemasComponent,
    FinancasComponent,
    AtendimentosComponent,
    ContasComponent,
    AcessosComponent,
    DeusComponent,
    TemasComponent,
    TesteComponent
  ]
})
export class ModuloDeus {
}
