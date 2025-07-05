import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Venda} from "../models/Venda";

@Injectable({
  providedIn: 'root'
})
export class ExemploService {

  constructor(private http: HttpClient) { }

  buscarEndereco(cep: string): Observable<any>{
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  create(arg0: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {

    });
  }

  read(): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {

    });
  }

  update(arg0: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {

    });
  }

  delete(arg0: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {

    });
  }

}
