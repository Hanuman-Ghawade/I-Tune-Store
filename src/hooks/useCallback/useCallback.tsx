import { View, Text, Button } from 'react-native'
import React, { useCallback, useMemo, useState } from 'react'
import ComA from './ComA';

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(0);
  const Learning = useCallback(() => {

  },[count])
  return (

    <View>
      <Text style={{alignSelf: 'center'}}>{count}</Text>
      <ComA learning={Learning} add={add}/>
      <Button title='Count' onPress={() => setCount(count + 1)}/>
      <Text style={{alignSelf: 'center'}}>{add}</Text>
      <Button title='Add' onPress={() => setAdd(add + 1)}/>
    </View>
  )
}
export default UseCallback;