import React from 'react';
import {LineChart} from 'react-native-chart-kit';
import {Dimensions} from 'react-native';
import {theme} from '../../styles/globalStyles';

const ResultsChart = ({line}) => {
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
        backgroundGradientFrom: theme.secondary,
        backgroundGradientTo: theme.secondary,
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
