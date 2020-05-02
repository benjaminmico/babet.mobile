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
  {id: 0, label: '1 sem.', selected: true},
  {id: 1, label: '1 mois', selected: false},
  {id: 2, label: 'Début', selected: false},
]

const MainScreen = ({theme}) => {
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <Filters items={filters} multiFilters horizontal />
      <StatusBar barStyle={theme.statusBar} />
    </View>
  )
}

export default withTheme(MainScreen)
