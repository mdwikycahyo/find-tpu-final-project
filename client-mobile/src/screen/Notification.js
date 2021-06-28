import React, { useEffect } from 'react'
import { View, SafeAreaView, FlatList, StyleSheet, Button, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar } from 'native-base'
import { fetchTransaction, changeStatus } from '../store'
import { useSelector } from 'react-redux'
import styles from '../styles'

function Notification() {
  const access_token = useSelector((state) => state.access_token)
  const transactions = useSelector((state) => state.transactions)
  const transactionLoading = useSelector((state) => state.transactionLoading)

  useEffect(() => {
    fetchTransaction()
  }, [])

  const renderItem = ({ item }) =>
    transactionLoading ? (
      <Text>Loading..</Text>
    ) : (
      <View style={stylesHome.item}>
        <View>
          <Text style={{ fontSize: 24 }}>{item.payerName}</Text>
          <Text style={{ fontSize: 16 }}>{item._id}</Text>
          <Text style={{ fontSize: 16 }}>{item.phoneNumber}</Text>
          <Text style={{ fontSize: 16 }}>Status: {item.status}</Text>
          <Text style={{ fontSize: 16 }}>Fasilitas:</Text>
          {item.facility.map((fac, index) => {

            return (
              <Text key={index} style={{ marginLeft: 10 }}>
                {'\u2B22'} {fac}
              </Text>
            )
          })}
        </View>
        <View style={{ color: 'black', position: 'absolute', bottom: 10, right: 10, width: '40%' }}>
          <Button
            onPress={() => {
              changeStatus(access_token, 'waiting', item._id)
            }}
            title='Terima'
            color='#72c955'
          />
          {/* <TouchableOpacity style={styles.button}>
            <Text>Terima</Text>
          </TouchableOpacity> */}
        </View>
      </View>
    )
  return transactionLoading ? (
    <Text style={{ marginTop: 30 }}>LOADDDEENG..</Text>
  ) : (
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
        <FlatList data={transactions.filter((e) => e.status === 'pending')} renderItem={renderItem} keyExtractor={(item) => item.id} />
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
