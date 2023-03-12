import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    backgroundColor: theme.main,
    paddingBottom: 5,
    paddingTop: 80,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'transparent',
    backgroundColor: theme.main,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 3,
    marginTop: 30,
    height: 40,
  },
  title: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
