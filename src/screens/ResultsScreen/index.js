import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {ListResult} from '../../components/ListResult';
import ResultsEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import CommonScreen from '../../components/CommonScreen';
import {View, StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';
import {Paragraph} from '../../components/Paragraph';
import {
  getTestResults,
  getTestResultsInRealTime,
} from '../../services/testResults';
import {RefreshControl, ScrollView} from 'react-native-gesture-handler';

const ResultsScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  async function loadResultData() {
    setRefreshing(true);
    const resultsFirestore = await getTestResults();
    setData(resultsFirestore);
    setRefreshing(false);
  }

  useEffect(() => {
    loadResultData();
    getTestResultsInRealTime(setData);
  }, []);

  if (refreshing) {
    return <Paragraph>Carregando lista de resultados...</Paragraph>;
  }

  return (
    <CommonScreen navigation={navigation}>
      <Title>Veja aqui os resultados anteriores de seus testes de PFE</Title>
      {/* <ResultsEmptyChartImage width={352} height={250} /> */}
      <ScrollView
        style={{width: '100%'}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={loadResultData} />
        }>
        <View style={styles.container}>
          <ListResult data={data} />
        </View>
      </ScrollView>
      <Button onPress={() => console.log('Exibir mais itens')}>Ver mais</Button>
      <Button
        secondary
        onPress={() => navigation.navigate('Exportar resultados')}>
        Exportar lista
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
