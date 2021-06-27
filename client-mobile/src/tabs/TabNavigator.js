import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Edit from '../screen/Edit'
import Processing from '../screen/Processing'
import Notification from '../screen/Notification'

const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName='Notifikasi'>
      <Tab.Screen
        name='Diproses'
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="progress-clock" size={24} color="black" />
          },
        }}
        component={Processing}
      />

      <Tab.Screen
        name='Notifikasi'
        options={{
          tabBarIcon: () => {
            return <Ionicons name='notifications-circle-outline' size={40} color='red' />
          },
        }}
        component={Notification}
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
