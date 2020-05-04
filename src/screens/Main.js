import InputButton from '@components/Buttons/InputButton'
import HeaderTitle from '@components/Navigation/Headers/HeaderTitle'
import {withTheme} from '@core/themeProvider'
import React from 'react'
import {StatusBar, StyleSheet, View} from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
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
      <HeaderTitle goBack title="S'inscrire" />
      <InputButton label="Se connecter" onPress={() => console.log('ok')} />
    </View>
  )
}

export default withTheme(MainScreen)
