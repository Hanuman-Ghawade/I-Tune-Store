import { View, Text, Button } from 'react-native'
import React, { useReducer } from 'react'


const initialState  = 0 ;
const reducer = (state:number, action : any) => {
  if (action.type === 'Increment') {
    return state + 2;
  }else{
    return state - 1;
  }

}

const Reducer = () => {

   const [state, dispatch] =  useReducer(reducer, initialState);

  return (
    <View>
      <Button title='Increment' onPress={() => dispatch({type:'Increment'})} />
      <Text style={{textAlign: 'center'}}>{state}</Text>
      <Button  title='Decrement' onPress={() => dispatch({type:'Decrement'})}/>
    </View>
  );
};

export default Reducer;