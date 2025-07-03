import {Component} from '@angular/core';
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
export class CadastroComponent {

  carregando: boolean = false;

  perfis: SelectItem[] = [
    {label: 'Usuario', value: 1},
    {label: 'Administrador', value: 2}
  ];

  modelos: SelectItem[] = [
    {label: 'Padrão', value: 1}
  ];

  planos: SelectItem[] = [
    {label: 'Gratuito', value: 1},
    {label: 'Anjo', value: 2},
    {label: 'Querubim', value: 3},
    {label: 'Arcanjo', value: 4},
    {label: 'Deus', value: 5}
  ];

  formGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email, this.emailValidator()]),
    codigo: new FormControl("", [Validators.required, Validators.minLength(6)]),
    sistema: new FormControl("", [Validators.required]),
    perfil: new FormControl(1, [Validators.required]),
    modelo: new FormControl(1, [Validators.required]),
    plano: new FormControl(1, [Validators.required])
  });

  constructor(private sistemaService: SistemaService,
              // private autenticacaoService: AutenticacaoService,
              private toastService: ToastService) {
  }

  limpar() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email, this.emailValidator()]),
      codigo: new FormControl("", [Validators.required, Validators.minLength(6)]),
      sistema: new FormControl("", [Validators.required]),
      perfil: new FormControl(1, [Validators.required]),
      modelo: new FormControl(1, [Validators.required]),
      plano: new FormControl(1, [Validators.required])
    });
  }

  salvar() {
    if (this.validateForm()) {
      let sistema = this.criarSistema();
      this.sistemaService.post(sistema)
        .then(() => {
          this.sistemaService.post(sistema)
            .then(() => {
              this.toastService.sucesso('Sistema criado');
              this.limpar();
            })
            .catch(error => {
              this.toastService.erro(error.code, 'Erro ao criar sistema', 5000);
            })
            .finally(() => this.carregando = false);
        })
        .catch(error => {
          if (error.code == 'auth/email-already-in-use') {
            this.toastService.erro('Email já cadastrado', 'Erro', 5000);
          } else {
            this.toastService.erro(error.code, 'Erro ao criar sistema', 5000);
          }
        })
    }
  }

  private criarSistema(): Sistema {
    let value = this.formGroup.value;
    let usuario = new Usuario({
      nome : value.email ? value.email : '',
      codigo : value.codigo ? value.codigo : '',
    });
    return new Sistema({
      nome: usuario.nome,
      rota: Utils.criarRota(usuario.nome),
      usuarios: [usuario],
    });
  }

  validateForm(): boolean {
    if (this.formGroup.valid) {
      return true;
    } else {
      this.showFieldsErrors();
      return false;
    }
  }

  showFieldsErrors(): void {
    Object.keys(this.formGroup.controls).forEach(field => {
      const control = this.formGroup.get(field);
      if (control) {
        control.markAsTouched({onlySelf: true});
        control.markAsDirty({onlySelf: true});
      }
    });
  }

  showErro(campo: string): boolean {
    let field = this.formGroup.get(campo);
    if (field) {
      return field.touched && field.dirty && field.hasError('required');
    }
    return false;
  }

  showErroEmail(campo: string): boolean {
    let field = this.formGroup.get(campo);
    if (field) {
      return field.touched && field.dirty && field.hasError('invalidEmail');
    }
    return false;
  }

  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (control.value && !emailRegex.test(control.value)) {
        return {invalidEmail: true};
      }
      return null;
    };
  }

}
