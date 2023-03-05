import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  background: {
    backgroundColor: theme.background,
    flex: 1,
  },
  scroll: {
    width: '100%',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 25,
    marginBottom: 110,
  },
  space: {
    marginTop: 20,
  },
});
