import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { data } from './ComA'
const ComC = () => {
    const cityName = useContext(data)
  return (
    <View>
    <>
    <Text> Hanuman Ghawade{cityName} </Text>
    </>
    </View>
  )
}
export default ComC

