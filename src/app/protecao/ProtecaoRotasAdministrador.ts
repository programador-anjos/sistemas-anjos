import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {ArmazenamentoService} from "../services/ArmazenamentoService";
import {ToastService} from "../services/ToastService";

export const ProtecaoRotasAdministrador: CanActivateFn = (activatedRouteSnapshot: ActivatedRouteSnapshot,
                                                          routerStateSnapshot: RouterStateSnapshot) => {

  const armazenamentoService = inject(ArmazenamentoService);
  let logado = armazenamentoService.usuario();
  if (logado && logado.eAdministrador()) {
    return true;
  }

  const router = inject(Router);
  router.navigateByUrl('/');

  const toastService = inject(ToastService);
  toastService.erro(
    'Apenas administradores tem acesso a essa funcionalidade',
    'Não autorizado',
    5000);
  return false;

};
