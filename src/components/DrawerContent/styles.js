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
    marginLeft: 16,
    alignItems: 'center',
  },
  userName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 36,
    color: theme.textContrastSecondary,
    marginBottom: 40,
  },
  profileImage: {
    borderRadius: 45,
    width: 90,
    height: 90,
    backgroundColor: '#c3c3c3',
    marginHorizontal: 96,
    marginTop: 37,
    marginBottom: 5,
  },
  footer: {
    marginBottom: 15,
  },
  logo: {
    marginTop: 50,
  },
});
