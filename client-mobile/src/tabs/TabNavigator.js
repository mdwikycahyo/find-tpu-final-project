import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { useRoute } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Edit from '../screen/Edit'
import Processing from '../screen/Processing'
import Notification from '../screen/Notification'
import TopNavigator from './TopNavigator'
import PendingCancel from './PendingCanceled'

const Tab = createBottomTabNavigator()
function TabNavigator() {
  // const route = useRoute()
  // console.log(route)
  return (
    <Tab.Navigator
      initialRouteName='Notifikasi'
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
        name='Notifikasi'
        options={{
          tabBarIcon: () => {
            return <Ionicons name='notifications-circle-outline' size={40} color='black' />
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
