import React from 'react'
import { View, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {  HStack, Text, Box, StatusBar } from 'native-base'
import styles from '../styles'

function Edit() {
  return (
    <>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Box safeAreaTop backgroundColor='#FFF' />
      <HStack bg='#FFF' px={1} py={3} justifyContent='space-between' alignItems='center'>
        <HStack space={4} alignItems='center'>
          <Text color='black' fontSize={20} pt={2} px={5} fontWeight='bold'>
            Profil
          </Text>
        </HStack>
      </HStack>
    </>
  )
}

export default Edit
