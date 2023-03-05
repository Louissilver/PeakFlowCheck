import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  navigation: {
    backgroundColor: theme.main,
    flexDirection: 'row',
    height: 60,
    justifyContent: 'space-between',
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
    backgroundColor: theme.textContrastMain,
    borderRadius: 30,
    padding: 7,
  },
});
