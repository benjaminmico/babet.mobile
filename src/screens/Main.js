import Game from '@components/Game'
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
      <View style={{width: 335, height: 493, backgroundColor: '#2F3134', paddingLeft: 11}}>
        <Game
          sport="football"
          localTeam="Marseille"
          visitorTeam="Paris SG"
          name="Victoire ou nul de Marseille"
          odd={1.3}
          status="pending"
        />
        <Game
          sport="tennis"
          localTeam="Federer"
          visitorTeam="Nadal"
          name="Victoire de Federer"
          odd={1.3}
          status="won"
        />
        <Game
          sport="football"
          localTeam="Marseille"
          visitorTeam="Paris SG"
          name="Victoire de Marseille"
          odd={1.3}
          status="pending"
        />
        <Game
          sport="football"
          localTeam="Marseille"
          visitorTeam="Paris SG"
          name="Victoire de Marseille"
          odd={1.3}
          status="pending"
        />
        <Game
          sport="football"
          localTeam="Marseille"
          visitorTeam="Paris SG"
          name="Victoire de Marseille"
          odd={1.3}
          status="pending"
        />
      </View>
    </View>
  )
}

export default withTheme(MainScreen)
