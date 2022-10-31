import { jsonConstant } from '../../constants/iTuneStore/json';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const { height, width, fontScale, scale } = Dimensions.get('window');
console.log(height);
console.log(width);
console.log(scale);
console.log(fontScale);
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: jsonConstant.headerBackgroundColor, 
    },
    headerText: {
        color: jsonConstant.headerTextColor,
        fontSize: scale * 12,
        fontWeight: 'bold',
        marginLeft: width * 0.08,
    },
    iconView: {
        paddingLeft: width * 0.02,
    },
    iconStyle: {
        height: height * 0.07,
        width: width * 0.09,
    },
});
export { styles };