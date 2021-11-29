import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { dimensionsCalculation } from '../../config/styleConstants'
import ImageWrapper, { ResizeModes } from '../common/ImageWrapper'
import styles from './styles'
import { useNavigation } from '@react-navigation/core'
import { locales } from '../../config/locales'

const Card = (props) => {
    const {
        item
    } = props
    const navigation = useNavigation()

    return (
        <Pressable
            style={({ pressed }) => [
                { opacity: pressed ? 0.5 : 1.0 }
            ]}
            onPress={() => navigation.navigate('Detailed', { item })}
        >
            <View style={styles.viewCard}>
                <ImageWrapper
                    source={{ uri: item.urlToImage }}
                    resizeMode={ResizeModes.cover}
                    styleImage={styles.imageStyle}
                    disabled
                />

                <View style={styles.viewInfo}>
                    <Text
                        style={[styles.titleStyle, { fontSize: dimensionsCalculation(13) }]}
                        numberOfLines={1}>{locales.by} {item.author ? item.author : locales.unkown}</Text>
                    <Text
                        style={styles.titleStyle}
                        numberOfLines={2}>{locales.source}</Text>
                    <Text
                        style={styles.titleStyle}
                        numberOfLines={2}>{item.source.name ? item.source.name : locales.unkown}</Text>
                </View>
            </View>
        </Pressable>
    )
}
export default Card