import AlertInput from '@components/Alerts/AlertInput'
import Button from '@components/Buttons/Button'
import Input from '@components/Input'
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
      <AlertInput
        questionLabel="Es-tu sûr de vouloir supprimer la bankroll “Summer Bankroll” ?"
        cancellableButtonLabel="Annuler"
        cancellableButtonPress={() => console.log('cancel button')}
        actionButtonLabel="Supprimer"
        actionButtonPress={() => console.log('action button')}
      >
        <Input inputLabel="aaaaa" editable={false} />
      </AlertInput>
    </View>
  )
}

export default withTheme(MainScreen)
