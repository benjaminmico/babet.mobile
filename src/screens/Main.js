import Generic from '@components/Stats/Generic'
import Comparisons from '@components/Stats/Comparisons'
import Graph from '@components/Stats/Graph'
import Ticket from '@components/Ticket'
import BalanceSheet from '@components/Stats/BalanceSheet'
import {withTheme} from '@core/themeProvider'
import React from 'react'
import {Dimensions, StatusBar, StyleSheet, ScrollView, View} from 'react-native'

const style = StyleSheet.create({
  container: {
    flex: 1,
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
const comparisonsItems = [
  {value: -321.24, label: '⚽️ 🇫🇷 Ligue 1 '},
  {value: 321, label: '⚽️ 🇫🇷 Ligue 1 '},
  {value: 321, label: '⚽️ 🇫🇷 Ligue 1 '},
]
// const graphItems = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
const graphItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]

const MainScreen = ({theme}) => {
  return (
    <ScrollView style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={{marginTop: 159, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar barStyle={theme.statusBar} />
        <BalanceSheet value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />

        <View style={{flexDirection: 'row', width: windowWidth * 0.89, justifyContent: 'space-between', marginTop: 16}}>
          <Generic
            value={3.43}
            description="T’es sur une série folle ! 7/7 ! truc de malade !"
            history={['won', 'lost', 'won', 'won', 'lost', 'won']}
          />
          <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
        </View>
        <View style={{flexDirection: 'row', width: windowWidth * 0.89, justifyContent: 'space-between', marginTop: 16}}>
          <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
          <Generic value={3.43} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
        </View>
        <View style={{marginTop: 16}}>
          <Graph
            label="Ma courbe de gains"
            items={graphItems}
            description="Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊."
          />
        </View>
        <View style={{marginTop: 16}}>
          <Comparisons
            label="Mbappé, Victoire de Bordeaux, OM ou Nul…grâce à la Ligue 1, tu as encaissé 321€ 💪 !"
            items={comparisonsItems}
          />
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
    </ScrollView>
  )
}

export default withTheme(MainScreen)
