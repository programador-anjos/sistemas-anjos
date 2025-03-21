import {Injectable} from '@angular/core';
import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  updatePassword,
  deleteUser
} from 'firebase/auth';

const auth = getAuth();

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {

  // DOCS => https://firebase.google.com/docs/auth/web/manage-users?hl=pt

  criarConta = async (email: string, senha: string) => {
    return await createUserWithEmailAndPassword(auth, email, senha)
  };

  enviarEmailVerificacao = async () => {
    // @ts-ignore
    return await sendEmailVerification(auth.currentUser);
  };

  recuperarSenha = async (email: string) => {
    // @ts-ignore
    return await
      sendPasswordResetEmail(auth, email)
  };

  alterarSenha = async (senha: string) => {
    // @ts-ignore
    return await updatePassword(auth.currentUser, senha);
  };

  deletarUsuario = async (senha: string) => {
    // @ts-ignore
    return await deleteUser(auth.currentUser);
  };

  signIn = async (email: string, senha: string) => {
    return await signInWithEmailAndPassword(auth, email, senha)
  };

  signOut = async () => {
    return await auth.signOut();
  };


}
