import React from 'react'
import { SafeAreaView } from 'react-native'
import {
    NativeBaseProvider,
    HamburgerIcon,
    SearchIcon
} from 'native-base'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { dimensionsCalculation, themeColors, dimensions, fontSizes } from '../config/styleConstants'
import Home from '../screens/Home'
import Detailed from '../screens/Detailed'
import Search from '../screens/Search'
import { locales } from '../config/locales'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                gestureEnabled: true,
                headerShown: false,
                gestureDirection: 'horizontal',
            }}
        >
            <Stack.Screen name="Detailed" component={Detailed} />
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    )
}


export default RootNavigator = (navigation) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.white }}>
            <NavigationContainer>
                <NativeBaseProvider>
                    <Tab.Navigator
                        initialRouteName={locales.home}
                        tabBarOptions={{
                            style: { paddingBottom: 0, height: dimensions.HEIGHT * 0.08 },
                            keyboardHidesTabBar: true,
                            tabStyle: { padding: dimensionsCalculation(7) },
                            labelStyle: { fontSize: fontSizes.small, paddingBottom: dimensionsCalculation(2) },
                            labelPosition: 'below-icon',
                            activeTintColor: themeColors.yellow,
                            inactiveTintColor: themeColors.darkGray,
                            indicatorStyle: { backgroundColor: 'transparent', },
                        }}
                    >
                        <Tab.Screen
                            name={locales.home}
                            component={HomeStack}
                            options={{
                                tabBarLabel: locales.home,
                                tabBarIcon: ({ color, size }) => (
                                    <HamburgerIcon
                                        size="5"
                                        style={{ color }} />
                                ),
                            }}
                        />
                        <Tab.Screen
                            name={locales.search}
                            component={Search}
                            options={{
                                tabBarLabel: locales.search,
                                tabBarIcon: ({ color, size }) => (
                                    <SearchIcon
                                        size="5"
                                        style={{ color }} />
                                ),
                            }}
                        />
                    </Tab.Navigator>
                </NativeBaseProvider>
            </NavigationContainer>
        </SafeAreaView>
    )
}