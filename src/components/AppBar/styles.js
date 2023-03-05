import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  navigation: {
    backgroundColor: theme.main,
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  centralButton: {
    paddingVertical: 5,
    backgroundColor: theme.textContrastMain,
    borderRadius: 40,
  },
});
