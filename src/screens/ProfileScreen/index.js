// @flow

import {getBankrolls} from '@api/graphql/queries/bankrolls'
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
import {getSectionsTickets} from './getSectionsTickets'
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
    auth: {nickname, description},
    bankrolls: {items: bankrolls},
    tickets: {items: tickets, count, currentPage: storeCurrentPage, totalPages: storeTotalPages},
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

  const {data: dataBankrolls, error: errorBankrolls} = useQuery(getBankrolls)
  const {data: dataTickets, fetchMore} = useQuery(getTickets, {
    variables: {page: storeCurrentPage === 1 ? 1 : storeCurrentPage + 1},
  })

  const {show} = useContext(ToastContext)

  const {t} = useTranslation()

  const dispatch = useDispatch()

  const {setBankrollsList, setCurrentBankroll, setTicketsList} = actions

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
   * handle GraphQL query error by displaying toast
   *
   * */
  useEffect(() => {
    if (errorBankrolls) {
      console.log('error', errorBankrolls)
      show({
        title: t('unknownErrorTitle'),
        message: t('unknownErrorDescription'),
        type: 'error',
      })
    }
  }, [errorBankrolls])

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
      console.log('dataTickets?.tickets', dataTickets?.tickets, currentPage)
      dispatch(setTicketsList(dataTickets?.tickets))
    }
  }, [dataTickets])

  // useEffect(() => {
  //   refetch(currentPage)
  //   if (dataMoreTickets?.tickets?.tickets && tickets.length) {
  //     console.log('dataMoreTickets?.tickets', dataMoreTickets?.tickets, currentPage)
  //     dispatch(setTicketsList(dataMoreTickets.tickets))
  //   }
  // }, [currentPage])

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

  /**
   * add current bankroll on store and filter stats && sections list only with bankroll tickets
   * stats filtering are handled on back-end
   */
  const onPressBankrollItem = index => {
    dispatch(setCurrentBankroll(bankrolls[index]))
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
