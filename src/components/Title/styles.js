import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    textAlign: 'center',
    color: theme.textContrastBackground,
    opacity: 0.85,
    marginVertical: 20,
  },
});
