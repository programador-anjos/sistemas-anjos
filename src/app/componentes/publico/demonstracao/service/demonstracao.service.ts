import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Venda} from "../models/Venda";
import {vendasMock} from "../models/vendasMock";

@Injectable({
  providedIn: 'root'
})
export class DemonstracaoService {

  constructor(private http: HttpClient) {
  }

  buscarEndereco(cep: string): Observable<any> {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }

  create(venda: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(vendasMock)
    });
  }

  read(): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(vendasMock)
    });
  }

  update(venda: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(vendasMock)
    });
  }

  delete(venda: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(vendasMock)
    });
  }

}
