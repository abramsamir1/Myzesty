import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import ImageWrapper, { ResizeModes } from '../../components/common/ImageWrapper'
import styles from './styles'
import {
    NativeBaseProvider,
    ChevronLeftIcon
} from 'native-base'
import { dimensions, themeColors } from '../../config/styleConstants'
import ShowMoreLess from '../../components/common/ShowMoreLess'
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { locales } from '../../config/locales'

const Detailed = ({ route, navigation }) => {
    const { item } = route.params

    console.log('item', item)

    const animation = useSharedValue(1)

    const animationStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scaleY: withTiming(animation.value, {
                        duration: 1000
                    }, () => {
                        animation.value = 1
                    })
                }
            ]
        }
    })

    return (
        <View style={styles.viewParent}>
            <ScrollView style={{ height: dimensions.HEIGHT }}>
                <NativeBaseProvider>
                    <ImageWrapper
                        source={{ uri: item.urlToImage }}
                        resizeMode={ResizeModes.cover}
                        styleImage={styles.imageStyle}
                        disabled
                    >
                        <ChevronLeftIcon
                            onPress={() => navigation.goBack()}
                            size="12"
                            style={{ color: themeColors.white }} />
                    </ImageWrapper>
                    <View style={styles.viewInfo}>
                        <Text style={styles.titleStyle}>{locales.desc}</Text>
                        <Text style={styles.descStyle}>{item.description}</Text>

                        <Text style={styles.titleStyle}>{locales.content}</Text>
                        <ShowMoreLess
                            content={item.content}
                        />
                    </View>
                </NativeBaseProvider>
                <View style={styles.viewAnimated}>
                    <Pressable
                        onPress={() => {
                            animation.value = 1.5
                        }}
                    >
                        <Animated.View style={[styles.btnStyle, animationStyle]}>
                            <Animated.Text>{locales.pressMe}</Animated.Text>
                            <Animated.Text>{item.title} </Animated.Text>
                        </Animated.View>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    )
}
export default Detailed