import {auth, db} from '../config/firebase';
import {
  collection,
  addDoc,
  doc,
  updateDoc,
  getDoc,
  query,
  where,
  getDocs,
  Timestamp,
} from 'firebase/firestore';
import {Alert} from 'react-native';

export async function saveTestResult(data) {
  try {
    await addDoc(collection(db, 'testResults'), {
      userId: auth.currentUser.uid,
      resultPercent: data.resultPercent,
      resultClass: data.resultClass,
      expectedPeakflow: data.expectedPeakflow,
      measuredPeakflow: data.measuredPeakflow,
      resultDateTime: new Date().toLocaleString(),
    });
    return 'ok';
  } catch (error) {
    console.log('Error on save result information: ', error);
    return 'error';
  }
}

export async function getTestResults() {
  try {
    const querySnapshot = await getDocs(collection(db, 'testResults'));

    let results = [];

    querySnapshot.forEach(doc => {
      if (doc.data().userId == auth.currentUser.uid) {
        let result = {id: doc.id, ...doc.data()};
        results.push(result);
      }
    });
    return results;
  } catch (error) {
    Alert.alert('Não foi possível encontrar os resultados do usuário.');
    console.log(error);
    return [];
  }
}

export async function getTestResultsInRealTime(setResults) {
  const ref = query(collection(db, 'testResults'));

  const testResults = [];

  onSnapshot(ref, querySnapshot => {
    querySnapshot.forEach(doc => {
      if (doc.data().userId == auth.currentUser.uid) {
        testResults.push({id: doc.id, ...doc.data()});
      }
    });
    setResults(testResults);
  });
}
