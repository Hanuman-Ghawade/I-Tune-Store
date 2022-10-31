import { View, Text, Button } from 'react-native'
import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(2);

  const multiCountMemo = useMemo( function  multiCount() {
  console.log('Button pressed')
  return count + 1

 }, [ count]) 

  return (
    <View>
      <Text>{count}</Text>
      <Text>{item}</Text>
      <Text> {multiCountMemo}</Text>
      <Button title='Count' onPress={() => setCount(count + 1)}/>
      <Button title='Item' onPress={()=> setItem(item * 2)}/>
    </View>
  )
}

export default UseMemo;