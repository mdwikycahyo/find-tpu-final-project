import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NativeBaseProvider, Box } from 'native-base'
import Login from './src/screen/Login'
import HomeStack from './src/stacks/HomeStack'

const Stack = createStackNavigator()
export default function App() {
  return (
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
  )
}
