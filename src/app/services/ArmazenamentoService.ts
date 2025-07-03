import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import CryptoJS from 'crypto-js';
import {Usuario} from "../models/Usuario";
import {User} from "firebase/auth";
import {Sistema} from "../models/Sistema";

@Injectable({
  providedIn: 'root',
})
export class ArmazenamentoService {

  private static readonly _key = "pabanjos";

  private subjectSistema: Subject<Sistema | null> = new Subject<Sistema | null>();
  private observableSistema: Observable<Sistema | null> = this.subjectSistema.asObservable();

  private subjectUsuario: Subject<Usuario | null> = new Subject<Usuario | null>();
  private observableUsuario: Observable<Usuario | null> = this.subjectUsuario.asObservable();

  public get observarSistema() {
    return this.observableSistema;
  }

  public get observarUsuario() {
    return this.observableUsuario;
  }

  public armazenarSistema(sistema: Sistema) {
    let json = JSON.stringify(sistema);
    localStorage.setItem('sistema', ArmazenamentoService.encrypt(json));
    this.subjectSistema.next(sistema);
  }

  public armazenarUsuario(usuario: Usuario) {
    let json = JSON.stringify(usuario);
    localStorage.setItem('usuario', ArmazenamentoService.encrypt(json));
    this.subjectUsuario.next(usuario);
  }

  public sistema(): Sistema | null {
    let dado = localStorage.getItem('sistema');
    if (dado) {
      let stringJSON = ArmazenamentoService.decrypt(dado);
      try {
        let sistema = new Sistema(JSON.parse(stringJSON));
        sistema = new Sistema(sistema);
        return sistema;
      } catch (e) {
        alert('Falha ao recuperar seu sistema, limpe o cache do navegador e tente entrar novamente!');
        return null;
      }
    }
    return null;
  }

  public usuario(): Usuario | null {
    let dado = localStorage.getItem('usuario');
    if (dado) {
      let stringJSON = ArmazenamentoService.decrypt(dado);
      try {
        let usuario = new Usuario(JSON.parse(stringJSON));
        usuario = new Usuario(usuario);
        return usuario;
      } catch (e) {
        alert('Falha ao recuperar seu usuario, limpe o cache do navegador e tente entrar novamente!');
        return null;
      }
    }
    return null;
  }

  public sair() {
    localStorage.removeItem('usuario');
    this.subjectUsuario.next(null);
  }

  private static encrypt(txt: any) {
    return CryptoJS.AES.encrypt(txt, this._key).toString();
  }

  private static decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this._key).toString(CryptoJS.enc.Utf8);
  }

}
