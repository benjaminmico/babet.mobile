import ListItem from '@components/Lists/ListItem'
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
      <ListItem
        label="Mes bankrolls"
        leftActionIcon="informations"
        rightActionIcon="bankroll"
        onLeftAction={() => console.log('onLeft')}
        onRightAction={() => console.log('onRight')}
      />
      <ListItem label="Mes informations" icon="informations" />
    </View>
  )
}

export default withTheme(MainScreen)
