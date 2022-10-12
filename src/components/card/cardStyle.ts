import { jsonConstant } from './../../constants/iTuneStore/json';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    separator: {
        height: 5,
        width: '100%',
    },
    searchCategory: {
        width: '100%',
    },
    image: {
        width: 85,
        height: 85,  
    },
    imageContainer: {
        borderRadius: 30,
    },
    name: {
        fontSize: 19,
        fontWeight: 'bold',
        width: '100%',
    },
    artist: {
        fontSize: 18,
        width: '100%',

    },
    releaseDate: {
        fontSize: 14,
        paddingLeft: 10,
    },
    nameCategory: {
        flexDirection: 'column',
        paddingLeft: 10,
        flex: 1,
    },
    listContainer: {
        flexDirection: 'row',
        borderRadius: 8,
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.4,
        shadowRadius: 25,
        elevation: 10,
        backgroundColor: jsonConstant.listBackgroundColor,
        padding: 10,
        margin: 10,
    },
    searchInputStyle: {
        height: 50,
        borderWidth: 1.5,
        paddingLeft: 20,
        margin: 12,
        borderColor: jsonConstant.searchInputBorderColor,
        backgroundColor: jsonConstant.searchInputBackgroundColor,
        borderRadius: 10,
    },
    buttonViewContainer : {
      flexDirection: 'row',
       alignItems: 'center',
    },
    button: {
        alignItems: "center",
        padding: 10
    },
    categoryText: {
        padding: 10,
        borderWidth: 1,
        borderColor: jsonConstant.categoryTextBorderColor,
        fontWeight: 'bold',
        fontSize: 16,
        margin: 5,
        borderRadius: 18,
        backgroundColor: jsonConstant.categoryTextBackgroundColor,
    },
    pickerItem: {
        fontSize: 18,
    },
    pickerContainer: {
        backgroundColor: jsonConstant.pickerContainerColor,
        marginLeft: 30,
        padding: 8,
        marginRight: 10,

    },
    pickerCategory: {
        width: 250 ,

    },
    filterItem: {
        flexDirection: 'row',

    },
    toggleText: {
        fontSize: 20,
    },
    toggleView: {
    flexDirection: 'row',
    padding: 13,
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
        padding: 5,
        margin: 5,
    },
    gridImageContainer: {
        borderRadius: 15,
 
    },
    gridImage: {
        width: 70,
        height: 70, 
    },
    gridNameCategory: {
        flexDirection: 'column',
        paddingLeft: 8,
        flex: 1,
    },
    gridName: {
        fontSize: 13,
        fontWeight: 'bold',
        width: '100%'

    },
    gridArtist: {
        fontSize: 1,
        width: '100%'

    },
    gridReleaseDate: {
    fontSize: 12,
    padding: 5,
    width: '100%',
    }
});

export { styles };