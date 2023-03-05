import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  title: {
    fontSize: 15,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    textAlign: 'center',
    color: theme.textContrastBackground,
    opacity: 0.8,
    marginVertical: 10,
    letterSpacing: 2,
    paddingHorizontal: 21,
  },
});
