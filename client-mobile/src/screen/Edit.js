import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'
import { HStack, Text, Box, StatusBar, Button } from 'native-base'
import { keeperDetail, updateKeeper } from '../store'
import tombstones from '../../assets/tombstones.jpg'
import { AntDesign } from '@expo/vector-icons'
import AnimatedLoader from 'react-native-animated-loader'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import AwesomeAlert from 'react-native-awesome-alerts'

function Edit() {
  const currentID = useSelector((state) => state.currentID)
  const access_token = useSelector((state) => state.access_token)
  const detailKeeper = useSelector((state) => state.detailKeeper)
  const detailLoading = useSelector((state) => state.detailLoading)
  const [currentSpace, setCurrentSpace] = useState(0)
  const [showAlert, setShowAlert] = useState(false)
  
  function show() {
    setShowAlert(true)
  }
  function hide() {
    setShowAlert(false)
  }

  useEffect(() => {
    keeperDetail(currentID)
  }, [])

  useEffect(() => {
    if (detailKeeper.spaceLeft) {
      setCurrentSpace(detailKeeper.spaceLeft)
    }
  }, [detailKeeper])

  return detailLoading ? (
    <Text style={{ marginTop: '80%', marginLeft: '45%' }}>
      <ActivityIndicator size='large' color='#00ff00' />
    </Text>
  ) : (
    <>
      <View style={[styles.container, { top: 0 }]}>
        <View style={styles.backgroundContainer}>
          {/* { uri: detailKeeper.image_url[0][0] } */}
          <Image source={{ uri: detailKeeper.image_url[0]}} resizeMode='cover' style={styles.backdrop} />
        </View>
        <View style={styles.overlay}>
          <Text style={styles.headline}>{detailKeeper.cemetaryName}</Text>
          <Text style={styles.address}>{detailKeeper.cemetaryLocation}</Text>
        </View>
        <View style={{ position: 'absolute', top: 300, height: 152, borderRadius: 10 }}>
          <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 500, width: 340 }}
            source={{
              html: `
                  <!DOCTYPE html>
                  <html>
                    <head>${detailKeeper.cemetaryName}</head>
                    <body>
                      <div id="baseDiv">
                      <iframe src="https://maps.google.com/maps?q=${detailKeeper.latitude},${detailKeeper.longitude}&hl=es&z=14&amp;output=embed" width="965" height="400" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                      </div>
                    </body>
                  </html>
            `,
            }}
            automaticallyAdjustContentInsets={false}
          />
        </View>
        <View style={styles.overlay2nd}>
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row', top: 10 }}>
            <View style={{ left: '25%', flex: 1, alignSelf: 'stretch' }}>
              <Text style={{ color: 'black', fontSize: 14 }}>
                <Ionicons name='person' size={14} color='black' /> Pengelola
              </Text>
              <Text style={{ color: 'black', fontSize: 14 }}>
                <FontAwesome name='phone' size={14} color='black' /> HP
              </Text>
              <Text style={{ color: 'black', fontSize: 14 }}>
                <MaterialIcons name='event-available' size={14} color='black' />
                Tempat Tersedia
              </Text>
              <Text style={{ color: 'black', fontSize: 14 }}>
                <FontAwesome5 name='money-bill-wave' size={12} color='black' />
                Harga
              </Text>
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch' }}>
              <Text style={{ color: 'black', fontSize: 14 }}>: {detailKeeper.keeperName}</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>: {detailKeeper.keeperPhone}</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>: {detailKeeper.spaceLeft} Tempat</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>
                : Rp.
                {Number(detailKeeper.price)
                  .toFixed(2)
                  .replace(/\d(?=(\d{3})+\.)/g, '$&,')}
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.overlay3rd}>
          <Text style={{ position: 'absolute', fontSize: 10, left: 80, top: 17, width: 150 }}>Ubah jumlah lokasi tersedia apabila ada pemesanan diluar aplikasi</Text>
          <Image source={tombstones} style={{ width: 50, height: 50, borderRadius: 10, left: 10, top: 10 }} />
          <View style={{ left: 230, bottom: 40, flexDirection: 'row' }}>
            <TouchableOpacity onPress={() => setCurrentSpace(Number(currentSpace) - 1)}>
              <AntDesign name='minuscircleo' size={20} color='black' />
            </TouchableOpacity>
            <Text style={{ paddingLeft: 10, paddingRight: 10 }}>{currentSpace}</Text>
            <TouchableOpacity onPress={() => setCurrentSpace(Number(currentSpace) + 1)}>
              <AntDesign name='pluscircleo' size={20} color='black' />
            </TouchableOpacity>
          </View>

          <View style={{ position: 'absolute', bottom: 14, right: 110 }}>
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                backgroundColor: '#40adaa',
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                height: 35,
                borderRadius: 10,
                top: 10,
                left: 100,
              }}
              onPress={() => {
                  show();
                  updateKeeper(access_token, currentID, {
                    cemetaryName: detailKeeper.cemetaryName,
                    cemetaryLocation: detailKeeper.cemetaryLocation,
                    width: detailKeeper.width,
                    height: detailKeeper.height,
                    cemetaryType: detailKeeper.cemetaryType,
                    latitude: detailKeeper.latitude,
                    longitude: detailKeeper.longitude,
                    image_url: detailKeeper.image_url,
                    price: detailKeeper.price,
                    keeperName: detailKeeper.keeperName,
                    keeperEmail: detailKeeper.keeperEmail,
                    keeperPassword: 'mortred',
                    keeperPhone: detailKeeper.keeperPhone,
                    spaceLeft: currentSpace,
                    spaceFilled: detailKeeper.spaceFilled,
                    facilities: detailKeeper.facilities,
                  })
                }
              }
            >
              <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center', fontSize: 14 }}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title='Success'
          message='Jumlah tempat tersedia telah diubah!'
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
      </View>
    </>
  )
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: '65%',
    left: 0,
    right: 0,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  loadingContainer: {
    marginTop: '80%',
    marginLeft: '45%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#e8e8e8',
  },
  dataContainer: {
    flex: 1,
    alignItems: 'flex-start',
    top: '50%',
    // left: '-23%',
  },
  detailContainer: {
    width: '80%',
    // flex: 1,
    // alignItems: 'flex-start',
    top: '37%',
    // backgroundColor: 'green',
    marginBottom: 40,
  },
  detail: {
    left: 10,
  },
  overlay: {
    backgroundColor: '#FFF',
    width: '100%',
    height: '14%',
    top: '29%',
    borderBottomRightRadius: 19,
    borderBottomLeftRadius: 19,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  overlay2nd: {
    backgroundColor: '#FFF',
    width: '90%',
    height: '25%',
    top: '55%',
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
  overlay3rd: {
    backgroundColor: '#ededed',
    borderTopWidth: 0.5,
    width: '90%',
    height: '12%',
    top: '45%',

    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 6,
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52,
  },
  headline: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  address: {
    fontSize: 14,
    textAlign: 'center',
    color: 'grey',
  },
  input: {
    height: 40,
    width: 285,
    marginTop: '1%',
    marginBottom: '3%',
    borderWidth: 1,
  },
  inputButton: {
    height: 40,
    width: 300,
    top: 200,
    marginTop: '1%',
    marginBottom: '3%',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    width: '90%',
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 6,
    top: '120%',
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  box: {
    height: 30,
    width: '100%',
    margin: 0,
    // borderWidth: 1,
    // borderRightWidth: 3,
    textAlign: 'center',
  },
  button: {
    alignItems: 'center',
    height: 30,
    width: 30,
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
  },
})

export default Edit
