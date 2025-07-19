import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import CryptoJS from 'crypto-js';
import {Usuario} from "../models/Usuario";
import {Sistema} from "../models/Sistema";

@Injectable({
  providedIn: 'root',
})
export class ArmazenamentoService {

  private static readonly _key = "pabanjos";

  private subjectTema: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private observableTema: Observable<boolean> = this.subjectTema.asObservable();

  public get observarTema() {
    return this.observableTema;
  }

  public armazenarSistema(sistema: Sistema) {
    let json = JSON.stringify(sistema);
    localStorage.setItem('sistema', ArmazenamentoService.encrypt(json));
  }

  public armazenarUsuario(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    localStorage.setItem('usuario', ArmazenamentoService.encrypt(json));
  }

  public alterarTema(temaEscuro: boolean) {
    // let usuario = this.usuario();
    // if (usuario) {
    //   usuario.temaEscuro = temaEscuro;
    //   this.armazenarUsuario(usuario);
    //   this.subjectTema.next(usuario.temaEscuro);
    // }
    // console.log(temaEscuro);
    this.subjectTema.next(temaEscuro);
  }

  public sistema(): Sistema {
    let dado = localStorage.getItem('sistema');
    if (dado) {
      let stringJSON = ArmazenamentoService.decrypt(dado);
      try {
        let sistema = new Sistema(JSON.parse(stringJSON));
        sistema = new Sistema(sistema);
        return sistema;
      } catch (e) {
        alert('Falha ao recuperar seu sistema, limpe o cache do navegador e tente entrar novamente!');
        return new Sistema();
      }
    }
    return new Sistema();
  }

  public usuario(): Usuario {
    let dado = localStorage.getItem('usuario');
    if (dado) {
      let stringJSON = ArmazenamentoService.decrypt(dado);
      try {
        let usuario = new Usuario(JSON.parse(stringJSON));
        usuario = new Usuario(usuario);
        return usuario;
      } catch (e) {
        alert('Falha ao recuperar seu usuario, limpe o cache do navegador e tente entrar novamente!');
        return new Usuario();
      }
    }
    return new Usuario();
  }

  public sair() {
    localStorage.removeItem('usuario');
  }

  private static encrypt(txt: any) {
    return CryptoJS.AES.encrypt(txt, this._key).toString();
  }

  private static decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this._key).toString(CryptoJS.enc.Utf8);
  }

}
