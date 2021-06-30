import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import { WebView } from 'react-native-webview'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar, Button } from 'native-base'
import Counter from 'react-native-counters'
import { keeperDetail, updateKeeper } from '../store'
import MapView, { Marker } from 'react-native-maps'
import image_test from '../../assets/test_image.jpg'
import tombstones from '../../assets/tombstones.jpg'
import { AntDesign } from '@expo/vector-icons'
import AnimatedLoader from 'react-native-animated-loader'
import { useSelector, useDispatch } from 'react-redux'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

function Edit() {
  const currentID = useSelector((state) => state.currentID)
  const access_token = useSelector((state) => state.access_token)
  const detailKeeper = useSelector((state) => state.detailKeeper)
  const detailLoading = useSelector((state) => state.detailLoading)
  const [currentSpace, setCurrentSpace] = useState(0)

  useEffect(() => {
    keeperDetail(currentID)
  }, [])

  useEffect(() => {
    if (detailKeeper.spaceLeft) {
      setCurrentSpace(detailKeeper.spaceLeft)
    }
  }, [detailKeeper])

  // console.log(detailKeeper)

  return detailLoading ? (
    // <Text style={{ marginTop: 30 }}>LOADDDEENG..</Text>
    <Text style={{ marginTop: '80%', marginLeft: '45%' }}>
      <ActivityIndicator size='large' color='#00ff00' />
    </Text>
  ) : (
    <>
      {/* <ScrollView style={backgroundColor: 'pink', marginHorizontal: 20,
  }}> */}

      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          {/* { uri: detailKeeper.image_url[0] } */}
          <Image source={image_test} resizeMode='cover' style={styles.backdrop} />
        </View>
        <View style={styles.overlay}>
          <Text style={styles.headline}>{detailKeeper.cemetaryName}</Text>
          <Text style={styles.address}>{detailKeeper.cemetaryLocation}</Text>
        </View>
        <View style={styles.overlay2nd}>
          <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }}>
            <View style={{ left: '0%', flex: 1, alignSelf: 'stretch' }}>
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
            </View>
            <View style={{ flex: 1, alignSelf: 'stretch' }}>
              <Text style={{ color: 'black', fontSize: 14 }}>: {detailKeeper.keeperName}</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>: {detailKeeper.keeperPhone}</Text>
              <Text style={{ color: 'black', fontSize: 14 }}>: {detailKeeper.spaceLeft} Tempat</Text>
            </View>
            {/* <View style={{ flex: 1, alignSelf: 'stretch' }} ><Text>A</Text></View> */}
          </View>
          {/* <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Data Pemakaman :</Text> */}
          {/* <View style={styles.detail}>
            <Text style={{ color: 'black', fontSize: 14 }}>
              <Ionicons name='person' size={14} color='black' /> Pengelola : {detailKeeper.keeperName}
            </Text>
            <Text style={{ color: 'black', fontSize: 14 }}>
              <FontAwesome name='phone' size={14} color='black' /> HP : {detailKeeper.keeperPhone}
            </Text>
            <Text style={{ color: 'black', fontSize: 14 }}>
              <MaterialIcons name='event-available' size={14} color='black' />
              Tempat Tersedia : {detailKeeper.spaceLeft} Tempat
            </Text>
          </View> */}
        </View>

        <View style={{ position: 'absolute', top: 460, height: 142, borderRadius: 10 }}>
          <WebView
            scalesPageToFit={true}
            bounces={false}
            javaScriptEnabled
            style={{ height: 500, width: 320 }}
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

        <Text style={{ top: 400, color: 'black', fontSize: 14 }}>
          {'\u2022'} Tempat Tersedia : {detailKeeper.spaceLeft}
        </Text>

        <View style={styles.item}>
          <View style={{ marginTop: 10 }}>
            <Image source={tombstones} style={{ width: 80, height: 80 }} />
          </View>
          <View style={{ width: 150, marginTop: 30 }}>
            <Text style={{ fontSize: 10 }}>Ubah jumlah lokasi tersedia apabila ada pemesanan diluar aplikasi</Text>
          </View>

          <View>
            <Text style={styles.box}>{currentSpace}</Text>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => setCurrentSpace(Number(currentSpace) - 1)}>
                <AntDesign name='minuscircleo' size={24} color='black' />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setCurrentSpace(Number(currentSpace) + 1)}>
                <AntDesign name='pluscircleo' size={24} color='black' />
              </TouchableOpacity>
            </View>

            <View style={{ position: 'absolute', bottom: 14, right: 100 }}>
              <TouchableOpacity
                style={{
                  // borderWidth: 1,
                  backgroundColor: '#40adaa',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 90,
                  height: 40,
                  borderRadius: 15,
                  top: 20,
                  left: 100,
                }}
                onPress={() =>
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
              >
                <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Simpan</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {/* </ScrollView> */}
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
    height: '15%',
    top: '30%',
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
    top: '30%',
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
    fontSize: 24,
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
