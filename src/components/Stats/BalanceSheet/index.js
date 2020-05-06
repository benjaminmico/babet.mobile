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
  // theme
  theme: Object,
}

const filters = [
  {label: '1 sem.', selected: true},
  {label: '1 mois', selected: false},
  {label: 'Début', selected: false},
]

const BalanceSheet = ({value, description, theme}: Props) => {
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
        <Filters items={filters} />
      </BalanceSheetFilters>
    </BalanceSheetContainer>
  )
}

export default withTheme(BalanceSheet)
