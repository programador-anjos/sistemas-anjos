import {Injectable} from '@angular/core';
import {getFirestore, collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, where} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import { environment } from '../../../environments/environment';

const app = initializeApp(environment.firebase);
const firestore = getFirestore(app);
const colecao = collection(firestore, "registros");

@Injectable({
  providedIn: 'root',
})
export class RegistrosService {

  async getBy(campo: string, valor: string) {
    const res = query(colecao, where(valor, "==", campo));
    const querySnapshot = await getDocs(res);
    return querySnapshot.docs.map(a => a.data() as any);
  }

  async get() {
    const querySnapshot = await getDocs(colecao);
    return querySnapshot.docs.map(a => a.data() as any);
  }

  async post(rec: any) {
    let documento = doc(colecao, rec.sistema);
    return await setDoc(documento, rec.json());
  }

  async put(rec: any) {
    let documento = doc(colecao, rec.sistema);
    return await updateDoc(documento, rec.json());
  }

  async delete(rec: any) {
    let documento = doc(colecao, rec.sistema);
    return await deleteDoc(documento);
  }


}
