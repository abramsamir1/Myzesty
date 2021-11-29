import { StyleSheet } from 'react-native'
import { dimensionsCalculation, fontSizes, themeColors } from '../../../config/styleConstants'

export const styles = StyleSheet.create({
  textDesc: {
    fontSize: fontSizes.basic,
    color: themeColors.black,
    lineHeight: dimensionsCalculation(21)
  },
  textShowMoreLess: {
    fontSize: fontSizes.smallBasic,
    color: themeColors.blue,
    lineHeight: dimensionsCalculation(21),
    marginTop: dimensionsCalculation(4)
  },
})