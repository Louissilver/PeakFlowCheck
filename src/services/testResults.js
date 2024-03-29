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
      resultPercent: data.finalResult.resultPercent,
      resultClass: data.finalResult.resultClass,
      expectedPeakflow: data.finalResult.expectedPeakflow,
      measuredPeakflow: data.finalResult.measuredPeakflow,
      useBronchodilator: data.finalResult.useBronchodilator,
      resultDateTime: moment().format('DD/MM/YYYY, HH:mm:ss'),
    });
    return 'ok';
  } catch (error) {
    console.log('Error on save result information: ', error);
    return 'error';
  }
}

export async function getTestResults(docLimit) {
  try {
    let results = [];

    let q;
    if (docLimit) {
      q = query(
        collection(db, 'testResults'),
        where('userId', '==', auth.currentUser.uid),
        orderBy('resultDateTime', 'desc'),
        limit(docLimit),
      );
    } else {
      q = query(
        collection(db, 'testResults'),
        where('userId', '==', auth.currentUser.uid),
        orderBy('resultDateTime', 'desc'),
      );
    }

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach(doc => {
      let result = {
        resultPercent: doc.data().resultPercent,
        expectedPeakflow: doc.data().expectedPeakflow,
        measuredPeakflow: doc.data().measuredPeakflow,
        resultClass: doc.data().resultClass,
        resultDateTime: doc.data().resultDateTime,
        useBronchodilator: doc.data().useBronchodilator,
      };
      results.push(result);
    });

    return results;
  } catch (error) {
    Alert.alert('Erro', 'Não foi possível encontrar os resultados do usuário.');
    console.log(error);
    return [];
  }
}

export async function getTestResultsInRealTime(setResults) {
  const testResults = [];

  onSnapshot(collection(db, 'testResults'), querySnapshot => {
    querySnapshot.forEach(doc => {
      let result = {
        resultPercent: doc.data().resultPercent,
        expectedPeakflow: doc.data().expectedPeakflow,
        measuredPeakflow: doc.data().measuredPeakflow,
        resultClass: doc.data().resultClass,
        resultDateTime: doc.data().resultDateTime,
      };
      testResults.push(result);
    });
    setResults(testResults);
  });
}
