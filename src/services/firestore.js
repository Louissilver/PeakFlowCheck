import {db} from '../config/firebase';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import {Alert} from 'react-native';

export async function saveUserInformation(data) {
  try {
    await addDoc(collection(db, 'userInformation'), data);
    return 'ok';
  } catch (error) {
    console.log('Error on save user information: ', error);
    return 'error';
  }
}

export async function getUserInformation(id) {
  try {
    const q = query(
      collection(db, 'userInformation'),
      where('userId', '==', id),
    );
    let userInfo;
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      userInfo = doc.data();
    });
    if (userInfo) {
      return userInfo;
    }
    Alert.alert('Não foi possível encontrar os dados do usuário.');
  } catch (error) {
    console.log(error);
    return 'error';
  }
}

export async function updateUserInformation(id, data) {
  try {
    const docRef = doc(db, 'userInformation', id);
    await updateDoc(docRef, data);
    return 'ok';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}
