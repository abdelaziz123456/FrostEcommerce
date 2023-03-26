import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  lowerFooter: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 15,
    marginTop: 30,
  },
  lowerText: {
    textAlign: 'center',
    fontFamily: 'SofiaSans-Regular',
    fontSize: 12,
    color: '#555555',
  },
  linksContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 40,
  },
  linkText: {
    fontFamily: 'SofiaSans-Regular',
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    lineHeight: 26,
  },
  imgContainer: {alignItems: 'center', marginVertical: 40},
  image: {
    width: 130,
    height: 15,
  },
  iconsContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 80,
    flexWrap: 'wrap',
  },
  icon: {
    width: 30,
    height: 26,
  },
});
