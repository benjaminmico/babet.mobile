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
import React, {useContext, useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {Image, SectionList} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {getSectionsTickets} from './utils/getSectionsTickets'
import {getBalanceSheet, getResult, getShape} from './utils/getStats'
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
    tickets: {items: tickets, count, currentPage: storeCurrentPage, totalPages: storeTotalPages},
    stats: {averageOdd, averageStake, balanceSheet, shape},
  } = useSelector(state => state)

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

  const [currentPage, setCurrentPage] = useState(1)
  const [sortedTicketsBySections, setSortedTicketsBySections] = useState(initSortedTicketsBySections)
  const [onEndReachedCalledDuringMomentum, setOnEndReachedCalledDuringMomentum] = useState(false)
  const [balanceSheetRange, setBalanceSheetRange] = useState('week')
  const [resultRange, setResultRange] = useState('week')

  const {data: dataBankrolls, error: errorBankrolls} = useQuery(getBankrolls)
  const {data: dataStats, error: errorStats} = useQuery(getUserStats)
  const {data: dataTickets, error: errorTickets, fetchMore} = useQuery(getTickets, {
    variables: {page: storeCurrentPage === 1 ? 1 : storeCurrentPage + 1},
  })

  const {show} = useContext(ToastContext)

  const {t} = useTranslation()

  const dispatch = useDispatch()

  const {setBankrollsList, setCurrentBankroll, setStats, setTicketsList} = actions

  console.log('stats', dataStats)

  /**
   * Load GraphQL user bankrolls and add it to local state when :
   * Bankrolls store are empty
   * Bankrolls queries are different than bankrolls store
   */
  useEffect(() => {
    if (dataBankrolls?.bankrolls && !bankrolls?.length && dataBankrolls?.bankrolls !== bankrolls)
      dispatch(setBankrollsList(dataBankrolls.bankrolls))
  }, [dataBankrolls])

  /**
   * handle GraphQL query error bankrolls by displaying toast
   *
   * */
  useEffect(() => {
    if (errorBankrolls && token) {
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }, [errorBankrolls])

  /**
   * Load GraphQL user bankrolls and add it to local state when :
   * Bankrolls store are empty
   * Bankrolls queries are different than bankrolls store
   */
  useEffect(() => {
    if (dataStats?.stats && !averageOdd && !averageStake && !balanceSheet && !shape) dispatch(setStats(dataStats.stats))
  }, [dataStats])

  /**
   * handle GraphQL query error stats by displaying toast
   *
   * */
  useEffect(() => {
    if (errorStats && token) {
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }, [errorStats])

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
      })
    }
  }, [errorTickets])

  /**
   * when sections list list is reaching end
   * use fetchMore functions from Apollo Client to refetch list based on new current page
   * load new tickets items and add them on store
   * sections list is refreshing automatically right after dispatch on store
   * @param {*} page variable page to update on GraphQL query
   */
  const isReachedEnd = page => {
    fetchMore({
      variables: {
        page,
      },
      updateQuery: (prev, {fetchMoreResult}) => {
        if (fetchMoreResult.tickets) dispatch(setTicketsList(fetchMoreResult.tickets))
      },
    })
  }

  /**
   * Load GraphQL user tickets and add it to local state when :
   * Tickets store are empty
   * Tickets queries are different than bankrolls store
   * On end flat list tickets is reached
   */
  useEffect(() => {
    if (dataTickets?.tickets && !tickets?.length && dataTickets?.tickets.currentPage !== storeCurrentPage) {
      dispatch(setTicketsList(dataTickets?.tickets))
    }
  }, [dataTickets])

  useEffect(() => {
    if (tickets.length > 0)
      setSortedTicketsBySections([
        {
          title: 'week',
          data: getSectionsTickets(tickets, 'week'),
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

  // const getSections = () => {
  //   let sortedTicketsBySectionsToUpdate = sortedTicketsBySections
  //   tickets.forEach(ticket => {
  //     if (tickets.updatedDate < moment())

  //   })
  // }

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

  const comparisonsItems = [
    {value: -321.24, label: '⚽️ 🇫🇷 Ligue 1 '},
    {value: 319, label: '⚽️ 🇫🇷 Ligue 1 '},
    {value: 318, label: '⚽️ 🇫🇷 Ligue 1 '},
  ]

  /**
   * add current bankroll on store and filter stats && sections list only with bankroll tickets
   * stats filtering are handled on back-end
   */
  const onPressBankrollItem = id => {
    dispatch(setCurrentBankroll(bankrolls.find(bankroll => bankroll.id === id)))
    // dispatch(setCurrentBankroll(bankrolls[index]))
  }

  /**
   * toggle balance sheet filters and display the right value between 'week', 'month' & 'all
   */
  const onPressBalanceSheetRange = id => {
    setBalanceSheetRange(id)
  }

  /**
   * toggle result filters and display the right value between 'week', 'month' & 'all
   */
  const onPressResultRange = id => {
    setResultRange(id)
  }

  /**
   * header component of sections list
   *  - profile header
   *  - stats
   * Handle as a Section header to improve scroll experience
   */
  const headerComponent = () => {
    return (
      <>
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
        {bankrolls?.length > 0 && (
          <Filters style={{marginTop: 31}} items={bankrolls} onPress={onPressBankrollItem} horizontal />
        )}
        <ProfileScreenKPIContainer style={{marginTop: 31}}>
          <BalanceSheet
            value={getBalanceSheet(balanceSheet, balanceSheetRange) || 0}
            selected={balanceSheetRange}
            onPress={onPressBalanceSheetRange}
            description="T’es sur une série folle ! 7/7 ! truc de malade !"
          />
        </ProfileScreenKPIContainer>
        {more && (
          <>
            <ProfileScreenKPIContainer>
              <Generic
                label="Ma forme"
                value={getShape(shape, 'week').value}
                description="T’es sur une série folle ! 7/7 ! truc de malade !"
                history={getShape(shape, 'week').array}
                type="ratio"
              />
              <Generic
                label="Côte moyenne"
                value={averageOdd?.value}
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
                value={averageStake?.value}
                KPIDescription="C'est raisonnable"
                description="T’es sur une série folle ! 7/7 ! truc de malade !"
                type="currency"
              />
            </ProfileScreenKPIContainer>

            <ProfileScreenKPIContainer>
              <Graph
                label="Ma courbe de gains"
                items={getResult(balanceSheet, resultRange) || 0}
                onPress={onPressResultRange}
                selected={resultRange}
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
          onPress={() => {
            setMore(!more)
          }}
        />
        <ProfileScreenTicketsHeaderContainer>
          <ProfileScreenTicketsHeaderText color={textColor}>Mes tickets</ProfileScreenTicketsHeaderText>
          <ProfileScreenTicketsIndicatorContainer backgroundColor={backgroundIndicatorColor}>
            <ProfileScreenTicketsIndicatorText color={ticketIndicatorColor}>{count}</ProfileScreenTicketsIndicatorText>
          </ProfileScreenTicketsIndicatorContainer>
        </ProfileScreenTicketsHeaderContainer>
      </>
    )
  }

  // sections list key extractor
  function _itemKeyExtractor(item) {
    return item.id.toString()
  }

  return (
    <ProfileScreenContainer backgroundColor={backgroundColor}>
      <ProfileScreenTicketsContentContainer>
        <SectionList
          initialNumToRender={1}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headerComponent()}
          sections={sortedTicketsBySections}
          contentContainerStyle={{paddingLeft: 20, paddingRight: 20, paddingTop: 12}}
          onMomentumScrollBegin={() => {
            setOnEndReachedCalledDuringMomentum(false)
          }}
          onEndReachedThreshold={1}
          keyExtractor={_itemKeyExtractor}
          onEndReached={({distanceFromEnd}) => {
            /* *
             * trigger onEndReached at the very bottom of the list
             * increment local state current page && refetch GraphQL tickets query with incremented variable page
             */

            if (distanceFromEnd >= 0.01) {
              if (currentPage < storeTotalPages && !onEndReachedCalledDuringMomentum) {
                setCurrentPage(currentPage + 1)
                isReachedEnd(currentPage + 1)
              }
            }
          }}
          renderItem={({item}) => {
            const {updatedDate, bets, globalOdd, stake, total, status} = item
            return (
              <Ticket
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
          stickySectionHeadersEnabled={false}
          renderSectionHeader={({section: {title, data}}) => {
            return (
              <>
                {!!data.length && title !== 'week' && (
                  <ProfileScreenTicketsSectionTitle color={textColor}>{t(title)}</ProfileScreenTicketsSectionTitle>
                )}
              </>
            )
          }}
        />
      </ProfileScreenTicketsContentContainer>
    </ProfileScreenContainer>
  )
}

export default withTheme(ProfileScreen)
