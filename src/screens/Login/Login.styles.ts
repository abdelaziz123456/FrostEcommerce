import {StyleSheet} from 'react-native';
import GlobalConstantss from '../../Utiles/Constants';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalConstantss.colors.mainThemeColor,
    flex: 1,

    paddingHorizontal: 40,
    paddingVertical: 50,
  },
  title: {
    fontWeight: '700',
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  titleContainer: {},
  screenLink: {
    color: 'white',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  screenLinkContainer: {
    marginVertical: 20,
  },
  imageContainer: {alignItems: 'center', marginTop: 30},
  image: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
