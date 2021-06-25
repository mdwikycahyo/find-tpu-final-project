import React from 'react'
import { View, Image, Button, TextInput, Text, SaveAreaView } from 'react-native'
import TabNavigator from '../tabs/NotificationTab'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import styles from '../styles'

function HomeStack() {
  return <TabNavigator />
}

export default HomeStack
