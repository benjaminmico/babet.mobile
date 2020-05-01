import React from 'react'
import {View, StatusBar, StyleSheet} from 'react-native'

import {withTheme} from '@core/themeProvider'
import Filters from '@components/Filters'

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontWeight: 'bold',
  },
})

const filters = [
  {label: '1 sem.', selected: true},
  {label: '1 mois', selected: false},
  {label: 'Début', selected: false},
]

const MainScreen = ({theme}) => {
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <Filters items={filters} />
      <StatusBar barStyle={theme.statusBar} />
    </View>
  )
}

export default withTheme(MainScreen)
