import {GestureResponderEvent, Text, TouchableOpacity} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface ButtonProps {
  headerText: string;
  subText: string;
  onPress: (event: GestureResponderEvent) => void;
  style: (
    | {
        flex: number;
        marginHorizontal: number;
      }
    | {borderBottomWidth: number; borderBottomColor: string}
    | null
  )[];
}

const Button = ({headerText, subText, onPress, style}: ButtonProps) => (
  <TouchableOpacity onPress={onPress} style={style}>
    <Text style={{color:Colors.black}}>{headerText}</Text>
    <Text>{subText}</Text>
  </TouchableOpacity>
);

export default Button;
