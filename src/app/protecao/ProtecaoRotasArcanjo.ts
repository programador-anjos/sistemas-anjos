import {ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot} from "@angular/router";
import {inject} from "@angular/core";
import {ArmazenamentoService} from "../services/ArmazenamentoService";
import {ToastService} from "../services/ToastService";

export const ProtecaoRotasArcanjo: CanActivateFn = (activatedRouteSnapshot: ActivatedRouteSnapshot,
                                                     routerStateSnapshot: RouterStateSnapshot) => {

  const armazenamentoService = inject(ArmazenamentoService);
  let logado = armazenamentoService.usuario();
  // if (logado && logado.eArcanjo()) {
    return true;
  // }
  const toastService = inject(ToastService);
  toastService.erro(
    'O plano atual não da acesso a essa funcionalidade',
    'Não autorizado',
    5000);
  return false;

};
