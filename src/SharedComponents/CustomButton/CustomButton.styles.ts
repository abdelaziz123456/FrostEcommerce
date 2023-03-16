import {StyleSheet} from 'react-native';
import GlobalConstants from '../../Utiles/Constants';
export const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  primayContainer: {
    backgroundColor: GlobalConstants.colors.mainThemeColor,
  },

  outlineContainer: {
    borderColor: 'white',
    borderWidth: 1,
    minWidth: 200,
  },
});
