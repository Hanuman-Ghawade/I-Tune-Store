import { jsonConstant } from './../../constants/iTuneStore/json';
import { StyleSheet, Dimensions } from 'react-native';

const {height, width, fontScale ,scale} = Dimensions.get('window');
console.log(height);
console.log(width);

const styles = StyleSheet.create({
    searchCategory: {
        width: width * 1,
    },
    image: {
        width: width * 0.2,
        height: height * 0.12,  
    },
    imageContainer: {
        borderRadius: 30,
    },
    name: {
        fontSize: scale * 7.5,
        fontWeight: 'bold',
        width: '100%',
    },
    artist: {
        fontSize: scale * 7,
        fontWeight: 'bold',
        width: '100%',
    },
    releaseDate: {
        fontSize: scale * 5.2,
        paddingLeft: width * 0.01,
        fontWeight: 'bold',
        paddingTop: 5,
    },
    nameCategory: {
        flexDirection: 'column',
        paddingLeft: width * 0.04,
        flex: 1,
    },
    listContainer: {
        flexDirection: 'row',
        borderRadius: 10,
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.4,
        shadowRadius: 25,
        elevation: 30,
        backgroundColor: jsonConstant.listBackgroundColor,
        padding: width * 0.04,
        margin: width * 0.025,
    },
    searchInputStyle: {
        height: height * 0.07,
        borderWidth: 1.5,
        paddingLeft: 20,
        margin: width * 0.04,
        borderColor: jsonConstant.searchInputBorderColor,
        backgroundColor: jsonConstant.searchInputBackgroundColor,
        borderRadius: 10,
    },
    buttonViewContainer : {
      flexDirection: 'row',
       alignItems: 'center',
    },
    categoryText: {
        borderWidth: 1,
        borderColor: jsonConstant.categoryTextBorderColor,
        fontWeight: 'bold',
        fontSize: scale * 8,
        margin: width * 0.02,
        borderRadius: 18,
        backgroundColor: jsonConstant.categoryTextBackgroundColor,
    },
    pickerItem: {
        fontSize: scale * 8,
    },
    pickerContainer: {
        backgroundColor: jsonConstant.pickerContainerColor,
        marginLeft: width * 0.03,
        padding: 8,
        marginRight: width * 0.03,

    },
    pickerCategory: {
        width: width * 0.55 ,

    },
    filterItem: {
        flexDirection: 'row',

    },
    toggleText: {
        fontSize: scale * 8,
    },
    toggleView: {
    flexDirection: 'row',
    padding: width * 0.03,
    },
    gridContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.4,
        shadowRadius: 10,
        elevation: 10,
        backgroundColor: jsonConstant.listBackgroundColor,
        padding: width * 0.02,
        margin: width * 0.015,
    },
    gridImageContainer: {
        borderRadius: 15,
 
    },
    gridImage: {
        width: width * 0.15,
        height: height * 0.1, 
    },
    gridNameCategory: {
        flexDirection: 'column',
        paddingLeft: 8,
        flex: 1,
    },
    gridName: {
        fontSize: fontScale * 12 ,
        fontWeight: 'bold',
        width: '100%'

    },
    gridArtist: {
        width: '100%',
        fontSize: fontScale * 18,
        fontWeight: 'bold',

    },
    gridReleaseDate: {
    fontSize: fontScale * 13,
    padding: width * 0.01,
    width: '100%',
    },
    gridListContainer: {
       width: width - 222, 
       marginLeft: width * 0.035
    },
});

export { styles };