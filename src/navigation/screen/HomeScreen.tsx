import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { Link, useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [age, setAge] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigation = useNavigation<any>()
  const register = () => {
    navigation.navigate('About', {
      name: name,
      email: email,
      age: age
    });
  }
  return (
    <View>
      <TextInput placeholder='Name' value={name}   onChangeText={(text) => setName(text)} style={{backgroundColor: 'green'}}/>
      <TextInput placeholder='Email' value={email} onChangeText={(text) => setEmail(text)} style={{backgroundColor: 'green'}}/>
      <TextInput placeholder='Age' value={age} onChangeText={(text) => setAge(text)} style={{backgroundColor: 'green'}}/>
      <TextInput placeholder='Password'  secureTextEntry value={password} onChangeText={(text) => setPassword(text)} style={{backgroundColor: 'green'}}/>
      <Button title='Register' onPress={register}/>
    </View>
  )
}

export default HomeScreen;