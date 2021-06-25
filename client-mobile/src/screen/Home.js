import React from 'react'
import { View, Image, Button, TextInput, Text, SaveAreaView } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import styles from '../styles'

const Tab = createBottomTabNavigator()
function Home() {
  return (
    <View style={styles.container}>
      <Text>Home Page</Text>
    </View>
  )
}

export default Home
