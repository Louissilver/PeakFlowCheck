import React, {useState} from 'react';
import {Title} from '../../components/Title';
import HomeEmptyChartImage from '../../assets/undraw_empty_re_opql.svg';
import CommonScreen from '../../components/CommonScreen';
import {Paragraph} from '../../components/Paragraph';
import ResultsChart from '../../components/Chart';
import {getTestResults} from '../../services/testResults';
import {useFocusEffect} from '@react-navigation/native';

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
    const resultsFirestore = await getTestResults(7);
    const resultPercentArray = [...resultsFirestore].map(({resultPercent}) =>
      parseFloat(resultPercent),
    );
    const resultDateArray = [...resultsFirestore].map(({resultDateTime}) => {
      const datePart = resultDateTime.substring(
        0,
        resultDateTime.lastIndexOf('/'),
      );
      const timePart = resultDateTime.substring(
        resultDateTime.indexOf(',') + 2,
        resultDateTime.lastIndexOf(':'),
      );
      const formattedDateTime = `${datePart} ${timePart}`;
      return formattedDateTime;
    });

    resultPercentArray.reverse();
    resultDateArray.reverse();
    setChartPercentData(resultPercentArray);
    setChartDateData(resultDateArray);
  }

  useFocusEffect(
    React.useCallback(() => {
      loadResultData();
    }, []),
  );

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
