import React, { useState, useCallback } from 'react'
import { View, Text } from 'react-native'
import { styles } from './styles'
import { locales } from '../../../config/locales'

const ShowMoreLess = (props) => {
  console.log('props.content', props.content)
  const [textShown, setTextShown] = useState(false) //To show ur remaining Text
  const [lengthMore, setLengthMore] = useState(false) //to show the "Read more & Less Line"
  const toggleNumberOfLines = () => { //To toggle the show text or hide it
    setTextShown(!textShown)
  }

  const onTextLayout = useCallback(e => {
    setLengthMore(e.nativeEvent.lines.length >= 4) //to check the text is more than 4 lines or not
  }, [])

  return (
    <View style={styles.viewShowMoreLess}>
      <Text
        onTextLayout={onTextLayout}
        numberOfLines={textShown ? undefined : 4}
        style={styles.textDesc}>{props.content}</Text>

      {
        lengthMore ? <Text
          onPress={toggleNumberOfLines}
          style={styles.textShowMoreLess}>{textShown ? locales.readLess : locales.readMore}</Text>
          : null
      }
    </View>
  )
}

export default ShowMoreLess