import { StyleSheet } from 'react-native'
import {
    themeColors,
    dimensionsCalculation,
    fontSizes,
    dimensions
} from '../../config/styleConstants'

export default styles = StyleSheet.create({
    viewParent: {
        flex: 1,
        // padding: dimensionsCalculation(14),
        backgroundColor: themeColors.background,
        justifyContent: 'center',
        alignItems: 'center'
    }
})