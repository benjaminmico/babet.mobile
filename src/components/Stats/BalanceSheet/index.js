/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/jsx-one-expression-per-line */
// @flow

import {withTheme} from '@core/themeProvider'
import React from 'react'
import {currency} from '@utils/currency'
import Filters from '@components/Filters'
import {
  BalanceSheetContainer,
  BalanceSheetContentContainer,
  BalanceSheetLabel,
  BalanceSheetValue,
  BalanceSheetDescription,
  BalanceSheetFilters,
} from './index.styles'

type Props = {
  // Balance sheet value
  value: Number,
  // Balance sheet description
  description: String,
  // Selected balance sheet fitler item
  selected: Boolean,
  // theme
  theme: Object,
}

const BalanceSheet = ({value, description, selected, theme, onPress}: Props) => {
  const filters = [
    {id: 'week', label: '1 sem.', selected: selected === 'week'},
    {id: 'month', label: '1 mois', selected: selected === 'month'},
    {id: 'all', label: 'Début', selected: selected === 'all'},
  ]
  // get theme props
  const {
    key: keyTheme,
    colors: {
      components: {backgroundContainer: backgroundContainerColor},
      texts: {text: textColor, description: descriptionColor},
      palette: {won: wonBackgroundColor, lost: lostBackgroundColor},
    },
  } = theme

  /**
   * render game button
   * text can only be de displayed on one line
   * */
  return (
    <BalanceSheetContainer backgroundColor={backgroundContainerColor} theme={keyTheme}>
      <BalanceSheetContentContainer>
        <BalanceSheetLabel color={textColor}>Mon bilan</BalanceSheetLabel>
        <BalanceSheetValue color={value > 0 ? wonBackgroundColor : lostBackgroundColor}>
          {currency(value)}
        </BalanceSheetValue>
        <BalanceSheetDescription color={descriptionColor}>{description}</BalanceSheetDescription>
      </BalanceSheetContentContainer>
      <BalanceSheetFilters>
        <Filters items={filters} onPress={onPress} />
      </BalanceSheetFilters>
    </BalanceSheetContainer>
  )
}

export default withTheme(BalanceSheet)
