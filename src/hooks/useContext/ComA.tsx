import { View, Text } from 'react-native';
import React, { createContext } from 'react';
import ComB from './ComB';

const data = createContext('');

const ComA = () => {
  return (
        <data.Provider value={"Jodhpur"}>
         <ComB />  

        </data.Provider>
  )
}

export default ComA;
export {data};