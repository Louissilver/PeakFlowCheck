import React, {useEffect, useState} from 'react';
import {Title} from '../../components/Title';
import HomeEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import CommonScreen from '../../components/CommonScreen';
import {Paragraph} from '../../components/Paragraph';
import ResultsChart from '../../components/Chart';
import {
  getTestResults,
  getTestResultsInRealTime,
} from '../../services/testResults';

const HomeScreen = ({navigation}) => {
  const [chartPercentData, setChartPercentData] = useState([]);
  const [chartDateData, setChartDateData] = useState([]);

  const line = {
    labels: [...chartDateData],
    datasets: [
      {
        data: [...chartPercentData],
      },
    ],
  };

  async function loadResultData() {
    const resultsFirestore = await getTestResults();
    const resultPercentArray = [...resultsFirestore].map(({resultPercent}) =>
      parseFloat(resultPercent),
    );
    const resultDateArray = [...resultsFirestore].map(({resultDateTime}) => {
      const datePart = resultDateTime.substring(
        0,
        resultDateTime.lastIndexOf('/'),
      );

      // Obter a parte do horário (hh:mm)
      const timePart = resultDateTime.substring(
        resultDateTime.indexOf(',') + 2,
        resultDateTime.lastIndexOf(':'),
      );

      // Juntar a data e o horário
      const formattedDateTime = `${datePart} ${timePart}`;
      console.log(formattedDateTime);
      return formattedDateTime;
    });
    setChartPercentData(resultPercentArray);
    setChartDateData(resultDateArray);
  }

  useEffect(() => {
    loadResultData();
  }, []);

  useEffect(() => {
    const resetResult = navigation.addListener('focus', () => {
      loadResultData();
    });
    return resetResult;
  }, [navigation]);

  return (
    <CommonScreen navigation={navigation} isHome={true}>
      <Title>Início</Title>
      <Paragraph>Gráfico de desempenho</Paragraph>
      {chartDateData?.length !== 0 && <ResultsChart line={line} />}
      {chartPercentData.length === 0 && (
        <HomeEmptyChartImage width={352} height={250} />
      )}
    </CommonScreen>
  );
};

export default HomeScreen;
