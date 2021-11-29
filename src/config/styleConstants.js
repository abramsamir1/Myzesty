import { Dimensions, Platform } from 'react-native'

export const OS = Platform.OS
export const isAndroid = OS === 'android'

export const themeColors = {
  black: '#171922',
  yellow: '#E4CC68',
  background: '#F4F4F4',
  red: '#E94D4D', 
  white: '#fff',
  darkGray: '#455A64', 
}

export const dimensions = {
  WIDTH: Dimensions.get('window').width,
  HEIGHT: Dimensions.get('window').height,
}

export const dimensionsCalculation = (IPhonePixel) => {
  return dimensions.WIDTH * IPhonePixel / 375
}

export const fontSizes = {
  normal: dimensionsCalculation(17),
  basic: dimensionsCalculation(15),
  smallBasic: dimensionsCalculation(isAndroid ? 11.65 : 12.2),
}

export default {
  OS,
  dimensions,
  fontSizes,
  themeColors
}