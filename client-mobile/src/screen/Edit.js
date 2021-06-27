import React from 'react'
import { View, SafeAreaView, TextInput, StyleSheet, Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HStack, Text, Box, StatusBar, Button } from 'native-base'
import Counter from "react-native-counters";
// import styles from '../styles'
import image_test from '../../assets/test_image.jpg'
import tombstones from '../../assets/tombstones.jpg'

function Edit() {
  
  return (
    <>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <Image source={image_test} resizeMode='cover' style={styles.backdrop} />
        </View>
        <View style={styles.overlay}>
          <Text style={styles.headline}>TPU ABC</Text>
          <Text style={styles.address}>Jalan Lorem Ipsum Kelurahan Bla Bla</Text>
          <Text style={styles.address}>Dikelola oleh Bapak Undertaker</Text>
          <Text style={styles.address}>HP: 08123456789</Text>
        </View>

        <View style={styles.item}>
          <View>
            <Image source={tombstones} style={{ width: 80, height: 80 }} />
          </View>
          <View style={{width: 100}}>
            <Text style={{ fontSize: 10 }}>Ubah jumlah lokasi tersedia apabila ada pemesanan diluar aplikasi</Text>
          </View>
          <Counter start={1} />
        </View>

        <View style={styles.dataContainer}>
          <Button colorScheme='teal' mr={0} style={styles.inputButton}>
            Save
          </Button>
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
  overlay: {
    backgroundColor: '#FFF',
    width: '80%',
    height: '15%',
    top: '33%',
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
    width: 330,
    marginTop: '1%',
    marginBottom: '3%',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 16,
    borderRadius: 6,
    top: '60%',
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default Edit
