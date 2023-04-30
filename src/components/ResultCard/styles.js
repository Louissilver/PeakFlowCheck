import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
  },
  result: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.secondary,
    marginVertical: 5,
    letterSpacing: 2,
  },
  values: {
    marginVertical: 25,
  },
  pef: {
    textAlign: 'center',
    fontSize: 24,
    color: theme.secondary,
    marginVertical: 5,
    letterSpacing: 2,
  },
});
