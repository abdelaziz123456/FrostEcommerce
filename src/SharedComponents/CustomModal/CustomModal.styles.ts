import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {justifyContent: 'center', flex: 1, paddingHorizontal: 40},
  content: {
    maxHeight: 500,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
  },

  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  modalText: {
    fontWeight: '600',
    fontSize: 16,
    marginVertical: 20,
  },
});
