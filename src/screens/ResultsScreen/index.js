import React from 'react';
import {Title} from '../../components/Title';
import {Button} from '../../components/Button';
import {ListResult} from '../../components/ListResult';
import ResultsEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import CommonScreen from '../../components/CommonScreen';
import {View, StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

const ResultsScreen = ({navigation}) => {
  const data = [
    {data: '12/02/2022 07:30', classificacao: 'Sem risco', pfe: '420.22'},
    {data: '12/02/2022 12:30', classificacao: 'Sem risco', pfe: '422.18'},
    {data: '12/02/2022 16:30', classificacao: 'Sem risco', pfe: '420.22'},
    {data: '12/02/2022 21:30', classificacao: 'Sem risco', pfe: '420.33'},
    {data: '13/02/2022 07:30', classificacao: 'Sem risco', pfe: '420.22'},
    {data: '13/02/2022 12:30', classificacao: 'Sem risco', pfe: '419.98'},
    {data: '13/02/2022 16:30', classificacao: 'Sem risco', pfe: '420.25'},
    {data: '13/02/2022 21:30', classificacao: 'Sem risco', pfe: '420.49'},
    {data: '14/02/2022 07:30', classificacao: 'Atenção', pfe: '415.98'},
  ];

  return (
    <CommonScreen navigation={navigation}>
      <Title>Veja aqui os resultados anteriores de seus testes de PFE</Title>
      {/* <ResultsEmptyChartImage width={352} height={250} /> */}
      <View style={styles.container}>
        <ListResult data={data} />
      </View>
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
