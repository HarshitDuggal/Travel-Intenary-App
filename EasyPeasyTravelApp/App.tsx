import { View } from 'react-native'
import React from 'react'
import AppNavigation from './App/Navigation/appNavigation'
import { Provider } from 'react-redux'
import store from './App/Redux/store'

const App = () => {
  return (
    <Provider store={store}>
    <View style={{flex:1}}>
      <AppNavigation/>
    </View>
    </Provider>
  )
}

export default App