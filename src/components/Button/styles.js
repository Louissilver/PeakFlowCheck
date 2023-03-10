import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  button: {
    height: 70,
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.main,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  textButton: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    color: theme.textContrastMain,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
});
