import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    stepIndicator: {
      marginTop: 5,
      marginVertical: 50,
      paddingHorizontal: 20,
    },
    rowItem: {
      flex: 3,
      paddingVertical: 32,
      padding: 10,
    },
    title: {
      flex: 1,
      fontFamily:'Poppins',
      fontSize: 18,
      color: Colors.black,
      paddingVertical: 16,
      fontWeight: '400',
    },
    body: {
      flex: 1,
      fontSize: 15,
      color: '#606060',
      lineHeight: 24,
      marginRight: 8,
    },
    timeList: {
      marginLeft: 5,
      width: 70,
      marginTop: 15,
    },
    descriptionList: {
      marginTop: 15,
      padding: 8,
    },
  });