import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';

import Edit from '../screen/Edit'
import Processing from '../screen/Processing'
import Notification from '../screen/Notification'
import TopNavigator from './TopNavigator'
import PendingCancel from './PendingCanceled'

const Tab = createBottomTabNavigator()
function TabNavigator() {

  return (
    <Tab.Navigator
      initialRouteName='Beranda'
      tabBarOptions={{
        activeTintColor: 'red',
      }}
    >
      <Tab.Screen
        name='Diproses'
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name='progress-clock' size={24} color='black' />
          },
        }}
        component={TopNavigator}
      />

      <Tab.Screen
        name='Beranda'
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name="home" size={34} color="black" />
          },
        }}
        component={PendingCancel}
      />
      <Tab.Screen
        name='Profil'
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name='account-details' size={24} color='black' />
          },
        }}
        component={Edit}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
