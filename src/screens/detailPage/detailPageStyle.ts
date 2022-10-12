import { StyleSheet } from 'react-native';
import { jsonConstant } from '../../constants/iTuneStore/json';

const styles = StyleSheet.create({

    imageStyle: {
        width: 100,
        height: 100,
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
        padding: 10,
        margin: 10,
    },
    imageTextContainer: {
        flexDirection: 'row'
    },
    appName: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 10,
    },
    artist: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 10,
    },
    textArtistContainer: {
        margin: 10,
        flex: 1,
    },
    title: {
        fontSize: 18,
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
        fontSize: 20,
        marginLeft: 4,

    },
    categoryText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 24,
    },
    releaseDate: {
        fontSize: 20,
        marginLeft: 16,
    },
    releaseDateText: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 24,
    },
    price: {
        fontSize: 20,
        marginLeft: 18,
    },
    priceText: {
        fontSize: 16,
        marginLeft: 30,
        fontWeight: 'bold',

    },
    copyright: {
        fontSize: 20,
        marginLeft: 18,
    },
    copyrightText: {
        fontSize: 16,
        marginLeft: 30,
        fontWeight: 'bold',
    },
    copyrightContainer: {
        flex: 1,
    }
});

export {styles};