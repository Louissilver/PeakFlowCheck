import {auth, db} from '../config/firebase';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  query,
  where,
  getDocs,
  limit,
} from 'firebase/firestore';
import {updateEmail} from 'firebase/auth';
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

export async function getUserInformation() {
  try {
    const q = query(
      collection(db, 'userInformation'),
      where('userId', '==', auth.currentUser.uid),
      limit(1),
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

export async function updateUserInformation(data) {
  try {
    let user;

    const q = query(
      collection(db, 'userInformation'),
      where('userId', '==', auth.currentUser.uid),
      limit(1),
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      let result = {id: doc.id, ...doc.data()};
      user = result;
    });

    const docRef = doc(db, 'userInformation', user.id);
    updateEmail(auth.currentUser, data.email).then(() => {
      console.log('Sucesso');
    });
    await updateDoc(docRef, {
      completeName: data.completeName,
      dateOfBirth: data.dateOfBirth,
      height: data.height,
      gender: data.gender,
      email: data.email,
    });
    return 'ok';
  } catch (error) {
    console.log(error);
    return 'error';
  }
}
