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
    paddingHorizontal: '7%',
    marginBottom: 60,
  },
  space: {
    marginTop: 20,
  },
});
