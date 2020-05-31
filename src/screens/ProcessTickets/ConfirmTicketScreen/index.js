// @flow

import Filters from '@components/Filters'
import {withTheme} from '@core/themeProvider'
import React, {useContext, useEffect, useState} from 'react'
import {Image, ScrollView, FlatList, View} from 'react-native'
import {useSelector, useDispatch} from 'react-redux'
import actions from '@store/actions'
import {useNavigation} from '@react-navigation/native'
import {useMutation} from '@apollo/react-hooks'
import {addTicket} from '@api/graphql/mutations/addTicket'
import {ToastContext} from '@components/Alerts/Toast/ToastContext'
import ticketsProps from '@utils/ticketsProps'
import {
  ConfirmTicketBankrollSelectContainer,
  ConfirmTicketBankrollTitleHeader,
  ConfirmTicketScreenContainer,
  ConfirmTicketScreenImageItemPreview,
  ConfirmTicketScreenImagePreviewContainer,
  ConfirmTicketScreenSendButton,
} from './index.styles'
import Ticket from '@components/Ticket'
import {useTranslation} from 'react-i18next'
import Icon from '@components/Icon'

type Props = {
  // images props
  images: Array,
  // theme props
  theme: Object,
}

const ConfirmTicketScreen = ({images, theme}: Props) => {
  const {
    bankrolls: {items: bankrolls},
    auth: {token},
  } = useSelector(state => state)

  // add store actions
  const {addTicket: addTicketAction} = actions

  const {t} = useTranslation()

  const dispatch = useDispatch()

  const [mutationAddTicket] = useMutation(addTicket)

  const {show} = useContext(ToastContext)

  const {goBack, navigate} = useNavigation()

  const [bankrollsToSelect, setBankrollsToSelect] = useState(bankrolls)

  useEffect(() => {}, [bankrollsToSelect])

  /**
   * Add a ticket
   * Execute mutation to add ticket
   * Update Store by adding ticket
   * @param {Object} ticket to add on database && store
   */
  const onAddTicket = async ticket => {
    console.log('ticket onadd', ticket)
    try {
      const {data, error} = await mutationAddTicket({
        variables: {bets: ticket.bets, stake: ticket.stake, bankrolls: ticket.bankrolls},
      })
      if (error && token) {
        show({
          title: t('unknownErrorTitle'),
          message: t('unknownErrorDescription'),
          type: 'error',
        })
      }
      dispatch(addTicketAction(data.addTicket))
      navigate('ProfileScreen')
    } catch (error) {
      console.log('error', error)
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

  const ticket = {
    bets: [
      {
        sport: 'football',
        localTeam: 'Marseille',
        visitorTeam: 'Paris SG',
        name: 'Victoire de Marseille',
        odd: 2.89,
        status: 'won',
        specialBet: false,
      },
      {
        sport: 'football',
        localTeam: 'Lyon',
        visitorTeam: 'Reims',
        name: 'Victoire de Reims',
        odd: 3.2,
        status: 'won',
        specialBet: false,
      },
      {
        sport: 'football',
        localTeam: 'Bordeaux',
        visitorTeam: 'Brest',
        name: 'Victoire ou nul de Brest',
        odd: 2.24,
        status: 'lost',
        specialBet: false,
      },
    ],
    stake: 10,
    bankrolls: [],
  }

  const ticketWithProps = ticketsProps(ticket)

  console.log('ticketsProps', ticketsProps(ticket))
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
            key={`${ticketWithProps.updatedDate}`}
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
      <ConfirmTicketScreenSendButton backgroundColor={backgroundActionsContainer} onPress={() => onAddTicket(ticket)}>
        <Icon size={31} label="send" />
      </ConfirmTicketScreenSendButton>
    </View>
  )
}

export default withTheme(ConfirmTicketScreen)
