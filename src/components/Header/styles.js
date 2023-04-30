import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.main,
    paddingTop: 30,
    marginTop: -40,
  },
  bodyHeader: {
    alignItems: 'center',
    marginVertical: 5,
  },
  headerName: {
    marginBottom: 10,
    fontSize: 16,
  },
});
