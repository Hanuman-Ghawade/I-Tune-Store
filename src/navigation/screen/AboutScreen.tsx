import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'

const AboutScreen = () => {

  const route = useRoute<any>();
  return (
    <View>
      <Text style={{fontSize: 35}}>Name: {route.params.name}</Text>
      <Text style={{fontSize: 35}}>Email: {route.params.email}</Text>
      <Text style={{fontSize: 35}}>Age: {route.params.age}</Text>
    </View>
  )
}

export default AboutScreen;