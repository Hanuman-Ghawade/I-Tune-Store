import React from 'react';
import {View} from 'react-native';
import MusicCard from '../../components/card/Card';
import Header from '../../components/header/Header';

const HomeScreen = () => {

  return (
    <View>
    <Header />
    <MusicCard  />
    </View>
  );
};
export default HomeScreen;