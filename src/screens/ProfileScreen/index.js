// @flow

import {getBankrolls} from '@api/graphql/queries/bankrolls'
import {getUserStats} from '@api/graphql/queries/stats'
import {getTickets} from '@api/graphql/queries/tickets'
import {useQuery} from '@apollo/react-hooks'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'
import Button from '@components/Buttons/Button'
import Filters from '@components/Filters'
import Icon from '@components/Icon'
import BalanceSheet from '@components/Stats/BalanceSheet'
import Comparisons from '@components/Stats/Comparisons'
import Generic from '@components/Stats/Generic'
import Graph from '@components/Stats/Graph'
import Ticket from '@components/Ticket'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import actions from '@store/actions'
import React, {useContext, useEffect, useState, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {Dimensions, Image, SectionList, ScrollView, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getSectionsTickets} from './utils/getSectionsTickets'
import {getBalanceSheet, getResult, getShape} from './utils/getStats'
import AnimatedCharts from '@components/AnimatedCharts'
import {
  ProfileScreenContainer,
  ProfileScreenContentHeaderContainer,
  ProfileScreenHeaderContainer,
  ProfileScreenImageHeaderContainer,
  ProfileScreenKPIContainer,
  ProfileScreenTicketsContentContainer,
  ProfileScreenTicketsHeaderContainer,
  ProfileScreenTicketsHeaderText,
  ProfileScreenTicketsIndicatorContainer,
  ProfileScreenTicketsIndicatorText,
  ProfileScreenTicketsSectionTitle,
  ProfileScreenTitleDescription,
  ProfileScreenTitleHeader,
} from './index.styles'

type Props = {
  theme: Object,
}

const ProfileScreen = ({theme}: Props) => {
  const {
    auth: {nickname, description, token},
    bankrolls: {items: bankrolls},
    tickets: {items: tickets},
    stats: {ticketsLength, averageOdd, averageStake, balanceSheet, shape},
  } = useSelector(state => state)

  // const {data: dataStats, error: errorStats} = useQuery(getUserStats)

  const {navigate} = useNavigation()

  const dispatch = useDispatch()

  const [scrollXPos, setScrollXPos] = useState(0)
  const [scrollYPos, setScrollYPos] = useState(0)
  const [currentScrolledPosThreshold, setCurrentScrolledPosThreshold] = useState(Dimensions.get('window').width)
  const [scrollHeightContent, setScrollHeightContent] = useState(0)

  const {setStats} = actions

  // /**
  //  * Load GraphQL user bankrolls and add it to local state when :
  //  * Bankrolls store are empty
  //  * Bankrolls queries are different than bankrolls store
  //  */
  // useEffect(() => {
  //   if (dataStats?.stats && !ticketsLength && !averageOdd && !averageStake && !balanceSheet && !shape)
  //     dispatch(setStats(dataStats.stats))
  // }, [dataStats])

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

  const scrollViewRef = useRef()
  const scrollViewHorizontalRef = useRef()

  const handleScroll = event => {
    setScrollYPos(event.nativeEvent.contentOffset.y)
    setScrollHeightContent(event.nativeEvent.contentSize.height - event.nativeEvent.layoutMeasurement.height)
  }
  const handleHorizontalScroll = event => {
    setScrollXPos(event.nativeEvent.contentOffset.x)
  }

  const scrollX = scrollPos => {
    if (scrollPos > currentScrolledPosThreshold) {
      scrollViewHorizontalRef.current?.scrollTo({x: currentScrolledPosThreshold, y: 0})
      setCurrentScrolledPosThreshold(currentScrolledPosThreshold + Dimensions.get('window').width)
    }

    if (scrollPos < currentScrolledPosThreshold - Dimensions.get('window').width) {
      scrollViewHorizontalRef.current?.scrollTo({x: scrollPos - Dimensions.get('window').width, y: 0})
      setCurrentScrolledPosThreshold(currentScrolledPosThreshold - Dimensions.get('window').width)
    }
  }

  const data = [
    {x: new Date(2018, 8, 1), y: 0},
    {x: new Date(2018, 8, 2), y: 50},
    {x: new Date(2018, 8, 3), y: 100},
    {x: new Date(2018, 8, 4), y: 150},
    {x: new Date(2018, 8, 8), y: 200},
    {x: new Date(2018, 9, 1), y: 0},
    {x: new Date(2018, 9, 2), y: 50},
    {x: new Date(2018, 9, 3), y: 100},
    {x: new Date(2018, 9, 4), y: 150},
    {x: new Date(2018, 9, 8), y: 200},
    {x: new Date(2018, 9, 18), y: 100},
    {x: new Date(2018, 9, 19), y: 100},
    {x: new Date(2018, 9, 20), y: 300},
    {x: new Date(2018, 9, 21), y: 200},
    {x: new Date(2018, 10, 1), y: 200},
    {x: new Date(2018, 10, 2), y: 300},
  ]

  return (
    <ProfileScreenContainer backgroundColor={backgroundColor}>
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
          <ProfileScreenTitleHeader color={textColor}>{nickname}</ProfileScreenTitleHeader>
          <ProfileScreenTitleDescription color={descriptionColor}>{description}</ProfileScreenTitleDescription>
        </ProfileScreenContentHeaderContainer>
        <Icon
          style={{position: 'absolute', top: 0, right: 5}}
          size={18}
          label="settings"
          onPress={() => navigate('SettingsScreen')}
        />
      </ProfileScreenHeaderContainer>
      <ScrollView
        horizontal
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        ref={scrollViewHorizontalRef}
        onScroll={handleHorizontalScroll}
        scrollEventThrottle={16}
      >
        <AnimatedCharts
          data={data}
          scrollX={scrollX}
          scrollXPos={scrollXPos}
          scrollYPos={scrollYPos}
          scrollHeightContent={scrollHeightContent}
        />
      </ScrollView>
      <ScrollView
        showsVerticalScrollIndicator={true}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={{height: 3000}}></View>
      </ScrollView>
    </ProfileScreenContainer>
  )
}

export default withTheme(ProfileScreen)
