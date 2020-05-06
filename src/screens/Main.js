import Generic from '@components/Stats/Generic'
import BalanceSheet from '@components/Stats/BalanceSheet'
import {withTheme} from '@core/themeProvider'
import React from 'react'
import {Dimensions, StatusBar, StyleSheet, View} from 'react-native'

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
const windowWidth = Dimensions.get('window').width

const MainScreen = ({theme}) => {
  return (
    <View style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <StatusBar barStyle={theme.statusBar} />
      <BalanceSheet value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />

      <View style={{flexDirection: 'row', width: windowWidth * 0.89, justifyContent: 'space-between', marginTop: 16}}>
        <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
        <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
      </View>
      <View style={{flexDirection: 'row', width: windowWidth * 0.89, justifyContent: 'space-between', marginTop: 16}}>
        <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
        <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
      </View>
    </View>
  )
}

export default withTheme(MainScreen)
