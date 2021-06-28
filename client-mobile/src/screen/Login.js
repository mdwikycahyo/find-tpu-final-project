import React, { useState } from 'react'
import { View, Image, TextInput, SaveAreaView, StatusBar } from 'react-native'
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { NativeBaseProvider, Box, Text, Heading, VStack, FormControl, Input, Link, Button, Icon, IconButton, HStack, Divider } from 'native-base'
import styles from '../styles'
import { login } from '../store'

function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPasswordl] = useState('')

  return (
    <>
      <Box flex={1} p={2} w='90%' mx='auto' marginTop='20'>
        <Heading size='lg' color='primary.500'>
          Selamat Datang
        </Heading>
        <VStack space={2} mt={5}>
          <FormControl>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Email</FormControl.Label>
            <TextInput
              style={styles.input}
              placeholder='Email'
              paddingHorizontal={8}
              onChangeText={(email) => {
                setEmail(email)
              }}
            />
          </FormControl>
          <FormControl mb={5}>
            <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>Password</FormControl.Label>
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              paddingHorizontal={8}
              onChangeText={(password) => {
                setPasswordl(password)
              }}
            />
          </FormControl>
          <VStack space={2}>
            <Button
              onPress={() => {
                navigation.navigate('HomeStack')
                login(email, password)
              }}
              colorScheme='cyan'
              _text={{ color: 'white' }}
            >
              Login
            </Button>
          </VStack>
        </VStack>
      </Box>
    </>
  )
}

export default Login
