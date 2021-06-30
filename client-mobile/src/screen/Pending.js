import React, { useEffect, useState } from 'react'
import { Alert, View, SafeAreaView, FlatList, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Modal, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar } from 'native-base'
import { fetchTransaction, changeStatus, fetchTransactionByID } from '../store'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import styles from '../styles'
import { FontAwesome } from '@expo/vector-icons'
import AnimatedLoader from 'react-native-animated-loader'
import AwesomeAlert from 'react-native-awesome-alerts'

function Notification() {
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
        {/* ========================= MODAL ======================== */}

        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible)
          }}
        >
          <View style={{ top: 60, left: 10, right: 50 }}>
            <View
              style={{
                backgroundColor: '#c9c8a9',
                width: '94.5%',
                height: '92%',
                borderRadius: 20,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 1,
                shadowRadius: 10,
                elevation: 5,
              }}
            >
              {/* https://stackoverflow.com/questions/44357336/setting-up-a-table-layout-in-react-native */}
              <Text style={{ left: '32%', top: '3%', fontWeight: 'bold', color: 'black', fontSize: 22, marginBottom: 10 }}>Detail Order</Text>
              {transactionByIdLoading ? (
                <Text style={{ marginTop: '50%', marginLeft: '45%' }}>
                  <ActivityIndicator size='large' color='#000' />
                </Text>
              ) : (
                <>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Nama Pemesan:</Text> {transactionById.payerName}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Telepon:</Text> {transactionById.phoneNumber}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Email:</Text> {transactionById.email}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Nama Jenazah:</Text> {transactionById.deceasedName}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Tanggal Lahir:</Text> {transactionById.bornDate}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Tanggal Meninggal:</Text> {transactionById.burialDate}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Nama Orang Tua:</Text> {transactionById.fatherName}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Fasilitas:</Text> {transactionById.facility.toString()}
                  </Text>
                  <Text style={{ left: '10%', top: '3%', color: 'black', fontSize: 14 }}>
                    <Text style={{ fontWeight: 'bold' }}>Harga :</Text>Rp.{' '}
                    {Number(transactionById.price)
                      .toFixed(2)
                      .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                  </Text>
                </>
              )}

              <Pressable style={{ left: '46%', top: 250 }} onPress={() => setModalVisible(!modalVisible)}>
                <Text>
                  <AntDesign name='closecircleo' size={24} color='black' />
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        {/* ========================= MODAL ======================== */}
            <View style={stylesHome.itemSmall}>
              <View style={{ position: 'absolute', bottom: 14, right: 100 }}>
                <TouchableOpacity
                  style={{
                    // borderWidth: 1,
                    backgroundColor: '#db4f5d',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 110,
                    height: 40,
                    borderRadius: 15,
                    // top: 10,
                    left: 65,
                  }}
                  onPress={() => {
                    changeStatus(access_token, 'canceled', item._id)
                  }}
                >
                  {/* <AntDesign name='delete' size={15} color='black' /> */}
                  <Text style={stylesHome.textStyle}>Tolak</Text>
                  
                </TouchableOpacity>
              </View>
    
              <View style={{ position: 'absolute', bottom: 14, right: 100 }}>
                <TouchableOpacity
                  style={{
                    // borderWidth: 1,
                    backgroundColor: '#40adaa',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 110,
                    height: 40,
                    borderRadius: 15,
                    // top: 0,
                    right: 80,
                  }}
                  onPress={() => {
                    setModalVisible(true)
                    fetchTransactionByID(item._id)
                  }}
                >
                  {/* <MaterialCommunityIcons name='text-box-search-outline' size={15} color='black' /> */}
                  <Text style={stylesHome.textStyle}>Lihat Detail</Text>
                </TouchableOpacity>
              </View>
            </View>
        <View style={stylesHome.itemBig}>
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', width: '100%' }}>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{item.payerName}</Text>
              <Text style={{ fontSize: 12, bottom: 3 }}>
                <FontAwesome name='phone' size={12} color='black' /> {item.phoneNumber}XXX
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

          <View style={{ position: 'absolute', bottom: '5%', right: 98, width: '40%' }}>
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
                changeStatus(access_token, 'waiting', item._id)
              }}
            >
              <Text style={[stylesHome.textStyle, { color: '#000' }]}>Terima</Text>
            </TouchableOpacity>
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
        <FlatList data={transactions.filter((e) => e.status === 'pending')} renderItem={renderItem} keyExtractor={(item) => item._id} />
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
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 10,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  itemBig: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    marginBottom: -75,
    marginHorizontal: 25,
    borderRadius: 30,
    flex: 1,
    // flexDirection: 'column',
    // flexWrap: 'wrap',
    height: 170,
    bottom: 150
    
  },
  itemSmall: {
    backgroundColor: '#d9d9d9',
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    marginVertical: 3,
    marginHorizontal: 18,
    borderRadius: 25,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 150,
    top: 90
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

export default Notification
