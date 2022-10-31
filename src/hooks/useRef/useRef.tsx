import { View, Text, Button, Alert, TextInput } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const UseRefHook = () => {
    const [myData, setMyData] = useState('');
    // const [count, setCount] = useState(0)

    const count = useRef('');
    const onSubmit = () => {
    }


    return(
        <View>
            <TextInput ref={onSubmit} value={myData} placeholder='Please enter the value'/>
            <Button title='Submit' onPress={() => onSubmit()}/>
        </View>
    )
}


export default UseRefHook;

