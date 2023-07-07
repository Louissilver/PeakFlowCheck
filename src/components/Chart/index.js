import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {theme} from '../../styles/globalStyles';

const ResultsChart = ({line}) => {
  console.log(line.datasets);
  return (
    <LineChart
      verticalLabelRotation={30}
      data={line}
      height={350}
      width={Dimensions.get('window').width * 0.95}
      yAxisLabel={'%'}
      chartConfig={{
        propsForBackgroundLines: {
          stroke: theme.main,
        },
        propsForLabels: {
          fontSize: 15,
        },
        propsForDots: {
          r: '7',
          strokeWidth: '2',
        },
        backgroundGradientFrom: theme.secondary,
        backgroundGradientTo: theme.secondary,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      getDotColor={(dataPoint, dataPointIndex) => {
        console.log('dataPoint ---->', dataPoint);
        console.log('dataPointIndex --->', dataPointIndex);
        //based on condition we return the color as string
        if (dataPoint >= 80) {
          return '#00FF7F';
        }
        if (dataPoint < 80 && dataPoint >= 50) {
          return '#FFD700';
        }
        if (dataPoint < 50) {
          return '#FD6B6B';
        }
      }}
      style={{
        borderRadius: 10,
      }}
      bezier
    />
  );
};

export default ResultsChart;
