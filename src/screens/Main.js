import Generic from '@components/Stats/Generic'
import Ticket from '@components/Ticket'
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

const updatedDate = 1588707873

const stake = 15

const globalOdd = 9.8

const total = 147

const status = 'lost'

const footballBetItem = {
  sport: 'football',
  localTeam: 'Marseille',
  visitorTeam: 'Paris SG',
  nameTicket: 'Victoire ou nul de Marseille',
  odd: 1.3,
  status: 'pending',
}

const tennisBetItem = {
  sport: 'tennis',
  localTeam: 'Federer',
  visitorTeam: 'Nadal',
  nameTicket: 'Victoire de Federer',
  odd: 1.3,
  status: 'pending',
}

const rugbyBetItem = {
  sport: 'rugby',
  localTeam: 'Stade Toulousain',
  visitorTeam: 'RC Toulon',
  nameTicket: 'Victoire de Stade Toulousain',
  odd: 1.3,
  status: 'won',
}

const bets = [footballBetItem, tennisBetItem, rugbyBetItem]

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
      <View style={{marginTop: 16}}>
        <Ticket
          updatedDate={updatedDate}
          bets={bets}
          stake={stake}
          globalOdd={globalOdd}
          total={total}
          status={status}
        />
      </View>
    </View>
  )
}

export default withTheme(MainScreen)
