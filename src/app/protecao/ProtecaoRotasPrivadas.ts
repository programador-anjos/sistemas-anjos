import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {ArmazenamentoService} from "../services/ArmazenamentoService";

export const ProtecaoRotasPrivadas: CanActivateFn = (activatedRouteSnapshot: ActivatedRouteSnapshot,
                                                     routerStateSnapshot: RouterStateSnapshot) => {

  const armazenamentoService = inject(ArmazenamentoService);
  let logado = armazenamentoService.usuario();
  if (logado) {
    return true;
  }

  const router = inject(Router);
  router.navigateByUrl('/acesso');
  return false;

};
