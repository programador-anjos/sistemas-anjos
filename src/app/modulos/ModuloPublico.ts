import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PublicoRotas} from "../componentes/publico/PublicoRotas";
import {ModuloPrimeng} from "./ModuloPrimeng";
import {PortalComponent} from "../componentes/publico/portal/portal.component";
import {AcessoComponent} from "../componentes/publico/acesso/acesso.component";
import {PainelTestesComponent} from "../componentes/publico/painel-testes/painel-testes.component";
import {RegistrosTestesComponent} from "../componentes/publico/registros-testes/registros-testes.component";
import {ModuloAngular} from "./ModuloAngular";
import {CadastroComponent} from "../componentes/publico/cadastro/cadastro.component";
import {RecuperarSenhaComponent} from "../componentes/publico/recuperar-senha/recuperar-senha.component";
import {ChamadaPraAcaoComponent} from "../componentes/publico/portal/chamada-pra-acao/chamada-pra-acao.component";
import {FuncionalidadesComponent} from "../componentes/publico/portal/funcionalidades/funcionalidades.component";
import {PlanosComponent} from "../componentes/publico/portal/planos/planos.component";

@NgModule({
  imports: [
    RouterModule.forRoot(PublicoRotas),
    ModuloAngular,
    ModuloPrimeng,
  ],
  declarations: [
    PortalComponent,
    AcessoComponent,
    PainelTestesComponent,
    RegistrosTestesComponent,
    PlanosComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    ChamadaPraAcaoComponent,
    FuncionalidadesComponent
  ]
})
export class ModuloPublico {
}
