import { StyleSheet } from 'react-native'
import {
    themeColors,
    dimensionsCalculation,
    fontSizes,
    dimensions
} from '../../config/styleConstants'

export default styles = StyleSheet.create({
    viewCard: {
        // flex: 1,
        margin: dimensionsCalculation(14),
        backgroundColor: themeColors.white,
        width: dimensions.WIDTH * 0.4,
        borderRadius: 10,
        // elevation: 100,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageStyle: {
        backgroundColor: themeColors.darkGray,
        borderRadius: 10,
        height: dimensions.HEIGHT * 0.15,
        width: dimensions.WIDTH * 0.4
    },
    titleStyle: {
        fontSize: fontSizes.smallBasic,
        color: themeColors.black,
        paddingTop: dimensionsCalculation(4)
    },
    viewInfo: {
        padding: dimensionsCalculation(6)
    }
})