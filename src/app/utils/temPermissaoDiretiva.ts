import {Directive, Input, TemplateRef, ViewContainerRef} from "@angular/core";
import {ArmazenamentoService} from "../services/ArmazenamentoService";


@Directive({
  selector: '[temPermissao]'
})
export class TemPermissaoDiretiva {

  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<any>,
              private armazenamentoService: ArmazenamentoService) {
  }

  @Input() set temPermissao(permissoesParametro: string[]) {
    let permissoesUsuario = this.armazenamentoService.usuario()?.permissoes;
    if (permissoesUsuario && permissoesUsuario.length > 0) {
      let condition = permissoesParametro.some(funcionalidade => funcionalidade === "" ||
        permissoesUsuario?.includes(funcionalidade));
      if (condition) {
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
      this.viewContainerRef.clear();
    }
  }

}
