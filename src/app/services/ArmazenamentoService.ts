import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import CryptoJS from 'crypto-js';
import {Conta} from "../models/Conta";
import {User} from "firebase/auth";
import {Sistema} from "../models/Sistema";

@Injectable({
  providedIn: 'root',
})
export class ArmazenamentoService {

  private static readonly _key = "pabanjos";

  private subject: Subject<Conta | null> = new Subject<Conta | null>();
  private observable: Observable<Conta | null> = this.subject.asObservable();

  public get events() {
    return this.observable;
  }

  public armazenar(conta: Conta) {
    let json = JSON.stringify(conta);
    localStorage.setItem('logado', ArmazenamentoService.encrypt(json));
    this.subject.next(conta);
  }

  public logado(): Conta | null {
    let logado = localStorage.getItem('logado');
    if (logado) {
      let stringJSON = ArmazenamentoService.decrypt(logado);
      try {
        let conta = new Conta(JSON.parse(stringJSON));
        conta.sistema = new Sistema(conta.sistema);
        return conta;
      } catch (e) {
        alert('Falha ao recuperar seu login, limpe o cache do navegador e tente entrar novamente!');
        return null;
      }
    }
    return null;
  }

  public sair() {
    localStorage.removeItem('logado');
    this.subject.next(null);
  }

  private static encrypt(txt: any) {
    return CryptoJS.AES.encrypt(txt, this._key).toString();
  }

  private static decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this._key).toString(CryptoJS.enc.Utf8);
  }

}
