import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar } from 'native-base';

import Processing from '../screen/Processing'
import Done from '../screen/Done'


const Tab = createMaterialTopTabNavigator();
function TabNavigator() {
  return (
    
    <Tab.Navigator initialRouteName='Processing'>
      {/* <StatusBar hidden /> */}
      <Tab.Screen
        name='My Order'
        options={{
          tabBarIcon: () => {
            return <MaterialCommunityIcons name="progress-clock" size={24} color="black" />
          },
        }}
        component={Processing}
      />

      <Tab.Screen
        name='Done'
        options={{
          tabBarIcon: () => {
            return <Ionicons name="checkmark-done" size={24} color="black" />
          },
        }}
        component={Done}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
