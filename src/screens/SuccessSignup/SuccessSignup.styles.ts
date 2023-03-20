import {StyleSheet} from 'react-native';
import GlobalConstants from '../../Utiles/Constants';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalConstants.colors.mainThemeColor,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  image: {
    width: 80,
    height: 80,
    backgroundColor: 'white',
    borderRadius: 50,
    marginVertical: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
