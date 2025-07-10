import {Injectable} from '@angular/core';
import {getFirestore, collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, where, getDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import { environment } from '../../../environments/environment';
import {Sistema} from "../../models/Sistema";

const app = initializeApp(environment.firebase);
const firestore = getFirestore(app);
const colecao = collection(firestore, "sistemas");

@Injectable({
  providedIn: 'root',
})
export class SistemaService {

  async get() {
    const querySnapshot = await getDocs(colecao);
    return querySnapshot.docs.map(a => a.data() as Sistema);
  }

  async getBy(campo: string, valor: string) {
    const res = query(colecao, where(campo, "==", valor));
    const querySnapshot = await getDocs(res);
    return querySnapshot.docs.map(a => a.data() as Sistema);
  }

  async getPath(path: string) {
    const documentSnapshot = await getDoc(doc(colecao, path));
    return documentSnapshot.data() as Sistema;
  }

  async post(sistema: Sistema) {
    let documento = doc(colecao, sistema.codigo);
    return await setDoc(documento, sistema.json());
  }

  async put(sistema: Sistema) {
    let documento = doc(colecao, sistema.codigo);
    return await updateDoc(documento, sistema.json());
  }

  async delete(sistema: Sistema) {
    let documento = doc(colecao, sistema.codigo);
    return await deleteDoc(documento);
  }


}
