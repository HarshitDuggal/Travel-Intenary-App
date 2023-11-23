//dependencies import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';

// Screens import
import Chart from '../Screens/Chart';
import Guide from '../Screens/Guide';
import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';

//import icon & styles
import { ChartIcon,GuideIcon,HomeIcon,WalletIcon } from '../Constants/assets';
import { style } from './appNavigationStylesheet';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="HomeScreen" component={Home} />
    </Stack.Navigator>
  );
};

const TabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={{tabBarHideOnKeyboard:true , tabBarStyle:style.bottomTabStyle}} >
      <Tab.Screen name="Home" options={{headerShown:false, tabBarIcon: () => {
        const isFocused = useIsFocused();
        return HomeIcon(isFocused)
      }}} component={MainStack} />
      <Tab.Screen name="Wallet" options={{headerShown:false,tabBarIcon: () => {
        const isFocused = useIsFocused();
        return WalletIcon(isFocused)
      }}}component={Wallet} />
      
      <Tab.Screen name="Itenary Form" options={{headerShown:true, tabBarLabel:'Guide',tabBarIcon: () => {
        const isFocused = useIsFocused();
        return GuideIcon(isFocused)
      }}} component={Guide} />
      <Tab.Screen name="Chart" options={{headerShown:false ,tabBarIcon: () => {
        const isFocused = useIsFocused();
        return ChartIcon(isFocused)
      }}} component={Chart} />
    </Tab.Navigator>
  );
};

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  );
};

export default AppNavigation;
