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
    fontFamily: 'Poppins-SemiBold',
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
    paddingBottom:4
  },
  activeButton: {
    paddingBottom: 0,
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
    marginBottom: -4,
  },
});
