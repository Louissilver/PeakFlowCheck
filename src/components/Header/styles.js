import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.main,
    paddingTop: 20,
    paddingBottom: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    zIndex: 3,
    marginTop: 5,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 24,
  },
  bodyHeader: {
    alignItems: 'center',
    marginTop: 10,
  },
  profileImage: {
    borderRadius: 45,
    width: 75,
    height: 75,
    backgroundColor: '#c3c3c3',
  },
  userName: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 36,
    color: theme.textContrastSecondary,
  },
});
