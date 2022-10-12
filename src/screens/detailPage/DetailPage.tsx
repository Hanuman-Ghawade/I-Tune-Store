import { View, Text, Image } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native'
import { styles } from './detailPageStyle';
import { jsonConstant } from '../../constants/iTuneStore/json';

const DetailPage = () => {
    const route = useRoute<any>();

  return (
    <View style={styles.listContainer}>
        <View style={styles.imageTextContainer}>
            <Image source={{uri: route.params.imageUri}} style={styles.imageStyle}/>
            <View style={styles.textArtistContainer}>
            <Text numberOfLines={2} style={styles.appName}>{route.params.appName}</Text>
            <Text numberOfLines={2} style={styles.artist}>{route.params.artist}</Text>   
            </View>
        </View>
        <Text  numberOfLines={2} style={styles.title}>Title : {route.params.title}</Text>
        <View style={styles.categoryPriceContainer}>
            <View style={{padding: 15}}>
               <Text style={styles.category}> Category </Text>
               <Text style={styles.categoryText}>{route.params.category}</Text>
            </View>
            <View  style={{margin: 15}}>
                <Text style={styles.price}>Price</Text> 
            {route.params.price === jsonConstant.amount
                ? <Text style={styles.priceText}>Free</Text>
                : <Text style={styles.priceText}>${(route.params.price)[0]}</Text>
            }
            </View>
        </View>
        <View style={styles.releaseCopyrightContainer}>
            <View>
                <Text style={styles.releaseDate}> ReleaseDate</Text>
                <Text style={styles.releaseDateText}>{route.params.releaseDate}</Text>
            </View>
            <View style={styles.copyrightContainer}>
                <Text style={styles.copyright}>Copyright</Text>
                <Text  numberOfLines={2}  style={styles.copyrightText}>{route.params.copyRight}</Text>
            </View>
        </View>

    </View>
  )
}

export default DetailPage;