import React, { useState } from 'react'
import { TouchableOpacity, ViewPropTypes } from 'react-native'
import PropTypes from 'prop-types'
import FastImage from 'react-native-fast-image'

const ImageWrapper = (props) => {
  const [errorState, setErrorState] = useState(false)
  const {
    styleContainer,
    styleImage,
    onPress,
    disabled,
    source,
    resizeMode,
    defaultImageProp, //the default image will be displayed if the source URI didn't load successfully
    key,
    children
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={styleContainer}
    >
      <FastImage
        key={key}
        source={errorState ? defaultImageProp : source}
        style={styleImage}
        resizeMode={resizeMode}
        onError={() => setErrorState(true)}
      >
        {children}
      </FastImage>
    </TouchableOpacity>
  )
}

ImageWrapper.propTypes = {
  styleContainer: ViewPropTypes.style,
  styleImage: ViewPropTypes.style,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  // source: PropTypes.string,
  defaultImageProp: PropTypes.string,
  resizeMode: PropTypes.string
}

export const ResizeModes = {
  cover: FastImage.resizeMode.cover,
  contain: FastImage.resizeMode.contain,
  stretch: FastImage.resizeMode.stretch,
}

export const Priorities = {
  high: FastImage.priority.high,
  normal: FastImage.priority.normal,
  low: FastImage.priority.low,
}

export default ImageWrapper