import {StyleSheet} from 'react-native';
import GlobalConstants from '../../Utiles/Constants';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 60,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  mainTitle: {
    fontSize: 26,
    lineHeight: 40,
    fontFamily: 'SofiaSans-ExtraBoldItalic',
    color: GlobalConstants.colors.mainThemeColor,
  },
  image: {
    width: 24,
    height: 24,
  },
  imgContainer: {
    flexDirection: 'row',
  },
});
