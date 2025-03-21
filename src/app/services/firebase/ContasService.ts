import {Injectable} from '@angular/core';
import {getFirestore, collection, doc, getDocs, setDoc, updateDoc, deleteDoc, query, where, getDoc} from "firebase/firestore";
import {initializeApp} from "firebase/app";
import { environment } from '../../../environments/environment';
import {Conta} from "../../models/Conta";
import firebase from "firebase/compat";
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;
import DocumentData = firebase.firestore.DocumentData;

const app = initializeApp(environment.firebase);
const firestore = getFirestore(app);
const colecao = collection(firestore, "contas");

@Injectable({
  providedIn: 'root',
})
export class ContasService {

  async get() {
    const querySnapshot = await getDocs(colecao);
    return querySnapshot.docs.map(a => a.data() as Conta);
  }

  async getBy(campo: string, valor: string) {
    const res = query(colecao, where(campo, "==", valor));
    const querySnapshot = await getDocs(res);
    return querySnapshot.docs.map(a => a.data() as Conta);
  }

  async getPath(path: string) {
    const documentSnapshot = await getDoc(doc(colecao, path));
    return documentSnapshot.data() as Conta;
  }

  async post(rec: Conta) {
    let documento = doc(colecao, rec.email);
    return await setDoc(documento, rec.json());
  }

  async put(rec: Conta) {
    let documento = doc(colecao, rec.email);
    return await updateDoc(documento, rec.json());
  }

  async delete(rec: Conta) {
    let documento = doc(colecao, rec.email);
    return await deleteDoc(documento);
  }


}
