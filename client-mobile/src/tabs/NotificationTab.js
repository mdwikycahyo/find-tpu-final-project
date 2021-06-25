import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Edit from '../screen/Edit'
import Home from '../screen/Home'
import Notification from '../screen/Notification'

const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Beranda'
        options={{
          tabBarIcon: () => {
            return <FontAwesome5 name='home' size={24} color='black' />
          },
        }}
        component={Home}
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
            return <MaterialCommunityIcons name='account-details' size={30} color='black' />
          },
        }}
        component={Edit}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
