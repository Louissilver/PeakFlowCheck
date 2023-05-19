import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: theme.grey,
  },
  itemContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: theme.grey,
  },
  resultContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    flex: 1,
    marginRight: 5,
  },
  resultClass: {
    width: 100,
    textAlign: 'center',
    marginRight: 10,
    fontWeight: 'bold',
  },
  peakflow: {
    width: 100,
    textAlign: 'center',
  },
  percent: {
    width: 100,
    textAlign: 'right',
  },
});
