import React from 'react'
import { View, Image, Button, TextInput, Text, SaveAreaView } from 'react-native'
import styles from '../styles'

function Login({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder='Username'
        paddingHorizontal= {8}
        // onChangeText={(text) => {
        //   setName(text)
        // }}
      />
      <TextInput
        style={styles.input}
        placeholder='Password'
        secureTextEntry={true} 
        
        paddingHorizontal= {8}
        // onChangeText={(text) => {
        //   setName(text)
        // }}
      />
      
      <View style={{ marginVertical: 8 }}>
        <Button
          title='Login'
          onPress={() => {
            navigation.navigate('HomeStack')
          }}
        />
      </View>
    </View>
  )
}

export default Login
