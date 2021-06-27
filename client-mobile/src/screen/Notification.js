import React, { useEffect } from 'react'
import { View, SafeAreaView, FlatList, StyleSheet, Button } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar } from 'native-base'
import { fetchTransaction } from '../store'
import styles from '../styles'
const DATA = [
  {
    "id": "1",
    "name": "Customer Satu",
    "address": "Address",
    "phone": "08123456789",
    "facilities": ["Tenda", "Tikar"],
    "status": "pending"
  },
  {
    "id": "2",
    "name": "Customer Dua",
    "address": "Address",
    "phone": "08123456789",
    "facilities": ["Tikar"],
    "status": "waiting"
  },
  {
    "id": "3",
    "name": "Customer Tiga",
    "address": "Address",
    "phone": "08123456789",
    "facilities": ["Ustadz"],
    "status": "done"
  },
  {
    "id": "4",
    "name": "Customer Empat",
    "address": "Address",
    "phone": "08123456789",
    "facilities": ["Bunga", "Tenda", "Tikar"],
    "status": "pending"
  },
  {
    "id": "5",
    "name": "Customer Lima",
    "address": "Address",
    "phone": "08123456789",
    "facilities": ["Tenda", "Tikar"],
    "status": "waiting"
  },
  {
    "id": "6",
    "name": "Customer Enam",
    "address": "Address",
    "phone": "08123456789",
    "facilities": ["Bunga"],
    "status": "done"
  }
]

function Notification() {
  // useEffect(() => {
  //   fetchTransaction()
  // }, [])

  const renderItem = ({ item }) => (
    <View style={stylesHome.item}>
      <View>
        <Text style={{ fontSize: 24 }}>{item.name}</Text>
        <Text style={{ fontSize: 16 }}>{item.phone}</Text>
        {/* <Text style={{ fontSize: 16 }}>Alamat: {item.address}</Text> */}
        <Text style={{ fontSize: 16 }}>Fasilitas:</Text>
        {item.facilities.map((facility, index)=> {
          return (
            <Text key={index} style={{ marginLeft: 10 }}>{'\u2B22'} {facility}</Text>
          )
        })}
      </View>
      <View style={{ color: 'black', position: 'absolute', bottom: 10, right: 10, width: '40%' }}>
        <Button title='Terima' color='#72c955' />
      </View>
    </View>
  )
  return (
    <>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <Box safeAreaTop backgroundColor='#FFF' />
      <HStack bg='#FFF' px={1} py={3} justifyContent='space-between' alignItems='center'>
        <HStack space={4} alignItems='center'>
          <Text color='black' fontSize={20} pt={2} px={5} fontWeight='bold'>
            Notifikasi
          </Text>
        </HStack>
      </HStack>
      <SafeAreaView style={stylesHome.container}>
        <FlatList data={DATA.filter(e => e.status === 'pending')} renderItem={renderItem} keyExtractor={(item) => item.id} />
      </SafeAreaView>
    </>
  )
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#FFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 12,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  title: {
    fontSize: 24,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
})

export default Notification
