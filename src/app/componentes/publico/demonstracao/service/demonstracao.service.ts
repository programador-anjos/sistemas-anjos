import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Venda} from "../models/Venda";
import {VendasMock} from "./VendasMock";
import {ProdutosMock} from "./ProdutosMock";
import {Produto} from "../models/classes/Produto";
import {Cliente} from "../models/classes/Cliente";
import {ClientesMock} from "./ClientesMock";
import {SistemaUsuariosMock} from "./SistemaUsuariosMock";
import {Sistema} from "../../../../models/Sistema";

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
      return resolve(VendasMock)
    });
  }

  readProdutos(): Promise<Produto[]> {
    return new Promise<Produto[]>(async (resolve, reject) => {
      return resolve(ProdutosMock)
    });
  }

  readClientes(): Promise<Cliente[]> {
    return new Promise<Cliente[]>(async (resolve, reject) => {
      return resolve(ClientesMock)
    });
  }

  readVendas(): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(VendasMock)
    });
  }

  readSistemaUsuario(): Promise<Sistema> {
    return new Promise<Sistema>(async (resolve, reject) => {
      return resolve(SistemaUsuariosMock)
    });
  }

  update(venda: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(VendasMock)
    });
  }

  delete(venda: any): Promise<Venda[]> {
    return new Promise<Venda[]>(async (resolve, reject) => {
      return resolve(VendasMock)
    });
  }

}
