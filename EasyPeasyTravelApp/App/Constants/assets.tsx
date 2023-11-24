import {StyleSheet, Text, View} from 'react-native';
//icons import
import FontAwsome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//theme import
import {Colors, Sizes} from './theme';

const HomeIcon = (isFocused: boolean) => {
  return (
    <View style={style.iconContainer}>
      <FontAwsome6
        name="house"
        color={isFocused ? Colors.iconPrimary : Colors.iconSecondary}
        size={Sizes.iconSize}
      />
      <Text style={{color:isFocused?Colors.iconPrimary:Colors.grey}}>Home</Text>
    </View>
  );
};

const WalletIcon = (isFocused: boolean) => {
  return (
    <View style={style.iconContainer}>
      <FontAwsome6
        name="bag-shopping"
        color={isFocused ? Colors.iconPrimary : Colors.iconSecondary}
        size={Sizes.iconSize}
      />
      <Text style={{color:isFocused?Colors.iconPrimary:Colors.grey}}>Wallet</Text>
    </View>
  );
};

const GuideIcon = (isFocused: boolean) => {
  return (
    <View style={style.iconContainer}>
      <FontAwsome6
        name="compass"
        color={isFocused ? Colors.iconPrimary : Colors.iconSecondary}
        size={Sizes.iconSize}
      />
      <Text style={{color:isFocused?Colors.iconPrimary:Colors.grey}}>Guide</Text>
    </View>
  );
};

const ChartIcon = (isFocused: boolean) => {
  return (
    <View style={style.iconContainer}>
      <MaterialCommunityIcons
        name="chart-line-stacked"
        color={isFocused ? Colors.iconPrimary : Colors.iconSecondary}
        size={Sizes.iconSize}
      />
      <Text style={{color:isFocused?Colors.iconPrimary:Colors.grey}}>Chart</Text>
    </View>
  );
};

export {HomeIcon, WalletIcon, GuideIcon, ChartIcon};

const style = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
