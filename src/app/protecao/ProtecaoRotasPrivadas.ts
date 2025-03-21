import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {ArmazenamentoService} from "../services/ArmazenamentoService";

export const ProtecaoRotasPrivadas: CanActivateFn = (activatedRouteSnapshot: ActivatedRouteSnapshot,
                                                     routerStateSnapshot: RouterStateSnapshot) => {

  const armazenamentoService = inject(ArmazenamentoService);
  let logado = armazenamentoService.logado();
  if (logado) {
    return true;
  }

  const router = inject(Router);
  return router.navigateByUrl('/acesso').then(() => false);

};
