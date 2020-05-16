// @flow

import Button from '@components/Buttons/Button'
import Icon from '@components/Icon'
import BalanceSheet from '@components/Stats/BalanceSheet'
import Comparisons from '@components/Stats/Comparisons'
import Generic from '@components/Stats/Generic'
import Graph from '@components/Stats/Graph'
import Ticket from '@components/Ticket'
import {withTheme} from '@core/themeProvider'
import React, {useState} from 'react'
import {Image} from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {
  ProfileScreenContainer,
  ProfileScreenContentContainer,
  ProfileScreenContentHeaderContainer,
  ProfileScreenHeaderContainer,
  ProfileScreenImageHeaderContainer,
  ProfileScreenKPIContainer,
  ProfileScreenTicketsContentContainer,
  ProfileScreenTicketsHeaderContainer,
  ProfileScreenTicketsHeaderText,
  ProfileScreenTicketsIndicatorContainer,
  ProfileScreenTicketsIndicatorText,
  ProfileScreenTitleDescription,
  ProfileScreenTitleHeader,
} from './index.styles'

type Props = {
  theme: Object,
}

const ProfileScreen = ({theme}: Props) => {
  // get theme props
  const {
    backgroundColor,
    colors: {
      components: {backgroundAction: backgroundIndicatorColor},
      texts: {
        text: textColor,
        description: descriptionColor,
        buttons: {filter: ticketIndicatorColor},
      },
    },
  } = theme

  const [more, setMore] = useState(false)

  const {navigate} = useNavigation()

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

  return (
    <ProfileScreenContainer backgroundColor={backgroundColor}>
      <ProfileScreenContentContainer showsVerticalScrollIndicator={false}>
        <ProfileScreenHeaderContainer>
          <ProfileScreenImageHeaderContainer>
            <Image
              style={{width: 63, height: 63, borderRadius: 31.5}}
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </ProfileScreenImageHeaderContainer>
          <ProfileScreenContentHeaderContainer>
            <ProfileScreenTitleHeader color={textColor}>@leparieur</ProfileScreenTitleHeader>
            <ProfileScreenTitleDescription color={descriptionColor}>
              28 ans, Paris , Le meilleur parieur et de loin !
            </ProfileScreenTitleDescription>
          </ProfileScreenContentHeaderContainer>
          <Icon
            style={{position: 'absolute', top: 0, right: 5}}
            size={18}
            label="settings"
            onPress={() => navigate('SettingsScreen')}
          />
        </ProfileScreenHeaderContainer>
        <ProfileScreenKPIContainer style={{marginTop: 31}}>
          <BalanceSheet value={405.93} description="T’es sur une série folle ! 7/7 ! truc de malade !" />
        </ProfileScreenKPIContainer>
        {more && (
          <>
            <ProfileScreenKPIContainer>
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
            </ProfileScreenKPIContainer>
            <ProfileScreenKPIContainer>
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
            </ProfileScreenKPIContainer>

            <ProfileScreenKPIContainer>
              <Graph
                label="Ma courbe de gains"
                items={graphItems}
                description="Depuis une semaine, tu as gagné 405,93€ grâce aux paris sportifs 😊."
              />
            </ProfileScreenKPIContainer>
            <ProfileScreenKPIContainer>
              <Comparisons
                label="Mbappé, Victoire de Bordeaux, OM ou Nul…grâce à la Ligue 1, tu as encaissé 321€ 💪 !"
                items={comparisonsItems}
              />
            </ProfileScreenKPIContainer>
          </>
        )}

        <Button
          style={{width: 146, alignSelf: 'center', marginTop: 20}}
          label="voir moins de stats"
          onPress={() => setMore(!more)}
        />
        <ProfileScreenTicketsHeaderContainer>
          <ProfileScreenTicketsHeaderText color={textColor}>Mes tickets</ProfileScreenTicketsHeaderText>
          <ProfileScreenTicketsIndicatorContainer backgroundColor={backgroundIndicatorColor}>
            <ProfileScreenTicketsIndicatorText color={ticketIndicatorColor}>17</ProfileScreenTicketsIndicatorText>
          </ProfileScreenTicketsIndicatorContainer>
        </ProfileScreenTicketsHeaderContainer>
        <ProfileScreenTicketsContentContainer>
          {[1, 1, 1, 1, 1, 1, 1].map((item, index) => {
            return (
              <Ticket
                // eslint-disable-next-line react/no-array-index-key
                key={total + index}
                updatedDate={updatedDate}
                bets={bets}
                stake={stake}
                globalOdd={globalOdd}
                total={total}
                status={status}
              />
            )
          })}
        </ProfileScreenTicketsContentContainer>
      </ProfileScreenContentContainer>
    </ProfileScreenContainer>
  )
}

export default withTheme(ProfileScreen)
