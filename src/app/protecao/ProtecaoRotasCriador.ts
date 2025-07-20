import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {ArmazenamentoService} from "../services/ArmazenamentoService";

export const ProtecaoRotasCriador: CanActivateFn = (activatedRouteSnapshot: ActivatedRouteSnapshot,
                                                    routerStateSnapshot: RouterStateSnapshot) => {

  const armazenamentoService = inject(ArmazenamentoService);
  let logado = armazenamentoService.usuario();
  return logado && logado.eCriador();

};
