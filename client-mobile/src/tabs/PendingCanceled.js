import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import Pending from '../screen/Pending'
import Canceled from '../screen/Canceled'


const Tab = createMaterialTopTabNavigator();
function PendingCancel() {
  return (
    <Tab.Navigator initialRouteName='Pending'>
      <Tab.Screen
        name='Pending'
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="progress-clock" size={24} color="black" />
          },
        }}
        component={Pending}
      />

      <Tab.Screen
        name='Canceled'
        options={{
          tabBarIcon: () => {
            return <Ionicons name="checkmark-done" size={24} color="black" />
          },
        }}
        component={Canceled}
      />
    </Tab.Navigator>
  )
}

export default PendingCancel
