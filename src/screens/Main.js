import Generic from '@components/Stats/Generic'
import SocialButton from '@components/Buttons/SocialButton'
import Comparisons from '@components/Stats/Comparisons'
import Graph from '@components/Stats/Graph'
import Ticket from '@components/Ticket'
import BalanceSheet from '@components/Stats/BalanceSheet'
import {withTheme} from '@core/themeProvider'
import React, {useState, useEffect} from 'react'
import {Dimensions, StatusBar, StyleSheet, ScrollView, View} from 'react-native'
import {useDispatch} from 'react-redux'
import actions from '@store/actions'
import {loginToFirebase} from '@api/auth/login'
import {useQuery} from '@apollo/react-hooks'
import {getUserInformations} from '@api/graphql/queries/user'

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
  },
})

const MainScreen = ({theme}) => {
  const [isConnected, setConnected] = useState(false)
  const dispatch = useDispatch()

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
    {value: 319, label: '⚽️ 🇫🇷 Ligue 1 '},
    {value: 318, label: '⚽️ 🇫🇷 Ligue 1 '},
  ]
  const graphItems = [
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
    50,
    10,
    40,
    95,
    -4,
    -24,
    85,
    91,
    35,
    53,
    -53,
    24,
    50,
    -20,
    -80,
  ]
  // const graphItems = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]

  const {data} = useQuery(getUserInformations)

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const userInformations = await loginToFirebase('dev+test@babet.app', 'ewG3yp8eK7A7Lt4H8bcMRMNx3yk72WkzK8rLyM')
      const {login} = actions

      if (userInformations) {
        setConnected(true)
        if (data?.user) {
          const {firstname, lastname} = data.user
          dispatch(login({...userInformations, firstname, lastname}))
        } else {
          dispatch(login(userInformations))
        }
      }
    }
    fetchData()
  }, [isConnected])

  return (
    <ScrollView style={[style.container, {backgroundColor: theme.backgroundColor}]}>
      <View style={{marginTop: 159, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar barStyle={theme.statusBar} />
        <SocialButton isPrimaryAction type="facebook" />
        <SocialButton isPrimaryAction type="apple" />
        <SocialButton isPrimaryAction type="gmail" />

        <BalanceSheet value={405.93} description="T’es sur une série folle ! 7/7 ! truc de malade !" />

        <View style={{flexDirection: 'row', width: windowWidth * 0.89, justifyContent: 'space-between', marginTop: 16}}>
          <Generic
            label="Ma forme"
            value={7}
            description="T’es sur une série folle ! 7/7 ! truc de malade !"
            history={['won', 'won', 'won', 'won', 'won', 'won', 'won']}
            type="ratio"
          />
          <Generic
            label="Côte moyenne"
            value={3.43}
            KPIDescription="En augmentation"
            description="Depuis plusieurs tu joues des côtes elevés ! 💪"
            type="odd"
          />
        </View>
        <View style={{flexDirection: 'row', width: windowWidth * 0.89, justifyContent: 'space-between', marginTop: 16}}>
          <Generic
            label="Ma progression"
            value={-28.9}
            KPIDescription="En 7 jours"
            description="T’es sur une série folle ! 7/7 ! truc de malade !"
            type="percentage"
          />
          <Generic
            label="Mise moyenne"
            value={25.98}
            KPIDescription="C'est raisonnable"
            description="T’es sur une série folle ! 7/7 ! truc de malade !"
            type="currency"
          />
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
