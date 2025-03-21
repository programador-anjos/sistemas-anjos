import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {SistemaRotas} from "../componentes/sistema/SistemaRotas";
import {PainelComponent} from "../componentes/sistema/painel/painel.component";
import {RegistrosComponent} from "../componentes/sistema/registros/registros.component";
import {UsuariosComponent} from "../componentes/sistema/usuarios/usuarios.component";
import {SobreComponent} from "../componentes/sistema/sobre/sobre.component";
import {AjudaComponent} from "../componentes/sistema/ajuda/ajuda.component";
import {ContaComponent} from "../componentes/sistema/conta/conta.component";
import {ModuloPrimeng} from "./ModuloPrimeng";
import {SistemaComponent} from "../componentes/sistema/sistema.component";
import {ModuloAngular} from "./ModuloAngular";

@NgModule({
  imports: [
    RouterModule.forRoot(SistemaRotas),
    ModuloAngular,
    ModuloPrimeng,
  ],
  declarations: [
    PainelComponent,
    RegistrosComponent,
    UsuariosComponent,
    SobreComponent,
    AjudaComponent,
    ContaComponent,
    SistemaComponent
  ]
})
export class ModuloSistema {
}
