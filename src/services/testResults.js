import {auth, db} from '../config/firebase';
import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  limit,
  onSnapshot,
} from 'firebase/firestore';
import {Alert} from 'react-native';
import moment from 'moment';

export async function saveTestResult(data) {
  try {
    await addDoc(collection(db, 'testResults'), {
      userId: auth.currentUser.uid,
      resultPercent: data.resultPercent,
      resultClass: data.resultClass,
      expectedPeakflow: data.expectedPeakflow,
      measuredPeakflow: data.measuredPeakflow,
      resultDateTime: moment().format('DD/MM/YYYY, HH:mm:ss'),
    });
    return 'ok';
  } catch (error) {
    console.log('Error on save result information: ', error);
    return 'error';
  }
}

export async function getTestResults() {
  try {
    let results = [];

    const q = query(
      collection(db, 'testResults'),
      where('userId', '==', auth.currentUser.uid),
      orderBy('resultDateTime', 'desc'),
      limit(20),
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      let result = {id: doc.id, ...doc.data()};
      results.push(result);
    });

    return results;
  } catch (error) {
    Alert.alert('Não foi possível encontrar os resultados do usuário.');
    console.log(error);
    return [];
  }
}

export async function getTestResultsInRealTime(setResults) {
  const testResults = [];

  onSnapshot(collection(db, 'testResults'), querySnapshot => {
    querySnapshot.forEach(doc => {
      let result = {id: doc.id, ...doc.data()};
      testResults.push(result);
    });
    setResults(testResults);
  });
}
