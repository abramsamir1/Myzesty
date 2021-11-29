import { StyleSheet } from 'react-native'
import {
    themeColors,
    dimensionsCalculation,
    fontSizes,
    dimensions
} from '../../config/styleConstants'

export default styles = StyleSheet.create({
    viewParent: {

        backgroundColor: themeColors.background,
    },
    imageStyle: {
        backgroundColor: themeColors.darkGray,
        height: dimensions.HEIGHT * 0.3,
        padding: dimensionsCalculation(6),
    },
    viewInfo: {
        padding: dimensionsCalculation(14)
    },
    authorStyle: {
        fontSize: fontSizes.basic,
        color: themeColors.black
    },
    titleStyle: {
        fontSize: fontSizes.normal,
        color: themeColors.black,
        fontWeight: 'bold',
        paddingTop: dimensionsCalculation(10)
    },
    descStyle: {
        fontSize: fontSizes.basic,
        color: themeColors.black,
        paddingTop: dimensionsCalculation(5)
    },
    btnStyle: {
        backgroundColor: themeColors.white,
        padding: dimensionsCalculation(10),
        borderWidth: 1,
        borderColor: themeColors.darkGray
    },
    viewAnimated: {
        margin: dimensionsCalculation(14)
    }

})