// @flow

import {getTickets} from '@api/graphql/queries/tickets'
import {useQuery} from '@apollo/react-hooks'
import {getUserStats} from '@api/graphql/queries/stats'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'
import Icon from '@components/Icon'
import TicketLite from '@components/Ticket/TicketLite'
import AnimatedCharts from '@components/AnimatedCharts'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import actions from '@store/actions'
import React, {useContext, useEffect, useState, useRef} from 'react'
import {useTranslation} from 'react-i18next'
import {Image, SectionList, FlatList, ScrollView, Dimensions, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {
  ProfileScreenContainer,
  ProfileScreenContentHeaderContainer,
  ProfileScreenHeaderContainer,
  ProfileScreenImageHeaderContainer,
  ProfileScreenTicketsContentContainer,
  ProfileScreenTicketsSectionTitle,
  ProfileScreenTitleDescription,
  ProfileScreenTitleHeader,
} from './index.styles'
import {getSectionsTickets} from './utils/getSectionsTickets'

type Props = {
  theme: Object,
}

const ProfileScreen = ({theme}: Props) => {
  const {
    auth: {nickname, description, token},
    tickets: {items: tickets},
    stats: {ticketsLength, averageOdd, averageStake, balanceSheet, shape},
  } = useSelector(state => state)

  const {data: dataStats, error: errorStats} = useQuery(getUserStats)

  // init sections
  const initSortedTicketsBySections = [
    {
      title: 'week',
      data: [],
    },
    {
      title: 'lastWeek',
      data: [],
    },
    {
      title: 'twoWeeksAgo',
      data: [],
    },
    {
      title: 'longTimeAgo',
      data: [],
    },
  ]

  const [sortedTicketsBySections, setSortedTicketsBySections] = useState(initSortedTicketsBySections)
  const [scrollXPos, setScrollXPos] = useState(0)
  const [scrollYPos, setScrollYPos] = useState(0)
  const [currentScrolledPosThreshold, setCurrentScrolledPosThreshold] = useState(Dimensions.get('window').width)
  const [scrollHeightContent, setScrollHeightContent] = useState(0)

  const {data: dataTickets, error: errorTickets, fetchMore} = useQuery(getTickets, {
    variables: {offset: 0, limit: 98},
  })

  const {show} = useContext(ToastContext)

  const {t} = useTranslation()

  const dispatch = useDispatch()

  const {setTicketsList, setStats} = actions

  /**
   * Load GraphQL user bankrolls and add it to local state when :
   * Bankrolls store are empty
   * Bankrolls queries are different than bankrolls store
   */
  useEffect(() => {
    if (dataStats?.stats && !ticketsLength && !averageOdd && !averageStake && !balanceSheet && !shape) {
      console.log('ok stats')
      dispatch(setStats(dataStats.stats))
    }
  }, [dataStats])

  /**
   * handle GraphQL query error tickets by displaying toast
   *
   * */
  useEffect(() => {
    if (errorTickets && token) {
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
        error: errorTickets,
      })
    }
  }, [errorTickets])

  /**
   * Load GraphQL user tickets and add it to local state when :
   * Tickets store are empty
   * Tickets queries are different than bankrolls store
   * On end flat list tickets is reached
   */
  useEffect(() => {
    if (dataTickets?.tickets && !tickets?.length) {
      dispatch(setTicketsList(dataTickets?.tickets))
    }
  }, [dataTickets])

  useEffect(() => {
    if (tickets.length > 0)
      setSortedTicketsBySections([
        {
          title: 'week',
          data: getSectionsTickets(tickets, 'week').sort((a, b) => {
            return b.updatedDate - a.updatedDate
          }),
        },
        {
          title: 'lastWeek',
          data: getSectionsTickets(tickets, 'lastWeek'),
        },
        {
          title: 'twoWeeksAgo',
          data: [],
        },
        {
          title: 'longTimeAgo',
          data: getSectionsTickets(tickets, 'longTimeAgo'),
        },
      ])
  }, [tickets?.length])

  /**
   * when sections list list is reaching end
   * use fetchMore functions from Apollo Client to refetch list based on offset
   * load new tickets items and add them on store
   * sections list is refreshing automatically right after dispatch on store
   */
  const isReachedEnd = async () => {
    try {
      await fetchMore({
        variables: {
          offset: tickets.length,
        },
        updateQuery: (prev, {fetchMoreResult}) => {
          if (fetchMoreResult.tickets) dispatch(setTicketsList(fetchMoreResult.tickets))
        },
      })
    } catch (e) {
      console.warn('error fetch more', e)
    }
  }

  const {
    backgroundColor,
    colors: {
      texts: {text: textColor, description: descriptionColor},
    },
  } = theme

  const {navigate} = useNavigation()

  /**
   * header component of sections list
   *  - profile header
   *  - stats
   * Handle as a Section header to improve scroll experience
   */

  // sections list key extractor
  function _itemKeyExtractor(item) {
    return item.id.toString()
  }

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
      scrollViewHorizontalRef.current?.scrollTo({
        x: currentScrolledPosThreshold,
      })
      setCurrentScrolledPosThreshold(currentScrolledPosThreshold + Dimensions.get('window').width)
    }

    if (scrollPos < currentScrolledPosThreshold - Dimensions.get('window').width) {
      scrollViewHorizontalRef.current?.scrollTo({
        x: scrollPos - Dimensions.get('window').width,
      })
      setCurrentScrolledPosThreshold(currentScrolledPosThreshold - Dimensions.get('window').width)
    }
  }

  const data = [
    {x: new Date('2018-08-01T00:00:00.000Z'), y: 441},
    {x: new Date('2018-08-02T00:00:00.000Z'), y: -10},
    {x: new Date('2018-08-02T00:00:00.000Z'), y: 514},
    {x: new Date('2018-08-04T00:00:00.000Z'), y: 146},
    {x: new Date('2018-08-04T00:00:00.000Z'), y: -8},
    {x: new Date('2018-08-06T00:00:00.000Z'), y: 146},
    {x: new Date('2018-08-06T00:00:00.000Z'), y: -8},
    {x: new Date('2018-08-08T00:00:00.000Z'), y: 294},
    {x: new Date('2018-08-09T00:00:00.000Z'), y: 225},
    {x: new Date('2018-08-10T00:00:00.000Z'), y: -8},
    {x: new Date('2018-08-12T00:00:00.000Z'), y: -8},
    {x: new Date('2018-08-12T00:00:00.000Z'), y: -8},
    {x: new Date('2018-08-13T00:00:00.000Z'), y: 900},
    {x: new Date('2018-08-14T00:00:00.000Z'), y: 117},
    {x: new Date('2018-09-21T00:00:00.000Z'), y: -40},
  ]

  console.log(
    'balanceSheet?.all?.value?.result',
    balanceSheet?.all?.value?.result.map(item => {
      return {x: new Date(item.x), y: item.y}
    }),
  )
  console.log('data', data)
  console.log(
    'result',
    balanceSheet?.all?.value?.cumulativeBalance.map(item => {
      return {x: new Date(item.x), y: item.y}
    }),
  )

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
          data={
            balanceSheet?.all?.value?.result.map(item => {
              return {x: new Date(item.x), y: item.y}
            }) || data
          }
          scrollX={scrollX}
          scrollXPos={scrollXPos}
          scrollYPos={scrollYPos}
          scrollHeightContent={scrollHeightContent}
          scrollWidthContent={scrollHeightContent}
        />
      </ScrollView>
      {/* <ScrollView ref={scrollViewRef} onScroll={handleScroll} scrollEventThrottle={16}>
        <View style={{height: 3000}}></View>
      </ScrollView> */}

      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{alignItems: 'center'}}
        data={tickets}
        ref={scrollViewRef}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        initialNumToRender={1}
        renderItem={({item, index}) => {
          const {updatedDate, bets, globalOdd, stake, total, status} = item
          return (
            <TicketLite
              index={index}
              key={`${updatedDate}`}
              updatedDate={updatedDate}
              bets={bets}
              stake={stake}
              globalOdd={globalOdd}
              total={total}
              status={status}
            />
          )
        }}
      />
    </ProfileScreenContainer>
  )
}

export default withTheme(ProfileScreen)
