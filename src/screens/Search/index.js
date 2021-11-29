import React from 'react'
import { View, Text } from 'react-native'
import { locales } from '../../config/locales'

const Search = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>{locales.search}</Text>
        </View>
    )
}
export default Search