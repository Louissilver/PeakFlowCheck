import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  label: {
    paddingLeft: 20,
    marginBottom: 5,
    fontSize: 16,
  },
  input: {
    fontSize: 16,
    width: '100%',
    backgroundColor: theme.white,
    borderRadius: 25,
    paddingLeft: 20,
  },
  picker: {
    fontSize: 16,
    width: '100%',
    backgroundColor: theme.white,
    borderRadius: 50,
    paddingLeft: 3,
  },
  error: {
    paddingLeft: 20,
    alignSelf: 'flex-start',
    marginTop: 5,
    color: 'red',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
});
