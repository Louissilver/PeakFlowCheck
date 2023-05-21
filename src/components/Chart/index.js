import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {theme} from '../../styles/globalStyles';

const ResultsChart = ({line}) => {
  return (
    <LineChart
      verticalLabelRotation={20}
      data={line}
      height={300}
      width={Dimensions.get('window').width * 0.9}
      yAxisLabel={'%'}
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: theme.main,
        backgroundGradientTo: theme.main,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      }}
      style={{
        borderRadius: 10,
      }}
      bezier
    />
  );
};

export default ResultsChart;
