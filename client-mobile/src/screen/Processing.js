import React, { useEffect, useState } from 'react'
import { Alert, View, SafeAreaView, FlatList, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Modal, Pressable } from 'react-native'
import { HStack, Text, Box, StatusBar } from 'native-base'
import { fetchTransaction, changeStatus, resetLoadingTrans } from '../store'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import AwesomeAlert from 'react-native-awesome-alerts'

function Processing() {
  const access_token = useSelector((state) => state.access_token)
  const currentID = useSelector((state) => state.currentID)
  const transactions = useSelector((state) => state.transactions)
  const transactionLoading = useSelector((state) => state.transactionLoading)
  // const transactionById = useSelector((state) => state.transactionById)
  // const transactionByIdLoading = useSelector((state) => state.transactionByIdLoading)
  // const [modalVisible, setModalVisible] = useState(false)
  // const [detailOrder, setDetailOrder] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  function show() {
    setShowAlert(true)
  }
  function hide() {
    setShowAlert(false)
  }

  useEffect(() => {
    resetLoadingTrans()
    fetchTransaction(currentID, access_token)
  }, [])

  const renderItem = ({ item }) =>
    transactionLoading ? (
      <Text>Loading...</Text>
    ) : (
      <>
        <View style={stylesHome.item}>
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', width: 300 }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.payerName}</Text>
              <Text style={{ fontSize: 12, bottom: 3 }}>
                <FontAwesome name='phone' size={12} color='black' /> {item.phoneNumber}
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
          
          <View style={{ left:180 }}>
            <MaterialCommunityIcons style={{top:-80, right:25}} name='timer' size={24} color='black' />
            <Text style={{ fontSize: 14, bottom: 100 }}>
               Sedang disiapkan ...
            </Text>

          </View>

          <View style={{ position: 'absolute', bottom:20, right: 10, width: '40%' }}>
            <TouchableOpacity
              style={{
                // borderWidth: 0.5,
                // borderColor: '#e6b319',
                alignItems: 'center',
                justifyContent: 'center',
                width: 110,
                height: 40,
                backgroundColor: '#8ce089',
                borderRadius: 10,
              }}
              onPress={() => {
                show()
                changeStatus(access_token, 'done', item._id, currentID)
                fetchTransaction(currentID, access_token)
              }}
            >
              <Text style={{ color: '#000' }}>Selesai</Text>
            </TouchableOpacity>
          </View>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title='Success'
            message='Order selesai'
            closeOnTouchOutside={true}
            closeOnHardwareBackPress={false}
            // showCancelButton={true}
            showConfirmButton={true}
            // cancelText='No, cancel'
            confirmText='Oke!'
            confirmButtonColor='#8ce089'
            onConfirmPressed={() => {
              fetchTransaction(currentID, access_token)
              hide()
            }}
          />
        </View>
      </>
    )
  return transactionLoading ? (
    <Text style={{ marginTop: '75%', marginLeft: '45%' }}>
      <ActivityIndicator size='large' color='#00ff00' />
    </Text>
  ) : (
    <>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <SafeAreaView style={stylesHome.container}>
        <FlatList data={transactions.filter((e) => e.status === 'waiting')} renderItem={renderItem} keyExtractor={(item) => item._id} />
      </SafeAreaView>
    </>
  )
}

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#e8e8e8',
  },
  loadingContainer: {
    marginTop: '80%',
    marginLeft: '45%',
  },
  item: {
    backgroundColor: '#FFF',
    paddingTop: 10,
    paddingBottom: 0,
    paddingLeft: 20,
    paddingRight: 20,
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

export default Processing
