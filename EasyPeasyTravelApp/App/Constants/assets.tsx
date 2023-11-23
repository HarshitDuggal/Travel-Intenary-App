import { View } from 'react-native';
//icons import
import FontAwsome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//theme import
import { Colors, Sizes } from './theme';

const HomeIcon = (isFocused:boolean) => {

    return(
        <View>
            <FontAwsome6 name='house' color={isFocused? Colors.iconPrimary : Colors.iconSecondary } size={Sizes.iconSize}/>
        </View>
    )
}

const WalletIcon = (isFocused:boolean) => {

    return(
        <View>
            <FontAwsome6 name='bag-shopping' color={isFocused? Colors.iconPrimary : Colors.iconSecondary } size={Sizes.iconSize}/>
        </View>
    )
}

const GuideIcon = (isFocused:boolean) => {

    return(
        <View>
            <FontAwsome6 name='compass' color={isFocused? Colors.iconPrimary : Colors.iconSecondary } size={Sizes.iconSize}/>
        </View>
    )
}

const ChartIcon = (isFocused:boolean) => {

    return(
        <View>
            <MaterialCommunityIcons name='chart-line-stacked' color={isFocused? Colors.iconPrimary : Colors.iconSecondary } size={Sizes.iconSize}/>
        </View>
    )
}

export {HomeIcon,WalletIcon,GuideIcon,ChartIcon}