import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: theme.grey,
  },
  itemData: {
    flex: 1,
    marginRight: 5,
  },
  itemClassificacao: {
    width: 100,
    textAlign: 'center',
    marginRight: 10,
    fontWeight: 'bold',
  },
  itemPFE: {
    width: 100,
    textAlign: 'right',
  },
});
