import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {PublicasRotas} from "../componentes/publico/publicas.rotas";
import {ModuloPrimeng} from "./ModuloPrimeng";
import {PortalComponent} from "../componentes/publico/portal/portal.component";
import {AcessoComponent} from "../componentes/publico/acesso/acesso.component";
import {ModuloAngular} from "./ModuloAngular";
import {CadastroComponent} from "../componentes/publico/cadastro/cadastro.component";
import {RecuperarSenhaComponent} from "../componentes/publico/recuperar-senha/recuperar-senha.component";
import {ChamadaPraAcaoComponent} from "../componentes/publico/portal/chamada-pra-acao/chamada-pra-acao.component";
import {FuncionalidadesComponent} from "../componentes/publico/portal/funcionalidades/funcionalidades.component";
import {PlanosComponent} from "../componentes/publico/portal/planos/planos.component";
import {ExemploPainelComponent} from "../componentes/publico/exemplo/exemplo-painel/exemplo-painel.component";
import {ExemploComponent} from "../componentes/publico/exemplo/exemplo.component";
import {ExemploJanelaComponent} from "../componentes/publico/exemplo/exemplo-janela/exemplo-janela.component";
import {
  FormularioClienteComponent
} from "../componentes/publico/exemplo/exemplo-janela/formulario-cliente/formulario-cliente.component";
import {
  FormularioProdutoComponent
} from "../componentes/publico/exemplo/exemplo-janela/formulario-produto/formulario-produto.component";
import {
  FormularioPagamentoComponent
} from "../componentes/publico/exemplo/exemplo-janela/formulario-pagamento/formulario-pagamento.component";

@NgModule({
  imports: [
    RouterModule.forRoot(PublicasRotas),
    ModuloAngular,
    ModuloPrimeng,
  ],
  declarations: [
    PortalComponent,
    ChamadaPraAcaoComponent,
    PlanosComponent,
    FuncionalidadesComponent,
    ExemploComponent,
    ExemploJanelaComponent,
    ExemploPainelComponent,
    FormularioClienteComponent,
    FormularioProdutoComponent,
    FormularioPagamentoComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    AcessoComponent,
  ]
})
export class ModuloPublico {
}
