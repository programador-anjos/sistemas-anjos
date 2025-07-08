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
import {DemonstracaoPainelComponent} from "../componentes/publico/exemplo/painel/demonstracao-painel.component";
import {DemonstracaoRegistrosComponent} from "../componentes/publico/exemplo/demonstracao-registros.component";
import {ExemploJanelaComponent} from "../componentes/publico/exemplo/janela/exemplo-janela.component";
import {
  FormularioClienteComponent
} from "../componentes/publico/exemplo/janela/formulario-cliente/formulario-cliente.component";
import {
  FormularioProdutoComponent
} from "../componentes/publico/exemplo/janela/formulario-produto/formulario-produto.component";
import {
  FormularioPagamentoComponent
} from "../componentes/publico/exemplo/janela/formulario-pagamento/formulario-pagamento.component";
import {RodapeComponent} from "../componentes/publico/portal/rodape/rodape.component";
import {ContatoComponent} from "../componentes/publico/portal/contato/contato.component";
import {DemonstracaoClientesComponent} from "../componentes/publico/exemplo/clientes/demonstracao-clientes.component";
import {DemonstracaoProdutosComponent} from "../componentes/publico/exemplo/produtos/demonstracao-produtos.component";
import {RotaComponent} from "../componentes/rota.component";

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
    DemonstracaoRegistrosComponent,
    ExemploJanelaComponent,
    DemonstracaoPainelComponent,
    FormularioClienteComponent,
    FormularioProdutoComponent,
    FormularioPagamentoComponent,
    CadastroComponent,
    RecuperarSenhaComponent,
    AcessoComponent,
    RodapeComponent,
    ContatoComponent,
    DemonstracaoClientesComponent,
    DemonstracaoProdutosComponent,
    DemonstracaoPainelComponent,
    RotaComponent,
  ]
})
export class ModuloPublico {
}
