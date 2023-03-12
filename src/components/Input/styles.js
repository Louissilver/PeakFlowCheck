import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  input: {
    borderRadius: 50,
    marginBottom: 10,
    height: 30,
    overflow: 'hidden',
    paddingLeft: 5,
    paddingVertical: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
    marginTop: 20,
    paddingLeft: 20,
    color: theme.black,
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  outline: {
    borderRadius: 50,
    borderColor: 'transparent',
  },
});
