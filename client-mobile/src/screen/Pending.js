import React, { useEffect, useState } from 'react'
import { Alert, View, SafeAreaView, FlatList, StyleSheet, Button, TouchableOpacity, ActivityIndicator, Modal, Pressable } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar } from 'native-base'
import { fetchTransaction, changeStatus, fetchTransactionByID, resetLoading } from '../store'
import { useSelector } from 'react-redux'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import styles from '../styles'
import AnimatedLoader from 'react-native-animated-loader'
import AwesomeAlert from 'react-native-awesome-alerts'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'


function Pending() {
  const access_token = useSelector((state) => state.access_token)
  const currentID = useSelector((state) => state.currentID)
  const transactions = useSelector((state) => state.transactions)
  const transactionLoading = useSelector((state) => state.transactionLoading)
  const transactionById = useSelector((state) => state.transactionById)
  const transactionByIdLoading = useSelector((state) => state.transactionByIdLoading)
  const [modalVisible, setModalVisible] = useState(false)
  const [detailOrder, setDetailOrder] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showReject, setShowReject] = useState(false)
  const [showRejectSuccess, setShowRejectSuccess] = useState(false)

  function show() {
    setShowAlert(true)
  }
  function hide() {
    setShowAlert(false)
  }

  function rejectShow() {
    setShowReject(true)
  }
  
  function rejectHide() {
    setShowReject(false)
  }

  function rejectSuccessShow() {
    setShowRejectSuccess(true)
  }

  function rejectSuccessHide() {
    setShowRejectSuccess(false)
  }

  useEffect(() => {
    fetchTransaction(currentID, access_token)
  }, [currentID])

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
          <View style={{ top: 40 }}>
            <View
              style={{
                backgroundColor: '#FFF',
                opacity: 0.7,
                width: '100%',
                height: '93.5%',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
              }}
            >
              <View style={stylesHome.overlay2nd}>
                <Text style={{ top: '3%', fontWeight: 'bold', color: 'black', fontSize: 22, marginBottom: 10, borderBottomWidth: 1, textAlign: 'center', paddingBottom: 6 }}>Rincian Pesanan</Text>
                {transactionByIdLoading ? (
                  <Text style={{ marginTop: '25%', marginLeft: '45%' }}>
                    <ActivityIndicator size='large' color='#000' />
                  </Text>
                ) : (
                  <>
                    <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', top: 10 }}>
                      <View style={{ left: '10%', flex: 1, alignSelf: 'stretch' }}>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <Ionicons name='person' size={12} color='black' /> Nama Pemesan
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <FontAwesome name='phone' size={12} color='black' /> Telepon
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <MaterialIcons name='event-available' size={12} color='black' />
                          Email
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <MaterialIcons name='drive-file-rename-outline' size={12} color='black' />
                          Nama Jenazah
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <MaterialIcons name='date-range' size={12} color='black' />
                          Tanggal Lahir
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <MaterialIcons name='date-range' size={12} color='black' />
                          Tanggal Wafat
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <MaterialCommunityIcons name='human-male-female' size={12} color='black' />
                          Nama Orang Tua
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <AntDesign name='customerservice' size={12} color='black' />
                          Fasilitas
                        </Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          <FontAwesome5 name='money-bill-wave' size={12} color='black' />
                          Harga
                        </Text>
                      </View>
                      <View style={{ flex: 1, alignSelf: 'stretch' }}>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.payerName}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.phoneNumber}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.email}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.deceasedName}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.bornDate}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.burialDate}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.fatherName}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>: {transactionById.facility.toString()}</Text>
                        <Text style={{ color: 'black', fontSize: 12 }}>
                          : Rp.
                          {Number(transactionById.price)
                            .toFixed(2)
                            .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
                        </Text>
                      </View>
                    </View>
                  </>
                )}
              </View>

              <Pressable style={{ left: '46%', top: 250 }} onPress={() => {resetLoading(), setModalVisible(!modalVisible)}}>
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
                // changeStatus(access_token, 'canceled', item._id, currentID)
                // fetchTransaction(currentID, access_token)
                rejectShow()
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
                fetchTransactionByID(item._id, access_token)
              }}
            >
              <Text style={stylesHome.textStyle}>Lihat Detail</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={stylesHome.itemBig}>
          <View>
            <View style={{ borderBottomWidth: 1, borderBottomColor: '#000', width: '100%' }}>
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
                show()
                // changeStatus(access_token, 'waiting', item._id, currentID)
                // fetchTransaction(currentID, access_token)
              }}
            >
              <Text style={[stylesHome.textStyle, { color: '#000' }]}>Terima</Text>
            </TouchableOpacity>
            <AwesomeAlert
              show={showAlert}
              showProgress={false}
              title='Success'
              message='Berhasil menerima order!'
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              // showCancelButton={true}
              showConfirmButton={true}
              // cancelText='No, cancel'
              confirmText='Oke!'
              confirmButtonColor='#8ce089'
              onCancelPressed={() => {
                hide()
              }}
              onConfirmPressed={() => {
                hide()
              }}
            />
            <AwesomeAlert
              show={showReject}
              showProgress={false}
              title="Perhatian!"
              message="Mau menolak order ini?"
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showCancelButton={true}
              showConfirmButton={true}
              cancelText="Tidak"
              confirmText="Ya"
              confirmButtonColor="#DD6B55"
              onCancelPressed={() => {
                rejectHide()
              }}
              onConfirmPressed={() => {
                changeStatus(access_token, 'canceled', item._id, currentID)
                fetchTransaction(currentID, access_token)
                rejectHide()
                rejectSuccessShow()
              }}
            />
            <AwesomeAlert
              show={showRejectSuccess}
              showProgress={false}
              title='Success'
              message='Berhasil menolak order!'
              closeOnTouchOutside={true}
              closeOnHardwareBackPress={false}
              showConfirmButton={true}
              confirmText='Oke!'
              confirmButtonColor='#8ce089'
              onConfirmPressed={() => {
                rejectSuccessHide()
                fetchTransaction(currentID, access_token)
              }}
            />
          </View>
        </View>
      </>
    )
  return transactionLoading ? (
    <Text style={{ marginTop: '90%', marginLeft: '45%' }}>
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
  overlay2nd: {
    backgroundColor: '#FFF',
    borderWidth: 1,
    width: '90%',
    height: '43%',
    top: '10%',
    left: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
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
    bottom: 150,
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
    top: 90,
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

export default Pending
