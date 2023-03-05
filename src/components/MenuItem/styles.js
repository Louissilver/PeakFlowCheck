import {StyleSheet} from 'react-native';
import {theme} from '../../styles/globalStyles';

export default StyleSheet.create({
  container: {
    margin: 0,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: theme.black,
    paddingVertical: 13,
    borderTopWidth: 1,
  },
  icon: {
    marginRight: 35,
    marginLeft: 16,
    opacity: 1,
    color: theme.main,
  },
  text: {
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.1,
    color: theme.textContrastSecondary,
  },
});
