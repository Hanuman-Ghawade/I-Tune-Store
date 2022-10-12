import React, {useEffect, useState} from 'react';
import {View, Text, Button, ScrollView, TouchableOpacity, Linking, Image, Alert} from 'react-native';
import {styles} from './headerStyle';
import {jsonConstant} from '../../constants/iTuneStore/json';
import axios from 'axios';

const Header = () => {
  const [data, setData] = useState<any>()
  
 useEffect(() => {
  axios.get(jsonConstant.uri)
  .then((response)=> {
    setData(response.data.feed)

  }).catch((error)=> {
      Alert.alert(error)
  });
 },[]);
  return (
    <View style={styles.container}>
       <View  style={styles.iconView}>
        <TouchableOpacity
        onPress={() => Linking.openURL(data && data.author.uri.label)}
        >
        <Image
        style={styles.iconStyle}
        source={{uri: data && data.icon.label}}
        />
        </TouchableOpacity>
      </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{data && data.author.name.label}</Text>
      </View>
      
    </View>
  );
};
export default Header;
