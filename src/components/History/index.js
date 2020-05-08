// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {HistoryContainer, HistoryItemContainer, HistoryBar, HistoryItem} from './index.styles'

type Props = {
  // input label
  items: [String],
  // theme
  theme: Object,
}

const History = ({items, theme, ...props}: Props) => {
  // get theme props
  const {
    colors: {
      palette: {line: backgroundLineColor, won: backgroundWonColor, lost: backgroundLostColor},
    },
  } = theme

  // render input
  return (
    <HistoryContainer {...props}>
      <HistoryItemContainer>
        {items.map((item, index) => {
          return (
            <HistoryItem
              // eslint-disable-next-line react/no-array-index-key
              key={index + item}
              marginLeft={index !== 0}
              color={item === 'won' ? backgroundWonColor : backgroundLostColor}
            />
          )
        })}
      </HistoryItemContainer>
      <HistoryBar itemsLength={items.length} color={backgroundLineColor} />
    </HistoryContainer>
  )
}

export default withTheme(History)
