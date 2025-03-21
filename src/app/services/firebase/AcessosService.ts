import {Injectable} from '@angular/core';
import {getFirestore, collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, where} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import { environment } from '../../../environments/environment';
import {Conta} from "../../models/Conta";
import {Acesso} from "../../models/Acesso";

const app = initializeApp(environment.firebase);
const firestore = getFirestore(app);
const colecao = collection(firestore, "acessos");

@Injectable({
  providedIn: 'root',
})
export class AcessosService {

  async getBy(campo: string, valor: string) {
    const res = query(colecao, where(valor, "==", campo));
    const querySnapshot = await getDocs(res);
    return querySnapshot.docs.map(a => a.data() as Acesso);
  }

  async get() {
    const querySnapshot = await getDocs(colecao);
    return querySnapshot.docs.map(a => a.data() as Acesso);
  }

  async post(rec: Acesso) {
    let documento = doc(colecao, rec.id);
    return await setDoc(documento, rec.json());
  }

  async put(rec: Acesso) {
    let documento = doc(colecao, rec.id);
    return await updateDoc(documento, rec.json());
  }

  async delete(rec: Acesso) {
    let documento = doc(colecao, rec.id);
    return await deleteDoc(documento);
  }

}
