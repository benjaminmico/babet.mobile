import BalanceSheet from '@components/Stats/BalanceSheet'
import {withTheme} from '@core/themeProvider'
import React from 'react'
import {StatusBar, StyleSheet, View} from 'react-native'

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

const MainScreen = ({theme}) => {
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar barStyle={theme.statusBar} />
      <BalanceSheet
        value={-303.02}
        description="Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊."
      />
    </View>
  )
}

export default withTheme(MainScreen)
