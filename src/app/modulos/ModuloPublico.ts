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
import {DemonstracaoPainelComponent} from "../componentes/publico/demonstracao/painel/demonstracao-painel.component";
import {DemonstracaoVendasComponent} from "../componentes/publico/demonstracao/vendas/demonstracao-vendas.component";
import {JanelaFormularioComponent} from "../componentes/publico/demonstracao/janela/janela-formulario.component";
import {
  FormularioClienteComponent
} from "../componentes/publico/demonstracao/janela/formulario-cliente/formulario-cliente.component";
import {
  FormularioProdutoComponent
} from "../componentes/publico/demonstracao/janela/formulario-produto/formulario-produto.component";
import {
  FormularioPagamentoComponent
} from "../componentes/publico/demonstracao/janela/formulario-pagamento/formulario-pagamento.component";
import {RodapeComponent} from "../componentes/publico/portal/rodape/rodape.component";
import {ContatoComponent} from "../componentes/publico/portal/contato/contato.component";
import {DemonstracaoClientesComponent} from "../componentes/publico/demonstracao/clientes/demonstracao-clientes.component";
import {DemonstracaoProdutosComponent} from "../componentes/publico/demonstracao/produtos/demonstracao-produtos.component";
import {LineChartComponent} from "../componentes/publico/demonstracao/painel/line/line-chart.component";
import {PieChartComponent} from "../componentes/publico/demonstracao/painel/pie/pie-chart.component";
import {BarChartComponent} from "../componentes/publico/demonstracao/painel/bar/bar-chart.component";
import {DemonstracaoComponent} from "../componentes/publico/demonstracao/demonstracao.component";
import {ConfiguracoesComponent} from "../componentes/publico/demonstracao/configuracoes/configuracoes.component";
import {TemPermissaoDiretiva} from "../utils/temPermissaoDiretiva";

@NgModule({
  imports: [
    RouterModule.forRoot(PublicasRotas),
    ModuloAngular,
    ModuloPrimeng,
    TemPermissaoDiretiva,
  ],
  declarations: [
    PortalComponent,
    ChamadaPraAcaoComponent,
    PlanosComponent,
    FuncionalidadesComponent,
    DemonstracaoVendasComponent,
    JanelaFormularioComponent,
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
    DemonstracaoComponent,
    LineChartComponent,
    PieChartComponent,
    BarChartComponent,
    ConfiguracoesComponent
  ]
})
export class ModuloPublico {
}
