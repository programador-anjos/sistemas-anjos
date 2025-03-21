import {Component} from '@angular/core';
import {Conta} from "../../../models/Conta";
import {Sistema} from "../../../models/Sistema";
import {SelectItem} from "primeng/api";
import {ContasService} from "../../../services/firebase/ContasService";
import {AutenticacaoService} from "../../../services/firebase/AutenticacaoService";
import {ToastService} from "../../../services/ToastService";
import {Utils} from "../../../utils/Utils";
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
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
    senha: new FormControl("", [Validators.required, Validators.minLength(6)]),
    sistema: new FormControl("", [Validators.required]),
    perfil: new FormControl(1, [Validators.required]),
    modelo: new FormControl(1, [Validators.required]),
    plano: new FormControl(1, [Validators.required])
  });

  constructor(private contasService: ContasService,
              private toastService: ToastService,
              private autenticacaoService: AutenticacaoService) {
  }

  limpar() {
    this.formGroup = new FormGroup({
      email: new FormControl("", [Validators.required, Validators.email, this.emailValidator()]),
      senha: new FormControl("", [Validators.required, Validators.minLength(6)]),
      sistema: new FormControl("", [Validators.required]),
      perfil: new FormControl(1, [Validators.required]),
      modelo: new FormControl(1, [Validators.required]),
      plano: new FormControl(1, [Validators.required])
    });
  }

  salvar() {
    if (this.validateForm()) {
      let conta = this.criarConta();
      this.autenticacaoService.criarConta(conta.email, conta.senha)
        .then(() => {
          this.contasService.post(conta)
            .then(() => {
              this.toastService.sucesso('Sistema criado');
              this.limpar();
            })
            .catch(error => {
              this.toastService.erro(error.code, 'Erro ao criar conta', 5000);
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

  private criarConta() {
    let value = this.formGroup.value;
    let conta = new Conta();
    conta.email = value.email ? value.email : '';
    conta.senha = value.senha ? value.senha : '';
    conta.perfil = value.perfil ? value.perfil : 1;
    let sistema = new Sistema();
    sistema.nome = value.sistema ? value.sistema : '';
    sistema.rota = Utils.criarRota(sistema.nome);
    sistema.modelo = value.modelo ? value.modelo : 1;
    sistema.plano = value.plano ? value.plano : 1;
    sistema.aparencia = 'lara-light-blue';
    conta.sistema = sistema;
    return conta;
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
