import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {ListResult, ListHeader} from '../../components/ListResult';
import ResultsEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import CommonScreen from '../../components/CommonScreen';
import {View, StyleSheet, Share, Alert} from 'react-native';
import {theme} from '../../styles/globalStyles';
import {Paragraph} from '../../components/Paragraph';
import {
  getTestResults,
  getTestResultsInRealTime,
} from '../../services/testResults';
import {generateTable} from '../../utils';
import {ScrollView} from 'react-native-gesture-handler';
import {useFocusEffect} from '@react-navigation/native';

const ResultsScreen = ({navigation}) => {
  const [limit, setLimit] = useState(9);
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadResultData(dataLimit) {
    setRefreshing(true);
    const resultsFirestore = await getTestResults(dataLimit);
    setData(resultsFirestore);
    setRefreshing(false);
  }

  useFocusEffect(
    React.useCallback(() => {
      loadResultData(limit);
    }, []),
  );

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: generateTable(data),
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <CommonScreen navigation={navigation}>
      <Title>Veja aqui os resultados anteriores de seus testes de PFE</Title>
      {!data && <ResultsEmptyChartImage width={352} height={250} />}
      {!refreshing ? (
        <>
          <Paragraph textAlign="center">
            Role a lista para baixo para ver mais resultados
          </Paragraph>
          <ListHeader />
          <ScrollView style={{width: '100%', height: 160, marginBottom: 30}}>
            <View style={styles.container}>
              <ListResult data={data} />
            </View>
          </ScrollView>
        </>
      ) : (
        <Paragraph>Carregando lista de resultados...</Paragraph>
      )}
      <Button onPress={() => loadResultData(setLimit(limit + 9))}>
        Ver mais
      </Button>
      <Button secondary onPress={onShare}>
        Compartilhar lista
      </Button>
    </CommonScreen>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: theme.background,
    width: '100%',
  },
});

export default ResultsScreen;
