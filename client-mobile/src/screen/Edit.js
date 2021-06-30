import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, TextInput, StyleSheet, Image, TouchableOpacity, ActivityIndicator } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar, Button } from 'native-base'
import Counter from 'react-native-counters'
import { keeperDetail, updateKeeper } from '../store'
// import styles from '../styles'
import image_test from '../../assets/test_image.jpg'
import tombstones from '../../assets/tombstones.jpg'
import { AntDesign } from '@expo/vector-icons'
import AnimatedLoader from "react-native-animated-loader";
import { useSelector, useDispatch } from 'react-redux'

function Edit() {
  const access_token = useSelector((state) => state.access_token)
  const detailKeeper = useSelector((state) => state.detailKeeper)
  const detailLoading = useSelector((state) => state.detailLoading)
  const [currentSpace, setCurrentSpace] = useState(0)

  useEffect(() => {
    keeperDetail('60daa743e6375341fc90b5fe')
  }, [])
  useEffect(() => {
    if (detailKeeper.spaceLeft) {
      setCurrentSpace(detailKeeper.spaceLeft)
    }
  }, [detailKeeper])

  return detailLoading ? (
    // <Text style={{ marginTop: 30 }}>LOADDDEENG..</Text>
    <Text style={{ marginTop: '80%', marginLeft: '45%' }}>
      <ActivityIndicator size='large' color='#00ff00' />
    </Text>
  ) : (
    <>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
        {/* { uri: detailKeeper.image_url[0] } */}
          <Image source={{ uri: detailKeeper.image_url[0] }} resizeMode='cover' style={styles.backdrop} />
        </View>
        <View style={styles.overlay}>
          <Text style={styles.headline}>{detailKeeper.cemetaryName}</Text>
          <Text style={styles.address}>{detailKeeper.cemetaryLocation}</Text>
        </View>

        <View style={styles.detailContainer}>
          <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>Data Pemakaman :</Text>
          <View style={styles.detail}>
            <Text style={{ color: 'black', fontSize: 14 }}>
              {'\u2022'} Pengelola : {detailKeeper.keeperName}
            </Text>
            <Text style={{ color: 'black', fontSize: 14 }}>
              {'\u2022'} HP : {detailKeeper.keeperPhone}
            </Text>
            <Text style={{ color: 'black', fontSize: 14 }}>
              {'\u2022'} Tempat Tersedia : {detailKeeper.spaceLeft}
            </Text>
          </View>
        </View>

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

            <Button onPress={() => updateKeeper(access_token, '60daa743e6375341fc90b5fe', { 
              "cemetaryName": detailKeeper.cemetaryName,
              "cemetaryLocation": detailKeeper.cemetaryLocation,
              "width":detailKeeper.width,
              "height":detailKeeper.height,
              "cemetaryType": detailKeeper.cemetaryType,
              "latitude": detailKeeper.latitude,
              "longitude": detailKeeper.longitude,
              "image_url": detailKeeper.image_url,
              "price": detailKeeper.price,
              "keeperName": detailKeeper.keeperName,
              "keeperEmail": detailKeeper.keeperEmail,
              "keeperPassword": detailKeeper.keeperPassword,
              "keeperPhone": detailKeeper.keeperPhone,
              "spaceLeft": currentSpace,
              "spaceFilled": detailKeeper.spaceFilled,
              "facilities": detailKeeper.facilities
             })} colorScheme='teal' mr={0}>
              Save
            </Button>
          </View>
        </View>
      </View>
    </>
  )
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: '60%',
    left: 0,
    right: 0,
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
    width: '80%',
    height: '10%',
    top: '35%',
    borderRadius: 10,
  },
  logo: {
    backgroundColor: 'rgba(0,0,0,0)',
    width: 160,
    height: 52,
  },
  backdrop: {
    flex: 1,
    flexDirection: 'column',
  },
  headline: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'black',
  },
  address: {
    fontSize: 15,
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
    top: '60%',
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
