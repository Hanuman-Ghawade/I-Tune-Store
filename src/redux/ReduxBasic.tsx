import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrementCount, incrementCount } from './actions/count';

const ReduxBasic = () => {
  const myState = useSelector((state: any) => state.changeNumber);
  const dispatch = useDispatch();
  return (
    <View>
      <Button title='Increment' onPress={() => dispatch(incrementCount(5))}/>
      <Text style={{fontSize: 20 ,textAlign: 'center'}}>{myState}</Text>
      <Button title='Decrement' onPress={() => dispatch(decrementCount(3))}/>
    </View>
  )
}

export default ReduxBasic;