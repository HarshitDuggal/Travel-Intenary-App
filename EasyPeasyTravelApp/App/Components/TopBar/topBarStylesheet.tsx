import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const style = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
  },
  heading: {
    alignSelf: 'center',
    fontSize: 24,
    color: Colors.black,
    marginTop: 64,
    fontFamily: 'Poppins',
    fontWeight: '600',
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  activeButton: {
    borderBottomWidth: 1,
    borderBottomColor: 'blue',
  },
});
