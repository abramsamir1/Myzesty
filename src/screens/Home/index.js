import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import Card from '../../components/Card'
import restService from '../../apiCalls'
import { url } from '../../config/constants'
import styles from './styles'
import { themeColors } from '../../config/styleConstants'

const Home = () => {
    const [news, setNews] = useState()
    let newsVar
    useEffect(() => {
        getNews()
    }, [])

    const getNews = async () => {
        let res = await restService(url, 'GET')
        setNews(res.articles)
        newsVar = res
    }
    console.log('news', news)

    const renderList = () => {
        if (news) {
            return (
                <FlatList
                    data={news}
                    keyExtractor={index => index.toString()}
                    renderItem={({ item, index }) => {
                        return (
                            <Card item={item} />
                        )
                    }}
                    numColumns={2}
                />

            )
        }
        else {
            return (
               < ActivityIndicator color={themeColors.yellow} size="large" />
            )
        }
    }

    return (
        <View style={styles.viewParent}>
            {renderList()}
        </View>


    )
}
export default Home