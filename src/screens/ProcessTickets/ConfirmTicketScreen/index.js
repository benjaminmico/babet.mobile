// @flow

import Filters from '@components/Filters'
import {withTheme} from '@core/themeProvider'
import React, {useEffect, useState} from 'react'
import {Image, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
import {
  ConfirmTicketBankrollSelectContainer,
  ConfirmTicketBankrollTitleHeader,
  ConfirmTicketScreenContainer,
  ConfirmTicketScreenImageItemPreview,
  ConfirmTicketScreenImagePreviewContainer,
} from './index.styles'

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
      texts: {text: textColor},
    },
  } = theme

  // const {updatedDate, bets, globalOdd, stake, total, status} = tickets[0]

  return (
    <ConfirmTicketScreenContainer>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <ConfirmTicketScreenImagePreviewContainer>
          {images.map((image, index) => {
            console.log('image', image)
            return (
              <ConfirmTicketScreenImageItemPreview isFirst={index === 0}>
                <Image
                  style={{flex: 1}}
                  source={{
                    uri: image.path,
                  }}
                />
              </ConfirmTicketScreenImageItemPreview>
            )
          })}
        </ConfirmTicketScreenImagePreviewContainer>
      </ScrollView>
      {/* <Ticket
        key={`${updatedDate}`}
        updatedDate={updatedDate}
        bets={bets}
        stake={stake}
        globalOdd={globalOdd}
        total={total}
        status={status}
      /> */}

      <ConfirmTicketBankrollSelectContainer backgroundColor={backgroundColor}>
        <ConfirmTicketBankrollTitleHeader color={textColor}>
          Dans quelle bankroll voulez-vous ajouter le ticket ?
        </ConfirmTicketBankrollTitleHeader>
        {bankrolls?.length > 0 && (
          <Filters items={bankrollsToSelect} onPress={onSelectBankroll} multiFilters horizontal />
        )}
      </ConfirmTicketBankrollSelectContainer>
    </ConfirmTicketScreenContainer>
  )
}

export default withTheme(ConfirmTicketScreen)
