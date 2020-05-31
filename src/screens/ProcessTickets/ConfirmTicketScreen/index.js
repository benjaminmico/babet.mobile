// @flow

import Filters from '@components/Filters'
import {withTheme} from '@core/themeProvider'
import React, {useEffect, useState} from 'react'
import {Image, ScrollView, FlatList, View} from 'react-native'
import {useSelector} from 'react-redux'
import {useNavigation} from '@react-navigation/native'

import {
  ConfirmTicketBankrollSelectContainer,
  ConfirmTicketBankrollTitleHeader,
  ConfirmTicketScreenContainer,
  ConfirmTicketScreenImageItemPreview,
  ConfirmTicketScreenImagePreviewContainer,
  ConfirmTicketScreenSendButton,
} from './index.styles'
import Ticket from '@components/Ticket'
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
    // tickets: {items: tickets},
  } = useSelector(state => state)

  const {goBack} = useNavigation()

  const [bankrollsToSelect, setBankrollsToSelect] = useState(bankrolls)

  useEffect(() => {}, [bankrollsToSelect])

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

  // const {updatedDate, bets, globalOdd, stake, total, status} = tickets[0]

  const updatedDate = 1588707873

  const stake = 15

  const globalOdd = 9.8

  const total = 147

  const status = 'pending'

  const bets = [
    {
      sport: 'football',
      localTeam: 'Marseille',
      visitorTeam: 'Paris SG',
      nameBet: 'Victoire ou nul de Marseille',
      odd: 1.3,
      status: 'pending',
    },
  ]

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
            key={`${updatedDate}`}
            updatedDate={updatedDate}
            bets={bets}
            stake={stake}
            globalOdd={globalOdd}
            total={total}
            status={status}
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
      <ConfirmTicketScreenSendButton backgroundColor={backgroundActionsContainer}>
        <Icon size={31} label="send" />
      </ConfirmTicketScreenSendButton>
    </View>
  )
}

export default withTheme(ConfirmTicketScreen)
