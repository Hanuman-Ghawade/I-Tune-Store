import React, {useEffect, useState} from 'react';
import {FlatList, Image, ImageSourcePropType, Text, View, TextInput, TouchableNativeFeedback, Alert, Switch } from 'react-native';
import { jsonConstant } from '../../constants/iTuneStore/json';
import { styles } from './cardStyle';
import {Picker} from '@react-native-picker/picker';
import {useNavigation } from '@react-navigation/native'
import axios from 'axios';


var allCategory: any[];
const MusicCard  = () => {
    const [data, setData] = useState<any[]>([]);
    const [search, setSearch] = useState<string>('');
    const [masterData, setMasterData] = useState<any[]>([])
    const [category, setCategory] = useState(allCategory)
    const [selectedLanguage, setSelectedLanguage] = useState<string>('');
    const navigation = useNavigation<any>()
    const [switchValue, setSwitchValue] = useState<boolean>(false)


useEffect(() => {
  axios.get(jsonConstant.uri)
  .then((response) =>{ 
    setData(response.data.feed.entry)
    setMasterData(response.data.feed.entry)
    setCategory(allCategory)

  }).catch((error) => {
      Alert.alert(error)
  });  
},[])

const navigateDetailPage  = (item: any) => {
  navigation.navigate(jsonConstant.detailPage,{
        title: item.title.label,
        appName: item[jsonConstant.name].label,
        artist: item[jsonConstant.artist].label,
        imageUri: item[jsonConstant.image][2].label,
        category: item.category.attributes.label,
        releaseDate: item[jsonConstant.releaseDate].attributes.label,
        copyRight: item.rights.label,
        price: item[jsonConstant.price].attributes.amount,
      });
}
const gridView  = ({item}: {item: any}) => {
  return (
     <View style={{width: 180, marginLeft: 15}}>

       <TouchableNativeFeedback
      onPress={(item) => navigateDetailPage(item) }
      >
            <View style={styles.gridContainer}>
              <View style={styles.gridImageContainer}>
                <Image
                  source={{uri: item[jsonConstant.image][2].label}}
                  style={styles.gridImage}
                />
              </View>
              <View style={styles.gridNameCategory}>

                <Text style={styles.gridName} numberOfLines={1}>{item[jsonConstant.name].label}</Text>
                <Text style={styles.gridArtist} numberOfLines={1}>
                  {item[jsonConstant.artist].label}
                </Text>
                <Text style={styles.gridReleaseDate}>
                  {item[jsonConstant.releaseDate].attributes.label}
                </Text>
              </View>
            </View>
            </TouchableNativeFeedback>
     </View>
  )
}
const listView = ({item}: {item: any}) => {
  return (
     <View>
       <TouchableNativeFeedback
      onPress={() => navigateDetailPage(item)}
      >
            <View style={styles.listContainer}>
              <View style={styles.imageContainer}>
                <Image
                  source={{uri: item[jsonConstant.image][2].label}}
                  style={styles.image}
                />
              </View>
              <View style={styles.nameCategory}>
                <Text style={styles.name}  numberOfLines={2}>{item[jsonConstant.name].label}</Text>
                <Text style={styles.artist}  numberOfLines={2}>
                  {item[jsonConstant.artist].label}
                </Text>
                <Text style={styles.releaseDate}>
                  Released Date:{' '}
                  {item[jsonConstant.releaseDate].attributes.label}
                </Text>
              </View>
            </View>
            </TouchableNativeFeedback>
     </View>
  )
 
}

allCategory  = [jsonConstant.all,...new Set(data.map((currentCategory) => {
    return currentCategory.category.attributes.label
}))]

const filterItem = (categoryItem: string) => {
  setSelectedLanguage(categoryItem)
    if (categoryItem === jsonConstant.all) {
        setData(masterData)
        return;
    }
    console.log()
    const updatedItem = masterData.filter((currentElement) => {
        return currentElement.category.attributes.label === categoryItem;
    });

    setData(updatedItem);
}

const searchFilter = (text: string) => {
    if (text) {
        const newData: string[] = masterData.filter((item) => {
            const itemData: string = item[jsonConstant.name].label 
            ? item[jsonConstant.name].label.toString().toUpperCase()
            : ''.toString().toUpperCase();
            const textData = text.toString().toUpperCase();
            return itemData.indexOf(textData) > -1;
        })
        setData(newData);
        setSearch(text);
    }else{
        setData(masterData);
        setSearch(text)
    }
}

const toggleSwitch =(value: boolean) => {
  setSwitchValue(value)
}
  return (
    <View>
      <View style={styles.searchCategory}>
        <TextInput
          placeholder={jsonConstant.search}
          placeholderTextColor={jsonConstant.textInputColor}
          style={styles.searchInputStyle}
          value={search}
          onChangeText={text => {
            searchFilter(text);
          }}
        />
        </View>
      <View style={styles.filterItem}>
        <View style={styles.toggleView}>
        <Text style={styles.toggleText}> List </Text>
        <Switch
        onValueChange={toggleSwitch}
        value={switchValue}
        />
        <Text style={styles.toggleText}> Grid </Text>
        </View>
        < View style={styles.pickerCategory}>
        <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue: string) => filterItem(itemValue)
          }   
        style={styles.pickerContainer}
        >
          {
            category && category.map((item, index) => {
              return <Picker.Item label={item} value={item} key={index} style={styles.pickerItem}/>
            })
          }
        </Picker>
        </View>
        </View>
        {/* <ScrollView horizontal={true}>
          {category &&
            category.map(item => {
              return (
                <View key={item}>
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.button}
                    onPress={() => filterItem(item)}
                  >
                    <Text style={styles.categoryText}>{item}</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
        </ScrollView> */}
      <>
      {
        switchValue === false 
        ?  <FlatList
        data={data}
        keyExtractor={(item) =>  item.id.attributes[jsonConstant.id]}
        renderItem={listView}
      />
      : <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.id.attributes[jsonConstant.id]}
        renderItem={gridView}
      />
      }
      </>  
    </View>
  );
};
export default MusicCard;