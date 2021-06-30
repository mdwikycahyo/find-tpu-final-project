import React, { useState, useEffect, useRef } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Text, View, Button, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeBaseProvider, Box } from 'native-base'
import Login from './src/screen/Login'
import HomeStack from './src/stacks/HomeStack'
import { Provider } from 'react-redux'
import store from './src/store'
import * as Notifications from 'expo-notifications'
import * as Permissions from 'expo-permissions'
import OneSignal from 'react-native-onesignal'
import Constants from 'expo-constants';
import AnimatedLoader from 'react-native-animated-loader';

const Stack = createStackNavigator()
// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });
export default function App() {
  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));
    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });
    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      // console.log(response);
    });
    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  // useEffect(() => {
  //   registerForPushNotification()
  //     .then((token) => console.log(token))
  //     .catch((err) => console.log(err))
  // }, [])

  // async function registerForPushNotification() {
  //   const {status} = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  //   if (status!=='granted') {
  //     const {status} = await Permissions.askAsync(Permissions.NOTIFICATIONS);
  //   }
  //   if (status !== 'granted') {
  //     console.log('fail to get the push token')
  //     return
  //   }
  //   token = (await Notifications.getExpoPushTokenAsync()).data
  //   return token
  // }
  
  // //OneSignal Init Code
  // OneSignal.setLogLevel(6, 0);
  // OneSignal.setAppId("YOUR-ONESIGNAL-APP-ID");
  // //END OneSignal Init Code

  // //Prompt for push on iOS
  // OneSignal.promptForPushNotificationsWithUserResponse(response => {
  //   console.log("Prompt response:", response);
  // });

  // //Method for handling notifications received while app in foreground
  // OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
  //   console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
  //   let notification = notificationReceivedEvent.getNotification();
  //   console.log("notification: ", notification);
  //   const data = notification.additionalData
  //   console.log("additionalData: ", data);
  //   // Complete with null means don't show a notification.
  //   notificationReceivedEvent.complete(notification);
  // });

  // //Method for handling notifications opened
  // OneSignal.setNotificationOpenedHandler(notification => {
  //   console.log("OneSignal: notification opened:", notification);
  // });
  // registerForPushNotificationsAsync = async () => {
  //   if (Constants.isDevice) {
  //     const { status: existingStatus } = await Notifications.getPermissionsAsync()
  //     let finalStatus = existingStatus
  //     if (existingStatus !== 'granted') {
  //       const { status } = await Notifications.requestPermissionsAsync()
  //       finalStatus = status
  //     }
  //     if (finalStatus !== 'granted') {
  //       alert('Failed to get push token for push notification!')
  //       return
  //     }
  //     const token = (await Notifications.getExpoPushTokenAsync()).data
  //     console.log(token)
  //     this.setState({ expoPushToken: token })
  //   } else {
  //     alert('Must use physical device for Push Notifications')
  //   }

  //   if (Platform.OS === 'android') {
  //     Notifications.setNotificationChannelAsync('default', {
  //       name: 'default',
  //       importance: Notifications.AndroidImportance.MAX,
  //       vibrationPattern: [0, 250, 250, 250],
  //       lightColor: '#FF231F7C',
  //     })
  //   }
  // }
  
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='HomeStack' component={HomeStack} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  )
}

// async function schedulePushNotification() {
//   await Notifications.scheduleNotificationAsync({
//     content: {
//       title: "You've got mail! 📬",
//       body: 'Here is the notification body',
//       data: { data: 'goes here' },
//     },
//     trigger: { seconds: 2 },
//   });
// }

async function registerForPushNotificationsAsync() {
  let token;
  if (Constants.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  return token;
}
