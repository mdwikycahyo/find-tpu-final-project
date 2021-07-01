import React, { useEffect, useState } from 'react'
import { Alert, View, SafeAreaView, FlatList, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Modal, Pressable, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar } from 'native-base'
import { fetchTransaction, changeStatus, fetchTransactionByID } from '../store'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import styles from '../styles'
import { FontAwesome } from '@expo/vector-icons'

import { FontAwesome5 } from '@expo/vector-icons';
import AnimatedLoader from 'react-native-animated-loader'
import AwesomeAlert from 'react-native-awesome-alerts'
import checkedImage from '../../assets/checked.png'

function Done() {
  const access_token = useSelector((state) => state.access_token)
  const transactions = useSelector((state) => state.transactions)
  const transactionLoading = useSelector((state) => state.transactionLoading)
  const transactionById = useSelector((state) => state.transactionById)
  const transactionByIdLoading = useSelector((state) => state.transactionByIdLoading)
  const [modalVisible, setModalVisible] = useState(false)
  const [detailOrder, setDetailOrder] = useState(false)

  useEffect(() => {
    fetchTransaction()
  }, [])

  const renderItem = ({ item }) =>
    transactionLoading ? (
      <Text>Loading...</Text>
    ) : (
      <>
        <View style={stylesHome.item}>
          <View>
            {/* style={{ width: 80, height: 80 }}  */}
            {/* <Image source={done_image} /> */}
            {/* <Text>TEXT</Text> */}
            <Image
              style={{width: 50, height: 50, marginRight: 15, top:10}}
              source={checkedImage}
            />
          </View>
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', width: 230 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.payerName}</Text>

              <Text style={{ fontSize: 12, bottom: 3 }}>
                <FontAwesome name='phone' size={12} color='black' /> {item.phoneNumber}
              </Text>
              <Text style={{ fontSize: 12, bottom: 3 }}>
                <FontAwesome5 name="money-bill-wave" size={10} color="green" /> Rp. {Number(item.price)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </Text>
            </View>
            <Text style={{ fontSize: 14 }}>Fasilitas:</Text>
            {item.facility.map((fac, index) => {
              return (
                <Text key={index} style={{ marginLeft: 10, fontSize: 12 }}>
                  {'\u2B22'} {fac}
                </Text>
              )
            })}
          </View>
        </View>
      </>
    )
  return transactionLoading ? (
    <Text style={{ marginTop: '95%', marginLeft: '45%' }}>
      <ActivityIndicator size='large' color='#00ff00' />
    </Text>
  ) : (
    <>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <SafeAreaView style={stylesHome.container}>
        <FlatList data={transactions.filter((e) => e.status === 'done')} renderItem={renderItem} keyExtractor={(item) => item._id} />
      </SafeAreaView>
    </>
  )
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#545452',
  },
  loadingContainer: {
    marginTop: '80%',
    marginLeft: '45%',
  },
  item: {
    backgroundColor: '#FFF',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 5,
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    left: 50,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    left: 20,
    // textAlign: 'center',
  },
})

export default Done
