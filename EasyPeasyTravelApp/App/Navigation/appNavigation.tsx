//dependencies import
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// Screens import
import Chart from '../Screens/Chart';
import Guide from '../Screens/Guide';
import Home from '../Screens/Home';
import Wallet from '../Screens/Wallet';

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
    <Tab.Navigator>
      <Tab.Screen name="Home" options={{headerShown:false}} component={MainStack} />
      <Tab.Screen name="Chart" options={{headerShown:false}} component={Chart} />
      <Tab.Screen name="Itenary Form" options={{headerShown:true, tabBarLabel:'Guide'}} component={Guide} />
      <Tab.Screen name="Wallet" options={{headerShown:false}}component={Wallet} />
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
