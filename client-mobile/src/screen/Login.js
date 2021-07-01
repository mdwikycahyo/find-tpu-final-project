// var cmd = require('node-cmd')
import React, { useState } from 'react'
import { View, Image, TextInput, SaveAreaView, StatusBar } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, IconButton, HStack, Divider } from 'native-base'
import styles from '../styles'
import { login } from '../store'
import logo from '../../assets/logo.png'
import { Entypo } from '@expo/vector-icons'
import { fontStyle } from 'styled-system'

function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPasswordl] = useState('')

  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: '#fff' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      // contentContainerStyle={styles.container}
      // scrollEnabled={faxlse}
    >
      <StatusBar hidden />
      
      <Box flex={1} p={2} w='90%' mx='auto' marginTop='10'>
        <Image source={logo} style={{ left: '10%', top: '10%', width: '80%' }} />
        <VStack space={2} mt={5}>
          <FormControl>
            {/* <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Email</FormControl.Label> */}
            <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000' }}>
              <Entypo name='email' size={20} color='black' style={{ marginRight: 10, top: 19 }} />
              <TextInput
                style={styles.input,{marginTop: 5}}
                placeholder='Email'
                paddingHorizontal={8}
                paddingVertical={10}
                onChangeText={(email) => {
                  setEmail(email)
                }}
              />
            </View>
          </FormControl>
          <FormControl mb={5}>
          <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: '#000' }}>
              {/* <Entypo name='email' size={20} color='black' style={{ marginRight: 10, top: 19 }} /> */}
              <Entypo name="lock-open" size={20} color="black" style={{ marginRight: 10, top: 19 }}/>
              <TextInput
                style={styles.input,{marginTop: 5}}
                placeholder='Password'
                secureTextEntry={true}
                paddingHorizontal={8}
                paddingVertical={10}
                onChangeText={(password) => {
                  setPasswordl(password)
                }}
              />
            </View>
          </FormControl>
          <VStack space={2}>
            <Button
              onPress={() => {
                navigation.navigate('HomeStack')
                login(email, password)
              }}
              backgroundColor='#545452'
              _text={{ color: 'white', fontWeight: 'bold', fontStyle: ["normal"], fontSize: 20, fontVariants:["oldstyle-nums"] }}
            >
              Login
            </Button>
          </VStack>
        </VStack>
      </Box>
    </KeyboardAwareScrollView>
  )
}

export default Login
