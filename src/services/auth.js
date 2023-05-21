import {auth, db} from '../config/firebase';
import {
  createUserWithEmailAndPassword,
  AuthErrorCodes,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {addDoc, collection} from '@firebase/firestore';

function firebaseErrors(error) {
  let message = '';
  switch (error.code) {
    case AuthErrorCodes.EMAIL_EXISTS:
      message = 'Esse email já está em uso';
      break;
    case AuthErrorCodes.INVALID_EMAIL:
      message = 'Email inválido';
      break;
    case AuthErrorCodes.WEAK_PASSWORD:
      message = 'A senha precisa de no mínimo 6 caracteres';
      break;
    default:
      message = 'Erro desconhecido.';
      break;
  }
  return message;
}

export async function register(data) {
  const result = await createUserWithEmailAndPassword(
    auth,
    data.email,
    data.password,
  )
    .then(userData => {
      addDoc(collection(db, 'userInformation'), {
        userId: userData.user.uid,
        completeName: data.completeName.trim(),
        dateOfBirth: data.dateOfBirth,
        email: userData.user.email,
        gender: data.gender,
        height: data.height,
        termsOfUse: data.termsOfUse,
      });
      return 'success';
    })
    .catch(error => {
      return firebaseErrors(error);
    });

  return result;
}

export async function login(email, password) {
  const result = await signInWithEmailAndPassword(auth, email, password)
    .then(userData => {
      return 'success';
    })
    .catch(error => {
      return 'error';
    });

  return result;
}

export async function resetPasswordEmail(email) {
  auth.languageCode = 'pt';
  await sendPasswordResetEmail(auth, email)
    .then(() => {
      return 'success';
    })
    .catch(error => {
      console.log(error);
      return 'error';
    });
}
