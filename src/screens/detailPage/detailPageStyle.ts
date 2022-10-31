import { jsonConstant } from '../../constants/iTuneStore/json';
import { StyleSheet, Dimensions } from 'react-native';

const { height, width, fontScale, scale } = Dimensions.get('window');
const styles = StyleSheet.create({

    imageStyle: {
        width: width * 0.28,
        height: height * 0.16,
    },
    listContainer: {
        borderRadius: 8,
        shadowOffset: {
            width: 9,
            height: 9,
        },
        shadowOpacity: 0.4,
        shadowRadius: 25,
        elevation: 10,
        backgroundColor: jsonConstant.listBackgroundColor,
        padding: width * 0.02,
        margin: width *0.02,
    },
    imageTextContainer: {
        flexDirection: 'row'
    },
    appName: {
        fontSize: scale * 9,
        fontWeight: 'bold',
        margin: 10,
        width: '100%',
    },
    artist: {
        fontSize: scale * 7,
        fontWeight: 'bold',
        margin: 10,
    },
    textArtistContainer: {
        margin: 10,
        flex: 1,
    },
    title: {
        fontSize: scale * 7,
        margin: 10,
        fontWeight: 'bold',

    },
    titleContainer:{
        flex: 1,
    },
    categoryPriceContainer: {
        flexDirection: 'row',
    },
    releaseCopyrightContainer: {
        flexDirection: 'row',

    },
    category: {
        fontSize: scale * 7,
        marginLeft: width * 0.015,

    },
    categoryText: {
        fontSize: scale * 6,
        fontWeight: 'bold',
        marginLeft: width * 0.025,
    },
    releaseDate: {
        fontSize: scale * 7,
        marginLeft: width * 0.05,
    },
    releaseDateText: {
        fontSize: scale * 6,
        fontWeight: 'bold',
        marginLeft: width * 0.07,
    },
    price: {
        fontSize: scale * 7,
        marginLeft: width * 0.24,
    },
    priceText: {
        fontSize: scale * 6,
        marginLeft: width * 0.24,
        fontWeight: 'bold',

    },
    copyright: {
        fontSize: scale * 7,
        marginLeft: width * 0.19,
    },
    copyrightText: {
        fontSize: scale * 6,
        marginLeft: width * 0.19,
        fontWeight: 'bold',
    },
    copyrightContainer: {
        flex: 1,
    }
});

export {styles};