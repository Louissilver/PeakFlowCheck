import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: theme.secondary,
    height: '100%',
  },
  bodyHeader: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  footer: {
    marginBottom: 15,
  },
  logo: {
    marginTop: 50,
  },
});
