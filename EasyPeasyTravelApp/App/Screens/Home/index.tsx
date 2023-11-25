import {View, Text, Alert} from 'react-native';
import {useEffect} from 'react';
import messaging from '@react-native-firebase/messaging';
import {useNavigation} from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();
  useEffect(() => {
    const getToken = async () => {
      try {
        const Fcm_token = await messaging().getToken();
        console.log(Fcm_token);
      } catch (error) {
        console.log(error);
      }
    };
    getToken();
  }, []);
  useEffect(() => {
    messaging()?.onNotificationOpenedApp(remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
      navigation.navigate('Guide' as never);
    });

    // Check whether an initial notification is available
    messaging()
      ?.getInitialNotification()
      .then(remoteMessage => {
        if (remoteMessage) {
          console.log('Notification caused app to open from kill state:');

          navigation.navigate('Guide' as never);
        }
      });
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{textAlign: 'center', fontFamily: 'Poppins-SemiBold'}}>Home</Text>
    </View>
  );
};

export default Home;
