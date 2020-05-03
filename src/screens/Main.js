import AlertImage from '@components/Alerts/AlertImage'
import Button from '@components/Buttons/Button'
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
      <Button label="Supprimer" />
      <AlertImage
        imageLink="https://reactjs.org/logo-og.png"
        questionLabel="Es-tu sûr de vouloir supprimer la bankroll “Summer Bankroll” ?"
        cancellableButtonLabel="Annuler"
        cancellableButtonPress={() => console.log('cancel button')}
        actionButtonLabel="Supprimer"
        actionButtonPress={() => console.log('action button')}
      />
    </View>
  )
}

export default withTheme(MainScreen)
