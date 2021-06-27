import React, { useState } from 'react'
import { View, Image, Button, TextInput, Text, SaveAreaView, StatusBar } from 'react-native'
import styles from '../styles'
import { login } from '../store'


function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPasswordl] = useState('')

  return (
    <>
      <StatusBar backgroundColor='#000' barStyle='light-content' />
      <View style={styles.mainContainer}>
        <Text>Login Page</Text>
        <TextInput
          style={styles.input}
          placeholder='Email'
          paddingHorizontal={8}
          onChangeText={(email) => {
            setEmail(email)
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          paddingHorizontal={8}
          onChangeText={(password) => {
            setPasswordl(password)
          }}
        />

        <View style={{ marginVertical: 8 }}>
          <Button
            title='Login'
            onPress={() => {
              navigation.navigate('HomeStack')
              login(email, password)
            }}
          />
        </View>
      </View>
    </>
  )
}

export default Login
