import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: theme.background,
  },
  itemContainer: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: theme.grey,
    padding: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
    color: theme.secondary,
  },
  itemName: {
    fontSize: 16,
    marginBottom: 5,
  },
  itemPhone: {
    fontSize: 14,
    marginBottom: 5,
    color: theme.main,
  },
  itemAddress: {
    fontSize: 14,
    marginBottom: 5,
  },
  itemTime: {
    fontSize: 14,
  },
});
