// @flow

import {addTicket} from '@api/graphql/mutations/addTicket'
import {getUserStats} from '@api/graphql/queries/stats'
import {useMutation, useQuery} from '@apollo/react-hooks'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'
import Filters from '@components/Filters'
import Icon from '@components/Icon'
import Ticket from '@components/Ticket'
import {withTheme} from '@core/themeProvider'
import {useNavigation} from '@react-navigation/native'
import actions from '@store/actions'
import ticketsProps from '@utils/ticketsProps'
import React, {useContext, useEffect, useState} from 'react'
import {useTranslation} from 'react-i18next'
import {ActivityIndicator, FlatList, Image, ScrollView, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import {
  ConfirmTicketBankrollSelectContainer,
  ConfirmTicketBankrollTitleHeader,
  ConfirmTicketScreenContainer,
  ConfirmTicketScreenImageItemPreview,
  ConfirmTicketScreenImagePreviewContainer,
  ConfirmTicketScreenSendButton,
} from './index.styles'
import processOCR from '@utils/processOCR'

type Props = {
  // route from react-navigation
  route: Object,
  // theme props
  theme: Object,
}

const ConfirmTicketScreen = ({route, theme}: Props) => {
  const {
    bankrolls: {items: bankrolls},
    auth: {token},
  } = useSelector(state => state)

  const {images} = route.params

  // bankrolls to select when adding a ticket
  const [bankrollsToSelect, setBankrollsToSelect] = useState(bankrolls)
  // set loading when tapping on sending ticket
  const [loading, setLoading] = useState(false)
  // value to check if ticket was added correctly
  const [ticketAdded, setTicketAdded] = useState(false)
  const [ticketFromOCR, setTicketFromOCR] = useState([])

  // actions
  const {addTicket: addTicketAction, updateStats: updateStatsAction} = actions

  const {t} = useTranslation()
  const dispatch = useDispatch()

  // graphQL mutation to add ticket
  const [mutationAddTicket] = useMutation(addTicket)

  const {show} = useContext(ToastContext)
  const {goBack, navigate} = useNavigation()

  // graphQL query to update stats just after adding a ticket
  const {data: dataStats, error: errorStats} = useQuery(getUserStats)

  async function getOCRTicket() {
    const data = await processOCR(
      images.map(image => {
        return `file://${image.path}`
      })[0],
    )

    setTicketFromOCR(data)
  }

  useEffect(() => {
    getOCRTicket()
  }, [])
  /**
   * when a ticket is added : update stats
   * navigate to Profile with updated stats && a new added ticket
   */
  useEffect(() => {
    if (ticketAdded) {
      dispatch(updateStatsAction(dataStats.stats))
      navigate('ProfileScreen')
    }
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
   * Add a ticket
   * Execute mutation to add ticket && add to store
   * Update Store by adding ticket
   * @param {Object} ticket to add on database && store
   */
  const onAddTicket = async ticket => {
    try {
      setLoading(true)
      const {data, error} = await mutationAddTicket({
        variables: {
          bets: ticket.bets,
          stake: ticket.stake,
          bankrolls: ticket.bankrolls,
        },
      })
      if (error && token) {
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
        })
      }
      await dispatch(addTicketAction(data.addTicket))
      setTicketAdded(true)
    } catch (error) {
      if (token) {
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
        })
      }
    }
  }

  /**
   * toggle balance sheet filters and display the right value between 'week', 'month' & 'all
   */
  const onSelectBankroll = id => {
    const bankrollsToUpdate = bankrollsToSelect

    const bankrollToSelectIndex = bankrolls.findIndex(bankroll => bankroll.id === id)

    bankrollsToUpdate[bankrollToSelectIndex] = {
      ...bankrollsToUpdate[bankrollToSelectIndex],
      selected: !bankrollsToUpdate[bankrollToSelectIndex].selected,
    }
    setBankrollsToSelect([...bankrollsToUpdate])
  }

  // get theme props
  const {
    backgroundColor,
    colors: {
      texts: {
        text: textColor,
        buttons: {actions: backgroundActionsContainer},
      },
    },
  } = theme

  // const ticket = {
  //   bets: [
  //     {
  //       sport: 'football',
  //       localTeam: 'Marseille',
  //       visitorTeam: 'Paris SG',
  //       name: 'Victoire de Marseille',
  //       odd: 2.89,
  //       status: 'won',
  //       specialBet: false,
  //     },
  //     {
  //       sport: 'football',
  //       localTeam: 'Lyon',
  //       visitorTeam: 'Reims',
  //       name: 'Victoire de Reims',
  //       odd: 3.2,
  //       status: 'won',
  //       specialBet: false,
  //     },
  //     {
  //       sport: 'football',
  //       localTeam: 'Bordeaux',
  //       visitorTeam: 'Brest',
  //       name: 'Victoire ou nul de Brest',
  //       odd: 2.24,
  //       status: 'lost',
  //       specialBet: false,
  //     },
  //   ],
  //   stake: 1000,
  //   bankrolls: [],
  // }
  console.log('ticketFromOCR', ticketFromOCR)
  const ticket = {
    bets: ticketFromOCR,
    stake: 0.01,
    bankrolls: [],
  }

  const ticketWithProps = ticketsProps(ticket)

  // sections list key extractor
  function _itemKeyExtractor(item) {
    return item.localIdentifier
  }

  return (
    <View style={{backgroundColor: 'black', flex: 1}}>
      <ScrollView>
        <ConfirmTicketScreenContainer>
          <ConfirmTicketScreenImagePreviewContainer>
            <FlatList
              horizontal
              data={images}
              keyExtractor={_itemKeyExtractor}
              renderItem={({item, index}) => {
                return (
                  <ConfirmTicketScreenImageItemPreview isFirst={index === 0}>
                    <Image
                      style={{flex: 1}}
                      source={{
                        uri: item.path,
                      }}
                    />
                  </ConfirmTicketScreenImageItemPreview>
                )
              }}
            />
          </ConfirmTicketScreenImagePreviewContainer>
          <Ticket
            updatedDate={ticketWithProps.updatedDate}
            bets={ticketWithProps.bets}
            stake={ticketWithProps.stake}
            globalOdd={ticketWithProps.globalOdd}
            total={ticketWithProps.total}
            status={ticketWithProps.status}
          />

          <ConfirmTicketBankrollSelectContainer backgroundColor={backgroundColor}>
            <ConfirmTicketBankrollTitleHeader color={textColor}>
              Dans quelle bankroll voulez-vous ajouter le ticket ?
            </ConfirmTicketBankrollTitleHeader>
            {bankrolls?.length > 0 && (
              <Filters items={bankrollsToSelect} onPress={onSelectBankroll} multiFilters horizontal />
            )}
          </ConfirmTicketBankrollSelectContainer>
        </ConfirmTicketScreenContainer>
      </ScrollView>
      <Icon
        size={20}
        onPress={() => goBack()}
        label="close"
        style={{
          position: 'absolute',
          top: 55,
          left: 20,
        }}
      />
      {loading ? (
        <ConfirmTicketScreenSendButton backgroundColor="transparent">
          <ActivityIndicator size="large" />
        </ConfirmTicketScreenSendButton>
      ) : (
        <ConfirmTicketScreenSendButton backgroundColor={backgroundActionsContainer} onPress={() => onAddTicket(ticket)}>
          <Icon size={31} label="send" />
        </ConfirmTicketScreenSendButton>
      )}
    </View>
  )
}

export default withTheme(ConfirmTicketScreen)
