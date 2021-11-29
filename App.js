import React from 'react'
import {  SafeAreaView, StyleSheet } from 'react-native'
import Home from './src/screens/Home'
import RootNavigator from './src/navigation/RootNavigator'

const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <RootNavigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1
  },
})

export default App
