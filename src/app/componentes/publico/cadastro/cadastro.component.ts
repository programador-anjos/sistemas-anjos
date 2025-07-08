import {Component, OnInit} from '@angular/core';
import {PERFIL, TEMA, Usuario} from "../../../models/Usuario";
import {MODELO, PLANO, Sistema} from "../../../models/Sistema";
import {SelectItem} from "primeng/api";
import {SistemaService} from "../../../services/firebase/SistemaService";
import {AutenticacaoService} from "../../../services/firebase/AutenticacaoService";
import {ToastService} from "../../../services/ToastService";
import {Utils} from "../../../utils/Utils";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css',
  standalone: false
})
export class CadastroComponent implements OnInit {

  carregando: boolean = false;

  perfis: SelectItem[] = [
    {label: 'Usuario', value: PERFIL.USUARIO},
    {label: 'Administrador', value: PERFIL.ADMINISTRADOR}
  ];

  modelos: SelectItem[] = [
    {label: 'Padrão', value: MODELO.PADRAO}
  ];

  planos: SelectItem[] = [
    {label: 'Anjo', value: PLANO.ANJO},
    {label: 'Arcanjo', value: PLANO.ARCANJO}
  ];

  sistema: Sistema = new Sistema();
  usuario: Usuario = new Usuario();

  formGroup = new FormGroup({
    nomeUsuario: new FormControl("", [Validators.required]),
    codigoUsuario: new FormControl("", [Validators.required, Validators.minLength(6)]),
    nomeSistema: new FormControl("", [Validators.required]),
    codigoSistema: new FormControl("", [Validators.required, Validators.minLength(6)]),
  });

  constructor(private sistemaService: SistemaService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    this.limpar();
  }

  desabilitarBotao() {
    return !this.sistema.nome || !this.sistema.codigo ||
      !this.usuario.nome || !this.usuario.codigo || !this.usuario.telefone;
  }

  limpar() {
    this.formGroup.reset()
  }

  salvar() {
    let sistemaPromise = this.sistemaService.getPath(this.sistema.codigo);
    sistemaPromise.then(sistema => {
      if (sistema) {
        this.toastService.erro('', 'Sistema já cadastrado');
      } else {
        this.sistema.rota = Utils.criarRota(this.usuario.nome);
        if (!this.sistema.rota) {
          this.toastService.erro('', 'Nome de sistema inválido');
        } else {
          this.sistema.usuarios.push(this.usuario);
          this.sistemaService.post(this.sistema)
            .then(() => {
              this.toastService.sucesso('', 'Sistema criado');
              this.limpar();
            })
            .catch(error => {
              this.toastService.erro('', 'Erro ao criar sistema');
            })
            .finally(() => this.carregando = false);
        }
      }
    });
  }

}
